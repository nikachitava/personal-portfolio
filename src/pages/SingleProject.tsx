import { IProjectCardProps } from "@/types/IProjectCardProps";
import { useAxios } from "@/utils/useAxios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const SingleProject = () => {
	const { id } = useParams();
	const [project, setProject] = useState<IProjectCardProps | null>(null);

	const [previewImage, setPreviewImage] = useState(project?.image[0]);

	const fetchProjectData = async () => {
		try {
			const projectData = await useAxios.get(`/projects/${id}`);
			setProject(projectData.data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		fetchProjectData();
	}, []);

	useEffect(() => {
		if (project?.image?.length) {
			setPreviewImage(project.image[0]);
		}
	}, [project]);

	const changePreviewImage = (imageLink: string) => {
		setPreviewImage(imageLink);
	};

	return (
		<section>
			{project && (
				<div className="space-y-10">
					<h1 className="text-3xl text-heading dark:text-solidHeadingDarkMode">
						{project.name}
					</h1>
					<hr />
					<div className="flex flex-col lg:flex-row gap-4 ">
						<img
							src={previewImage}
							alt={previewImage}
							className="w-full lg:w-[80%] rounded-lg"
						/>
						<div className="grid grid-cols-3 lg:grid-cols-1 h-[500px] p-2 overflow-auto gap-4">
							{project.image.map((image, index) => (
								<img
									key={index}
									src={image}
									alt={project.name}
									className="rounded-lg cursor-pointer"
									onClick={() => changePreviewImage(image)}
								/>
							))}
						</div>
					</div>

					<hr />
					<div className="space-y-5">
						<p className="text-lg text-heading dark:text-solidHeadingDarkMode font-bold">
							Tech Stack:{" "}
							<span className="underline underline-offset-4 font-normal">
								{project.tech_stack}
							</span>
						</p>
						<p className="text-lg text-heading dark:text-solidHeadingDarkMode">
							{project.description}
						</p>
						<div className="flex items-center gap-10">
							<div className="flex items-center gap-3">
								<img
									src="/images/icons/linkicon.svg"
									alt="link_icon"
								/>
								<Link to={project.live_link}>
									<p className="font-Poppins text-black underline dark:text-white">
										Live Preview
									</p>
								</Link>
							</div>
							<div className="flex items-center gap-3">
								<img
									src="/images/icons/git2.svg"
									alt="link_icon"
								/>
								<Link to={project.github_link}>
									<p className="font-Poppins text-black underline dark:text-white">
										Github Code
									</p>
								</Link>
							</div>
						</div>
					</div>
				</div>
			)}
		</section>
	);
};

export default SingleProject;
