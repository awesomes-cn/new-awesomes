import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _666ed117 = () => import('../pages/fercard.vue' /* webpackChunkName: "pages/fercard" */).then(m => m.default || m)
const _adbdd826 = () => import('../pages/weuse.vue' /* webpackChunkName: "pages/weuse" */).then(m => m.default || m)
const _bdd96e64 = () => import('../pages/test.vue' /* webpackChunkName: "pages/test" */).then(m => m.default || m)
const _0dac8103 = () => import('../pages/site.vue' /* webpackChunkName: "pages/site" */).then(m => m.default || m)
const _37c29994 = () => import('../pages/site/link.vue' /* webpackChunkName: "pages/site/link" */).then(m => m.default || m)
const _1e7e5694 = () => import('../pages/site/contact.vue' /* webpackChunkName: "pages/site/contact" */).then(m => m.default || m)
const _9961c2fe = () => import('../pages/site/about.vue' /* webpackChunkName: "pages/site/about" */).then(m => m.default || m)
const _ce41e8ea = () => import('../pages/site/capa.vue' /* webpackChunkName: "pages/site/capa" */).then(m => m.default || m)
const _3109bd08 = () => import('../pages/site/history.vue' /* webpackChunkName: "pages/site/history" */).then(m => m.default || m)
const _eff77efa = () => import('../pages/subjects.vue' /* webpackChunkName: "pages/subjects" */).then(m => m.default || m)
const _ae36c1de = () => import('../pages/joinuse.vue' /* webpackChunkName: "pages/joinuse" */).then(m => m.default || m)
const _6cd5fe88 = () => import('../pages/releases.vue' /* webpackChunkName: "pages/releases" */).then(m => m.default || m)
const _4932c206 = () => import('../pages/score.vue' /* webpackChunkName: "pages/score" */).then(m => m.default || m)
const _3fde96c9 = () => import('../pages/mem.vue' /* webpackChunkName: "pages/mem" */).then(m => m.default || m)
const _d257d112 = () => import('../pages/mem/_id/index.vue' /* webpackChunkName: "pages/mem/_id/index" */).then(m => m.default || m)
const _2ba4258e = () => import('../pages/mem/_id/profile.vue' /* webpackChunkName: "pages/mem/_id/profile" */).then(m => m.default || m)
const _c067f21c = () => import('../pages/mem/_id/pubs/comments.vue' /* webpackChunkName: "pages/mem/_id/pubs/comments" */).then(m => m.default || m)
const _45dba5c6 = () => import('../pages/mem/_id/marks/repos.vue' /* webpackChunkName: "pages/mem/_id/marks/repos" */).then(m => m.default || m)
const _a8053d48 = () => import('../pages/notifications.vue' /* webpackChunkName: "pages/notifications" */).then(m => m.default || m)
const _3acc66e4 = () => import('../pages/auth.vue' /* webpackChunkName: "pages/auth" */).then(m => m.default || m)
const _bb88999a = () => import('../pages/extension.vue' /* webpackChunkName: "pages/extension" */).then(m => m.default || m)
const _21b6c4c0 = () => import('../pages/webker.vue' /* webpackChunkName: "pages/webker" */).then(m => m.default || m)
const _50af2b60 = () => import('../pages/topics.vue' /* webpackChunkName: "pages/topics" */).then(m => m.default || m)
const _68ca3f7a = () => import('../pages/admin.vue' /* webpackChunkName: "pages/admin" */).then(m => m.default || m)
const _ce6802c4 = () => import('../pages/admin/site/webkerapply.vue' /* webpackChunkName: "pages/admin/site/webkerapply" */).then(m => m.default || m)
const _2f924a7c = () => import('../pages/admin/pub/comments.vue' /* webpackChunkName: "pages/admin/pub/comments" */).then(m => m.default || m)
const _3860af98 = () => import('../pages/admin/mem/mems.vue' /* webpackChunkName: "pages/admin/mem/mems" */).then(m => m.default || m)
const _a17ae506 = () => import('../pages/admin/pub/submits.vue' /* webpackChunkName: "pages/admin/pub/submits" */).then(m => m.default || m)
const _169e1930 = () => import('../pages/rank.vue' /* webpackChunkName: "pages/rank" */).then(m => m.default || m)
const _5704d5e4 = () => import('../pages/search.vue' /* webpackChunkName: "pages/search" */).then(m => m.default || m)
const _552bd998 = () => import('../pages/topic/new.vue' /* webpackChunkName: "pages/topic/new" */).then(m => m.default || m)
const _9b9e2d48 = () => import('../pages/develop/icons.vue' /* webpackChunkName: "pages/develop/icons" */).then(m => m.default || m)
const _9332e982 = () => import('../pages/repo/new.vue' /* webpackChunkName: "pages/repo/new" */).then(m => m.default || m)
const _7c978364 = () => import('../pages/topic/_id.vue' /* webpackChunkName: "pages/topic/_id" */).then(m => m.default || m)
const _200c81bb = () => import('../pages/subject/_name.vue' /* webpackChunkName: "pages/subject/_name" */).then(m => m.default || m)
const _e5f28c7a = () => import('../pages/repo/_owner/_name/index.vue' /* webpackChunkName: "pages/repo/_owner/_name/index" */).then(m => m.default || m)
const _30e17564 = () => import('../pages/repos/_rootyp/_typcd.vue' /* webpackChunkName: "pages/repos/_rootyp/_typcd" */).then(m => m.default || m)
const _3d34b5ae = () => import('../pages/repo/_owner/_name/edit.vue' /* webpackChunkName: "pages/repo/_owner/_name/edit" */).then(m => m.default || m)
const _cba8e774 = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)



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
			component: _666ed117,
			name: "fercard"
		},
		{
			path: "/weuse",
			component: _adbdd826,
			name: "weuse"
		},
		{
			path: "/test",
			component: _bdd96e64,
			name: "test"
		},
		{
			path: "/site",
			component: _0dac8103,
			name: "site",
			children: [
				{
					path: "link",
					component: _37c29994,
					name: "site-link"
				},
				{
					path: "contact",
					component: _1e7e5694,
					name: "site-contact"
				},
				{
					path: "about",
					component: _9961c2fe,
					name: "site-about"
				},
				{
					path: "capa",
					component: _ce41e8ea,
					name: "site-capa"
				},
				{
					path: "history",
					component: _3109bd08,
					name: "site-history"
				}
			]
		},
		{
			path: "/subjects",
			component: _eff77efa,
			name: "subjects"
		},
		{
			path: "/joinuse",
			component: _ae36c1de,
			name: "joinuse"
		},
		{
			path: "/releases",
			component: _6cd5fe88,
			name: "releases"
		},
		{
			path: "/score",
			component: _4932c206,
			name: "score"
		},
		{
			path: "/mem",
			component: _3fde96c9,
			name: "mem",
			children: [
				{
					path: ":id",
					component: _d257d112,
					name: "mem-id"
				},
				{
					path: ":id/profile",
					component: _2ba4258e,
					name: "mem-id-profile"
				},
				{
					path: ":id/pubs/comments",
					component: _c067f21c,
					name: "mem-id-pubs-comments"
				},
				{
					path: ":id/marks/repos",
					component: _45dba5c6,
					name: "mem-id-marks-repos"
				}
			]
		},
		{
			path: "/notifications",
			component: _a8053d48,
			name: "notifications"
		},
		{
			path: "/auth",
			component: _3acc66e4,
			name: "auth"
		},
		{
			path: "/extension",
			component: _bb88999a,
			name: "extension"
		},
		{
			path: "/webker",
			component: _21b6c4c0,
			name: "webker"
		},
		{
			path: "/topics",
			component: _50af2b60,
			name: "topics"
		},
		{
			path: "/admin",
			component: _68ca3f7a,
			name: "admin",
			children: [
				{
					path: "site/webkerapply",
					component: _ce6802c4,
					name: "admin-site-webkerapply"
				},
				{
					path: "pub/comments",
					component: _2f924a7c,
					name: "admin-pub-comments"
				},
				{
					path: "mem/mems",
					component: _3860af98,
					name: "admin-mem-mems"
				},
				{
					path: "pub/submits",
					component: _a17ae506,
					name: "admin-pub-submits"
				}
			]
		},
		{
			path: "/rank",
			component: _169e1930,
			name: "rank"
		},
		{
			path: "/search",
			component: _5704d5e4,
			name: "search"
		},
		{
			path: "/topic/new",
			component: _552bd998,
			name: "topic-new"
		},
		{
			path: "/develop/icons",
			component: _9b9e2d48,
			name: "develop-icons"
		},
		{
			path: "/repo/new",
			component: _9332e982,
			name: "repo-new"
		},
		{
			path: "/topic/:id?",
			component: _7c978364,
			name: "topic-id"
		},
		{
			path: "/subject/:name?",
			component: _200c81bb,
			name: "subject-name"
		},
		{
			path: "/repo/:owner?/:name?",
			component: _e5f28c7a,
			name: "repo-owner-name"
		},
		{
			path: "/repos/:rootyp?/:typcd?",
			component: _30e17564,
			name: "repos-rootyp-typcd"
		},
		{
			path: "/repo/:owner?/:name?/edit",
			component: _3d34b5ae,
			name: "repo-owner-name-edit"
		},
		{
			path: "/",
			component: _cba8e774,
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}
