<template lang="pug">
  div.profile-box
    div.form-group
      label 头像
      div.upload-avatar
        img(:src="cdn(mem.avatar, 'mem', 'subject_repo')")
        upload(v-model="mem.avatar" folder="mem" txt="更新头像" v-if="showUpload")

    div.form-group
      label 性别
      div
        label.custom-control.custom-radio
          input(name="gender" v-model="mem.mem_info.gender" type="radio" class="custom-control-input" value="M")
          span.custom-control-indicator
          span.custom-control-description 男
        label.custom-control.custom-radio
          input(name="gender" v-model="mem.mem_info.gender" type="radio" class="custom-control-input" value="F")
          span.custom-control-indicator
          span.custom-control-description 女
    div.form-group
      label 城市
      input.form-control(type="text"  v-model="mem.mem_info.location" width="200px" placeholder="你并不孤单")
    
    div.form-group
      label 个人主页
      input.form-control(type="text"  v-model="mem.mem_info.blog")
    
    div.form-group
      label GitHub
      div.input-group
        span.input-group-addon https://github.com/
        input.form-control(type="text"  v-model="mem.mem_info.github")
        a.input-group-addon(:href="'https://github.com/' + mem.mem_info.github" target="_blank")
          icon(name="link" width="12px")
    
    div.form-group
      label Twitter
      div.input-group
        span.input-group-addon https://twitter.com/
        input.form-control(type="text"  v-model="mem.mem_info.twitter")
        a.input-group-addon(:href="'https://twitter.com/' + mem.mem_info.twitter" target="_blank")
          icon(name="link" width="12px")
    
    div.form-group
      label 微博
      div.input-group
        span.input-group-addon https://weibo.com
        input.form-control(type="text"  v-model="mem.mem_info.weibo_url")
        a.input-group-addon(:href="'https://weibo.com/' + mem.mem_info.weibo_url" target="_blank")
          icon(name="link" width="12px")
    div.form-group
      label
      button.btn.btn-primary(type="button" @click="submit") 提 交
</template>

<script>
  import axios from '~/plugins/axios'
  export default {
    data () {
      return {
        showUpload: false
      }
    },
    async asyncData ({ req, params, query }) {
      let res = await axios().get(`mem/${params.id}`)
      return {
        mem: res.data
      }
    },
    computed: {
      session () {
        return this.$store.state.session || {}
      }
    },
    components: {
      upload: () => import('~/components/upload.vue')
    },
    methods: {
      submit: async function () {
        let res = await axios().put('mem', {mem: this.mem})
        if (res.data.status) {
          this.$alert('success', '更新个人资料成功')
        } else {
          this.$alert('danger', '更新个人资料失败')
        }
      }
    },

    mounted () {
      this.showUpload = true
    }
  }
</script>


<style lang="scss" scoped>
.profile-box {
  padding: 20px 50px;
  font-size: 1.1rem;
  & > .form-group {
    display: flex;
    margin-bottom: 30px;
    align-items: center;

    & > label {
      display: block;
      width: 120px;
      margin: 0;
      flex-shrink: 0
    }
  }

  .upload-avatar {
    width: 150px;
    display: flex;
    align-items: flex-end;
    img {
      margin-right: 20px;
      max-height: 200px
    }
  }
}
</style>
