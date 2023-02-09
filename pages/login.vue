<template>
  <div class="grow flex items-center justify-center">
    <ModuleLoginForm @success="loginRedirect" />
  </div>
</template>
<script setup lang="ts">
import ModuleLoginForm from '@/components/modules/LoginForm/LoginForm.vue';

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
