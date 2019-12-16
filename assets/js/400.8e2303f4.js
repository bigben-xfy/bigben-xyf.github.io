(window.webpackJsonp=window.webpackJsonp||[]).push([[400],{1155:function(e,t,v){"use strict";v.r(t);var _=v(92),s=Object(_.a)({},(function(){var e=this.$createElement;this._self._c;return this._m(0)}),[function(){var e=this,t=e.$createElement,v=e._self._c||t;return v("div",[v("h2",[e._v("API")]),e._v(" "),v("p",[e._v("This components provides some static methods, with usage and arguments as following:")]),e._v(" "),v("ul",[v("li",[v("code",{pre:!0},[e._v("message.success(content, [duration], onClose)")])]),e._v(" "),v("li",[v("code",{pre:!0},[e._v("message.error(content, [duration], onClose)")])]),e._v(" "),v("li",[v("code",{pre:!0},[e._v("message.info(content, [duration], onClose)")])]),e._v(" "),v("li",[v("code",{pre:!0},[e._v("message.warning(content, [duration], onClose)")])]),e._v(" "),v("li",[v("code",{pre:!0},[e._v("message.warn(content, [duration], onClose)")]),e._v(" // alias of warning")]),e._v(" "),v("li",[v("code",{pre:!0},[e._v("message.loading(content, [duration], onClose)")])])]),e._v(" "),v("table",[v("thead",[v("tr",[v("th",[e._v("Argument")]),e._v(" "),v("th",[e._v("Description")]),e._v(" "),v("th",[e._v("Type")]),e._v(" "),v("th",[e._v("Default")])])]),e._v(" "),v("tbody",[v("tr",[v("td",[e._v("content")]),e._v(" "),v("td",[e._v("content of the message")]),e._v(" "),v("td",[e._v("string| VNode |(h) => VNode")]),e._v(" "),v("td",[e._v("-")])]),e._v(" "),v("tr",[v("td",[e._v("duration")]),e._v(" "),v("td",[e._v("time(seconds) before auto-dismiss, don't dismiss if set to 0")]),e._v(" "),v("td",[e._v("number")]),e._v(" "),v("td",[e._v("1.5")])]),e._v(" "),v("tr",[v("td",[e._v("onClose")]),e._v(" "),v("td",[e._v("Specify a function that will be called when the message is closed")]),e._v(" "),v("td",[e._v("Function")]),e._v(" "),v("td",[e._v("-")])])])]),e._v(" "),v("p",[v("code",{pre:!0},[e._v("afterClose")]),e._v(" can be called in then-able interface:")]),e._v(" "),v("ul",[v("li",[v("code",{pre:!0},[e._v("message[level](content, [duration]).then(afterClose)")])]),e._v(" "),v("li",[v("code",{pre:!0},[e._v("message[level](content, [duration], onClose).then(afterClose)")])])]),e._v(" "),v("p",[e._v("where "),v("code",{pre:!0},[e._v("level")]),e._v(" refers one static methods of "),v("code",{pre:!0},[e._v("message")]),e._v(". The result of "),v("code",{pre:!0},[e._v("then")]),e._v(" method will be a Promise.")]),e._v(" "),v("ul",[v("li",[v("code",{pre:!0},[e._v("message.open(config)")])])]),e._v(" "),v("p",[e._v("The properties of config are as follows:")]),e._v(" "),v("table",[v("thead",[v("tr",[v("th",[e._v("Property")]),e._v(" "),v("th",[e._v("Description")]),e._v(" "),v("th",[e._v("Type")]),e._v(" "),v("th",[e._v("Default")])])]),e._v(" "),v("tbody",[v("tr",[v("td",[e._v("content")]),e._v(" "),v("td",[e._v("content of the message")]),e._v(" "),v("td",[e._v("string| VNode |(h) => VNode")]),e._v(" "),v("td",[e._v("-")])]),e._v(" "),v("tr",[v("td",[e._v("duration")]),e._v(" "),v("td",[e._v("time(seconds) before auto-dismiss, don't dismiss if set to 0")]),e._v(" "),v("td",[e._v("number")]),e._v(" "),v("td",[e._v("3")])]),e._v(" "),v("tr",[v("td",[e._v("onClose")]),e._v(" "),v("td",[e._v("Specify a function that will be called when the message is closed")]),e._v(" "),v("td",[e._v("function")]),e._v(" "),v("td",[e._v("-")])]),e._v(" "),v("tr",[v("td",[e._v("icon")]),e._v(" "),v("td",[e._v("Customized Icon")]),e._v(" "),v("td",[e._v("string| VNode |(h) => VNode")]),e._v(" "),v("td",[e._v("-")])])])]),e._v(" "),v("h3",[e._v("Global static methods")]),e._v(" "),v("p",[e._v("Methods for global configuration and destruction are also provided:")]),e._v(" "),v("ul",[v("li",[v("code",{pre:!0},[e._v("message.config(options)")])]),e._v(" "),v("li",[v("code",{pre:!0},[e._v("message.destroy()")])])]),e._v(" "),v("h4",[e._v("message.config")]),e._v(" "),v("pre",{pre:!0},[v("code",{pre:!0,attrs:{"v-pre":"",class:"language-js"}},[e._v("message.config({\n  "),v("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("top")]),e._v(": "),v("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'100px'")]),e._v(",\n  "),v("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("duration")]),e._v(": "),v("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("2")]),e._v(",\n  "),v("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("maxCount")]),e._v(": "),v("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("3")]),e._v(",\n});\n")])]),e._v(" "),v("table",[v("thead",[v("tr",[v("th",[e._v("Argument")]),e._v(" "),v("th",[e._v("Description")]),e._v(" "),v("th",[e._v("Type")]),e._v(" "),v("th",[e._v("Default")])])]),e._v(" "),v("tbody",[v("tr",[v("td",[e._v("duration")]),e._v(" "),v("td",[e._v("time before auto-dismiss, in seconds")]),e._v(" "),v("td",[e._v("number")]),e._v(" "),v("td",[e._v("1.5")])]),e._v(" "),v("tr",[v("td",[e._v("getContainer")]),e._v(" "),v("td",[e._v("Return the mount node for Message")]),e._v(" "),v("td",[e._v("() => HTMLElement")]),e._v(" "),v("td",[e._v("() => document.body")])]),e._v(" "),v("tr",[v("td",[e._v("maxCount")]),e._v(" "),v("td",[e._v("max message show, drop oldest if exceed limit")]),e._v(" "),v("td",[e._v("number")]),e._v(" "),v("td",[e._v("-")])]),e._v(" "),v("tr",[v("td",[e._v("top")]),e._v(" "),v("td",[e._v("distance from top")]),e._v(" "),v("td",[e._v("string")]),e._v(" "),v("td",[v("code",{pre:!0},[e._v("24px")])])])])])])}],!1,null,null,null);t.default=s.exports}}]);