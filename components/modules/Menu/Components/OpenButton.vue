<template>
  <button @click="uiStore.setMenuActive(true)" class="absolute left-5 top-5">
    <Icon name="ph:list" size="26px" />
  </button>
</template>
<script setup lang="ts">
import useUiStore from '@/stores/ui';
const uiStore = useUiStore();
</script>
