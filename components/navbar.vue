<template>
	<header class="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50 transition-colors duration-300">
		<nav class="max-w-5xl mx-auto flex justify-between items-center p-4">
			<h1 class="text-2xl font-bold text-indigo-600 dark:text-indigo-400 transition-colors duration-300">
				Marco Chavez
			</h1>

			<ul class="flex gap-6 text-sm font-medium">
				<li>
					<a href="#about"
						class="hover:text-indigo-600 dark:hover:text-indigo-400 text-gray-700 dark:text-gray-200 transition-colors duration-300">
						About
					</a>
				</li>
				<li>
					<a href="#projects"
						class="hover:text-indigo-600 dark:hover:text-indigo-400 text-gray-700 dark:text-gray-200 transition-colors duration-300">
						Projects
					</a>
				</li>
				<li>
					<a href="#contact"
						class="hover:text-indigo-600 dark:hover:text-indigo-400 text-gray-700 dark:text-gray-200 transition-colors duration-300">
						Contact
					</a>
				</li>
			</ul>
		</nav>

		<DarkModeToggle />
	</header>
</template>
