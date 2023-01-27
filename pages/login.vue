<template>
  <div class="grow flex items-center justify-center">
    <LoginForm @success="loginRedirect" />
  </div>
</template>
<script setup>
import LoginForm from '@/components/modules/LoginForm/LoginForm.vue';

async function loginRedirect() {
  await navigateTo('/');
}
</script>
