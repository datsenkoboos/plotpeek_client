<template>
  <LoadingScreen :loading="loading" />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup lang="ts">
import useAuthStore from './stores/auth';
const authStore = useAuthStore();

const loading = ref(true);

onMounted(async () => {
  if (localStorage.getItem('accessToken')) {
    await authStore.checkAuth();
  }
  loading.value = false;
});
</script>
