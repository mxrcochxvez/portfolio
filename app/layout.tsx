import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrainsMono = JetBrains_Mono({
	subsets: ["latin"],
	variable: "--font-jetbrains",
});

export const metadata: Metadata = {
	title: {
		default: "Marco Chavez Jr — Senior Full-Stack Engineer",
		template: "%s · Marco Chavez Jr",
	},
	description:
		"Senior Full-Stack Engineer specializing in TypeScript, React, and Node.js. Building premium digital experiences.",
	metadataBase: new URL("https://marcochavez.work"),
	openGraph: {
		title: "Marco Chavez Jr — Senior Full-Stack Engineer",
		description:
			"Senior Full-Stack Engineer specializing in TypeScript, React, and Node.js. Building premium digital experiences.",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
	},
	robots: "index,follow",
	other: {
		"theme-color": "#050505",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className="dark scroll-smooth">
			<body
				className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased bg-premium-bg text-premium-text min-h-screen selection:bg-premium-accent selection:text-white overflow-x-hidden`}
			>
				<div className="fixed inset-0 z-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#1a1a1a] via-premium-bg to-premium-bg opacity-60" />
				
				<Navbar />
				<main className="relative z-10 flex flex-col min-h-screen">{children}</main>
			</body>
		</html>
	);
}
