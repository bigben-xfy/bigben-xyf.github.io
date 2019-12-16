(window.webpackJsonp=window.webpackJsonp||[]).push([[593],{1263:function(e,t,v){"use strict";v.r(t);var _=v(92),s=Object(_.a)({},(function(){var e=this.$createElement;this._self._c;return this._m(0)}),[function(){var e=this,t=e.$createElement,v=e._self._c||t;return v("div",[v("h2",[e._v("API")]),e._v(" "),v("table",[v("thead",[v("tr",[v("th",[e._v("Property")]),e._v(" "),v("th",[e._v("Description")]),e._v(" "),v("th",[e._v("Type")]),e._v(" "),v("th",[e._v("Default")])])]),e._v(" "),v("tbody",[v("tr",[v("td",[e._v("accept")]),e._v(" "),v("td",[e._v("File types that can be accepted. See "),v("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept"}},[e._v("input accept Attribute")])]),e._v(" "),v("td",[e._v("string")]),e._v(" "),v("td",[e._v("-")])]),e._v(" "),v("tr",[v("td",[e._v("action")]),e._v(" "),v("td",[e._v("Uploading URL")]),e._v(" "),v("td",[e._v("string|(file) => "),v("code",{pre:!0},[e._v("Promise")])]),e._v(" "),v("td",[e._v("-")])]),e._v(" "),v("tr",[v("td",[e._v("directory")]),e._v(" "),v("td",[e._v("support upload whole directory ("),v("a",{attrs:{href:"https://caniuse.com/#feat=input-file-directory"}},[e._v("caniuse")]),e._v(")")]),e._v(" "),v("td",[e._v("boolean")]),e._v(" "),v("td",[e._v("false")])]),e._v(" "),v("tr",[v("td",[e._v("beforeUpload")]),e._v(" "),v("td",[e._v("Hook function which will be executed before uploading. Uploading will be stopped with "),v("code",{pre:!0},[e._v("false")]),e._v(" or a rejected Promise returned. "),v("strong",[e._v("Warning：this function is not supported in IE9")]),e._v("。")]),e._v(" "),v("td",[e._v("(file, fileList) => "),v("code",{pre:!0},[e._v("boolean | Promise")])]),e._v(" "),v("td",[e._v("-")])]),e._v(" "),v("tr",[v("td",[e._v("customRequest")]),e._v(" "),v("td",[e._v("override for the default xhr behavior allowing for additional customization and ability to implement your own XMLHttpRequest")]),e._v(" "),v("td",[e._v("Function")]),e._v(" "),v("td",[e._v("-")])]),e._v(" "),v("tr",[v("td",[e._v("data")]),e._v(" "),v("td",[e._v("Uploading params or function which can return uploading params.")]),e._v(" "),v("td",[e._v("object|function(file)")]),e._v(" "),v("td",[e._v("-")])]),e._v(" "),v("tr",[v("td",[e._v("defaultFileList")]),e._v(" "),v("td",[e._v("Default list of files that have been uploaded.")]),e._v(" "),v("td",[e._v("object[]")]),e._v(" "),v("td",[e._v("-")])]),e._v(" "),v("tr",[v("td",[e._v("disabled")]),e._v(" "),v("td",[e._v("disable upload button")]),e._v(" "),v("td",[e._v("boolean")]),e._v(" "),v("td",[e._v("false")])]),e._v(" "),v("tr",[v("td",[e._v("fileList")]),e._v(" "),v("td",[e._v("List of files that have been uploaded (controlled). Here is a common issue "),v("a",{attrs:{href:"https://github.com/ant-design/ant-design/issues/2423"}},[e._v("#2423")]),e._v(" when using it")]),e._v(" "),v("td",[e._v("object[]")]),e._v(" "),v("td",[e._v("-")])]),e._v(" "),v("tr",[v("td",[e._v("headers")]),e._v(" "),v("td",[e._v("Set request headers, valid above IE10.")]),e._v(" "),v("td",[e._v("object")]),e._v(" "),v("td",[e._v("-")])]),e._v(" "),v("tr",[v("td",[e._v("listType")]),e._v(" "),v("td",[e._v("Built-in stylesheets, support for three types: "),v("code",{pre:!0},[e._v("text")]),e._v(", "),v("code",{pre:!0},[e._v("picture")]),e._v(" or "),v("code",{pre:!0},[e._v("picture-card")])]),e._v(" "),v("td",[e._v("string")]),e._v(" "),v("td",[e._v("'text'")])]),e._v(" "),v("tr",[v("td",[e._v("multiple")]),e._v(" "),v("td",[e._v("Whether to support selected multiple file. "),v("code",{pre:!0},[e._v("IE10+")]),e._v(" supported. You can select multiple files with CTRL holding down while multiple is set to be true")]),e._v(" "),v("td",[e._v("boolean")]),e._v(" "),v("td",[e._v("false")])]),e._v(" "),v("tr",[v("td",[e._v("name")]),e._v(" "),v("td",[e._v("The name of uploading file")]),e._v(" "),v("td",[e._v("string")]),e._v(" "),v("td",[e._v("'file'")])]),e._v(" "),v("tr",[v("td",[e._v("showUploadList")]),e._v(" "),v("td",[e._v("Whether to show default upload list, could be an object to specify "),v("code",{pre:!0},[e._v("showPreviewIcon")]),e._v(" and "),v("code",{pre:!0},[e._v("showRemoveIcon")]),e._v(" individually")]),e._v(" "),v("td",[e._v("Boolean or { showPreviewIcon?: boolean, showRemoveIcon?: boolean }")]),e._v(" "),v("td",[e._v("true")])]),e._v(" "),v("tr",[v("td",[e._v("supportServerRender")]),e._v(" "),v("td",[e._v("Need to be turned on while the server side is rendering.")]),e._v(" "),v("td",[e._v("boolean")]),e._v(" "),v("td",[e._v("false")])]),e._v(" "),v("tr",[v("td",[e._v("withCredentials")]),e._v(" "),v("td",[e._v("ajax upload with cookie sent")]),e._v(" "),v("td",[e._v("boolean")]),e._v(" "),v("td",[e._v("false")])]),e._v(" "),v("tr",[v("td",[e._v("openFileDialogOnClick")]),e._v(" "),v("td",[e._v("click open file dialog")]),e._v(" "),v("td",[e._v("boolean")]),e._v(" "),v("td",[e._v("true")])]),e._v(" "),v("tr",[v("td",[e._v("remove")]),e._v(" "),v("td",[e._v("A callback function, will be executed when removing file button is clicked, remove event will be prevented when return value is "),v("code",{pre:!0},[e._v("false")]),e._v(" or a Promise which resolve(false) or reject.")]),e._v(" "),v("td",[e._v("Function(file): "),v("code",{pre:!0},[e._v("boolean | Promise")])]),e._v(" "),v("td",[e._v("-")])])])]),e._v(" "),v("h3",[e._v("events")]),e._v(" "),v("table",[v("thead",[v("tr",[v("th",[e._v("Events Name")]),e._v(" "),v("th",[e._v("Description")]),e._v(" "),v("th",[e._v("Arguments")])])]),e._v(" "),v("tbody",[v("tr",[v("td",[e._v("change")]),e._v(" "),v("td",[e._v("A callback function, can be executed when uploading state is changing. See "),v("a",{attrs:{href:"#change"}},[e._v("change")])]),e._v(" "),v("td",[e._v("Function")])]),e._v(" "),v("tr",[v("td",[e._v("preview")]),e._v(" "),v("td",[e._v("A callback function, will be executed when file link or preview icon is clicked.")]),e._v(" "),v("td",[e._v("Function(file)")])]),e._v(" "),v("tr",[v("td",[e._v("reject")]),e._v(" "),v("td",[e._v("A callback function, will be executed when drop files is not accept.")]),e._v(" "),v("td",[e._v("Function(fileList)")])])])]),e._v(" "),v("h3",[e._v("change")]),e._v(" "),v("blockquote",[v("p",[e._v("The function will be called when uploading is in progress, completed or failed")])]),e._v(" "),v("p",[e._v("When uploading state change, it returns:")]),e._v(" "),v("pre",{pre:!0},[v("code",{pre:!0,attrs:{"v-pre":"",class:"language-js"}},[e._v("{\n  "),v("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("file")]),e._v(": { "),v("span",{pre:!0,attrs:{class:"hljs-comment"}},[e._v("/* ... */")]),e._v(" },\n  "),v("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("fileList")]),e._v(": [ "),v("span",{pre:!0,attrs:{class:"hljs-comment"}},[e._v("/* ... */")]),e._v(" ],\n  "),v("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("event")]),e._v(": { "),v("span",{pre:!0,attrs:{class:"hljs-comment"}},[e._v("/* ... */")]),e._v(" },\n}\n")])]),e._v(" "),v("ol",[v("li",[v("p",[v("code",{pre:!0},[e._v("file")]),e._v(" File object for the current operation.")]),e._v(" "),v("pre",{pre:!0},[v("code",{pre:!0,attrs:{"v-pre":"",class:"language-js"}},[e._v("{\n   "),v("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("uid")]),e._v(": "),v("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'uid'")]),e._v(",   "),v("span",{pre:!0,attrs:{class:"hljs-comment"}},[e._v("// unique identifier, negative is recommend, to prevent interference with internal generated id")]),e._v("\n   "),v("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("name")]),e._v(": "),v("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'xx.png'")]),e._v("   "),v("span",{pre:!0,attrs:{class:"hljs-comment"}},[e._v("// file name")]),e._v("\n   "),v("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("status")]),e._v(": "),v("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'done'")]),e._v(", "),v("span",{pre:!0,attrs:{class:"hljs-comment"}},[e._v("// options：uploading, done, error, removed")]),e._v("\n   "),v("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("response")]),e._v(": "),v("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('\'{"status": "success"}\'')]),e._v(", "),v("span",{pre:!0,attrs:{class:"hljs-comment"}},[e._v("// response from server")]),e._v("\n   "),v("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("linkProps")]),e._v(": "),v("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('\'{"download": "image"}\'')]),e._v(", "),v("span",{pre:!0,attrs:{class:"hljs-comment"}},[e._v("// additional html props of file link")]),e._v("\n}\n")])])]),e._v(" "),v("li",[v("p",[v("code",{pre:!0},[e._v("fileList")]),e._v(" current list of files")])]),e._v(" "),v("li",[v("p",[v("code",{pre:!0},[e._v("event")]),e._v(" response from server, including uploading progress, supported by advanced browsers.")])])])])}],!1,null,null,null);t.default=s.exports}}]);