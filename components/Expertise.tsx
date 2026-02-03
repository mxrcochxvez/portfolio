"use client";

import React from "react";

const Expertise = () => {
	const expertiseAreas = [
		{
			title: "System Architecture",
			description:
				"Designing fault-tolerant, high-availability systems that scale effortlessly. I don't just write code; I engineer resilient digital ecosystems.",
			icon: (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={1.5}
					stroke="currentColor"
					className="w-8 h-8"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
					/>
				</svg>
			),
		},
		{
			title: "Performance Optimization",
			description:
				"Obsessed with milliseconds. I optimize rendering paths, bundle sizes, and server response times to ensure instant interactivity and seamless user journeys.",
			icon: (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={1.5}
					stroke="currentColor"
					className="w-8 h-8"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
					/>
				</svg>
			),
		},
		{
			title: "Product Strategy",
			description:
				"Bridging the gap between engineering and business goals. I translate complex requirements into elegant technical solutions that drive conversion and retention.",
			icon: (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={1.5}
					stroke="currentColor"
					className="w-8 h-8"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
					/>
				</svg>
			),
		},
	];

	return (
		<section className="py-24 relative overflow-hidden" id="expertise">
			{/* Background ambient glow */}
			<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-premium-accent/5 blur-[120px] rounded-full pointer-events-none" />

			<div className="max-w-6xl mx-auto px-6 relative z-10">
				<div className="mb-16 md:mb-24">
					<h2 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70 tracking-tight">
						The Last Engineer You'll Hire.
					</h2>
					<p className="text-xl text-premium-text-dim max-w-2xl leading-relaxed">
						I don't just build websites; I craft high-performance digital assets that command authority. 
						My expertise isn't measured in years, but in the complexity of problems solved and revenue generated.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{expertiseAreas.map((area, index) => (
						<div
							key={index}
							className="group relative p-8 rounded-2xl bg-premium-card border border-premium-border/50 hover:border-premium-accent/30 transition-all duration-500 hover:shadow-glow hover:-translate-y-1"
						>
							<div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />
							
							<div className="relative z-10">
								<div className="w-14 h-14 mb-8 rounded-xl bg-premium-bg/50 border border-premium-border flex items-center justify-center text-premium-accent group-hover:scale-110 transition-transform duration-500 group-hover:text-white group-hover:border-premium-accent/50 group-hover:shadow-[0_0_20px_-5px_theme(colors.premium.accent)]">
									{area.icon}
								</div>
								
								<h3 className="text-xl font-bold mb-4 text-white group-hover:text-premium-accent transition-colors duration-300">
									{area.title}
								</h3>
								
								<p className="text-premium-text-dim leading-relaxed">
									{area.description}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Expertise;
