<template>
  <button @click="uiStore.setMenuActive(false)" class="absolute left-3 top-3">
    <Icon name="mdi:menu-close" size="29px" />
  </button>
</template>
<script setup lang="ts">
import useUiStore from '@/stores/ui';
const uiStore = useUiStore();
</script>
