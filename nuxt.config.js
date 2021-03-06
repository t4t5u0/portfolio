export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'universal',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'server',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    // title: process.env.npm_package_name || '',
    title: 't4t5u0のHP',
    meta: [
      { charset: 'utf-8' },
      // { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      // { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      {
        hid: 'decription',
        name: 'description',
        content: 'これはメタコンテンツです'
      },
      {
        name: 'viewport',
        content:
          'width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ['@nuxtjs/vuetify'],
  /*
   ** Nuxt.js modules
   */
  modules: [['nuxt-webfontloader']],
  webfontloader: {
    google: {
      families: [
        'Josefin+Sans',
        'Sacramento',
        'Kosugi+Maru',
        'M+PLUS+Rounded+1c:wght@100'
      ]
    }
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    postcss: {
      preset: {
        autoprefixer: {
          // grid: true,
          // grid: 'autoplace'
        }
      }
    }
  },
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      light: true,
      treeShake: true,
      options: {
        customProperties: true
      },
      themes: {
        dark: {
          background: '#00a86b'
        },
        light: {
          primary: '#00c3ed',
          secondary: '#81edf7',
          accent: '#fece4d',
          error: '#f44336',
          warning: '#ffc107',
          info: '#2196f3',
          success: '#4caf50',

          background: '#ff0000'
        }
      }
    }
  }
};
