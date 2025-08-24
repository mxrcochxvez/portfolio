<template>
	<nav class="p-6 flex justify-between border-b border-white bg-violet-950 text-white">
		<NuxtLink :class="[underlineOnHover, 'cursor-pointer text-2xl']" to="/">Marco Chavez</NuxtLink>

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
