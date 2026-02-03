"use client";

import { useState } from "react";

interface Message {
	sender: "user" | "bot";
	text: string;
}

export default function Chat() {
	const [messages, setMessages] = useState<Message[]>([
		{
			sender: "bot",
			text: "Hi, I'm Marco's portfolio assistant! Ask me about his work experience or skills.",
		},
	]);
	const [input, setInput] = useState("");
	const [isTyping, setIsTyping] = useState(false);

	async function sendMessage() {
		if (!input.trim()) return;

		const userMessage = input;
		setMessages((prev) => [...prev, { sender: "user", text: userMessage }]);
		setInput("");
		setIsTyping(true);

		try {
			const response = await fetch("/api/marco-bot", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ question: userMessage }),
			});

			const data = await response.json();
			setMessages((prev) => [
				...prev,
				{
					sender: "bot",
					text: data.answer || "I couldn't find an answer to that.",
				},
			]);
		} catch (err) {
			console.error(err);
			setMessages((prev) => [
				...prev,
				{
					sender: "bot",
					text: "Sorry, something went wrong while getting the answer.",
				},
			]);
		} finally {
			setIsTyping(false);
		}
	}

	return (
		<section id="chat" className="h-full flex flex-col">
			<h3 className="text-xl font-sketch mb-4 text-center text-blueprint-accent">
				Chat with My Resume
			</h3>
			<p className="text-blueprint-text-dim text-sm mb-4 text-center">
				Curious if I'm a fit? Ask me questions directly here.
			</p>

			{/* Chat window */}
			<div className="flex-1 overflow-y-auto mb-4 p-3 border-2 border-dashed border-blueprint-grid rounded bg-blueprint-bg/50">
				{messages.map((msg, i) => (
					<div
						key={i}
						className={`mb-3 ${msg.sender === "user" ? "text-right" : "text-left"}`}
					>
						<p
							className={`inline-block max-w-[85%] break-words px-3 py-2 rounded-lg text-sm font-mono ${
								msg.sender === "user"
									? "bg-blueprint-accent text-blueprint-bg"
									: "bg-blueprint-bg-light border border-dashed border-blueprint-text-dim text-blueprint-text"
							}`}
						>
							{msg.text}
						</p>
					</div>
				))}

				{isTyping && (
					<div className="text-left">
						<p className="inline-block px-3 py-2 rounded-lg italic animate-pulse bg-blueprint-bg-light text-blueprint-text-dim text-sm">
							Marco's Assistant is typing…
						</p>
					</div>
				)}
			</div>

			{/* Input */}
			<div className="flex gap-2">
				<input
					value={input}
					onChange={(e) => setInput(e.target.value)}
					onKeyUp={(e) => e.key === "Enter" && sendMessage()}
					placeholder="Ask me about my experience..."
					className="flex-1 px-3 py-2 rounded border-2 border-dashed border-blueprint-grid
                     bg-blueprint-bg text-blueprint-text placeholder-blueprint-text-dim
                     focus:outline-none focus:border-blueprint-accent focus:
                     font-mono text-sm transition-all duration-300"
				/>
				<button onClick={sendMessage} className="blueprint-btn text-sm">
					Send
				</button>
			</div>
		</section>
	);
}
