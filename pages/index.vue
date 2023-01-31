<template>
  <div>
    {{ authStore.authorized }}
  </div>
</template>
<script setup lang="ts">
import useAuthStore from '@/stores/auth';
const authStore = useAuthStore();
</script>
