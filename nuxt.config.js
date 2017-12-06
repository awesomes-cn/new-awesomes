const Config = require('./config')
module.exports = {
  /*
  ** Headers of the page
  */
  cache: {
    max: 1000,
    maxAge: 900000
  },
  router: {
    // 在每页渲染前运行 middleware/user-agent.js 中间件的逻辑
    middleware: ['auth', 'i18n', 'notification']
  },
  head: {
    title: 'Awesomes-Web前端开发资源库',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no' },
      { hid: 'description', name: 'description', content: 'Web前端开发工程师需要的免费开源的高质量前端库、框架和插件' },
      {hid: 'keywords', name: 'keywords', content: 'html5,h5,css3,jquery,web框架,js框架,jquery插件,免费开源,中文文档'}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    'bootstrap/dist/css/bootstrap.css',
    'prismjs/themes/prism.css',
    'animate.css',
    '~/assets/css/main.css'
  ],
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#da552f' },
  /*
  ** Build configuration
  */
  build: {
    vendor: [
      'vue-i18n',
      'babel-polyfill'
    ],
    publicPath: `${Config.CDN}.nuxt/dist/`,
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
  plugins: ['~/plugins/vue-icon', '~/plugins/icon', '~/plugins/common', { src: '~/plugins/ba.js', ssr: false }, { src: '~/plugins/pagination.js', ssr: false }, { src: '~/plugins/i18n.js', injectAs: 'i18n' }]
}
