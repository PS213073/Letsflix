// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@vesp/nuxt-fontawesome',
    "@nuxtjs/sitemap",
    "@nuxtjs/seo",
    "@nuxt/image"
  ],
  fontawesome: {
    icons: {
      solid: ['house', 'film', 'tv', 'search', 'play'],
    }

  },
  runtimeConfig: {
    AccessToken: process.env.AccessToken
  },
  app: {
    head: {
      title: 'Lets Flix',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: "Lets Flix is a comprehensive platform for movie and series enthusiasts."
        }
      ],
      htmlAttrs: {
        lang: "en",
      },
    },
  },

  site: {
    url: 'http://localhost:3000/'
  },
})