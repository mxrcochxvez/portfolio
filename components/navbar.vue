<template>
	<nav class="p-6 flex justify-between border-b border-white">
		<h1
			:class="[underlineOnHover, 'cursor-pointer']"
			role="link"
			@click="$router.push('/')"
			@keydown.enter.space="$router.push('/')"
		>Marco Chavez</h1>

		<ul>
			<li>
				<NuxtLink :class="underlineOnHover" to="/">
					Home
				</NuxtLink>
			</li>
		</ul>
	</nav>
</template>

<script lang="ts" setup>
	const underlineOnHover = 'transition duration-300 ease-in-out hover:underline underline-offset-4';
</script>
