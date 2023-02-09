<template>
  <section class="flex flex-col gap-5 px-5">
    <ModulePlotpeekIndividual :data="data!" />
  </section>
</template>
<script setup lang="ts">
import PlotpeekIndividual from '@/api/PlotpeekIndividual';
import ModulePlotpeekIndividual from '@/components/modules/PlotpeekIndividual/PlotpeekIndividual.vue';

const route = useRoute();

const runtimeConfig = useRuntimeConfig();
const { data } = await useFetch<PlotpeekIndividual>(
  runtimeConfig.public.API_URL + '/plotpeek/' + route.params.id
);
</script>
