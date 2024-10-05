(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a9a4fd7e"],{"071d":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-container"},[n("div",{staticStyle:{"margin-bottom":"10px",display:"flex","justify-content":"space-between","align-items":"center"}},[n("div",{staticStyle:{display:"flex","flex-flow":"row wrap",gap:"10px",width:"75%"}},[n("el-button",{attrs:{type:"success",size:"mini"},on:{click:function(t){return e.openDialog()}}},[e._v(" 新增 ")]),n("el-button",{attrs:{type:"primary",size:"mini",loading:e.listLoading},on:{click:function(t){return e.fetchData()}}},[e._v(" 刷新 ")]),n("el-button",{attrs:{type:"success",size:"mini",loading:e.serviceLoading},on:{click:function(t){return e.start()}}},[e._v(" 重启所有服务 ")]),n("el-button",{attrs:{type:"danger",size:"mini",loading:e.serviceLoading},on:{click:function(t){return e.stop()}}},[e._v(" 停止合约服务 ")]),n("el-button",{attrs:{type:"success",size:"mini",loading:e.serviceLoading},on:{click:function(t){return e.enableAll(1)}}},[e._v(" 启用所有币种 ")]),n("el-button",{attrs:{type:"danger",size:"mini",loading:e.serviceLoading},on:{click:function(t){return e.enableAll(0)}}},[e._v(" 停用所有币种 ")]),n("el-button",{attrs:{type:"success",size:"mini"},on:{click:function(t){e.dialogFormVisible2=!0}}},[e._v(" 批量修改 ")])],1),n("div",{staticStyle:{width:"25%","text-align":"right"}},[e._v(" 总数: "+e._s(e.list.length)+" ")])]),n("div",{staticStyle:{display:"flex","flex-flow":"row wrap",gap:"10px","margin-bottom":"10px"}},[n("el-input",{staticClass:"filter-item",staticStyle:{width:"150px"},attrs:{placeholder:"币种",size:"small"},model:{value:e.search.symbol,callback:function(t){e.$set(e.search,"symbol",t)},expression:"search.symbol"}}),n("el-select",{staticStyle:{width:"150px"},attrs:{size:"small",placeholder:"状态"},model:{value:e.search.enable,callback:function(t){e.$set(e.search,"enable",t)},expression:"search.enable"}},[n("el-option",{attrs:{label:"全部",value:""}}),n("el-option",{attrs:{label:"开启",value:"1"}}),n("el-option",{attrs:{label:"关闭",value:"0"}})],1),n("el-select",{staticStyle:{width:"150px"},attrs:{size:"small",placeholder:"仓位类型"},model:{value:e.search.margin_type,callback:function(t){e.$set(e.search,"margin_type",t)},expression:"search.margin_type"}},[n("el-option",{attrs:{label:"全部",value:""}}),n("el-option",{attrs:{label:"逐仓",value:"ISOLATED"}}),n("el-option",{attrs:{label:"全仓",value:"CROSSED"}})],1),n("el-button",{attrs:{type:"success",size:"mini"},on:{click:e.fetchData}},[e._v(" 搜索 ")])],1),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],attrs:{data:e.list,"element-loading-text":"Loading",border:"",fit:"",size:"mini","row-key":e.rowKey,"expand-row-keys":e.expandKeys,"highlight-current-row":""},on:{"sort-change":e.sortChange,"expand-change":e.expandChange}},[n("el-table-column",{attrs:{label:"币种",align:"center","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.symbol)+" ")]}}])}),n("el-table-column",{attrs:{label:"最新价",align:"center","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(e.round(t.row.close,4))+" ")]}}])}),n("el-table-column",{attrs:{label:"24h↑↓",align:"center","show-overflow-tooltip":"",sortable:"custom"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.percentChange<0?n("span",{staticStyle:{color:"red"}},[e._v(e._s(t.row.percentChange)+"%↓ ")]):n("span",{staticStyle:{color:"green"}},[e._v(e._s(t.row.percentChange)+"%↑ ")])]}}])}),n("el-table-column",{attrs:{label:"k线周期",align:"center",width:"110"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-select",{attrs:{size:"small"},on:{change:function(n){return e.edit(t.row)}},model:{value:t.row.kline_interval,callback:function(n){e.$set(t.row,"kline_interval",n)},expression:"scope.row.kline_interval"}},[n("el-option",{attrs:{label:"1m",value:"1m"}}),n("el-option",{attrs:{label:"3m",value:"3m"}}),n("el-option",{attrs:{label:"5m",value:"5m"}}),n("el-option",{attrs:{label:"15m",value:"15m"}}),n("el-option",{attrs:{label:"30m",value:"30m"}}),n("el-option",{attrs:{label:"1h",value:"1h"}}),n("el-option",{attrs:{label:"2h",value:"2h"}}),n("el-option",{attrs:{label:"4h",value:"4h"}}),n("el-option",{attrs:{label:"6h",value:"6h"}}),n("el-option",{attrs:{label:"8h",value:"8h"}}),n("el-option",{attrs:{label:"12h",value:"12h"}}),n("el-option",{attrs:{label:"1d",value:"1d"}}),n("el-option",{attrs:{label:"3d",value:"3d"}}),n("el-option",{attrs:{label:"1w",value:"1w"}}),n("el-option",{attrs:{label:"1M",value:"1M"}})],1)]}}])}),n("el-table-column",{attrs:{label:"模式",align:"center",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-select",{attrs:{size:"small"},on:{change:function(n){return e.edit(t.row)}},model:{value:t.row.marginType,callback:function(n){e.$set(t.row,"marginType",n)},expression:"scope.row.marginType"}},[n("el-option",{attrs:{label:"逐仓",value:"ISOLATED"}}),n("el-option",{attrs:{label:"全仓",value:"CROSSED"}})],1)]}}])}),n("el-table-column",{attrs:{label:"usdt",align:"center",width:"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-input",{staticClass:"edit-input",attrs:{size:"small"},on:{blur:function(n){return e.edit(t.row)}},model:{value:t.row.usdt,callback:function(n){e.$set(t.row,"usdt",n)},expression:"scope.row.usdt"}})]}}])}),n("el-table-column",{attrs:{label:"倍率",align:"center",width:"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-input",{staticClass:"edit-input",attrs:{size:"small"},on:{blur:function(n){return e.edit(t.row)}},model:{value:t.row.leverage,callback:function(n){e.$set(t.row,"leverage",n)},expression:"scope.row.leverage"}})]}}])}),n("el-table-column",{attrs:{label:"止盈%",align:"center",width:"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-input",{staticClass:"edit-input",attrs:{size:"small"},on:{blur:function(n){return e.edit(t.row)}},model:{value:t.row.profit,callback:function(n){e.$set(t.row,"profit",n)},expression:"scope.row.profit"}})]}}])}),n("el-table-column",{attrs:{label:"止损%",align:"center",width:"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-input",{staticClass:"edit-input",attrs:{size:"small"},on:{blur:function(n){return e.edit(t.row)}},model:{value:t.row.loss,callback:function(n){e.$set(t.row,"loss",n)},expression:"scope.row.loss"}})]}}])}),n("el-table-column",{attrs:{label:"开启",align:"center",width:"80"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[n("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#dcdfe6"},on:{change:function(t){return e.isChangeBuy(t,a)}},model:{value:a.enable,callback:function(t){e.$set(a,"enable",t)},expression:"row.enable"}})]}}])}),n("el-table-column",{attrs:{label:"操作",align:"center",width:"80","class-name":"small-padding fixed-width"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[n("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(t){return e.del(a)}}},[e._v("删除 ")])]}}])})],1),n("el-dialog",{attrs:{title:e.dialogTitle,visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[n("el-form",{ref:"dataForm",staticStyle:{width:"400px","margin-left":"50px"},attrs:{model:e.info,"label-position":"left","label-width":"100px"}},[n("el-form-item",{attrs:{label:"币种",prop:"symbol"}},[n("el-input",{model:{value:e.info.symbol,callback:function(t){e.$set(e.info,"symbol",t)},expression:"info.symbol"}})],1)],1),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("取消")]),n("el-button",{attrs:{type:"primary",loading:e.dialogLoading},on:{click:function(t){return e.addCoin(e.info)}}},[e._v("确定")])],1)],1),n("el-dialog",{attrs:{title:e.dialogTitle2,visible:e.dialogFormVisible2},on:{"update:visible":function(t){e.dialogFormVisible2=t}}},[n("el-form",{ref:"dataForm2",staticStyle:{width:"400px","margin-left":"50px"},attrs:{model:e.batchInfo,"label-position":"left","label-width":"100px"}},[n("el-form-item",{attrs:{label:"模式",prop:"marginType"}},[n("el-select",{attrs:{size:"small"},model:{value:e.batchInfo.marginType,callback:function(t){e.$set(e.batchInfo,"marginType",t)},expression:"batchInfo.marginType"}},[n("el-option",{attrs:{label:"逐仓",value:"ISOLATED"}}),n("el-option",{attrs:{label:"全仓",value:"CROSSED"}})],1)],1),n("el-form-item",{attrs:{label:"usdt",prop:"usdt"}},[n("el-input",{model:{value:e.batchInfo.usdt,callback:function(t){e.$set(e.batchInfo,"usdt",t)},expression:"batchInfo.usdt"}})],1),n("el-form-item",{attrs:{label:"倍数",prop:"leverage"}},[n("el-input",{model:{value:e.batchInfo.leverage,callback:function(t){e.$set(e.batchInfo,"leverage",t)},expression:"batchInfo.leverage"}})],1),n("el-form-item",{attrs:{label:"止盈%",prop:"profit"}},[n("el-input",{model:{value:e.batchInfo.profit,callback:function(t){e.$set(e.batchInfo,"profit",t)},expression:"batchInfo.profit"}})],1),n("el-form-item",{attrs:{label:"止损%",prop:"loss"}},[n("el-input",{model:{value:e.batchInfo.loss,callback:function(t){e.$set(e.batchInfo,"loss",t)},expression:"batchInfo.loss"}})],1)],1),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(t){e.dialogFormVisible2=!1}}},[e._v("取消")]),n("el-button",{attrs:{type:"primary",loading:e.dialogLoading2},on:{click:function(t){return e.batchEdit(e.batchInfo)}}},[e._v("确定")])],1)],1)],1)},r=[],o=n("15fd"),l=n("5530"),i=n("1da1"),s=(n("d81d"),n("4e82"),n("ac1f"),n("841c"),n("a9e3"),n("96cf"),n("2465")),c=n("7909"),u=["id","enable","leverage","usdt"],d={data:function(){return{list:[],sort:"+",listLoading:!1,serviceLoading:!1,enableLoading:!1,timeId:null,buyAll:!0,sellAll:!0,search:{symbol:"",enable:"",margin_type:""},dialogFormVisible:!1,dialogLoading:!1,dialogTitle:"新增币种信息",info:{},dialogFormVisible2:!1,dialogLoading2:!1,dialogTitle2:"批量修改",batchInfo:{usdt:void 0,profit:void 0,loss:void 0},rowKey:function(e){return e.symbol},expandKeys:[]}},computed:{allProfit:function(){var e=this.list.reduce((function(e,t){return e+t.nowProfit}),0);return Object(c["a"])(e,2)}},created:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.fetchData();case 2:e.timeId=setInterval((function(){return e.fetchData()}),3e4);case 3:case"end":return t.stop()}}),t)})))()},beforeDestroy:function(){clearInterval(this.timeId)},methods:{round:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;return Object(c["a"])(e,t)},expandChange:function(e,t){this.expandKeys=t.map((function(e){return e.symbol}))},sortChange:function(e){var t=e.order;this.sort="ascending"===t?"+":"-",this.fetchData()},fetchData:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var n,a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.search,t.next=3,Object(s["f"])(Object(l["a"])({sort:e.sort},n));case 3:a=t.sent,r=a.data,e.list=r.map((function(e){return Object(l["a"])(Object(l["a"])({},e),{},{enable:1==e.enable})}));case 6:case"end":return t.stop()}}),t)})))()},edit:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function n(){var a,r,i,c,d;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=e.id,r=e.enable,i=e.leverage,c=e.usdt,d=Object(o["a"])(e,u),n.prev=1,n.next=4,Object(s["h"])(a,Object(l["a"])(Object(l["a"])({},d),{},{leverage:Number(i),usdt:c,enable:r?1:0}));case 4:return t.$message({message:"修改成功",type:"success"}),n.next=7,t.fetchData();case 7:n.next=12;break;case 9:n.prev=9,n.t0=n["catch"](1),t.$message({message:"修改失败",type:"success"});case 12:case"end":return n.stop()}}),n,null,[[1,9]])})))()},del:function(e){var t=this;this.$confirm("确认要删除".concat(e.symbol,"吗？")).then(Object(i["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(s["c"])(e.id);case 3:return t.$message({message:"删除成功",type:"success"}),n.next=6,t.fetchData();case 6:n.next=11;break;case 8:n.prev=8,n.t0=n["catch"](0),t.$message({message:"删除失败",type:"success"});case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))).catch((function(){}))},enableAll:function(e){var t=this;this.$confirm("确认要".concat(1===e?"启用":"停用","所有吗？")).then(Object(i["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(s["d"])(e);case 3:return t.$message({message:"操作成功",type:"success"}),n.next=6,t.fetchData();case 6:n.next=11;break;case 8:n.prev=8,n.t0=n["catch"](0),t.$message({message:"操作失败",type:"success"});case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))).catch((function(){}))},isChangeBuy:function(e,t){var n=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,n.edit(t);case 2:case"end":return e.stop()}}),e)})))()},openDialog:function(){this.dialogTitle="新增币种信息",this.dialogFormVisible=!0},addCoin:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a={symbol:e.symbol,quantity:20,percentChange:0,close:0,open:0,low:0,enable:1,updateTime:+new Date},n.next=3,Object(s["a"])(a);case 3:t.dialogFormVisible=!1;case 4:case"end":return n.stop()}}),n)})))()},batchEdit:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(s["b"])(e);case 3:return t.batchInfo={usdt:void 0,profit:void 0,loss:void 0},t.dialogFormVisible2=!1,n.next=7,t.fetchData();case 7:n.next=12;break;case 9:n.prev=9,n.t0=n["catch"](0),t.$message({message:"修改失败",type:"success"});case 12:case"end":return n.stop()}}),n,null,[[0,9]])})))()},start:function(){var e=this;this.$confirm("此操作不可恢复，确认要开启服务吗？").then(Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.serviceLoading=!0,t.next=3,Object(s["i"])();case 3:e.$message({message:"开启成功",type:"success"}),e.serviceLoading=!1;case 5:case"end":return t.stop()}}),t)})))).catch((function(){}))},stop:function(){var e=this;this.$confirm("此操作不可恢复，确认要停止服务吗？").then(Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.serviceLoading=!0,t.next=3,Object(s["j"])();case 3:e.$message({message:"停止成功",type:"success"}),e.serviceLoading=!1;case 5:case"end":return t.stop()}}),t)})))).catch((function(){}))}}},f=d,p=n("2877"),b=Object(p["a"])(f,a,r,!1,null,null,null);t["default"]=b.exports},1:function(e,t){},"129f":function(e,t){e.exports=Object.is||function(e,t){return e===t?0!==e||1/e===1/t:e!=e&&t!=t}},"15fd":function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));n("a4d3"),n("b64b");function a(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}function r(e,t){if(null==e)return{};var n,r,o=a(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}},2465:function(e,t,n){"use strict";n.d(t,"f",(function(){return r})),n.d(t,"h",(function(){return o})),n.d(t,"a",(function(){return l})),n.d(t,"c",(function(){return i})),n.d(t,"d",(function(){return s})),n.d(t,"b",(function(){return c})),n.d(t,"e",(function(){return u})),n.d(t,"g",(function(){return d})),n.d(t,"i",(function(){return f})),n.d(t,"j",(function(){return p}));var a=n("b775");function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(a["a"])({url:"/features",method:"get",params:e})}function o(e,t){return Object(a["a"])({url:"/features/".concat(e),method:"put",data:t})}function l(e){return Object(a["a"])({url:"/features",method:"post",data:e})}function i(e){return Object(a["a"])({url:"/features/".concat(e),method:"delete"})}function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return Object(a["a"])({url:"/features/enable/".concat(e),method:"put"})}function c(e){return Object(a["a"])({url:"/features/batch",method:"put",data:e})}function u(){return Object(a["a"])({url:"/config",method:"get"})}function d(e){return Object(a["a"])({url:"/config",method:"put",data:e})}function f(){return Object(a["a"])({url:"/start",method:"post"})}function p(){return Object(a["a"])({url:"/stop",method:"post"})}},"841c":function(e,t,n){"use strict";var a=n("d784"),r=n("825a"),o=n("1d80"),l=n("129f"),i=n("14c3");a("search",1,(function(e,t,n){return[function(t){var n=o(this),a=void 0==t?void 0:t[e];return void 0!==a?a.call(t,n):new RegExp(t)[e](String(n))},function(e){var a=n(t,e,this);if(a.done)return a.value;var o=r(e),s=String(this),c=o.lastIndex;l(c,0)||(o.lastIndex=0);var u=i(o,s);return l(o.lastIndex,c)||(o.lastIndex=c),null===u?-1:u.index}]}))}}]);