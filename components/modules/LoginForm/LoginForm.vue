<template>
  <form
    class="w-[300px] flex flex-col justify-center gap-5"
    @submit.prevent="submitLoginForm"
  >
    <h1 class="text-center text-3xl font-medium">Login</h1>
    <div class="flex flex-col gap-2">
      <fieldset class="flex flex-col gap-2">
        <UsernameInput
          :class="v$.username.$error ? 'border-red-500' : ''"
          @update-value="($event: string) => { loginFormState.data.username = $event; }"
        />
        <PasswordInput
          :class="v$.password.$error ? 'border-red-500' : ''"
          @update-value="($event: string) => { loginFormState.data.password = $event; }"
        />
        <div class="flex items-center justify-between h-7">
          <UiFormValidationErrorOutput :v$="v$" />
          <RememberMeInput class="grow" />
        </div>
      </fieldset>

      <UiButton>
        <UiLoadingSpinner v-if="loginFormState.pending" />
        <span v-else>Login</span>
      </UiButton>
    </div>
  </form>
</template>
<script setup lang="ts">
import RememberMeInput from './components/RememberMeInput.vue';

import { useVuelidate } from '@vuelidate/core';
import { required, helpers } from '@vuelidate/validators';

import login from './api/login';

const emit = defineEmits<{
  (e: 'success'): void;
}>();

const loginFormState = reactive<{
  data: {
    username: string;
    password: string;
    rememberMe: boolean;
  };
  error: boolean;
  pending: boolean;
}>({
  data: {
    username: '',
    password: '',
    rememberMe: true,
  },
  error: false,
  pending: false,
});

const loginFormRules = computed(() => {
  return {
    username: {
      required: helpers.withMessage('Fill in required fields', required),
    },
    password: {
      required: helpers.withMessage('Fill in required fields', required),
    },
  };
});

const v$ = useVuelidate(loginFormRules, loginFormState.data, {
  $autoDirty: true,
  $lazy: true,
});

async function submitLoginForm() {
  const valid = await v$.value.$validate();
  if (valid) {
    try {
      loginFormState.error = false;
      loginFormState.pending = true;

      await login(
        loginFormState.data.username,
        loginFormState.data.password,
        loginFormState.data.rememberMe
      );

      emit('success');
    } catch (error) {
      loginFormState.error = true;
    } finally {
      loginFormState.pending = false;
    }
  }
}
</script>
