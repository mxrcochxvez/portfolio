<template>
	<section :class="[$style.headingSection, 'bg-violet-950 text-white']">
		<img :class="$style.bannerImage" :src="bannerImageUrl" alt="Strategy. Story. Then Sales." />

		<div>
			<p>With over 6 years of experience in the industry. In jobs related to ecommerce, SaaS, and internal tooling. I am an expert in accessibility, performance, and bringing your projects to the finish line.</p>
			<a class="text-sm underline underline-offset-4 hidden md:inline-block" href="#about-me">Read More...</a>
		</div>
	</section>

	<section id="about-me" :class="[$style.aboutMeSection, 'bg-white text-black']">
		<Heading :level="2">About Me</Heading>

		<div class="flex flex-col items-center gap-4 pt-4 md:flex-row md:gap-8 md:px-56">
			<div class="flex flex-col items-center">
				<img :class="$style.myImage" :src="myImageUrl" alt="" />
				<Heading :level="3" class="mt-4 md:text-sm">Marco Chavez</Heading>
			</div>

			<div>
				<p>Dependable and reliable software developer with a strong focus on accessibility, performance, and maintainability across the full stack. Experienced in leveraging modern technologies to deliver fast, efficient API integrations and building scalable component libraries for both mobile and web applications. Committed to mentorship, clear documentation, and collaborative practices that help teams grow while ensuring long-term project success.</p>
			</div>
		</div>
	</section>

	<section :class="[$style.workHistorySection, 'bg-purple-200']">
		<Heading :level="2">Work History</Heading>

		<WorkExperiencesCards :experiences="experiences" />
	</section>
</template>

<script lang="ts" setup>
	import { useWorkExperiences } from '~/constants/work-experiences';

	const experiences = useWorkExperiences();

	const bannerImageUrl = 'https://i.imgur.com/LcukdRk.png';
	const myImageUrl = 'https://media.licdn.com/dms/image/v2/D5635AQGJhnw3xPTA0w/profile-framedphoto-shrink_400_400/B56ZjSt5n1IEAg-/0/1755881905006?e=1756594800&v=beta&t=kdr1zvPaTrKHmcH2J9XQ39_j9n7NpvDsZ8KYtkYpIBg';
</script>

<style lang="scss" module>
	@mixin sectionSpacing($verticalPadding) {
		padding: $verticalPadding 24px;
	}

	.bannerImage {
		max-width: 600px;
	}

	.headingSection {
		@include sectionSpacing(64px);
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 24px;
	}

	.readMoreButton {
		display: none;
	}

	.myImage {
		max-width: 150px;
		border-radius: 50%;
	}

	.aboutMeSection {
		@include sectionSpacing(24px);
	}

	.workHistorySection {
		@include sectionSpacing(24px);
	}

	@media (min-width: 600px) {
		.headingSection {
			flex-direction: row;
			align-items: center;
			font-size: 1.5rem;
		}
	}
</style>
