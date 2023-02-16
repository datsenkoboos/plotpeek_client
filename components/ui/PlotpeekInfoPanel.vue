<template>
  <div
    class="rounded-b-lg border-t-[1px] flex items-center justify-start gap-1 text-xs font-medium py-1 px-5"
  >

    <Icon name="ph:heart" size="20px" />
    <span>{{ likes }}</span>
  </div>
</template>
<script setup lang="ts">
const props = defineProps<{
  likes: number;
}>();
</script>
