<template>
	<div class="max-w-6xl mx-auto">
		<h3 class="text-3xl font-semibold mb-8 text-center">Skill Heatmap</h3>
		<div class="overflow-x-auto">
			<table class="table-auto border-collapse w-full text-sm text-center">
				<thead>
					<tr class="bg-gray-100">
						<th class="p-3 text-left sticky left-0 bg-gray-100 z-10">Category</th>
						<th class="p-3">TypeScript</th>
						<th class="p-3">JavaScript</th>
						<th class="p-3">React</th>
						<th class="p-3">Vue</th>
						<th class="p-3">Next.js</th>
						<th class="p-3">Node.js</th>
						<th class="p-3">Python</th>
						<th class="p-3">GraphQL</th>
						<th class="p-3">SQL</th>
						<th class="p-3">NoSQL</th>
						<th class="p-3">PostgreSQL</th>
						<th class="p-3">Docker</th>
						<th class="p-3">CI/CD</th>
						<th class="p-3">Accessibility</th>
						<th class="p-3">Mentorship</th>
						<th class="p-3">AI/ML</th>
					</tr>
				</thead>
				<tbody>
					<!-- Frontend -->
					<tr>
						<td class="p-3 font-medium text-left sticky left-0 bg-white z-10">Frontend</td>
						<td class="p-3 bg-indigo-600 text-white"
							title="Core language for projects at Bitwise & Pressed Juicery">Expert</td>
						<td class="p-3 bg-indigo-600 text-white" title="Used across all roles for frontend development">
							Expert</td>
						<td class="p-3 bg-indigo-600 text-white"
							title="Migrated Angular to React at Bitwise, taught React at Bitwise">Expert</td>
						<td class="p-3 bg-indigo-600 text-white"
							title="Built customer apps at Pressed Juicery with Vue">Expert</td>
						<td class="p-3 bg-indigo-400 text-white" title="Used at Bitwise for modernization projects">
							Advanced</td>
						<td class="p-3 bg-gray-200">—</td>
						<td class="p-3 bg-gray-200">—</td>
						<td class="p-3 bg-indigo-400 text-white" title="Built GraphQL APIs at Pressed Juicery">Advanced
						</td>
						<td class="p-3 bg-gray-200">—</td>
						<td class="p-3 bg-gray-200">—</td>
						<td class="p-3 bg-gray-200">—</td>
						<td class="p-3 bg-gray-200">—</td>
						<td class="p-3 bg-gray-200">—</td>
						<td class="p-3 bg-indigo-600 text-white"
							title="Resolved 50+ WCAG audit issues at Pressed Juicery">Expert</td>
						<td class="p-3 bg-indigo-400 text-white" title="Mentored juniors at Bitwise">Advanced</td>
						<td class="p-3 bg-gray-200">—</td>
					</tr>
					<!-- Backend -->
					<tr>
						<td class="p-3 font-medium text-left sticky left-0 bg-white z-10">Backend</td>
						<td class="p-3 bg-gray-200">—</td>
						<td class="p-3 bg-gray-200">—</td>
						<td class="p-3 bg-gray-200">—</td>
						<td class="p-3 bg-gray-200">—</td>
						<td class="p-3 bg-gray-200">—</td>
						<td class="p-3 bg-indigo-600 text-white"
							title="Built APIs and internal tools at Pressed Juicery & Ordrslip">Expert</td>
						<td class="p-3 bg-indigo-400 text-white" title="Developed apps with React + Python at Ordrslip">
							Advanced</td>
						<td class="p-3 bg-indigo-400 text-white" title="GraphQL APIs at Pressed Juicery">Advanced</td>
						<td class="p-3 bg-indigo-300 text-white" title="Taught SQL at Bitwise, used in projects">
							Proficient</td>
						<td class="p-3 bg-indigo-300 text-white" title="Taught NoSQL at Bitwise">Proficient</td>
						<td class="p-3 bg-indigo-400 text-white"
							title="Data migrations and ops support at Pressed Juicery">Advanced</td>
						<td class="p-3 bg-indigo-300 text-white" title="Containerized apps for scalability">Proficient
						</td>
						<td class="p-3 bg-indigo-300 text-white" title="Set up pipelines at Bitwise">Proficient</td>
						<td class="p-3 bg-gray-200">—</td>
						<td class="p-3 bg-gray-200">—</td>
						<td class="p-3 bg-indigo-300 text-white"
							title="Experimenting with TensorFlow, Brain.js, Hugging Face">Exploring</td>
					</tr>
					<!-- Infra & Leadership -->
					<tr>
						<td class="p-3 font-medium text-left sticky left-0 bg-white z-10">Infra & Leadership</td>
						<td class="p-3 bg-gray-200">—</td>
						<td class="p-3 bg-gray-200">—</td>
						<td class="p-3 bg-gray-200">—</td>
						<td class="p-3 bg-gray-200">—</td>
						<td class="p-3 bg-gray-200">—</td>
						<td class="p-3 bg-gray-200">—</td>
						<td class="p-3 bg-gray-200">—</td>
						<td class="p-3 bg-gray-200">—</td>
						<td class="p-3 bg-gray-200">—</td>
						<td class="p-3 bg-gray-200">—</td>
						<td class="p-3 bg-gray-200">—</td>
						<td class="p-3 bg-indigo-400 text-white" title="Docker for app environments">Advanced</td>
						<td class="p-3 bg-indigo-400 text-white" title="Implemented CI/CD pipelines at Bitwise">Advanced
						</td>
						<td class="p-3 bg-gray-200">—</td>
						<td class="p-3 bg-indigo-500 text-white" title="Led and mentored 6 developers at Bitwise">Expert
						</td>
						<td class="p-3 bg-gray-200">—</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>
