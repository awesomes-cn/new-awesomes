import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _0c3b31e2 = () => import('..\\pages\\index.vue' /* webpackChunkName: "pages\\index" */).then(m => m.default || m)
const _50a1b928 = () => import('..\\pages\\releases.vue' /* webpackChunkName: "pages\\releases" */).then(m => m.default || m)
const _1a453532 = () => import('..\\pages\\subjects.vue' /* webpackChunkName: "pages\\subjects" */).then(m => m.default || m)
const _1b30b989 = () => import('..\\pages\\weuse.vue' /* webpackChunkName: "pages\\weuse" */).then(m => m.default || m)
const _54bd64a6 = () => import('..\\pages\\joinuse.vue' /* webpackChunkName: "pages\\joinuse" */).then(m => m.default || m)
const _897b30bc = () => import('..\\pages\\score.vue' /* webpackChunkName: "pages\\score" */).then(m => m.default || m)
const _26e9e3c8 = () => import('..\\pages\\search.vue' /* webpackChunkName: "pages\\search" */).then(m => m.default || m)
const _4d92f365 = () => import('..\\pages\\mem.vue' /* webpackChunkName: "pages\\mem" */).then(m => m.default || m)
const _5bbf0486 = () => import('..\\pages\\mem\\_id\\index.vue' /* webpackChunkName: "pages\\mem\\_id\\index" */).then(m => m.default || m)
const _695e639e = () => import('..\\pages\\mem\\_id\\marks.vue' /* webpackChunkName: "pages\\mem\\_id\\marks" */).then(m => m.default || m)
const _0c497820 = () => import('..\\pages\\mem\\_id\\marks\\repos.vue' /* webpackChunkName: "pages\\mem\\_id\\marks\\repos" */).then(m => m.default || m)
const _3bbdfaa2 = () => import('..\\pages\\mem\\_id\\pubs\\comments.vue' /* webpackChunkName: "pages\\mem\\_id\\pubs\\comments" */).then(m => m.default || m)
const _38b8c470 = () => import('..\\pages\\auth.vue' /* webpackChunkName: "pages\\auth" */).then(m => m.default || m)
const _92f89032 = () => import('..\\pages\\site.vue' /* webpackChunkName: "pages\\site" */).then(m => m.default || m)
const _c60a21be = () => import('..\\pages\\site\\link.vue' /* webpackChunkName: "pages\\site\\link" */).then(m => m.default || m)
const _f941e26e = () => import('..\\pages\\site\\contact.vue' /* webpackChunkName: "pages\\site\\contact" */).then(m => m.default || m)
const _15fa5ff6 = () => import('..\\pages\\site\\about.vue' /* webpackChunkName: "pages\\site\\about" */).then(m => m.default || m)
const _51bb4776 = () => import('..\\pages\\site\\capa.vue' /* webpackChunkName: "pages\\site\\capa" */).then(m => m.default || m)
const _d42b1586 = () => import('..\\pages\\site\\history.vue' /* webpackChunkName: "pages\\site\\history" */).then(m => m.default || m)
const _20943944 = () => import('..\\pages\\topics.vue' /* webpackChunkName: "pages\\topics" */).then(m => m.default || m)
const _c4efab68 = () => import('..\\pages\\rank.vue' /* webpackChunkName: "pages\\rank" */).then(m => m.default || m)
const _daf1aa62 = () => import('..\\pages\\extension.vue' /* webpackChunkName: "pages\\extension" */).then(m => m.default || m)
const _144baaf8 = () => import('..\\pages\\notifications.vue' /* webpackChunkName: "pages\\notifications" */).then(m => m.default || m)
const _1cc85ab8 = () => import('..\\pages\\webker.vue' /* webpackChunkName: "pages\\webker" */).then(m => m.default || m)
const _49ea7fb2 = () => import('..\\pages\\test.vue' /* webpackChunkName: "pages\\test" */).then(m => m.default || m)
const _3daa85df = () => import('..\\pages\\admin.vue' /* webpackChunkName: "pages\\admin" */).then(m => m.default || m)
const _476062f4 = () => import('..\\pages\\admin\\site\\webkerapply.vue' /* webpackChunkName: "pages\\admin\\site\\webkerapply" */).then(m => m.default || m)
const _87979ebc = () => import('..\\pages\\admin\\pub\\comments.vue' /* webpackChunkName: "pages\\admin\\pub\\comments" */).then(m => m.default || m)
const _f3e91a78 = () => import('..\\pages\\admin\\mem\\mems.vue' /* webpackChunkName: "pages\\admin\\mem\\mems" */).then(m => m.default || m)
const _c55a08c6 = () => import('..\\pages\\admin\\pub\\submits.vue' /* webpackChunkName: "pages\\admin\\pub\\submits" */).then(m => m.default || m)
const _747303f1 = () => import('..\\pages\\topic\\new.vue' /* webpackChunkName: "pages\\topic\\new" */).then(m => m.default || m)
const _76140b86 = () => import('..\\pages\\develop\\icons.vue' /* webpackChunkName: "pages\\develop\\icons" */).then(m => m.default || m)
const _eba4ee04 = () => import('..\\pages\\repo\\new.vue' /* webpackChunkName: "pages\\repo\\new" */).then(m => m.default || m)
const _60bd2f0b = () => import('..\\pages\\topic\\_id.vue' /* webpackChunkName: "pages\\topic\\_id" */).then(m => m.default || m)
const _02f65744 = () => import('..\\pages\\subject\\_name.vue' /* webpackChunkName: "pages\\subject\\_name" */).then(m => m.default || m)
const _2948b16e = () => import('..\\pages\\repo\\_owner\\_name\\index.vue' /* webpackChunkName: "pages\\repo\\_owner\\_name\\index" */).then(m => m.default || m)
const _35d2b6c4 = () => import('..\\pages\\repos\\_rootyp\\_typcd.vue' /* webpackChunkName: "pages\\repos\\_rootyp\\_typcd" */).then(m => m.default || m)
const _28808c1e = () => import('..\\pages\\repo\\_owner\\_name\\edit.vue' /* webpackChunkName: "pages\\repo\\_owner\\_name\\edit" */).then(m => m.default || m)



