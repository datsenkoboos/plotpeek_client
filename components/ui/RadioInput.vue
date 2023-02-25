<template>
  <div class="flex flex-col gap-2">
    <label :for="name" class="font-semibold">{{ title }}</label>
    <div class="flex gap-2 rounded-lg text-md">
      <div
        v-for="radio in radios"
        :name="name"
        :key="radio.id"
        @click="select(radio.value)"
        class="border-[1px] rounded-lg flex items-center justify-center grow px-5 py-1 font-medium cursor-pointer"
        :class="
          localValue === radio.value
            ? 'brand-gradient text-white border-white'
            : ''
        "
      >
        {{ radio.placeholder }}
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const props = defineProps<{
  name: string;
  radios: {
    id: number;
    value: string | number;
    placeholder: string;
    checked: boolean;
  }[];
  title?: string;
}>();
const emit = defineEmits<{
  // TODO: automatic value types generation
  (e: 'updateValue', value: string | number): void;
}>();

const localValue = ref(props.radios.filter((r) => r.checked)[0].value);

function select(value: string | number) {
  localValue.value = value;
  emit('updateValue', localValue.value);
}
</script>
