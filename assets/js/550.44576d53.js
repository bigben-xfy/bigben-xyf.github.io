(window.webpackJsonp=window.webpackJsonp||[]).push([[550],{1004:function(s,a,t){"use strict";t.r(a);t(5);var n={data:function(){return{open:!1,open2:!1}},methods:{handleOpenChange:function(s){console.log("open",s),this.open=s},handleClose:function(){this.open=!1,this.open2=!1}}},r=t(92),e=Object(r.a)(n,(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("div",[[t("demo-box-code",{attrs:{title:"附加内容",usTitle:"Addon"}},[t("template",{slot:"demo"},[t("div",[t("a-time-picker",{attrs:{open:s.open},on:{openChange:s.handleOpenChange},scopedSlots:s._u([{key:"addon",fn:function(a){return t("a-button",{attrs:{size:"small",type:"primary"},on:{click:s.handleClose}},[s._v("Ok "+s._s(a.prefixCls))])}}])}),s._v(" "),t("a-time-picker",{attrs:{open:s.open2},on:{"update:open":function(a){s.open2=a}}},[t("a-button",{attrs:{slot:"addon",size:"small",type:"primary"},on:{click:s.handleClose},slot:"addon"},[s._v("Ok")])],1)],1)]),s._v(" "),t("template",{slot:"description"},[t("p",[s._v("在 TimePicker 选择框底部显示自定义的内容。")])]),s._v(" "),t("template",{slot:"code"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-time-picker")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@openChange")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"handleOpenChange"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":open")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"open"')]),s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-button")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("slot")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"addon"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("slot-scope")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"panel"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("size")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"small"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("type")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"primary"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@click")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"handleClose"')]),s._v("\n        >")]),s._v("Ok "),t("span",[s._v("{{")]),s._v("panel.prefixCls"),t("span",[s._v("}}")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-button")]),s._v("\n      >")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-time-picker")]),s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-time-picker")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":open.sync")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"open2"')]),s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-button")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("slot")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"addon"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("size")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"small"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("type")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"primary"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@click")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"handleClose"')]),s._v(">")]),s._v("Ok"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-button")]),s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-time-picker")]),s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"javascript"}},[s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" moment "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'moment'")]),s._v(";\n  "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    data() {\n      "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("open")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("false")]),s._v(",\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("open2")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("false")]),s._v(",\n      };\n    },\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n      handleOpenChange(open) {\n        "),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'open'")]),s._v(", open);\n        "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".open = open;\n      },\n      handleClose() {\n        "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".open = "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("false")]),s._v(";\n        "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".open2 = "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("false")]),s._v(";\n      },\n    },\n  };\n")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])])],2)]],2)}),[],!1,null,null,null);a.default=e.exports}}]);