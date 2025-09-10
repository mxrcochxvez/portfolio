<template>
	<button @click="toggleDark" class="fixed top-4 right-4 w-16 h-8 flex items-center rounded-full transition-colors duration-500 shadow-lg
           bg-gray-200 dark:bg-gray-700">
		<span
			class="h-6 w-6 flex items-center justify-center rounded-full bg-white dark:bg-gray-900 shadow-md transform transition-transform duration-500"
			:class="isDark ? 'translate-x-8' : 'translate-x-1'">

			<span v-if="!isDark" class="text-yellow-400">☀️</span>
			<span v-else class="text-indigo-300">🌙</span>
		</span>
	</button>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const isDark = ref(false)

onMounted(() => {
	isDark.value =
		localStorage.theme === 'dark' ||
		(!('theme' in localStorage) &&
			window.matchMedia('(prefers-color-scheme: dark)').matches)

	document.documentElement.classList.toggle('dark', isDark.value)
})

const toggleDark = () => {
	isDark.value = !isDark.value
	document.documentElement.classList.toggle('dark', isDark.value)
	localStorage.theme = isDark.value ? 'dark' : 'light'
}
</script>
