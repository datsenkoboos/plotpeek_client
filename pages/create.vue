<template>
  <section class="grow flex flex-col gap-5 px-5">
    <UiSectionTitle> Create </UiSectionTitle>
    <ModuleCreateForm />
  </section>
</template>
<script setup lang="ts">
import ModuleCreateForm from '@/components/modules/CreateForm/CreateForm.vue';
import useAuthStore from '@/stores/auth';
const authStore = useAuthStore();

authStore.$subscribe(async () => {
  if (!authStore.authorized) {
    await navigateTo('/login');
  }
});
</script>
