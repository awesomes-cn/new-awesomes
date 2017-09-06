<template lang="pug">
  div(:id="'pagid-' + flag")
</template>


<script>
  import $ from '~/assets/js/jquery-vendor'
  require('simple-pagination.js')
  export default {
    props: ['flag', 'size', 'total', 'callback'],
    data () {
      return {
      }
    },
    watch: {
      '$route': 'initPage',
      'total': 'initPage'
    },
    methods: {
      initPage: function () {
        let $wraper = $(`#pagid-${this.flag}`)
        $wraper.empty()
        let self = this
        let pages = Math.ceil(this.total / this.size)
        if (pages < 1) { pages = 1 }
        $wraper.pagination({
          items: self.size,
          pages: pages,
          cssStyle: '',
          prevText: '<span aria-hidden="true">&laquo;</span>',
          nextText: '<span aria-hidden="true">&raquo;</span>',
          hrefTextPrefix: '',
          currentPage: self.$route.query.page || 1,
          onPageClick: (pageNumber, event) => {
            if (this.callback) {
              this.callback(pageNumber)
            } else {
              let _query = {}
              for (let key in self.$route.query) {
                _query[key] = self.$route.query[key]
              }
              _query.page = pageNumber
              self.$router.push({path: self.$route.path, query: _query})
            }
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
