(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{1031:function(s,t,a){"use strict";a.r(t);a(626);var e={data:function(){return{headers:{authorization:"authorization-text"}}},methods:{handleChange:function(s){"uploading"!==s.file.status&&console.log(s.file,s.fileList),"done"===s.file.status?this.$message.success("".concat(s.file.name," file uploaded successfully")):"error"===s.file.status&&this.$message.error("".concat(s.file.name," file upload failed."))}}},n=a(92),r=Object(n.a)(e,(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",[[a("demo-box-code",{attrs:{title:"点击上传",usTitle:"Upload by clicking"}},[a("template",{slot:"demo"},[a("a-upload",{attrs:{name:"file",multiple:!0,action:"https://www.mocky.io/v2/5cc8019d300000980a055e76",headers:s.headers},on:{change:s.handleChange}},[a("a-button",[a("a-icon",{attrs:{type:"upload"}}),s._v(" Click to Upload ")],1)],1)],1),s._v(" "),a("template",{slot:"description"},[a("p",[s._v("经典款式，用户点击按钮弹出文件选择框。")])]),s._v(" "),a("template",{slot:"code"},[a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-upload")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"file"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":multiple")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"true"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("action")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"https://www.mocky.io/v2/5cc8019d300000980a055e76"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":headers")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"headers"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@change")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"handleChange"')]),s._v("\n  >")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-button")]),s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-icon")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("type")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"upload"')]),s._v(" />")]),s._v(" Click to Upload "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-button")]),s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-upload")]),s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),a("span",{pre:!0,attrs:{class:"javascript"}},[s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    data() {\n      "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("headers")]),s._v(": {\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("authorization")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'authorization-text'")]),s._v(",\n        },\n      };\n    },\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n      handleChange(info) {\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("if")]),s._v(" (info.file.status !== "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'uploading'")]),s._v(") {\n          "),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log(info.file, info.fileList);\n        }\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("if")]),s._v(" (info.file.status === "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'done'")]),s._v(") {\n          "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".$message.success("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("`"),a("span",{pre:!0,attrs:{class:"hljs-subst"}},[s._v("${info.file.name}")]),s._v(" file uploaded successfully`")]),s._v(");\n        } "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("else")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("if")]),s._v(" (info.file.status === "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'error'")]),s._v(") {\n          "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".$message.error("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("`"),a("span",{pre:!0,attrs:{class:"hljs-subst"}},[s._v("${info.file.name}")]),s._v(" file upload failed.`")]),s._v(");\n        }\n      },\n    },\n  };\n")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])])],2)]],2)}),[],!1,null,null,null);t.default=r.exports},566:function(s,t){var a=s.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=a)},567:function(s,t,a){s.exports=!a(569)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},568:function(s,t){s.exports=function(s){return"object"==typeof s?null!==s:"function"==typeof s}},569:function(s,t){s.exports=function(s){try{return!!s()}catch(s){return!0}}},570:function(s,t,a){var e=a(568);s.exports=function(s){if(!e(s))throw TypeError(s+" is not an object!");return s}},574:function(s,t,a){var e=a(570),n=a(584),r=a(580),l=Object.defineProperty;t.f=a(567)?Object.defineProperty:function(s,t,a){if(e(s),t=r(t,!0),e(a),n)try{return l(s,t,a)}catch(s){}if("get"in a||"set"in a)throw TypeError("Accessors not supported!");return"value"in a&&(s[t]=a.value),s}},579:function(s,t,a){var e=a(568),n=a(566).document,r=e(n)&&e(n.createElement);s.exports=function(s){return r?n.createElement(s):{}}},580:function(s,t,a){var e=a(568);s.exports=function(s,t){if(!e(s))return s;var a,n;if(t&&"function"==typeof(a=s.toString)&&!e(n=a.call(s)))return n;if("function"==typeof(a=s.valueOf)&&!e(n=a.call(s)))return n;if(!t&&"function"==typeof(a=s.toString)&&!e(n=a.call(s)))return n;throw TypeError("Can't convert object to primitive value")}},584:function(s,t,a){s.exports=!a(567)&&!a(569)((function(){return 7!=Object.defineProperty(a(579)("div"),"a",{get:function(){return 7}}).a}))},626:function(s,t,a){var e=a(574).f,n=Function.prototype,r=/^\s*function ([^ (]*)/;"name"in n||a(567)&&e(n,"name",{configurable:!0,get:function(){try{return(""+this).match(r)[1]}catch(s){return""}}})}}]);