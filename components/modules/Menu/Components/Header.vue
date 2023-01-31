<template>
  <UiHeader>
    <template v-slot:beforeLogo>
      <MenuCloseButton />
    </template>
  </UiHeader>
</template>
<script setup lang="ts">
import MenuCloseButton from './CloseButton.vue';
</script>
