<template>
  <div class="grow flex items-center justify-center">
    <ModuleRegistrationForm @success="registrationRedirect" />
  </div>
</template>
<script setup>
import ModuleRegistrationForm from '@/components/modules/RegistrationForm/RegistrationForm.vue';

import useAuthStore from '@/stores/auth';
const authStore = useAuthStore();

authStore.$subscribe(async () => {
  if (authStore.authorized) {
    await navigateTo('/');
  }
});

async function registrationRedirect() {
  await navigateTo('/login');
}
</script>
