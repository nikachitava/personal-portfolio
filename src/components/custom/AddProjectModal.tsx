import { ModalContext } from "@/context/ModalContext";
import { useContext, useState } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";
import CustomFormField from "./CustomFormField";
import CustomTextArea from "./CustomTextArea";
import uploadImageToFirebase from "@/firebase/uploadImageToFirebase";
import { useNavigate } from "react-router-dom";
import { useAxios } from "@/utils/useAxios";

const formSchema = z.object({
	name: z.string().min(2, {
		message: "Name must be at least 2 characters.",
	}),

	tech_stack: z.string().min(2, {
		message: "Tech Stack must be at least 2 characters.",
	}),

	description: z
		.string()
		.min(10, { message: "Password must be at least 10 characters." }),

	github_link: z.string().min(2, {
		message: "Github link must be at least 2 characters.",
	}),

	live_link: z.string().min(2, {
		message: "Live link must be at least 2 characters.",
	}),
	image: z.any(),
});

const AddProjectModal = () => {
	const { toggleModal } = useContext(ModalContext);
	const [imagesPreview, setImagesPreview] = useState<string[] | null>(null);

	const navigate = useNavigate();

	const handleImagesChange = (files: FileList | null) => {
		if (files) {
			const fileArray = Array.from(files).slice(0, 5);
			const previews = fileArray.map((file) => URL.createObjectURL(file));
			setImagesPreview(previews);
		} else {
			setImagesPreview([]);
		}
	};

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: "",
			description: "",
			tech_stack: "",
			github_link: "",
			live_link: "",
			image: [""],
		},
	});

	const onSubmit = async (values: z.infer<typeof formSchema>) => {
		try {
			const imagesUrl: string[] = [];

			if (values.image) {
				for (const file of values.image) {
					const downloadUrl = await uploadImageToFirebase(file);
					imagesUrl.push(downloadUrl);
				}
			}

			const payload = {
				name: values.name,
				description: values.description,
				tech_stack: values.tech_stack,
				github_link: values.github_link,
				live_link: values.live_link,
				image: imagesUrl,
			};

			await useAxios.post("/projects/addproject", payload);
			toggleModal();
			navigate("/admin");
		} catch (error) {
			console.error("Error creating project:", error);
		}
	};

	return (
		<div className="absolute min-h-screen w-full z-10 flex items-center justify-center visible bg-black/20 backdrop-blur-sm p-4">
			<div className="min-w-[300px] w-[800px] bg-[#f5f5f5] dark:bg-darkContent p-10 animate__animated animate__bounceInDown rounded-2xl">
				<div className="flex justify-end ">
					<IoCloseCircleOutline
						size={30}
						onClick={toggleModal}
						className="cursor-pointer mb-10"
					/>
				</div>

				<div>
					<Form {...form}>
						<form
							onSubmit={form.handleSubmit(onSubmit)}
							className="space-y-8 text-heading  font-DMSans dark:text-solidHeadingDarkMode"
						>
							<h1 className="font-Poppins text-center text-xl text-heading  dark:text-solidHeadingDarkMode">
								Create New Project
							</h1>
							<div className="flex flex-col lg:flex-row items-center justify-between gap-10">
								<CustomFormField
									control={form.control}
									name="name"
									label="Project Name"
								/>
								<CustomFormField
									control={form.control}
									name="tech_stack"
									label="Used Technologies"
								/>
							</div>
							<div className="flex flex-col lg:flex-row items-center justify-between gap-10">
								<CustomFormField
									control={form.control}
									name="github_link"
									label="Github Source Link"
								/>
								<CustomFormField
									control={form.control}
									name="live_link"
									label="Live Preview Link"
								/>
							</div>
							<CustomTextArea
								control={form.control}
								name="description"
								label="Project Description"
							/>
							<div>
								<CustomFormField
									control={form.control}
									name="image"
									label="Image"
									type="file"
									placeholder="Vehicle Images"
									onChange={handleImagesChange}
								/>

								{imagesPreview && (
									<div className="border border-dotted p-10 flex items-center gap-10">
										{imagesPreview.map((preview, index) => (
											<img
												key={index}
												src={preview}
												alt={`Preview ${index + 1}`}
												className="h-20 w-20 object-cover rounded"
											/>
										))}
									</div>
								)}
							</div>
							<Button type="submit" className="w-full h-12">
								Submit
							</Button>
						</form>
					</Form>
				</div>
			</div>
		</div>
	);
};

export default AddProjectModal;
