<template>
  <nuxt-link :to="`/plotpeek/${data.id}`" class="w-full border-[1px] rounded-lg">
    <div class="flex items-end gap-2 py-2 px-4 brand-gradient w-full rounded-t-lg text-white font-medium">

        <span class="text-2xl">{{  data.name  }}</span>
        <span class="text-xs pb-1">{{  data.author  }}</span>
        
    </div>
    
  </nuxt-link>
</template>
<script setup lang="ts">
import Plotpeek from '@/api/Plotpeek';

const props = defineProps<{
  data: Plotpeek;
}>();
</script>
