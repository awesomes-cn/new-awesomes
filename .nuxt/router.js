'use strict'

import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


const _3fcae0ab = () => import('/home/hxh/share/new-awesomes/pages/index.vue' /* webpackChunkName: "pages/index" */)

const _713a34a8 = () => import('/home/hxh/share/new-awesomes/pages/admin.vue' /* webpackChunkName: "pages/admin" */)

const _13951b3c = () => import('/home/hxh/share/new-awesomes/pages/admin/pub/submits.vue' /* webpackChunkName: "pages/admin-pub-submits" */)

const _c9af1522 = () => import('/home/hxh/share/new-awesomes/pages/admin/mem/mems.vue' /* webpackChunkName: "pages/admin-mem-mems" */)

const _2352fe63 = () => import('/home/hxh/share/new-awesomes/pages/rank.vue' /* webpackChunkName: "pages/rank" */)

const _4ec06852 = () => import('/home/hxh/share/new-awesomes/pages/weuse.vue' /* webpackChunkName: "pages/weuse" */)

const _6095586e = () => import('/home/hxh/share/new-awesomes/pages/test.vue' /* webpackChunkName: "pages/test" */)

const _5efa639b = () => import('/home/hxh/share/new-awesomes/pages/topics.vue' /* webpackChunkName: "pages/topics" */)

const _49a1c06e = () => import('/home/hxh/share/new-awesomes/pages/mem.vue' /* webpackChunkName: "pages/mem" */)

const _20df36dc = () => import('/home/hxh/share/new-awesomes/pages/mem/_id/index.vue' /* webpackChunkName: "pages/mem-id" */)

const _91701d52 = () => import('/home/hxh/share/new-awesomes/pages/mem/_id/pubs/comments.vue' /* webpackChunkName: "pages/mem-id-pubs-comments" */)

const _32df6cc2 = () => import('/home/hxh/share/new-awesomes/pages/mem/_id/marks/repos.vue' /* webpackChunkName: "pages/mem-id-marks-repos" */)

const _360880c1 = () => import('/home/hxh/share/new-awesomes/pages/notifications.vue' /* webpackChunkName: "pages/notifications" */)

const _3001fcfb = () => import('/home/hxh/share/new-awesomes/pages/webker.vue' /* webpackChunkName: "pages/webker" */)

const _64006e36 = () => import('/home/hxh/share/new-awesomes/pages/joinuse.vue' /* webpackChunkName: "pages/joinuse" */)

const _3c4e8bfe = () => import('/home/hxh/share/new-awesomes/pages/site.vue' /* webpackChunkName: "pages/site" */)

const _47834d1b = () => import('/home/hxh/share/new-awesomes/pages/site/link.vue' /* webpackChunkName: "pages/site-link" */)

const _d2e192e2 = () => import('/home/hxh/share/new-awesomes/pages/site/contact.vue' /* webpackChunkName: "pages/site-contact" */)

const _87047d88 = () => import('/home/hxh/share/new-awesomes/pages/site/about.vue' /* webpackChunkName: "pages/site-about" */)

const _0778b520 = () => import('/home/hxh/share/new-awesomes/pages/site/capa.vue' /* webpackChunkName: "pages/site-capa" */)

const _adcac5fa = () => import('/home/hxh/share/new-awesomes/pages/site/history.vue' /* webpackChunkName: "pages/site-history" */)

const _65500e1f = () => import('/home/hxh/share/new-awesomes/pages/search.vue' /* webpackChunkName: "pages/search" */)

const _306255fe = () => import('/home/hxh/share/new-awesomes/pages/subjects.vue' /* webpackChunkName: "pages/subjects" */)

const _05a04d18 = () => import('/home/hxh/share/new-awesomes/pages/extension.vue' /* webpackChunkName: "pages/extension" */)

const _38cead19 = () => import('/home/hxh/share/new-awesomes/pages/topic/new.vue' /* webpackChunkName: "pages/topic-new" */)

const _3c3c08c1 = () => import('/home/hxh/share/new-awesomes/pages/develop/icons.vue' /* webpackChunkName: "pages/develop-icons" */)

const _5ec4a0ba = () => import('/home/hxh/share/new-awesomes/pages/repo/new.vue' /* webpackChunkName: "pages/repo-new" */)

const _2518d833 = () => import('/home/hxh/share/new-awesomes/pages/topic/_id.vue' /* webpackChunkName: "pages/topic-id" */)

const _abd0bdc0 = () => import('/home/hxh/share/new-awesomes/pages/subject/_name.vue' /* webpackChunkName: "pages/subject-name" */)

const _4b69fa49 = () => import('/home/hxh/share/new-awesomes/pages/repos/_rootyp/_typcd.vue' /* webpackChunkName: "pages/repos-rootyp-typcd" */)

const _959cc230 = () => import('/home/hxh/share/new-awesomes/pages/repo/_owner/_name/index.vue' /* webpackChunkName: "pages/repo-owner-name" */)

const _8d31f138 = () => import('/home/hxh/share/new-awesomes/pages/repo/_owner/_name/edit.vue' /* webpackChunkName: "pages/repo-owner-name-edit" */)



const scrollBehavior = (to, from, savedPosition) => {
  // savedPosition is only available for popstate navigations.
  if (savedPosition) {
    return savedPosition
  } else {
    let position = {}
    // if no children detected
    if (to.matched.length < 2) {
      // scroll to the top of the page
      position = { x: 0, y: 0 }
    }
    else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
      // if one of the children has scrollToTop option set to true
      position = { x: 0, y: 0 }
    }
    // if link has anchor,  scroll to anchor by returning the selector
    if (to.hash) {
      position = { selector: to.hash }
    }
    return position
  }
}


export default new Router({
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  scrollBehavior,
  routes: [
		{
			path: "/",
			component: _3fcae0ab,
			name: "index"
		},
		{
			path: "/admin",
			component: _713a34a8,
			name: "admin",
			children: [
				{
					path: "pub/submits",
					component: _13951b3c,
					name: "admin-pub-submits"
				},
				{
					path: "mem/mems",
					component: _c9af1522,
					name: "admin-mem-mems"
				}
			]
		},
		{
			path: "/rank",
			component: _2352fe63,
			name: "rank"
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
			path: "/topics",
			component: _5efa639b,
			name: "topics"
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
			path: "/webker",
			component: _3001fcfb,
			name: "webker"
		},
		{
			path: "/joinuse",
			component: _64006e36,
			name: "joinuse"
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
			path: "/search",
			component: _65500e1f,
			name: "search"
		},
		{
			path: "/subjects",
			component: _306255fe,
			name: "subjects"
		},
		{
			path: "/extension",
			component: _05a04d18,
			name: "extension"
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
			path: "/repos/:rootyp?/:typcd?",
			component: _4b69fa49,
			name: "repos-rootyp-typcd"
		},
		{
			path: "/repo/:owner?/:name?",
			component: _959cc230,
			name: "repo-owner-name"
		},
		{
			path: "/repo/:owner?/:name?/edit",
			component: _8d31f138,
			name: "repo-owner-name-edit"
		}
  ]
})
