<template>
  <div
    v-show="uiStore.menuActive"
    class="absolute z-[9998] left-0 top-0 w-full h-full bg-white flex flex-col"
  >
    <Header />
    <section class="grow w-full flex items-start justify-center pb-5">
      <UiNav />
    </section>
  </div>
</template>
<script setup lang="ts">
import Header from './Components/Header.vue';

import useUiStore from '@/stores/ui';
const uiStore = useUiStore();
</script>
