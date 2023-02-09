<template>
  <nuxt-link
    :to="`/plotpeek/${data.id}`"
    class="w-full border-[1px] rounded-lg"
  >
    <div class="flex gap-5 py-4 px-5 w-full rounded-t-lg font-medium">
      <div class="max-w-[78px]">
        <h1 class="text-2xl text-brand-gradient">
          <!-- TODO: text-ellipsis -->
          {{ data.name }}
        </h1>
        <UiLink class="text-sm gap-1" :to="`/search?q=${data.author}`">
          <!-- TODO: text-ellipsis -->
          {{ data.author }}
        </UiLink>
      </div>
      <div
        class="text-xs flex items-end text-left text-ellipsis overflow-hidden"
      >
        <!-- TODO: text-ellipsis -->
        {{ data.description }}
      </div>
    </div>
    <UiPlotpeekInfoPanel :likes="data._count.likes" />
  </nuxt-link>
</template>
<script setup lang="ts">
import Plotpeek from '@/api/Plotpeek';

const props = defineProps<{
  data: Plotpeek;
}>();
</script>
