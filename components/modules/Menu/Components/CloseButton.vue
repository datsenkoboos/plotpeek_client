<template>
  <button
    @click="uiStore.setMenuActive(false)"
    class="absolute left-5 button p-1"
  >
    <Icon name="ph:x" size="20px" />
  </button>
</template>
<script setup lang="ts">
import useUiStore from '@/stores/ui';
const uiStore = useUiStore();
</script>
