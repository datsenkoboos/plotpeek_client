import $api from '~~/api';
import AuthResponse from '~~/stores/api/AuthResponse';

export default async function refresh() {
  const runtimeConfig = useRuntimeConfig();
  const response = await $api.post<AuthResponse>(
    `${runtimeConfig.public.API_URL}/refresh`
  );
  return response;
}
