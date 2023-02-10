<template>
  <div
    v-show="uiStore.menuActive"
    class="absolute z-[9998] left-0 top-0 w-full h-screen bg-white flex flex-col"
  >
    <Header />
    <section class="grow w-full flex items-start justify-center pb-5">
      <NavAuthorized v-if="authStore.authorized" />
      <Nav v-else="authStore.authorized" />
    </section>
  </div>
</template>
<script setup lang="ts">
import Header from './Components/Header.vue';
import NavAuthorized from './Components/NavAuthorized.vue';
import Nav from './Components/Nav.vue';

import useAuthStore from '@/stores/auth';
import useUiStore from '@/stores/ui';

const uiStore = useUiStore();
const authStore = useAuthStore();
</script>
