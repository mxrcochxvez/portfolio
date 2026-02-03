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
				premium: {
					bg: "#050505", // Deepest obsidian
					card: "#0a0a0a", // Charcoal
					"card-hover": "#111111",
					border: "#222222",
					text: "#e0e0e0", // Silver-white
					"text-dim": "#888888", // Muted silver
					accent: "#2962ff", // Electric Blue (BMW-like)
					"accent-dark": "#0039cb",
					glow: "rgba(41, 98, 255, 0.5)",
				},
			},
			fontFamily: {
				sans: ["var(--font-inter)", "sans-serif"],
				mono: ["var(--font-jetbrains)", "monospace"],
			},
			backgroundImage: {
				"metal-gradient": "linear-gradient(145deg, #1a1a1a 0%, #0a0a0a 100%)",
				"shine": "linear-gradient(45deg, transparent 25%, rgba(255,255,255,0.05) 50%, transparent 75%)",
			},
			boxShadow: {
				"glow": "0 0 20px -5px rgba(41, 98, 255, 0.3)",
			}
		},
	},
	plugins: [],
};

export default config;
