(window.webpackJsonp=window.webpackJsonp||[]).push([[145],{681:function(s,a,t){},805:function(s,a,t){"use strict";var n=t(681);t.n(n).a},986:function(s,a,t){"use strict";t.r(a);var n={data:function(){return{spinning:!1}},methods:{changeSpinning:function(){this.spinning=!this.spinning}}},r=(t(805),t(92)),p=Object(r.a)(n,(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("div",[[t("demo-box-code",{attrs:{title:"卡片加载中",usTitle:"Embedded mode"}},[t("template",{slot:"demo"},[t("div",[t("a-spin",{attrs:{spinning:s.spinning}},[t("div",{staticClass:"spin-content"},[s._v("\n        可以点击‘切换’按钮，控制本区域的spin展示。\n      ")])]),s._v("\n    Loading state："),t("a-switch",{model:{value:s.spinning,callback:function(a){s.spinning=a},expression:"spinning"}})],1)]),s._v(" "),t("template",{slot:"description"},[t("p",[s._v("可以直接把内容内嵌到 "),t("code",{pre:!0},[s._v("Spin")]),s._v(" 中，将现有容器变为加载状态。")])]),s._v(" "),t("template",{slot:"code"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("style")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("scoped")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"css"}},[s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-selector-class"}},[s._v(".spin-content")]),s._v(" {\n    "),t("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("border")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1px")]),s._v(" solid "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("#91d5ff")]),s._v(";\n    "),t("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("background-color")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("#e6f7ff")]),s._v(";\n    "),t("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("padding")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("30px")]),s._v(";\n  }\n")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("style")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-spin")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":spinning")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"spinning"')]),s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"spin-content"')]),s._v(">")]),s._v("\n        可以点击‘切换’按钮，控制本区域的spin展示。\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-spin")]),s._v(">")]),s._v("\n    Loading state："),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-switch")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"spinning"')]),s._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-switch")]),s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"javascript"}},[s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    data() {\n      "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("spinning")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("false")]),s._v(",\n      };\n    },\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n      changeSpinning() {\n        "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".spinning = !"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".spinning;\n      },\n    },\n  };\n")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])])],2)]],2)}),[],!1,null,"2802e9be",null);a.default=p.exports}}]);