<template lang="pug">
  div
    div.releases(v-for="item in datalist")
      nuxt-link(:to="'/repo/' + item.repo.owner + '/' + item.repo.alia")
        img.cover(:src="cdn(item.repo.cover, 'repo', 'repo-50')")
      div.inner
        div {{item.repo.name}}
        a.version(:href="'https://github.com/' + item.repo.full_name + '/releases/tag/' + item.tag_name" target="_blank")
          icon(name="tag" width="15px") {{item.tag_name}}
      span {{timeago(item.published_at)}}
</template>

<script>
  export default {
    props: ['datalist']
  }
</script>

<style lang="scss" scoped>
  .releases {
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    .inner {
      flex-grow: 1;
      padding-left: 10px;
      h5 {
        padding: 0;
      }
    }
    .cover {
      width: 35px;
      height: 35px;
    }

    .version {
      display: inline-block;
      color: #0275d8;
      letter-spacing: 1px;
      // font-size: 1.1rem;
      font-weight: bolder;
      padding: 5px 0;
    }
  }
</style>
