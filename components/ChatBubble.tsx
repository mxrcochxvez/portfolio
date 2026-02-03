"use client";

import { useState, useEffect } from "react";
import Chat from "./Chat";
import ProjectDiscoveryChat from "./ProjectDiscoveryChat";

type ChatMode = "resume" | "project";

export default function ChatBubble() {
	const [open, setOpen] = useState(false);
	const [mode, setMode] = useState<ChatMode>("project");
	const [showPrompt, setShowPrompt] = useState(true);

	useEffect(() => {
		const onKey = (e: KeyboardEvent) => {
			if (e.key === "Escape") setOpen(false);
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, []);

	const handleClick = () => {
		setOpen(!open);
		setShowPrompt(false);
	};

	return (
		<div className="fixed bottom-4 right-4 z-50">
			{/* Attention-grabbing prompt */}
			{!open && showPrompt && (
				<div 
					className="absolute bottom-16 right-0 mb-2 animate-bounce"
					style={{ animationDuration: '2s' }}
				>
					<div className="relative bg-blueprint-accent text-blueprint-bg px-4 py-2 rounded-lg shadow-lg font-mono text-sm whitespace-nowrap">
						<span className="mr-2">🚀</span>
						Have a project idea? Let's build it!
						<button 
							onClick={(e) => { e.stopPropagation(); setShowPrompt(false); }}
							className="ml-2 opacity-60 hover:opacity-100"
							aria-label="Dismiss"
						>
							×
						</button>
						{/* Arrow pointing down */}
						<div className="absolute -bottom-2 right-6 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-blueprint-accent" />
					</div>
				</div>
			)}

			<button
				className="h-14 w-14 rounded-full bg-blueprint-accent text-blueprint-bg  
                   hover: focus:outline-none focus-visible:ring-2 
                   focus-visible:ring-offset-2 focus-visible:ring-blueprint-accent
                   transition-all duration-300 text-2xl
                   border-2 border-blueprint-text"
				aria-haspopup="dialog"
				aria-expanded={open}
				aria-controls="marcobot-panel"
				onClick={handleClick}
			>
				<span className="sr-only">Open MarcoBot chat</span>
				💬
			</button>

			{/* Chat Panel */}
			<div
				id="marcobot-panel"
				role="dialog"
				aria-modal="true"
				className={`absolute bottom-16 right-0 w-[min(92vw,24rem)] h-[min(70vh,32rem)]
                    bg-blueprint-bg-light/95 backdrop-blur-sm rounded-lg 
                    border-2 border-dashed border-blueprint-accent 
                    flex flex-col transition-all duration-300 origin-bottom-right
                    ${open ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}`}
			>
				{/* Mode Tabs */}
				<div className="flex border-b border-blueprint-grid">
					<button
						onClick={() => setMode("resume")}
						className={`flex-1 px-3 py-2 text-sm font-mono transition-all ${
							mode === "resume"
								? "bg-blueprint-accent text-blueprint-bg"
								: "bg-transparent text-blueprint-text-dim hover:text-blueprint-accent"
						}`}
					>
						💬 Chat
					</button>
					<button
						onClick={() => setMode("project")}
						className={`flex-1 px-3 py-2 text-sm font-mono transition-all ${
							mode === "project"
								? "bg-blueprint-accent text-blueprint-bg"
								: "bg-transparent text-blueprint-text-dim hover:text-blueprint-accent"
						}`}
					>
						🚀 Start Project
					</button>
				</div>

				{/* Content */}
				<div className="flex-1 overflow-hidden p-4">
					{mode === "resume" ? <Chat /> : <ProjectDiscoveryChat />}
				</div>
			</div>
		</div>
	);
}
