<template>
  <div class="dayfront-container">
    <div class="top-box">
      <h1>前端早<span>8</span>点</h1>
      <h3 class="slogan">每天<span class="color-1">3分钟</span> = 打牢<span class="color-2">基础</span> + 扩展<span class="color-3">视野</span></h3>
    
      <img src="../assets/img/dpr.png" style="width: 450px" />
    </div>

    <div class="body-box box-1">
      <h3>要解决的问题</h3>

      <div class="alert alert-warning">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bookmark"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
        <span>每天忙着敲代码，基础知识永远不想花时间去看</span>
      </div>
      <p>我们每天上午 8 点准时为你推送前端基础知识点，只需 3 分钟就能在地铁上学习到，而且能帮你养成一个持续学习的好习惯</p>
      
      <div  class="alert alert-warning">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bookmark"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
        <span>看到长篇教程就不耐烦，更别说看完一本书</span>
      </div>
      <p>我们每期只推送一个核心知识点，提炼出最简单的文字，让开发者能在最快的时间内学习到</p>

      <div  class="alert alert-warning">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bookmark"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
        <span>新的 JS 和 CSS 特性已经出来很长时间了，你却一直不知道，更别说用上</span>
      </div>
      <p>我们的内容包含很多你不知道的 CSS 和 JS 特性，能够让你在平时工作中需要的地方更加灵活地使用，提升自己的 Level</p>
      

      <div  class="alert alert-warning">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bookmark"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
        <span>三大框架？Service Worker？PWA？WebAssembly？新的技术可以不去学，但是一定要了解</span>
      </div>
      <p>我们的内容包含各种最新技术的介绍和快速了解，让你在打好基础的同时了解最新的前端技术潮流，保证不会被落下</p>

      <div  class="alert alert-warning">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bookmark"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
        <span>平时不注意，每当面试的时候才想起来去翻面试题</span>
      </div>
      <p>临阵磨枪往往会导致面试现场翻车，只有在平时的实践中结合理论知识的强化才会更加深刻地理解和记住，而我们会把前端的核心概念以及常见的面试题拆解给你</p>

    </div>

    <div class="body-box box-2">
      <h3>适合人群</h3>
      <div class="icon-out">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user-check"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><polyline points="17 11 19 13 23 9"></polyline></svg>
      </div>
      <p>由于每个人的技术水平不一样，而我们的内容同样也是有适合的人群</p>
      <p>建议不属于下面类型的同学不要订阅</p>
      <div class="mem-item">前端初学者</div>
      <div class="mem-item">偏于动手而理论基础差的同学</div>
      <div class="mem-item">不喜欢或没时间看书和长篇文章的同学</div>
      <div class="mem-item">不关注新技术的同学</div>
    </div>

    <div class="body-box box-3">
      <h3>包含内容</h3>
      <p>我们会以前端基础深入作为核心订阅内容，另外包含一些其它类型的知识点。下面是我们订阅内容的种类和占比</p>
      <div id="conpie"></div>
    </div>
    
   

    <div class="body-box box-4">
      <h3>常见问题</h3>

      <p class="question">1、订阅是免费的还是收费的？</p>
      <p>为了保证质量和持续性，我们采取付费模式，每天只需花 1 毛钱。支持按月、按季度和按年付费</p>

      <p class="question">2、支持退款吗？</p>
      <p>不支持。如果在试用期结束后仍然不确定要不要订阅，可以按月订阅</p>

      <p class="question">3、可以试用吗？</p>
      <p>可以。为了保证内容对用户确实是有价值，在初次使用时我们免费为你开通 5 天的使用时间，5 天之后再决定是否付费订阅</p>
    
      <p class="question">4、我能看到所有的往期吗？</p>
      <p>不能。只能看到最近一个月的内容</p>

      <p class="question">5、如何一直能看到自己喜欢的？</p>
      <p>只要收藏了某个内容，那么不管你当前是不是付费开通阶段，都可以看到自己收藏的所有往期内容</p>
     
    </div>

     <div class="body-box box-5">
      <img src="../assets/img/weixin-applet.jpg" />
    </div>
    
  </div>
</template>

<script>
  // 引入 ECharts 主模块
  var echarts = require('echarts/lib/echarts')
  // 引入柱状图
  require('echarts/lib/chart/pie')
  // 引入提示框和标题组件
  require('echarts/lib/component/tooltip')
  require('echarts/lib/component/title')
  export default {
    layout: 'blank',
    methods: {
      drawPie: function () {
        var myChart = echarts.init(document.getElementById('conpie'))
        myChart.setOption({
          backgroundColor: '#FFF',
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} ：{d}%'
          },
          visualMap: {
            show: false,
            min: 80,
            max: 600,
            inRange: {
              colorLightness: [0, 1]
            }
          },
          series: [
            {
              name: '内容',
              type: 'pie',
              radius: '55%',
              center: ['50%', '50%'],
              data: [
                {value: 100, name: 'JS、CSS、HTML 基础知识和深入'},
                {value: 20, name: '前端面试题'},
                {value: 45, name: 'JS 避坑指南'},
                {value: 60, name: 'JS 和 CSS 奇技淫巧'},
                {value: 30, name: '前端最新技术情报'},
                {value: 40, name: 'Nodejs 知识点'},
                {value: 20, name: '优秀库和工具推荐'}
              ],
              roseType: 'angle',
              label: {
                normal: {
                  textStyle: {
                    color: '#5b5b5b'
                  }
                }
              },
              labelLine: {
                normal: {
                  lineStyle: {
                    color: '#5b5b5b'
                  },
                  smooth: 0.2,
                  length: 10,
                  length2: 20
                }
              },

              animationType: 'scale',
              animationEasing: 'elasticOut',
              animationDelay: function (idx) {
                return Math.random() * 200
              }
            }
          ]
        })
      }
    },
    mounted () {
      this.drawPie()
    }
  }
</script>

<style lang="scss">
.page-dayfront  {
  .body {
    padding: 0;
  }

  .dayfront-container {
    font-size: 1.1rem
  }

  .top-box {
    background-color: #EEE;
    padding: 130px 0;
    text-align: center;
    background-color: #1392d6;
    color: #FFF;
    text-shadow: 0px 0px 5px #2a69a5;
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
    padding: 100px 50px;
    &.box-1 {
      color: #768282;
      h3 {
        margin-bottom: 20px;
      }
      div {
        display: inline-flex;
        align-items: center;
        svg {
          width: 18px;
          height: 18px;
        }
      }
    }
    &.box-2 {
      background-color: #f6f9f9;
      text-align: center;
      color: #718484;
      h3 {
        margin-bottom: 20px;
      }
      p {
        color: #b6bdbd;
      }
      div.mem-item {
        display: inline-block;
        border-radius: 5px;
        padding: 10px 20px;
        margin: 50px 20px;
        border: #d3e0e0 1px solid;
        color: #7a9f9f
      }

      .icon-out {
        svg {
          width: 50px;
          height: 50px;
          stroke: #2196F3;
          margin-bottom: 30px;
          margin-top: 10px;
        }
      }
    }
    &.box-3 {
      text-align: center;
      color: #a3a3a3;
      p {
        margin: 20px 0;
        margin-bottom: 50px;
      }
    }
    &.box-4 {
      background-color: #f6f9f9;
      .question {
        margin-top: 30px;
        font-weight: bold
      }
    }
    &.box-5 {
      text-align: center;
      img {
        width: 200px;
      }
    }
    h5 {
      margin-top: 30px;
    }
  }

  #conpie {
    width: 100%;
    height: 500px;
  }
}
</style>
