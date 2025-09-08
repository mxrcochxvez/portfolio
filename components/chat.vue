<template>
	<section id="chat" class="bg-gray-50 py-16 px-4">
		<div class="max-w-3xl mx-auto">
			<h3 class="text-3xl font-semibold mb-6 text-center">Chat with My Resume</h3>
			<p class="text-gray-600 mb-6 text-center">
				Curious if I’m a fit for your team? Ask me questions directly here.
			</p>

			<!-- Chat window -->
			<div class="border rounded-xl bg-white shadow p-4 h-96 overflow-y-auto mb-4">
				<div v-for="(msg, i) in messages" :key="i" class="mb-3">
					<div v-if="msg.sender === 'user'" class="text-right">
						<p class="inline-block bg-indigo-600 text-white px-3 py-2 rounded-lg">
							{{ msg.text }}
						</p>
					</div>
					<div v-else class="text-left">
						<p class="inline-block bg-gray-200 text-gray-800 px-3 py-2 rounded-lg">
							{{ msg.text }}
						</p>
					</div>
				</div>

				<!-- Typing indicator -->
				<div v-if="isTyping" class="text-left">
					<p class="inline-block bg-gray-200 text-gray-600 px-3 py-2 rounded-lg italic animate-pulse">
						Marco’s Assistant is typing…
					</p>
				</div>
			</div>

			<!-- Input -->
			<div class="flex">
				<input
					v-model="input"
					@keyup.enter="sendMessage"
					placeholder="Ask me about my experience..."
					class="flex-1 border rounded-l-lg px-3 py-2 focus:outline-none"
				/>
				<button
					@click="sendMessage"
					class="bg-indigo-600 text-white px-4 rounded-r-lg hover:bg-indigo-700"
				>
					Send
				</button>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { pipeline } from "@xenova/transformers";

interface Message {
	sender: "user" | "bot";
	text: string;
}

const messages = ref<Message[]>([
	{ sender: "bot", text: "Hi, I’m Marco’s portfolio assistant! Ask me about his work experience or skills." }
]);
const input = ref("");
const isTyping = ref(false);

// Initialize generator
let generator: any = null;

async function loadModel() {
	if (!generator) {
		// First time: load the model (downloads weights into browser cache)
		generator = await pipeline("text-generation", "Xenova/distilgpt2");
	}
	return generator;
}

async function askLLM(prompt: string): Promise<string> {
	const generator = await loadModel();
	const output = await generator(prompt, {
		max_new_tokens: 60,
		temperature: 0.7,
		top_p: 0.9
	});
	return output[0].generated_text;
}

async function sendMessage() {
	if (!input.value.trim()) return;

	const userMessage = input.value;
	messages.value.push({ sender: "user", text: userMessage });
	input.value = "";
	isTyping.value = true;

	try {
		const reply = await askLLM(userMessage);
		messages.value.push({ sender: "bot", text: reply });
	} catch (err) {
		console.error(err);
		messages.value.push({
			sender: "bot",
			text: "Error running the local model."
		});
	} finally {
		isTyping.value = false;
	}
}
</script>
