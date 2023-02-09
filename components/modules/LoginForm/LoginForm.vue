<template>
  <form
    class="relative w-full flex flex-col justify-center gap-5 px-5"
    @submit.prevent="submitLoginForm"
  >
    <UiFormRequestErrorOutput
      :open="loginFormState.error.state"
      :status="loginFormState.error.statusCode"
      @close="closeRequestErrorOuput"
    />
    <h1 class="text-center text-3xl font-medium">Login</h1>
    <div class="flex flex-col gap-2">
      <fieldset class="flex flex-col gap-2">
        <MainUsernameInput
          :class="v$.username.$error ? 'border-red-500' : ''"
          @update-value="($event: string) => { loginFormState.data.username = $event; }"
        />
        <MainPasswordInput
          :class="v$.password.$error ? 'border-red-500' : ''"
          @update-value="($event: string) => { loginFormState.data.password = $event; }"
        />
        <div class="flex items-center justify-between h-7">
          <UiFormValidationErrorOutput :v$="v$" />
          <RememberMeInput
            class="grow"
            @update-value="($event: boolean) => { loginFormState.data.rememberMe = $event; }"
          />
        </div>
      </fieldset>
      <UiButton class="h-[32px]">
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

import useAuthStore from '@/stores/auth';
const authStore = useAuthStore();

const emit = defineEmits<{
  (e: 'success'): void;
}>();

const loginFormState = reactive<{
  data: {
    username: string;
    password: string;
    rememberMe: boolean;
  };
  error: {
    state: boolean;
    statusCode: number | null;
  };
  pending: boolean;
}>({
  data: {
    username: '',
    password: '',
    rememberMe: true,
  },
  error: {
    state: false,
    statusCode: null,
  },
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
      loginFormState.error.state = false;
      loginFormState.pending = true;

      const { data } = await login(
        loginFormState.data.username,
        loginFormState.data.password,
        loginFormState.data.rememberMe
      );
      authStore.setUser(data.user);
      authStore.setAuthorized(true);

      emit('success');
    } catch (error: any) {
      loginFormState.error.state = true;
      loginFormState.error.statusCode = error.response.status
        ? error.response.status
        : null;
    } finally {
      loginFormState.pending = false;
    }
  }
}

function closeRequestErrorOuput() {
  loginFormState.error.state = false;
  setTimeout(() => {
    loginFormState.error.statusCode = null;
  }, 200);
}
</script>
