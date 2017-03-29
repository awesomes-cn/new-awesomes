<template lang="pug">
  div(:id="flag")
</template>


<script>
  import $ from '~assets/js/jquery-vendor'
  require('simple-pagination')
  export default {
    props: ['flag', 'size', 'total'],
    data () {
      return {
      }
    },
    watch: {
      '$route': 'initPage'
    },
    methods: {
      initPage: function () {
        let self = this
        let pages = Math.ceil(this.total / this.size)
        $(`#${this.flag}`).pagination({
          items: self.size,
          pages: pages,
          cssStyle: '',
          prevText: '<span aria-hidden="true">&laquo;</span>',
          nextText: '<span aria-hidden="true">&raquo;</span>',
          hrefTextPrefix: '',
          currentPage: self.$route.query.page || 1,
          onPageClick: (pageNumber, event) => {
            console.log(self.$route)
            self.$router.push({path: self.$route.path, query: {page: pageNumber}})
            return false
          }
        })
      }
    },
    mounted () {
      this.initPage()
    }
  }
</script>

<style lang="scss">
  .simple-pagination {
    text-align: center;
    li {
      list-style: none;
      display: inline-block;
      box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);

      &.active {
        span {
          color: #da552f
        }
      }

      & > a, & > span {
        position: relative;
        display: inline-block;
        padding: .5rem 1.2rem;
        margin-left: -1px;
        line-height: 2;
        color: #0275d8;
        background-color: #fff;
        border: 1px solid #ddd;
      }

      & > span {
        color: #CCC
      }

    }
    
  }
</style>
