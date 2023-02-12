<template>
  <UiRadioInput
    title="Volume"
    name="volume"
    :radios="volumeOptions"
    @update-value="updateValue"
  />
</template>
<script setup lang="ts">
const emit = defineEmits<{
  (e: 'updateValue', value: string | number): void;
}>();
const volumeOptions = [
  { id: 0, value: 1, placeholder: 'Short', checked: true },
  { id: 1, value: 2, placeholder: 'Mid', checked: false },
  { id: 2, value: 3, placeholder: 'Long', checked: false },
];
function updateValue(value: string | number) {
  emit('updateValue', value);
}
</script>
