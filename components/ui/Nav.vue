<template>
  <nav class="w-full h-full flex flex-col items-center text-lg px-5">
    <div class="w-full grow flex flex-col gap-2 justify-start">
      <UiNavLink to="/">
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
    <UiNavLink to="/logout" class="text-white bg-red-500">
      <Icon name="ph:sign-out" size="22px" />
      <span>Logout</span>
    </UiNavLink>
  </nav>
</template>
