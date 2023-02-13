import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import AuthResponse from '@/stores/api/AuthResponse';

const $api = axios.create({
  withCredentials: true,
  // baseURL: useRuntimeConfig().public.API_URL,
});

$api.interceptors.request.use((config: AxiosRequestConfig) => {
  config.headers!.Authorization = `Bearer ${localStorage.getItem(
    'accessToken'
  )}`;
  return config;
});

$api.interceptors.response.use(
  (config: AxiosResponse) => {
    return config;
  },
  async (error: any) => {
    const request = error.config;
    if (error.response.status === 401) {
      try {
        const runtimeConfig = useRuntimeConfig();

        const response = await $api.post<AuthResponse>(
          `${runtimeConfig.public.API_URL}/refresh`
        );
        localStorage.setItem('accessToken', response.data.accessToken);

        return $api.request(request);
      } catch (error) {
        throw error;
      }
    }
  }
);

export default $api;
