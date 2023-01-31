<template>
  <div class="relative flex flex-col min-h-[100vh]">
    <Menu />
    <Header />
    <slot />
  </div>
</template>
<script setup lang="ts">
import Menu from '@/components/modules/Menu/Menu.vue';
</script>
