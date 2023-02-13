<template>
  <form class="relative grow flex flex-col gap-2 pb-5">
    <!-- <component :is="Math.random() > 0.5 ? Foo : Bar" /> -->
    <UiFormRequestErrorOutput
      :open="createFormState.error.state"
      :status="createFormState.error.statusCode"
      @close="closeRequestErrorOuput"
    />
    <div class="grow flex flex-col gap-2" v-show="page === 0">
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
      <!-- TODO: remove explicit type annotation -->
      <VolumeInput
        @update-value="($event: number | string) => { createFormState.data.volume = $event as 1 | 2 | 3; }"
      />
    </div>

    <div
      class="grow flex flex-col justify-center items-center gap-2 pb-5"
      v-show="page === 1"
    >
      <h1 class="font-bold text-brand-gradient text-4xl" v-if="createFormState.pending">Generating</h1>
      <template v-else>
        {{ createFormState.data.content }}
      </template>

    </div>

    <UiFormValidationErrorOutput :v$="v$" />
    <UiButton class="gap-2 h-[32px]" @click.prevent="switchPage">
      <UiLoadingSpinner v-if="createFormState.pending" />
      <template v-else>
        Generate
        <Icon name="ph:arrow-right" size="18px" />
      </template>
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

import generate from './api/generate';

const createFormState = reactive<{
  data: {
    name: string;
    description: string;
    author: string;
    volume: 1 | 2 | 3;
    content: string;
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
    content: '',
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

      const { data } = await generate(
        createFormState.data.name,
        createFormState.data.author,
        createFormState.data.volume
      );

      createFormState.data.content = data;
    } catch (error) {
      page.value -= 1;
      createFormState.error.state = true;
    } finally {
      createFormState.pending = false;
    }
  }
}

function closeRequestErrorOuput() {
  createFormState.error.state = false;
  setTimeout(() => {
    createFormState.error.statusCode = null;
  }, 200);
}
</script>
