(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-33a198b2"],{1:function(e,t){},"40a4":function(e,t,n){var a=n("38e0"),l=n("7b26"),o=n("87ef"),i=l("JSON","stringify"),r=/[\uD800-\uDFFF]/g,c=/^[\uD800-\uDBFF]$/,s=/^[\uDC00-\uDFFF]$/,u=function(e,t,n){var a=n.charAt(t-1),l=n.charAt(t+1);return c.test(e)&&!s.test(l)||s.test(e)&&!c.test(a)?"\\u"+e.charCodeAt(0).toString(16):e},d=o((function(){return'"\\udf06\\ud834"'!==i("\udf06\ud834")||'"\\udead"'!==i("\udead")}));i&&a({target:"JSON",stat:!0,forced:d},{stringify:function(e,t,n){var a=i.apply(null,arguments);return"string"==typeof a?a.replace(r,u):a}})},7506:function(e,t,n){"use strict";n.d(t,"d",(function(){return l})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return r})),n.d(t,"e",(function(){return c}));var a=n("b775");function l(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(a["a"])({url:"/strategy-templates",method:"get",params:e})}function o(e,t){return Object(a["a"])({url:"/strategy-templates/".concat(e),method:"put",data:t})}function i(e){return Object(a["a"])({url:"/strategy-templates",method:"post",data:e})}function r(e){return Object(a["a"])({url:"/strategy-templates/".concat(e),method:"delete"})}function c(e,t){return Object(a["a"])({url:"/strategy-templates/test/".concat(e),method:"post",data:t})}},"97c4":function(e,t,n){(function(e){e(n("c5ba"))})((function(e){var t=e.Pos;function n(e,t){for(var n=0,a=e.length;n<a;++n)t(e[n])}function a(e,t){if(!Array.prototype.indexOf){var n=e.length;while(n--)if(e[n]===t)return!0;return!1}return-1!=e.indexOf(t)}function l(n,a,l,o){var i=n.getCursor(),r=l(n,i);if(!/\b(?:string|comment)\b/.test(r.type)){var c=e.innerMode(n.getMode(),r.state);if("json"!==c.mode.helperType){r.state=c.state,/^[\w$_]*$/.test(r.string)?r.end>i.ch&&(r.end=i.ch,r.string=r.string.slice(0,i.ch-r.start)):r={start:i.ch,end:i.ch,string:"",state:r.state,type:"."==r.string?"property":null};var s=r;while("property"==s.type){if(s=l(n,t(i.line,s.start)),"."!=s.string)return;if(s=l(n,t(i.line,s.start)),!u)var u=[];u.push(s)}return{list:g(r,u,a,o),from:t(i.line,r.start),to:t(i.line,r.end)}}}}function o(e,t){return l(e,d,(function(e,t){return e.getTokenAt(t)}),t)}function i(e,t){var n=e.getTokenAt(t);return t.ch==n.start+1&&"."==n.string.charAt(0)?(n.end=n.start,n.string=".",n.type="property"):/^\.[\w$_]*$/.test(n.string)&&(n.type="property",n.start++,n.string=n.string.replace(/\./,"")),n}function r(e,t){return l(e,f,i,t)}e.registerHelper("hint","javascript",o),e.registerHelper("hint","coffeescript",r);var c="charAt charCodeAt indexOf lastIndexOf substring substr slice trim trimLeft trimRight toUpperCase toLowerCase split concat match replace search".split(" "),s="length concat join splice push pop shift unshift slice reverse sort indexOf lastIndexOf every some filter forEach map reduce reduceRight ".split(" "),u="prototype apply call bind".split(" "),d="break case catch class const continue debugger default delete do else export extends false finally for function if in import instanceof new null return super switch this throw true try typeof var void while with yield".split(" "),f="and break catch class continue delete do else extends false finally for if in instanceof isnt new no not null of off on or return switch then throw true try typeof until void while with yes".split(" ");function p(e,t){if(Object.getOwnPropertyNames&&Object.getPrototypeOf)for(var n=e;n;n=Object.getPrototypeOf(n))Object.getOwnPropertyNames(n).forEach(t);else for(var a in e)t(a)}function g(e,t,l,o){var i=[],r=e.string,d=o&&o.globalScope||window;function f(e){0!=e.lastIndexOf(r,0)||a(i,e)||i.push(e)}function g(e){"string"==typeof e?n(c,f):e instanceof Array?n(s,f):e instanceof Function&&n(u,f),p(e,f)}if(t&&t.length){var b,h=t.pop();h.type&&0===h.type.indexOf("variable")?(o&&o.additionalContext&&(b=o.additionalContext[h.string]),o&&!1===o.useGlobalScope||(b=b||d[h.string])):"string"==h.type?b="":"atom"==h.type?b=1:"function"==h.type&&(null==d.jQuery||"$"!=h.string&&"jQuery"!=h.string||"function"!=typeof d.jQuery?null!=d._&&"_"==h.string&&"function"==typeof d._&&(b=d._()):b=d.jQuery());while(null!=b&&t.length)b=b[t.pop().string];null!=b&&g(b)}else{for(var m=e.state.localVars;m;m=m.next)f(m.name);for(m=e.state.globalVars;m;m=m.next)f(m.name);o&&!1===o.useGlobalScope||g(d),n(l,f)}return i}}))},a6a9:function(e,t,n){"use strict";var a=n("38e0"),l=n("33e4").find,o=n("6466"),i=n("effa"),r="find",c=!0,s=i(r);r in[]&&Array(1)[r]((function(){c=!1})),a({target:"Array",proto:!0,forced:c||!s},{find:function(e){return l(this,e,arguments.length>1?arguments[1]:void 0)}}),o(r)},d04b:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-container"},[n("div",{staticStyle:{"margin-bottom":"10px"}},[n("el-button",{attrs:{type:"success",size:"mini"},on:{click:function(t){return e.openDialog()}}},[e._v(" "+e._s(e.$t("table.add"))+" ")]),n("el-button",{attrs:{type:"primary",size:"mini",loading:e.listLoading},on:{click:function(t){return e.fetchData()}}},[e._v(" "+e._s(e.$t("table.refresh"))+" ")])],1),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],attrs:{data:e.list,"element-loading-text":"Loading",border:"",fit:"",size:"mini","row-key":e.rowKey,"expand-row-keys":e.expandKeys,"highlight-current-row":""}},[n("el-table-column",{attrs:{label:e.$t("trade.name"),align:"center","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.name)+" ")]}}])}),n("el-table-column",{attrs:{label:e.$t("trade.technology"),align:"center",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{attrs:{type:"success",size:"mini"},on:{click:function(n){return e.openTechnologyDialog(t.row)}}},[e._v(" "+e._s(e.$t("trade.technology"))+" ")])]}}])}),n("el-table-column",{attrs:{label:e.$t("trade.strategy"),align:"center",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{attrs:{type:"success",size:"mini"},on:{click:function(n){return e.openStrategyDialog(t.row)}}},[e._v(" "+e._s(e.$t("trade.strategy"))+" ")])]}}])}),n("el-table-column",{attrs:{label:e.$t("table.actions"),align:"center",width:"80","class-name":"small-padding fixed-width"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[n("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(t){return e.del(a)}}},[e._v(e._s(e.$t("table.delete"))+" ")])]}}])})],1),n("el-dialog",{attrs:{title:e.dialogTitle,visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[n("el-form",{ref:"dataForm",staticStyle:{width:"400px","margin-left":"50px"},attrs:{model:e.info,"label-position":"left","label-width":"100px"}},[n("el-form-item",{attrs:{label:e.$t("trade.name"),prop:"name"}},[n("el-input",{model:{value:e.info.name,callback:function(t){e.$set(e.info,"name",t)},expression:"info.name"}})],1)],1),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v(e._s(e.$t("table.cancel")))]),n("el-button",{attrs:{type:"primary",loading:e.dialogLoading},on:{click:function(t){return e.addData(e.info)}}},[e._v(e._s(e.$t("table.confirm")))])],1)],1),n("el-dialog",{attrs:{title:e.dialogTechnologyTitle,visible:e.dialogTechnologyVisible},on:{"update:visible":function(t){e.dialogTechnologyVisible=t}}},[n("el-tabs",{attrs:{value:"ma"}},[n("el-tab-pane",{attrs:{label:"ma",name:"ma"}},[n("div",[n("el-button",{attrs:{type:"primary"},on:{click:e.addMa}},[e._v(e._s(e.$t("table.add")))])],1),n("el-table",{staticStyle:{"margin-top":"10px"},attrs:{data:e.technology.ma,border:"",fit:"",size:"mini","highlight-current-row":""}},[n("el-table-column",{attrs:{label:e.$t("technology.name"),align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-input",{staticClass:"edit-input",attrs:{size:"small"},model:{value:t.row.name,callback:function(n){e.$set(t.row,"name",n)},expression:"scope.row.name"}})]}}])}),n("el-table-column",{attrs:{label:e.$t("technology.klineInterval"),align:"center",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-select",{attrs:{size:"small"},model:{value:t.row.kline_interval,callback:function(n){e.$set(t.row,"kline_interval",n)},expression:"scope.row.kline_interval"}},e._l(e.klineInterval,(function(e){return n("el-option",{key:e,attrs:{label:e,value:e}})})),1)]}}])}),n("el-table-column",{attrs:{label:e.$t("technology.period"),align:"center",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-input",{staticClass:"edit-input",attrs:{size:"small"},model:{value:t.row.period,callback:function(n){e.$set(t.row,"period",n)},expression:"scope.row.period"}})]}}])}),n("el-table-column",{attrs:{label:e.$t("technology.enable"),align:"center",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#dcdfe6"},model:{value:t.row.enable,callback:function(n){e.$set(t.row,"enable",n)},expression:"scope.row.enable"}})]}}])}),n("el-table-column",{attrs:{label:e.$t("table.actions"),align:"center",width:"100","class-name":"small-padding fixed-width"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(n){return e.delMa(t)}}},[e._v(e._s(e.$t("table.delete"))+" ")])]}}])})],1)],1),n("el-tab-pane",{attrs:{label:"ema",name:"ema"}},[n("div",[n("el-button",{attrs:{type:"primary"},on:{click:e.addEma}},[e._v(e._s(e.$t("table.add")))])],1),n("el-table",{staticStyle:{"margin-top":"10px"},attrs:{data:e.technology.ema,border:"",fit:"",size:"mini","highlight-current-row":""}},[n("el-table-column",{attrs:{label:e.$t("technology.name"),align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-input",{staticClass:"edit-input",attrs:{size:"small"},model:{value:t.row.name,callback:function(n){e.$set(t.row,"name",n)},expression:"scope.row.name"}})]}}])}),n("el-table-column",{attrs:{label:e.$t("technology.klineInterval"),align:"center",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-select",{attrs:{size:"small"},model:{value:t.row.kline_interval,callback:function(n){e.$set(t.row,"kline_interval",n)},expression:"scope.row.kline_interval"}},e._l(e.klineInterval,(function(e){return n("el-option",{key:e,attrs:{label:e,value:e}})})),1)]}}])}),n("el-table-column",{attrs:{label:e.$t("technology.period"),align:"center",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-input",{staticClass:"edit-input",attrs:{size:"small"},model:{value:t.row.period,callback:function(n){e.$set(t.row,"period",n)},expression:"scope.row.period"}})]}}])}),n("el-table-column",{attrs:{label:e.$t("technology.enable"),align:"center",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#dcdfe6"},model:{value:t.row.enable,callback:function(n){e.$set(t.row,"enable",n)},expression:"scope.row.enable"}})]}}])}),n("el-table-column",{attrs:{label:e.$t("table.actions"),align:"center",width:"100","class-name":"small-padding fixed-width"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(n){return e.delEma(t)}}},[e._v(e._s(e.$t("table.delete"))+" ")])]}}])})],1)],1),n("el-tab-pane",{attrs:{label:"rsi",name:"rsi"}},[n("div",[n("el-button",{attrs:{type:"primary"},on:{click:e.addRsi}},[e._v(e._s(e.$t("table.add")))])],1),n("el-table",{staticStyle:{"margin-top":"10px"},attrs:{data:e.technology.rsi,border:"",fit:"",size:"mini","highlight-current-row":""}},[n("el-table-column",{attrs:{label:e.$t("technology.name"),align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-input",{staticClass:"edit-input",attrs:{size:"small"},model:{value:t.row.name,callback:function(n){e.$set(t.row,"name",n)},expression:"scope.row.name"}})]}}])}),n("el-table-column",{attrs:{label:e.$t("technology.klineInterval"),align:"center",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-select",{attrs:{size:"small"},model:{value:t.row.kline_interval,callback:function(n){e.$set(t.row,"kline_interval",n)},expression:"scope.row.kline_interval"}},e._l(e.klineInterval,(function(e){return n("el-option",{key:e,attrs:{label:e,value:e}})})),1)]}}])}),n("el-table-column",{attrs:{label:e.$t("technology.period"),align:"center",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-input",{staticClass:"edit-input",attrs:{size:"small"},model:{value:t.row.period,callback:function(n){e.$set(t.row,"period",n)},expression:"scope.row.period"}})]}}])}),n("el-table-column",{attrs:{label:e.$t("technology.enable"),align:"center",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#dcdfe6"},model:{value:t.row.enable,callback:function(n){e.$set(t.row,"enable",n)},expression:"scope.row.enable"}})]}}])}),n("el-table-column",{attrs:{label:e.$t("table.actions"),align:"center",width:"100","class-name":"small-padding fixed-width"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(n){return e.delRsi(t)}}},[e._v(e._s(e.$t("table.delete"))+" ")])]}}])})],1)],1),n("el-tab-pane",{attrs:{label:"kc",name:"kc"}},[n("div",[n("el-button",{attrs:{type:"primary"},on:{click:e.addKc}},[e._v(e._s(e.$t("table.add")))])],1),n("el-table",{staticStyle:{"margin-top":"10px"},attrs:{data:e.technology.kc,border:"",fit:"",size:"mini","highlight-current-row":""}},[n("el-table-column",{attrs:{label:e.$t("technology.name"),align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-input",{staticClass:"edit-input",attrs:{size:"small"},model:{value:t.row.name,callback:function(n){e.$set(t.row,"name",n)},expression:"scope.row.name"}})]}}])}),n("el-table-column",{attrs:{label:e.$t("technology.klineInterval"),align:"center",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-select",{attrs:{size:"small"},model:{value:t.row.kline_interval,callback:function(n){e.$set(t.row,"kline_interval",n)},expression:"scope.row.kline_interval"}},e._l(e.klineInterval,(function(e){return n("el-option",{key:e,attrs:{label:e,value:e}})})),1)]}}])}),n("el-table-column",{attrs:{label:e.$t("technology.period"),align:"center",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-input",{staticClass:"edit-input",attrs:{size:"small"},model:{value:t.row.period,callback:function(n){e.$set(t.row,"period",n)},expression:"scope.row.period"}})]}}])}),n("el-table-column",{attrs:{label:e.$t("technology.multiplier"),align:"center",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-input",{staticClass:"edit-input",attrs:{size:"small"},model:{value:t.row.multiplier,callback:function(n){e.$set(t.row,"multiplier",n)},expression:"scope.row.multiplier"}})]}}])}),n("el-table-column",{attrs:{label:e.$t("technology.enable"),align:"center",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#dcdfe6"},model:{value:t.row.enable,callback:function(n){e.$set(t.row,"enable",n)},expression:"scope.row.enable"}})]}}])}),n("el-table-column",{attrs:{label:e.$t("table.actions"),align:"center",width:"100","class-name":"small-padding fixed-width"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(n){return e.delKc(t)}}},[e._v(e._s(e.$t("table.delete"))+" ")])]}}])})],1)],1),n("el-tab-pane",{attrs:{label:"boll",name:"boll"}},[n("div",[n("el-button",{attrs:{type:"primary"},on:{click:e.addBoll}},[e._v(e._s(e.$t("table.add")))])],1),n("el-table",{staticStyle:{"margin-top":"10px"},attrs:{data:e.technology.boll,border:"",fit:"",size:"mini","highlight-current-row":""}},[n("el-table-column",{attrs:{label:e.$t("technology.name"),align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-input",{staticClass:"edit-input",attrs:{size:"small"},model:{value:t.row.name,callback:function(n){e.$set(t.row,"name",n)},expression:"scope.row.name"}})]}}])}),n("el-table-column",{attrs:{label:e.$t("technology.klineInterval"),align:"center",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-select",{attrs:{size:"small"},model:{value:t.row.kline_interval,callback:function(n){e.$set(t.row,"kline_interval",n)},expression:"scope.row.kline_interval"}},e._l(e.klineInterval,(function(e){return n("el-option",{key:e,attrs:{label:e,value:e}})})),1)]}}])}),n("el-table-column",{attrs:{label:e.$t("technology.period"),align:"center",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-input",{staticClass:"edit-input",attrs:{size:"small"},model:{value:t.row.period,callback:function(n){e.$set(t.row,"period",n)},expression:"scope.row.period"}})]}}])}),n("el-table-column",{attrs:{label:e.$t("technology.std_dev_multiplier"),align:"center",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-input",{staticClass:"edit-input",attrs:{size:"small"},model:{value:t.row.std_dev_multiplier,callback:function(n){e.$set(t.row,"std_dev_multiplier",n)},expression:"scope.row.std_dev_multiplier"}})]}}])}),n("el-table-column",{attrs:{label:e.$t("technology.enable"),align:"center",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#dcdfe6"},model:{value:t.row.enable,callback:function(n){e.$set(t.row,"enable",n)},expression:"scope.row.enable"}})]}}])}),n("el-table-column",{attrs:{label:e.$t("table.actions"),align:"center",width:"100","class-name":"small-padding fixed-width"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(n){return e.delBoll(t)}}},[e._v(e._s(e.$t("table.delete"))+" ")])]}}])})],1)],1),n("el-tab-pane",{attrs:{label:"atr",name:"atr"}},[n("div",[n("el-button",{attrs:{type:"primary"},on:{click:e.addAtr}},[e._v(e._s(e.$t("table.add")))])],1),n("el-table",{staticStyle:{"margin-top":"10px"},attrs:{data:e.technology.atr,border:"",fit:"",size:"mini","highlight-current-row":""}},[n("el-table-column",{attrs:{label:e.$t("technology.name"),align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-input",{staticClass:"edit-input",attrs:{size:"small"},model:{value:t.row.name,callback:function(n){e.$set(t.row,"name",n)},expression:"scope.row.name"}})]}}])}),n("el-table-column",{attrs:{label:e.$t("technology.klineInterval"),align:"center",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-select",{attrs:{size:"small"},model:{value:t.row.kline_interval,callback:function(n){e.$set(t.row,"kline_interval",n)},expression:"scope.row.kline_interval"}},e._l(e.klineInterval,(function(e){return n("el-option",{key:e,attrs:{label:e,value:e}})})),1)]}}])}),n("el-table-column",{attrs:{label:e.$t("technology.period"),align:"center",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-input",{staticClass:"edit-input",attrs:{size:"small"},model:{value:t.row.period,callback:function(n){e.$set(t.row,"period",n)},expression:"scope.row.period"}})]}}])}),n("el-table-column",{attrs:{label:e.$t("technology.enable"),align:"center",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#dcdfe6"},model:{value:t.row.enable,callback:function(n){e.$set(t.row,"enable",n)},expression:"scope.row.enable"}})]}}])}),n("el-table-column",{attrs:{label:e.$t("table.actions"),align:"center",width:"100","class-name":"small-padding fixed-width"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(n){return e.delAtr(t)}}},[e._v(e._s(e.$t("table.delete"))+" ")])]}}])})],1)],1)],1),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(t){e.dialogTechnologyVisible=!1}}},[e._v(e._s(e.$t("table.cancel")))]),n("el-button",{attrs:{type:"primary",loading:e.dialogLoading},on:{click:function(t){return e.confirmTechnology()}}},[e._v(e._s(e.$t("table.confirm")))])],1)],1),n("el-dialog",{attrs:{title:e.dialogStrategyTitle,visible:e.dialogStrategyVisible,width:"75%"},on:{"update:visible":function(t){e.dialogStrategyVisible=t}}},[n("div",[n("el-button",{attrs:{type:"primary"},on:{click:e.addStrategy}},[e._v(e._s(e.$t("table.add")))])],1),n("el-table",{staticStyle:{"margin-top":"10px"},attrs:{data:e.strategy,border:"",fit:"",size:"mini","highlight-current-row":""}},[n("el-table-column",{attrs:{label:e.$t("strategy.name"),align:"center",width:"300"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-input",{staticClass:"edit-input",attrs:{size:"small"},model:{value:t.row.name,callback:function(n){e.$set(t.row,"name",n)},expression:"scope.row.name"}})]}}])}),n("el-table-column",{attrs:{label:e.$t("strategy.code"),align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-input",{staticClass:"edit-input",attrs:{type:"textarea",rows:6,size:"small"},model:{value:t.row.code,callback:function(n){e.$set(t.row,"code",n)},expression:"scope.row.code"}})]}}])}),n("el-table-column",{attrs:{label:e.$t("strategy.fullScreen"),align:"center",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#dcdfe6"},on:{change:function(n){return e.fullCodeScreenChange(t.row,t.$index)}},model:{value:t.row.fullScreen,callback:function(n){e.$set(t.row,"fullScreen",n)},expression:"scope.row.fullScreen"}})]}}])}),n("el-table-column",{attrs:{label:e.$t("strategy.type"),align:"center",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-select",{attrs:{size:"small"},model:{value:t.row.type,callback:function(n){e.$set(t.row,"type",n)},expression:"scope.row.type"}},[n("el-option",{attrs:{label:e.$t("trade.long"),value:"long"}}),n("el-option",{attrs:{label:e.$t("trade.short"),value:"short"}})],1)]}}])}),n("el-table-column",{attrs:{label:e.$t("strategy.enable"),align:"center",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#dcdfe6"},model:{value:t.row.enable,callback:function(n){e.$set(t.row,"enable",n)},expression:"scope.row.enable"}})]}}])}),n("el-table-column",{attrs:{label:e.$t("table.actions"),align:"center",width:"100","class-name":"small-padding fixed-width"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(n){return e.delStrategy(t)}}},[e._v(e._s(e.$t("table.delete"))+" ")])]}}])})],1),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(t){e.dialogStrategyVisible=!1}}},[e._v(e._s(e.$t("table.cancel")))]),n("el-button",{attrs:{type:"primary",loading:e.dialogLoading},on:{click:function(t){return e.confirmStrategy()}}},[e._v(e._s(e.$t("table.confirm")))])],1)],1),n("el-dialog",{attrs:{title:e.dialogCodeTitle,visible:e.dialogCodeVisible,fullscreen:""},on:{"update:visible":function(t){e.dialogCodeVisible=t},closed:e.codeScreenClose}},[n("div",{staticClass:"code-full",staticStyle:{width:"100%"}},[n("div",{staticStyle:{"margin-bottom":"10px",display:"flex","justify-content":"space-between","align-items":"center"}},[n("div",{staticStyle:{display:"flex","flex-flow":"row wrap",gap:"10px",width:"75%"}},[n("el-link",{attrs:{href:"https://expr-lang.org/docs/language-definition",type:"success",target:"_blank"}},[e._v("code rule")])],1),n("el-button",{attrs:{type:"primary"},on:{click:e.testStrategyRule}},[e._v(e._s(e.$t("table.test"))+" ")])],1),n("codemirror",{ref:"cmEditor",attrs:{value:e.code,options:e.cmOptions},on:{ready:e.onCmReady,focus:e.onCmFocus,input:e.onCmCodeChange}})],1)])],1)},l=[],o=n("8204"),i=n("b8c8"),r=n("dd36"),c=n("fee1"),s=(n("e168"),n("3dd5"),n("a6a9"),n("4cc3"),n("452e"),n("40a4"),n("374d"),n("5227"),n("90c8"),n("4a51"),n("3363"),n("8a0d"),n("f2e9"),n("3399"),n("7506")),u=n("1888"),d=n("ed08"),f=n("c5ba"),p=n.n(f),g=n("1ca5"),b=(n("7392"),n("cedf"),n("1657"),n("d8c5"),n("8f95"),n("31af"),n("e83b"),n("8961"),n("45d2"),n("7f27"),n("669a"),n("be82"),n("d770"),n("30fe"),n("3a45"),n("4a07"),n("a7ed"),n("cb97"),n("0c7b"),n("065a"),n("5ca6"),n("2399"),n("67ed"),n("6367"),n("5734"),n("97c4"),n("df07"),{ma:[],ema:[],rsi:[],kc:[],boll:[],atr:[]}),h={components:{codemirror:g["codemirror"]},data:function(){return{klineInterval:["1m","3m","5m","15m","30m","1h","2h","4h","6h","8h","12h","1d","3d","1w","1M"],list:[],listLoading:!1,dialogFormVisible:!1,dialogLoading:!1,dialogTitle:"add template",info:{},rowKey:function(e){return e.id},expandKeys:[],dialogTechnologyTitle:"",dialogTechnologyVisible:!1,technologySymbolId:0,technology:JSON.parse(JSON.stringify(b)),dialogStrategyTitle:"",dialogStrategyVisible:!1,strategySymbolId:0,strategy:[],code:"",cmOptions:{tabSize:2,mode:"text/x-go",theme:"monokai",lineNumbers:!0,line:!0,foldGutter:!0,lineWrapping:!0,autoFormatJson:!0,jsonIndentation:!0,gutters:["CodeMirror-linenumbers","CodeMirror-foldgutter","CodeMirror-lint-markers"],extraKeys:{Tab:"autocomplete"},hintOptions:{completeSingle:!1,hint:this.customHint}},dialogCodeTitle:"",dialogCodeVisible:!1,strategyIndex:void 0}},created:function(){var e=this;return Object(c["a"])(Object(r["a"])().mark((function t(){return Object(r["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.fetchData();case 2:case"end":return t.stop()}}),t)})))()},methods:{customHint:function(e){var t=e.getCursor(),n=e.getTokenAt(t),a=n.start,l=n.end,o=n.string,i=this.getHints(o),r={list:i.map((function(e){return{text:e}})),from:p.a.Pos(t.line,a),to:p.a.Pos(t.line,l)};return r},getHints:function(e){var t=this,n=["let","trim","upper","lower","split","replace","repeat","indexOf","hasPrefix","now()","max","min","abs","ceil","floor","round","all","any","one","none","map","filter","find","findIndex","findLast","groupBy","count","concat","join","reduce","sum","mean","median","first","last","take","reverse","sort","sortBy","keys","values","len","Kdj","IsDesc","IsAsc","NowPrice","NowTime"];if(void 0!==this.strategySymbolId){var a=this.list.find((function(e){return e.id===t.strategySymbolId}));if(a){var l={};try{l=JSON.parse(a.technology)}catch(p){l={}}var o=new Set;Object.keys(l).forEach((function(e){l[e].forEach((function(t){if(t.enable)switch(n.push(t.name),t.kline_interval&&o.add(t.kline_interval),e){case"ma":case"ema":case"rsi":case"atr":n.push("".concat(t.name,".KlineInterval")),n.push("".concat(t.name,".Period")),n.push("".concat(t.name,".Data")),n.push("".concat(t.name,".Data[]"));break;case"kc":n.push("".concat(t.name,".KlineInterval")),n.push("".concat(t.name,".Period")),n.push("".concat(t.name,".Multiplier")),n.push("".concat(t.name,".High")),n.push("".concat(t.name,".High[]")),n.push("".concat(t.name,".Low")),n.push("".concat(t.name,".Low[]")),n.push("".concat(t.name,".Mid")),n.push("".concat(t.name,".Mid[]"));break;case"boll":n.push("".concat(t.name,".KlineInterval")),n.push("".concat(t.name,".Period")),n.push("".concat(t.name,".StdDevMultiplier")),n.push("".concat(t.name,".High")),n.push("".concat(t.name,".High[]")),n.push("".concat(t.name,".Low")),n.push("".concat(t.name,".Low[]")),n.push("".concat(t.name,".Mid")),n.push("".concat(t.name,".Mid[]"));break}}))})),o.forEach((function(e){n.push("kline_".concat(e)),n.push("kline_".concat(e,".High")),n.push("kline_".concat(e,".High[]")),n.push("kline_".concat(e,".Low")),n.push("kline_".concat(e,".Low[]")),n.push("kline_".concat(e,".Close")),n.push("kline_".concat(e,".Close[]")),n.push("kline_".concat(e,".Open")),n.push("kline_".concat(e,".Open[]"))}))}}for(var i=0,r=["BTCUSDT","ETHUSDT"];i<r.length;i++){var c=r[i];n.push("".concat(c,".PercentChange")),n.push("".concat(c,".Close")),n.push("".concat(c,".Open")),n.push("".concat(c,".Low")),n.push("".concat(c,".High"))}for(var s=[],u=0,d=n;u<d.length;u++){var f=d[u];f.startsWith(e)&&s.push(f)}return s},fullCodeScreenChange:function(e,t){e.fullScreen?(this.dialogCodeTitle="".concat(e.name," code"),this.code=e.code,this.strategyIndex=t,this.dialogCodeVisible=!0):(this.code="",this.strategyIndex=void 0,this.dialogCodeVisible=!1)},codeScreenClose:function(){void 0!==this.strategyIndex&&(this.strategy[this.strategyIndex].fullScreen=!1,this.strategy=Object(i["a"])(this.strategy),this.code="",this.strategyIndex=void 0,this.dialogCodeVisible=!1)},testStrategyRule:function(){var e=this;return Object(c["a"])(Object(r["a"])().mark((function t(){var n,a,l,o,i;return Object(r["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(t.prev=0,void 0===e.strategySymbolId){t.next=11;break}return n=JSON.stringify([{name:"test_strategy",type:"long",code:e.code,fullScreen:!1,enable:!0}]),a=e.list.find((function(t){return t.id===e.strategySymbolId})),l=a.technology,t.next=7,Object(s["e"])("BTCUSDT",{strategy:n,technology:l});case 7:o=t.sent,200===o.code&&e.$message({message:"result: ".concat(null===o||void 0===o||null===(i=o.data)||void 0===i?void 0:i.pass),type:"success"}),t.next=12;break;case 11:e.$message({message:e.$t("table.actionFail"),type:"error"});case 12:t.next=17;break;case 14:t.prev=14,t.t0=t["catch"](0),e.$message({message:e.$t("table.actionFail"),type:"error"});case 17:case"end":return t.stop()}}),t,null,[[0,14]])})))()},onCmReady:function(e){},onCmFocus:function(e){},onCmCodeChange:function(e){this.code=e,void 0!==this.strategyIndex&&(this.strategy[this.strategyIndex].code=e,this.strategy=Object(i["a"])(this.strategy))},parseTime:d["c"],fetchData:function(){var e=this;return Object(c["a"])(Object(r["a"])().mark((function t(){var n,a;return Object(r["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(s["d"])();case 2:n=t.sent,a=n.data,e.list=a;case 5:case"end":return t.stop()}}),t)})))()},del:function(e){var t=this;this.$confirm(this.$t("table.deleteConfirm")+" ".concat(e.name," ？")).then(Object(c["a"])(Object(r["a"])().mark((function n(){return Object(r["a"])().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(s["b"])(e.id);case 3:return t.$message({message:t.$t("table.deleteSuccess"),type:"success"}),n.next=6,t.fetchData();case 6:n.next=11;break;case 8:n.prev=8,n.t0=n["catch"](0),t.$message({message:t.$t("table.deleteFail"),type:"success"});case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))).catch((function(){}))},openDialog:function(){this.dialogTitle=this.$t("table.add"),this.dialogFormVisible=!0},openTechnologyDialog:function(e){var t=this;return Object(c["a"])(Object(r["a"])().mark((function n(){return Object(r["a"])().wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(t.technologySymbolId=e.id,e.technology)try{t.technology=Object(o["a"])(Object(o["a"])({},JSON.parse(JSON.stringify(b))),JSON.parse(e.technology))}catch(a){t.technology=JSON.parse(JSON.stringify(b))}else t.technology=JSON.parse(JSON.stringify(b));t.dialogTechnologyTitle="".concat(e.name," ").concat(t.$t("trade.technology")),t.dialogTechnologyVisible=!0;case 4:case"end":return n.stop()}}),n)})))()},openStrategyDialog:function(e){var t=this;return Object(c["a"])(Object(r["a"])().mark((function n(){return Object(r["a"])().wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(t.strategySymbolId=e.id,e.strategy)try{t.strategy=JSON.parse(e.strategy)}catch(a){t.strategy=[]}else t.strategy=[];t.dialogStrategyTitle="".concat(e.name," ").concat(t.$t("trade.strategy")),t.dialogStrategyVisible=!0;case 4:case"end":return n.stop()}}),n)})))()},addData:function(e){var t=this;return Object(c["a"])(Object(r["a"])().mark((function n(){var a;return Object(r["a"])().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=Object(o["a"])({},e),n.next=3,Object(s["a"])(a);case 3:return n.next=5,t.fetchData();case 5:t.dialogFormVisible=!1;case 6:case"end":return n.stop()}}),n)})))()},roundOrderPrice:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n={MKRUSDT:1,CRVUSDT:3,XTZUSDT:3};return n[t]?Object(u["a"])(e,n[t]):e>500?Object(u["a"])(e,1):e>10?Object(u["a"])(e,2):e>1?Object(u["a"])(e,3):e>.1?Object(u["a"])(e,4):e>.01?Object(u["a"])(e,5):Object(u["a"])(e,6)},confirmTechnology:function(){var e=this;return Object(c["a"])(Object(r["a"])().mark((function t(){return Object(r["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,Object.keys(e.technology).forEach((function(t){e.technology[t].forEach((function(e){e.period&&(e.period=Number(e.period)),e.multiplier&&(e.multiplier=Number(e.multiplier)),e.std_dev_multiplier&&(e.std_dev_multiplier=Number(e.std_dev_multiplier))}))})),t.next=4,Object(s["c"])(e.technologySymbolId,{technology:JSON.stringify(e.technology)});case 4:return e.$message({message:e.$t("table.actionSuccess"),type:"success"}),t.next=7,e.fetchData();case 7:t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](0),e.$message({message:e.$t("table.actionFail"),type:"success"});case 12:case"end":return t.stop()}}),t,null,[[0,9]])})))()},confirmStrategy:function(){var e=this;return Object(c["a"])(Object(r["a"])().mark((function t(){return Object(r["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(s["c"])(e.strategySymbolId,{strategy:JSON.stringify(e.strategy)});case 3:return e.$message({message:e.$t("table.actionSuccess"),type:"success"}),t.next=6,e.fetchData();case 6:t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),e.$message({message:e.$t("table.actionFail"),type:"success"});case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))()},addMa:function(){this.technology.ma=[].concat(Object(i["a"])(this.technology.ma),[{name:"",kline_interval:"",period:14,enable:!1}])},delMa:function(e){this.technology.ma=this.technology.ma.filter((function(t,n){return n!==e.$index}))},addEma:function(){this.technology.ema=[].concat(Object(i["a"])(this.technology.ema),[{name:"",kline_interval:"",period:14,enable:!1}])},delEma:function(e){this.technology.ema=this.technology.ema.filter((function(t,n){return n!==e.$index}))},addRsi:function(){this.technology.rsi=[].concat(Object(i["a"])(this.technology.rsi),[{name:"",kline_interval:"",period:14,enable:!1}])},delRsi:function(e){this.technology.rsi=this.technology.rsi.filter((function(t,n){return n!==e.$index}))},addKc:function(){this.technology.kc=[].concat(Object(i["a"])(this.technology.kc),[{name:"",kline_interval:"",period:50,multiplier:2.75,enable:!1}])},delKc:function(e){this.technology.kc=this.technology.kc.filter((function(t,n){return n!==e.$index}))},addBoll:function(){this.technology.boll=[].concat(Object(i["a"])(this.technology.boll),[{name:"",kline_interval:"",period:21,std_dev_multiplier:2,enable:!1}])},delBoll:function(e){this.technology.boll=this.technology.boll.filter((function(t,n){return n!==e.$index}))},addAtr:function(){this.technology.atr=[].concat(Object(i["a"])(this.technology.atr),[{name:"",kline_interval:"",period:14,enable:!1}])},delAtr:function(e){this.technology.atr=this.technology.atr.filter((function(t,n){return n!==e.$index}))},addStrategy:function(){this.strategy=[].concat(Object(i["a"])(this.strategy),[{name:"",type:"",code:"",fullScreen:!1,enable:!1}])},delStrategy:function(e){this.strategy=this.strategy.filter((function(t,n){return n!==e.$index}))}}},m=h,y=(n("d4f7"),n("9bf6")),v=Object(y["a"])(m,a,l,!1,null,null,null);t["default"]=v.exports},d4f7:function(e,t,n){"use strict";n("e6de")},df07:function(e,t,n){(function(e){e(n("c5ba"))})((function(e){"use strict";var t=/[\w$]+/,n=500;e.registerHelper("hint","anyword",(function(a,l){var o=l&&l.word||t,i=l&&l.range||n,r=a.getCursor(),c=a.getLine(r.line),s=r.ch,u=s;while(u&&o.test(c.charAt(u-1)))--u;for(var d=u!=s&&c.slice(u,s),f=l&&l.list||[],p={},g=new RegExp(o.source,"g"),b=-1;b<=1;b+=2)for(var h=r.line,m=Math.min(Math.max(h+b*i,a.firstLine()),a.lastLine())+b;h!=m;h+=b){var y,v=a.getLine(h);while(y=g.exec(v))h==r.line&&y[0]===d||d&&0!=y[0].lastIndexOf(d,0)||Object.prototype.hasOwnProperty.call(p,y[0])||(p[y[0]]=!0,f.push(y[0]))}return{list:f,from:e.Pos(r.line,u),to:e.Pos(r.line,s)}}))}))},e6de:function(e,t,n){}}]);