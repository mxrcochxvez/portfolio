<template>
  <main class="px-4 bg-violet-950 text-white">
    <Navbar />
    <slot />
  </main>
</template>

<script lang="ts" setup>
  import Navbar from '~/components/navbar.vue';
</script>
