// https://nuxt.com/docs/api/configuration/nuxt-config
import vue from "@vitejs/plugin-vue";
export default defineNuxtConfig({

  devtools: { enabled: true },
  modules: [
      '@nuxtjs/tailwindcss'
  ],
// @ts-ignore
  runtimeConfig: {
    public: {
      baseApiUrl: 'http://localhost:8090'
    }
    }
})
