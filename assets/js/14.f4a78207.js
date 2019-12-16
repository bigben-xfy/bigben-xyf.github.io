(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{1518:function(s,a,t){"use strict";t.r(a);var r={data:function(){return{form:this.$form.createForm(this),visible:!1}},methods:{showDrawer:function(){this.visible=!0},onClose:function(){this.visible=!1}}},e=t(92),l=Object(e.a)(r,(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("div",[[t("demo-box-code",{attrs:{title:"抽屉表单",usTitle:"Submit form in drawer"}},[t("template",{slot:"demo"},[t("div",[t("a-button",{attrs:{type:"primary"},on:{click:s.showDrawer}},[t("a-icon",{attrs:{type:"plus"}}),s._v(" New account ")],1),s._v(" "),t("a-drawer",{attrs:{title:"Create a new account",width:720,visible:s.visible,wrapStyle:{height:"calc(100% - 108px)",overflow:"auto",paddingBottom:"108px"}},on:{close:s.onClose}},[t("a-form",{attrs:{form:s.form,layout:"vertical",hideRequiredMark:""}},[t("a-row",{attrs:{gutter:16}},[t("a-col",{attrs:{span:12}},[t("a-form-item",{attrs:{label:"Name"}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["name",{rules:[{required:!0,message:"Please enter user name"}]}],expression:"['name', {\n                  rules: [{ required: true, message: 'Please enter user name' }]\n                }]"}],attrs:{placeholder:"Please enter user name"}})],1)],1),s._v(" "),t("a-col",{attrs:{span:12}},[t("a-form-item",{attrs:{label:"Url"}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["url",{rules:[{required:!0,message:"please enter url"}]}],expression:"['url', {\n                  rules: [{ required: true, message: 'please enter url' }]\n                }]"}],staticStyle:{width:"100%"},attrs:{addonBefore:"http://",addonAfter:".com",placeholder:"please enter url"}})],1)],1)],1),s._v(" "),t("a-row",{attrs:{gutter:16}},[t("a-col",{attrs:{span:12}},[t("a-form-item",{attrs:{label:"Owner"}},[t("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["owner",{rules:[{required:!0,message:"Please select an owner"}]}],expression:"['owner', {\n                  rules: [{ required: true, message: 'Please select an owner' }]\n                }]"}],attrs:{placeholder:"Please a-s an owner"}},[t("a-select-option",{attrs:{value:"xiao"}},[s._v("Xiaoxiao Fu")]),s._v(" "),t("a-select-option",{attrs:{value:"mao"}},[s._v("Maomao Zhou")])],1)],1)],1),s._v(" "),t("a-col",{attrs:{span:12}},[t("a-form-item",{attrs:{label:"Type"}},[t("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["type",{rules:[{required:!0,message:"Please choose the type"}]}],expression:"['type', {\n                  rules: [{ required: true, message: 'Please choose the type' }]\n                }]"}],attrs:{placeholder:"Please choose the type"}},[t("a-select-option",{attrs:{value:"private"}},[s._v("Private")]),s._v(" "),t("a-select-option",{attrs:{value:"public"}},[s._v("Public")])],1)],1)],1)],1),s._v(" "),t("a-row",{attrs:{gutter:16}},[t("a-col",{attrs:{span:12}},[t("a-form-item",{attrs:{label:"Approver"}},[t("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["approver",{rules:[{required:!0,message:"Please choose the approver"}]}],expression:"['approver', {\n                  rules: [{ required: true, message: 'Please choose the approver' }]\n                }]"}],attrs:{placeholder:"Please choose the approver"}},[t("a-select-option",{attrs:{value:"jack"}},[s._v("Jack Ma")]),s._v(" "),t("a-select-option",{attrs:{value:"tom"}},[s._v("Tom Liu")])],1)],1)],1),s._v(" "),t("a-col",{attrs:{span:12}},[t("a-form-item",{attrs:{label:"DateTime"}},[t("a-date-picker",{directives:[{name:"decorator",rawName:"v-decorator",value:["dateTime",{rules:[{required:!0,message:"Please choose the dateTime"}]}],expression:"['dateTime', {\n                  rules: [{ required: true, message: 'Please choose the dateTime' }]\n                }]"}],staticStyle:{width:"100%"},attrs:{getPopupContainer:function(s){return s.parentNode}}})],1)],1)],1),s._v(" "),t("a-row",{attrs:{gutter:16}},[t("a-col",{attrs:{span:24}},[t("a-form-item",{attrs:{label:"Description"}},[t("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["description",{rules:[{required:!0,message:"Please enter url description"}]}],expression:"['description', {\n                  rules: [{ required: true, message: 'Please enter url description' }]\n                }]"}],attrs:{rows:4,placeholder:"please enter url description"}})],1)],1)],1)],1),s._v(" "),t("div",{style:{position:"absolute",left:0,bottom:0,width:"100%",borderTop:"1px solid #e9e9e9",padding:"10px 16px",background:"#fff",textAlign:"right"}},[t("a-button",{style:{marginRight:"8px"},on:{click:s.onClose}},[s._v("\n          Cancel\n        ")]),s._v(" "),t("a-button",{attrs:{type:"primary"},on:{click:s.onClose}},[s._v("Submit")])],1)],1)],1)]),s._v(" "),t("template",{slot:"description"},[t("p",[s._v("在抽屉中使用表单。")])]),s._v(" "),t("template",{slot:"code"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-button")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("type")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"primary"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@click")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"showDrawer"')]),s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-icon")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("type")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"plus"')]),s._v(" />")]),s._v(" New account "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-button")]),s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-drawer")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("title")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"Create a new account"')]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":width")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"720"')]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@close")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"onClose"')]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":visible")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"visible"')]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":wrapStyle")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("\"{height: 'calc(100% - 108px)',overflow: 'auto',paddingBottom: '108px'}\"")]),s._v("\n    >")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-form")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":form")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"form"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("layout")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"vertical"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("hideRequiredMark")]),s._v(">")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-row")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":gutter")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"16"')]),s._v(">")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-col")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":span")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"12"')]),s._v(">")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-form-item")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"Name"')]),s._v(">")]),s._v("\n              "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-input")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-decorator")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("\"['name', {\n                  rules: [{ required: true, message: 'Please enter user name' }]\n                }]\"")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("placeholder")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"Please enter user name"')]),s._v("\n              />")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-form-item")]),s._v(">")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-col")]),s._v(">")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-col")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":span")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"12"')]),s._v(">")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-form-item")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"Url"')]),s._v(">")]),s._v("\n              "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-input")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-decorator")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("\"['url', {\n                  rules: [{ required: true, message: 'please enter url' }]\n                }]\"")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("style")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"width: 100%"')]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("addonBefore")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"http://"')]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("addonAfter")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('".com"')]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("placeholder")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"please enter url"')]),s._v("\n              />")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-form-item")]),s._v(">")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-col")]),s._v(">")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-row")]),s._v(">")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-row")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":gutter")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"16"')]),s._v(">")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-col")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":span")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"12"')]),s._v(">")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-form-item")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"Owner"')]),s._v(">")]),s._v("\n              "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-select")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-decorator")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("\"['owner', {\n                  rules: [{ required: true, message: 'Please select an owner' }]\n                }]\"")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("placeholder")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"Please a-s an owner"')]),s._v("\n              >")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-select-option")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"xiao"')]),s._v(">")]),s._v("Xiaoxiao Fu"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-select-option")]),s._v(">")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-select-option")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"mao"')]),s._v(">")]),s._v("Maomao Zhou"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-select-option")]),s._v(">")]),s._v("\n              "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-select")]),s._v(">")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-form-item")]),s._v(">")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-col")]),s._v(">")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-col")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":span")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"12"')]),s._v(">")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-form-item")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"Type"')]),s._v(">")]),s._v("\n              "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-select")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-decorator")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("\"['type', {\n                  rules: [{ required: true, message: 'Please choose the type' }]\n                }]\"")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("placeholder")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"Please choose the type"')]),s._v("\n              >")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-select-option")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"private"')]),s._v(">")]),s._v("Private"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-select-option")]),s._v(">")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-select-option")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"public"')]),s._v(">")]),s._v("Public"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-select-option")]),s._v(">")]),s._v("\n              "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-select")]),s._v(">")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-form-item")]),s._v(">")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-col")]),s._v(">")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-row")]),s._v(">")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-row")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":gutter")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"16"')]),s._v(">")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-col")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":span")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"12"')]),s._v(">")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-form-item")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"Approver"')]),s._v(">")]),s._v("\n              "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-select")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-decorator")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("\"['approver', {\n                  rules: [{ required: true, message: 'Please choose the approver' }]\n                }]\"")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("placeholder")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"Please choose the approver"')]),s._v("\n              >")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-select-option")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"jack"')]),s._v(">")]),s._v("Jack Ma"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-select-option")]),s._v(">")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-select-option")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"tom"')]),s._v(">")]),s._v("Tom Liu"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-select-option")]),s._v(">")]),s._v("\n              "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-select")]),s._v(">")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-form-item")]),s._v(">")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-col")]),s._v(">")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-col")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":span")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"12"')]),s._v(">")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-form-item")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"DateTime"')]),s._v(">")]),s._v("\n              "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-date-picker")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-decorator")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("\"['dateTime', {\n                  rules: [{ required: true, message: 'Please choose the dateTime' }]\n                }]\"")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("style")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"width: 100%"')]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":getPopupContainer")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"trigger => trigger.parentNode"')]),s._v("\n              />")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-form-item")]),s._v(">")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-col")]),s._v(">")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-row")]),s._v(">")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-row")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":gutter")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"16"')]),s._v(">")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-col")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":span")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"24"')]),s._v(">")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-form-item")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"Description"')]),s._v(">")]),s._v("\n              "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-textarea")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-decorator")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("\"['description', {\n                  rules: [{ required: true, message: 'Please enter url description' }]\n                }]\"")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":rows")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"4"')]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("placeholder")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"please enter url description"')]),s._v("\n              />")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-form-item")]),s._v(">")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-col")]),s._v(">")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-row")]),s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-form")]),s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":style")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("\"{\n          position: 'absolute',\n          left: 0,\n          bottom: 0,\n          width: '100%',\n          borderTop: '1px solid #e9e9e9',\n          padding: '10px 16px',\n          background: '#fff',\n          textAlign: 'right',\n        }\"")]),s._v("\n      >")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-button")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":style")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("\"{marginRight: '8px'}\"")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@click")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"onClose"')]),s._v(">")]),s._v("\n          Cancel\n        "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-button")]),s._v(">")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-button")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@click")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"onClose"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("type")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"primary"')]),s._v(">")]),s._v("Submit"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-button")]),s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("a-drawer")]),s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"javascript"}},[s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    data() {\n      "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("form")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".$form.createForm("),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v("),\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("visible")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("false")]),s._v(",\n      };\n    },\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n      showDrawer() {\n        "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".visible = "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(";\n      },\n      onClose() {\n        "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".visible = "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("false")]),s._v(";\n      },\n    },\n  };\n")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])])],2)]],2)}),[],!1,null,null,null);a.default=l.exports}}]);