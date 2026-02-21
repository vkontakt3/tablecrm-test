"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
	CardDescription,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import FormField from "@/components/form-field";
import { zodResolver } from "@hookform/resolvers/zod";
import { productSchema, ProductData } from "@/schemas/zod";
import toast from "react-hot-toast";

interface Props {
	className?: string;
}

export default function Create({ className }: Props) {
	const {
		register,
		handleSubmit,
		setValue,
		formState: { errors },
	} = useForm<ProductData>({
		resolver: zodResolver(productSchema),
		defaultValues: {
			unit: 116,
			marketplace_price: 500,
			category: 2477,
			cashback_type: "lcard_cashback",
			global_category_id: 127,
			chatting_percent: 4,
			address: "улица Зайцева 8, Ново-Татарская слобода, Казань, TT, Россия",
			latitude: 55.7711953,
			longitude: 49.10211794999999,
		},
	});

	const onSubmit: SubmitHandler<ProductData> = (data) => {
		try {
			const payload = [
				{
					name: data.name,
					type: "product",
					description_short: data.description_short,
					description_long: data.description_long,
					code: data.code,
					unit: data.unit,
					category: data.category,
					cashback_type: data.cashback_type,
					seo_title: data.seo_title || "",
					seo_description: data.seo_description,
					seo_keywords: (data.seo_keywords ?? "")
						.split(",")
						.map((kw) => kw.trim())
						.filter(Boolean),
					global_category_id: data.global_category_id,
					marketplace_price: data.marketplace_price,
					chatting_percent: data.chatting_percent,
					address: data.address,
					latitude: data.latitude,
					longitude: data.longitude,
				},
			];

			if (data.marketplace_price > 0) {
				toast.success("Товар успешно создан 🚀");
				console.log(payload);
			} else {
				toast.error("Цена должна быть больше 0");
			}
		} catch (error) {
			toast.error("Произошла ошибка при создании товара");
			console.error(error);
		}
	};

	return (
		<div className={`min-h-screen bg-slate-50 p-6 sm:p-10 ${className}`}>
			<Card className="max-w-3xl mx-auto shadow-lg">
				<CardHeader>
					<CardTitle className="text-2xl">Создание товара</CardTitle>
					<CardDescription>
						Заполните форму для добавления нового товара
					</CardDescription>
				</CardHeader>
				<form onSubmit={handleSubmit(onSubmit)}>
					<CardContent className="space-y-6">
						<FormField
							id="name"
							label="Название товара"
							placeholder="Введите название"
							register={register}
							error={errors.name}
						/>

						<FormField
							id="description_short"
							label="Краткое описание"
							placeholder="Краткое описание"
							type="textarea"
							register={register}
							error={errors.description_short}
						/>

						<FormField
							id="description_long"
							label="Полное описание"
							placeholder="Подробное описание"
							type="textarea"
							register={register}
							error={errors.description_long}
						/>

						<FormField
							id="code"
							label="Код товара (Артикул)"
							placeholder="12345"
							register={register}
							error={errors.code}
							button={{
								text: "Сгенерировать артикул",
								onClick: () => {
									const newCode = Math.floor(
										10000 + Math.random() * 90000,
									).toString();
									setValue("code", newCode);
									toast.success(`Сгенерирован артикул: ${newCode}`);
								},
							}}
						/>

						<FormField
							id="marketplace_price"
							label="Цена"
							placeholder="500"
							type="number"
							register={register}
							error={errors.marketplace_price}
						/>

						<div className="space-y-1">
							<Label htmlFor="category">Категория</Label>
							<Select>
								<SelectTrigger>
									<SelectValue placeholder="Выберите категорию" />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="2477">Бытовая техника</SelectItem>
								</SelectContent>
							</Select>
						</div>

						<FormField
							id="seo_title"
							label="SEO название"
							placeholder="SEO название"
							register={register}
						/>

						<FormField
							id="seo_description"
							label="SEO описание"
							placeholder="SEO описание"
							type="textarea"
							register={register}
						/>

						<FormField
							id="seo_keywords"
							label="SEO ключевые слова (через запятую)"
							placeholder="товар, маркетплейс, купить"
							register={register}
						/>

						<FormField
							id="address"
							label="Адрес"
							placeholder="улица Зайцева 8, Казань"
							register={register}
							error={errors.address}
						/>
					</CardContent>

					<CardFooter className="flex justify-end">
						<Button
							type="submit"
							className="cursor-pointer mt-4.5 bg-[#6163ffe6] hover:bg-[#5052d1] active:bg-[#3f42b3] text-white transition-colors duration-200"
						>
							Создать товар
						</Button>
					</CardFooter>
				</form>
			</Card>
		</div>
	);
}
