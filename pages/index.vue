<template>
  <section class="flex flex-col gap-5 px-5">
    <Search />
    <UiSectionTitle> Newest </UiSectionTitle>
    <Newest />
  </section>
</template>
<script setup lang="ts">
import Newest from '@/components/modules/Newest/Newest.vue';
</script>
