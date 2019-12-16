(window.webpackJsonp=window.webpackJsonp||[]).push([[453],{952:function(s,t,a){"use strict";a.r(t);var r={data:function(){return{percent:0}},methods:{increase:function(){var s=this.percent+10;s>100&&(s=100),this.percent=s},decline:function(){var s=this.percent-10;s<0&&(s=0),this.percent=s}}},e=a(92),n=Object(e.a)(r,(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",[[a("demo-box-code",{attrs:{title:"进度圈动态展示",usTitle:"Dynamic circular progress bar"}},[a("template",{slot:"demo"},[a("div",[a("a-progress",{attrs:{type:"circle",percent:s.percent}}),s._v(" "),a("a-button-group",[a("a-button",{attrs:{icon:"minus"},on:{click:s.decline}}),s._v(" "),a("a-button",{attrs:{icon:"plus"},on:{click:s.increase}})],1)],1)]),s._v(" "),a("template",{slot:"description"},[a("p",[s._v("会动的进度条才是好进度条。")])]),s._v(" "),a("template",{slot:"code"},[a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-progress")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("type")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"circle"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":percent")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"percent"')]),s._v(" />")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-button-group")]),s._v(">")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-button")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@click")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"decline"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("icon")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"minus"')]),s._v(" />")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-button")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@click")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"increase"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("icon")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"plus"')]),s._v(" />")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-button-group")]),s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),a("span",{pre:!0,attrs:{class:"javascript"}},[s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    data() {\n      "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("percent")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(",\n      };\n    },\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n      increase() {\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" percent = "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".percent + "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("10")]),s._v(";\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("if")]),s._v(" (percent > "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("100")]),s._v(") {\n          percent = "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("100")]),s._v(";\n        }\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".percent = percent;\n      },\n      decline() {\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" percent = "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".percent - "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("10")]),s._v(";\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("if")]),s._v(" (percent < "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(") {\n          percent = "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(";\n        }\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".percent = percent;\n      },\n    },\n  };\n")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])])],2)]],2)}),[],!1,null,null,null);t.default=n.exports}}]);