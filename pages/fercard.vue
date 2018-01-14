<template lang="pug">
  div
    div.top-bar
      div.container
        img(src="../assets/img/fercard-logo.png")
        div.fername
          span Fer
          span Card
    div.banner-main
      h1 Front End Repo Card
      div.slogan 在你的 Chrome 新标签页中随机推荐优秀的前端框架
      div.btn-boxs
        a(href="https://ofm2qnhj5.qnssl.com/fercard.crx") 下载插件
        a(href="https://chrome.google.com/webstore/detail/fercard/mcbhghidfhbmmgggbfdajeppeemehldb" target="_blank") Chrome 应用商店
    div.demo-box
      img.preview(src="../assets/img/fercard-demo.png")
    div.foot-box
      span Copyright © 2017. All rights reserved. Awesomes 
      span 已开源在 
      a(href="https://github.com/awesomes-cn/fercard") GitHub
      span 上

</template>

<script>
  export default {
    layout: 'blank'
  }
</script>

<style lang="scss">
  .page-fercard  {
    .body {
      padding: 0;
    }
    .top-bar {
      padding: 20px 0;

      .fername {
        font-size: 30px;
        font-weight: bold;
        margin-left: 10px;

        span:nth-child(1) {
          color: #11aff1
        }

        span:nth-child(2) {
          color: #3fb125
        }
      }
      .container {
        display: flex;
        align-items: center
      }
    }

    .banner-main {
      background-color: #f0f4f6;
      padding: 70px 0;
      display: flex;
      align-items: center;
      flex-direction: column;
      font-size: 20px;

      .slogan {
      }

      h1 {
        font-size: 60px;
        font-weight: 100;
      }

      .btn-boxs {
        margin-top: 50px;
        a {
          display: inline-block;
          border-radius: 100px;
          padding: 10px 40px;
          font-size: 17px;
          margin-right: 20px;
          transition: all .6s;
          &:nth-child(1) {
            border: 2px solid #11aff1;
            color: #11aff1;
            &:hover {
              background-color: #11aff1;
              color: #FFF;
            }
          }

          &:nth-child(2) {
            border: #3fb125  2px solid;
            color: #3fb125;
            &:hover {
              background-color: #3fb125;
              color: #FFF;
            }
          }
        }
      }
    }

    .demo-box {
      display: flex;
      align-items: center;
      padding: 50px 0;
      justify-content: center;

      .preview {
        box-shadow: 0px 0px 100px #b1b1b1;
        border-radius: 5px;
      }
    }

    .foot-box {
      padding: 100px;
      text-align: center;
      font-size: 15px;
    }
  }
</style>
