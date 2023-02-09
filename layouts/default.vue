<template>
  <div class="relative flex flex-col min-h-[100vh]">
    <ModuleMenu />
    <MainHeader />
    <slot />
  </div>
</template>
<script setup lang="ts">
import ModuleMenu from '@/components/modules/Menu/Menu.vue';
import useUiStore from '@/stores/ui';
const uiStore = useUiStore();

const router = useRouter();

router.afterEach(() => {
  uiStore.setMenuActive(false);
});
</script>
