import axios, { AxiosRequestConfig } from 'axios';

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

export default $api;
