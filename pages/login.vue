<template>
  <div class="grow flex items-center justify-center">
    <LoginForm @success="loginRedirect" />
  </div>
</template>
<script setup lang="ts">
import LoginForm from '@/components/modules/LoginForm/LoginForm.vue';

import useAuthStore from '@/stores/auth';
const authStore = useAuthStore();

authStore.$subscribe(async () => {
  if (authStore.authorized) {
    await navigateTo('/');
  }
});

async function loginRedirect() {
  await navigateTo('/');
}
</script>
