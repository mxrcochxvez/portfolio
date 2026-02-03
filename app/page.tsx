import Link from "next/link";
import Expertise from "@/components/Expertise";
import SkillsHeatmap from "@/components/SkillsHeatmap";
import Pricing from "@/components/Pricing";
import HeroVisual from "@/components/HeroVisual";

export default function Home() {
	return (
		<div className="flex flex-col w-full overflow-x-hidden">
			{/* HERO SECTION - Sales Focused */}
			<section className="relative min-h-screen flex flex-col justify-center px-6 pt-20">
				{/* Modern Gradient Background */}
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-premium-bg to-premium-bg z-0" />
				
				<div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
					<div>
						<div className="inline-flex items-center gap-2 mb-8">
							<div className="glitch-badge px-3 py-1.5" data-text="Available for Select Projects">
								<span className="relative z-20 flex items-center gap-2">
									<span className="w-1.5 h-1.5 bg-premium-accent rounded-sm animate-pulse" />
									Available for Select Projects
								</span>
							</div>
						</div>
						
						<h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-white mb-8 leading-[0.9]">
							SCALE <br />
							<span className="text-transparent bg-clip-text bg-gradient-to-r from-premium-accent to-white">
								YOUR VISION.
							</span>
						</h1>
						
						<p className="text-xl md:text-2xl text-premium-text-dim max-w-xl mb-10 leading-relaxed text-balance">
							I help companies build high-performance digital assets that drive revenue, not just traffic.
						</p>
						
						<div className="flex flex-col sm:flex-row gap-4">
							<Link
								href="#pricing"
								className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-300 bg-premium-accent rounded-full hover:bg-premium-accent-dark hover:shadow-glow hover:-translate-y-1"
							>
								View Pricing
							</Link>
							<Link
								href="#expertise"
								className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-300 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:border-white/20"
							>
								View Expertise
							</Link>
						</div>
						
						<div className="mt-12 flex items-center gap-8 text-sm font-medium text-premium-text-dim">
							<div className="flex -space-x-2">
								{/* Social Proof Avatars Placeholder */}
								<div className="w-8 h-8 rounded-full bg-gray-700 border-2 border-premium-bg" />
								<div className="w-8 h-8 rounded-full bg-gray-600 border-2 border-premium-bg" />
								<div className="w-8 h-8 rounded-full bg-gray-500 border-2 border-premium-bg" />
							</div>
							<p>Trusted by industry leaders.</p>
						</div>
					</div>
					
					{/* Abstract Visual / "The Machine" */}
					<div className="relative hidden lg:block h-[600px] w-full">
						<HeroVisual />
					</div>
				</div>
			</section>

			{/* VALUE PROP / EXPERTISE */}
			<Expertise />

			{/* RESULTS / SKILLS */}
			<section className="py-32 bg-premium-card border-y border-premium-border" id="results">
				<div className="max-w-7xl mx-auto px-6">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
						<div>
							<h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
								Technical Excellence is Non-Negotiable.
							</h2>
							<p className="text-lg text-premium-text-dim mb-8">
								Your competitors are already optimizing. I provide the technical edge that keeps you ahead. From bare-metal performance tuning to complex distributed systems.
							</p>
							
							<div className="space-y-4">
								{['99.9% Uptime Architectures', 'Sub-100ms Interaction Latency', 'Enterprise-Grade Security'].map((item) => (
									<div key={item} className="flex items-center gap-3">
										<div className="w-1.5 h-1.5 rounded-full bg-premium-accent" />
										<span className="text-white font-medium">{item}</span>
									</div>
								))}
							</div>
						</div>
						
						<div className="relative">
							<SkillsHeatmap />
						</div>
					</div>
				</div>
			</section>

			{/* PRICING */}
			<Pricing />
		</div>
	);
}
