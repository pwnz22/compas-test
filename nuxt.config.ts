// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: [
    [
      '@nuxtjs/google-fonts',
      {
        families: {
          'PT Sans': [400, 700],
        },
      },
    ],
  ],
});
