(window.webpackJsonp=window.webpackJsonp||[]).push([[271],{843:function(s,a,t){"use strict";t.r(a);var r={data:function(){return{loading:!1,iconLoading:!1}},methods:{enterLoading:function(){this.loading=!0},enterIconLoading:function(){this.iconLoading={delay:1e3}}}},n=t(92),l=Object(n.a)(r,(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("div",[[t("demo-box-code",{attrs:{title:"加载中状态",usTitle:"Loading"}},[t("template",{slot:"demo"},[t("div",[t("a-button",{attrs:{type:"primary",loading:""}},[s._v("\n      Loading\n    ")]),s._v(" "),t("a-button",{attrs:{type:"primary",size:"small",loading:""}},[s._v("\n      Loading\n    ")]),s._v(" "),t("br"),s._v(" "),t("a-button",{attrs:{type:"primary",loading:s.loading},on:{mouseenter:s.enterLoading}},[s._v("\n      mouseenter me!\n    ")]),s._v(" "),t("a-button",{attrs:{type:"primary",icon:"poweroff",loading:s.iconLoading},on:{click:s.enterIconLoading}},[s._v("\n      延迟1s\n    ")]),s._v(" "),t("br"),s._v(" "),t("a-button",{attrs:{type:"primary",loading:""}}),s._v(" "),t("a-button",{attrs:{shape:"circle",loading:""}}),s._v(" "),t("a-button",{attrs:{type:"primary",shape:"circle",loading:""}})],1)]),s._v(" "),t("template",{slot:"description"},[t("p",[s._v("添加 "),t("code",{pre:!0},[s._v("loading")]),s._v(" 属性即可让按钮处于加载状态，最后两个按钮演示点击后进入加载状态。")])]),s._v(" "),t("template",{slot:"code"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-button")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("type")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"primary"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("loading")]),s._v(">")]),s._v("\n      Loading\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-button")]),s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-button")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("type")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"primary"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("size")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"small"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("loading")]),s._v(">")]),s._v("\n      Loading\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-button")]),s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("br")]),s._v(" />")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-button")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("type")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"primary"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":loading")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"loading"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@mouseenter")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"enterLoading"')]),s._v(">")]),s._v("\n      mouseenter me!\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-button")]),s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-button")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("type")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"primary"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("icon")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"poweroff"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":loading")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"iconLoading"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@click")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"enterIconLoading"')]),s._v(">")]),s._v("\n      延迟1s\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-button")]),s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("br")]),s._v(" />")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-button")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("type")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"primary"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("loading")]),s._v(" />")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-button")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("shape")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"circle"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("loading")]),s._v(" />")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-button")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("type")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"primary"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("shape")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"circle"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("loading")]),s._v(" />")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"javascript"}},[s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    data() {\n      "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("loading")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("false")]),s._v(",\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("iconLoading")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("false")]),s._v(",\n      };\n    },\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n      enterLoading() {\n        "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".loading = "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(";\n      },\n      enterIconLoading() {\n        "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".iconLoading = { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("delay")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1000")]),s._v(" };\n      },\n    },\n  };\n")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])])],2)]],2)}),[],!1,null,null,null);a.default=l.exports}}]);