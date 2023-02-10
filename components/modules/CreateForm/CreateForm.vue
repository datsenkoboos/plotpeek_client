<template>
    <form class="flex flex-col gap-2">
        <NameInput />
        <AuthorInput />
        <DescriptionInput />
    </form>
</template>
<script setup lang="ts">
import NameInput from './components/NameInput.vue';
import AuthorInput from './components/AuthorInput.vue';
import DescriptionInput from './components/DescriptionInput.vue';
</script>