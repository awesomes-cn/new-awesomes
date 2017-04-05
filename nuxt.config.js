module.exports = {
  /*
  ** Headers of the page
  */
  cache: {
    max: 1000,
    maxAge: 900000
  },
  head: {
    title: 'starter',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    'bootstrap/dist/css/bootstrap-grid.css',
    'normalize.css',
    'prismjs/themes/prism.css',
    'element-ui/lib/theme-default/index.css',
    'animate.css',
    '~assets/css/main.css'
  ],
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#da552f' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  plugins: ['~plugins/vue-icon', '~plugins/element-ui', '~plugins/common', { src: '~plugins/pagination', ssr: false }, { src: '~plugins/editor', ssr: false }, { src: '~plugins/upload', ssr: false }]
}
