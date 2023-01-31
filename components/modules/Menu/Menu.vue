<template>
  <div
    v-show="uiStore.menuActive"
    class="absolute z-[9998] left-0 top-0 w-full h-full bg-white"
  >
    <Header />
    <section class="w-full h-full flex items-center justify-center">
      <UiNav />
    </section>
  </div>
</template>
<script setup lang="ts">
import Header from './Components/Header.vue';

import useUiStore from '@/stores/ui';
const uiStore = useUiStore();
</script>
