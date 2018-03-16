import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _218aa03c = () => import('../pages/fercard.vue' /* webpackChunkName: "pages/fercard" */).then(m => m.default || m)
const _4ec06852 = () => import('../pages/weuse.vue' /* webpackChunkName: "pages/weuse" */).then(m => m.default || m)
const _6095586e = () => import('../pages/test.vue' /* webpackChunkName: "pages/test" */).then(m => m.default || m)
const _3c4e8bfe = () => import('../pages/site.vue' /* webpackChunkName: "pages/site" */).then(m => m.default || m)
const _47834d1b = () => import('../pages/site/link.vue' /* webpackChunkName: "pages/site/link" */).then(m => m.default || m)
const _d2e192e2 = () => import('../pages/site/contact.vue' /* webpackChunkName: "pages/site/contact" */).then(m => m.default || m)
const _87047d88 = () => import('../pages/site/about.vue' /* webpackChunkName: "pages/site/about" */).then(m => m.default || m)
const _0778b520 = () => import('../pages/site/capa.vue' /* webpackChunkName: "pages/site/capa" */).then(m => m.default || m)
const _adcac5fa = () => import('../pages/site/history.vue' /* webpackChunkName: "pages/site/history" */).then(m => m.default || m)
const _306255fe = () => import('../pages/subjects.vue' /* webpackChunkName: "pages/subjects" */).then(m => m.default || m)
const _64006e36 = () => import('../pages/joinuse.vue' /* webpackChunkName: "pages/joinuse" */).then(m => m.default || m)
const _15341403 = () => import('../pages/releases.vue' /* webpackChunkName: "pages/releases" */).then(m => m.default || m)
const _225bd32a = () => import('../pages/score.vue' /* webpackChunkName: "pages/score" */).then(m => m.default || m)
const _49a1c06e = () => import('../pages/mem.vue' /* webpackChunkName: "pages/mem" */).then(m => m.default || m)
const _20df36dc = () => import('../pages/mem/_id/index.vue' /* webpackChunkName: "pages/mem/_id/index" */).then(m => m.default || m)
const _5f64ffb3 = () => import('../pages/mem/_id/profile.vue' /* webpackChunkName: "pages/mem/_id/profile" */).then(m => m.default || m)
const _91701d52 = () => import('../pages/mem/_id/pubs/comments.vue' /* webpackChunkName: "pages/mem/_id/pubs/comments" */).then(m => m.default || m)
const _32df6cc2 = () => import('../pages/mem/_id/marks/repos.vue' /* webpackChunkName: "pages/mem/_id/marks/repos" */).then(m => m.default || m)
const _360880c1 = () => import('../pages/notifications.vue' /* webpackChunkName: "pages/notifications" */).then(m => m.default || m)
const _696e71df = () => import('../pages/auth.vue' /* webpackChunkName: "pages/auth" */).then(m => m.default || m)
const _05a04d18 = () => import('../pages/extension.vue' /* webpackChunkName: "pages/extension" */).then(m => m.default || m)
const _3001fcfb = () => import('../pages/webker.vue' /* webpackChunkName: "pages/webker" */).then(m => m.default || m)
const _5efa639b = () => import('../pages/topics.vue' /* webpackChunkName: "pages/topics" */).then(m => m.default || m)
const _713a34a8 = () => import('../pages/admin.vue' /* webpackChunkName: "pages/admin" */).then(m => m.default || m)
const _70cd60d9 = () => import('../pages/admin/site/webkerapply.vue' /* webpackChunkName: "pages/admin/site/webkerapply" */).then(m => m.default || m)
const _7fa0927d = () => import('../pages/admin/pub/comments.vue' /* webpackChunkName: "pages/admin/pub/comments" */).then(m => m.default || m)
const _c9af1522 = () => import('../pages/admin/mem/mems.vue' /* webpackChunkName: "pages/admin/mem/mems" */).then(m => m.default || m)
const _13951b3c = () => import('../pages/admin/pub/submits.vue' /* webpackChunkName: "pages/admin/pub/submits" */).then(m => m.default || m)
const _2352fe63 = () => import('../pages/rank.vue' /* webpackChunkName: "pages/rank" */).then(m => m.default || m)
const _65500e1f = () => import('../pages/search.vue' /* webpackChunkName: "pages/search" */).then(m => m.default || m)
const _38cead19 = () => import('../pages/topic/new.vue' /* webpackChunkName: "pages/topic/new" */).then(m => m.default || m)
const _3c3c08c1 = () => import('../pages/develop/icons.vue' /* webpackChunkName: "pages/develop/icons" */).then(m => m.default || m)
const _5ec4a0ba = () => import('../pages/repo/new.vue' /* webpackChunkName: "pages/repo/new" */).then(m => m.default || m)
const _2518d833 = () => import('../pages/topic/_id.vue' /* webpackChunkName: "pages/topic/_id" */).then(m => m.default || m)
const _abd0bdc0 = () => import('../pages/subject/_name.vue' /* webpackChunkName: "pages/subject/_name" */).then(m => m.default || m)
const _959cc230 = () => import('../pages/repo/_owner/_name/index.vue' /* webpackChunkName: "pages/repo/_owner/_name/index" */).then(m => m.default || m)
const _4b69fa49 = () => import('../pages/repos/_rootyp/_typcd.vue' /* webpackChunkName: "pages/repos/_rootyp/_typcd" */).then(m => m.default || m)
const _8d31f138 = () => import('../pages/repo/_owner/_name/edit.vue' /* webpackChunkName: "pages/repo/_owner/_name/edit" */).then(m => m.default || m)
const _3fcae0ab = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)



