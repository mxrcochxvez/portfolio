<template>
  <main class="px-4 text-white">
    <Navbar />
    <slot />
  </main>
</template>

<script lang="ts" setup>
  import Navbar from '~/components/navbar.vue';
</script>

<style>
  * {
    background-color: rgb(46 16 101);
  }
</style>
