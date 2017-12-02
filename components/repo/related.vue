<template lang="pug">
  div.repo-list
    div.row
      div.col-6.col-md-3(v-for="repo in repos")
         nuxt-link(:to="'/repo/' + repo.owner + '/' + repo.alia" class="repo-item" v-bind:style="'background-image:url(' + cdn(repo.cover, 'repo', 'subject_repo') + ')'")
          div.detail
            h4.name {{repo.name}}
            div.desc {{repo.description_cn || repo.description}}
</template>


<script>
  import axios from '~/plugins/axios'
  export default {
    props: ['repo'],
    data () {
      return {
        repos: []
      }
    },
    async created () {
      let res = await axios().get(`repo/${this.repo.owner}/${this.repo.alia}/related`)
      this.repos = res.data
    }
  }
</script>


<style lang="scss" scoped>
  .repo-item {
    display: block;
    height: 150px;
    background-repeat: no-repeat;
    background-size: cover;
    overflow: hidden;
    background-position: center center;
    position: relative;
    color: #FFF;
    box-shadow: 0px 0px 10px #9b9b9b;
    border-radius: 2px;

    &:after {
      display: block;
      content: '';
      height: 100%;
      background-color: rgba(0, 0, 0, 0.54);
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      z-index: 1;
    }

     &:hover {
        &:after {
          background-color: rgba(0, 0, 0, 0.7);
        }
      }

    .detail {
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      z-index: 10;
      padding: 20px;
      padding-top: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      text-align: center;
      .name {
        border-bottom: #fff 1px solid;
        word-break: keep-all;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        width: 100%;
        padding-bottom: 5px;
        margin-bottom: 10px;
      }

      .desc {
        height: 35px;
        overflow: hidden;
        font-size: 12px;
        color: rgba(255, 255, 255, 0.8)
      }
    }
  }
</style>
