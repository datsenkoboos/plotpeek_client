export default async function login(
  username: string,
  password: string,
  refresh: boolean
) {
  const runtimeConfig = useRuntimeConfig();
  const response = await $fetch<{ available: boolean }>(
    `${runtimeConfig.public.API_URL}/login`,
    {
      method: 'POST',
      body: {
        username,
        password,
        refresh,
      },
    }
  );
  return response;
}
