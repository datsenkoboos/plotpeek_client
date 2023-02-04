<template>
  <div
    class="flex items-center gap-3 border-[1px] rounded-lg p-3 transition-all"
    :class="focused ? 'border-violet-500' : ''"
  >
    <button @click="search">
      <Icon name="ph:magnifying-glass" size="25px" />
    </button>
    <input
      v-model="query"
      type="text"
      placeholder="Search for plotpeeks"
      class="grow focus:outline-none"
      @focus="toggleFocus"
      @blur="toggleFocus"
    />
  </div>
</template>
<script setup lang="ts">
const query = ref('');

async function search() {
  await navigateTo('/search?q=' + query.value);
}

const focused = ref(false);

function toggleFocus() {
  focused.value = !focused.value;
}
</script>
