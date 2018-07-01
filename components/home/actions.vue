<template lang="pug">
  div.actions-box
    div.action-item(v-for="item in actions")
      nuxt-link(:to="'mem/' + item.mem.id")
        img.avatar(:src="cdn(item.mem.avatar, 'mem', 'repo-50')")
      span.time
        icon(name="clock-o" width="17px") {{timeago(item.created_at)}}
      span.actyp {{item.opertyp === 'MARK' ? '收藏了' : '标识在用'}}
      nuxt-link(:to="'/repo/' + item.repo.owner + '/' + item.repo.alia" :title="item.repo.alia" )
        img.cover(:src="cdn(item.repo.cover, 'repo', 'repo-50')")
</template>

<script>
  import axios from '~/plugins/axios'
  export default {
    data () {
      return {
        actions: []
      }
    },
    async created () {
      let res = await axios().get('/repo/actions')
      this.actions = res.data
    }
  }
</script>

<style lang="scss" scoped>
  .action-item {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    .avatar {
      width: 25px;
      height: 25px;
      border-radius: 100%;
      margin-right: 3px;
    }

    .mnc {
      font-weight: bold;
      color: #DDD;
    }

    .time {
      color: #849c9f;
      margin: 0 5px;
      display: inline-block;
      background-color: #f1fbff;
      padding: 1px 5px;
    }

    .actyp {
      margin: 0 5px;
    }

    .cover {
      width: 20px;
      height: 20px;
    }
  }
</style>
