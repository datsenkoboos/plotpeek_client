<template>
  <UiDebouncedTextInput
    title="Email"
    placeholder="john.doe@example.com"
    type="email"
    @update-value="updateValue"
  />
</template>
<script setup lang="ts">
const emit = defineEmits<{
  (event: 'updateValue', value: string): void;
}>();

function updateValue(value: string) {
  emit('updateValue', value);
}
</script>
