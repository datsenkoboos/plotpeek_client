<template>
  <form
    class="w-[300px] flex flex-col justify-center gap-5"
    @submit.prevent="submitRegistrationForm"
  >
    <h1 class="text-center text-3xl font-medium">Registration</h1>
    <div class="flex flex-col gap-2">
      <fieldset
        class="flex flex-col gap-2"
        :class="v$.$errors.length ? '' : 'pb-7'"
      >
        <UsernameInput
          :class="v$.username.$error ? 'border-red-500' : ''"
          @update-value="($event: string) => { registrationFormState.data.username = $event; }"
        />
        <EmailInput
          :class="v$.email.$error ? 'border-red-500' : ''"
          @update-value="($event: string) => { registrationFormState.data.email = $event; }"
        />
        <PasswordInput
          :class="v$.password.$error ? 'border-red-500' : ''"
          @update-value="($event: string) => { registrationFormState.data.password = $event; }"
        />
        <PasswordConfirmInput
          :class="v$.passwordConfirm.$error ? 'border-red-500' : ''"
          @update-value="($event: string) => { registrationFormState.data.passwordConfirm = $event; }"
        />
        <UiFormValidationErrorOutput :v$="v$" />
      </fieldset>

      <UiButton>
        <UiLoadingSpinner v-if="registrationFormState.pending" />
        <span v-else>Register</span>
      </UiButton>
    </div>
  </form>
</template>
<script setup lang="ts">
import { useVuelidate } from '@vuelidate/core';
import {
  email,
  minLength,
  required,
  sameAs,
  helpers,
} from '@vuelidate/validators';
import usernameAvailable from './helpers/validators/usernameAvailable';
import withCapitalLetter from './helpers/validators/withCapitalLetter';
import withDigit from './helpers/validators/withDigit';

import register from './api/register';

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

const registrationFormRules = computed(() => {
  return {
    username: {
      required: helpers.withMessage('Fill in required fields', required),
      lettersAndDigitsOnly: helpers.withMessage(
        'Username: digits and letters only',
        helpers.regex(/^[0-9a-zA-Z]+$/)
      ),
      available: helpers.withMessage(
        'Username is already taken',
        helpers.withAsync(usernameAvailable)
      ),
    },
    email: {
      required: helpers.withMessage('Fill in required fields', required),
      email: helpers.withMessage('Provide valid email', email),
    },
    password: {
      required: helpers.withMessage('Fill in required fields', required),
      minLength: helpers.withMessage(
        'Password min. 8 characters',
        minLength(8)
      ),
      withDigit: helpers.withMessage('Number required in password', withDigit),
      withCapitalLetter: helpers.withMessage(
        'Capital letter required in password',
        withCapitalLetter
      ),
    },
    passwordConfirm: {
      required: helpers.withMessage('Fill in required fields', required),
      sameAs: helpers.withMessage(
        'Passwords do not match',
        sameAs(registrationFormState.data.password)
      ),
    },
  };
});

const v$ = useVuelidate(registrationFormRules, registrationFormState.data, {
  $autoDirty: true,
  $lazy: true,
});

async function submitRegistrationForm() {
  const valid = await v$.value.$validate();
  if (valid) {
    try {
      registrationFormState.error = false;
      registrationFormState.pending = true;

      await register(
        registrationFormState.data.username,
        registrationFormState.data.email,
        registrationFormState.data.password
      );

      emit('success');
    } catch (error) {
      registrationFormState.error = true;
    } finally {
      registrationFormState.pending = false;
    }
  }
}
</script>
