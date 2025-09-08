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

interface Message {
	sender: "user" | "bot";
	text: string;
}

const messages = ref<Message[]>([
	{ sender: "bot", text: "Hi, I’m Marco’s portfolio assistant! Ask me about his work experience or skills." }
]);
const input = ref("");

// Grab API key from Vite env
const HF_API_KEY = import.meta.env.VITE_HF_API_KEY;

// Resume context
const resumeContext = `
I'm Marco, a dependable Full-Stack Software Developer with over 6 years of experience driving accessibility, performance, and maintainability across web and mobile applications. I thrive in environments that value autonomy, mentorship, and problem-solving, where every change makes a meaningful impact on both the team and the user base.

Work Experience
Software Engineer - Pressed Juicery
Jul 2023 - Aug 2025 | Clovis, CA
- Developed and scaled customer-facing apps with TypeScript, Vue, REST, and GraphQL.
- Built internal tools reducing manual workflows by 30%.
- Co-created npm component libraries cutting delivery time by 25%.
- Resolved 50+ accessibility audit issues, ensuring WCAG compliance.

Lead Software Developer - Bitwise Industries
Sep 2021 - Jun 2023 | Fresno, CA
- Migrated Angular apps to React and Next.js for maintainability.
- Led and mentored 6 junior and apprentice developers.
- Increased test coverage by 45% with automated testing.
- Implemented CI/CD pipelines, reducing deployment bottlenecks.

Course Instructor - Bitwise Industries
May 2022 - Jan 2023 | Fresno, CA
- Taught React, SQL, NoSQL, TypeScript, and Unit Testing.
- Facilitated group discussions to build problem-solving skills.

Software Developer - Ordrslip
Apr 2020 - Sep 2021 | Fresno, CA
- Developed apps with React, Python, and CSS for scalable solutions.
- Built APIs and integrated external services to enhance UX.
- Created internal tools for sales metrics to drive marketing decisions.
- Maintained a SaaS app ensuring uptime, performance, and usability.
`;

async function sendMessage() {
	if (!input.value.trim()) return;
	const userMessage = input.value;
	messages.value.push({ sender: "user", text: userMessage });
	input.value = "";

	try {
		const response = await fetch(
			"https://api-inference.huggingface.co/models/deepset/roberta-base-squad2", // better for Q&A
			{
				method: "POST",
				headers: {
					Authorization: `Bearer ${HF_API_KEY}`,
			    "Content-Type": "application/json"
        },
				body: JSON.stringify({
					inputs: {
						question: userMessage,
						context: resumeContext
					}
				})
			}
		);

		const data = await response.json();

		// Squad-style models return {answer: "..."}
		let reply = "I couldn’t generate a response.";
		if (data?.answer) {
			reply = data.answer;
		}

	console.log(data);

		messages.value.push({ sender: "bot", text: reply });
	} catch (err) {
		console.error(err);
		messages.value.push({
			sender: "bot",
			text: "Error connecting to AI service."
		});
	}
}
</script>
