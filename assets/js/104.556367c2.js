(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{631:function(s,a,t){},698:function(s,a,t){"use strict";var r=t(631);t.n(r).a},709:function(s,a,t){"use strict";t.r(a);t(698);var r=t(92),e=Object(r.a)({},(function(){var s=this,a=this,t=a.$createElement,r=a._self._c||t;return r("div",[[r("demo-box-code",{attrs:{title:"滚动容器",usTitle:"Container to scroll."}},[r("template",{slot:"demo"},[r("div",{ref:"container",staticClass:"scrollable-container",attrs:{id:"components-affix-demo-target"}},[r("div",{staticClass:"background"},[r("a-affix",{attrs:{target:function(){return s.$refs.container}}},[r("a-button",{attrs:{type:"primary"}},[a._v("\n          Fixed at the top of container\n        ")])],1)],1)])]),a._v(" "),r("template",{slot:"description"},[r("p",[a._v("用 "),r("code",{pre:!0},[a._v("target")]),a._v(" 设置 "),r("code",{pre:!0},[a._v("Affix")]),a._v(" 需要监听其滚动事件的元素，默认为 "),r("code",{pre:!0},[a._v("window")]),a._v("。")])]),a._v(" "),r("template",{slot:"code"},[r("pre",{pre:!0},[r("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[r("span",{pre:!0,attrs:{class:"hljs-tag"}},[a._v("<"),r("span",{pre:!0,attrs:{class:"hljs-name"}},[a._v("template")]),a._v(">")]),a._v("\n  "),r("span",{pre:!0,attrs:{class:"hljs-tag"}},[a._v("<"),r("span",{pre:!0,attrs:{class:"hljs-name"}},[a._v("div")]),a._v(" "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[a._v("id")]),a._v("="),r("span",{pre:!0,attrs:{class:"hljs-string"}},[a._v('"components-affix-demo-target"')]),a._v(" "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[a._v("class")]),a._v("="),r("span",{pre:!0,attrs:{class:"hljs-string"}},[a._v('"scrollable-container"')]),a._v(" "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[a._v("ref")]),a._v("="),r("span",{pre:!0,attrs:{class:"hljs-string"}},[a._v('"container"')]),a._v(">")]),a._v("\n    "),r("span",{pre:!0,attrs:{class:"hljs-tag"}},[a._v("<"),r("span",{pre:!0,attrs:{class:"hljs-name"}},[a._v("div")]),a._v(" "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[a._v("class")]),a._v("="),r("span",{pre:!0,attrs:{class:"hljs-string"}},[a._v('"background"')]),a._v(">")]),a._v("\n      "),r("span",{pre:!0,attrs:{class:"hljs-tag"}},[a._v("<"),r("span",{pre:!0,attrs:{class:"hljs-name"}},[a._v("a-affix")]),a._v(" "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[a._v(":target")]),a._v("="),r("span",{pre:!0,attrs:{class:"hljs-string"}},[a._v('"() => this.$refs.container"')]),a._v(">")]),a._v("\n        "),r("span",{pre:!0,attrs:{class:"hljs-tag"}},[a._v("<"),r("span",{pre:!0,attrs:{class:"hljs-name"}},[a._v("a-button")]),a._v(" "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[a._v("type")]),a._v("="),r("span",{pre:!0,attrs:{class:"hljs-string"}},[a._v('"primary"')]),a._v(">")]),a._v("\n          Fixed at the top of container\n        "),r("span",{pre:!0,attrs:{class:"hljs-tag"}},[a._v("</"),r("span",{pre:!0,attrs:{class:"hljs-name"}},[a._v("a-button")]),a._v(">")]),a._v("\n      "),r("span",{pre:!0,attrs:{class:"hljs-tag"}},[a._v("</"),r("span",{pre:!0,attrs:{class:"hljs-name"}},[a._v("a-affix")]),a._v(">")]),a._v("\n    "),r("span",{pre:!0,attrs:{class:"hljs-tag"}},[a._v("</"),r("span",{pre:!0,attrs:{class:"hljs-name"}},[a._v("div")]),a._v(">")]),a._v("\n  "),r("span",{pre:!0,attrs:{class:"hljs-tag"}},[a._v("</"),r("span",{pre:!0,attrs:{class:"hljs-name"}},[a._v("div")]),a._v(">")]),a._v("\n"),r("span",{pre:!0,attrs:{class:"hljs-tag"}},[a._v("</"),r("span",{pre:!0,attrs:{class:"hljs-name"}},[a._v("template")]),a._v(">")]),a._v("\n"),r("span",{pre:!0,attrs:{class:"hljs-tag"}},[a._v("<"),r("span",{pre:!0,attrs:{class:"hljs-name"}},[a._v("style")]),a._v(">")]),r("span",{pre:!0,attrs:{class:"css"}},[a._v("\n  "),r("span",{pre:!0,attrs:{class:"hljs-selector-id"}},[a._v("#components-affix-demo-target")]),r("span",{pre:!0,attrs:{class:"hljs-selector-class"}},[a._v(".scrollable-container")]),a._v(" {\n    "),r("span",{pre:!0,attrs:{class:"hljs-attribute"}},[a._v("height")]),a._v(": "),r("span",{pre:!0,attrs:{class:"hljs-number"}},[a._v("100px")]),a._v(";\n    "),r("span",{pre:!0,attrs:{class:"hljs-attribute"}},[a._v("overflow-y")]),a._v(": scroll;\n  }\n  "),r("span",{pre:!0,attrs:{class:"hljs-selector-id"}},[a._v("#components-affix-demo-target")]),a._v(" "),r("span",{pre:!0,attrs:{class:"hljs-selector-class"}},[a._v(".background")]),a._v(" {\n    "),r("span",{pre:!0,attrs:{class:"hljs-attribute"}},[a._v("padding-top")]),a._v(": "),r("span",{pre:!0,attrs:{class:"hljs-number"}},[a._v("60px")]),a._v(";\n    "),r("span",{pre:!0,attrs:{class:"hljs-attribute"}},[a._v("height")]),a._v(": "),r("span",{pre:!0,attrs:{class:"hljs-number"}},[a._v("300px")]),a._v(";\n    "),r("span",{pre:!0,attrs:{class:"hljs-attribute"}},[a._v("background-image")]),a._v(": "),r("span",{pre:!0,attrs:{class:"hljs-built_in"}},[a._v("url")]),a._v("("),r("span",{pre:!0,attrs:{class:"hljs-string"}},[a._v("'https://zos.alipayobjects.com/rmsportal/RmjwQiJorKyobvI.jpg'")]),a._v(");\n  }\n")]),r("span",{pre:!0,attrs:{class:"hljs-tag"}},[a._v("</"),r("span",{pre:!0,attrs:{class:"hljs-name"}},[a._v("style")]),a._v(">")]),a._v("\n")])])])],2)]],2)}),[],!1,null,null,null);a.default=e.exports}}]);