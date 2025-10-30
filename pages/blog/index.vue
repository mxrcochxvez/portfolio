<template>
        <div class="min-h-screen bg-slate-950 py-24 text-slate-100">
                <div class="mx-auto max-w-5xl px-6">
                        <header class="mb-12 text-center">
                                <p class="text-xs uppercase tracking-[0.35em] text-indigo-300/80">Writing</p>
                                <h1 class="mt-4 text-4xl font-semibold text-white">Blog & Field Notes</h1>
                                <p class="mt-4 text-base text-slate-300">
                                        Dispatches from active client work, playbooks for leading engineering teams, and deep dives
                                        into the craft of shipping measurable outcomes.
                                </p>
                        </header>

                        <div class="grid gap-8 md:grid-cols-2">
                                <article
                                        v-for="post in posts"
                                        :key="post._path"
                                        class="group flex h-full flex-col rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:border-indigo-400/60 hover:bg-indigo-500/10"
                                >
                                        <p class="text-xs uppercase tracking-[0.25em] text-indigo-200">{{ formatDate(post.publishedAt) }}</p>
                                        <NuxtLink :to="post._path" class="mt-4 text-2xl font-semibold text-white group-hover:text-indigo-100">
                                                {{ post.title }}
                                        </NuxtLink>
                                        <p class="mt-3 text-sm text-slate-200/80">{{ post.description }}</p>
                                        <div class="mt-6 flex flex-wrap gap-2">
                                                <span
                                                        v-for="tag in post.tags ?? []"
                                                        :key="tag"
                                                        class="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs uppercase tracking-wide text-indigo-100"
                                                >
                                                        {{ tag }}
                                                </span>
                                        </div>
                                </article>

                                <div
                                        v-if="posts.length === 0"
                                        class="rounded-3xl border border-dashed border-white/20 bg-white/5 p-8 text-center text-slate-300"
                                >
                                        <p>No entries yet. Subscribe to stay notified.</p>
                                </div>
                        </div>
                </div>
        </div>
</template>

<script setup lang="ts">
        import { computed } from 'vue';
        import { queryContent } from '#content/server';

        const { data } = await useAsyncData('blog-listing', () =>
                queryContent('blog')
                        .where({ draft: { $ne: true } })
                        .sort({ publishedAt: -1 })
                        .find(),
        );

        const posts = computed(() => data.value ?? []);

        const formatDate = (date?: string) => {
                if (!date) return 'Undated';
                return new Date(date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                });
        };

        useSeoMeta({
                title: 'Blog & Field Notes — Marco Chavez Jr',
                description: 'Story-driven essays on engineering leadership, architecture, and measurable product delivery powered by Nuxt Content.',
        });
</script>
