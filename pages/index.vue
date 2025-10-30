<template>
        <div class="min-h-screen bg-slate-950 text-slate-100">
                <section
                        id="story"
                        class="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"
                >
                        <div class="absolute inset-0 opacity-40">
                                <div class="absolute inset-y-0 left-1/2 w-[40rem] -translate-x-1/2 bg-indigo-600/30 blur-3xl"></div>
                        </div>
                        <div class="relative max-w-6xl mx-auto px-6 pt-24 pb-28">
                                <p class="uppercase tracking-[0.35em] text-xs text-indigo-300/80">Chapter One</p>
                                <h1 class="mt-6 text-4xl md:text-6xl font-semibold leading-tight text-white">
                                        Building story-driven products that ship faster and feel personal
                                </h1>
                                <p class="mt-6 max-w-2xl text-lg text-slate-200">
                                        I'm Marco, a senior full-stack engineer who treats every product like a narrative arc. From
                                        the spark of a stakeholder request to the resolution of a production launch, I choreograph
                                        teams, systems, and customer journeys so the story lands—and the metrics follow.
                                </p>

                                <div class="mt-10 grid gap-6 md:grid-cols-3">
                                        <div class="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                                                <p class="text-sm font-semibold uppercase tracking-wide text-indigo-200">The Hook</p>
                                                <h2 class="mt-3 text-xl font-semibold text-white">Vision into Roadmaps</h2>
                                                <p class="mt-3 text-sm text-slate-200/80">
                                                        Translate founder energy into sequences of validated releases that de-risk big bets
                                                        while keeping momentum visible.
                                                </p>
                                        </div>
                                        <div class="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                                                <p class="text-sm font-semibold uppercase tracking-wide text-indigo-200">Rising Action</p>
                                                <h2 class="mt-3 text-xl font-semibold text-white">Engineering as Ensemble</h2>
                                                <p class="mt-3 text-sm text-slate-200/80">
                                                        Pair senior-level architecture with coaching so teams ship confidently, write
                                                        accessible interfaces, and monitor what matters.
                                                </p>
                                        </div>
                                        <div class="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                                                <p class="text-sm font-semibold uppercase tracking-wide text-indigo-200">Resolution</p>
                                                <h2 class="mt-3 text-xl font-semibold text-white">Measurable Endings</h2>
                                                <p class="mt-3 text-sm text-slate-200/80">
                                                        Launches mean nothing without outcomes. I anchor sprints to business KPIs so every
                                                        chapter closes with proof of impact.
                                                </p>
                                        </div>
                                </div>

                                <div class="mt-12 flex flex-wrap gap-4">
                                        <a
                                                href="#writing"
                                                class="inline-flex items-center gap-2 rounded-full border border-indigo-400/60 bg-indigo-500/20 px-6 py-3 text-sm font-medium text-indigo-100 transition hover:bg-indigo-500/30"
                                        >
                                                Read the latest chapter
                                                <Icon name="ph:arrow-up-right" class="h-4 w-4" />
                                        </a>
                                        <a
                                                href="https://calendar.app.google/6e6e3UNCBFGmeNea6"
                                                target="_blank"
                                                class="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/20"
                                        >
                                                📆 Book a 15-minute call
                                        </a>
                                </div>
                        </div>
                </section>

                <section id="chapters" class="border-y border-slate-800 bg-slate-950/40 py-20">
                        <div class="max-w-6xl mx-auto px-6">
                                <div class="mb-12 max-w-3xl">
                                        <p class="text-xs uppercase tracking-[0.35em] text-indigo-300/80">Plot Progression</p>
                                        <h2 class="mt-4 text-3xl font-semibold text-white">From discovery to delight</h2>
                                        <p class="mt-4 text-base text-slate-300">
                                                Each engagement unfolds like a well-paced story: we set the stakes, move the plot
                                                forward with experiments, and celebrate concrete wins that level up teams and the
                                                customers they serve.
                                        </p>
                                </div>

                                <div class="grid gap-8 md:grid-cols-3">
                                        <article
                                                v-for="beat in storyBeats"
                                                :key="beat.title"
                                                class="relative flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
                                        >
                                                <span class="text-xs font-semibold uppercase tracking-[0.25em] text-indigo-200">{{ beat.chapter }}</span>
                                                <h3 class="mt-4 text-xl font-semibold text-white">{{ beat.title }}</h3>
                                                <p class="mt-3 text-sm text-slate-200/80">{{ beat.description }}</p>
                                                <ul class="mt-6 space-y-2 text-sm text-slate-200/70">
                                                        <li v-for="detail in beat.details" :key="detail" class="flex items-start gap-2">
                                                                <Icon name="ph:sparkle" class="mt-0.5 h-4 w-4 text-indigo-300" />
                                                                <span>{{ detail }}</span>
                                                        </li>
                                                </ul>
                                        </article>
                                </div>
                        </div>
                </section>

                <section id="craft" class="bg-slate-900/60 py-20">
                        <div class="max-w-6xl mx-auto flex flex-col gap-12 px-6 lg:flex-row">
                                <div class="flex-1 space-y-6">
                                        <p class="text-xs uppercase tracking-[0.35em] text-indigo-300/80">Craft Notes</p>
                                        <h2 class="text-3xl font-semibold text-white">The tools I reach for to keep the story moving</h2>
                                        <p class="text-base text-slate-300">
                                                Systems-thinking, mentoring, and a TypeScript-heavy toolbox let me shepherd complex
                                                initiatives without losing sight of accessibility or developer joy. I pair product
                                                empathy with observability so teams can see the effects of their choices in real time.
                                        </p>
                                        <div class="grid gap-4 md:grid-cols-2">
                                                <div
                                                        v-for="principle in guidingPrinciples"
                                                        :key="principle.title"
                                                        class="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur"
                                                >
                                                        <h3 class="text-lg font-semibold text-white">{{ principle.title }}</h3>
                                                        <p class="mt-2 text-sm text-slate-200/80">{{ principle.body }}</p>
                                                </div>
                                        </div>
                                </div>
                                <div class="flex-1 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur">
                                        <SkillsHeatmap />
                                </div>
                        </div>
                </section>

                <section id="impact" class="border-y border-slate-800 bg-slate-950 py-20">
                        <div class="max-w-6xl mx-auto px-6">
                                <div class="mb-12 max-w-3xl">
                                        <p class="text-xs uppercase tracking-[0.35em] text-indigo-300/80">Case Studies</p>
                                        <h2 class="mt-4 text-3xl font-semibold text-white">Impact chapters from recent engagements</h2>
                                        <p class="mt-4 text-base text-slate-300">
                                                From e-commerce velocity to onboarding transformations, here are snapshots of the
                                                measurable change I’ve led. Each chapter links strategy with hands-on execution.
                                        </p>
                                </div>
                                <WorkExperiences />
                        </div>
                </section>

                <section class="bg-slate-900/80 py-20">
                        <div class="max-w-6xl mx-auto px-6">
                                <div class="mb-12">
                                        <p class="text-xs uppercase tracking-[0.35em] text-indigo-300/80">Leadership & Mentorship</p>
                                        <h2 class="mt-4 text-3xl font-semibold text-white">Supporting casts that stay inspired</h2>
                                </div>
                                <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                                        <div
                                                v-for="scene in ensembleScenes"
                                                :key="scene.title"
                                                class="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
                                        >
                                                <h3 class="text-xl font-semibold text-white">{{ scene.title }}</h3>
                                                <p class="mt-3 text-sm text-slate-200/80">{{ scene.body }}</p>
                                                <p class="mt-4 text-xs uppercase tracking-wide text-indigo-200">{{ scene.tag }}</p>
                                        </div>
                                </div>
                        </div>
                </section>

                <section id="writing" class="bg-slate-950 py-20">
                        <div class="max-w-6xl mx-auto px-6">
                                <div class="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                                        <div>
                                                <p class="text-xs uppercase tracking-[0.35em] text-indigo-300/80">Latest Chapters</p>
                                                <h2 class="mt-4 text-3xl font-semibold text-white">Writing the playbook as I go</h2>
                                                <p class="mt-4 max-w-2xl text-base text-slate-300">
                                                        Essays from active projects, including architecture notes, facilitation tactics,
                                                        and experiments that moved the metrics. Powered by Nuxt Content so every idea finds
                                                        a home quickly.
                                                </p>
                                        </div>
                                        <NuxtLink
                                                to="/blog"
                                                class="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2 text-sm font-medium text-white transition hover:bg-white/10"
                                        >
                                                Browse the archive
                                                <Icon name="ph:arrow-up-right" class="h-4 w-4" />
                                        </NuxtLink>
                                </div>

                                <div class="grid gap-6 lg:grid-cols-3">
                                        <article
                                                v-for="post in readingList"
                                                :key="post._path"
                                                class="flex h-full flex-col rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:border-indigo-400/70 hover:bg-indigo-500/10"
                                        >
                                                <p class="text-xs uppercase tracking-[0.25em] text-indigo-200">{{ formatDate(post.publishedAt) }}</p>
                                                <NuxtLink :to="post._path" class="mt-4 text-2xl font-semibold text-white">
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
                                                v-if="readingList.length === 0"
                                                class="rounded-3xl border border-dashed border-white/20 bg-white/5 p-8 text-center text-slate-300"
                                        >
                                                <p class="text-base">More essays are in the works. Check back soon for fresh chapters.</p>
                                        </div>
                                </div>
                        </div>
                </section>

                <section id="contact" class="border-y border-slate-800 bg-slate-900/90 py-20">
                        <div class="max-w-4xl mx-auto px-6 text-center">
                                <h2 class="text-3xl font-semibold text-white">Ready to co-author your next big release?</h2>
                                <p class="mt-4 text-base text-slate-300">
                                        I love partnering with product leaders who want craft, clarity, and measurable outcomes.
                                        Let's map the next chapter together.
                                </p>
                                <div class="mt-8 flex flex-wrap justify-center gap-4">
                                        <a
                                                href="mailto:marcode.chavez.jr@gmail.com"
                                                class="inline-flex items-center gap-2 rounded-full bg-indigo-500 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-indigo-500/30 transition hover:bg-indigo-400"
                                        >
                                                Email Marco
                                        </a>
                                        <a
                                                href="/Marco_Chavez_Jr_-_Software_Developer.pdf"
                                                download
                                                class="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
                                        >
                                                Download Resume
                                        </a>
                                </div>
                        </div>
                </section>

                <section class="bg-slate-950 py-16">
                        <div class="max-w-6xl mx-auto px-6 text-center">
                                <p class="text-xs uppercase tracking-[0.35em] text-indigo-300/80">Trusted By</p>
                                <div class="mt-8 flex flex-wrap items-center justify-center gap-8 opacity-80">
                                        <img src="/img/pj.svg" alt="Pressed Juicery" class="h-10 rounded-full bg-black/80 p-1">
                                        <img src="/img/bitwise.png" alt="Bitwise Industries" class="h-10 rounded bg-black/80 p-1">
                                        <img src="/img/ordrslip.jpeg" alt="Ordrslip" class="h-10 rounded">
                                        <img src="/img/RosenbalmRockeryLogo.jpg" alt="Rosenbalm Rockery" class="h-10 rounded">
                                        <img src="/img/lexiillc.jpg" alt="Lexii LLC" class="h-10 rounded bg-black/80 p-1">
                                </div>
                                <p class="mt-6 text-xs text-slate-500">Logos presented for storytelling purposes. Rights belong to respective owners.</p>
                        </div>
                </section>

                <footer class="border-t border-slate-800 bg-slate-950 py-6 text-center text-xs text-slate-500">
                        © {{ new Date().getFullYear() }} Marco Chavez Jr. All rights reserved.
                </footer>
        </div>
