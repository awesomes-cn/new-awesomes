<template>
  <div>
    <div class="top-box">
      <h1>前端<span>8</span>点半</h1>
      <h3 class="slogan">每天<span class="color-1">3分钟</span> = 打牢<span class="color-2">基础</span> + 扩展<span class="color-3">视野</span></h3>
    </div>
    <div class="body-box box-1">
      <h4>要解决的问题</h4>
      <h5>每天忙着敲代码，基础知识永远不想花时间去看</h5>
      <h5>新的 JS 和 CSS 特性已经出来很长时间了，你却一直不知道，更别说用上</h5>
      <h5>看到长篇教程就不耐烦，更别说看完一本书</h5>
      <h5>三大框架？Service Worker？PWA？WebAssembly？新的技术可以不去学，但是一定要了解</h5>
    </div>
    <div class="body-box box-1">
      <h4>解决方案</h4>
      <p>每天 8 点半定时为你推送前端基础知识点，只需 3 分钟就能在地铁上学习到</p>
      <p>我们的内容包含很多你不知道的 CSS 和 JS 特性</p>
      <p></p>
      <p>我们的内容包含各种最新技术的介绍</p>
    </div>
  </div>
</template>

<script>
  export default {
    layout: 'blank'
  }
</script>

<style lang="scss">
.page-dayfront  {
  .body {
    padding: 0;
  }
  .top-box {
    background-color: #EEE;
    padding: 130px 0;
    text-align: center;
    background-color: #1392d6;
    color: #FFF;
    text-shadow: 0px 0px 10px #2a69a5;
    letter-spacing: 10px;
    .slogan {
      color: #FAFAFA;
      margin-top: 30px;
    }

    .color-1 {
      color: #ff0000;
    }
    .color-2 {
      color: #9dff00;
    }
    .color-3 {
      color: #ff9800;
    }
  }

  .body-box {
    color: #444;
    padding: 100px 0;
  }
}
</style>
