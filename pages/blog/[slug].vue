<template>
        <div class="min-h-screen bg-slate-950 py-16 text-slate-100">
                <div class="mx-auto max-w-3xl px-6">
                        <NuxtLink
                                to="/blog"
                                class="inline-flex items-center gap-2 text-sm font-medium text-indigo-200 transition hover:text-indigo-100"
                        >
                                <Icon name="ph:arrow-left" class="h-4 w-4" />
                                Back to writing
                        </NuxtLink>

                        <article class="mt-10">
                                <header class="mb-10 border-b border-white/10 pb-8">
                                        <p class="text-xs uppercase tracking-[0.35em] text-indigo-300/80">{{ formattedDate }}</p>
                                        <h1 class="mt-4 text-4xl font-semibold text-white">{{ doc.title }}</h1>
                                        <p class="mt-4 text-base text-slate-300">{{ doc.description }}</p>
                                        <div class="mt-4 flex flex-wrap gap-2">
                                                <span
                                                        v-for="tag in doc.tags ?? []"
                                                        :key="tag"
                                                        class="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs uppercase tracking-wide text-indigo-100"
                                                >
                                                        {{ tag }}
                                                </span>
                                        </div>
                                </header>

                                <ContentRenderer :value="doc" class="prose prose-invert max-w-none" />
                        </article>
                </div>
        </div>
</template>

<script setup lang="ts">
        import { computed } from 'vue';
        import { createError } from '#app';
        import { queryContent } from '#content/server';

        const route = useRoute();
        const path = computed(() => `/blog/${route.params.slug}`);

        const { data } = await useAsyncData(`blog-post-${path.value}`, () =>
                queryContent(path.value as string).findOne(),
        );

        if (!data.value) {
                throw createError({ statusCode: 404, statusMessage: 'Post not found' });
        }

        const doc = computed(() => data.value!);

        const formattedDate = computed(() => {
                const date = doc.value?.publishedAt;
                if (!date) return 'Undated';
                return new Date(date).toLocaleDateString('en-US', {
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric',
                });
        });

        useSeoMeta({
                title: doc.value?.title,
                description: doc.value?.description,
        });
</script>
