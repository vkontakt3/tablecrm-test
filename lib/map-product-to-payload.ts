import { ProductData } from "@/schemas/zod";

export function mapProductToPayload(data: ProductData) {
	return [
		{
			name: data.name,
			type: "product",
			description_short: data.description_short,
			description_long: data.description_long,
			code: data.code,
			unit: data.unit,
			category: data.category,
			cashback_type: data.cashback_type,
			seo_title: data.seo_title ?? "",
			seo_description: data.seo_description ?? "",
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
}
