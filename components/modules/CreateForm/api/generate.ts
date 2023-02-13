import $api from '@/api';

export default async function generate(
  author: string,
  name: string,
  volume: 1 | 2 | 3
) {
  const runtimeConfig = useRuntimeConfig();
  const response = await $api.post<string>(
    `${runtimeConfig.public.API_URL}/plotpeek/generate`,
    {
      author,
      name,
      volume,
    }
  );
  return response;
}
