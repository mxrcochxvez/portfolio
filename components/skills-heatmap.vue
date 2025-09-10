<template>
	<div class="max-w-6xl mx-auto">
		<h3 class="text-3xl font-semibold mb-8 text-center">Skill Heatmap</h3>
		<div class="overflow-x-auto">
			<table class="table-auto border-collapse w-full text-sm text-center">
				<thead>
					<tr class="bg-gray-100 dark:bg-gray-800">
						<th class="p-3 text-left sticky left-0 bg-gray-100 dark:bg-gray-800 z-10">Category</th>
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
						<td class="p-3 font-medium text-left sticky left-0 bg-white dark:bg-gray-900 z-10">Frontend</td>
						<td class="p-3 bg-indigo-600 text-white dark:bg-indigo-400">Expert</td>
						<td class="p-3 bg-indigo-600 text-white dark:bg-indigo-400">Expert</td>
						<td class="p-3 bg-indigo-600 text-white dark:bg-indigo-400">Expert</td>
						<td class="p-3 bg-indigo-600 text-white dark:bg-indigo-400">Expert</td>
						<td class="p-3 bg-indigo-400 text-white dark:bg-indigo-300">Advanced</td>
						<td class="p-3 bg-gray-200 dark:bg-gray-700">—</td>
						<td class="p-3 bg-gray-200 dark:bg-gray-700">—</td>
						<td class="p-3 bg-indigo-400 text-white dark:bg-indigo-300">Advanced</td>
						<td class="p-3 bg-gray-200 dark:bg-gray-700">—</td>
						<td class="p-3 bg-gray-200 dark:bg-gray-700">—</td>
						<td class="p-3 bg-gray-200 dark:bg-gray-700">—</td>
						<td class="p-3 bg-gray-200 dark:bg-gray-700">—</td>
						<td class="p-3 bg-gray-200 dark:bg-gray-700">—</td>
						<td class="p-3 bg-indigo-600 text-white dark:bg-indigo-400">Expert</td>
						<td class="p-3 bg-indigo-400 text-white dark:bg-indigo-300">Advanced</td>
						<td class="p-3 bg-gray-200 dark:bg-gray-700">—</td>
					</tr>
					<!-- Backend -->
					<tr>
						<td class="p-3 font-medium text-left sticky left-0 bg-white dark:bg-gray-900 z-10">Backend</td>
						<td class="p-3 bg-gray-200 dark:bg-gray-700">—</td>
						<td class="p-3 bg-gray-200 dark:bg-gray-700">—</td>
						<td class="p-3 bg-gray-200 dark:bg-gray-700">—</td>
						<td class="p-3 bg-gray-200 dark:bg-gray-700">—</td>
						<td class="p-3 bg-gray-200 dark:bg-gray-700">—</td>
						<td class="p-3 bg-indigo-600 text-white dark:bg-indigo-400">Expert</td>
						<td class="p-3 bg-indigo-400 text-white dark:bg-indigo-300">Advanced</td>
						<td class="p-3 bg-indigo-400 text-white dark:bg-indigo-300">Advanced</td>
						<td class="p-3 bg-indigo-300 text-white dark:bg-indigo-200">Proficient</td>
						<td class="p-3 bg-indigo-300 text-white dark:bg-indigo-200">Proficient</td>
						<td class="p-3 bg-indigo-400 text-white dark:bg-indigo-300">Advanced</td>
						<td class="p-3 bg-indigo-300 text-white dark:bg-indigo-200">Proficient</td>
						<td class="p-3 bg-indigo-300 text-white dark:bg-indigo-200">Proficient</td>
						<td class="p-3 bg-gray-200 dark:bg-gray-700">—</td>
						<td class="p-3 bg-gray-200 dark:bg-gray-700">—</td>
						<td class="p-3 bg-indigo-300 text-white dark:bg-indigo-200">Exploring</td>
					</tr>
					<!-- Infra & Leadership -->
					<tr>
						<td class="p-3 font-medium text-left sticky left-0 bg-white dark:bg-gray-900 z-10">Infra &
							Leadership</td>
						<td class="p-3 bg-gray-200 dark:bg-gray-700">—</td>
						<td class="p-3 bg-gray-200 dark:bg-gray-700">—</td>
						<td class="p-3 bg-gray-200 dark:bg-gray-700">—</td>
						<td class="p-3 bg-gray-200 dark:bg-gray-700">—</td>
						<td class="p-3 bg-gray-200 dark:bg-gray-700">—</td>
						<td class="p-3 bg-gray-200 dark:bg-gray-700">—</td>
						<td class="p-3 bg-gray-200 dark:bg-gray-700">—</td>
						<td class="p-3 bg-gray-200 dark:bg-gray-700">—</td>
						<td class="p-3 bg-gray-200 dark:bg-gray-700">—</td>
						<td class="p-3 bg-gray-200 dark:bg-gray-700">—</td>
						<td class="p-3 bg-gray-200 dark:bg-gray-700">—</td>
						<td class="p-3 bg-indigo-400 text-white dark:bg-indigo-300">Advanced</td>
						<td class="p-3 bg-indigo-400 text-white dark:bg-indigo-300">Advanced</td>
						<td class="p-3 bg-gray-200 dark:bg-gray-700">—</td>
						<td class="p-3 bg-indigo-500 text-white dark:bg-indigo-400">Expert</td>
						<td class="p-3 bg-gray-200 dark:bg-gray-700">—</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>
