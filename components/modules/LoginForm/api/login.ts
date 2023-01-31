import $api from '@/api';
import AuthResponse from '@/stores/api/AuthResponse';

export default async function login(
  username: string,
  password: string,
  refresh: boolean
) {
  const runtimeConfig = useRuntimeConfig();
  const response = await $api.post<AuthResponse>(
    `${runtimeConfig.public.API_URL}/login`,
    {
      username,
      password,
      refresh,
    }
  );
  return response;
}
