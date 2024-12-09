import {
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Control } from "react-hook-form";
import { Textarea } from "../ui/textarea";

interface ICustomFormFieldProps {
	control: Control<any>;
	name: string;
	label?: string;
	description?: string;
	placeholder?: string;
	type?: string;
}

const CustomTextArea = ({
	control,
	label,
	name,
	description,
	placeholder,
}: ICustomFormFieldProps) => {
	return (
		<FormField
			control={control}
			name={name}
			render={({ field }) => (
				<FormItem>
					<FormLabel>{label}</FormLabel>
					<FormControl>
						<Textarea
							{...field}
							placeholder={placeholder}
							className="resize-none"
						/>
					</FormControl>
					<FormDescription>{description}</FormDescription>
					<FormMessage />
				</FormItem>
			)}
		/>
	);
};

export default CustomTextArea;
