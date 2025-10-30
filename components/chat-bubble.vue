<template>
	<div class="fixed bottom-4 right-4 z-50">
		<button
			class="h-12 w-12 rounded-full bg-indigo-600 text-white shadow-lg hover:bg-indigo-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-400"
			aria-haspopup="dialog"
			:aria-expanded="open ? 'true' : 'false'"
			aria-controls="marcobot-panel"
			@click="toggle()">
			<span class="sr-only">Open MarcoBot chat</span>
			💬
		</button>

		<transition name="fade">
			<div
				v-if="open"
				id="marcobot-panel"
				role="dialog"
				aria-modal="true"
				class="bg-gray-300 dark:bg-gray-800 mt-2 p-4 w-[min(92vw,28rem)] h-[min(70vh,36rem)] rounded-xl shadow-2xl border bg-white overflow-visible flex flex-col">
				<Chat />
			</div>
		</transition>
	</div>
</template>

<script setup lang="ts">
import Chat from '~/components/chat.vue'

const open = ref(false)
function toggle() {
	open.value = !open.value
}

onMounted(() => {
	const onKey = (e: KeyboardEvent) => {
		if (e.key === 'Escape') open.value = false
	}
	window.addEventListener('keydown', onKey)
	onBeforeUnmount(() => window.removeEventListener('keydown', onKey))
})
</script>

<style>
.fade-enter-active, .fade-leave-active { transition: opacity 150ms ease, transform 150ms ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; transform: translateY(4px); }
/* Compact the embedded chat inside the bubble */
:deep(#chat) {
  padding: 0.5rem; /* compact padding */
  background: transparent;
  height: 100%;
}
:deep(#chat > div) {
  max-width: none; /* allow full panel width */
  display: flex;
  flex-direction: column;
  height: 100%;
}
:deep(#chat .h-96) {
  height: auto;          /* override fixed height */
  flex: 1 1 auto;        /* grow to fill available space */
  min-height: 0;         /* allow inner scroll */
}
@media (max-height: 760px) { :deep(#chat .h-96) { max-height: 14rem; } }
</style>

