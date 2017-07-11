<template lang="pug">
  footer
    div.container
      div.row
        div.col-md-6
          span 京ICP备14011059号-1 | 本站采用 
          a(href="http://creativecommons.org/licenses/by/4.0/" target="_blank") 识共享署名 4.0 国际许可协议 
          span 进行许可

          div.relations
            a(href="http://weibo.com/awesomescn" target="_blank")
              icon(name="weibo")
            a(href="https://github.com/awesomes-cn"  target="_blank")
              icon(name="github")
            a(href="https://twitter.com/awesomescn"  target="_blank")
              icon(name="twitter")  
            a(href="")
              icon(name="rss")  
          
                
        div.col-md-6.txt-right
          div.links
            nuxt-link(to="/site/about") 关于  
            nuxt-link(to="/site/link") 友情链接  
            nuxt-link(to="/site/contact") 联系我们
            nuxt-link(to="") 信息无障碍文档共享
          p(style="margin: 15px 0") 由全国的开发者共同维护，打造开放自由免费的高质量前端资源库  
          
</template>

<script>
  export default {
  }
</script>


<style lang="scss" scoped>
  footer {
    // margin-top: 50px;
    padding: 30px 0;
    font-size: 12px;
    background-color: #334259;
    color: #8f9eb1
  }

  a:visited, a:link {
    color: #a6b9d3;
  }

  a:hover, a:active {
    color: #8f9eb1;
  }

  .txt-right {
    text-align: right
  }
  
  .links {
    a {
      margin: 0 10px;
    }
  }

  .relations {
    a {
      display: inline-block;
      margin: 20px;
      margin-left: 0;
    }
  }

  .friends {
    a {
      display: inline-block;
      margin: 10px;
      margin-left: 0
    }
  }

</style>
