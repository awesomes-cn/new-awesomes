<template lang="pug">
  div.comment-wraper
    div.editor-go
      editor(:flag="flag")
    div.citem(v-for="item in [1,2,3,4,5,6,7]")
      nuxt-link(to="")
        img.mem-tx(src="https://awesomes.oss-cn-beijing.aliyuncs.com/mem/170107150059-97-1.jpg")
        strong 笔墨伺候
        span.time 3月前
      article 掘金有数据开放接口吗？
      div.opers
        a.up(href="javascript:void(0)")
          icon(name="arrow-up")
          span 0

        a(href="javascript:void(0)")
          icon(name="reply")
          span 回复

</template>
<script>
  export default {
    props: ['flag']
  }
</script>

<style lang="scss" scoped>
  .citem {
    position: relative;
    padding-left: 35px;
    margin-bottom: 30px;

    .time {
      color: #ababab;
      margin-left: 10px;
    }

    .opers {
      a {
        color: #DDD;
        display: inline-block;
        margin-right: 10px;

        &.up {
          background-color: hsla(0,0%,95%,.8);
          color: #909090;
          padding: .2rem .2rem;
          padding-right: .5rem;
          border-radius: 2px;
        }
      }
      svg {
        width: 15px;
        height: 15px;
        float: left;
        margin-right: 3px;
      }
    }
  }

  .editor-go {
    margin-bottom: 40px;
  }

  article {
    margin: 10px 0;
  }
  .mem-tx {
    width: 25px;
    height: 25px;
    border-radius: 100%;
    display: block;
    position: absolute;
    left: 0;
    top: 5px;
  }

  
</style>
