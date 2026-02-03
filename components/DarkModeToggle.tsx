"use client";

import { useState, useEffect } from "react";

export default function DarkModeToggle() {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return (
			<div className="fixed top-4 right-4 w-12 h-12 rounded-full bg-blueprint-bg-light border-2 border-dashed border-blueprint-text-dim opacity-50" />
		);
	}

	return (
		<button
			className="fixed top-4 right-4 w-12 h-12 flex items-center justify-center rounded-full 
                 bg-blueprint-bg-light border-2 border-dashed border-blueprint-text-dim
                 hover:border-blueprint-accent hover: transition-all duration-300
                 text-2xl z-50"
			aria-label="Blueprint mode active"
			title="Blueprint mode"
		>
			📐
		</button>
	);
}
