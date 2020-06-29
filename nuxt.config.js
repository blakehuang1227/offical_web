const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  router: {
    base: '/official_web/'
  }
} : {}

export default {
  // ...routerBase,
  router: {
    base: '/official_web/'
  },

  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: ['./plugins/main', './plugins/vue-scrollto', './plugins/VueGtm.js', { src: '~/plugins/vue-slick.js', ssr: false }],
  // plugins: [{ src: '~/plugins/vue-scrollto', mode: 'client' }],

  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    ['vue-scrollto/nuxt', { duration: 700 }], ['bootstrap-vue/nuxt']
  ],
  /*
  ** Build configuration
  */
  build: {
    vendor: ['vue-scrollto'],
    extend(config, { isServer }) {
      if (isServer) {
        config.externals = [
          require('webpack-node-externals')({
            whitelist: [/^vue-slick/]
          })
        ]
      }
      else {
        config.devtool = 'eval-source-map';
      }
    },
    /*
    ** You can extend webpack config here
    */

  },

  // npm run generate不會產生動態路由
  // 參照 https://nuxtjs.org/api/configuration-generate#routes
  generate: {
    routes: [
      '/store/m-pos',
    ]
  }
}
