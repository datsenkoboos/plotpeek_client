<template>
  <MainPlotpeekList :data="data!.plotpeeks" />
</template>
<script setup lang="ts">
import PlotpeekResponse from '@/api/PlotpeekResponse';

const runtimeConfig = useRuntimeConfig();
const { data } = await useFetch<PlotpeekResponse>(
  runtimeConfig.public.API_URL + '/plotpeek'
);
</script>
