<template>
  <div class="flex flex-col gap-5">
    <MainPlotpeek
      :data="plotpeek"
      :key="plotpeek.id"
      v-for="plotpeek in data"
    />
  </div>
</template>
<script setup lang="ts">
import Plotpeek from '@/api/Plotpeek';

const props = defineProps<{
  data: Plotpeek[];
}>();
</script>
