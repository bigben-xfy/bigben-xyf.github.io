(window.webpackJsonp=window.webpackJsonp||[]).push([[321],{876:function(s,a,t){"use strict";t.r(a);var r=t(5),e={data:function(){return{dateFormat:"YYYY/MM/DD",monthFormat:"YYYY/MM"}},methods:{moment:t.n(r).a}},n=t(92),l=Object(n.a)(e,(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("div",[[t("demo-box-code",{attrs:{title:"日期格式",usTitle:"Date Format"}},[t("template",{slot:"demo"},[t("div",[t("a-date-picker",{attrs:{defaultValue:s.moment("2015/01/01",s.dateFormat),format:s.dateFormat}}),s._v(" "),t("br"),s._v(" "),t("a-month-picker",{attrs:{defaultValue:s.moment("2015/01",s.monthFormat),format:s.monthFormat}}),s._v(" "),t("br"),s._v(" "),t("a-range-picker",{attrs:{defaultValue:[s.moment("2015/01/01",s.dateFormat),s.moment("2015/01/01",s.dateFormat)],format:s.dateFormat}})],1)]),s._v(" "),t("template",{slot:"description"},[t("p",[s._v("使用 "),t("code",{pre:!0},[s._v("format")]),s._v(" 属性，可以自定义日期显示格式。")])]),s._v(" "),t("template",{slot:"code"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-date-picker")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":defaultValue")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("\"moment('2015/01/01', dateFormat)\"")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":format")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"dateFormat"')]),s._v(" />")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("br")]),s._v(" />")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-month-picker")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":defaultValue")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("\"moment('2015/01', monthFormat)\"")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":format")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"monthFormat"')]),s._v(" />")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("br")]),s._v(" />")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-range-picker")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":defaultValue")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("\"[moment('2015/01/01', dateFormat), moment('2015/01/01', dateFormat)]\"")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":format")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"dateFormat"')]),s._v("\n    />")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"javascript"}},[s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" moment "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'moment'")]),s._v(";\n  "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    data() {\n      "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("dateFormat")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'YYYY/MM/DD'")]),s._v(",\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("monthFormat")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'YYYY/MM'")]),s._v(",\n      };\n    },\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n      moment,\n    },\n  };\n")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])])],2)]],2)}),[],!1,null,null,null);a.default=l.exports}}]);