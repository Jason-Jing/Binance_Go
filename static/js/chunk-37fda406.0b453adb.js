(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-37fda406"],{2465:function(t,e,a){"use strict";a.d(e,"g",(function(){return i})),a.d(e,"n",(function(){return o})),a.d(e,"a",(function(){return s})),a.d(e,"c",(function(){return c})),a.d(e,"e",(function(){return r})),a.d(e,"b",(function(){return l})),a.d(e,"f",(function(){return u})),a.d(e,"m",(function(){return d})),a.d(e,"o",(function(){return f})),a.d(e,"p",(function(){return v})),a.d(e,"h",(function(){return g})),a.d(e,"j",(function(){return p})),a.d(e,"i",(function(){return b})),a.d(e,"l",(function(){return h})),a.d(e,"r",(function(){return m})),a.d(e,"d",(function(){return _})),a.d(e,"k",(function(){return x})),a.d(e,"q",(function(){return w}));var n=a("b775");function i(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(n["a"])({url:"/features",method:"get",params:t})}function o(t,e){return Object(n["a"])({url:"/features/".concat(t),method:"put",data:e})}function s(t){return Object(n["a"])({url:"/features",method:"post",data:t})}function c(t){return Object(n["a"])({url:"/features/".concat(t),method:"delete"})}function r(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return Object(n["a"])({url:"/features/enable/".concat(t),method:"put"})}function l(t){return Object(n["a"])({url:"/features/batch",method:"put",data:t})}function u(){return Object(n["a"])({url:"/config",method:"get"})}function d(t){return Object(n["a"])({url:"/config",method:"put",data:t})}function f(){return Object(n["a"])({url:"/start",method:"post"})}function v(){return Object(n["a"])({url:"/stop",method:"post"})}function g(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(n["a"])({url:"/futures/account",method:"get",params:t})}function p(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(n["a"])({url:"/futures/positions",method:"get",params:t})}function b(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(n["a"])({url:"/futures/open-orders",method:"get",params:t})}function h(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(n["a"])({url:"/futures/local/positions",method:"get",params:t})}function m(t,e){return Object(n["a"])({url:"/futures/local/positions/".concat(t),method:"put",data:e})}function _(t,e){return Object(n["a"])({url:"/futures/local/positions/".concat(t),method:"delete",data:e})}function x(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(n["a"])({url:"/futures/local/open-orders",method:"get",params:t})}function w(t,e){return Object(n["a"])({url:"/features/strategy-rule/test/".concat(t),method:"post",data:e})}},"5fe0":function(t,e,a){"use strict";a("6aac")},"6aac":function(t,e,a){},fb50:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dashboard-container"},[a("el-collapse",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],attrs:{value:["futures","spot","delivery","new_coin_rush","debug","external"]}},[a("el-collapse-item",{attrs:{name:"futures"}},[a("template",{slot:"title"},[a("div",{staticClass:"dashboard-text"},[a("span",[t._v(t._s(t.$t("route.futuresTrade"))+": ")]),a("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#dcdfe6","active-value":1,"inactive-value":0},on:{change:function(e){return t.editConfig(e,"future_enable")}},model:{value:t.config.tradeFutureEnable,callback:function(e){t.$set(t.config,"tradeFutureEnable",e)},expression:"config.tradeFutureEnable"}})],1)]),a("div",{staticClass:"dashboard-text"},[a("div",{staticStyle:{"margin-left":"20px"}},[a("div",{staticClass:"dashboard-text"},[a("span",[t._v(t._s(t.$t("showPage.websocket"))+": ")]),a("el-switch",{attrs:{value:t.config.wsFuturesEnable,"active-color":"#13ce66","inactive-color":"#dcdfe6","active-value":1,"inactive-value":0},on:{change:function(e){return t.editConfig(e,"ws_futures_enable")}}}),a("span",{staticClass:"green",staticStyle:{"margin-left":"20px"}},[t._v(t._s(t.$t("showPage.autoUpdatePrice")))])],1),a("div",{staticClass:"dashboard-text"},[a("span",[t._v(t._s(t.$t("showPage.futuresPositionConvertEnable"))+": ")]),a("el-switch",{attrs:{value:t.config.futuresPositionConvertEnable,"active-color":"#13ce66","inactive-color":"#dcdfe6","active-value":1,"inactive-value":0},on:{change:function(e){return t.editConfig(e,"futures_position_convert_enable")}}})],1),a("div",{staticClass:"dashboard-text"},[a("span",[t._v(t._s(t.$t("showPage.allowLong"))+": ")]),a("el-switch",{attrs:{value:t.config.coinAllowLong,"active-color":"#13ce66","inactive-color":"#dcdfe6","active-value":1,"inactive-value":0},on:{change:function(e){return t.editConfig(e,"future_allow_long")}}})],1),a("div",{staticClass:"dashboard-text"},[a("span",[t._v(t._s(t.$t("showPage.allowShort"))+": ")]),a("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#dcdfe6","active-value":1,"inactive-value":0},on:{change:function(e){return t.editConfig(e,"future_allow_short")}},model:{value:t.config.coinAllowShort,callback:function(e){t.$set(t.config,"coinAllowShort",e)},expression:"config.coinAllowShort"}})],1),a("div",{staticClass:"dashboard-text"},[a("span",[t._v(t._s(t.$t("showPage.strategyTrade"))+": ")]),a("el-select",{staticStyle:{width:"100px"},attrs:{size:"small"},on:{change:function(e){return t.editConfig(e,"future_strategy_trade")}},model:{value:t.config.tradeStrategyTrade,callback:function(e){t.$set(t.config,"tradeStrategyTrade",e)},expression:"config.tradeStrategyTrade"}},[a("el-option",{attrs:{label:t.$t("strategyType.line1"),value:"line1"}}),a("el-option",{attrs:{label:t.$t("strategyType.line2"),value:"line2"}}),a("el-option",{attrs:{label:t.$t("strategyType.line3"),value:"line3"}}),a("el-option",{attrs:{label:t.$t("strategyType.line4"),value:"line4"}}),a("el-option",{attrs:{label:t.$t("strategyType.line5"),value:"line5"}}),a("el-option",{attrs:{label:t.$t("strategyType.line6"),value:"line6"}}),a("el-option",{attrs:{label:t.$t("strategyType.line7"),value:"line7"}})],1)],1),a("div",{staticClass:"dashboard-text"},[a("span",[t._v(t._s(t.$t("showPage.strategyCoin"))+": ")]),a("el-select",{staticStyle:{width:"100px"},attrs:{size:"small"},on:{change:function(e){return t.editConfig(e,"future_strategy_coin")}},model:{value:t.config.tradeStrategyCoin,callback:function(e){t.$set(t.config,"tradeStrategyCoin",e)},expression:"config.tradeStrategyCoin"}},[a("el-option",{attrs:{label:t.$t("coin1"),value:"coin1"}}),a("el-option",{attrs:{label:t.$t("coin2"),value:"coin2"}}),a("el-option",{attrs:{label:t.$t("coin3"),value:"coin3"}}),a("el-option",{attrs:{label:t.$t("coin4"),value:"coin4"}}),a("el-option",{attrs:{label:t.$t("coin5"),value:"coin5"}}),a("el-option",{attrs:{label:t.$t("coin6"),value:"coin6"}})],1)],1),a("div",{staticClass:"dashboard-text"},[a("span",[t._v(t._s(t.$t("showPage.positionMaxCount"))+": ")]),a("el-input",{staticStyle:{width:"75px"},attrs:{type:"number"},on:{change:function(e){return t.editConfig(e,"future_max_count")}},model:{value:t.config.coinMaxCount,callback:function(e){t.$set(t.config,"coinMaxCount",e)},expression:"config.coinMaxCount"}})],1),a("div",{staticClass:"dashboard-text"},[a("span",[t._v(t._s(t.$t("showPage.excludeSymbols"))+": ")]),a("el-select",{staticStyle:{width:"80%"},attrs:{multiple:"",filterable:"",size:"small"},on:{change:function(e){return t.editConfig(e,"future_exclude_symbols")}},model:{value:t.excludeSymbols,callback:function(e){t.excludeSymbols=e},expression:"excludeSymbols"}},t._l(t.symbols,(function(t){return a("el-option",{key:t,attrs:{label:t,value:t}})})),1)],1),a("div",{staticClass:"dashboard-text"},[a("span",[t._v(t._s(t.$t("showPage.orderType"))+": ")]),a("el-select",{staticStyle:{width:"100px"},attrs:{size:"small"},on:{change:function(e){return t.editConfig(e,"future_order_type")}},model:{value:t.config.coinOrderType,callback:function(e){t.$set(t.config,"coinOrderType",e)},expression:"config.coinOrderType"}},[a("el-option",{attrs:{label:t.$t("MARKET"),value:"MARKET"}}),a("el-option",{attrs:{label:t.$t("LIMIT"),value:"LIMIT"}})],1),a("span",{staticClass:"green",staticStyle:{"margin-left":"20px"}},[t._v(t._s("LIMIT"===t.config.coinOrderType?t.$t("showPage.limitOrderType"):t.$t("showPage.marketOrderType")))])],1),a("div",{staticClass:"dashboard-text"},[a("span",[t._v(t._s(t.$t("showPage.testStrategy"))+": ")]),a("el-switch",{attrs:{value:t.config.tradeFutureTest,"active-color":"#13ce66","inactive-color":"#dcdfe6","active-value":1,"inactive-value":0},on:{change:function(e){return t.editConfig(e,"future_test")}}}),t.config.tradeFutureTest?a("el-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"success",size:"mini"},on:{click:function(e){return t.$router.push({name:"testStrategyResult"})}}},[t._v(" "+t._s(t.$t("route.testStrategyResult"))+" ")]):t._e()],1),a("div",{staticClass:"dashboard-text"},[a("span",[t._v(t._s(t.$t("showPage.testStrategyNoticeLimitMin"))+": ")]),a("el-input",{staticStyle:{width:"75px"},attrs:{type:"number"},on:{change:function(e){return t.editConfig(e,"future_test_notice_limit_min")}},model:{value:t.config.tradeFutureTestNoticeLimitMin,callback:function(e){t.$set(t.config,"tradeFutureTestNoticeLimitMin",e)},expression:"config.tradeFutureTestNoticeLimitMin"}})],1)])])],2),a("el-collapse-item",{attrs:{name:"spot"}},[a("template",{slot:"title"},[a("div",{staticClass:"dashboard-text"},[a("span",[t._v(t._s(t.$t("route.spotsTrade"))+"("+t._s(t.$t("trade.notYet"))+"): ")]),a("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#dcdfe6","active-value":1,"inactive-value":0},on:{change:function(e){return t.editConfig(e,"spot_enable")}},model:{value:t.config.tradeSpotEnable,callback:function(e){t.$set(t.config,"tradeSpotEnable",e)},expression:"config.tradeSpotEnable"}})],1)]),a("div",{staticClass:"dashboard-text"},[a("div",{staticStyle:{"margin-left":"20px"}},[a("div",{staticClass:"dashboard-text"},[a("span",[t._v(t._s(t.$t("showPage.websocket"))+": ")]),a("el-switch",{attrs:{value:t.config.wsSpotEnable,"active-color":"#13ce66","inactive-color":"#dcdfe6","active-value":1,"inactive-value":0},on:{change:function(e){return t.editConfig(e,"ws_spot_enable")}}}),a("span",{staticClass:"green",staticStyle:{"margin-left":"20px"}},[t._v(t._s(t.$t("showPage.autoUpdatePrice")))])],1)])])],2),a("el-collapse-item",{attrs:{name:"delivery"}},[a("template",{slot:"title"},[a("div",{staticClass:"dashboard-text"},[a("span",[t._v(t._s(t.$t("route.deliveryTrade"))+"("+t._s(t.$t("trade.notYet"))+"): ")]),a("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#dcdfe6","active-value":1,"inactive-value":0},on:{change:function(e){return t.editConfig(e,"delivery_enable")}},model:{value:t.config.tradeDeliveryEnable,callback:function(e){t.$set(t.config,"tradeDeliveryEnable",e)},expression:"config.tradeDeliveryEnable"}})],1)]),a("div",{staticClass:"dashboard-text"},[a("div",{staticStyle:{"margin-left":"20px"}},[a("div",{staticClass:"dashboard-text"},[a("span",[t._v(t._s(t.$t("showPage.websocket"))+": ")]),a("el-switch",{attrs:{value:t.config.wsDeliveryEnable,"active-color":"#13ce66","inactive-color":"#dcdfe6","active-value":1,"inactive-value":0},on:{change:function(e){return t.editConfig(e,"ws_delivery_enable")}}}),a("span",{staticClass:"green",staticStyle:{"margin-left":"20px"}},[t._v(t._s(t.$t("showPage.autoUpdatePrice")))])],1)])])],2),a("el-collapse-item",{attrs:{name:"new_coin_rush"}},[a("template",{slot:"title"},[a("div",{staticClass:"dashboard-text"},[a("span",[t._v(t._s(t.$t("route.newCoinRush"))+": ")])])]),a("div",{staticClass:"dashboard-text"},[a("div",{staticStyle:{"margin-left":"20px"}},[a("div",{staticClass:"dashboard-text"},[a("span",[t._v(t._s(t.$t("route.newSpotRush"))+": ")]),a("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#dcdfe6","active-value":1,"inactive-value":0},on:{change:function(e){return t.editConfig(e,"spot_new_enable")}},model:{value:t.config.spotNewEnable,callback:function(e){t.$set(t.config,"spotNewEnable",e)},expression:"config.spotNewEnable"}})],1),a("div",{staticClass:"dashboard-text"},[a("span",[t._v(t._s(t.$t("route.newFuturesRush"))+": ")]),a("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#dcdfe6","active-value":1,"inactive-value":0},on:{change:function(e){return t.editConfig(e,"future_new_enable")}},model:{value:t.config.tradeNewEnable,callback:function(e){t.$set(t.config,"tradeNewEnable",e)},expression:"config.tradeNewEnable"}})],1)])])],2),a("el-collapse-item",{attrs:{name:"coin_notice"}},[a("template",{slot:"title"},[a("div",{staticClass:"dashboard-text"},[a("span",[t._v(t._s(t.$t("route.coinNotice"))+": ")]),a("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#dcdfe6","active-value":1,"inactive-value":0},on:{change:function(e){return t.editConfig(e,"notice_coin_enable")}},model:{value:t.config.noticeCoinEnable,callback:function(e){t.$set(t.config,"noticeCoinEnable",e)},expression:"config.noticeCoinEnable"}})],1)])],2),a("el-collapse-item",{attrs:{name:"market_listen"}},[a("template",{slot:"title"},[a("div",{staticClass:"dashboard-text"},[a("span",[t._v(t._s(t.$t("route.marketListen"))+": ")]),a("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#dcdfe6","active-value":1,"inactive-value":0},on:{change:function(e){return t.editConfig(e,"listen_coin_enable")}},model:{value:t.config.listenCoinEnable,callback:function(e){t.$set(t.config,"listenCoinEnable",e)},expression:"config.listenCoinEnable"}})],1)])],2),a("el-collapse-item",{attrs:{name:"funding_rate"}},[a("template",{slot:"title"},[a("div",{staticClass:"dashboard-text"},[a("span",[t._v(t._s(t.$t("route.fundingRate"))+": ")]),a("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#dcdfe6","active-value":1,"inactive-value":0},on:{change:function(e){return t.editConfig(e,"listen_funding_rate_enable")}},model:{value:t.config.listenFundingRate,callback:function(e){t.$set(t.config,"listenFundingRate",e)},expression:"config.listenFundingRate"}})],1)])],2),a("el-collapse-item",{attrs:{name:"debug"}},[a("template",{slot:"title"},[a("div",{staticClass:"dashboard-text"},[a("span",[t._v("debug: ")]),"1"===t.config.debug?a("span",{staticClass:"red"},[t._v(t._s(t.$t("showPage.open")))]):a("span",{staticClass:"green"},[t._v(t._s(t.$t("showPage.close")))])])]),a("div",{staticClass:"dashboard-text"},[a("div",{staticStyle:{"margin-left":"20px"}},[a("div",{staticClass:"dashboard-text"},[a("el-button",{attrs:{size:"mini",type:"primary"},on:{click:t.testPusher}},[t._v(t._s(t.$t("showPage.testPusher")))])],1)])])],2),a("el-collapse-item",{attrs:{name:"external"}},[a("template",{slot:"title"},[a("div",{staticClass:"dashboard-text"},[a("span",[t._v(t._s(t.$t("showPage.externalLinks"))+": ")])])]),a("div",{staticClass:"dashboard-text"},[a("div",{staticStyle:{"margin-left":"20px",display:"flex",gap:"20px"}},t._l(t.config.externalLinks,(function(e){return a("el-link",{key:e.title,staticStyle:{"font-size":"30px"},attrs:{type:"primary",underline:!1,href:e.url,target:"_blank"}},[t._v(" "+t._s(e.title)+" ")])})),1)])],2)],1)],1)},i=[],o=a("dcb1"),s=a("dd36"),c=a("fee1"),r=(a("e224"),a("4cc3"),a("374d"),a("5227"),a("bd1a"),a("b775"));function l(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(r["a"])({url:"/service/config",method:"get",params:t})}function u(t){return Object(r["a"])({url:"/service/config",method:"put",data:t})}function d(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(r["a"])({url:"/test-pusher",method:"post",params:t})}var f=a("5f87"),v=a("2465"),g={name:"Dashboard",data:function(){return{loading:!1,symbols:[],excludeSymbols:[],config:{debug:"0",coinAllowLong:1,coinAllowShort:0,coinExcludeSymbols:"",coinMaxCount:0,coinOrderType:"",externalLinks:[],listenCoinEnable:0,listenFundingRate:0,noticeCoinEnable:0,spotNewEnable:0,tradeFutureTest:0,tradeFutureTestNoticeLimitMin:0,tradeFutureEnable:0,tradeSpotEnable:0,tradeDeliveryEnable:0,tradeNewEnable:0,tradeStrategyCoin:"",tradeStrategyTrade:"",wsFuturesEnable:0,wsSpotEnable:0,wsDeliveryEnable:0,futuresPositionConvertEnable:0}}},created:function(){var t=this;return Object(c["a"])(Object(s["a"])().mark((function e(){return Object(s["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.getSymbols(),t.fetchConfig();case 2:case"end":return e.stop()}}),e)})))()},methods:{fetchConfig:function(){var t=this;return Object(c["a"])(Object(s["a"])().mark((function e(){var a,n;return Object(s["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,l();case 2:a=e.sent,n=a.data;try{n.externalLinks=JSON.parse(n.externalLinks),t.excludeSymbols=""===n.coinExcludeSymbols.trim()?[]:n.coinExcludeSymbols.split(",")}catch(i){n.externalLinks=[]}Object(f["d"])(n),t.config=n;case 7:case"end":return e.stop()}}),e)})))()},editConfig:function(t,e){var a=this;return Object(c["a"])(Object(s["a"])().mark((function n(){return Object(s["a"])().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a.loading=!0,n.prev=1,"future_max_count"!==e&&"future_test_notice_limit_min"!==e||(t=Number(t)),"future_exclude_symbols"===e&&(t=a.excludeSymbols.join(",")),n.next=6,u(Object(o["a"])({},e,t));case 6:return n.next=8,a.fetchConfig();case 8:a.$message({message:a.$t("table.actionSuccess"),type:"success"}),n.next=14;break;case 11:n.prev=11,n.t0=n["catch"](1),a.$message({message:a.$t("table.actionFail"),type:"error"});case 14:return n.prev=14,a.loading=!1,n.finish(14);case 17:case"end":return n.stop()}}),n,null,[[1,11,14,17]])})))()},testPusher:function(){var t=this;return Object(c["a"])(Object(s["a"])().mark((function e(){return Object(s["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d();case 3:t.$message({message:t.$t("table.actionSuccess"),type:"success"}),e.next=9;break;case 6:e.prev=6,e.t0=e["catch"](0),t.$message({message:t.$t("table.actionFail"),type:"error"});case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))()},getSymbols:function(){var t=this;return Object(c["a"])(Object(s["a"])().mark((function e(){var a,n;return Object(s["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(v["g"])();case 2:a=e.sent,n=a.data,t.symbols=n.map((function(t){return t.symbol}));case 5:case"end":return e.stop()}}),e)})))()}}},p=g,b=(a("5fe0"),a("9bf6")),h=Object(b["a"])(p,n,i,!1,null,"9035b5d2",null);e["default"]=h.exports}}]);