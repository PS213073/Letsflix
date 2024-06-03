// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@vesp/nuxt-fontawesome'],
  fontawesome: {
    icons: {
      solid: ['house', 'film', 'tv', 'search', 'play'],
    }

  },
  runtimeConfig: {
    AccessToken: process.env.AccessToken
  }
})