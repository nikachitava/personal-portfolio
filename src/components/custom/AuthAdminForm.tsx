import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";
import CustomFormField from "./CustomFormField";
import { adminAuthContext } from "@/context/adminAuthContext";
import { useContext } from "react";

const formSchema = z.object({
	email: z.string().min(1, {
		message: "Email is required field",
	}),
	password: z
		.string()
		.min(2, { message: "Password must be at least 2 characters." }),
});

const AuthAdminForm = () => {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	});

	const { authAdmin, isAuthenticated } = useContext(adminAuthContext);

	const onSubmit = async (values: z.infer<typeof formSchema>) => {
		try {
			if (!isAuthenticated) {
				await authAdmin(values.email, values.password);
			}
		} catch (error: any) {
			if (error.message === "INVALID_EMAIL") {
				form.setError("email", {
					type: "manual",
					message: "Enter correct email",
				});
			}
			if (error.message === "INVALID_PASSWORD") {
				form.setError("password", {
					type: "manual",
					message: "Enter valid password",
				});
			}
		}
	};

	return (
		<div className="min-h-screen flex items-center justify-center">
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className="space-y-8 text-heading min-w-[400px] font-DMSans dark:text-solidHeadingDarkMode"
				>
					<h1 className="font-Poppins text-center text-2xl text-heading font-bold dark:text-solidHeadingDarkMode">
						Admin Authorization
					</h1>
					<CustomFormField
						control={form.control}
						name="email"
						label="Email"
					/>
					<CustomFormField
						control={form.control}
						name="password"
						label="Password"
						type="password"
					/>
					<Button type="submit" className="w-full">
						Submit
					</Button>
				</form>
			</Form>
		</div>
	);
};

export default AuthAdminForm;
