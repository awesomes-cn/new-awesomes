/* eslint-disable */
import router from '~router'
/*
** Only run on client-side and only in production mode
*/
if (process.env.NODE_ENV === 'production') {
  var _hmt = _hmt || [];
  (function() {
    var hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?4eb521ea7e1a8b34ca104f2703625e64";
    var s = document.getElementsByTagName("script")[0]; 
    s.parentNode.insertBefore(hm, s);
  })();

  router.afterEach((to, from) => {
    /*
    ** We tell Google Analytic to add a page view
    */
  })
}
