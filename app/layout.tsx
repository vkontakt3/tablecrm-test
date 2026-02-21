import { Montserrat, Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const montserrat = Montserrat({
	subsets: ["latin"],
	variable: "--font-heading",
	weight: ["400", "600", "700"], // регулируем жирность
});

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-body",
	weight: ["400", "500", "600"],
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={`${montserrat.variable} ${inter.variable} antialiased`}>
				{children}
				<Toaster />
			</body>
		</html>
	);
}
