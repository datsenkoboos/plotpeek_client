<template>
  <div class="grow flex items-center justify-center">
    <RegistrationForm @success="registrationRedirect" />
  </div>
</template>
<script setup>
import RegistrationForm from '@/components/modules/RegistrationForm/RegistrationForm.vue';

async function registrationRedirect() {
  await navigateTo('/login');
}
</script>