if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected
  if (to.matched.length < 2) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/fercard",
			component: _218aa03c,
			name: "fercard"
		},
		{
			path: "/weuse",
			component: _4ec06852,
			name: "weuse"
		},
		{
			path: "/test",
			component: _6095586e,
			name: "test"
		},
		{
			path: "/site",
			component: _3c4e8bfe,
			name: "site",
			children: [
				{
					path: "link",
					component: _47834d1b,
					name: "site-link"
				},
				{
					path: "contact",
					component: _d2e192e2,
					name: "site-contact"
				},
				{
					path: "about",
					component: _87047d88,
					name: "site-about"
				},
				{
					path: "capa",
					component: _0778b520,
					name: "site-capa"
				},
				{
					path: "history",
					component: _adcac5fa,
					name: "site-history"
				}
			]
		},
		{
			path: "/subjects",
			component: _306255fe,
			name: "subjects"
		},
		{
			path: "/joinuse",
			component: _64006e36,
			name: "joinuse"
		},
		{
			path: "/releases",
			component: _15341403,
			name: "releases"
		},
		{
			path: "/score",
			component: _225bd32a,
			name: "score"
		},
		{
			path: "/mem",
			component: _49a1c06e,
			name: "mem",
			children: [
				{
					path: ":id",
					component: _20df36dc,
					name: "mem-id"
				},
				{
					path: ":id/profile",
					component: _5f64ffb3,
					name: "mem-id-profile"
				},
				{
					path: ":id/pubs/comments",
					component: _91701d52,
					name: "mem-id-pubs-comments"
				},
				{
					path: ":id/marks/repos",
					component: _32df6cc2,
					name: "mem-id-marks-repos"
				}
			]
		},
		{
			path: "/notifications",
			component: _360880c1,
			name: "notifications"
		},
		{
			path: "/auth",
			component: _696e71df,
			name: "auth"
		},
		{
			path: "/extension",
			component: _05a04d18,
			name: "extension"
		},
		{
			path: "/webker",
			component: _3001fcfb,
			name: "webker"
		},
		{
			path: "/topics",
			component: _5efa639b,
			name: "topics"
		},
		{
			path: "/admin",
			component: _713a34a8,
			name: "admin",
			children: [
				{
					path: "site/webkerapply",
					component: _70cd60d9,
					name: "admin-site-webkerapply"
				},
				{
					path: "pub/comments",
					component: _7fa0927d,
					name: "admin-pub-comments"
				},
				{
					path: "mem/mems",
					component: _c9af1522,
					name: "admin-mem-mems"
				},
				{
					path: "pub/submits",
					component: _13951b3c,
					name: "admin-pub-submits"
				}
			]
		},
		{
			path: "/rank",
			component: _2352fe63,
			name: "rank"
		},
		{
			path: "/search",
			component: _65500e1f,
			name: "search"
		},
		{
			path: "/topic/new",
			component: _38cead19,
			name: "topic-new"
		},
		{
			path: "/develop/icons",
			component: _3c3c08c1,
			name: "develop-icons"
		},
		{
			path: "/repo/new",
			component: _5ec4a0ba,
			name: "repo-new"
		},
		{
			path: "/topic/:id?",
			component: _2518d833,
			name: "topic-id"
		},
		{
			path: "/subject/:name?",
			component: _abd0bdc0,
			name: "subject-name"
		},
		{
			path: "/repo/:owner?/:name?",
			component: _959cc230,
			name: "repo-owner-name"
		},
		{
			path: "/repos/:rootyp?/:typcd?",
			component: _4b69fa49,
			name: "repos-rootyp-typcd"
		},
		{
			path: "/repo/:owner?/:name?/edit",
			component: _8d31f138,
			name: "repo-owner-name-edit"
		},
		{
			path: "/",
			component: _3fcae0ab,
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}
