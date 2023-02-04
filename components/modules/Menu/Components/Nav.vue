<template>
  <UiNav>
    <div class="w-full grow flex flex-col gap-2 justify-start">
      <UiNavLink to="/" class="disabled">
        <Icon name="ph:house" size="22px" />
        <span>Home</span>
      </UiNavLink>
    </div>
    <nuxt-link to="/login" class="button w-full text-white bg-black">
      <Icon name="ph:sign-out" size="22px" />
      <span>Login</span>
    </nuxt-link>
  </UiNav>
</template>
