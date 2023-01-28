<template>
  <transition name="popup">
    <div
      v-show="open"
      class="absolute z-[9999] w-full h-full backdrop-blur-sm rounded-lg flex flex-col items-center justify-center gap-2 font-semibold select-none"
    >
      <Icon
        name="material-symbols:warning-rounded"
        color="#ff0000"
        size="50px"
      />
      <div class="text-center">
        <template v-if="status === 403">
          <p class="text-md">Confirm email adress</p>
        </template>
        <template v-else-if="status === 401">
          <p class="text-md">Wrong login credentials</p>
        </template>
        <template v-else>
          <p class="text-md">Unexpected error occured</p>
          <p class="text-xs">Check your internet connection</p>
        </template>
      </div>
      <button
        @click.prevent="close"
        class="absolute top-3 right-3 flex items-center justify-center"
      >
        <Icon name="material-symbols:close-rounded" size="21px" />
      </button>
    </div>
  </transition>
</template>
<script setup lang="ts">
const props = defineProps<{
  open: boolean;
  status?: number | null;
}>();

const emit = defineEmits<{
  (e: 'close'): void;
}>();

const close = () => {
  emit('close');
};
</script>
<style lang="scss" scoped>
.popup-enter-active,
.popup-leave-active {
  transition: opacity 0.2s ease;
}
.popup-enter-from,
.popup-leave-to {
  opacity: 0;
}
</style>
