import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ChatBubble from "@/components/ChatBubble";

export const metadata: Metadata = {
	title: {
		default: "Marco Chavez Jr — Senior Full-Stack Engineer",
		template: "%s · Marco Chavez Jr",
	},
	description:
		"Senior Full-Stack Engineer specializing in TypeScript, React, and Node.js. 6+ years building scalable, accessible products that improve performance, conversions, and team velocity.",
	metadataBase: new URL("https://marcochavez.work"),
	openGraph: {
		title: "Marco Chavez Jr — Senior Full-Stack Engineer",
		description:
			"Senior Full-Stack Engineer specializing in TypeScript, React, and Node.js. 6+ years building scalable, accessible products.",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
	},
	robots: "index,follow",
	other: {
		"theme-color": "#0a1628",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>
				<Navbar />
				<main>{children}</main>
				<ChatBubble />
			</body>
		</html>
	);
}
