<template>
  <button @click="uiStore.setMenuActive(false)" class="absolute left-5 top-5">
    <Icon name="ph:x" size="26px" />
  </button>
</template>
<script setup lang="ts">
import useUiStore from '@/stores/ui';
const uiStore = useUiStore();
</script>
