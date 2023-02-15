<template>
  <form class="relative grow flex flex-col gap-2" @submit.prevent="submit">
    <div class="grow flex flex-col gap-2">
      <NameInput
        :class="v$.name.$error ? 'border-red-500' : ''"
        @update-value="($event: string) => { createFormState.name = $event; }"
      />
      <AuthorInput
        :class="v$.author.$error ? 'border-red-500' : ''"
        @update-value="($event: string) => { createFormState.author = $event; }"
      />
      <DescriptionInput
        @update-value="($event: string) => { createFormState.description = $event; }"
      />
      <!-- TODO: remove explicit type annotation -->
      <VolumeInput
        @update-value="($event: number | string) => { createFormState.volume = $event as 1 | 2 | 3; }"
      />
    </div>

    <UiFormValidationErrorOutput :v$="v$" />
    <UiButton class="gap-2 h-[32px]">
      Generate
      <Icon name="ph:arrow-right" size="18px" />
    </UiButton>
  </form>
</template>
<script setup lang="ts">
import NameInput from './NameInput.vue';
import AuthorInput from './AuthorInput.vue';
import DescriptionInput from './DescriptionInput.vue';
import VolumeInput from './VolumeInput.vue';

import { useVuelidate } from '@vuelidate/core';
import { required, helpers } from '@vuelidate/validators';

import useCreateStore from '../store';
const createStore = useCreateStore();

const createFormState = reactive<{
  name: string;
  description: string;
  author: string;
  volume: 1 | 2 | 3;
  content: string;
}>({
  name: '',
  description: '',
  author: '',
  volume: 1,
  content: '',
});

const createFormRules = computed(() => {
  return {
    name: {
      required: helpers.withMessage('Fill in required fields', required),
    },
    author: {
      required: helpers.withMessage('Fill in required fields', required),
    },
  };
});

const v$ = useVuelidate(createFormRules, createFormState, {
  $autoDirty: true,
  $lazy: true,
});

async function submit() {
  const valid = await v$.value.$validate();
  if (valid) {
    createStore.generate(createFormState);
  }
}
</script>
