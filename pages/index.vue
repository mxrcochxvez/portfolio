<template>
	<div>
		<Hero
			:heading-level="2"
			heading-text="Strategy. Story. Then Sales."
			:body-text="bodyText"
			button-text="Begin your digital journey"
			image-src="/img/storyboarding.jpg"
			image-alt="An image of someone drafting up an idea"
		/>
	</div>
</template>

<script lang="ts" setup>
	import Hero from '~/components/Hero.vue';

	const bodyText = 'I help brands grow by crafting marketing strategies that connect, stories that resonate, and campaigns that convert. Whether you\'re building from scratch or scaling up, I bring clarity, creativity, and results to every stage of your journey.'
</script>

<style>

</style>
