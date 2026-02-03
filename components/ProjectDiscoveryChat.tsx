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

	const scrollToBottom = () => {
		messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
	};

	useEffect(() => {
		scrollToBottom();
	}, [messages]);

	useEffect(() => {
		startConversation();
	}, []);

	async function startConversation() {
		setIsTyping(true);
		try {
			const response = await fetch("/api/project-discovery", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({}),
			});
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
					text: "Sorry, I couldn't start the discovery process. Please try again or contact Marco directly.",
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
				{ sender: "bot", text: "Something went wrong. Please try again." },
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
						text: "✅ **Proposal sent successfully!** Marco has received your project details and will get back to you within 24-48 hours. Check your email for a copy of the proposal!",
					},
				]);
			} else {
				setMessages((prev) => [
					...prev,
					{
						sender: "bot",
						text: `❌ ${data.error || "Failed to send proposal. Please try again or contact Marco directly."}`,
					},
				]);
			}
		} catch (error) {
			console.error("Failed to send proposal:", error);
			setMessages((prev) => [
				...prev,
				{
					sender: "bot",
					text: "Failed to send proposal. Please try again or contact Marco directly at marcode.chavez.jr@gmail.com",
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
		<section id="project-discovery" className="h-full flex flex-col">
			<h3 className="text-xl font-sketch mb-2 text-center text-blueprint-accent">
				🚀 Start Your Project
			</h3>

			{/* Progress Bar */}
			<div className="mb-4">
				<div className="flex justify-between text-xs text-blueprint-text-dim mb-1">
					<span>Progress</span>
					<span>{progress}%</span>
				</div>
				<div className="h-2 bg-blueprint-bg rounded-full overflow-hidden border border-blueprint-grid">
					<div
						className="h-full bg-blueprint-accent transition-all duration-500 ease-out"
						style={{ width: `${progress}%` }}
					/>
				</div>
			</div>

			{/* Chat window */}
			<div className="flex-1 overflow-y-auto mb-4 p-3 border-2 border-dashed border-blueprint-grid rounded bg-blueprint-bg/50">
				{messages.map((msg, i) => (
					<div key={i} className={`mb-3 ${msg.sender === "user" ? "text-right" : "text-left"}`}>
						<div
							className={`inline-block max-w-[85%] break-words px-3 py-2 rounded-lg text-sm font-mono ${
								msg.sender === "user"
									? "bg-blueprint-accent text-blueprint-bg"
									: "bg-blueprint-bg-light border border-dashed border-blueprint-text-dim text-blueprint-text"
							}`}
							style={{ whiteSpace: "pre-wrap" }}
							dangerouslySetInnerHTML={{
								__html: msg.text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>"),
							}}
						/>

						{/* Quick Options */}
						{msg.sender === "bot" && msg.quickOptions && msg.quickOptions.length > 0 && i === messages.length - 1 && !isComplete && (
							<div className="mt-2 flex flex-wrap gap-2">
								{msg.quickOptions.map((option, j) => (
									<button
										key={j}
										onClick={() => sendMessage(option)}
										className="px-3 py-1 text-xs font-mono bg-blueprint-bg border border-blueprint-accent text-blueprint-accent rounded hover:bg-blueprint-accent hover:text-blueprint-bg transition-all"
									>
										{option}
									</button>
								))}
							</div>
						)}
					</div>
				))}

				{isTyping && (
					<div className="text-left">
						<p className="inline-block px-3 py-2 rounded-lg italic animate-pulse bg-blueprint-bg-light text-blueprint-text-dim text-sm">
							Thinking…
						</p>
					</div>
				)}

				<div ref={messagesEndRef} />
			</div>

			{/* Action buttons for complete state */}
			{isComplete && !proposalSent && (
				<div className="flex gap-2 mb-4">
					<button
						onClick={sendProposal}
						disabled={isSending}
						className="flex-1 blueprint-btn blueprint-btn-primary text-sm disabled:opacity-50"
					>
						{isSending ? "Sending..." : "📤 Send Proposal"}
					</button>
					<button onClick={resetConversation} className="blueprint-btn text-sm">
						🔄 Start Over
					</button>
				</div>
			)}

			{proposalSent && (
				<div className="mb-4">
					<button onClick={resetConversation} className="w-full blueprint-btn text-sm">
						🚀 Submit Another Project
					</button>
				</div>
			)}

			{/* Input */}
			{!isComplete && (
				<div className="flex gap-2">
					<input
						value={input}
						onChange={(e) => setInput(e.target.value)}
						onKeyUp={(e) => e.key === "Enter" && sendMessage()}
						placeholder="Type your response..."
						className="flex-1 px-3 py-2 rounded border-2 border-dashed border-blueprint-grid
                     bg-blueprint-bg text-blueprint-text placeholder-blueprint-text-dim
                     focus:outline-none focus:border-blueprint-accent focus:shadow-glow-sm
                     font-mono text-sm transition-all duration-300"
					/>
					<button onClick={() => sendMessage()} disabled={isTyping} className="blueprint-btn text-sm">
						Send
					</button>
				</div>
			)}
		</section>
	);
}
