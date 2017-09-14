<template lang="pug">
  div.score
    h4.text-center GitHub 前端库得分计算规则
    article 根据每个前端库的 GitHub 开放数据，我们可以分析出一个大致的得分，目前具体的指标如下（持续完善中，也让其更具有参考价值）：
    ul
      li 是否有 Readme 文件
      li 是否有 gitignore 文件
      li 是否有 license 文件
      li 是否有代码检查 （JS、CSS、HTML的各种 linter）
      li 是否有主页 homepage
      
      li star fork watch 总数
      li 项目参与用户数量
      li issue 数量和解决率
      li release 数量

      li 最后更新时间
      li star fork watch 新增数 trend

</template>

<style lang="scss">
  .page-score {
    background-color: #f7f8fa;
    .score {
      padding: 50px;
      background-color: #FFF;
      margin: 50px auto;
      width: 100%;
      max-width: 600px;
      font-size: 1.3rem;
      line-height: 30px;
      box-shadow: 0px 1px 5px #EEE;
      border: #f0eeee 1px solid; 

      article {
        font-size: 1.1rem;
        color: #a8a8a8;
        margin-bottom: 10px;
      }
      h4 {
        padding-bottom: 30px;
        margin-bottom: 30px;
        border-bottom: 1px solid #eee;
      }
    }

  }
</style>
