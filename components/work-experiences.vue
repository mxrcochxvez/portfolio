<template>
	<section id="experience" class="bg-white py-16 px-4">
		<div class="max-w-5xl mx-auto">
			<h3 class="text-3xl font-semibold mb-12 text-center">Work Experience</h3>

			<div class="relative">
				<div class="hidden md:block absolute inset-y-0 left-1/2 w-px bg-gray-300 -translate-x-1/2"></div>

				<div v-for="(job, i) in jobs" :key="i" class="relative mb-12 md:mb-16">

					<span
						class="hidden md:block absolute top-4 left-1/2 -translate-x-1/2 w-4 h-4 bg-indigo-600 rounded-full ring-4 ring-white"
					></span>

					<div
						:class="[
							'p-6 bg-gray-50 rounded-xl shadow hover:shadow-md transition',
							'md:w-1/2',
							i % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
						]"
					>
						<h4 class="text-xl font-bold text-gray-800">
							{{ job.title }} - {{ job.company }}
						</h4>
						<p class="text-sm text-gray-500">{{ job.dates }} | {{ job.location }}</p>
						<ul class="list-disc list-inside mt-3 text-gray-700 space-y-1">
							<li v-for="(point, j) in job.points" :key="j">{{ point }}</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
const jobs = [
	{
		title: "Software Engineer",
		company: "Pressed Juicery",
		dates: "Jul 2023 - Aug 2025",
		location: "Clovis, CA",
		points: [
			"Developed and scaled customer-facing apps with TypeScript, Vue, REST, and GraphQL.",
			"Built internal tools reducing manual workflows by 30%.",
			"Co-created npm component libraries cutting delivery time by 25%.",
			"Resolved 50+ accessibility audit issues, ensuring WCAG compliance."
		]
	},
	{
		title: "Lead Software Developer",
		company: "Bitwise Industries",
		dates: "Sep 2021 - Jun 2023",
		location: "Fresno, CA",
		points: [
			"Migrated Angular apps to React and Next.js for maintainability.",
			"Led and mentored 6 junior and apprentice developers.",
			"Increased test coverage by 45% with automated testing.",
			"Implemented CI/CD pipelines, reducing deployment bottlenecks."
		]
	},
	{
		title: "Course Instructor",
		company: "Bitwise Industries",
		dates: "May 2022 - Jan 2023",
		location: "Fresno, CA",
		points: [
			"Taught React, SQL, NoSQL, TypeScript, and Unit Testing.",
			"Facilitated group discussions to build problem-solving skills."
		]
	},
	{
		title: "Software Developer",
		company: "Ordrslip",
		dates: "Apr 2020 - Sep 2021",
		location: "Fresno, CA",
		points: [
			"Developed apps with React, Python, and CSS for scalable solutions.",
			"Built APIs and integrated external services to enhance UX.",
			"Created internal tools for sales metrics to drive marketing decisions.",
			"Maintained a SaaS app ensuring uptime, performance, and usability."
		]
	}
];
</script>
