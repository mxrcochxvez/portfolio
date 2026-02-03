"use client";

import { useEffect, useState } from "react";

const HeroVisual = () => {
	const [activeNodes, setActiveNodes] = useState<number[]>([]);

	// Simulate random activity
	useEffect(() => {
		const interval = setInterval(() => {
			const count = Math.floor(Math.random() * 5) + 1;
			const newNodes = Array.from({ length: count }, () => Math.floor(Math.random() * 25));
			setActiveNodes(newNodes);
		}, 600);
		return () => clearInterval(interval);
	}, []);

	return (
		<div className="relative h-[600px] w-full perspective-1000">
			{/* Main Floating Interface */}
			<div className="absolute inset-0 bg-gradient-to-tr from-premium-accent/5 to-transparent rounded-3xl backdrop-blur-sm border border-white/5 p-8 flex items-center justify-center transform transition-transform hover:scale-[1.01] duration-700">
				
				{/* Inner Dashboard */}
				<div className="relative w-full h-full border border-white/10 rounded-2xl overflow-hidden bg-black/80 shadow-2xl flex flex-col">
					
					{/* Header */}
					<div className="h-10 border-b border-white/5 bg-white/5 flex items-center px-4 justify-between">
						<div className="flex items-center gap-2">
							<div className="w-3 h-3 rounded-full bg-red-500/20" />
							<div className="w-3 h-3 rounded-full bg-yellow-500/20" />
							<div className="w-3 h-3 rounded-full bg-green-500/80 shadow-[0_0_10px_theme(colors.green.500)]" />
						</div>
						<div className="text-[10px] font-mono text-premium-text-dim tracking-widest uppercase">
							System Status: Optimal
						</div>
					</div>

					{/* Main Content Area */}
					<div className="flex-1 p-6 grid grid-cols-3 gap-6">
						
						{/* Col 1: Metrics */}
						<div className="col-span-2 flex flex-col gap-6">
							{/* Graph Area */}
							<div className="flex-1 rounded-xl bg-white/5 border border-white/5 p-4 relative overflow-hidden group">
								<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,theme(colors.premium.accent/.1),transparent)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
								<div className="flex justify-between items-end h-full gap-2">
									{[40, 65, 45, 80, 55, 90, 75, 95, 85, 100].map((h, i) => (
										<div key={i} className="w-full bg-premium-accent/20 rounded-t-sm relative group-hover:bg-premium-accent/30 transition-colors">
											<div 
												style={{ height: `${h}%` }} 
												className="absolute bottom-0 w-full bg-gradient-to-t from-premium-accent to-premium-accent-dark rounded-t-sm animate-[pulse_3s_ease-in-out_infinite]"
											/>
										</div>
									))}
								</div>
								<div className="absolute top-4 left-4">
									<h4 className="text-xs font-mono text-premium-text-dim uppercase">Throughput</h4>
									<div className="text-2xl font-bold text-white">98.4<span className="text-sm text-premium-accent">%</span></div>
								</div>
							</div>

							{/* Logs */}
							<div className="h-32 rounded-xl bg-black border border-white/10 p-4 font-mono text-[10px] text-premium-text-dim overflow-hidden leading-relaxed opacity-70">
								<div className="animate-[slide-up_10s_linear_infinite]">
									<p>Initializing secure handshake...</p>
									<p className="text-emerald-500">&gt;&gt; Authenticated.</p>
									<p>Fetching user_data_shards[0-99]...</p>
									<p>Optimizing edge cache layers...</p>
									<p className="text-premium-accent">&gt;&gt; V8 Isolate warmed up.</p>
									<p>Request latency: 12ms</p>
									<p>Deploying to region: us-east-1</p>
									<p className="text-emerald-500">&gt;&gt; Deployment Successful.</p>
									<p>Monitoring active sessions...</p>
									<p>Scaling pod replicas...</p>
								</div>
							</div>
						</div>

						{/* Col 2: Status Grid */}
						<div className="col-span-1 flex flex-col gap-4">
							<div className="rounded-xl bg-white/5 border border-white/5 p-4 flex-1">
								<h4 className="text-xs font-mono text-premium-text-dim uppercase mb-4">Core Nodes</h4>
								<div className="grid grid-cols-5 gap-2">
									{Array.from({ length: 25 }).map((_, i) => (
										<div 
											key={i}
											className={`aspect-square rounded-sm transition-all duration-300 ${
												activeNodes.includes(i) 
													? "bg-premium-accent shadow-[0_0_10px_theme(colors.premium.accent)]" 
													: "bg-white/5"
											}`}
										/>
									))}
								</div>
							</div>

							<div className="rounded-xl bg-premium-accent/10 border border-premium-accent/20 p-4">
								<h4 className="text-xs font-mono text-premium-accent uppercase mb-1">Warning</h4>
								<p className="text-[10px] text-premium-accent/80">
									Competitor sites detected running unoptimized assets.
								</p>
							</div>
						</div>
					</div>

					{/* Overlay Scanline */}
					<div className="absolute top-0 left-0 w-full h-1 bg-premium-accent/30 shadow-[0_0_20px_theme(colors.premium.accent)] animate-[scan_4s_ease-in-out_infinite] pointer-events-none" />
				</div>
			</div>
		</div>
	);
};

export default HeroVisual;
