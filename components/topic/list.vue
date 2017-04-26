<template lang="pug">
  div
    div.topic-list(v-for="topic in topics")
      div.topic-item
        div.extras
          nuxt-link(to="")
            img.mem-tx(:src="cdn(topic.mem.avatar, 'mem')")
            span {{topic.mem.nc}}
          span 发布于 {{timeago(topic.created_at)}}
        nuxt-link(:to="'topic/' + topic.id")
          div.cover(v-bind:style="'background-image:url(' + cdn(topic.cover, 'topic') + ')'")
          h2 {{topic.title}}
        div.extras
          span 
            icon(name="eye-o" width="18px") {{topic.visit}} 次阅读
          span 
            icon(name="heart-o"  width="18px") {{topic.favor}} 人喜欢
          span 
            icon(name="comment"  width="18px") {{topic.comment > 0 ? topic.comment + ' 条评论' : '暂无评论'}}
</template>


<script>
  export default {
    props: ['topics']
  }
</script>


<style lang="scss" scoped>
 .topic-list {
    background-color: #FFF;

    a {
      text-decoration: none
    }
  }

  .topic-item {
    padding: 50px 8%;
    border-bottom: #EEE 1px dashed;
    .cover {
        height: 200px;
        margin: 20px 0;
        position: relative;
        background-repeat: no-repeat;
        background-size: cover;
        overflow: hidden;
        background-position: center center;
        position: relative;
        color: #FFF;
    }

    h2 {
      padding: 10px 0;
    }

    .mem-tx {
      border-radius: 100%;
      width: 25px;
      height: 25px;
      margin-right: 5px;
    }

    .extras {
      color: #9a9a9a;
      padding-top: 10px;
      & > span {
        margin: 0 8px;
        display: inline-block;
        position: relative
      }
    }
  }

</style>
