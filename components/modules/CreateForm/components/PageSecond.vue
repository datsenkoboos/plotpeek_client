<template>
  <div class="grow flex flex-col justify-center items-center gap-5">
    <div class="grow flex items-center justify-center pb-[52px]">
      <h1
        class="font-bold text-brand-gradient text-4xl"
        v-if="createStore.pending"
      >
        Generating
      </h1>
      <span v-else> {{ createStore.data.content }}</span>
    </div>

    <div class="fixed bottom-5 h-[32px] w-full flex gap-2 px-5">
      <UiButton
        v-if="createStore.pending"
        class="grow gap-2 h-[32px]"
      >
        <UiLoadingSpinner />
      </UiButton>
      <template v-else>
        <UiButton class="grow brand-gradient" @click="createStore.create">Confirm</UiButton>
        <UiButton class="bg-black" @click="createStore.regenerate">
          <Icon name="ph:arrow-clockwise" size="20px" />
        </UiButton>
      </template>
    </div>
  </div>
</template>
<script setup lang="ts">
import useCreateStore from '../store';
const createStore = useCreateStore();
</script>
