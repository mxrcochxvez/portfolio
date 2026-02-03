"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Navbar = () => {
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 20);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<nav
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
				scrolled
					? "bg-premium-bg/80 backdrop-blur-xl border-premium-border/50 py-4"
					: "bg-transparent border-transparent py-6"
			}`}
		>
			<div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
				<Link
					href="/"
					className="text-2xl font-bold tracking-tighter text-white hover:opacity-80 transition-opacity"
				>
					MARCO<span className="text-premium-accent">.</span>CHAVEZ
				</Link>

				<div className="hidden md:flex items-center gap-8">
					<NavLink href="#expertise" label="Expertise" />
					<NavLink href="#results" label="Results" />
					<NavLink href="#pricing" label="Pricing" />
				</div>

				<Link
					href="#pricing"
					className="hidden md:inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold text-white transition-all duration-300 bg-premium-accent rounded-full hover:bg-premium-accent-dark hover:scale-105 active:scale-95 shadow-glow"
				>
					Hire Me
				</Link>
			</div>
		</nav>
	);
};

const NavLink = ({ href, label }: { href: string; label: string }) => (
	<Link
		href={href}
		className="text-sm font-medium text-premium-text-dim hover:text-white transition-colors duration-300"
	>
		{label}
	</Link>
);

export default Navbar;
