<template>
  <div
    role="checkbox"
    :aria-checked="value"
    :name="name"
    @click="updateValue"
    class="cursor-pointer flex items-center justify-center w-[15px] h-[15px] rounded-full border-[1px] focus:border-black focus:outline-none"
    tabindex="0"
    data-testid="checkbox"
  >
    <div
      v-show="value"
      class="w-[11px] h-[11px] rounded-full brand-gradient"
      :class="hexColor ? `bg-[${color}]` : `bg-${color}`"
      data-testid="chekboxIndicator"
    ></div>
  </div>
</template>
<script setup lang="ts">
interface Props {
  default?: boolean;
  color?: string;
  name: string;
}

const props = withDefaults(defineProps<Props>(), {
  default: false,
  color: 'pink-500',
});

const emit = defineEmits<{
  (e: 'updateValue', value: boolean): void;
}>();

const hexColor = computed(() => {
  return props.color.includes('#');
});

const value = ref(props.default);

const updateValue = () => {
  value.value = !value.value;
  emit('updateValue', value.value);
};
</script>
