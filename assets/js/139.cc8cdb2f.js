(window.webpackJsonp=window.webpackJsonp||[]).push([[139],{675:function(s,a,t){},799:function(s,a,t){"use strict";var r=t(675);t.n(r).a},979:function(s,a,t){"use strict";t.r(a);var r={data:function(){return{value:0,min:0,max:20}},methods:{handleChange:function(s){this.value=s}},computed:{preColor:function(){var s=this.max,a=this.min,t=this.value,r=((s-a)/2).toFixed(5);return t>=r?"":"rgba(0, 0, 0, .45)"},nextColor:function(){var s=this.max,a=this.min;return this.value>=((s-a)/2).toFixed(5)?"rgba(0, 0, 0, .45)":""}}},l=(t(799),t(92)),n=Object(l.a)(r,(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("div",[[t("demo-box-code",{attrs:{title:"带 icon 的滑块",usTitle:"Slider with icon"}},[t("template",{slot:"demo"},[t("div",{staticClass:"icon-wrapper"},[t("a-icon",{style:{color:s.preColor},attrs:{type:"frown-o"}}),s._v(" "),t("a-slider",{attrs:{min:0,max:20,value:s.value},on:{change:s.handleChange}}),s._v(" "),t("a-slider",{attrs:{min:0,max:20},model:{value:s.value,callback:function(a){s.value=a},expression:"value"}}),s._v(" "),t("a-icon",{style:{color:s.nextColor},attrs:{type:"smile-o"}})],1)]),s._v(" "),t("template",{slot:"description"},[t("p",[s._v("滑块左右可以设置图标来表达业务含义。")])]),s._v(" "),t("template",{slot:"code"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"icon-wrapper"')]),s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-icon")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":style")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"{color: preColor}"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("type")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"frown-o"')]),s._v(" />")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-slider")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":min")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"0"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":max")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"20"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@change")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"handleChange"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":value")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"value"')]),s._v(" />")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-slider")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":min")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"0"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":max")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"20"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"value"')]),s._v(" />")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-icon")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":style")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"{color: nextColor}"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("type")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"smile-o"')]),s._v(" />")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"javascript"}},[s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    data() {\n      "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(",\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("min")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(",\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("max")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("20")]),s._v(",\n      };\n    },\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n      handleChange(value) {\n        "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".value = value;\n      },\n    },\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("computed")]),s._v(": {\n      preColor() {\n        "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" { max, min, value } = "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(";\n        "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" mid = ((max - min) / "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("2")]),s._v(").toFixed("),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("5")]),s._v(");\n        "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" value >= mid ? "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("''")]),s._v(" : "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'rgba(0, 0, 0, .45)'")]),s._v(";\n        "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" nextColor = value >= mid ? "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'rgba(0, 0, 0, .45)'")]),s._v(" : "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("''")]),s._v(";\n      },\n      nextColor() {\n        "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" { max, min, value } = "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(";\n        "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" mid = ((max - min) / "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("2")]),s._v(").toFixed("),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("5")]),s._v(");\n        "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" value >= mid ? "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'rgba(0, 0, 0, .45)'")]),s._v(" : "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("''")]),s._v(";\n      },\n    },\n  };\n")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("style")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("scoped")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"css"}},[s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-selector-class"}},[s._v(".icon-wrapper")]),s._v(" {\n    "),t("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("position")]),s._v(": relative;\n    "),t("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("padding")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0px")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("30px")]),s._v(";\n  }\n\n  "),t("span",{pre:!0,attrs:{class:"hljs-selector-class"}},[s._v(".icon-wrapper")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-selector-class"}},[s._v(".anticon")]),s._v(" {\n    "),t("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("position")]),s._v(": absolute;\n    "),t("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("top")]),s._v(": -"),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("2px")]),s._v(";\n    "),t("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("width")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("16px")]),s._v(";\n    "),t("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("height")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("16px")]),s._v(";\n    "),t("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("line-height")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1")]),s._v(";\n    "),t("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("font-size")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("16px")]),s._v(";\n    "),t("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("color")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("rgba")]),s._v("("),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0.25")]),s._v(");\n  }\n\n  "),t("span",{pre:!0,attrs:{class:"hljs-selector-class"}},[s._v(".icon-wrapper")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-selector-class"}},[s._v(".anticon")]),t("span",{pre:!0,attrs:{class:"hljs-selector-pseudo"}},[s._v(":first-child")]),s._v(" {\n    "),t("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("left")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(";\n  }\n\n  "),t("span",{pre:!0,attrs:{class:"hljs-selector-class"}},[s._v(".icon-wrapper")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-selector-class"}},[s._v(".anticon")]),t("span",{pre:!0,attrs:{class:"hljs-selector-pseudo"}},[s._v(":last-child")]),s._v(" {\n    "),t("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("right")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(";\n  }\n")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("style")]),s._v(">")]),s._v("\n")])])])],2)]],2)}),[],!1,null,"2d60f2fa",null);a.default=n.exports}}]);