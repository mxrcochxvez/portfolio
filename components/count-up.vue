<template>
	<span class="font-semibold tabular-nums">{{ value }}</span>
</template>

<script setup lang="ts">
	import { ref, onMounted, onBeforeUnmount } from 'vue'

	const props = withDefaults(defineProps<{
		start?: number
		end?: number
		stepMs?: number
	}>(), {
		start: 0,
		end: 6,
		stepMs: 200, // 0.2s per tick → ~1.2s total for 0→6
	})

	const value = ref(props.start)
	let timer: ReturnType<typeof setInterval> | null = null

	onMounted(() => {
		// Respect reduced motion: jump straight to end
		const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
		if (prefersReduced || props.start >= props.end) {
			value.value = props.end
			return
		}

		timer = setInterval(() => {
			if (value.value < props.end) value.value += 1
			if (value.value >= props.end && timer) {
				clearInterval(timer)
				timer = null
			}
		}, props.stepMs)
	})

	onBeforeUnmount(() => {
		if (timer) clearInterval(timer)
	})
</script>
