<template>
  <section class="body-font">
			<div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
				<div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
					<Heading :level="headingLevel" class="title-font sm:text-4xl text-3xl mb-4 font-medium">{{ headingText }}</Heading>
					
					<p class="mb-8 leading-relaxed text-gray-300">{{ bodyText }}</p>
					
					<button v-if="buttonText" class="inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg rounded-lg">
						{{ buttonText }}
					</button>
				</div>
				<div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
					<img v-if="imageAlt && imageSrc" class="object-cover object-center rounded" :alt="imageAlt" :src="imageSrc">
				</div>
			</div>
		</section>
</template>

<script lang="ts" setup>
	import Heading from './Heading.vue';

	defineProps<{
		headingLevel: number,
		headingText: string,
		bodyText: string,
		buttonText?: string,
		imageSrc?: string,
		imageAlt?: string,
	}>();
</script>
