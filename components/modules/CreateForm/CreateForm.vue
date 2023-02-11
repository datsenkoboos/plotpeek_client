<template>
  <form class="grow flex flex-col pb-5">
    <component :is="Math.random() > 0.5 ? Foo : Bar" />
    <fieldset class="grow flex flex-col gap-2">
      <NameInput />
      <AuthorInput />
      <DescriptionInput />
      <VolumeInput @update-value="updateVolume" />
    </fieldset>

    <UiButton class="gap-2" @click.prevent="switchPage">
      Generate
      <Icon name="ph:arrow-right" size="18px" />
    </UiButton>
  </form>
</template>
<script setup lang="ts">
import NameInput from './components/NameInput.vue';
import AuthorInput from './components/AuthorInput.vue';
import DescriptionInput from './components/DescriptionInput.vue';
import VolumeInput from './components/VolumeInput.vue';

function updateVolume(value: number | string) {

}
function switchPage() {

}
</script>
