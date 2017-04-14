<template lang="pug">
  div.dianp
    ul.list-group.list-group-flush
      li.list-group-item
        span 【点评一句】说说你的用后短评？
        a.write(href="#")
          icon(name="edit")
          span 我来写
      li.list-group-item    
        p.alert.alert-warning 注意：为了保证质量，目前我们只针对 GitHub 粉丝数大于 50 的开发者开放点评功能！
        editor(:flag="repo-dianp")
          div.row.align-items-center
            div.col
              span 发布点评
            div.col(style="text-align: right")
              button.sub-btn(@click="submit") 发布 

      li.list-group-item(v-for="i in [1,2,3,4]")
        article 不管是不是表头,模板+数据=导出, 动态数据可以是任意的javascript, 模板可以是任意格式的Excel, 里面可以有任意的公式,宏等等
        ul.extra
          li
            a.up(href="javascript:void(0)")
              icon(name="arrow-up")
              span 3
          li
            a(href="")
              img.mem-tx(src="https://awesomes.oss-cn-beijing.aliyuncs.com/mem/170107150059-97-1.jpg")
              strong bimo @Awesoms
          li
            span 3天前
          
          li
            icon(name="comment")
            span 3 评论
</template>


<script>
  export default {
  }
</script>


<style lang="scss" scoped>
  .dianp {
    border: #EEE 1px solid;

    .list-group-item {
      padding: 20px;
      padding-bottom: 10px;
      display: block;
      div {
        width: 100%;
      }

      article {
        font-size: 1.1rem
      }
    }

    .write {
      float: right;
      svg {
        width: 18px;
      }
    }

    .extra {
      margin: 0;
      padding: 0;
      margin-top: 10px;
      color: #BBB;
      display: block;
      color: #8590a6;
      
      li {
        display: inline-block;
        list-style: none;
        margin-right: 10px;
        float: left;
        padding: 10p x; 

        svg {
          float: left;
          margin-right: 3px;
          width: 18px;
          height: 18px;
        }

        .up {
          background-color: hsla(0,0%,95%,.8);
          color: #909090;
          padding: .2rem .2rem;
          padding-right: .5rem;
          border-radius: 2px;
          overflow: hidden;
          display: inline-block;

          &.has-true {
            background-color: rgba(240, 173, 78, 0.24);
            color: #ff9b00;
          }
        }
      }
      .mem-tx {
        width: 20px;
        height: 20px;
        border-radius: 100%;
        margin-right: 5px;
      }
    }

    .sub-btn {
      border: none;
      color: #FFF;
      background-color: #da552f;
      padding: 6px 15px;
      cursor: pointer;
    }
  }

</style>
