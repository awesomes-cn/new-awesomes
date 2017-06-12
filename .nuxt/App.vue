<template>
  <div id="__nuxt">
    <nuxt-loading ref="loading"></nuxt-loading>
    <component v-if="layout" :is="layout"></component>
  </div>
</template>

<script>
import NuxtLoading from './components/nuxt-loading.vue'

let layouts = {

  "_admin": () => import('/home/hxh/share/new-awesomes/layouts/admin.vue'  /* webpackChunkName: "layouts/admin" */),

  "_blank": () => import('/home/hxh/share/new-awesomes/layouts/blank.vue'  /* webpackChunkName: "layouts/blank" */),

  "_default": () => import('/home/hxh/share/new-awesomes/layouts/default.vue'  /* webpackChunkName: "layouts/default" */)

}

export default {
  head: {"title":"Awesomes-Web前端开发资源库","meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"},{"hid":"description","name":"description","content":"Web前端开发工程师需要的免费开源的高质量前端库、框架和插件"},{"hid":"keywords","name":"keywords","content":"html5,h5,css3,jquery,web框架,js框架,jquery插件,免费开源,中文文档"}],"link":[{"rel":"icon","type":"image/x-icon","href":"/favicon.ico"}]},
  data: () => ({
    layout: null,
    layoutName: ''
  }),
  
  mounted () {
    this.$loading = this.$refs.loading
    this.$nuxt.$loading = this.$loading
  },
  
  methods: {
    setLayout (layout) {
      if (!layout || !layouts['_' + layout]) layout = 'default'
      this.layoutName = layout
      let _layout = '_' + layout
      this.layout = layouts[_layout]
      return this.layout
    },
    loadLayout (layout) {
      if (!layout || !layouts['_' + layout]) layout = 'default'
      let _layout = '_' + layout
      if (typeof layouts[_layout] !== 'function') {
        return Promise.resolve(layouts[_layout])
      }
      return layouts[_layout]()
      .then((Component) => {
        layouts[_layout] = Component
        return layouts[_layout]
      })
      .catch((e) => {
        if (this.$nuxt) {
          return this.$nuxt.error({ statusCode: 500, message: e.message })
        }
        console.error(e)
      })
    }
  },
  components: {
    NuxtLoading
  }
}
</script>


<style src="bootstrap/dist/css/bootstrap.css" lang="css"></style>

<style src="prismjs/themes/prism.css" lang="css"></style>

<style src="animate.css" lang="css"></style>

<style src="~assets/css/main.css" lang="css"></style>

