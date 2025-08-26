<template>
	<section :class="[$style.headingSection, 'bg-violet-950 text-white']">
		<div class="mx-auto max-w-6xl px-4 py-12 grid gap-10 md:grid-cols-12 items-start">
			<div class="md:col-span-7 space-y-5">
			<h1 class="text-3xl font-bold tracking-tight">Strategy. Story. Then Sales.</h1>

			<p class="text-lg text-white/90">
				With over
				<CountUp class="text-xl underline" :start="0" :end="6" :step-ms="300" />
				+ years in the industry.
			</p>

			<p class="text-white/80">
				Ecommerce, SaaS, and internal tooling specialist. Accessibility and performance focused. I ship work that moves KPIs.
			</p>

			<div class="flex flex-wrap gap-3 pt-2">
				<a href="https://calendar.app.google/MkYCxLCBQvuNFTTU9" target="_blank" class="inline-flex items-center rounded-xl px-4 py-2 font-medium bg-violet-800/40 text-white hover:bg-violet-800/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50">
				Book a 15-min call
				</a>
			</div>

			<!-- Fast proof: animated metrics -->
			<div class="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6">
				<div>
				<div class="text-3xl font-semibold tabular-nums">
					<CountUp :start="0" :end="6" :step-ms="120" />+
				</div>
				<div class="text-sm text-white/70">Years experience</div>
				</div>
				<div>
				<div class="text-3xl font-semibold tabular-nums">
					<CountUp :start="0" :end="24" :step-ms="60" />+
				</div>
				<div class="text-sm text-white/70">Projects shipped</div>
				</div>
				<div>
				<div class="text-3xl font-semibold tabular-nums">
					<CountUp :start="0" :end="18" :step-ms="80" />+
				</div>
				<div class="text-sm text-white/70">A11y audits/fixes</div>
				</div>
				<div>
				<div class="text-3xl font-semibold tabular-nums">
					<CountUp :start="0" :end="95" :step-ms="15" />%
				</div>
				<div class="text-sm text-white/70">Avg Lighthouse Perf</div>
				</div>
			</div>

			<a class="text-sm underline underline-offset-4 hidden md:inline-block" href="#about-me">Read more…</a>
			</div>

			<div class="md:col-span-5 space-y-5">
			</div>
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
		@include sectionSpacing(48px);
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
