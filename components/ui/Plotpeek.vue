<template>
  <nuxt-link
    :to="`/plotpeek/${data.id}`"
    class="w-full border-[1px] rounded-lg"
  >
    <div class="flex gap-5 py-3 px-5 w-full rounded-t-lg font-medium">
      <div class="max-w-[78px]">
        <h1 class="text-2xl text-brand-gradient">{{ data.name }}</h1>
        <UiLink class="text-sm gap-1 text-ellipsis overflow-hidden whitespace-nowrap" :to="`/search?q=${data.author}`">
            {{ data.author }}sfdasdfasdf
        </UiLink>
      </div>
      <div class="text-xs flex items-end text-left">
          {{ data.description }}
      </div>
    </div>
  </nuxt-link>
</template>
<script setup lang="ts">
import Plotpeek from '@/api/Plotpeek';

const props = defineProps<{
  data: Plotpeek;
}>();
</script>
