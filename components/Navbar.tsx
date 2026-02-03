"use client";

import { useState } from "react";
import DarkModeToggle from "./DarkModeToggle";

export default function Navbar() {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<header className="bg-blueprint-bg/90 backdrop-blur-sm border-b-2 border-dashed border-blueprint-grid sticky top-0 z-50">
			<nav className="max-w-5xl mx-auto flex justify-between items-center p-3 md:p-4">
				<h1 className="text-xl md:text-2xl font-sketch text-blueprint-accent">
					Marco Chavez
				</h1>

				{/* Mobile menu button */}
				<button
					className="md:hidden text-blueprint-text p-2"
					onClick={() => setMenuOpen(!menuOpen)}
					aria-label="Toggle menu"
				>
					<span className="text-xl">{menuOpen ? "✕" : "☰"}</span>
				</button>

				{/* Desktop nav */}
				<ul className="hidden md:flex gap-6 text-sm font-mono">
					<li>
						<a
							href="#services"
							className="text-blueprint-text-dim hover:text-blueprint-accent transition-colors"
						>
							Services
						</a>
					</li>
					<li>
						<a
							href="#experience"
							className="text-blueprint-text-dim hover:text-blueprint-accent transition-colors"
						>
							Experience
						</a>
					</li>
					<li>
						<a
							href="#projects"
							className="text-blueprint-text-dim hover:text-blueprint-accent transition-colors"
						>
							Projects
						</a>
					</li>
					<li>
						<a
							href="#contact"
							className="text-blueprint-text-dim hover:text-blueprint-accent transition-colors"
						>
							Contact
						</a>
					</li>
				</ul>
			</nav>

			{/* Mobile nav dropdown */}
			{menuOpen && (
				<div className="md:hidden border-t border-dashed border-blueprint-grid bg-blueprint-bg/95">
					<ul className="flex flex-col p-4 gap-4 text-sm font-mono">
						<li>
							<a
								href="#services"
								onClick={() => setMenuOpen(false)}
								className="text-blueprint-text-dim hover:text-blueprint-accent"
							>
								Services
							</a>
						</li>
						<li>
							<a
								href="#experience"
								onClick={() => setMenuOpen(false)}
								className="text-blueprint-text-dim hover:text-blueprint-accent"
							>
								Experience
							</a>
						</li>
						<li>
							<a
								href="#projects"
								onClick={() => setMenuOpen(false)}
								className="text-blueprint-text-dim hover:text-blueprint-accent"
							>
								Projects
							</a>
						</li>
						<li>
							<a
								href="#contact"
								onClick={() => setMenuOpen(false)}
								className="text-blueprint-text-dim hover:text-blueprint-accent"
							>
								Contact
							</a>
						</li>
					</ul>
				</div>
			)}

			<DarkModeToggle />
		</header>
	);
}
