<template>
    <UiRadioInput title="Volume" name="volume" :radios="volumeOptions" @update-value="updateValue" />
</template>
<script setup lang="ts">
const emit = defineEmits<{
  (e: 'updateValue', value: string | number): void
}>()
const volumeOptions = [
  { id: 0, value: 1, placeholder: 'Short'},
  { id: 1, value: 2, placeholder: 'Mid'},
  { id: 2, value: 3, placeholder: 'Long'},
]
function updateValue(value: string | number) {
  emit('updateValue', value)
}
</script>