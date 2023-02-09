<template>
  <div class="flex flex-col gap-5">
    <div class="flex flex-col gap-3 border-[1px] rounded-lg pt-3">
      <div class="px-5">
        <h1 class="text-4xl font-medium text-center text-brand-gradient">
          {{ data.name }}
        </h1>
        <h3 class="text-lg font-medium text-center">
          {{ data.author }},
          <span class="text-sm">@{{ data.createdBy.username }}</span>
        </h3>
      </div>
      <div class="px-5 text-center text-sm">
        {{ data.description }}
      </div>
      <UiPlotpeekInfoPanel :likes="data._count.likes" />
    </div>
    <UiSectionTitle> Content </UiSectionTitle>
    <div>
        {{ data.content }}
    </div>
  </div>
</template>
<script setup lang="ts">
import PlotpeekIndividual from '@/api/PlotpeekIndividual';

const props = defineProps<{
  data: PlotpeekIndividual;
}>();
</script>
