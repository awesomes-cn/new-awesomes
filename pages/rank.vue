<template lang="pug">
  div
    div.banner#rank-banner
      div.inner
        h1 前端 TOP 100
        div.filter
          nuxt-link(to="?sort=hot" v-bind:class="sort == 'hot' ? 'active' : ''")
            icon(name="hot") 热门
          nuxt-link(to="?sort=trend"  v-bind:class="sort == 'trend' ? 'active' : ''")
            icon(name="trend") 趋势
    div.container       
      div.list-group.list-main
        div.list-item(v-for="(repo, index) in repos")
          h3.scord {{index + 1}}
          nuxt-link(:to="'/repo/' + repo.owner + '/' + repo.alia")
            img.cover(:src="cdn(repo.cover, 'repo', 'subject_repo')") 
          div.middle
            nuxt-link(:to="'/repo/' + repo.owner + '/' + repo.alia")
              h4 {{repo.name}}
            span.sdesc {{repo.description_cn}}
          fresh(:time="repo.pushed_at")

</template>
<script>
  import axios from '~plugins/axios'
  import Fresh from '~components/repo/fresh.vue'
  export default {
    layout: 'blank',
    asyncData ({query}) {
      return axios().get(`repo/top100?sort=${query.sort}`).then(res => {
        return {
          repos: res.data,
          sort: query.sort === 'trend' ? query.sort : 'hot'
        }
      })
    },
    components: {
      Fresh
    },
    mounted () {
      require('particles.js')
      window.particlesJS('rank-banner', {
        'particles': {
          'number': {
            'value': 40,
            'density': {
              'enable': true,
              'value_area': 800
            }
          },
          'color': {
            'value': '#ffffff'
          },
          'shape': {
            'type': 'circle',
            'stroke': {
              'width': 0,
              'color': '#000000'
            },
            'polygon': {
              'nb_sides': 5
            },
            'image': {
              'src': 'img/github.svg',
              'width': 100,
              'height': 100
            }
          },
          'opacity': {
            'value': 0.3,
            'random': false,
            'anim': {
              'enable': false,
              'speed': 1,
              'opacity_min': 0.1,
              'sync': false
            }
          },
          'size': {
            'value': 20,
            'random': true,
            'anim': {
              'enable': false,
              'speed': 30,
              'size_min': 0.1,
              'sync': false
            }
          },
          'line_linked': {
            'enable': true,
            'distance': 150,
            'color': '#ffffff',
            'opacity': 0.4,
            'width': 1
          },
          'move': {
            'enable': true,
            'speed': 4,
            'direction': 'none',
            'random': true,
            'straight': false,
            'out_mode': 'out',
            'bounce': false,
            'attract': {
              'enable': false,
              'rotateX': 600,
              'rotateY': 1200
            }
          }
        },
        'interactivity': {
          'detect_on': 'canvas',
          'events': {
            'onhover': {
              'enable': false,
              'mode': 'grab'
            },
            'onclick': {
              'enable': false,
              'mode': 'push'
            },
            'resize': true
          },
          'modes': {
            'grab': {
              'distance': 140,
              'line_linked': {
                'opacity': 1
              }
            }
          }
        },
        'retina_detect': true
      })
    }
  }
</script>

<style lang="scss">
  .page-rank {
    background-color: #f7f8fa;

    .body {
      padding: 0;
    }

    .banner {
      text-align: center;
      height: 400px;
      background-color: #0099C3;
      color: #FFF;
      overflow: hidden;
      position: relative;

      .inner {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        padding: 220px 0;
        padding-top: 50px;

        h1 {
          font-size: 3rem
        }

        .filter {
          a {
            display: inline-block;
            background-color: none;
            border: #FFF 1px solid;
            margin: 0 10px;
            padding: 5px 15px;
            text-decoration: none;
            color: #FFF;

            &.active {
              background-color: #FFF;
              color: #0099C3;
            }
          }
        }
      }
    }

    .container  {
      max-width: 800px;
    }

    .list-main {
      margin-top: -200px;
    }

    .list-item {
      padding: 20px;
      padding-left: 0;
      border-bottom: #DDD 1px dashed;
      position: relative;
      display: flex;
      align-items: center;
      background-color: #FFF;
      color: #4e4f54;
      
      &:first-child {
        display: block;
        height: 200px;
        border: 0;
        padding: 0;
        text-align: center;
        padding: 0 10px;
        overflow: hidden;
        background-color: rgba(8, 105, 132, 0.52);
        color: #60bed8;
        padding-top: 5px;
        border: 0;

        .scord, .fresh {
          display: none;
        }

        .cover {
          margin: 20px 0;
          border-radius: 100%;
          width: 80px;
        }

        a {
          color: #60bed8;
        }
      }

      .scord {
        flex-basis: 80px;
        text-align: center;
        flex-shrink: 0
      }

      .cover {
        width: 60px;
      }

      .middle {
        padding: 0 10px;
        flex-grow: 1;
        flex-shrink: 1;
        word-break: keep-all;   
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        .sdesc {
          line-height: 30px;
        }
      }
    }
  }
</style>
