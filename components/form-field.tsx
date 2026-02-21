// components/form-field.tsx
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface FormFieldProps {
	id: string;
	label: string;
	placeholder?: string;
	type?: "text" | "number" | "textarea";
	register: any;
	error?: any;
	button?: {
		text: string;
		onClick: () => void;
	};
}

export default function FormField({
	id,
	label,
	placeholder,
	type = "text",
	register,
	error,
	button,
}: FormFieldProps) {
	return (
		<div className="space-y-1">
			<Label htmlFor={id}>{label}</Label>

			{type === "textarea" ? (
				<Textarea id={id} {...register(id)} placeholder={placeholder} />
			) : (
				<div className="relative">
					<Input
						id={id}
						type={type}
						{...register(id, { valueAsNumber: type === "number" })}
						placeholder={placeholder}
						className={button ? "pr-20" : ""} // оставляем место под кнопку
					/>
					{button && (
						<button
							type="button"
							onClick={button.onClick}
							className="absolute right-1 top-1/2 -translate-y-1/2 px-3 py-1 text-sm font-medium text-white rounded bg-[#6163ffe6] hover:bg-[#5052d1] active:bg-[#3f42b3] transition"
						>
							{button.text}
						</button>
					)}
				</div>
			)}

			{error && <p className="text-red-500 text-sm">{error.message}</p>}
		</div>
	);
}
