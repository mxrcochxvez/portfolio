"use client";

import { useState, useRef, useEffect } from "react";

interface ConversationState {
	stage: string;
	projectData: Record<string, unknown>;
	messageHistory: Array<{ role: "user" | "assistant"; content: string }>;
}

interface Message {
	sender: "user" | "bot";
	text: string;
	quickOptions?: string[];
}

interface Estimate {
	min: number;
	max: number;
	confidence: string;
}

export default function ProjectDiscoveryChat() {
	const [messages, setMessages] = useState<Message[]>([]);
	const [input, setInput] = useState("");
	const [isTyping, setIsTyping] = useState(false);
	const [conversationState, setConversationState] = useState<ConversationState | null>(null);
	const [progress, setProgress] = useState(0);
	const [isComplete, setIsComplete] = useState(false);
	const [estimate, setEstimate] = useState<Estimate | null>(null);
	const [projectData, setProjectData] = useState<Record<string, unknown> | null>(null);
	const [isSending, setIsSending] = useState(false);
	const [proposalSent, setProposalSent] = useState(false);
	const messagesEndRef = useRef<HTMLDivElement>(null);
	const initializationAttempted = useRef(false);

	const scrollToBottom = () => {
		messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
	};

	useEffect(() => {
		scrollToBottom();
	}, [messages]);

	useEffect(() => {
		if (!initializationAttempted.current) {
			initializationAttempted.current = true;
			startConversation();
		}
	}, []);

	async function startConversation() {
		setIsTyping(true);
		try {
			const response = await fetch("/api/project-discovery", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({}),
			});
			
			if (!response.ok) throw new Error("API request failed");
			
			const data = await response.json();
			setConversationState(data.state);
			setProgress(data.progress || 0);
			setMessages([
				{
					sender: "bot",
					text: data.response,
					quickOptions: data.quickOptions,
				},
			]);
		} catch (error) {
			console.error("Failed to start conversation:", error);
			setMessages([
				{
					sender: "bot",
					text: "System initialized. Ready to discuss your project requirements.",
					quickOptions: ["Start Project Discovery"],
				},
			]);
		} finally {
			setIsTyping(false);
		}
	}

	async function sendMessage(messageOverride?: string) {
		const messageToSend = messageOverride || input;
		if (!messageToSend.trim()) return;

		setMessages((prev) => [...prev, { sender: "user", text: messageToSend }]);
		setInput("");
		setIsTyping(true);

		try {
			const response = await fetch("/api/project-discovery", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					state: conversationState,
					userMessage: messageToSend,
				}),
			});
			const data = await response.json();

			if (data.error) {
				setMessages((prev) => [...prev, { sender: "bot", text: data.error }]);
				return;
			}

			setConversationState(data.state);
			setProgress(data.progress || 0);
			setMessages((prev) => [
				...prev,
				{
					sender: "bot",
					text: data.response,
					quickOptions: data.quickOptions,
				},
			]);

			if (data.isComplete) {
				setIsComplete(true);
				setEstimate(data.estimate);
				setProjectData(data.projectData);
			}
		} catch (error) {
			console.error("Failed to send message:", error);
			setMessages((prev) => [
				...prev,
				{ sender: "bot", text: "Connection interrupted. Please try again." },
			]);
		} finally {
			setIsTyping(false);
		}
	}

	async function sendProposal() {
		if (!projectData || !estimate) return;

		setIsSending(true);
		try {
			const response = await fetch("/api/send-proposal", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					...projectData,
					estimate,
				}),
			});
			const data = await response.json();

			if (data.success) {
				setProposalSent(true);
				setMessages((prev) => [
					...prev,
					{
						sender: "bot",
						text: "✅ **Proposal Generated & Sent.** I will review the architecture and timeline and contact you within 24 hours.",
					},
				]);
			} else {
				setMessages((prev) => [
					...prev,
					{
						sender: "bot",
						text: `Error: ${data.error || "Transmission failed."}`,
					},
				]);
			}
		} catch (error) {
			console.error("Failed to send proposal:", error);
			setMessages((prev) => [
				...prev,
				{
					sender: "bot",
					text: "Critical error. Please email directly: hello@marcochavez.work",
				},
			]);
		} finally {
			setIsSending(false);
		}
	}

	function resetConversation() {
		setMessages([]);
		setConversationState(null);
		setProgress(0);
		setIsComplete(false);
		setEstimate(null);
		setProjectData(null);
		setProposalSent(false);
		startConversation();
	}

	return (
		<div className="w-full max-w-3xl mx-auto backdrop-blur-xl bg-premium-card/80 border border-premium-border rounded-2xl overflow-hidden shadow-2xl flex flex-col h-[600px]">
			{/* Header */}
			<div className="p-4 border-b border-premium-border bg-black/40 flex justify-between items-center">
				<div className="flex items-center gap-3">
					<div className="w-3 h-3 rounded-full bg-premium-accent animate-pulse" />
					<span className="text-sm font-mono text-premium-text-dim uppercase tracking-wider">
						Project Initialization Protocol
					</span>
				</div>
				<div className="text-xs font-mono text-premium-text-dim">
					{progress}% Complete
				</div>
			</div>
			
			{/* Progress Line */}
			<div className="h-0.5 bg-premium-border w-full">
				<div 
					className="h-full bg-premium-accent shadow-[0_0_10px_theme(colors.premium.accent)] transition-all duration-500 ease-out"
					style={{ width: `${progress}%` }}
				/>
			</div>

			{/* Chat window */}
			<div className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-hide">
				{messages.map((msg, i) => (
					<div key={i} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
						<div
							className={`max-w-[85%] px-5 py-4 rounded-2xl text-sm leading-relaxed ${
								msg.sender === "user"
									? "bg-premium-accent text-white rounded-br-none shadow-glow"
									: "bg-white/5 border border-white/10 text-premium-text rounded-bl-none"
							}`}
						>
							<div
								dangerouslySetInnerHTML={{
									__html: msg.text.replace(/\*\*(.*?)\*\*/g, "<strong class='text-white'>$1</strong>"),
								}}
							/>
							
							{/* Quick Options */}
							{msg.sender === "bot" && msg.quickOptions && msg.quickOptions.length > 0 && i === messages.length - 1 && !isComplete && (
								<div className="mt-4 flex flex-wrap gap-2">
									{msg.quickOptions.map((option, j) => (
										<button
											key={j}
											onClick={() => sendMessage(option)}
											className="px-4 py-2 text-xs font-medium bg-black/60 border border-premium-accent/50 text-premium-accent rounded-lg hover:bg-premium-accent hover:text-white transition-all duration-300"
										>
											{option}
										</button>
									))}
								</div>
							)}
						</div>
					</div>
				))}

				{isTyping && (
					<div className="flex justify-start">
						<div className="px-5 py-4 bg-white/5 border border-white/10 rounded-2xl rounded-bl-none">
							<div className="flex gap-1.5">
								<span className="w-2 h-2 rounded-full bg-premium-text-dim animate-bounce" />
								<span className="w-2 h-2 rounded-full bg-premium-text-dim animate-bounce delay-100" />
								<span className="w-2 h-2 rounded-full bg-premium-text-dim animate-bounce delay-200" />
							</div>
						</div>
					</div>
				)}

				<div ref={messagesEndRef} />
			</div>

			{/* Controls */}
			<div className="p-4 border-t border-premium-border bg-black/40">
				{isComplete && !proposalSent ? (
					<div className="flex gap-4">
						<button
							onClick={sendProposal}
							disabled={isSending}
							className="flex-1 py-3 px-6 bg-premium-accent text-white font-bold rounded-xl hover:bg-premium-accent-dark hover:shadow-glow transition-all disabled:opacity-50"
						>
							{isSending ? "Initialising Upload..." : "Send Proposal"}
						</button>
						<button 
							onClick={resetConversation}
							className="px-6 py-3 text-premium-text-dim hover:text-white transition-colors"
						>
							Reset
						</button>
					</div>
				) : proposalSent ? (
					<button 
						onClick={resetConversation}
						className="w-full py-3 px-6 bg-white/5 border border-white/10 text-white font-bold rounded-xl hover:bg-white/10 transition-all"
					>
						Initialize New Project
					</button>
				) : (
					<div className="flex gap-3">
						<input
							value={input}
							onChange={(e) => setInput(e.target.value)}
							onKeyUp={(e) => e.key === "Enter" && sendMessage()}
							placeholder="Type your requirements..."
							className="flex-1 px-4 py-3 bg-black/50 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-premium-accent focus:ring-1 focus:ring-premium-accent transition-all"
							disabled={isTyping}
						/>
						<button 
							onClick={() => sendMessage()} 
							disabled={isTyping || !input.trim()}
							className="px-6 py-3 bg-white text-black font-bold rounded-xl hover:scale-105 active:scale-95 transition-all disabled:opacity-50 disabled:scale-100"
						>
							Send
						</button>
					</div>
				)}
			</div>
		</div>
	);
}
