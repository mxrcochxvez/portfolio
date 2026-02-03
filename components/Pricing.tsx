"use client";

import React from "react";
import Link from "next/link";

const Pricing = () => {
	return (
		<section className="py-24 relative overflow-hidden" id="pricing">
			{/* Ambient Glow */}
			<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-premium-accent/5 blur-[120px] rounded-full pointer-events-none" />

			<div className="max-w-7xl mx-auto px-6 relative z-10">
				<div className="text-center max-w-3xl mx-auto mb-20">
					<h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
						Investing in Dominance.
					</h2>
					<p className="text-xl text-premium-text-dim mb-8">
						Simple, transparent, and aggressive pricing for those who understand the value of superior engineering.
					</p>
					
					{/* Pay Once Badge/Message */}
					<div className="inline-block mt-4">
						<div className="glitch-badge px-6 py-3 border-premium-accent/60" data-text="One-Time Investment. Zero Recurring Fees.">
							<span className="relative z-20 font-bold tracking-wide text-premium-accent decoration-slice">
								One-Time Investment. Zero Recurring Fees.
							</span>
						</div>
					</div>
					<p className="mt-4 text-sm text-premium-text-dim max-w-xl mx-auto">
						Unlike agencies that bleed you with monthly retainers, I build it right the first time. 
						<strong className="text-white ml-1">Pay once, own it forever.</strong>
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
					{/* TIER 1: VELOCITY */}
					<div className="relative group p-8 rounded-3xl bg-premium-card border border-premium-border hover:border-premium-accent/30 transition-all duration-300 flex flex-col">
						<div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none" />
						
						<div className="relative z-10 flex-1 flex flex-col">
							<div className="mb-4">
								<h3 className="text-2xl font-bold text-white mb-2">Velocity</h3>
								<p className="text-premium-text-dim text-sm">For professional services needing instant impact.</p>
							</div>

							<div className="mb-8">
								<span className="text-4xl font-bold text-white">$125</span>
								<span className="text-premium-text-dim"> / page</span>
								<div className="text-xs text-premium-accent uppercase tracking-wider font-bold mt-2">
									One-Time Payment
								</div>
							</div>

							<ul className="space-y-4 mb-8 flex-1">
								<ListItem>Cloud Edge Hosting (Global Speed)</ListItem>
								<ListItem>SEO-First Architecture</ListItem>
								<ListItem>Instant Load Times</ListItem>
								<ListItem>Mobile-First Responsive Design</ListItem>
								<ListItem>Contact Form Integration</ListItem>
							</ul>

							<Link
								href="mailto:hello@marcochavez.work?subject=Start Velocity Project"
								className="w-full block py-4 text-center text-sm font-bold text-white border border-white/20 rounded-xl hover:bg-white/10 transition-all"
							>
								Select Velocity
							</Link>
						</div>
					</div>

					{/* TIER 2: CONTROL */}
					<div className="relative group p-8 rounded-3xl bg-premium-card border border-premium-accent/40 shadow-glow flex flex-col transform md:-translate-y-4 scale-105 z-20">
						<div className="absolute top-0 right-0 p-4">
							<span className="px-3 py-1 text-xs font-bold text-black bg-premium-accent rounded-full uppercase tracking-wider">
								Most Popular
							</span>
						</div>
						
						<div className="relative z-10 flex-1 flex flex-col">
							<div className="mb-4">
								<h3 className="text-2xl font-bold text-white mb-2">Control</h3>
								<p className="text-premium-text-dim text-sm">For businesses requiring management & power.</p>
							</div>

							<div className="mb-8">
								<span className="text-4xl font-bold text-white">$100</span>
								<span className="text-premium-text-dim"> / page</span>
								<div className="text-sm text-premium-accent mt-2 font-medium">
									+ $75 / admin user
								</div>
								<div className="text-xs text-premium-accent uppercase tracking-wider font-bold mt-2">
									One-Time Payment
								</div>
							</div>

							<ul className="space-y-4 mb-8 flex-1">
								<ListItem active>
									Full Admin Dashboard
									<span className="block text-xs text-premium-text-dim font-normal mt-1 opacity-70">
										(One-time setup fee up to $300)
									</span>
								</ListItem>
								<ListItem active>User Authentication (Secure)</ListItem>
								<ListItem>Content Management System</ListItem>
								<ListItem>Database Integration</ListItem>
								<ListItem>Everything in Velocity</ListItem>
							</ul>

							<Link
								href="mailto:hello@marcochavez.work?subject=Start Control Project"
								className="w-full block py-4 text-center text-sm font-bold text-white bg-premium-accent rounded-xl hover:bg-premium-accent-dark hover:shadow-glow transition-all"
							>
								Select Control
							</Link>
						</div>
					</div>

					{/* TIER 3: SUPREMACY */}
					<div className="relative group p-8 rounded-3xl bg-premium-card border border-premium-border hover:border-premium-accent/30 transition-all duration-300 flex flex-col">
						<div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none" />
						
						<div className="relative z-10 flex-1 flex flex-col">
							<div className="mb-4">
								<h3 className="text-2xl font-bold text-white mb-2">Supremacy</h3>
								<p className="text-premium-text-dim text-sm">Complete digital partnership. Sit back and win.</p>
							</div>

							<div className="mb-8">
								<span className="text-3xl font-bold text-white">Custom</span>
								<div className="text-sm text-premium-text-dim mt-2">
									Monthly Retainer Until Delivery
								</div>
							</div>

							<ul className="space-y-4 mb-8 flex-1">
								<ListItem>Unlimited Design Freedom</ListItem>
								<ListItem>Priority Support (24/7)</ListItem>
								<ListItem>Full Technical Management</ListItem>
								<ListItem>Strategic Consulting</ListItem>
								<ListItem>Custom Feature Development</ListItem>
								<ListItem>Continuous Optimization</ListItem>
							</ul>

							<Link
								href="mailto:hello@marcochavez.work?subject=Discuss Supremacy Retainer"
								className="w-full block py-4 text-center text-sm font-bold text-white border border-white/20 rounded-xl hover:bg-white/10 transition-all"
							>
								Discuss Partnership
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

const ListItem = ({ children, active = false }: { children: React.ReactNode; active?: boolean }) => (
	<li className="flex items-start gap-3 text-sm text-premium-text-dim">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fill="currentColor"
			className={`w-5 h-5 mt-0.5 ${active ? "text-premium-accent" : "text-white/40"}`}
		>
			<path
				fillRule="evenodd"
				d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
				clipRule="evenodd"
			/>
		</svg>
		<span className={active ? "text-white font-medium" : ""}>{children}</span>
	</li>
);

export default Pricing;
