<template>
  <form class="grow flex flex-col gap-2 pb-5">
    <!-- <component :is="Math.random() > 0.5 ? Foo : Bar" /> -->
    <fieldset class="grow flex flex-col gap-2" v-show="page === 0">
      <NameInput
        :class="v$.name.$error ? 'border-red-500' : ''"
        @update-value="($event: string) => { createFormState.data.name = $event; }"
      />
      <AuthorInput
        :class="v$.author.$error ? 'border-red-500' : ''"
        @update-value="($event: string) => { createFormState.data.author = $event; }"
      />
      <DescriptionInput
        @update-value="($event: string) => { createFormState.data.description = $event; }"
      />
      <VolumeInput
        @update-value="($event: number | string) => { createFormState.data.volume = $event as number; }"
      />
    </fieldset>

    <fieldset class="grow flex flex-col gap-2" v-show="page === 1">
      <UiLoadingSpinner v-if="createFormState.pending" />
    </fieldset>

    <UiFormValidationErrorOutput :v$="v$" />
    <UiButton class="gap-2" @click.prevent="switchPage">
      Generate
      <Icon name="ph:arrow-right" size="18px" />
    </UiButton>
  </form>
</template>
<script setup lang="ts">
import NameInput from './components/NameInput.vue';
import AuthorInput from './components/AuthorInput.vue';
import DescriptionInput from './components/DescriptionInput.vue';
import VolumeInput from './components/VolumeInput.vue';

import { useVuelidate } from '@vuelidate/core';
import { required, helpers } from '@vuelidate/validators';

const createFormState = reactive<{
  data: {
    name: string;
    description: string;
    author: string;
    volume: number;
  };
  error: {
    state: boolean;
    statusCode: number | null;
  };
  pending: boolean;
}>({
  data: {
    name: '',
    description: '',
    author: '',
    volume: 1,
  },
  error: {
    state: false,
    statusCode: null,
  },
  pending: false,
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

const v$ = useVuelidate(createFormRules, createFormState.data, {
  $autoDirty: true,
  $lazy: true,
});

const page = ref(0);

async function switchPage() {
  const valid = await v$.value.$validate();
  if (valid) {
    page.value += 1;
    try {
      createFormState.error.state = false;
      createFormState.pending = true;
    } catch (error) {
    } finally {
    }
  }
}
</script>
