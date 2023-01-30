// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['nuxt-icon', '@pinia/nuxt'],
  css: ['~/assets/styles/main.css', '~/assets/styles/fonts.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    public: {
      API_URL: 'http://localhost:5000/api',
    },
  },
  vite: {},
});
