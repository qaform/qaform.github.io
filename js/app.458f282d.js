(function(t){function e(e){for(var n,l,r=e[0],s=e[1],d=e[2],u=0,p=[];u<r.length;u++)l=r[u],Object.prototype.hasOwnProperty.call(i,l)&&i[l]&&p.push(i[l][0]),i[l]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n]);c&&c(e);while(p.length)p.shift()();return o.push.apply(o,d||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],n=!0,r=1;r<a.length;r++){var s=a[r];0!==i[s]&&(n=!1)}n&&(o.splice(e--,1),t=l(l.s=a[0]))}return t}var n={},i={app:0},o=[];function l(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.m=t,l.c=n,l.d=function(t,e,a){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)l.d(a,n,function(e){return t[e]}.bind(null,n));return a},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],s=r.push.bind(r);r.push=e,r=r.slice();for(var d=0;d<r.length;d++)e(r[d]);var c=s;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var n=a("85ec"),i=a.n(n);i.a},"08f1":function(t,e,a){},"2eab":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("v-app",[a("v-main",[a("v-row",{staticClass:"my-1",attrs:{justify:"center","no-gutters":""}},[a("v-col",{staticClass:"px-1",staticStyle:{"max-width":"150px !important"},attrs:{align:"center",outlined:"",tile:"",dense:"",fixed:""}},[a("v-card",{attrs:{tile:""}},[a("v-toolbar",{attrs:{flat:"",dense:"",color:"blue darken-4",dark:""}},[a("span",{staticClass:"title font-weight-regular"},[t._v("Control")])]),a("draggable",{attrs:{element:"span",sort:!1,group:{name:"items",pull:"clone",put:!1},clone:t.handleClone},model:{value:t.controls,callback:function(e){t.controls=e},expression:"controls"}},[a("transition-group",{staticClass:"list-group overflow-y-auto",staticStyle:{"max-height":"calc(100vh - 100px)"},attrs:{"three-line":"",tag:"v-list"}},t._l(t.controls,(function(e){return a("v-list-item",{key:t.uuid(e),staticClass:"list-group-item grab",attrs:{justify:"center"}},[a("v-list-item-title",{staticClass:"d-flex justify-start",class:e.fixed?"fa fa-anchor":"glyphicon glyphicon-pushpin",attrs:{"aria-hidden":"true"},domProps:{textContent:t._s(e.Type)},on:{click:function(t){e.fixed=!e.fixed}}})],1)})),1)],1),a("v-btn",{attrs:{tile:"",color:"blue",outlined:"",block:""}},[t._v("Thêm")])],1)],1),a("v-col",{staticStyle:{"max-width":"640px !important"},attrs:{outlined:"",tile:""}},[a("v-toolbar",{attrs:{flat:"",dense:"",color:"blue darken-4",dark:""}},[a("v-text-field",{staticStyle:{"max-width":"200px"},attrs:{"background-color":"#00000000",loading:"false",dense:"",flat:"",solo:"","hide-details":"","single-line":"",placeholder:"Tên mẫu"},model:{value:t.nameTemplates,callback:function(e){t.nameTemplates=e},expression:"nameTemplates"}}),a("v-spacer"),a("v-file-input",{staticStyle:{"max-width":"30px"},attrs:{accept:"application/json","prepend-icon":"mdi-import","hide-input":""},on:{change:t.importTemplates}}),a("v-btn",{attrs:{icon:""},on:{click:t.export2txt}},[a("v-icon",[t._v("mdi-download")])],1)],1),a("v-card",{staticClass:"pa-5 overflow-y-auto",staticStyle:{"max-height":"calc(100vh - 100px)"},attrs:{"three-line":""}},[a("div",{staticClass:"mx-2"},[a("formtitle",{attrs:{data:t.templates}}),a("draggable",{attrs:{element:"span",group:{name:"part"},sort:!0,handle:".dragbar"},model:{value:t.templates.Part,callback:function(e){t.$set(t.templates,"Part",e)},expression:"templates.Part"}},t._l(t.templates.Part,(function(e,n){return a("v-card",{key:n,staticClass:"px-3 mt-2",attrs:{flat:"",outlined:""}},[a("v-toolbar",{staticClass:"dragbar",attrs:{flat:"",tile:"",align:"right"}},[a("v-row",[a("v-col",{attrs:{cols:"2"}}),a("v-col",{staticClass:"d-flex justify-space-around"}),a("v-col",{staticClass:"d-flex justify-end",attrs:{cols:"2"}},[a("v-btn",{staticClass:"my-2 mx-0",attrs:{text:"",icon:"",color:"red"},on:{click:function(e){return t.templates.Part.splice(n,1)}}},[a("v-icon",[t._v("mdi-delete")])],1)],1)],1)],1),a("session",{key:n,attrs:{data:e}})],1)})),1),a("div",{staticClass:"mt-2"},[a("v-btn",{attrs:{color:"blue",outlined:"",block:""},on:{click:function(e){return t.templates.Part.push({Name:"THÔNG TIN",Des:"Mô tả",Question:[]})}}},[t._v("add session")])],1)],1)])],1)],1),a("v-row",{attrs:{"no-gutters":""}},[a("v-col",{staticClass:"pa-2",attrs:{outlined:"",tile:""}},[a("pre",[t._v(t._s(t.listString))])])],1)],1)],1)],1)},o=[],l=(a("fb6a"),a("d3b7"),a("25f0"),a("3ca3"),a("ddb0"),a("2b3d"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"Session"}},[t.editable?a("div",[a("v-text-field",{attrs:{dense:"",autofocus:""},on:{keyup:function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.editable=!t.editable}},model:{value:t.data.Name,callback:function(e){t.$set(t.data,"Name",e)},expression:"data.Name"}}),a("v-text-field",{attrs:{dense:""},on:{keyup:function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.editable=!t.editable}},model:{value:t.data.Des,callback:function(e){t.$set(t.data,"Des",e)},expression:"data.Des"}}),a("v-btn",{attrs:{color:"primary",block:""},on:{click:function(e){t.editable=!t.editable}}},[a("v-icon",[t._v("mdi-check")])],1)],1):t._e(),t.editable?t._e():a("div",{on:{click:function(e){t.editable=!t.editable}}},[a("div",{staticClass:"blue lighten-4 pa-2 mb-2 font-weight-bold rounded blue--text text--darken-4",attrs:{align:"center"},domProps:{textContent:t._s(t.data.Name)}}),a("div",{domProps:{textContent:t._s(t.data.Des)}})]),a("draggable",t._b({attrs:{element:"span",group:{name:"items"},"ghost-class":"ghost",handle:".move",sort:!0},on:{start:function(e){t.dragging=!0},end:function(e){t.dragging=!1}},model:{value:t.data.Question,callback:function(e){t.$set(t.data,"Question",e)},expression:"data.Question"}},"draggable",t.dragOptions,!1),[a("transition-group",{attrs:{type:"transition",tag:"v-list"}},t._l(t.data.Question,(function(e,n){return a("v-hover",{key:n,attrs:{"open-delay":"0"},scopedSlots:t._u([{key:"default",fn:function(i){var o=i.hover;return[a("v-card",{staticClass:"mb-3 hold",class:{"on-hover":o},attrs:{ripple:!1,flat:"",outlined:""}},[a("v-toolbar",{staticClass:"move",staticStyle:{"max-height":"50px"},attrs:{dense:"",flat:"",color:o?"grey lighten-2":""}},[a("v-row",[a("v-col",{staticClass:"drag",attrs:{cols:"2"}}),a("v-col",{staticClass:"d-flex justify-space-around drag"},[a("v-icon",[t._v("mdi-drag")])],1),a("v-col",{staticClass:"d-flex justify-end",attrs:{cols:"2"}},[a("v-btn",{staticClass:"mt-2",attrs:{text:"",icon:"",color:"gray"},on:{click:function(e){return t.data.Question.splice(n,1)}}},[a("v-icon",[t._v("mdi-close")])],1)],1)],1)],1),a("div",{staticClass:"px-3"},[a(e.Type,{key:t.genQID(e),tag:"component",attrs:{data:e}})],1)],1)]}}],null,!0)})})),1)],1)],1)}),r=[],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"radio"}},[t.editable?a("div",[a("v-text-field",{staticClass:"my-5",attrs:{label:"Tiêu đề câu hỏi",dense:""},on:{keyup:function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.editable=!t.editable},focus:t.focusable},model:{value:t.data.Text,callback:function(e){t.$set(t.data,"Text",e)},expression:"data.Text"}}),t._l(t.data.Option,(function(e,n){return a("div",{key:n},[a("v-text-field",{staticClass:"my-2",attrs:{label:"Option "+(n+1),dense:""},on:{keyup:function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.editable=!t.editable},focus:t.focusable},model:{value:t.data.Option[n].Text,callback:function(e){t.$set(t.data.Option[n],"Text",e)},expression:"data.Option[i].Text"}},[a("template",{slot:"append-outer"},[n===t.data.Option.length-1?a("v-btn",{attrs:{color:t.added?"primary":"grey",text:""},on:{click:function(e){t.addChild(n),t.added=!t.added}}},[t._v("Khác")]):t._e(),a("v-icon",{on:{click:function(e){t.data.Option.splice(n,1),t.editable=-1}}},[t._v("mdi-delete")])],1)],2)],1)})),a("v-btn",{staticClass:"my-2",attrs:{color:"blue",outlined:"",block:""},on:{click:function(e){t.data.Option.push({QID:t.genQID(),Text:"Tùy chọn "+(t.data.Option.length+1)})}}},[t._v("Thêm")]),a("v-btn",{attrs:{color:"primary",block:""},on:{click:function(e){t.editable=!t.editable}}},[a("v-icon",[t._v("mdi-check")])],1)],2):t._e(),t.editable?t._e():a("div",{on:{click:function(e){t.editable=!t.editable}}},[a("div",{staticClass:"my-3 font-weight-bold"},[t._v(t._s(t.data.Text))]),a("v-radio-group",{attrs:{mandatory:!1}},[a("draggable",t._b({attrs:{element:"span",group:{name:"question"},sort:!0,handle:".handle"},model:{value:t.data.Option,callback:function(e){t.$set(t.data,"Option",e)},expression:"data.Option"}},"draggable",t.dragOptions,!1),[a("transition-group",{staticClass:"py-0",attrs:{type:"transition",group:"",tag:"div"}},t._l(t.data.Option,(function(t,e){return a("div",{key:e},[a("v-radio",{staticClass:"handle my-1",attrs:{value:e,label:t.Text}})],1)})),0)],1)],1)],1)])},d=[],c=(a("d81d"),a("5530")),u=a("310e"),p=a.n(u),f={name:"Radio",props:{data:{QID:String,Text:String,Option:Array}},data:function(){return{editable:!1,added:!1}},methods:{genQID:function(){var t=Math.floor(999999*Math.random())+1e5;return t},focusable:function(t){t.target.select()},addChild:function(t){var e=this;this.data.Option=this.data.Option.map((function(a,n){return t===n?Object(c["a"])(Object(c["a"])({},a),{},{Des:"",Question:[{Type:"TextBox",Text:"Mô tả",QID:e.genQID(),Holder:""}]}):a}))}},components:{draggable:p.a},computed:{dragOptions:function(){return{animation:200,disabled:!1,ghostClass:"ghost"}}}},b=f,m=a("2877"),v=a("6544"),g=a.n(v),x=a("8336"),y=a("132d"),h=a("67b6"),k=a("43a6"),T=a("8654"),_=Object(m["a"])(b,s,d,!1,null,null,null),C=_.exports;g()(_,{VBtn:x["a"],VIcon:y["a"],VRadio:h["a"],VRadioGroup:k["a"],VTextField:T["a"]});var O=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"checkbox"}},[t.editable?a("div",[a("v-text-field",{staticClass:"my-5",attrs:{label:"Tiêu đề câu hỏi",dense:""},on:{keyup:function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.editable=!t.editable},focus:t.focusable},model:{value:t.data.Text,callback:function(e){t.$set(t.data,"Text",e)},expression:"data.Text"}}),t._l(t.data.Option,(function(e,n){return a("div",{key:n},[a("v-text-field",{staticClass:"my-2",attrs:{label:"Option "+(n+1),dense:""},on:{keyup:function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.editable=!t.editable},focus:t.focusable},model:{value:t.data.Option[n].Text,callback:function(e){t.$set(t.data.Option[n],"Text",e)},expression:"data.Option[i].Text"}},[a("template",{slot:"append-outer"},[a("v-icon",{on:{click:function(e){t.data.Option.splice(n,1),t.editable=-1}}},[t._v("mdi-delete")])],1)],2)],1)})),a("v-btn",{staticClass:"my-2",attrs:{color:"blue",outlined:"",block:""},on:{click:function(e){t.data.Option.push({QID:t.genQID(),Text:"Checkbox "+(t.data.Option.length+1)})}}},[t._v("Thêm")]),a("v-btn",{attrs:{color:"primary",block:""},on:{click:function(e){t.editable=!t.editable}}},[a("v-icon",[t._v("mdi-check")])],1)],2):t._e(),t.editable?t._e():a("div",{on:{click:function(e){t.editable=!t.editable}}},[a("div",{staticClass:"my-3 font-weight-bold"},[t._v(t._s(t.data.Text))]),a("draggable",t._b({attrs:{element:"span",group:{name:"question"},sort:!0,handle:".handle"},model:{value:t.data.Option,callback:function(e){t.$set(t.data,"Option",e)},expression:"data.Option"}},"draggable",t.dragOptions,!1),[a("transition-group",{staticClass:"py-0",attrs:{type:"transition",group:"",tag:"div"}},t._l(t.data.Option,(function(t,e){return a("div",{key:e},[a("v-checkbox",{staticClass:"handle my-0 py-0",attrs:{label:t.Text}})],1)})),0)],1)],1)])},V=[],D=(a("a9e3"),{name:"CheckBox",props:{data:{GroupID:Number,Text:String,Option:Array}},data:function(){return{editable:!1}},methods:{genQID:function(){var t=Math.floor(999999*Math.random())+1e5;return t},focusable:function(t){t.target.select()}},components:{draggable:p.a},computed:{dragOptions:function(){return{animation:200,disabled:!1,ghostClass:"ghost"}}}}),I=D,w=a("ac7c"),Q=Object(m["a"])(I,O,V,!1,null,null,null),S=Q.exports;g()(Q,{VBtn:x["a"],VCheckbox:w["a"],VIcon:y["a"],VTextField:T["a"]});var $=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"textbox"}},[t.editable?a("div",[a("v-text-field",{staticClass:"my-5",attrs:{label:"Tiêu đề câu hỏi",dense:"",autofocus:""},on:{keyup:function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.editable=!t.editable}},model:{value:t.data.Text,callback:function(e){t.$set(t.data,"Text",e)},expression:"data.Text"}}),a("v-text-field",{staticClass:"my-2",attrs:{label:"Holder",dense:""},on:{keyup:function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.editable=!t.editable}},model:{value:t.data.Holder,callback:function(e){t.$set(t.data,"Holder",e)},expression:"data.Holder"}}),a("v-btn",{attrs:{color:"primary",block:""},on:{click:function(e){t.editable=!t.editable}}},[a("v-icon",[t._v("mdi-check")])],1)],1):t._e(),t.editable?t._e():a("div",{on:{click:function(e){t.editable=!t.editable}}},[a("div",{staticClass:"my-3 font-weight-bold",domProps:{textContent:t._s(t.data.Text)}}),a("v-text-field",{staticClass:"my-2",attrs:{placeholder:t.data.Holder,outlined:"",dense:""}})],1)])},j=[],N={name:"Textbox",props:{data:{QID:String,Text:String,Holder:String}},data:function(){return{editable:!1}}},E=N,P=Object(m["a"])(E,$,j,!1,null,null,null),H=P.exports;g()(P,{VBtn:x["a"],VIcon:y["a"],VTextField:T["a"]});var M=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"textarea"}},[t.editable?a("div",[a("v-text-field",{staticClass:"my-5",attrs:{label:"Tiêu đề câu hỏi",dense:"",autofocus:""},on:{keyup:function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.editable=!t.editable}},model:{value:t.data.Text,callback:function(e){t.$set(t.data,"Text",e)},expression:"data.Text"}}),a("v-text-field",{staticClass:"my-2",attrs:{label:"Holder",dense:""},on:{keyup:function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.editable=!t.editable}},model:{value:t.data.Holder,callback:function(e){t.$set(t.data,"Holder",e)},expression:"data.Holder"}}),a("v-btn",{staticClass:"mb-3",attrs:{color:"primary",block:""},on:{click:function(e){t.editable=!t.editable}}},[a("v-icon",[t._v("mdi-check")])],1)],1):t._e(),t.editable?t._e():a("div",{on:{click:function(e){t.editable=!t.editable}}},[a("div",{staticClass:"my-3 font-weight-bold",domProps:{textContent:t._s(t.data.Text)}}),a("v-textarea",{attrs:{placeholder:t.data.Holder,outlined:""}})],1)])},U=[],A={name:"TextArea",props:{data:{QID:String,Text:String,Holder:String}},data:function(){return{editable:!1}}},B=A,R=a("a844"),F=Object(m["a"])(B,M,U,!1,null,null,null),G=F.exports;g()(F,{VBtn:x["a"],VIcon:y["a"],VTextField:T["a"],VTextarea:R["a"]});var J=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"marktable"}},[a("div",[t.editable?a("div",{staticClass:"grey lighten-4 py-3 rounded"},[a("v-text-field",{staticClass:"my-2",attrs:{label:"Chỉnh sửa tiêu đề",dense:"",autofocus:""},on:{keyup:function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.editable=!t.editable},focus:t.focusable},model:{value:t.data.Text,callback:function(e){t.$set(t.data,"Text",e)},expression:"data.Text"}}),a("v-textarea",{staticClass:"my-2",attrs:{rows:"2","auto-grow":"",label:"Chỉnh sửa mô tả",dense:""},on:{keyup:function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.editable=!t.editable}},model:{value:t.data.Des,callback:function(e){t.$set(t.data,"Des",e)},expression:"data.Des"}}),a("div",{staticClass:"mb-1 caption font-weight-medium primary--text"},[t._v(" Chỉnh sửa nội dung mức điểm ")]),a("v-row",{attrs:{"no-gutters":""}},t._l(t.data.ValueArray,(function(e,n){return a("v-col",{key:n},[a("div",{staticClass:"py-2 text-center primary white--text font-weight-bold",attrs:{outlined:""}},[t._v(" "+t._s(e.Value)+" ")]),a("div",{staticClass:"px-2 grey lighten-2"},[a("v-textarea",{attrs:{rows:"2","auto-grow":"",required:""},on:{keyup:function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.editable=!t.editable},focus:t.focusable},model:{value:e.Text,callback:function(a){t.$set(e,"Text",a)},expression:"item.Text"}})],1)])})),1),a("v-btn",{staticClass:"my-3",attrs:{color:"primary",block:""},on:{click:function(e){t.editable=!t.editable}}},[a("v-icon",[t._v("mdi-check")])],1)],1):t._e(),t.editable?t._e():a("div",{on:{click:function(e){t.editable=!t.editable}}},[a("div",{staticClass:"my-3 font-weight-bold",domProps:{textContent:t._s(t.data.Text)}}),a("div",{staticClass:"my-2",domProps:{textContent:t._s(t.data.Des)}})]),a("draggable",t._b({attrs:{element:"span",group:{name:"topics"},sort:!0,handle:".movebar"},model:{value:t.data.Topic,callback:function(e){t.$set(t.data,"Topic",e)},expression:"data.Topic"}},"draggable",t.dragOptions,!1),[a("transition-group",{staticClass:"py-0",attrs:{group:"",tag:"div"}},t._l(t.data.Topic,(function(e,n){return a("v-card",{key:n,staticClass:"hold mb-4 py-3 px-3",attrs:{flat:"",outlined:"",tile:"",align:"left"}},[a("v-toolbar",{staticClass:"movebar grey lighten-2",attrs:{dense:"",flat:""}},[a("v-row",[a("v-col",{staticClass:"drag",attrs:{cols:"2"}}),a("v-col",{staticClass:"d-flex justify-space-around drag"}),a("v-col",{staticClass:"d-flex justify-end",attrs:{cols:"2"}},[a("v-btn",{staticClass:"mt-2",attrs:{text:"",icon:"",color:"gray"},on:{click:function(e){return t.data.Topic.splice(n,1)}}},[a("v-icon",[t._v("mdi-delete")])],1)],1)],1)],1),t.edititem==e?a("div",[a("v-text-field",{staticClass:"my-2",attrs:{label:"Tiêu đề câu hỏi",autofocus:""},on:{keyup:function(a){if(!a.type.indexOf("key")&&t._k(a.keyCode,"enter",13,a.key,"Enter"))return null;t.edititem=!e},focus:t.focusable},model:{value:e.Name,callback:function(a){t.$set(e,"Name",a)},expression:"item.Name"}}),t._l(e.Question,(function(n,i){return a("div",{key:i},[a("v-text-field",{staticClass:"my-2",attrs:{dense:""},on:{keyup:function(a){if(!a.type.indexOf("key")&&t._k(a.keyCode,"enter",13,a.key,"Enter"))return null;t.edititem=!e}},model:{value:n.Text,callback:function(e){t.$set(n,"Text",e)},expression:"ques.Text"}},[a("template",{slot:"append-outer"},[a("v-icon",{on:{click:function(t){return e.Question.splice(i,1)}}},[t._v("mdi-delete")])],1)],2)],1)})),a("v-btn",{staticClass:"mb-3",attrs:{color:"primary",outlined:"",block:""},on:{click:function(a){e.Question.push({QID:t.genQID(e),Text:e.Question.length+1+". "})}}},[a("v-icon",[t._v("mdi-plus")])],1),a("v-btn",{staticClass:"mb-3",attrs:{color:"primary",block:""},on:{click:function(e){t.edititem={}}}},[a("v-icon",[t._v("mdi-check")])],1)],2):t._e(),t.edititem!=e?a("div",{staticClass:"mt-5",on:{click:function(a){t.edititem=e}}},[a("div",{staticClass:"font-weight-bold green--text"},[t._v(t._s(e.Name))]),a("draggable",t._b({attrs:{element:"span",group:{name:"question"},sort:!0,handle:".handle"},model:{value:e.Question,callback:function(a){t.$set(e,"Question",a)},expression:"item.Question"}},"draggable",t.dragOptions,!1),[a("transition-group",{staticClass:"py-0",attrs:{type:"transition",group:"",tag:"div"}},t._l(e.Question,(function(e,n){return a("div",{key:n,staticClass:"handle"},[a("div",{staticClass:"font-weight-bold"},[t._v(t._s(e.Text))])])})),0)],1)],1):t._e()],1)})),1)],1),a("v-btn",{staticClass:"my-2",attrs:{color:"blue",outlined:"",block:""},on:{click:function(e){t.data.Topic.push({GroupID:t.genQID(),Name:"TIÊU ĐỀ CÂU HỎI",Question:[{QID:t.genQID(),Text:"1. Câu hỏi"}]})}}},[t._v("Thêm câu hỏi")])],1)])},L=[],q={name:"marktable",props:{data:{Text:String,Des:String,ValueArray:Array,Topic:Array}},data:function(){return{editable:!1,edititem:{}}},methods:{genQID:function(){var t=Math.floor(999999*Math.random())+1e5;return t},focusable:function(t){t.target.select()}},components:{draggable:p.a},computed:{dragOptions:function(){return{animation:200,disabled:!1,ghostClass:"ghost"}}}},K=q,z=(a("76cd"),a("b0af")),W=a("62ad"),X=a("0fd9"),Y=a("71d9"),Z=Object(m["a"])(K,J,L,!1,null,"7d4a4df7",null),tt=Z.exports;g()(Z,{VBtn:x["a"],VCard:z["a"],VCol:W["a"],VIcon:y["a"],VRow:X["a"],VTextField:T["a"],VTextarea:R["a"],VToolbar:Y["a"]});var et=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"fileinput"}},[t.editable?a("div",[a("v-text-field",{staticClass:"my-2",attrs:{dense:"",autofocus:""},on:{keyup:function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.editable=!t.editable}},model:{value:t.data.Text,callback:function(e){t.$set(t.data,"Text",e)},expression:"data.Text"}}),a("v-btn",{staticClass:"mb-3",attrs:{color:"primary",block:""},on:{click:function(e){t.editable=!t.editable}}},[a("v-icon",[t._v("mdi-check")])],1)],1):t._e(),t.editable?t._e():a("div",{on:{click:function(e){t.editable=!t.editable}}},[a("div",{staticClass:"mb-2 font-weight-bold",domProps:{textContent:t._s(t.data.Text)}}),[a("v-file-input",{attrs:{"show-size":"",multiple:"",label:"Nhập file"}})]],2)])},at=[],nt={name:"TextArea",props:{data:{QID:String,Text:String}},data:function(){return{editable:!1}}},it=nt,ot=a("23a7"),lt=Object(m["a"])(it,et,at,!1,null,null,null),rt=lt.exports;g()(lt,{VBtn:x["a"],VFileInput:ot["a"],VIcon:y["a"],VTextField:T["a"]});var st={name:"Session",props:{data:{QID:String,Name:String,Des:String,Question:Array,dragging:!1}},data:function(){return{editable:!1}},computed:{dragOptions:function(){return{animation:200,disabled:!1,ghostClass:"ghost"}}},methods:{genQID:function(t){var e=Math.floor(999999*Math.random())+1e5;return t.QID?t.QID:"MarkTable"===t.Type?t.Type:("Checkbox"===t.Type?this.$set(t,"GroupID",e):this.$set(t,"QID",e),t.QID)}},components:{draggable:p.a,Checkbox:S,TextBox:H,Radio:C,FileInput:rt,MarkTable:tt,TextArea:G}},dt=st,ct=(a("7652"),a("ce87")),ut=Object(m["a"])(dt,l,r,!1,null,"71d90b01",null),pt=ut.exports;g()(ut,{VBtn:x["a"],VCard:z["a"],VCol:W["a"],VHover:ct["a"],VIcon:y["a"],VRow:X["a"],VTextField:T["a"],VToolbar:Y["a"]});var ft=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"formtitle"}},[t.editable?a("div",{staticClass:"my-2"},[a("v-img",{attrs:{src:t.data.logo_org,height:"100",contain:""}}),a("v-text-field",{attrs:{label:"Link Logo",dense:"",autofocus:""},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.switchVal(e)}},model:{value:t.data.logo_org,callback:function(e){t.$set(t.data,"logo_org",e)},expression:"data.logo_org"}}),a("v-text-field",{attrs:{label:"name_org",dense:""},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.switchVal(e)}},model:{value:t.data.name_org,callback:function(e){t.$set(t.data,"name_org",e)},expression:"data.name_org"}}),a("v-text-field",{attrs:{label:"Title",dense:""},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.switchVal(e)}},model:{value:t.data.Title,callback:function(e){t.$set(t.data,"Title",e)},expression:"data.Title"}}),a("v-text-field",{attrs:{label:"Des",dense:""},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.switchVal(e)}},model:{value:t.data.Des,callback:function(e){t.$set(t.data,"Des",e)},expression:"data.Des"}}),a("v-btn",{attrs:{color:"primary",block:""},on:{click:t.switchVal}},[a("v-icon",[t._v("mdi-check")])],1)],1):t._e(),t.editable?t._e():a("div",{staticClass:"my-2",on:{click:t.switchVal}},[a("v-img",{attrs:{src:t.data.logo_org,height:"100",contain:""}}),a("div",{staticClass:"text-uppercase my-3 text-h4 blue--text text--darken-3 font-weight-bold",attrs:{align:"center"},domProps:{textContent:t._s(t.data.name_org)}}),a("div",{staticClass:"text-uppercase my-3 text-h5 font-weight-bold",staticStyle:{color:"#17a2b8!important"},attrs:{align:"center"},domProps:{textContent:t._s(t.data.Title)}}),a("div",{staticClass:"my-3",domProps:{textContent:t._s(t.data.Des)}})],1)])},bt=[],mt={name:"formtitle",props:{data:{name_org:String,Title:String,Des:String}},data:function(){return{editable:!1}},methods:{switchVal:function(){this.editable=!this.editable}}},vt=mt,gt=a("adda"),xt=Object(m["a"])(vt,ft,bt,!1,null,null,null),yt=xt.exports;g()(xt,{VBtn:x["a"],VIcon:y["a"],VImg:gt["a"],VTextField:T["a"]});var ht={name:"App",data:function(){return{nameTemplates:"qaform",controls:[{QID:"",Type:"TextBox",Text:"Tiêu đề",Holder:"Nhập câu hỏi"},{QID:"",Type:"FileInput",Text:"Tiêu đề"},{QID:"",Type:"TextArea",Text:"Tiêu đề",Row:"3",Holder:"Nhập nội dung"},{QID:"",Type:"Radio",Text:"Tiêu đề",Option:[{Text:"Tuỳ chọn 1"},{Text:"Tuỳ chọn 2"}]},{GroupID:this.generateUUID(),Type:"Checkbox",Text:"Tiêu đề CheckBox",Option:[{QID:this.generateUUID(),Text:"Checkbox 1"}]},{Type:"MarkTable",Text:"Tiêu đề MarkTable",Des:"Mô tả",ValueArray:[{Value:"1",Text:"Rất thấp"},{Value:"2",Text:"Thấp"},{Value:"3",Text:"Trung bình"},{Value:"4",Text:"Cao"},{Value:"5",Text:"Rất cao"}],Topic:[{GroupID:this.generateUUID(),Name:"Tiêu đề câu hỏi",Question:[{QID:this.generateUUID(),Text:"1. Câu hỏi"}]}]}],templates:{templateID:this.generateUUID(),logo_org:"https://lhu.edu.vn/ViewPage/LHUVN/_default/image/truong_dai_hoc_lac_hong_logo.png",name_org:"Trường Đại học Lạc Hồng",url_finishRedirect:"https://lhu.edu.vn",Title:"PHIẾU KHẢO SÁT",Des:"Nhằm mục đích đem đến những giá trị tốt đẹp nhất cho các bạn sinh viên. Trường Đại học Lạc Hồng rất mong các Bạn sinh viên đóng góp một số ý kiến cá nhân của bản thân. Mọi thông tin trong phiếu khảo sát sẽ được lưu trữ mang tính chất bảo mật và không công khai.",url_login:"",url_template:"",Part:[{Name:"THÔNG TIN CHUNG",Des:"",Question:[]}]}}},methods:{importTemplates:function(t){var e=this;if(t.length<=0)return!1;var a=new FileReader;a.onload=function(t){var a=JSON.parse(t.target.result);e.templates=JSON.parse(JSON.stringify(a,null,2))},a.readAsText(t)},export2txt:function(){var t=this.templates,e=document.createElement("a");e.href=URL.createObjectURL(new Blob([JSON.stringify(t,null,2)],{type:"application/json"})),e.setAttribute("download",this.nameTemplates+".json"),document.body.appendChild(e),e.click(),document.body.removeChild(e)},uuid:function(t){if(t.uid)return t.uid;var e=Math.random().toString(16).slice(2);return this.$set(t,"uid",e),t.uid},generateUUID:function(){var t=Math.floor(999999*Math.random())+1e5;return t},handleClone:function(t){var e=JSON.parse(JSON.stringify(t));return this.$delete(e,"uid"),e}},components:{draggable:p.a,session:pt,formtitle:yt},computed:{listString:function(){return JSON.stringify(this.templates,null,2)}}},kt=ht,Tt=(a("034f"),a("7496")),_t=a("da13"),Ct=a("5d23"),Ot=a("f6c4"),Vt=a("2fa4"),Dt=Object(m["a"])(kt,i,o,!1,null,null,null),It=Dt.exports;g()(Dt,{VApp:Tt["a"],VBtn:x["a"],VCard:z["a"],VCol:W["a"],VFileInput:ot["a"],VIcon:y["a"],VListItem:_t["a"],VListItemTitle:Ct["a"],VMain:Ot["a"],VRow:X["a"],VSpacer:Vt["a"],VTextField:T["a"],VToolbar:Y["a"]});var wt=a("ce5b"),Qt=a.n(wt);a("bf40");n["default"].use(Qt.a);var St={},$t=new Qt.a(St);n["default"].config.productionTip=!1,new n["default"]({vuetify:$t,render:function(t){return t(It)}}).$mount("#app")},7652:function(t,e,a){"use strict";var n=a("2eab"),i=a.n(n);i.a},"76cd":function(t,e,a){"use strict";var n=a("08f1"),i=a.n(n);i.a},"85ec":function(t,e,a){}});
//# sourceMappingURL=app.458f282d.js.map