</template>

<script lang="ts" setup>
        import { computed } from 'vue';
        import { queryContent } from '#content/server';
        import SkillsHeatmap from '~/components/skills-heatmap.vue';
        import WorkExperiences from '~/components/work-experiences.vue';

        const guidingPrinciples = [
                {
                        title: 'Accessibility is table stakes',
                        body: 'Ship interfaces that everyone can use. I partner with design and QA to embed a11y checks inside every acceptance criteria.',
                },
                {
                        title: 'Observability over guesswork',
                        body: 'Dashboards, tracing, and structured logs mean every plot twist is traceable. Teams move faster when insights are one query away.',
                },
                {
                        title: 'Mentorship as multiplier',
                        body: 'I create pairing rituals, architecture reviews, and growth paths so engineers feel brave enough to ship bold ideas.',
                },
                {
                        title: 'Sustainable speed',
                        body: 'Balance velocity with guardrails—design systems, contract tests, and shared libraries keep momentum without burnout.',
                },
        ];

        const storyBeats = [
                {
                        chapter: 'Act I',
                        title: 'Find the stakes',
                        description: 'Clarify the user need, align with product, and sketch measurable outcomes before a single line of code is written.',
                        details: ['Workshop requirements into narrative journeys', 'Prioritize technical debt alongside net-new value', 'Frame success metrics and observability early'],
                },
                {
                        chapter: 'Act II',
                        title: 'Build the ensemble',
                        description: 'Lead squads through discovery spikes, co-create architecture, and uplift engineers through pairing and playbooks.',
                        details: ['Deliver architecture diagrams + ADRs', 'Coach teams on TypeScript, testing, and accessibility', 'Instrument telemetry to keep progress visible'],
                },
                {
                        chapter: 'Act III',
                        title: 'Deliver the finale',
                        description: 'Launch confidently, communicate impact, and set up the sequel with reusable systems and docs teams actually adopt.',
                        details: ['Craft release narratives stakeholders love', 'Measure performance, conversion, and team sentiment', 'Hand over libraries, dashboards, and runbooks'],
                },
        ];

        const ensembleScenes = [
                {
                        title: 'Mentored 6 engineers into senior storytellers',
                        body: 'Structured growth plans, pairing sessions, and architecture clubs that lifted confidence and code quality.',
                        tag: 'Bitwise Industries',
                },
                {
                        title: 'Reduced checkout friction by 40%',
                        body: 'Introduced modular design systems and performance budgets to Pressed Juicery’s cart flows.',
                        tag: 'Pressed Juicery',
                },
                {
                        title: 'Shortened release cycles by 25%',
                        body: 'Rolled out shared component libraries and CI/CD rituals that let teams ship predictably.',
                        tag: 'Ordrslip',
                },
                {
                        title: 'Embedded accessibility champions',
                        body: 'Built linting, audits, and education tracks so inclusive experiences became a default expectation.',
                        tag: 'Accessibility Guild',
                },
                {
                        title: 'Taught full-stack bootcamps',
                        body: 'Designed curricula in React, SQL, and testing that accelerated the careers of dozens of new developers.',
                        tag: 'Community Teaching',
                },
                {
                        title: 'Established observability culture',
                        body: 'Partnered with platform teams to standardize tracing, logging, and error budgets across services.',
                        tag: 'Platform Enablement',
                },
        ];

        const config = useRuntimeConfig();
        const siteUrl = config.public.siteUrl;

        const { data: latestPosts } = await useAsyncData('home-posts', () =>
                queryContent('blog')
                        .where({ draft: { $ne: true } })
                        .sort({ publishedAt: -1 })
                        .limit(3)
                        .find(),
        );

        const readingList = computed(() => latestPosts.value ?? []);

        const formatDate = (date?: string) => {
                if (!date) return 'Undated';
                return new Date(date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                });
        };

        useSeoMeta({
                title: 'Marco Chavez Jr — Story-driven Senior Full-Stack Engineer',
                description:
                        'I partner with teams to architect, mentor, and ship measurable outcomes. Explore my story-driven approach to engineering leadership and read essays powered by Nuxt Content.',
                ogTitle: 'Marco Chavez Jr — Story-driven Senior Full-Stack Engineer',
                ogDescription:
                        'Learn how I turn complex initiatives into clear narratives, uplift engineering teams, and share insights through a Nuxt Content-powered blog.',
                twitterCard: 'summary_large_image',
        });

        useHead({ link: [{ rel: 'canonical', href: siteUrl }] });

        onMounted(async () => {
                const { data } = await useFetch<{ status: string }>('/api/health-check');

                console.log('API Response:', JSON.stringify(data.value?.status));
        });
</script>
