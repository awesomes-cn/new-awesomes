webpackJsonp([14],{EiJK:function(t,i,a){"use strict";var e=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"container topic-container"},[a("div",{staticClass:"banner"},[a("div",{staticClass:"extras"},[a("nuxt-link",{attrs:{to:""}},[a("img",{staticClass:"mem-tx",attrs:{src:t.cdn(t.topic.mem.avatar,"mem")}}),a("span",[t._v(t._s(t.topic.mem.nc))])]),a("span",[t._v("发布于 "+t._s(t.timeago(t.topic.created_at)))])],1),a("img",{staticClass:"cover",attrs:{src:t.cdn(t.topic.cover,"topic")}}),a("h3",[t._v(t._s(t.topic.title))]),a("div",{staticClass:"extras"},[a("span",[a("icon",{attrs:{name:"eye-o"}},[t._v(t._s(t.topic.visit)+" 次阅读")])],1),a("span",[a("icon",{attrs:{name:"heart-o"}},[t._v(t._s(t.topic.favor)+" 人喜欢")])],1),a("span",[a("icon",{attrs:{name:"comment"}},[t._v(t._s(t.topic.comment>0?t.topic.comment+" 条评论":"暂无评论"))])],1)])]),a("article",{domProps:{innerHTML:t._s(t.marked(t.topic.con))}})])},n=[],o={render:e,staticRenderFns:n};i.a=o},VVMj:function(t,i,a){"use strict";var e=a("YFWx");i.a={asyncData:function(t){var i=(t.req,t.params);t.query;return Object(e.a)().get("topic/"+i.id).then(function(t){return{topic:t.data}})}}},"WMx+":function(t,i,a){i=t.exports=a("BkJT")(!1),i.push([t.i,".page-topic-id header{-webkit-box-shadow:none!important;box-shadow:none!important;border-bottom:1px solid #eee}.page-topic-id .topic-container{max-width:700px;padding-top:40px}.page-topic-id .topic-container .cover{width:100%}.page-topic-id .topic-container .banner h3{padding:20px 0}.page-topic-id .topic-container .banner .extras{color:#9a9a9a;padding-bottom:10px}.page-topic-id .topic-container .banner .extras>span{margin:0 8px;display:inline-block;position:relative}.page-topic-id .topic-container .banner .extras svg{width:18px;height:18px;float:left;margin-right:3px}.page-topic-id .topic-container .banner .extras .mem-tx{border-radius:100%;width:25px;height:25px;margin-right:5px}.page-topic-id .topic-container article{font-size:15px;line-height:25px}",""])},eJ15:function(t,i,a){"use strict";function e(t){a("uWzg")}Object.defineProperty(i,"__esModule",{value:!0});var n=a("VVMj"),o=a("EiJK"),c=a("J0+h"),r=e,p=c(n.a,o.a,r,null,null);i.default=p.exports},uWzg:function(t,i,a){var e=a("WMx+");"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);a("XkoO")("5db08e22",e,!0)}});
//# sourceMappingURL=_id.0e406cf795729191b5ee.js.map