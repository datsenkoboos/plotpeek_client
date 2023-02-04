<template>
  <UiNav>
    <div class="w-full grow flex flex-col gap-2 justify-start">
      <UiNavLink to="/" class="disabled">
        <Icon name="ph:house" size="22px" />
        <span>Home</span>
      </UiNavLink>
      <UiNavLink to="/liked">
        <Icon name="ph:heart" size="22px" />
        <span>Liked</span>
      </UiNavLink>
      <UiNavLink to="/create">
        <Icon name="ph:plus-circle" size="22px" />
        <span>Create</span>
      </UiNavLink>
    </div>
    <nuxt-link to="/logout" class="button w-full text-white bg-black">
      <Icon name="ph:sign-out" size="22px" />
      <span>Logout</span>
    </nuxt-link>
  </UiNav>
</template>
