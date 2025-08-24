<template>
  <main>
    <Navbar />
    <slot />
  </main>
</template>

<script lang="ts" setup>
  import Navbar from '~/components/navbar.vue';
</script>
