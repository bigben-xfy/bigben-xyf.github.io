(window.webpackJsonp=window.webpackJsonp||[]).push([[491],{970:function(s,t,a){"use strict";a.r(t);var e={methods:{handleChange:function(s){console.log("selected ".concat(s))},handleBlur:function(){console.log("blur")},handleFocus:function(){console.log("focus")},filterOption:function(s,t){return t.componentOptions.children[0].text.toLowerCase().indexOf(s.toLowerCase())>=0}}},l=a(92),n=Object(l.a)(e,(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",[[a("demo-box-code",{attrs:{title:"带搜索框",usTitle:"Select with search field"}},[a("template",{slot:"demo"},[a("a-select",{staticStyle:{width:"200px"},attrs:{showSearch:"",placeholder:"Select a person",optionFilterProp:"children",filterOption:s.filterOption},on:{focus:s.handleFocus,blur:s.handleBlur,change:s.handleChange}},[a("a-select-option",{attrs:{value:"jack"}},[s._v("Jack")]),s._v(" "),a("a-select-option",{attrs:{value:"lucy"}},[s._v("Lucy")]),s._v(" "),a("a-select-option",{attrs:{value:"tom"}},[s._v("Tom")])],1)],1),s._v(" "),a("template",{slot:"description"},[a("p",[s._v("展开后可对选项进行搜索。")])]),s._v(" "),a("template",{slot:"code"},[a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-select")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("showSearch")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("placeholder")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"Select a person"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("optionFilterProp")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"children"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("style")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"width: 200px"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@focus")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"handleFocus"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@blur")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"handleBlur"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@change")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"handleChange"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":filterOption")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"filterOption"')]),s._v("\n  >")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-select-option")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"jack"')]),s._v(">")]),s._v("Jack"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-select-option")]),s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-select-option")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"lucy"')]),s._v(">")]),s._v("Lucy"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-select-option")]),s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-select-option")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"tom"')]),s._v(">")]),s._v("Tom"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-select-option")]),s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-select")]),s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),a("span",{pre:!0,attrs:{class:"javascript"}},[s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n      handleChange(value) {\n        "),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("`selected "),a("span",{pre:!0,attrs:{class:"hljs-subst"}},[s._v("${value}")]),s._v("`")]),s._v(");\n      },\n      handleBlur() {\n        "),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'blur'")]),s._v(");\n      },\n      handleFocus() {\n        "),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'focus'")]),s._v(");\n      },\n      filterOption(input, option) {\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" (\n          option.componentOptions.children["),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v("].text.toLowerCase().indexOf(input.toLowerCase()) >= "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v("\n        );\n      },\n    },\n  };\n")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])])],2)]],2)}),[],!1,null,null,null);t.default=n.exports}}]);