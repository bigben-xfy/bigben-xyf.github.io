(window.webpackJsonp=window.webpackJsonp||[]).push([[113],{650:function(s,a,t){},765:function(s,a,t){"use strict";var r=t(650);t.n(r).a},856:function(s,a,t){"use strict";t.r(a);var r="https://raw.githubusercontent.com/vueComponent/ant-design-vue/master/components/vc-slick/assets/img/react-slick/",l={data:function(){return{baseUrl:r}},methods:{getImgUrl:function(s){return"".concat(r,"abstract0").concat(s+1,".jpg")}}},e=(t(765),t(92)),n=Object(e.a)(l,(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("div",[[t("demo-box-code",{attrs:{title:"自定义分页",usTitle:"Custom Paging"}},[t("template",{slot:"demo"},[t("a-carousel",{attrs:{arrows:"",dotsClass:"slick-dots slick-thumb"},scopedSlots:s._u([{key:"customPaging",fn:function(a){return t("a",{},[t("img",{attrs:{src:s.getImgUrl(a.i)}})])}}])},[s._v(" "),s._l(4,(function(a){return t("div",[t("img",{attrs:{src:s.baseUrl+"abstract0"+a+".jpg"}})])}))],2)],1),s._v(" "),t("template",{slot:"description"},[t("p",[s._v("自定义分页展示。")])]),s._v(" "),t("template",{slot:"code"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-carousel")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("arrows")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("dotsClass")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"slick-dots slick-thumb"')]),s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("slot")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"customPaging"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("slot-scope")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"props"')]),s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("img")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":src")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"getImgUrl(props.i)"')]),s._v(" />")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a")]),s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-for")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"item in 4"')]),s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("img")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":src")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("\"baseUrl+'abstract0'+item+'.jpg'\"")]),s._v(" />")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-carousel")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"javascript"}},[s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" baseUrl =\n    "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'https://raw.githubusercontent.com/vueComponent/ant-design-vue/master/components/vc-slick/assets/img/react-slick/'")]),s._v(";\n  "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    data() {\n      "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n        baseUrl,\n      };\n    },\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n      getImgUrl(i) {\n        "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("`"),t("span",{pre:!0,attrs:{class:"hljs-subst"}},[s._v("${baseUrl}")]),s._v("abstract0"),t("span",{pre:!0,attrs:{class:"hljs-subst"}},[s._v("${i + "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1")]),s._v("}")]),s._v(".jpg`")]),s._v(";\n      },\n    },\n  };\n")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("style")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("scoped")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"css"}},[s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("/* For demo */")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-selector-class"}},[s._v(".ant-carousel")]),s._v(" >>> "),t("span",{pre:!0,attrs:{class:"hljs-selector-class"}},[s._v(".slick-dots")]),s._v(" {\n    "),t("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("height")]),s._v(": auto;\n  }\n  "),t("span",{pre:!0,attrs:{class:"hljs-selector-class"}},[s._v(".ant-carousel")]),s._v(" >>> "),t("span",{pre:!0,attrs:{class:"hljs-selector-class"}},[s._v(".slick-slide")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-selector-tag"}},[s._v("img")]),s._v(" {\n    "),t("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("border")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("5px")]),s._v(" solid "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("#fff")]),s._v(";\n    "),t("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("display")]),s._v(": block;\n    "),t("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("margin")]),s._v(": auto;\n    "),t("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("max-width")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("80%")]),s._v(";\n  }\n  "),t("span",{pre:!0,attrs:{class:"hljs-selector-class"}},[s._v(".ant-carousel")]),s._v(" >>> "),t("span",{pre:!0,attrs:{class:"hljs-selector-class"}},[s._v(".slick-thumb")]),s._v(" {\n    "),t("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("bottom")]),s._v(": -"),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("45px")]),s._v(";\n  }\n  "),t("span",{pre:!0,attrs:{class:"hljs-selector-class"}},[s._v(".ant-carousel")]),s._v(" >>> "),t("span",{pre:!0,attrs:{class:"hljs-selector-class"}},[s._v(".slick-thumb")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-selector-tag"}},[s._v("li")]),s._v(" {\n    "),t("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("width")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("60px")]),s._v(";\n    "),t("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("height")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("45px")]),s._v(";\n  }\n  "),t("span",{pre:!0,attrs:{class:"hljs-selector-class"}},[s._v(".ant-carousel")]),s._v(" >>> "),t("span",{pre:!0,attrs:{class:"hljs-selector-class"}},[s._v(".slick-thumb")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-selector-tag"}},[s._v("li")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-selector-tag"}},[s._v("img")]),s._v(" {\n    "),t("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("width")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("100%")]),s._v(";\n    "),t("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("height")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("100%")]),s._v(";\n    "),t("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("filter")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("grayscale")]),s._v("("),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("100%")]),s._v(");\n  }\n  "),t("span",{pre:!0,attrs:{class:"hljs-selector-class"}},[s._v(".ant-carousel")]),s._v(" >>> "),t("span",{pre:!0,attrs:{class:"hljs-selector-class"}},[s._v(".slick-thumb")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-selector-tag"}},[s._v("li")]),t("span",{pre:!0,attrs:{class:"hljs-selector-class"}},[s._v(".slick-active")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-selector-tag"}},[s._v("img")]),s._v(" {\n    "),t("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("filter")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("grayscale")]),s._v("("),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0%")]),s._v(");\n  }\n")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("style")]),s._v(">")]),s._v("\n")])])])],2)]],2)}),[],!1,null,"debcef9a",null);a.default=n.exports}}]);