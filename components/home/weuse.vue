<template lang="pug">
  div.weuse-box(v-if="mem")
    div.mem-box
      nuxt-link(:to="'mem/' + mem.id" style="text-align: center")
        img.tx(:src="cdn(mem.avatar, 'mem', 'repo-50')")
        div.ncdiv
          strong {{mem.nc}}
      div.utxt
        span 在用 
        strong {{mem.using}} 
        span 个库
    div.right-con
      // div.memname
      //   nuxt-link(:to="'mem/' + mem.id")
      //     strong {{mem.nc}}
      //   small.num 在用 {{mem.using}} 个前端库
      div.repos
        div.repo-item(v-for="oper in mem.opers")
          nuxt-link(:to="'/repo/' + oper.repo.owner + '/' + oper.repo.alia" :title="oper.repo.alia" )
            img.cover(:src="cdn(oper.repo.cover, 'repo', 'repo-50')")
            // span.usingmems {{oper.repo.using}}
      // div 在用 {{mem.using}} 个前端库
</template>

<script>
  export default {
    props: ['datalist'],
    computed: {
      mem: function () {
        if (this.datalist) {
          let _mem = this.datalist[parseInt(Math.random() * 4)]
          let _opers = []
          for (let i = 0; i < 5; i++) {
            let _index = parseInt(Math.random() * _mem.opers.length)
            _opers.push(_mem.opers.splice(_index, 1)[0])
          }
          _mem.opers = _opers
          return _mem
        }
        return null
      }
    }
  }
</script>

<style lang="scss" scoped>
  .weuse-box {
    .mem-box {
      display: flex;
      align-items: center;
      justify-content: center;
      padding-bottom: 30px;
      flex-direction: column;
    }

    .ncdiv {
      padding-top: 10px;
    }

    .tx {
      border-radius: 100%
    }

    .utxt {
      background-color: #ffe9cc;
      padding: 5px 10px;
      margin-top: 20px;
      color: #ba6c00;
    }

    .right-con {
      flex-grow: 1;
      padding-left: 10px;

      .memname {
        margin-bottom: 5px;
        font-size: 1.1rem;
        .num {
          margin-left: 10px;
          color: #343a40
        }
      }
      .repos {
        display: flex;
        justify-content: space-between;

        .repo-item {
          position: relative;
          opacity: .9;
          &:hover {
            opacity: 1
          }
        }
      }
      .cover {
        width: 40px;
        height: 40px;
        padding: 6px;
        border-radius: 100%;
        box-shadow: 0px 0px 5px #f1f1f1;
        border: #e7e5e5 1px solid;
        transition: all, .2s;
        &:hover {
          padding: 0;
          border: none;
        }
      }

      .usingmems {
        font-size: 12px;
        color: #ffffff;
        font-size: 12px;
        display: inline-block;
        background-color: #3e9ef1;
        padding: 2px 7px;
        border-radius: 100px;
        position: absolute;
        top: -10px;
        right: -10px;
        border: #FFF 2px solid;
      }
    }
  }
</style>
