<template>
  <div>gg</div>
</template>
<script setup lang="ts">
import useAuthStore from '@/stores/auth';
const authStore = useAuthStore();

authStore.$subscribe(async () => {
  if (!authStore.authorized) {
    await navigateTo('/login');
  }
});
</script>
