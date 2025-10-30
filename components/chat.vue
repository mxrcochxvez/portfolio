<template>
	<section id="chat">
		<div class="max-w-3xl mx-auto text-gray-900 dark:text-gray-100">
			<h3 class="text-3xl font-semibold mb-6 text-center">Chat with My Resume</h3>
			<p class="text-gray-600 dark:text-gray-300 mb-6 text-center">
				Curious if I’m a fit for your team? Ask me questions directly here.
			</p>

			<!-- Chat window -->
			<div
				class="border rounded-xl shadow p-4 h-80 overflow-y-auto mb-4
               bg-white dark:bg-gray-800
               border-gray-200 dark:border-gray-700">
				<div v-for="(msg, i) in messages" :key="i" class="mb-3">
					<!-- user -->
					<div v-if="msg.sender === 'user'" class="text-right">
						<p class="inline-block max-w-[85%] break-words
                       bg-indigo-600 text-white
                       dark:bg-indigo-500
                       px-3 py-2 rounded-lg">
							{{ msg.text }}
						</p>
					</div>
					<!-- bot -->
					<div v-else class="text-left">
						<p class="inline-block max-w-[85%] break-words
                       bg-gray-200 text-gray-900
                       dark:bg-gray-700 dark:text-gray-100
                       px-3 py-2 rounded-lg">
							{{ msg.text }}
						</p>
					</div>
				</div>

				<!-- Typing indicator -->
				<div v-if="isTyping" class="text-left">
					<p class="inline-block px-3 py-2 rounded-lg italic animate-pulse
                     bg-gray-200 text-gray-600
                     dark:bg-gray-700 dark:text-gray-300">
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
					class="flex-1 px-3 py-2 rounded-l-lg border
	                 bg-white text-gray-900 placeholder-gray-500
	                 dark:bg-gray-800 dark:text-gray-100 dark:placeholder-gray-400
	                 border-gray-300 dark:border-gray-600
	                 focus:outline-none focus:ring-2 focus:ring-indigo-500"
				/>
				<button
					@click="sendMessage"
					class="px-4 rounded-r-lg text-white
	                 bg-indigo-600 hover:bg-indigo-700
	                 dark:bg-indigo-500 dark:hover:bg-indigo-600
	                 focus:outline-none focus:ring-2 focus:ring-indigo-500"
				>
					Send
				</button>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
	import { ref } from 'vue'
	import { useMarcoBot } from '~/composables/useMarcoBot'

	interface Message { sender: 'user' | 'bot'; text: string }

	const { getAnswer } = useMarcoBot()

	const messages = ref<Message[]>([
		{ sender: 'bot', text: "Hi, I’m Marco’s portfolio assistant! Ask me about his work experience or skills." }
	])
	const input = ref('')
	const isTyping = ref(false)

	async function sendMessage() {
		if (!input.value.trim()) return
		const userMessage = input.value
		messages.value.push({ sender: 'user', text: userMessage })
		input.value = ''
		isTyping.value = true
		try {
			const reply = await getAnswer(userMessage)
			messages.value.push({ sender: 'bot', text: reply })
		} catch (err) {
			console.error(err)
			messages.value.push({ sender: 'bot', text: 'Sorry, something went wrong while getting the answer.' })
		} finally {
			isTyping.value = false
		}
	}
</script>
