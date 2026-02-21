import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
	return (
		<main className="min-h-screen bg-slate-50 px-6 py-10 text-slate-900">
			<div className="mx-auto flex w-full max-w-6xl flex-col gap-10">
				<section className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
					<p className="mb-3 inline-block rounded-full bg-[#6163ffe6] px-3 py-1 text-sm font-medium text-[#ffffff]">
						New
					</p>
					<h1 className="max-w-2xl text-4xl font-bold leading-tight sm:text-5xl">
						TableCRM
					</h1>
					<p className="mt-4 max-w-2xl text-base text-slate-600 sm:text-lg">
						Тестовое задание для TableCRM
					</p>
					<p className="mt-4 max-w-2xl text-base text-slate-600 sm:text-lg">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
						minima! Libero, ullam sunt facere dolore vel labore magnam dolorem
						neque!
					</p>

					<div className="mt-8 flex flex-wrap gap-3">
						<Link
							href="/create"
							className="group inline-flex items-center rounded-lg bg-[#6163ffe6] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#616bffe6]"
						>
							<div className="flex items-center gap-2">
								Создать товар
								<ArrowRight
									size={18}
									className="transition-transform duration-200 group-hover:translate-x-1"
								/>
							</div>
						</Link>
						<Link
							href="#"
							className="inline-flex items-center rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-100"
						>
							Перейти в каталог
						</Link>
					</div>
				</section>

				<section
					id="catalog"
					className="cursor-pointer grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
				>
					{[
						{
							title: "Популярные товары",
							description:
								"Хиты продаж с высоким рейтингом и быстрой доставкой.",
						},
						{
							title: "Гибкие акции",
							description: "Создавайте скидки и промокоды для роста конверсии.",
						},
						{
							title: "Удобное управление",
							description:
								"Простая админка для редактирования карточек товаров.",
						},
					].map((item) => (
						<div
							key={item.title}
							className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200 
            hover:ring-slate-300 transform transition duration-300 
            hover:scale-105"
						>
							<h2 className="text-xl font-semibold">{item.title}</h2>
							<p className="mt-2 text-sm text-slate-600">{item.description}</p>
						</div>
					))}
				</section>
			</div>
		</main>
	);
}
