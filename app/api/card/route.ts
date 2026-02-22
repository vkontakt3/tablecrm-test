import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
	try {
		const body = await req.json();

		const res = await axios.post(
			`${process.env.TABLECRM_API_URL}?token=${process.env.TABLECRM_TOKEN}`,
			body,
			{
				headers: {
					"Content-Type": "application/json",
				},
				timeout: 10000,
			},
		);

		return NextResponse.json(res.data, { status: 201 });
	} catch (error: any) {
		console.error("TABLECRM ERROR:", error?.response?.data);

		return NextResponse.json(
			{
				message: "Ошибка при создании товара",
				error: error?.response?.data ?? null,
			},
			{ status: 400 },
		);
	}
}
