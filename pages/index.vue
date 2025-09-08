<template>
	<div class="min-h-screen bg-gray-50 text-gray-800 font-sans">
		<section class="max-w-5xl mx-auto text-center py-20">
			<h2 class="text-4xl md:text-5xl font-bold mb-4">Senior Full-Stack Developer</h2>
			<p class="text-lg text-gray-600">
				TypeScript • React • Vue • Node.js • GraphQL • Accessibility-Driven UI
			</p>
			<a
				href="#projects"
				class="mt-6 inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg shadow hover:bg-indigo-700 transition"
			>
				View My Work
			</a>
		</section>

		<section id="about" class="max-w-5xl mx-auto py-8 px-4">
			<h3 class="text-3xl font-semibold mb-6">About Me</h3>
			<p class="text-gray-700 leading-relaxed">
				I’m Marco, a dependable Full-Stack Software Developer with over 6 years
				of experience driving accessibility, performance, and maintainability
				across web and mobile applications. I thrive in environments that value
				autonomy, mentorship, and problem-solving, where every change makes a
				meaningful impact on both the team and the user base.
			</p>
		</section>

		<WorkExperiences />

		<section id="projects" class="bg-gray-50 py-16 px-4">
			<div class="max-w-5xl mx-auto">
				<h3 class="text-3xl font-semibold mb-10">Projects</h3>
				<div class="grid md:grid-cols-2 gap-8">
					<div class="bg-white rounded-xl shadow p-6 hover:shadow-lg transition">
						<h4 class="text-xl font-bold mb-2">Hotel GraphQL Server</h4>
						<p class="text-gray-600 mb-4">
							A TypeScript and Drizzle ORM powered GraphQL API for hotel reservations.
						</p>
						<a
							href="https://github.com/mxrcochxvez/hotel-server-graphql"
							target="_blank"
							class="text-indigo-600 font-medium hover:underline"
						>
							View on GitHub →
						</a>
					</div>

					<div class="bg-white rounded-xl shadow p-6 hover:shadow-lg transition">
						<h4 class="text-xl font-bold mb-2">Neural Networks</h4>
						<p class="text-gray-600 mb-4">
							Experimenting with brain.js to solve the XOR problem and explore machine learning fundamentals.
						</p>
						<a
							href="https://github.com/mxrcochxvez/neural-networks"
							target="_blank"
							class="text-indigo-600 font-medium hover:underline"
						>
							View on GitHub →
						</a>
					</div>
				</div>
			</div>
		</section>

		<section id="contact" class="max-w-5xl mx-auto py-16 px-4 text-center">
		<h3 class="text-3xl font-semibold mb-6">Get in Touch</h3>
		<p class="text-gray-700 mb-6">
			I’m always open to new opportunities and collaborations.
		</p>
		<div class="flex flex-col sm:flex-row justify-center gap-4">
			<a
			href="mailto:marcode.chavez.jr@gmail.com"
			class="bg-indigo-600 text-white px-6 py-3 rounded-lg shadow hover:bg-indigo-700 transition"
			>
			Email Me
			</a>

			<a
			href="/Marco_Chavez_Jr_-_Software_Developer.pdf"
			download
			class="bg-gray-800 text-white px-6 py-3 rounded-lg shadow hover:bg-gray-900 transition"
			>
			Download Resume
			</a>
		</div>
		</section>


		<footer class="bg-gray-100 py-6 text-center text-gray-600 text-sm">
			© {{ new Date().getFullYear() }} Marco Chavez Jr. All rights reserved.
		</footer>
	</div>
</template>
