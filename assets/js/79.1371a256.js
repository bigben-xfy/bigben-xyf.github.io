(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{566:function(t,s){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},567:function(t,s,e){t.exports=!e(569)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},568:function(t,s){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},569:function(t,s){t.exports=function(t){try{return!!t()}catch(t){return!0}}},570:function(t,s,e){var a=e(568);t.exports=function(t){if(!a(t))throw TypeError(t+" is not an object!");return t}},574:function(t,s,e){var a=e(570),n=e(584),r=e(580),l=Object.defineProperty;s.f=e(567)?Object.defineProperty:function(t,s,e){if(a(t),s=r(s,!0),a(e),n)try{return l(t,s,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[s]=e.value),t}},579:function(t,s,e){var a=e(568),n=e(566).document,r=a(n)&&a(n.createElement);t.exports=function(t){return r?n.createElement(t):{}}},580:function(t,s,e){var a=e(568);t.exports=function(t,s){if(!a(t))return t;var e,n;if(s&&"function"==typeof(e=t.toString)&&!a(n=e.call(t)))return n;if("function"==typeof(e=t.valueOf)&&!a(n=e.call(t)))return n;if(!s&&"function"==typeof(e=t.toString)&&!a(n=e.call(t)))return n;throw TypeError("Can't convert object to primitive value")}},584:function(t,s,e){t.exports=!e(567)&&!e(569)((function(){return 7!=Object.defineProperty(e(579)("div"),"a",{get:function(){return 7}}).a}))},626:function(t,s,e){var a=e(574).f,n=Function.prototype,r=/^\s*function ([^ (]*)/;"name"in n||e(567)&&a(n,"name",{configurable:!0,get:function(){try{return(""+this).match(r)[1]}catch(t){return""}}})},690:function(t,s,e){var a,n,r;n=[s,t],void 0===(r="function"==typeof(a=function(t,s){"use strict";var e={timeout:5e3,jsonpCallback:"callback",jsonpCallbackFunction:null};function a(t){try{delete window[t]}catch(s){window[t]=void 0}}function n(t){var s=document.getElementById(t);s&&document.getElementsByTagName("head")[0].removeChild(s)}s.exports=function(t){var s=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],r=t,l=s.timeout||e.timeout,c=s.jsonpCallback||e.jsonpCallback,p=void 0;return new Promise((function(e,o){var v=s.jsonpCallbackFunction||"jsonp_"+Date.now()+"_"+Math.ceil(1e5*Math.random()),i=c+"_"+v;window[v]=function(t){e({ok:!0,json:function(){return Promise.resolve(t)}}),p&&clearTimeout(p),n(i),a(v)},r+=-1===r.indexOf("?")?"?":"&";var _=document.createElement("script");_.setAttribute("src",""+r+c+"="+v),s.charset&&_.setAttribute("charset",s.charset),_.id=i,document.getElementsByTagName("head")[0].appendChild(_),p=setTimeout((function(){o(new Error("JSONP request to "+t+" timed out")),a(v),n(i),window[v]=function(){a(v)}}),l),_.onerror=function(){o(new Error("JSONP request to "+t+" failed")),a(v),n(i),p&&clearTimeout(p)}}))}})?a.apply(s,n):a)||(t.exports=r)},691:function(t,s,e){"use strict";s.decode=s.parse=e(700),s.encode=s.stringify=e(701)},700:function(t,s,e){"use strict";function a(t,s){return Object.prototype.hasOwnProperty.call(t,s)}t.exports=function(t,s,e,r){s=s||"&",e=e||"=";var l={};if("string"!=typeof t||0===t.length)return l;var c=/\+/g;t=t.split(s);var p=1e3;r&&"number"==typeof r.maxKeys&&(p=r.maxKeys);var o=t.length;p>0&&o>p&&(o=p);for(var v=0;v<o;++v){var i,_,h,u,f=t[v].replace(c,"%20"),d=f.indexOf(e);d>=0?(i=f.substr(0,d),_=f.substr(d+1)):(i=f,_=""),h=decodeURIComponent(i),u=decodeURIComponent(_),a(l,h)?n(l[h])?l[h].push(u):l[h]=[l[h],u]:l[h]=u}return l};var n=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)}},701:function(t,s,e){"use strict";var a=function(t){switch(typeof t){case"string":return t;case"boolean":return t?"true":"false";case"number":return isFinite(t)?t:"";default:return""}};t.exports=function(t,s,e,c){return s=s||"&",e=e||"=",null===t&&(t=void 0),"object"==typeof t?r(l(t),(function(l){var c=encodeURIComponent(a(l))+e;return n(t[l])?r(t[l],(function(t){return c+encodeURIComponent(a(t))})).join(s):c+encodeURIComponent(a(t[l]))})).join(s):c?encodeURIComponent(a(c))+e+encodeURIComponent(a(t)):""};var n=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)};function r(t,s){if(t.map)return t.map(s);for(var e=[],a=0;a<t.length;a++)e.push(s(t[a],a));return e}var l=Object.keys||function(t){var s=[];for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&s.push(e);return s}},971:function(t,s,e){"use strict";e.r(s);e(626),e(690),e(691);var a=e(33),n=e.n(a),r={data:function(){return this.lastFetchId=0,this.fetchUser=n()(this.fetchUser,800),{data:[],value:[],fetching:!1}},methods:{fetchUser:function(t){var s=this;console.log("fetching user",t),this.lastFetchId+=1;var e=this.lastFetchId;this.data=[],this.fetching=!0,fetch("https://randomuser.me/api/?results=5").then((function(t){return t.json()})).then((function(t){if(e===s.lastFetchId){var a=t.results.map((function(t){return{text:"".concat(t.name.first," ").concat(t.name.last),value:t.login.username}}));s.data=a,s.fetching=!1}}))},handleChange:function(t){Object.assign(this,{value:t,data:[],fetching:!1})}}},l=e(92),c=Object(l.a)(r,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[[e("demo-box-code",{attrs:{title:"搜索用户",usTitle:"Search and Select Users"}},[e("template",{slot:"demo"},[e("a-select",{staticStyle:{width:"100%"},attrs:{mode:"multiple",labelInValue:"",value:t.value,placeholder:"Select users",filterOption:!1,notFoundContent:t.fetching?void 0:null},on:{search:t.fetchUser,change:t.handleChange}},[t.fetching?e("a-spin",{attrs:{slot:"notFoundContent",size:"small"},slot:"notFoundContent"}):t._e(),t._v(" "),t._l(t.data,(function(s){return e("a-select-option",{key:s.value},[t._v(t._s(s.text))])}))],2)],1),t._v(" "),e("template",{slot:"description"},[e("p",[t._v("一个带有远程搜索，节流控制，请求时序控制，加载状态的多选示例。")])]),t._v(" "),e("template",{slot:"code"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("a-select")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("mode")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"multiple"')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("labelInValue")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":value")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"value"')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("placeholder")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"Select users"')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("style")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"width: 100%"')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":filterOption")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"false"')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("@search")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"fetchUser"')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("@change")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"handleChange"')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":notFoundContent")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"fetching ? undefined : null"')]),t._v("\n  >")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("a-spin")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("v-if")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"fetching"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("slot")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"notFoundContent"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("size")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"small"')]),t._v(" />")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("a-select-option")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("v-for")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"d in data"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":key")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"d.value"')]),t._v(">")]),e("span",[t._v("{{")]),t._v("d.text"),e("span",[t._v("}}")]),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("a-select-option")]),t._v(">")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("a-select")]),t._v(">")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),e("span",{pre:!0,attrs:{class:"javascript"}},[t._v("\n  "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("import")]),t._v(" jsonp "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'fetch-jsonp'")]),t._v(";\n  "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("import")]),t._v(" querystring "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'querystring'")]),t._v(";\n  "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("import")]),t._v(" debounce "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'lodash/debounce'")]),t._v(";\n\n  "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("default")]),t._v(" {\n    data() {\n      "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".lastFetchId = "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("0")]),t._v(";\n      "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".fetchUser = debounce("),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".fetchUser, "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("800")]),t._v(");\n      "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v(" {\n        "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("data")]),t._v(": [],\n        "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("value")]),t._v(": [],\n        "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("fetching")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-literal"}},[t._v("false")]),t._v(",\n      };\n    },\n    "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("methods")]),t._v(": {\n      fetchUser(value) {\n        "),e("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("console")]),t._v(".log("),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'fetching user'")]),t._v(", value);\n        "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".lastFetchId += "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("1")]),t._v(";\n        "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("const")]),t._v(" fetchId = "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".lastFetchId;\n        "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".data = [];\n        "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".fetching = "),e("span",{pre:!0,attrs:{class:"hljs-literal"}},[t._v("true")]),t._v(";\n        fetch("),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'https://randomuser.me/api/?results=5'")]),t._v(")\n          .then("),e("span",{pre:!0,attrs:{class:"hljs-function"}},[e("span",{pre:!0,attrs:{class:"hljs-params"}},[t._v("response")]),t._v(" =>")]),t._v(" response.json())\n          .then("),e("span",{pre:!0,attrs:{class:"hljs-function"}},[e("span",{pre:!0,attrs:{class:"hljs-params"}},[t._v("body")]),t._v(" =>")]),t._v(" {\n            "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("if")]),t._v(" (fetchId !== "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".lastFetchId) {\n              "),e("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("// for fetch callback order")]),t._v("\n              "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v(";\n            }\n            "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("const")]),t._v(" data = body.results.map("),e("span",{pre:!0,attrs:{class:"hljs-function"}},[e("span",{pre:!0,attrs:{class:"hljs-params"}},[t._v("user")]),t._v(" =>")]),t._v(" ({\n              "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("text")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("`"),e("span",{pre:!0,attrs:{class:"hljs-subst"}},[t._v("${user.name.first}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-subst"}},[t._v("${user.name.last}")]),t._v("`")]),t._v(",\n              "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("value")]),t._v(": user.login.username,\n            }));\n            "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".data = data;\n            "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".fetching = "),e("span",{pre:!0,attrs:{class:"hljs-literal"}},[t._v("false")]),t._v(";\n          });\n      },\n      handleChange(value) {\n        "),e("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("Object")]),t._v(".assign("),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(", {\n          value,\n          "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("data")]),t._v(": [],\n          "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("fetching")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-literal"}},[t._v("false")]),t._v(",\n        });\n      },\n    },\n  };\n")]),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),t._v("\n")])])])],2)]],2)}),[],!1,null,null,null);s.default=c.exports}}]);