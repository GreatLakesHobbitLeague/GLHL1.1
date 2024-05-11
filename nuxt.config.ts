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

  modules: ["@nuxtjs/supabase", "@nuxtjs/google-fonts"],

  supabase: {
    url: "https://ienwmfvepudsgvruuuwh.supabase.co",
    key: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImllbndtZnZlcHVkc2d2cnV1dXdoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTUxMTk1NzcsImV4cCI6MjAzMDY5NTU3N30.nWGcha5V7xdZx0zmGo39F2hIZD_EwUYf05xk0IZtIh0",
    redirect: false,
  },

  googleFonts: {
    families: {
      Cinzel: true,
      "Uncial+Antiqua": true,
    },
  },
});
// nuxt.config.js
