<template>
  <UiMenu :active="menuActive">
    <UiNav />
  </UiMenu>
  <UiMenuButton :active="menuActive" @toggle-menu="toggleMenu" />
</template>
<script setup lang="ts">
const menuActive = ref(false);

function toggleMenu(value: boolean) {
  menuActive.value = value;
}

onBeforeRouteLeave(() => {
  console.log('changed');
  toggleMenu(false);
});
</script>
