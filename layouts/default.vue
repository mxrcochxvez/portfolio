<template>
	<main>
		<Navbar />
		<slot />
		<ChatBubble />
	</main>
</template>

<script setup lang="ts">
	import ChatBubble from '~/components/chat-bubble.vue';
</script>