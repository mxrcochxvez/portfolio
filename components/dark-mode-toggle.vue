<template>
	<button @click="toggleDark"
		class="fixed top-4 right-4 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-2 rounded-lg shadow">
		{{ isDark ? '☀️ Light' : '🌙 Dark' }}
	</button>
</template>

<script setup lang="ts">
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
