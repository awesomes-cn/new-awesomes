webpackJsonp([7],{"0T3u":function(t,a,i){"use strict";var o=i("YFWx"),e=i("oxqw");a.a={name:"home",serverCacheKey:function(){return Math.floor(Date.now()/1e4)},asyncData:function(){return Object(o.a)().get("topic?limit=6&typcd=TOPIC").then(function(t){return{topicList:t.data}})},components:{Topics:e.a}}},"2/qp":function(t,a,i){"use strict";function o(t){i("muxt")}Object.defineProperty(a,"__esModule",{value:!0});var e=i("0T3u"),c=i("KdiK"),s=i("J0+h"),n=o,r=s(e.a,c.a,n,null,null);a.default=r.exports},"2eOM":function(t,a,i){"use strict";var o=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",t._l(t.topics,function(a){return i("div",{staticClass:"topic-list"},[i("div",{staticClass:"topic-item"},[i("div",{staticClass:"extras"},[i("nuxt-link",{attrs:{to:""}},[i("img",{staticClass:"mem-tx",attrs:{src:t.cdn(a.mem.avatar,"mem")}}),i("span",[t._v(t._s(a.mem.nc))])]),i("span",[t._v("发布于 "+t._s(t.timeago(a.created_at)))])],1),i("nuxt-link",{attrs:{to:"topic/"+a.id}},[i("div",{staticClass:"cover",style:"background-image:url("+t.cdn(a.cover,"topic")+")"}),i("h2",[t._v(t._s(a.title))])]),i("div",{staticClass:"extras"},[i("span",[i("icon",{attrs:{name:"eye-o",width:"18px"}},[t._v(t._s(a.visit)+" 次阅读")])],1),i("span",[i("icon",{attrs:{name:"heart-o",width:"18px"}},[t._v(t._s(a.favor)+" 人喜欢")])],1),i("span",[i("icon",{attrs:{name:"comment",width:"18px"}},[t._v(t._s(a.comment>0?a.comment+" 条评论":"暂无评论"))])],1)])],1)])}))},e=[],c={render:o,staticRenderFns:e};a.a=c},IuQ2:function(t,a,i){var o=i("nT1w");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);i("XkoO")("08f95553",o,!0)},KdiK:function(t,a,i){"use strict";var o=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"topics-wraper"},[i("div",{staticClass:"container"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-7"},[i("topics",{attrs:{topics:t.topicList}})],1),i("div",{staticClass:"col-md-5"},[i("nuxt-link",{staticClass:"card",attrs:{to:"topic/new"}},[i("h4",[t._v("我要发布")])])],1)])])])},e=[],c={render:o,staticRenderFns:e};a.a=c},gAbF:function(t,a,i){a=t.exports=i("BkJT")(!1),a.push([t.i,".page-topics{background:#f7f8fa}.page-topics .topics-wraper{padding-top:20px}.page-topics .card{display:block;background-color:#fff;padding:30px;overflow:hidden;margin-bottom:20px}.page-topics .card img{width:100%}.page-topics .topic-list{background-color:#fff}.page-topics .topic-list a{text-decoration:none}.page-topics .more-topics{padding:20px 0;text-align:center}.page-topics .topic-item{padding:50px 8%;border-bottom:1px solid #eee}.page-topics .topic-item .cover{height:200px;margin:20px 0;background-repeat:no-repeat;background-size:cover;overflow:hidden;background-position:50%;position:relative;color:#fff}",""])},muxt:function(t,a,i){var o=i("gAbF");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);i("XkoO")("88c37178",o,!0)},nT1w:function(t,a,i){a=t.exports=i("BkJT")(!1),a.push([t.i,".topic-list[data-v-1cd549da]{background-color:#fff}.topic-list a[data-v-1cd549da]{text-decoration:none}.topic-item[data-v-1cd549da]{padding:50px 8%;border-bottom:1px dashed #eee}.topic-item .cover[data-v-1cd549da]{height:200px;margin:20px 0;background-repeat:no-repeat;background-size:cover;overflow:hidden;background-position:50%;position:relative;color:#fff}.topic-item h2[data-v-1cd549da]{padding:10px 0}.topic-item .mem-tx[data-v-1cd549da]{border-radius:100%;width:25px;height:25px;margin-right:5px}.topic-item .extras[data-v-1cd549da]{color:#9a9a9a;padding-top:10px}.topic-item .extras>span[data-v-1cd549da]{margin:0 8px;display:inline-block;position:relative}",""])},oxqw:function(t,a,i){"use strict";function o(t){i("IuQ2")}var e=i("xTtq"),c=i("2eOM"),s=i("J0+h"),n=o,r=s(e.a,c.a,n,"data-v-1cd549da",null);a.a=r.exports},xTtq:function(t,a,i){"use strict";a.a={props:["topics"]}}});
//# sourceMappingURL=topics.3c695816c6e31e0e5065.js.map