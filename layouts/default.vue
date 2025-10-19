<template>
	<main>
		<Navbar />
		<slot />
		<ApiStatus />
	</main>
</template>

<script setup lang="ts">
	import ApiStatus from '~/components/api-status.vue';
</script>