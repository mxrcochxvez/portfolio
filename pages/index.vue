<template>
	<div
		class="min-h-screen bg-gray-50 text-gray-800 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">
		<section class="max-w-5xl mx-auto text-center py-20">
			<h2 class="text-4xl md:text-5xl font-bold mb-4">
				Senior Full-Stack Engineer | Driving Performance, Accessibility & Scalable Systems
			</h2>
			<p class="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4 transition-colors duration-300">
				6+ years leading modernization of SaaS, e-commerce, and mobile platforms.
				Proven record of increasing conversions, reducing workflows, and mentoring high-output dev teams.
			</p>
			<div class="flex gap-2 justify-center">
				<a href="#projects"
					class="mt-6 inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg shadow hover:bg-indigo-700 transition">
					View My Work
				</a>
				<a href="https://calendar.app.google/6e6e3UNCBFGmeNea6"
					target="_blank"
					class="mt-6 inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg shadow hover:bg-indigo-700 transition">
					📆 Book a 15-minute call 📆
				</a>
			</div>
		</section>

		<SkillsHeatmap />

		<section class="bg-white dark:bg-gray-800 py-16 px-4 transition-colors duration-300">
			<div class="max-w-5xl mx-auto text-center">
				<h3 class="text-3xl font-semibold mb-8">Career Highlights</h3>
				<div class="grid md:grid-cols-3 gap-8">
					<div>
						<h4 class="text-2xl font-bold text-indigo-600 dark:text-indigo-400">40%</h4>
						<p class="text-gray-600 dark:text-gray-300">Aided in Faster checkout workflows at Pressed
							Juicery</p>
					</div>
					<div>
						<h4 class="text-2xl font-bold text-indigo-600 dark:text-indigo-400">6</h4>
						<p class="text-gray-600 dark:text-gray-300">Developers mentored at Bitwise Industries</p>
					</div>
					<div>
						<h4 class="text-2xl font-bold text-indigo-600 dark:text-indigo-400">25%</h4>
						<p class="text-gray-600 dark:text-gray-300">Reduced delivery times with shared component
							libraries</p>
					</div>
				</div>
			</div>
		</section>

		<WorkExperiences />

		<section class="bg-gray-50 dark:bg-gray-900 py-16 px-4 transition-colors duration-300">
			<div class="max-w-5xl mx-auto">
				<h3 class="text-3xl font-semibold mb-8">Leadership & Mentorship</h3>
				<ul class="list-disc pl-6 text-gray-700 dark:text-gray-300 leading-relaxed">
					<li>Mentored 6 junior developers in TypeScript, accessibility, and testing best practices.</li>
					<li>Served as instructor at Bitwise Industries, teaching React, SQL, and JavaScript.</li>
					<li>Encouraged adoption of automated and manual Testing/QA, boosting release confidence by 45%.</li>
				</ul>
			</div>
		</section>

		<section id="projects" class="bg-gray-50 dark:bg-gray-900 py-16 px-4 transition-colors duration-300">
			<div class="max-w-5xl mx-auto">
				<h3 class="text-3xl font-semibold mb-10">Projects</h3>
				<div class="grid md:grid-cols-2 gap-8">
					<div class="bg-white dark:bg-gray-800 rounded-xl shadow p-6 hover:shadow-lg transition">
						<h4 class="text-xl font-bold mb-2">Hotel GraphQL Server</h4>
						<p class="text-gray-600 dark:text-gray-300 mb-4">
							A TypeScript and Drizzle ORM powered GraphQL API for hotel reservations.
						</p>
						<a href="https://github.com/mxrcochxvez/hotel-server-graphql" target="_blank"
							class="text-indigo-600 dark:text-indigo-400 font-medium hover:underline">
							View on GitHub →
						</a>
					</div>
					<div class="bg-white dark:bg-gray-800 rounded-xl shadow p-6 hover:shadow-lg transition">
						<h4 class="text-xl font-bold mb-2">Neural Networks</h4>
						<p class="text-gray-600 dark:text-gray-300 mb-4">
							Experimenting with brain.js to solve the XOR problem and explore machine learning
							fundamentals.
						</p>
						<a href="https://github.com/mxrcochxvez/neural-networks" target="_blank"
							class="text-indigo-600 dark:text-indigo-400 font-medium hover:underline">
							View on GitHub →
						</a>
					</div>
				</div>
			</div>
		</section>

		<section id="contact" class="max-w-5xl mx-auto py-16 px-4 text-center">
			<h3 class="text-3xl font-semibold mb-6">Get in Touch</h3>
			<p class="text-gray-700 dark:text-gray-300 mb-6">
				I’m always open to new opportunities and collaborations.
			</p>
			<div class="flex flex-col sm:flex-row justify-center gap-4">
				<a href="mailto:marcode.chavez.jr@gmail.com"
					class="bg-indigo-600 text-white px-6 py-3 rounded-lg shadow hover:bg-indigo-700 transition">
					Email Me
				</a>
				<a href="/Marco_Chavez_Jr_-_Software_Developer.pdf" download
					class="bg-gray-800 dark:bg-gray-700 text-white px-6 py-3 rounded-lg shadow hover:bg-gray-900 dark:hover:bg-gray-600 transition">
					Download Resume
				</a>
			</div>
		</section>

		<section class="bg-white dark:bg-gray-800 py-12 px-4 transition-colors duration-300">
			<div class="max-w-5xl mx-auto text-center">
				<h3 class="text-xl font-semibold mb-6">Trusted by:</h3>
				<div class="flex justify-center gap-8">
					<img src="/img/pj.svg" alt="Pressed Juicery" class="h-12 bg-black rounded-full p-1">
					<img src="/img/bitwise.png" alt="Bitwise Industries" class="h-12 rounded-md bg-black p-1">
					<img src="/img/ordrslip.jpeg" alt="Ordrslip" class="h-12">
					<img src="/img/RosenbalmRockeryLogo.jpg" alt="Rosenbalm Rockery" class="h-12">
					<img src="/img/lexiillc.jpg" alt="Lexii LLC" class="h-12 rounded-md bg-black p-1">
				</div>
				<div class="opacity-40 text-sm italic mt-6">I do not own these images</div>
			</div>
		</section>

		<footer
			class="bg-gray-100 dark:bg-gray-900 py-6 text-center text-gray-600 dark:text-gray-400 text-sm transition-colors duration-300">
			© {{ new Date().getFullYear() }} Marco Chavez Jr. All rights reserved.
		</footer>
	</div>
</template>
