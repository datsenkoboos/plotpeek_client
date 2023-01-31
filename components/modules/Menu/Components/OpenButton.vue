<template>
  <button @click="uiStore.setMenuActive(true)" class="absolute left-3 top-3">
    <Icon name="ph:list-bold" size="29px" />
  </button>
</template>
<script setup lang="ts">
import useUiStore from '@/stores/ui';
const uiStore = useUiStore();
</script>
