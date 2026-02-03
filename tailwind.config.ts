import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: "class",
	content: [
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				blueprint: {
					bg: "#1a3a5c",
					"bg-light": "#2a4a6c",
					grid: "#3a5a7c",
					text: "#ffffff",
					"text-dim": "#c8d8e8",
					accent: "#1e90ff", // dodgerblue
					"accent-light": "#4aa8ff",
				},
			},
			fontFamily: {
				sketch: ["Architects Daughter", "cursive"],
				mono: ["JetBrains Mono", "monospace"],
			},
		},
	},
	plugins: [],
};

export default config;
