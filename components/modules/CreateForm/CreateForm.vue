<template>
  <div class="relative grow flex flex-col gap-2 pb-5">
    <UiFormRequestErrorOutput
      :open="createStore.error.state"
      :status="createStore.error.statusCode"
      @close="createStore.closeRequestErrorOuput"
    />
    <KeepAlive>
      <component :is="createStore.page === 0 ? PageFirst : PageSecond" />
    </KeepAlive>
  </div>
</template>
<script setup lang="ts">
import PageFirst from './components/PageFirst.vue';
import PageSecond from './components/PageSecond.vue';

import useCreateStore from './store/index';
const createStore = useCreateStore();
</script>
