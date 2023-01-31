<template>
  <nav class="flex flex-col items-start text-xl">
    <UiLink to="/">
      <Icon name="ph:house" size="26px" />
      <span>Home</span>
    </UiLink>
    <UiLink to="/liked">
      <Icon name="ph:heart" size="26px" />
      <span>Liked</span>
    </UiLink>
    <UiLink to="/create">
      <Icon name="ph:plus-circle" size="26px" />
      <span>Create</span>
    </UiLink>
    <UiLink to="/logout" class="text-red-500">
      <Icon name="ph:plus-circle" size="26px" />
      <span>Logout</span>
    </UiLink>
  </nav>
</template>
