<template>
  <div v-show="active" class="absolute left-0 top-0 w-full h-full bg-white">
    <UiHeader />
    <section class="w-full h-full flex items-center justify-center">
      <slot />
    </section>
  </div>
</template>
<script setup lang="ts">
const props = defineProps<{
  active: boolean;
}>();
</script>
