<template>
  <section class="flex flex-col gap-5 px-5">
    <MainSearch />
    <UiSectionTitle> Newest </UiSectionTitle>
    <ModuleNewest />
  </section>
</template>
<script setup lang="ts">
import ModuleNewest from '@/components/modules/Newest/Newest.vue';
</script>
