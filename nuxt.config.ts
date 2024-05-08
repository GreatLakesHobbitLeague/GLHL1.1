// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  // Other configurations
  // @ts-ignore
  modules: ["@nuxtjs/google-fonts"],
  googleFonts: {
    families: {
      Cinzel: true,
      "Uncial+Antiqua": true,
    },
  },
});
// nuxt.config.js
