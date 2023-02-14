<template>
  <div
    class="grow flex flex-col justify-center items-center gap-2 pb-5"
    v-show="createStore.page"
  >
    <h1
      class="font-bold text-brand-gradient text-4xl"
      v-if="createStore.pending"
    >
      Generating
    </h1>
    <template v-else>
      {{ createStore.data.content }}
    </template>
  </div>
</template>
<script setup lang="ts">
import useCreateStore from '../store';
const createStore = useCreateStore();
</script>
