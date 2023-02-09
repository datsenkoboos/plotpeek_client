<template>
  <div
    class="rounded-b-lg bg-black text-white flex items-center justify-end gap-1 text-xs font-medium p-2"
  >
    <span>{{ likes }}</span>
    <Icon name="ph:heart" size="20px" />
  </div>
</template>
<script setup lang="ts">
const props = defineProps<{
  likes: number;
}>();
</script>
