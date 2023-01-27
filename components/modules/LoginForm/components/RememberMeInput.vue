<template>
  <div class="flex items-center justify-end gap-2">
    <label for="rememberme" class="font-medium text-sm text-brand-gradient"
      >Remember me</label
    >
    <UiCheckboxInput
      name="rememberme"
      @update-value="updateValue"
      :default="true"
    />
  </div>
</template>
<script setup lang="ts">
const emit = defineEmits<{
  (e: 'updateValue', value: boolean): void;
}>();

function updateValue(value: boolean) {
  emit('updateValue', value);
}
</script>
