import useAuthStore from '@/stores/auth';
const authStore = useAuthStore();

export default defineNuxtRouteMiddleware((to, from) => {
  if (authStore.authorized) {
    return navigateTo(from);
  }
});
