"use client";

import SketchIn from "@/components/SketchIn";
import SkillsHeatmap from "@/components/SkillsHeatmap";
import WorkExperiences from "@/components/WorkExperiences";

export default function Home() {
	return (
		<div className="min-h-screen">
			{/* Hero Section */}
			<SketchIn>
				<section className="max-w-5xl mx-auto text-center py-12 md:py-20 px-4">
					<h2 className="font-sketch mb-4 md:mb-6 leading-tight">
						<span className="text-blueprint-accent text-responsive-hero block">
							Let's Build Something Great
						</span>
						<span className="text-blueprint-text text-responsive-sub mt-2 block">
							Mobile • Desktop • Web • Websites
						</span>
					</h2>

					<p className="text-sm md:text-lg text-blueprint-text-dim max-w-3xl mx-auto mb-6 md:mb-8 font-mono leading-relaxed px-2">
						I'm Marco, a full-stack engineer with 6+ years building{" "}
						<span className="text-blueprint-accent">responsive</span>,{" "}
						<span className="text-blueprint-accent">accessible</span>, and{" "}
						<span className="text-blueprint-accent">maintainable</span>{" "}
						solutions. Quality work at affordable rates.
					</p>

					<div className="flex flex-col sm:flex-row gap-3 justify-center px-4">
						<a
							href="https://calendar.app.google/6e6e3UNCBFGmeNea6"
							target="_blank"
							rel="noopener noreferrer"
							className="blueprint-btn blueprint-btn-primary"
						>
							📆 Free Consultation
						</a>
						<a href="#services" className="blueprint-btn">
							View Services
						</a>
					</div>
				</section>
			</SketchIn>

			<hr className="blueprint-divider max-w-5xl mx-auto" />

			{/* Services Section */}
			<SketchIn delay={100}>
				<section id="services" className="py-12 md:py-16 px-4">
					<div className="max-w-5xl mx-auto">
						<h3 className="text-2xl md:text-3xl font-sketch mb-8 text-center">
							What I Build
						</h3>

						<div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
							<div className="blueprint-card text-center">
								<div className="text-2xl md:text-4xl mb-2 md:mb-4">📱</div>
								<h4 className="text-sm md:text-lg font-sketch text-blueprint-accent mb-1 md:mb-2">
									Mobile Apps
								</h4>
								<p className="text-blueprint-text-dim font-mono text-xs md:text-sm hidden sm:block">
									iOS and Android apps
								</p>
							</div>

							<div className="blueprint-card text-center">
								<div className="text-2xl md:text-4xl mb-2 md:mb-4">🖥️</div>
								<h4 className="text-sm md:text-lg font-sketch text-blueprint-accent mb-1 md:mb-2">
									Desktop Apps
								</h4>
								<p className="text-blueprint-text-dim font-mono text-xs md:text-sm hidden sm:block">
									Windows, Mac, Linux
								</p>
							</div>

							<div className="blueprint-card text-center">
								<div className="text-2xl md:text-4xl mb-2 md:mb-4">⚡</div>
								<h4 className="text-sm md:text-lg font-sketch text-blueprint-accent mb-1 md:mb-2">
									Web Apps
								</h4>
								<p className="text-blueprint-text-dim font-mono text-xs md:text-sm hidden sm:block">
									SaaS & internal tools
								</p>
							</div>

							<div className="blueprint-card text-center">
								<div className="text-2xl md:text-4xl mb-2 md:mb-4">🌐</div>
								<h4 className="text-sm md:text-lg font-sketch text-blueprint-accent mb-1 md:mb-2">
									Websites
								</h4>
								<p className="text-blueprint-text-dim font-mono text-xs md:text-sm hidden sm:block">
									Fast & SEO-optimized
								</p>
							</div>
						</div>

						{/* Value Props */}
						<div className="mt-8 md:mt-12 blueprint-card">
							<h4 className="text-lg md:text-xl font-sketch text-blueprint-accent mb-4 md:mb-6 text-center">
								Why Work With Me?
							</h4>
							<div className="grid grid-cols-3 gap-2 md:gap-6 text-center">
								<div>
									<span className="text-xl md:text-2xl">♿</span>
									<h5 className="font-sketch text-blueprint-text text-sm md:text-base mt-1 md:mt-2">
										Accessible
									</h5>
									<p className="text-blueprint-text-dim font-mono text-xs mt-1 hidden md:block">
										WCAG compliant
									</p>
								</div>
								<div>
									<span className="text-xl md:text-2xl">📐</span>
									<h5 className="font-sketch text-blueprint-text text-sm md:text-base mt-1 md:mt-2">
										Maintainable
									</h5>
									<p className="text-blueprint-text-dim font-mono text-xs mt-1 hidden md:block">
										Clean, documented code
									</p>
								</div>
								<div>
									<span className="text-xl md:text-2xl">💰</span>
									<h5 className="font-sketch text-blueprint-text text-sm md:text-base mt-1 md:mt-2">
										Affordable
									</h5>
									<p className="text-blueprint-text-dim font-mono text-xs mt-1 hidden md:block">
										Transparent rates
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>
			</SketchIn>

			<hr className="blueprint-divider max-w-5xl mx-auto" />

			{/* Career Highlights */}
			<SketchIn delay={100}>
				<section className="py-12 md:py-16 px-4">
					<div className="max-w-5xl mx-auto text-center">
						<h3 className="text-2xl md:text-3xl font-sketch mb-6 md:mb-10">
							Proven Results
						</h3>

						<div className="grid grid-cols-3 gap-2 md:gap-8">
							<div className="blueprint-card text-center">
								<h4 className="text-2xl md:text-4xl font-sketch text-blueprint-accent mb-1 md:mb-2">
									40%
								</h4>
								<p className="text-blueprint-text-dim font-mono text-xs md:text-sm">
									Faster workflows
								</p>
							</div>
							<div className="blueprint-card text-center">
								<h4 className="text-2xl md:text-4xl font-sketch text-blueprint-accent mb-1 md:mb-2">
									6+
								</h4>
								<p className="text-blueprint-text-dim font-mono text-xs md:text-sm">
									Years experience
								</p>
							</div>
							<div className="blueprint-card text-center">
								<h4 className="text-2xl md:text-4xl font-sketch text-blueprint-accent mb-1 md:mb-2">
									25%
								</h4>
								<p className="text-blueprint-text-dim font-mono text-xs md:text-sm">
									Faster delivery
								</p>
							</div>
						</div>
					</div>
				</section>
			</SketchIn>

			<hr className="blueprint-divider max-w-5xl mx-auto" />

			{/* Skills Heatmap */}
			<SketchIn delay={100}>
				<SkillsHeatmap />
			</SketchIn>

			<hr className="blueprint-divider max-w-5xl mx-auto" />

			{/* Work Experience */}
			<SketchIn delay={100}>
				<WorkExperiences />
			</SketchIn>

			<hr className="blueprint-divider max-w-5xl mx-auto" />

			{/* Projects */}
			<SketchIn delay={100}>
				<section id="projects" className="py-12 md:py-16 px-4">
					<div className="max-w-5xl mx-auto">
						<h3 className="text-2xl md:text-3xl font-sketch mb-6 md:mb-10">
							Sample Projects
						</h3>

						<div className="grid md:grid-cols-2 gap-4 md:gap-8">
							<div className="blueprint-card">
								<h4 className="text-lg md:text-xl font-sketch text-blueprint-accent mb-2">
									Hotel GraphQL Server
								</h4>
								<p className="text-blueprint-text-dim font-mono text-xs md:text-sm mb-3 md:mb-4">
									TypeScript + Drizzle ORM GraphQL API for hotel reservations.
								</p>
								<a
									href="https://github.com/mxrcochxvez/hotel-server-graphql"
									target="_blank"
									rel="noopener noreferrer"
									className="text-blueprint-accent font-mono text-xs md:text-sm hover:underline"
								>
									View on GitHub →
								</a>
							</div>

							<div className="blueprint-card">
								<h4 className="text-lg md:text-xl font-sketch text-blueprint-accent mb-2">
									Neural Networks
								</h4>
								<p className="text-blueprint-text-dim font-mono text-xs md:text-sm mb-3 md:mb-4">
									Experimenting with brain.js to explore ML fundamentals.
								</p>
								<a
									href="https://github.com/mxrcochxvez/neural-networks"
									target="_blank"
									rel="noopener noreferrer"
									className="text-blueprint-accent font-mono text-xs md:text-sm hover:underline"
								>
									View on GitHub →
								</a>
							</div>
						</div>
					</div>
				</section>
			</SketchIn>

			<hr className="blueprint-divider max-w-5xl mx-auto" />

			{/* Contact / CTA */}
			<SketchIn delay={100}>
				<section
					id="contact"
					className="max-w-5xl mx-auto py-12 md:py-16 px-4 text-center"
				>
					<h3 className="text-2xl md:text-3xl font-sketch mb-4 md:mb-6">
						Ready to Start?
					</h3>
					<p className="text-blueprint-text-dim font-mono text-sm md:text-base mb-6 md:mb-8 max-w-2xl mx-auto">
						Free 15-minute consultations to understand your needs.
					</p>

					<div className="flex flex-col sm:flex-row justify-center gap-3">
						<a
							href="https://calendar.app.google/6e6e3UNCBFGmeNea6"
							target="_blank"
							rel="noopener noreferrer"
							className="blueprint-btn blueprint-btn-primary"
						>
							📆 Book Consultation
						</a>
						<a
							href="mailto:marcode.chavez.jr@gmail.com"
							className="blueprint-btn"
						>
							Email Me
						</a>
						<a
							href="/Marco_Chavez_Jr_-_Software_Developer.pdf"
							download
							className="blueprint-btn"
						>
							Resume
						</a>
					</div>
				</section>
			</SketchIn>

			<hr className="blueprint-divider max-w-5xl mx-auto" />

			{/* Trusted By */}
			<SketchIn delay={100}>
				<section className="py-8 md:py-12 px-4">
					<div className="max-w-5xl mx-auto text-center">
						<h3 className="text-lg md:text-xl font-sketch mb-6 md:mb-8 text-blueprint-text-dim">
							Trusted by:
						</h3>

						<div className="flex flex-wrap justify-center gap-4 md:gap-8 items-center opacity-70">
							<img
								src="/img/pj.svg"
								alt="Pressed Juicery"
								className="h-8 md:h-12 bg-white/10 rounded-full p-1 md:p-2"
							/>
							<img
								src="/img/bitwise.png"
								alt="Bitwise Industries"
								className="h-8 md:h-12 rounded-md bg-white/10 p-1 md:p-2"
							/>
							<img
								src="/img/ordrslip.jpeg"
								alt="Ordrslip"
								className="h-8 md:h-12 rounded"
							/>
							<img
								src="/img/RosenbalmRockeryLogo.jpg"
								alt="Rosenbalm Rockery"
								className="h-8 md:h-12 rounded"
							/>
							<img
								src="/img/lexiillc.jpg"
								alt="Lexii LLC"
								className="h-8 md:h-12 rounded-md bg-white/10 p-1 md:p-2"
							/>
						</div>

						<p className="opacity-40 text-xs italic mt-4 md:mt-6 font-mono">
							I do not own these images
						</p>
					</div>
				</section>
			</SketchIn>

			{/* Footer */}
			<footer className="border-t-2 border-dashed border-blueprint-grid py-4 md:py-6 text-center text-blueprint-text-dim text-xs md:text-sm font-mono">
				© {new Date().getFullYear()} Marco Chavez Jr.
			</footer>
		</div>
	);
}
