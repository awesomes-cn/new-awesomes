webpackJsonp([3],{"1mJA":function(t,n,r){(t.exports=r("XLS9")(!1)).push([t.i,".ps{-ms-touch-action:auto;touch-action:auto;overflow:hidden!important;-ms-overflow-style:none}@supports (-ms-overflow-style:none){.ps{overflow:auto!important}}@media (-ms-high-contrast:none),screen and (-ms-high-contrast:active){.ps{overflow:auto!important}}.ps.ps--active-x>.ps__scrollbar-x-rail,.ps.ps--active-y>.ps__scrollbar-y-rail{display:block;background-color:transparent}.ps.ps--in-scrolling.ps--x>.ps__scrollbar-x-rail{background-color:#eee;opacity:.9}.ps.ps--in-scrolling.ps--x>.ps__scrollbar-x-rail>.ps__scrollbar-x{background-color:#999;height:11px}.ps.ps--in-scrolling.ps--y>.ps__scrollbar-y-rail{background-color:#eee;opacity:.9}.ps.ps--in-scrolling.ps--y>.ps__scrollbar-y-rail>.ps__scrollbar-y{background-color:#999;width:11px}.ps>.ps__scrollbar-x-rail{display:none;position:absolute;opacity:0;-webkit-transition:background-color .2s linear,opacity .2s linear;transition:background-color .2s linear,opacity .2s linear;bottom:0;height:15px}.ps>.ps__scrollbar-x-rail>.ps__scrollbar-x{position:absolute;background-color:#aaa;border-radius:6px;-webkit-transition:background-color .2s linear,height .2s linear,width .2s ease-in-out,-webkit-border-radius .2s ease-in-out;-webkit-transition:background-color .2s linear,height .2s linear,width .2s ease-in-out,border-radius .2s ease-in-out;transition:background-color .2s linear,height .2s linear,width .2s ease-in-out,border-radius .2s ease-in-out;bottom:2px;height:6px}.ps>.ps__scrollbar-x-rail:active>.ps__scrollbar-x,.ps>.ps__scrollbar-x-rail:hover>.ps__scrollbar-x{height:11px}.ps>.ps__scrollbar-y-rail{display:none;position:absolute;opacity:0;-webkit-transition:background-color .2s linear,opacity .2s linear;transition:background-color .2s linear,opacity .2s linear;right:0;width:15px}.ps>.ps__scrollbar-y-rail>.ps__scrollbar-y{position:absolute;background-color:#aaa;border-radius:6px;-webkit-transition:background-color .2s linear,height .2s linear,width .2s ease-in-out,-webkit-border-radius .2s ease-in-out;-webkit-transition:background-color .2s linear,height .2s linear,width .2s ease-in-out,border-radius .2s ease-in-out;transition:background-color .2s linear,height .2s linear,width .2s ease-in-out,border-radius .2s ease-in-out;right:2px;width:6px}.ps>.ps__scrollbar-y-rail:active>.ps__scrollbar-y,.ps>.ps__scrollbar-y-rail:hover>.ps__scrollbar-y{width:11px}.ps:hover.ps--in-scrolling.ps--x>.ps__scrollbar-x-rail{background-color:#eee;opacity:.9}.ps:hover.ps--in-scrolling.ps--x>.ps__scrollbar-x-rail>.ps__scrollbar-x{background-color:#999;height:11px}.ps:hover.ps--in-scrolling.ps--y>.ps__scrollbar-y-rail{background-color:#eee;opacity:.9}.ps:hover.ps--in-scrolling.ps--y>.ps__scrollbar-y-rail>.ps__scrollbar-y{background-color:#999;width:11px}.ps:hover>.ps__scrollbar-x-rail,.ps:hover>.ps__scrollbar-y-rail{opacity:.6}.ps:hover>.ps__scrollbar-x-rail:hover{background-color:#eee;opacity:.9}.ps:hover>.ps__scrollbar-x-rail:hover>.ps__scrollbar-x{background-color:#999}.ps:hover>.ps__scrollbar-y-rail:hover{background-color:#eee;opacity:.9}.ps:hover>.ps__scrollbar-y-rail:hover>.ps__scrollbar-y{background-color:#999}",""])},"3Qc8":function(t,n,r){var e=r("saMy");"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);r("FIqI")("3249c7e8",e,!0,{sourceMap:!1})},"3Tzb":function(t,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=r("FO7G"),a=r("bkap");var o=function(t){r("3Qc8")},i=r("X4nt")(e.a,a.a,!1,o,null,null);n.default=i.exports},FO7G:function(t,n,r){"use strict";var e=r("lC5x"),a=r.n(e),o=r("rVsN"),i=r.n(o),s=r("KH7x"),c=r.n(s),u=r("J0Oq"),l=r.n(u),p=r("YFWx"),f=r("g2WY"),d=r("u47Y"),h=r.n(d),b=r("L7Pj"),v=r.n(b);r("lLci");var g=void 0;n.a={asyncData:function(){var t=l()(a.a.mark(function t(n){n.req;var r,e,o,s,u,l,f=n.params;n.query;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.all([Object(p.a)().get("subject/"+f.name),Object(p.a)().get("category/all")]);case 2:return r=t.sent,e=c()(r,2),o=e[0],s=e[1],u=0,l=h.a.sortBy(s.data,function(t){return"A"===t.typcd?t.key:t.parent}).map(function(t){return"B"===t.typcd&&(t.repos=o.data.repos.filter(function(n){return n.rootyp===t.parent&&n.typcd===t.key&&(u++,n.hasad=!1,10===u&&(n.hasad=!0),!0)}),t.repo=t.repos[0]),"A"===t.typcd&&(t.amount=o.data.repos.filter(function(n){return n.rootyp===t.key}).length),t}),t.abrupt("return",{sub:o.data,cates:l});case 9:case"end":return t.stop()}},t,this)}));return function(n){return t.apply(this,arguments)}}(),head:function(){return{title:this.sub.title+"专题",meta:[{hid:"description",name:"description",content:this.sub.sdesc},{hid:"keywords",name:"keywords",content:this.sub.title+","+this.sub.title+"专题,"+this.sub.title+"资源,"+this.sub.title+"组件,"+this.sub.title+"插件"}]}},data:function(){return{fixcate:!1,checkedTyp:"",showad:!1}},components:{Fresh:f.a,Adsense:function(){return r.e(46).then(r.bind(null,"g05U"))}},computed:{rootyps:function(){return this.cates.filter(function(t){return"A"===t.typcd})}},methods:{uperCaseTitle:function(t){return t[0].toUpperCase()+t.slice(1)},switchTyp:function(t){this.checkedTyp=t,v()("html,body").animate({scrollTop:v()("#"+t).offset().top})},typcds:function(t){return this.cates.filter(function(n){return"B"===n.typcd&&n.parent===t.key})}},watch:{checkedTyp:function(t){window.location.href="#"+t}},mounted:function(){this.showad=!0;var t=v()(".split").map(function(){return{first:v()(this).attr("data-first"),second:v()(this).attr("id"),top:v()(this).offset().top}}),n=this;v()(document).scroll(function(){var r=v()(document).scrollTop();n.fixcate=r>=v()(".area-box").offset().top-60,clearTimeout(g),g=setTimeout(function(){var e=h.a.filter(t,function(t){return r>=t.top-170}).pop()||t[0];n.checkedTyp=e.second},300)}).scroll()}}},FsTu:function(t,n,r){r("dmd9"),r("wCtA"),t.exports=r("Lo5Z")},KH7x:function(t,n,r){"use strict";n.__esModule=!0;var e=o(r("MGgt")),a=o(r("HzJ8"));function o(t){return t&&t.__esModule?t:{default:t}}n.default=function(){return function(t,n){if(Array.isArray(t))return t;if((0,e.default)(Object(t)))return function(t,n){var r=[],e=!0,o=!1,i=void 0;try{for(var s,c=(0,a.default)(t);!(e=(s=c.next()).done)&&(r.push(s.value),!n||r.length!==n);e=!0);}catch(t){o=!0,i=t}finally{try{!e&&c.return&&c.return()}finally{if(o)throw i}}return r}(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}()},Lo5Z:function(t,n,r){var e=r("iKyp"),a=r("QjZ5")("iterator"),o=r("9mma");t.exports=r("UusJ").isIterable=function(t){var n=Object(t);return void 0!==n[a]||"@@iterator"in n||o.hasOwnProperty(e(n))}},MGgt:function(t,n,r){t.exports={default:r("FsTu"),__esModule:!0}},Tpp0:function(t,n,r){(t.exports=r("XLS9")(!1)).push([t.i,".fresh[data-v-8f97b75e]{display:inline-block;border-radius:100%;width:15px;height:15px;background-color:#eee;-ms-flex-negative:0;flex-shrink:0}.fresh.often[data-v-8f97b75e]{background-color:#a4eda4}.fresh.outdated[data-v-8f97b75e]{background-color:#ffbcbc}",""])},bkap:function(t,n,r){"use strict";var e={render:function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",[r("div",{staticClass:"container list-body"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col"},[r("div",{staticClass:"nav-banner"},[r("h1",[t._v(t._s(t.uperCaseTitle(t.sub.title))+" 专题")]),r("article",[t._v(t._s(t.sub.sdesc))]),r("a",{staticClass:"sub-link website",attrs:{href:t.sub.website,target:"_blank"}},[r("icon",{attrs:{name:"home",width:"18px"}},[t._v("官  网")])],1),t.sub.repo.id>0?r("a",{staticClass:"sub-link github",attrs:{href:t.sub.repo.html_url,target:"_blank"}},[r("icon",{attrs:{name:"github",width:"18px"}},[t._v("GitHub")])],1):t._e()])])]),r("div",{staticClass:"area-box"},[r("div",{staticClass:"nav-box"},[r("div",{class:"inner "+(t.fixcate?"fixed":"")},t._l(t.rootyps,function(n){return n.amount>0?r("div",{staticClass:"nav-level"},[r("a",{staticClass:"root",attrs:{href:"javascript:void(0)","data-link":n.key},on:{click:function(r){t.switchTyp(n.sdesc)}}},[r("span",[t._v(t._s(n.sdesc))])]),t._l(t.typcds(n),function(e){return e.repos.length>0?r("a",{staticClass:"second",class:"active-"+(t.checkedTyp==n.sdesc+"-"+e.sdesc),attrs:{href:"javascript:void(0)"},on:{click:function(r){t.switchTyp(n.sdesc+"-"+e.sdesc)}}},[r("span",[t._v(t._s(e.sdesc))])]):t._e()})],2):t._e()}))]),r("div",{staticClass:"sub-repos"},[t._l(t.cates,function(n,e){return n.repos&&n.repo?[r("div",{staticClass:"split",attrs:{id:n.repo.rootyp_zh+"-"+n.repo.typcd_zh,"data-first":n.repo.rootyp_zh}}),r("h3",[r("span",[t._v(t._s(n.repo.rootyp_zh)+" ")]),r("span",[t._v("» ")]),r("span",[t._v(t._s(n.repo.typcd_zh))]),r("span",{staticClass:"amount"},[t._v("（"+t._s(n.repos.length)+"）")])]),t._l(n.repos,function(n,e){return[r("div",{staticClass:"repo-card"},[r("fresh",{attrs:{time:n.pushed_at}}),r("nuxt-link",{attrs:{to:"/repo/"+n.owner+"/"+n.alia}},[r("img",{staticClass:"cover",attrs:{src:t.cdn(n.cover,"repo","subject_repo")}})]),r("div",{staticClass:"middle"},[r("nuxt-link",{attrs:{to:"/repo/"+n.owner+"/"+n.alia}},[r("h4",[t._v(t._s(n.name))])]),r("span",{staticClass:"sdesc"},[t._v(t._s(n.description_cn||n.description))])],1),r("div",{staticClass:"stars"},[r("icon",{attrs:{name:"star",width:"15px"}},[t._v(t._s(n.stargazers_count)+"  ")])],1)],1),n.hasad?r("div",{staticClass:"ad-wraper"},[r("div",{staticClass:"repo-card"},[t.showad?r("adsense"):t._e()],1),r("div",{staticClass:"repo-card"},[t.showad?r("adsense"):t._e()],1)]):t._e()]})]:t._e()})],2)])])])},staticRenderFns:[]};n.a=e},chK1:function(t,n,r){var e=r("Tpp0");"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);r("FIqI")("27883998",e,!0,{sourceMap:!1})},eat3:function(t,n,r){"use strict";n.a={props:["time"],methods:{format:function(t){var n=(Date.parse(new Date)-Date.parse(new Date(t)))/1e3/60/60/24;return n<=20?"often":n<=210?"":"outdated"}}}},g2WY:function(t,n,r){"use strict";var e=r("eat3"),a=r("gJH2");var o=function(t){r("chK1")},i=r("X4nt")(e.a,a.a,!1,o,"data-v-8f97b75e",null);n.a=i.exports},gJH2:function(t,n,r){"use strict";var e={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"fresh",class:this.format(this.time),attrs:{title:"更新于"+this.timeago(this.time)}})},staticRenderFns:[]};n.a=e},lLci:function(t,n,r){var e=r("1mJA");"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);r("FIqI")("4668f012",e,!0,{sourceMap:!1})},saMy:function(t,n,r){(t.exports=r("XLS9")(!1)).push([t.i,".page-subject-name{background-color:#f7f8fa}.page-subject-name .list-body{max-width:1000px}.page-subject-name .split{height:70px}.page-subject-name header{-webkit-box-shadow:none!important;box-shadow:none!important}.page-subject-name .nav-banner{background-image:linear-gradient(36deg,#17522e,#12496a 60%,#9f240e);-webkit-box-shadow:0 1px 1px 0 rgba(0,0,0,.05);box-shadow:0 1px 1px 0 rgba(0,0,0,.05);margin-top:30px;margin-bottom:20px;font-size:17.6px;font-size:1.1rem;color:#fff;padding:20px}.page-subject-name .nav-banner article{color:#d3e3e6;margin-top:10px}.page-subject-name .sub-banner{min-height:300px;padding:50px 1%;position:relative;color:#fff;overflow:hidden}.page-subject-name .sub-banner .bglayer{background-repeat:no-repeat;background-size:cover;background-attachment:fixed;z-index:1;overflow:hidden;background-position:50%;position:absolute;top:0;bottom:0;left:0;right:0}.page-subject-name .sub-banner .bgcover{z-index:2;background-color:#000;opacity:.6;position:absolute;top:0;bottom:0;left:0;right:0}.page-subject-name .sub-banner article{line-height:35px}.page-subject-name .sub-banner .container{z-index:10}@media (max-width:576px){.page-subject-name .list-body{display:block!important}.page-subject-name .list-typs,.page-subject-name .placeholder{display:none!important}.page-subject-name .middle{white-space:nowrap!important}}.page-subject-name .sub-repos{margin-bottom:50px;background-color:#fff;-webkit-box-shadow:0 1px 1px 0 rgba(0,0,0,.05);box-shadow:0 1px 1px 0 rgba(0,0,0,.05)}.page-subject-name .sub-repos h3{border-left:0;border-right:0;padding:30px 0;padding-top:0;padding-bottom:20px;color:#8b8b8b;font-size:20px;text-align:center}.page-subject-name .sub-repos h3 span:first-child{color:#ccc}.page-subject-name .sub-repos h3 span:nth-child(2){color:#cacaca}.page-subject-name .repo-card{display:-webkit-box;display:-ms-flexbox;display:flex;padding:20px;border-radius:2px;margin-bottom:1px;border:1px solid #fff;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border-top:1px solid #f7f8fa}.page-subject-name .repo-card .cover{height:60px;border-radius:4px;margin:0 10px}.page-subject-name .repo-card h4{font-size:20px;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.page-subject-name .repo-card .sdesc{padding:10px 0}.page-subject-name .repo-card .middle{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;word-break:keep-all;overflow:hidden;text-overflow:ellipsis}.page-subject-name .repo-card .stars{width:140px;text-align:right;color:#9da09e}.page-subject-name .sub-link{font-size:14px;padding:8px 12px;margin-right:20px;margin-top:40px;display:inline-block;background-color:#da552f;color:#fff}.page-subject-name .sub-link.github{background-color:#0275d8}.page-subject-name .amount{margin-left:3px;font-size:13px}.page-subject-name .ad-wraper{display:-webkit-box;display:-ms-flexbox;display:flex}.page-subject-name .ad-wraper .repo-card{width:50%}.page-subject-name .area-box{display:-webkit-box;display:-ms-flexbox;display:flex}.page-subject-name .nav-box{font-size:12px;width:300px;-ms-flex-negative:0;flex-shrink:0;margin-right:20px}@media (max-width:800px){.page-subject-name .nav-box{display:none}}.page-subject-name .nav-box .inner{padding:20px;padding-top:10px;-webkit-box-shadow:0 1px 1px 0 rgba(0,0,0,.05);box-shadow:0 1px 1px 0 rgba(0,0,0,.05);background-color:#fff;width:300px}.page-subject-name .nav-box .inner.fixed{position:fixed;top:60px}.page-subject-name .nav-box .nav-level{margin-top:10px}.page-subject-name .nav-box .nav-level>a{display:inline-block;margin-right:15px}.page-subject-name .nav-box .nav-level .root{font-size:17.6px;font-size:1.1rem;font-weight:700}.page-subject-name .nav-box .nav-level .num{color:#99a7b4}.page-subject-name .nav-box .second{padding:3px 5px;margin-top:8px;-webkit-box-shadow:0 1px 1px 0 rgba(0,0,0,.05);box-shadow:0 1px 1px 0 rgba(0,0,0,.05);font-size:12px;border:1px solid #e9e9e9}.page-subject-name .nav-box .second.active-true{border:1px solid #ed4612;color:#ed4612}",""])},u47Y:function(t,n,r){var e;(function(){var r=this,a=r._,o=Array.prototype,i=Object.prototype,s=Function.prototype,c=o.push,u=o.slice,l=i.toString,p=i.hasOwnProperty,f=Array.isArray,d=Object.keys,h=s.bind,b=Object.create,v=function(){},g=function(t){return t instanceof g?t:this instanceof g?void(this._wrapped=t):new g(t)};void 0!==t&&t.exports&&(n=t.exports=g),n._=g,g.VERSION="1.8.3";var x=function(t,n,r){if(void 0===n)return t;switch(null==r?3:r){case 1:return function(r){return t.call(n,r)};case 2:return function(r,e){return t.call(n,r,e)};case 3:return function(r,e,a){return t.call(n,r,e,a)};case 4:return function(r,e,a,o){return t.call(n,r,e,a,o)}}return function(){return t.apply(n,arguments)}},y=function(t,n,r){return null==t?g.identity:g.isFunction(t)?x(t,n,r):g.isObject(t)?g.matcher(t):g.property(t)};g.iteratee=function(t,n){return y(t,n,1/0)};var m=function(t,n){return function(r){var e=arguments.length;if(e<2||null==r)return r;for(var a=1;a<e;a++)for(var o=arguments[a],i=t(o),s=i.length,c=0;c<s;c++){var u=i[c];n&&void 0!==r[u]||(r[u]=o[u])}return r}},_=function(t){if(!g.isObject(t))return{};if(b)return b(t);v.prototype=t;var n=new v;return v.prototype=null,n},w=function(t){return function(n){return null==n?void 0:n[t]}},k=Math.pow(2,53)-1,j=w("length"),A=function(t){var n=j(t);return"number"==typeof n&&n>=0&&n<=k};function O(t){return function(n,r,e,a){r=x(r,a,4);var o=!A(n)&&g.keys(n),i=(o||n).length,s=t>0?0:i-1;return arguments.length<3&&(e=n[o?o[s]:s],s+=t),function(n,r,e,a,o,i){for(;o>=0&&o<i;o+=t){var s=a?a[o]:o;e=r(e,n[s],s,n)}return e}(n,r,e,o,s,i)}}g.each=g.forEach=function(t,n,r){var e,a;if(n=x(n,r),A(t))for(e=0,a=t.length;e<a;e++)n(t[e],e,t);else{var o=g.keys(t);for(e=0,a=o.length;e<a;e++)n(t[o[e]],o[e],t)}return t},g.map=g.collect=function(t,n,r){n=y(n,r);for(var e=!A(t)&&g.keys(t),a=(e||t).length,o=Array(a),i=0;i<a;i++){var s=e?e[i]:i;o[i]=n(t[s],s,t)}return o},g.reduce=g.foldl=g.inject=O(1),g.reduceRight=g.foldr=O(-1),g.find=g.detect=function(t,n,r){var e;if(void 0!==(e=A(t)?g.findIndex(t,n,r):g.findKey(t,n,r))&&-1!==e)return t[e]},g.filter=g.select=function(t,n,r){var e=[];return n=y(n,r),g.each(t,function(t,r,a){n(t,r,a)&&e.push(t)}),e},g.reject=function(t,n,r){return g.filter(t,g.negate(y(n)),r)},g.every=g.all=function(t,n,r){n=y(n,r);for(var e=!A(t)&&g.keys(t),a=(e||t).length,o=0;o<a;o++){var i=e?e[o]:o;if(!n(t[i],i,t))return!1}return!0},g.some=g.any=function(t,n,r){n=y(n,r);for(var e=!A(t)&&g.keys(t),a=(e||t).length,o=0;o<a;o++){var i=e?e[o]:o;if(n(t[i],i,t))return!0}return!1},g.contains=g.includes=g.include=function(t,n,r,e){return A(t)||(t=g.values(t)),("number"!=typeof r||e)&&(r=0),g.indexOf(t,n,r)>=0},g.invoke=function(t,n){var r=u.call(arguments,2),e=g.isFunction(n);return g.map(t,function(t){var a=e?n:t[n];return null==a?a:a.apply(t,r)})},g.pluck=function(t,n){return g.map(t,g.property(n))},g.where=function(t,n){return g.filter(t,g.matcher(n))},g.findWhere=function(t,n){return g.find(t,g.matcher(n))},g.max=function(t,n,r){var e,a,o=-1/0,i=-1/0;if(null==n&&null!=t)for(var s=0,c=(t=A(t)?t:g.values(t)).length;s<c;s++)(e=t[s])>o&&(o=e);else n=y(n,r),g.each(t,function(t,r,e){((a=n(t,r,e))>i||a===-1/0&&o===-1/0)&&(o=t,i=a)});return o},g.min=function(t,n,r){var e,a,o=1/0,i=1/0;if(null==n&&null!=t)for(var s=0,c=(t=A(t)?t:g.values(t)).length;s<c;s++)(e=t[s])<o&&(o=e);else n=y(n,r),g.each(t,function(t,r,e){((a=n(t,r,e))<i||a===1/0&&o===1/0)&&(o=t,i=a)});return o},g.shuffle=function(t){for(var n,r=A(t)?t:g.values(t),e=r.length,a=Array(e),o=0;o<e;o++)(n=g.random(0,o))!==o&&(a[o]=a[n]),a[n]=r[o];return a},g.sample=function(t,n,r){return null==n||r?(A(t)||(t=g.values(t)),t[g.random(t.length-1)]):g.shuffle(t).slice(0,Math.max(0,n))},g.sortBy=function(t,n,r){return n=y(n,r),g.pluck(g.map(t,function(t,r,e){return{value:t,index:r,criteria:n(t,r,e)}}).sort(function(t,n){var r=t.criteria,e=n.criteria;if(r!==e){if(r>e||void 0===r)return 1;if(r<e||void 0===e)return-1}return t.index-n.index}),"value")};var C=function(t){return function(n,r,e){var a={};return r=y(r,e),g.each(n,function(e,o){var i=r(e,o,n);t(a,e,i)}),a}};g.groupBy=C(function(t,n,r){g.has(t,r)?t[r].push(n):t[r]=[n]}),g.indexBy=C(function(t,n,r){t[r]=n}),g.countBy=C(function(t,n,r){g.has(t,r)?t[r]++:t[r]=1}),g.toArray=function(t){return t?g.isArray(t)?u.call(t):A(t)?g.map(t,g.identity):g.values(t):[]},g.size=function(t){return null==t?0:A(t)?t.length:g.keys(t).length},g.partition=function(t,n,r){n=y(n,r);var e=[],a=[];return g.each(t,function(t,r,o){(n(t,r,o)?e:a).push(t)}),[e,a]},g.first=g.head=g.take=function(t,n,r){if(null!=t)return null==n||r?t[0]:g.initial(t,t.length-n)},g.initial=function(t,n,r){return u.call(t,0,Math.max(0,t.length-(null==n||r?1:n)))},g.last=function(t,n,r){if(null!=t)return null==n||r?t[t.length-1]:g.rest(t,Math.max(0,t.length-n))},g.rest=g.tail=g.drop=function(t,n,r){return u.call(t,null==n||r?1:n)},g.compact=function(t){return g.filter(t,g.identity)};var z=function(t,n,r,e){for(var a=[],o=0,i=e||0,s=j(t);i<s;i++){var c=t[i];if(A(c)&&(g.isArray(c)||g.isArguments(c))){n||(c=z(c,n,r));var u=0,l=c.length;for(a.length+=l;u<l;)a[o++]=c[u++]}else r||(a[o++]=c)}return a};function F(t){return function(n,r,e){r=y(r,e);for(var a=j(n),o=t>0?0:a-1;o>=0&&o<a;o+=t)if(r(n[o],o,n))return o;return-1}}function T(t,n,r){return function(e,a,o){var i=0,s=j(e);if("number"==typeof o)t>0?i=o>=0?o:Math.max(o+s,i):s=o>=0?Math.min(o+1,s):o+s+1;else if(r&&o&&s)return e[o=r(e,a)]===a?o:-1;if(a!=a)return(o=n(u.call(e,i,s),g.isNaN))>=0?o+i:-1;for(o=t>0?i:s-1;o>=0&&o<s;o+=t)if(e[o]===a)return o;return-1}}g.flatten=function(t,n){return z(t,n,!1)},g.without=function(t){return g.difference(t,u.call(arguments,1))},g.uniq=g.unique=function(t,n,r,e){g.isBoolean(n)||(e=r,r=n,n=!1),null!=r&&(r=y(r,e));for(var a=[],o=[],i=0,s=j(t);i<s;i++){var c=t[i],u=r?r(c,i,t):c;n?(i&&o===u||a.push(c),o=u):r?g.contains(o,u)||(o.push(u),a.push(c)):g.contains(a,c)||a.push(c)}return a},g.union=function(){return g.uniq(z(arguments,!0,!0))},g.intersection=function(t){for(var n=[],r=arguments.length,e=0,a=j(t);e<a;e++){var o=t[e];if(!g.contains(n,o)){for(var i=1;i<r&&g.contains(arguments[i],o);i++);i===r&&n.push(o)}}return n},g.difference=function(t){var n=z(arguments,!0,!0,1);return g.filter(t,function(t){return!g.contains(n,t)})},g.zip=function(){return g.unzip(arguments)},g.unzip=function(t){for(var n=t&&g.max(t,j).length||0,r=Array(n),e=0;e<n;e++)r[e]=g.pluck(t,e);return r},g.object=function(t,n){for(var r={},e=0,a=j(t);e<a;e++)n?r[t[e]]=n[e]:r[t[e][0]]=t[e][1];return r},g.findIndex=F(1),g.findLastIndex=F(-1),g.sortedIndex=function(t,n,r,e){for(var a=(r=y(r,e,1))(n),o=0,i=j(t);o<i;){var s=Math.floor((o+i)/2);r(t[s])<a?o=s+1:i=s}return o},g.indexOf=T(1,g.findIndex,g.sortedIndex),g.lastIndexOf=T(-1,g.findLastIndex),g.range=function(t,n,r){null==n&&(n=t||0,t=0),r=r||1;for(var e=Math.max(Math.ceil((n-t)/r),0),a=Array(e),o=0;o<e;o++,t+=r)a[o]=t;return a};var M=function(t,n,r,e,a){if(!(e instanceof n))return t.apply(r,a);var o=_(t.prototype),i=t.apply(o,a);return g.isObject(i)?i:o};g.bind=function(t,n){if(h&&t.bind===h)return h.apply(t,u.call(arguments,1));if(!g.isFunction(t))throw new TypeError("Bind must be called on a function");var r=u.call(arguments,2),e=function(){return M(t,e,n,this,r.concat(u.call(arguments)))};return e},g.partial=function(t){var n=u.call(arguments,1),r=function(){for(var e=0,a=n.length,o=Array(a),i=0;i<a;i++)o[i]=n[i]===g?arguments[e++]:n[i];for(;e<arguments.length;)o.push(arguments[e++]);return M(t,r,this,this,o)};return r},g.bindAll=function(t){var n,r,e=arguments.length;if(e<=1)throw new Error("bindAll must be passed function names");for(n=1;n<e;n++)t[r=arguments[n]]=g.bind(t[r],t);return t},g.memoize=function(t,n){var r=function(e){var a=r.cache,o=""+(n?n.apply(this,arguments):e);return g.has(a,o)||(a[o]=t.apply(this,arguments)),a[o]};return r.cache={},r},g.delay=function(t,n){var r=u.call(arguments,2);return setTimeout(function(){return t.apply(null,r)},n)},g.defer=g.partial(g.delay,g,1),g.throttle=function(t,n,r){var e,a,o,i=null,s=0;r||(r={});var c=function(){s=!1===r.leading?0:g.now(),i=null,o=t.apply(e,a),i||(e=a=null)};return function(){var u=g.now();s||!1!==r.leading||(s=u);var l=n-(u-s);return e=this,a=arguments,l<=0||l>n?(i&&(clearTimeout(i),i=null),s=u,o=t.apply(e,a),i||(e=a=null)):i||!1===r.trailing||(i=setTimeout(c,l)),o}},g.debounce=function(t,n,r){var e,a,o,i,s,c=function(){var u=g.now()-i;u<n&&u>=0?e=setTimeout(c,n-u):(e=null,r||(s=t.apply(o,a),e||(o=a=null)))};return function(){o=this,a=arguments,i=g.now();var u=r&&!e;return e||(e=setTimeout(c,n)),u&&(s=t.apply(o,a),o=a=null),s}},g.wrap=function(t,n){return g.partial(n,t)},g.negate=function(t){return function(){return!t.apply(this,arguments)}},g.compose=function(){var t=arguments,n=t.length-1;return function(){for(var r=n,e=t[n].apply(this,arguments);r--;)e=t[r].call(this,e);return e}},g.after=function(t,n){return function(){if(--t<1)return n.apply(this,arguments)}},g.before=function(t,n){var r;return function(){return--t>0&&(r=n.apply(this,arguments)),t<=1&&(n=null),r}},g.once=g.partial(g.before,2);var I=!{toString:null}.propertyIsEnumerable("toString"),S=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"];function E(t,n){var r=S.length,e=t.constructor,a=g.isFunction(e)&&e.prototype||i,o="constructor";for(g.has(t,o)&&!g.contains(n,o)&&n.push(o);r--;)(o=S[r])in t&&t[o]!==a[o]&&!g.contains(n,o)&&n.push(o)}g.keys=function(t){if(!g.isObject(t))return[];if(d)return d(t);var n=[];for(var r in t)g.has(t,r)&&n.push(r);return I&&E(t,n),n},g.allKeys=function(t){if(!g.isObject(t))return[];var n=[];for(var r in t)n.push(r);return I&&E(t,n),n},g.values=function(t){for(var n=g.keys(t),r=n.length,e=Array(r),a=0;a<r;a++)e[a]=t[n[a]];return e},g.mapObject=function(t,n,r){n=y(n,r);for(var e,a=g.keys(t),o=a.length,i={},s=0;s<o;s++)i[e=a[s]]=n(t[e],e,t);return i},g.pairs=function(t){for(var n=g.keys(t),r=n.length,e=Array(r),a=0;a<r;a++)e[a]=[n[a],t[n[a]]];return e},g.invert=function(t){for(var n={},r=g.keys(t),e=0,a=r.length;e<a;e++)n[t[r[e]]]=r[e];return n},g.functions=g.methods=function(t){var n=[];for(var r in t)g.isFunction(t[r])&&n.push(r);return n.sort()},g.extend=m(g.allKeys),g.extendOwn=g.assign=m(g.keys),g.findKey=function(t,n,r){n=y(n,r);for(var e,a=g.keys(t),o=0,i=a.length;o<i;o++)if(n(t[e=a[o]],e,t))return e},g.pick=function(t,n,r){var e,a,o={},i=t;if(null==i)return o;g.isFunction(n)?(a=g.allKeys(i),e=x(n,r)):(a=z(arguments,!1,!1,1),e=function(t,n,r){return n in r},i=Object(i));for(var s=0,c=a.length;s<c;s++){var u=a[s],l=i[u];e(l,u,i)&&(o[u]=l)}return o},g.omit=function(t,n,r){if(g.isFunction(n))n=g.negate(n);else{var e=g.map(z(arguments,!1,!1,1),String);n=function(t,n){return!g.contains(e,n)}}return g.pick(t,n,r)},g.defaults=m(g.allKeys,!0),g.create=function(t,n){var r=_(t);return n&&g.extendOwn(r,n),r},g.clone=function(t){return g.isObject(t)?g.isArray(t)?t.slice():g.extend({},t):t},g.tap=function(t,n){return n(t),t},g.isMatch=function(t,n){var r=g.keys(n),e=r.length;if(null==t)return!e;for(var a=Object(t),o=0;o<e;o++){var i=r[o];if(n[i]!==a[i]||!(i in a))return!1}return!0};var N=function(t,n,r,e){if(t===n)return 0!==t||1/t==1/n;if(null==t||null==n)return t===n;t instanceof g&&(t=t._wrapped),n instanceof g&&(n=n._wrapped);var a=l.call(t);if(a!==l.call(n))return!1;switch(a){case"[object RegExp]":case"[object String]":return""+t==""+n;case"[object Number]":return+t!=+t?+n!=+n:0==+t?1/+t==1/n:+t==+n;case"[object Date]":case"[object Boolean]":return+t==+n}var o="[object Array]"===a;if(!o){if("object"!=typeof t||"object"!=typeof n)return!1;var i=t.constructor,s=n.constructor;if(i!==s&&!(g.isFunction(i)&&i instanceof i&&g.isFunction(s)&&s instanceof s)&&"constructor"in t&&"constructor"in n)return!1}r=r||[],e=e||[];for(var c=r.length;c--;)if(r[c]===t)return e[c]===n;if(r.push(t),e.push(n),o){if((c=t.length)!==n.length)return!1;for(;c--;)if(!N(t[c],n[c],r,e))return!1}else{var u,p=g.keys(t);if(c=p.length,g.keys(n).length!==c)return!1;for(;c--;)if(u=p[c],!g.has(n,u)||!N(t[u],n[u],r,e))return!1}return r.pop(),e.pop(),!0};g.isEqual=function(t,n){return N(t,n)},g.isEmpty=function(t){return null==t||(A(t)&&(g.isArray(t)||g.isString(t)||g.isArguments(t))?0===t.length:0===g.keys(t).length)},g.isElement=function(t){return!(!t||1!==t.nodeType)},g.isArray=f||function(t){return"[object Array]"===l.call(t)},g.isObject=function(t){var n=typeof t;return"function"===n||"object"===n&&!!t},g.each(["Arguments","Function","String","Number","Date","RegExp","Error"],function(t){g["is"+t]=function(n){return l.call(n)==="[object "+t+"]"}}),g.isArguments(arguments)||(g.isArguments=function(t){return g.has(t,"callee")}),"function"!=typeof/./&&"object"!=typeof Int8Array&&(g.isFunction=function(t){return"function"==typeof t||!1}),g.isFinite=function(t){return isFinite(t)&&!isNaN(parseFloat(t))},g.isNaN=function(t){return g.isNumber(t)&&t!==+t},g.isBoolean=function(t){return!0===t||!1===t||"[object Boolean]"===l.call(t)},g.isNull=function(t){return null===t},g.isUndefined=function(t){return void 0===t},g.has=function(t,n){return null!=t&&p.call(t,n)},g.noConflict=function(){return r._=a,this},g.identity=function(t){return t},g.constant=function(t){return function(){return t}},g.noop=function(){},g.property=w,g.propertyOf=function(t){return null==t?function(){}:function(n){return t[n]}},g.matcher=g.matches=function(t){return t=g.extendOwn({},t),function(n){return g.isMatch(n,t)}},g.times=function(t,n,r){var e=Array(Math.max(0,t));n=x(n,r,1);for(var a=0;a<t;a++)e[a]=n(a);return e},g.random=function(t,n){return null==n&&(n=t,t=0),t+Math.floor(Math.random()*(n-t+1))},g.now=Date.now||function(){return(new Date).getTime()};var q={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},B=g.invert(q),K=function(t){var n=function(n){return t[n]},r="(?:"+g.keys(t).join("|")+")",e=RegExp(r),a=RegExp(r,"g");return function(t){return t=null==t?"":""+t,e.test(t)?t.replace(a,n):t}};g.escape=K(q),g.unescape=K(B),g.result=function(t,n,r){var e=null==t?void 0:t[n];return void 0===e&&(e=r),g.isFunction(e)?e.call(t):e};var L=0;g.uniqueId=function(t){var n=++L+"";return t?t+n:n},g.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var D=/(.)^/,J={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},R=/\\|'|\r|\n|\u2028|\u2029/g,H=function(t){return"\\"+J[t]};g.template=function(t,n,r){!n&&r&&(n=r),n=g.defaults({},n,g.templateSettings);var e=RegExp([(n.escape||D).source,(n.interpolate||D).source,(n.evaluate||D).source].join("|")+"|$","g"),a=0,o="__p+='";t.replace(e,function(n,r,e,i,s){return o+=t.slice(a,s).replace(R,H),a=s+n.length,r?o+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'":e?o+="'+\n((__t=("+e+"))==null?'':__t)+\n'":i&&(o+="';\n"+i+"\n__p+='"),n}),o+="';\n",n.variable||(o="with(obj||{}){\n"+o+"}\n"),o="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+o+"return __p;\n";try{var i=new Function(n.variable||"obj","_",o)}catch(t){throw t.source=o,t}var s=function(t){return i.call(this,t,g)},c=n.variable||"obj";return s.source="function("+c+"){\n"+o+"}",s},g.chain=function(t){var n=g(t);return n._chain=!0,n};var P=function(t,n){return t._chain?g(n).chain():n};g.mixin=function(t){g.each(g.functions(t),function(n){var r=g[n]=t[n];g.prototype[n]=function(){var t=[this._wrapped];return c.apply(t,arguments),P(this,r.apply(g,t))}})},g.mixin(g),g.each(["pop","push","reverse","shift","sort","splice","unshift"],function(t){var n=o[t];g.prototype[t]=function(){var r=this._wrapped;return n.apply(r,arguments),"shift"!==t&&"splice"!==t||0!==r.length||delete r[0],P(this,r)}}),g.each(["concat","join","slice"],function(t){var n=o[t];g.prototype[t]=function(){return P(this,n.apply(this._wrapped,arguments))}}),g.prototype.value=function(){return this._wrapped},g.prototype.valueOf=g.prototype.toJSON=g.prototype.value,g.prototype.toString=function(){return""+this._wrapped},void 0===(e=function(){return g}.apply(n,[]))||(t.exports=e)}).call(this)}});