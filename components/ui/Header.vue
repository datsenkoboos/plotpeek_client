<template>
  <header class="relative flex items-center justify-center gap-3 p-5">
    <slot name="beforeLogo" />
    <nuxt-link to="/">
      <UiLogo class="text-2xl" />
    </nuxt-link>
    <slot name="afterLogo" />
  </header>
</template>
