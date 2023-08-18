const name = 'Mary & Wayne Junior'
const dates = 'October 1st 1948 & January 21st 1944 - Aug 8th 2023'
const name_1 = 'Mary Sue Davis-Junior'
const birth_date_1 = 'October 1st, 1948 - August 8th, 2023'
const name_2 = 'Wayne Frederick Junior'
const birth_date_2 = 'January 21st, 1944 - August 8th, 2023'

export default {
  publicRuntimeConfig: {
    name: name,
    dates: dates,
    name_1: name_1,
    name_2: name_2,
    birth_date_1: birth_date_1,
    birth_date_2: birth_date_2
  },
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    htmlAttrs: {
      lang: 'en'
    },
    get title() {
      delete this.title
      return this.title =  'In loving memory of ' + name
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Find details on the funeral arrangements for ' + name }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;1,700&family=Pinyon+Script&display=swap' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
