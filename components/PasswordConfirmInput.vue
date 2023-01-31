<template>
  <UiTextInput
    title="Confirm password"
    placeholder="*********"
    :type="visible ? 'text' : 'password'"
    @update-value="updateValue"
  >
    <button @click.prevent="seeHidePassword">
      <Icon
        size="18px"
        :name="
          visible
          ? 'ph:eye-bold'
          : 'ph:eye-closed-bold'
        "
      />
    </button>
  </UiTextInput>
</template>
<script setup lang="ts">
const emit = defineEmits<{
  (event: 'updateValue', value: string): void;
}>();

function updateValue(value: string) {
  emit('updateValue', value);
}

const visible = ref(false);

function seeHidePassword() {
  visible.value = !visible.value;
}
</script>
