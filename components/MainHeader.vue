<template>
  <UiHeader>
    <template v-slot:beforeLogo>
      <MenuOpenButton />
    </template>
  </UiHeader>
</template>
<script setup lang="ts">
import MenuOpenButton from './modules/Menu/Components/OpenButton.vue';
</script>
