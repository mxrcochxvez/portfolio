<template>
        <header
                class="bg-white/80 backdrop-blur border-b border-gray-100 dark:border-gray-800 dark:bg-gray-950/80 sticky top-0 z-50 transition-colors duration-300"
        >
                <nav class="max-w-6xl mx-auto flex flex-col gap-4 md:flex-row md:items-center md:justify-between p-4">
                        <NuxtLink
                                to="/"
                                class="text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-100"
                        >
                                Marco Chavez
                        </NuxtLink>

                        <ul class="flex flex-wrap items-center gap-4 text-sm font-medium text-gray-700 dark:text-gray-300">
                                <li>
                                        <a
                                                href="#story"
                                                class="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200"
                                        >
                                                Story
                                        </a>
                                </li>
                                <li>
                                        <a
                                                href="#craft"
                                                class="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200"
                                        >
                                                Craft
                                        </a>
                                </li>
                                <li>
                                        <a
                                                href="#impact"
                                                class="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200"
                                        >
                                                Impact
                                        </a>
                                </li>
                                <li>
                                        <a
                                                href="#writing"
                                                class="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200"
                                        >
                                                Writing
                                        </a>
                                </li>
                                <li>
                                        <NuxtLink
                                                to="/blog"
                                                class="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200"
                                        >
                                                Blog
                                        </NuxtLink>
                                </li>
                                <li>
                                        <a
                                                href="#contact"
                                                class="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200"
                                        >
                                                Contact
                                        </a>
                                </li>
                        </ul>

                        <DarkModeToggle />
                </nav>
        </header>
</template>
