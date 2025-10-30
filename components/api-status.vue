<template>
	<Suspense>
		<template #default>
			<div v-if="data?.status" class="fixed bottom-4 right-4 bg-green-200 text-green-800 py-2 px-4 rounded-full">
				Marcobot status: {{ data.status }}
			</div>
			<div v-else-if="error" class="fixed bottom-4 right-4 bg-red-200 text-red-800 py-2 px-4 rounded-full">
				Marcobot is down
			</div>
		</template>

		<template #fallback>
			<div class="fixed bottom-4 right-4 bg-yellow-200 text-yellow-800 py-2 px-4 rounded-full">
				Checking Marcobot status...
			</div>
		</template>
	</Suspense>
</template>

<script setup lang="ts">
	const { data, error } = useFetch('/api/health-check');
</script>