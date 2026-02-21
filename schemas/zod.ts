import { z } from "zod";

export const productSchema = z.object({
	name: z.string().min(1, "Название обязательно"),
	description_short: z
		.string()
		.min(1, "Краткое описание обязательно")
		.max(40, "Максимум 40 символов"),
	description_long: z.string().min(1, "Полное описание обязательно"),
	code: z.string().min(1, "Код товара обязателен"),
	unit: z.number(),
	category: z.number(),
	cashback_type: z.string(),
	seo_title: z.string().optional().or(z.literal("")),
	seo_description: z.string().optional(),
	seo_keywords: z.string().optional(),
	global_category_id: z.number(),
	marketplace_price: z.number().min(1, "Цена обязательна"),
	chatting_percent: z.number(),
	address: z.string().min(1, "Адрес обязателен"),
	latitude: z.number(),
	longitude: z.number(),
});

export type ProductData = z.infer<typeof productSchema>;
