<template>
  <header class="flex items-center justify-center gap-3 p-3">
    <slot name="beforeLogo" />
    <nuxt-link to="/">
      <UiLogo class="text-2xl" />
    </nuxt-link>
    <slot name="afterLogo" />
  </header>
</template>
