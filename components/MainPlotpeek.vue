<template>
  <nuxt-link
    :to="`/plotpeek/${data.id}`"
    class="border-[1px] rounded-lg"
  >
    <div class="flex flex-col items-start justify-center gap-1 py-3 px-5 rounded-t-lg">
      <div class="w-full">
        <h1 class="truncate text-2xl text-brand-gradient font-semibold">
          {{ data.name }}
        </h1>
          <h2 class="font-medium text-sm truncate">
            {{ data.author }}
          </h2>
      </div>
      <div
        v-if="data.description"
        class="max-h-[32px] text-xs text-ellipsis overflow-hidden"
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