const scrollBehavior = (to, from, savedPosition) => {
  // SavedPosition is only available for popstate navigations.
  if (savedPosition) {
    return savedPosition
  } else {
    let position = {}
    // If no children detected
    if (to.matched.length < 2) {
      // Scroll to the top of the page
      position = { x: 0, y: 0 }
    }
    else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
      // If one of the children has scrollToTop option set to true
      position = { x: 0, y: 0 }
    }
    // If link has anchor, scroll to anchor by returning the selector
    if (to.hash) {
      position = { selector: to.hash }
    }
    return position
  }
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
			path: "/",
			component: _0c3b31e2,
			name: "index"
		},
		{
			path: "/releases",
			component: _50a1b928,
			name: "releases"
		},
		{
			path: "/subjects",
			component: _1a453532,
			name: "subjects"
		},
		{
			path: "/weuse",
			component: _1b30b989,
			name: "weuse"
		},
		{
			path: "/joinuse",
			component: _54bd64a6,
			name: "joinuse"
		},
		{
			path: "/score",
			component: _897b30bc,
			name: "score"
		},
		{
			path: "/search",
			component: _26e9e3c8,
			name: "search"
		},
		{
			path: "/mem",
			component: _4d92f365,
			name: "mem",
			children: [
				{
					path: ":id",
					component: _5bbf0486,
					name: "mem-id"
				},
				{
					path: ":id/marks",
					component: _695e639e,
					name: "mem-id-marks",
					children: [
						{
							path: "repos",
							component: _0c497820,
							name: "mem-id-marks-repos"
						}
					]
				},
				{
					path: ":id/pubs/comments",
					component: _3bbdfaa2,
					name: "mem-id-pubs-comments"
				}
			]
		},
		{
			path: "/auth",
			component: _38b8c470,
			name: "auth"
		},
		{
			path: "/site",
			component: _92f89032,
			name: "site",
			children: [
				{
					path: "link",
					component: _c60a21be,
					name: "site-link"
				},
				{
					path: "contact",
					component: _f941e26e,
					name: "site-contact"
				},
				{
					path: "about",
					component: _15fa5ff6,
					name: "site-about"
				},
				{
					path: "capa",
					component: _51bb4776,
					name: "site-capa"
				},
				{
					path: "history",
					component: _d42b1586,
					name: "site-history"
				}
			]
		},
		{
			path: "/topics",
			component: _20943944,
			name: "topics"
		},
		{
			path: "/rank",
			component: _c4efab68,
			name: "rank"
		},
		{
			path: "/extension",
			component: _daf1aa62,
			name: "extension"
		},
		{
			path: "/notifications",
			component: _144baaf8,
			name: "notifications"
		},
		{
			path: "/webker",
			component: _1cc85ab8,
			name: "webker"
		},
		{
			path: "/test",
			component: _49ea7fb2,
			name: "test"
		},
		{
			path: "/admin",
			component: _3daa85df,
			name: "admin",
			children: [
				{
					path: "site/webkerapply",
					component: _476062f4,
					name: "admin-site-webkerapply"
				},
				{
					path: "pub/comments",
					component: _87979ebc,
					name: "admin-pub-comments"
				},
				{
					path: "mem/mems",
					component: _f3e91a78,
					name: "admin-mem-mems"
				},
				{
					path: "pub/submits",
					component: _c55a08c6,
					name: "admin-pub-submits"
				}
			]
		},
		{
			path: "/topic/new",
			component: _747303f1,
			name: "topic-new"
		},
		{
			path: "/develop/icons",
			component: _76140b86,
			name: "develop-icons"
		},
		{
			path: "/repo/new",
			component: _eba4ee04,
			name: "repo-new"
		},
		{
			path: "/topic/:id?",
			component: _60bd2f0b,
			name: "topic-id"
		},
		{
			path: "/subject/:name?",
			component: _02f65744,
			name: "subject-name"
		},
		{
			path: "/repo/:owner?/:name?",
			component: _2948b16e,
			name: "repo-owner-name"
		},
		{
			path: "/repos/:rootyp?/:typcd?",
			component: _35d2b6c4,
			name: "repos-rootyp-typcd"
		},
		{
			path: "/repo/:owner?/:name?/edit",
			component: _28808c1e,
			name: "repo-owner-name-edit"
		}
    ],
    fallback: false
  })
}
