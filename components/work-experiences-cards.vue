<template>
	<!-- 1 col on mobile; auto-fit responsive columns >= md -->
	<div class="mt-4 grid gap-4 grid-cols-1 md:[grid-template-columns:repeat(auto-fit,minmax(20rem,1fr))]">
		<article
			v-for="(exp, i) in experiences"
			:key="`${exp.company}-${i}`"
			class="h-full group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-lg dark:border-slate-800 dark:bg-slate-900"
		>
			<!-- Header -->
			<header class="flex items-start justify-between gap-4">
				<div>
					<h3 class="text-lg font-semibold text-slate-900 dark:text-white">
						{{ exp.company }}
					</h3>
					<p v-if="exp.role" class="text-sm text-slate-600 dark:text-slate-300">
						{{ exp.role }}
					</p>
				</div>
				<div class="shrink-0 text-sm text-slate-500 dark:text-slate-400">
					{{ exp.start }} — {{ exp.end }}
				</div>
			</header>

			<!-- Collapsible content -->
			<div class="mt-3">
				<button
					v-if="exp.bullets && exp.bullets.length"
					type="button"
					class="inline-flex items-center gap-1 rounded-xl px-3 py-2 text-sm font-medium text-white transition
								 bg-slate-900 hover:bg-slate-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400
								 dark:bg-slate-200 dark:text-slate-900 dark:hover:bg-white"
					:aria-expanded="isOpen(i)"
					:aria-controls="panelId(i)"
					@click="toggle(i)"
				>
					<span>{{ isOpen(i) ? 'Read less' : 'Read more' }}</span>
					<svg class="h-4 w-4 transition-transform" :class="{ 'rotate-180': isOpen(i) }" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
						<path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.17l3.71-2.94a.75.75 0 11.92 1.18l-4.24 3.36a.75.75 0 01-.92 0L5.21 8.41a.75.75 0 01.02-1.2z" clip-rule="evenodd"/>
					</svg>
				</button>

				<transition name="collapse">
					<div v-show="isOpen(i)" :id="panelId(i)" class="mt-3">
						<ul class="list-disc px-4 space-y-1 text-slate-700 dark:text-slate-300">
							<li v-for="(item, j) in exp.bullets" :key="j">{{ item }}</li>
						</ul>
					</div>
				</transition>
			</div>
		</article>
	</div>
</template>

<script setup lang="ts">
	type WorkExperience = {
		company: string
		role?: string
		start: string
		end: string
		bullets: string[]
	}

	defineProps<{ experiences: WorkExperience[] }>()

	const openSet = ref<Set<number>>(new Set())
	const isOpen = (i: number) => openSet.value.has(i)
	const toggle = (i: number) => {
		openSet.value.has(i) ? openSet.value.delete(i) : openSet.value.add(i)
		openSet.value = new Set(openSet.value)
	}
	const panelId = (i: number) => `work-details-${i}`
</script>

<style scoped>
	.collapse-enter-active, .collapse-leave-active { transition: max-height 250ms ease, opacity 200ms ease; }
	.collapse-enter-from, .collapse-leave-to { max-height: 0; opacity: 0; overflow: hidden; }
	.collapse-enter-to, .collapse-leave-from { max-height: 1000px; opacity: 1; overflow: hidden; }
</style>
