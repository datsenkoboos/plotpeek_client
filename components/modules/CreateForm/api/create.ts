import $api from '@/api';

export default async function create(
  author: string,
  name: string,
  volume: 1 | 2 | 3,
  description: string,
  content: string
) {
  const runtimeConfig = useRuntimeConfig();
  const response = await $api.post<string>(
    `${runtimeConfig.public.API_URL}/plotpeek/create`,
    {
      author,
      name,
      volume,
      description, 
      content
    }
  );
  return response;
}
