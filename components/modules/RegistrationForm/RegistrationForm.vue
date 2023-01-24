<template>
  <form class="flex flex-col justify-center gap-5" @submit.prevent="submit">
    <h1 class="text-center text-3xl font-medium">Registration</h1>
    <fieldset class="flex flex-col gap-2">
      <UsernameInput />
      <EmailInput />
      <PasswordInput />
      <PasswordConfirmInput />
    </fieldset>
  </form>
</template>
<script setup lang="ts">
import EmailInput from './components/EmailInput.vue';
import UsernameInput from './components/UsernameInput.vue';
import PasswordInput from './components/PasswordInput.vue';
import PasswordConfirmInput from './components/PasswordConfirmInput.vue';

import { useVuelidate } from '@vuelidate/core';
import {
  email,
  minLength,
  required,
  sameAs,
  helpers,
} from '@vuelidate/validators';

const emit = defineEmits<{
  (e: 'success'): void;
}>();

const registrationFormState = reactive<{
  data: {
    username: string;
    email: string;
    password: string;
    passwordConfirm: string;
  };
  error: boolean;
  pending: boolean;
}>({
  data: {
    username: '',
    email: '',
    password: '',
    passwordConfirm: '',
  },
  error: false,
  pending: false,
});


</script>
