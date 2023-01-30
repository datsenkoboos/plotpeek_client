<template>
  <button @click="toggleMenu" class="absolute left-3 top-3">
    <Icon :name="active ? 'mdi:menu-close' : 'mdi:menu'" size="29px" />
  </button>
</template>
<script setup lang="ts">
const props = defineProps<{
  active: boolean;
}>();

const value = ref(props.active);

const emit = defineEmits<{
  (e: 'toggleMenu', value: boolean): void;
}>();

function toggleMenu() {
  value.value = !value.value;
  emit('toggleMenu', value.value);
}
</script>
