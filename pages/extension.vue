<template lang="pug">
  div
    div.banner
      h2 AWEB
      h3 寻找前端插件，一步到位
      a.down-btn.store(href="https://chrome.google.com/webstore/detail/aweb/idddhnefeeajhnndkpgganlncgeajiao" target="_blank") 应用商店
      a.down-btn(href="http://ofyh4t6qk.bkt.clouddn.com/Aweb.crx") 直接下载

    div.ext-item
      div.row
        div.col-md-6.col-12(style="text-align: right; padding-right: 10%;")
          img.cover(src="http://ofyh4t6qk.bkt.clouddn.com/ex1.png")
        div.col-md-6.col-12
          h3 最新插件
          p 初始打开Aweb即可看到最新的前端框架
          p 文本框中为空时也会自动呈现
          p 底部的参数依次为：<code>趋势</code>、<code>多少人在用</code>、<code>Issue响应速度</code>、<code>star数</code>
     
    div.ext-item.odd
      div.row
        div.col-md-6.col-12(style="text-align: right; padding-right: 10%;")
          h3 搜索插件
          p 在文本框中输入要查询的关键字（中英文皆可）
          p 回车即可列出相关的前端框架
        div.col-md-6.col-12
          img.cover(src="http://ofyh4t6qk.bkt.clouddn.com/ex6.png")

    div.ext-item.text-center
      h3 命令模式    
      p 输入以 <code>:</code> 开头的指令即可进入命令模式
      img.cover(src="http://ofyh4t6qk.bkt.clouddn.com/ex2.png")
    div.ext-item.odd.text-center
      div.row
        div.col-md-4.col-12
          h3 前端TOP 100 
          img.cover(src="http://ofyh4t6qk.bkt.clouddn.com/ex4.png")
        div.col-md-4.col-12
          h3 专题列表
          img.cover(src="http://ofyh4t6qk.bkt.clouddn.com/ex3.png")
        div.col-md-4.col-12
          h3 专题详情 
          img.cover(src="http://ofyh4t6qk.bkt.clouddn.com/ex7.png")    
    div.ext-item
      div.row
        div.col-md-6.col-12(style="text-align: right; padding-right: 10%;")
          h3  一键提交库
          p 当打开一个GitHub仓库页面时，输入<code>:+</code>命令调出提交面板
          p 正确的地址格式为 <code>https://github.com/jquery/jquery.....</code>
          p 然后选好分类点击提交按钮即可
        div.col-md-6.col-12
          img.cover(src="http://ofyh4t6qk.bkt.clouddn.com/ex5.png")
    div.ext-item.feature-wraper
      h3.title 功能特性
      div.row
        div.col-md-4
          icon(name="offline" width="50px")
          h4 离线访问
          p  由于Aweb会对常用的数据进行一定时间的缓存，所以可以在离线模式下也能正常的访问
        div.col-md-4
          icon(name="send" width="50px")
          h4 持续操作
          p  记录每次用户离开时的状态
          p 再次打开时可持续操作
        div.col-md-4  
          icon(name="language" width="50px")
          h4 国际化
          p  数据和操作都有中英两种语言可供选择
          p 我们会根据不同地域的用户显示不同的语言
</template>
<script>
  export default {
    components: {
    }
  }
</script>

<style lang="scss" scoped>
  .banner {
    background: #f7f8fa;
    text-align: center;
    padding: 50px 0;

    h3 {
      margin-top: 20px;
    }

    .down-btn {
      background-color: #d9534f;
      display: inline-block;
      padding: 5px 20px;
      color: #FFF;
      text-decoration: none;
      margin: 40px 20px;


      &.store {
        background-color: #428bca;
      }
    }
  }

  

  .ext-item {
    padding: 80px;
    background-color: rgba(248, 248, 248, 0.44);
    word-break: break-all;
    line-height: 30px;

    &.odd {
      background: #f7f8fa;
    }

    h3 {
      margin-bottom: 20px;
    }

    .cover {
        width: 100%;
        max-width: 300px;
        box-shadow: 1px 1px 1px #DDD;
        box-shadow: rgba(120, 120, 120, 0.42) 9px 9px 60px 0px;
        border-radius: 4px;
    }

    &.feature-wraper {
      background-color: #FFF;
      text-align: center;
      .title {
        padding: 40px 0;
        border-bottom: #DDD 1px dashed;
        margin-bottom: 50px;
        text-align: center;
      }

      h4 {
        padding: 10px 0;
      }
    }
  }
</style>
