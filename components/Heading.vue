<template>
	<component :is="tag" :class="classes">
		<slot />
	</component>
</template>

<script lang="ts" setup>
	import { computed } from 'vue';
	import { defineProps } from 'vue';

	const props = defineProps<{
		level: number;
		class?: string;
	}>();

	const tag = computed(() => `h${props.level ?? 1}`);

	const classes = computed(() => {
		const defaultStyles = {
			1: 'text-4xl font-bold',
			2: 'text-3xl font-semibold',
			3: 'text-2xl font-semibold',
			4: 'text-xl font-medium',
			5: 'text-lg font-medium',
			6: 'text-base font-medium',
		};

		return `${defaultStyles[props.level as keyof typeof defaultStyles ?? 1]} ${props.class ?? ''}`;
	});
</script>
