(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-79665d62"],{dc0e:function(e,t,a){"use strict";a("f7ee")},f7ee:function(e,t,a){},fb50:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"dashboard-container"},[a("el-collapse",{attrs:{value:["1","2","5","6"]}},[a("el-collapse-item",{attrs:{name:"1"}},[a("template",{slot:"title"},[a("div",{staticClass:"dashboard-text"},[a("span",[e._v(e._s(e.$t("route.futuresTrade"))+": ")]),a("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#dcdfe6","active-value":1,"inactive-value":0},on:{change:function(t){return e.editConfig(t,"future_enable")}},model:{value:e.config.tradeFutureEnable,callback:function(t){e.$set(e.config,"tradeFutureEnable",t)},expression:"config.tradeFutureEnable"}})],1)]),a("div",{staticClass:"dashboard-text"},[a("div",{staticStyle:{"margin-left":"20px"}},[a("div",{staticClass:"dashboard-text"},[a("span",[e._v(e._s(e.$t("showPage.allowLong"))+": ")]),a("el-switch",{attrs:{value:e.config.coinAllowLong,"active-color":"#13ce66","inactive-color":"#dcdfe6","active-value":1,"inactive-value":0},on:{change:function(t){return e.editConfig(t,"future_allow_long")}}})],1),a("div",{staticClass:"dashboard-text"},[a("span",[e._v(e._s(e.$t("showPage.allowShort"))+": ")]),a("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#dcdfe6","active-value":1,"inactive-value":0},on:{change:function(t){return e.editConfig(t,"future_allow_short")}},model:{value:e.config.coinAllowShort,callback:function(t){e.$set(e.config,"coinAllowShort",t)},expression:"config.coinAllowShort"}})],1),a("div",{staticClass:"dashboard-text"},[a("span",[e._v(e._s(e.$t("showPage.strategyTrade"))+": ")]),a("el-select",{staticStyle:{width:"100px"},attrs:{size:"small"},on:{change:function(t){return e.editConfig(t,"future_strategy_trade")}},model:{value:e.config.tradeStrategyTrade,callback:function(t){e.$set(e.config,"tradeStrategyTrade",t)},expression:"config.tradeStrategyTrade"}},[a("el-option",{attrs:{label:e.$t("strategyType.line1"),value:"line1"}}),a("el-option",{attrs:{label:e.$t("strategyType.line2"),value:"line2"}}),a("el-option",{attrs:{label:e.$t("strategyType.line3"),value:"line3"}}),a("el-option",{attrs:{label:e.$t("strategyType.line4"),value:"line4"}}),a("el-option",{attrs:{label:e.$t("strategyType.line5"),value:"line5"}}),a("el-option",{attrs:{label:e.$t("strategyType.line6"),value:"line6"}}),a("el-option",{attrs:{label:e.$t("strategyType.line7"),value:"line7"}})],1)],1),a("div",{staticClass:"dashboard-text"},[a("span",[e._v(e._s(e.$t("showPage.strategyCoin"))+": ")]),a("el-select",{staticStyle:{width:"100px"},attrs:{size:"small"},on:{change:function(t){return e.editConfig(t,"future_strategy_coin")}},model:{value:e.config.tradeStrategyCoin,callback:function(t){e.$set(e.config,"tradeStrategyCoin",t)},expression:"config.tradeStrategyCoin"}},[a("el-option",{attrs:{label:e.$t("coin1"),value:"coin1"}}),a("el-option",{attrs:{label:e.$t("coin2"),value:"coin2"}}),a("el-option",{attrs:{label:e.$t("coin3"),value:"coin3"}}),a("el-option",{attrs:{label:e.$t("coin4"),value:"coin4"}}),a("el-option",{attrs:{label:e.$t("coin5"),value:"coin5"}})],1)],1),a("div",{staticClass:"dashboard-text"},[a("span",[e._v(e._s(e.$t("showPage.positionMaxCount"))+": ")]),a("el-input",{staticStyle:{width:"75px"},attrs:{type:"number"},on:{change:function(t){return e.editConfig(t,"future_max_count")}},model:{value:e.config.coinMaxCount,callback:function(t){e.$set(e.config,"coinMaxCount",t)},expression:"config.coinMaxCount"}})],1),a("div",{staticClass:"dashboard-text"},[a("span",[e._v(e._s(e.$t("showPage.excludeSymbols"))+": ")]),a("el-input",{staticStyle:{width:"75%"},attrs:{type:"textarea",rows:2},on:{change:function(t){return e.editConfig(t,"future_exclude_symbols")}},model:{value:e.config.coinExcludeSymbols,callback:function(t){e.$set(e.config,"coinExcludeSymbols",t)},expression:"config.coinExcludeSymbols"}})],1),a("div",{staticClass:"dashboard-text"},[a("span",[e._v(e._s(e.$t("showPage.orderType"))+": ")]),a("el-select",{staticStyle:{width:"100px"},attrs:{size:"small"},on:{change:function(t){return e.editConfig(t,"future_order_type")}},model:{value:e.config.coinOrderType,callback:function(t){e.$set(e.config,"coinOrderType",t)},expression:"config.coinOrderType"}},[a("el-option",{attrs:{label:e.$t("MARKET"),value:"MARKET"}}),a("el-option",{attrs:{label:e.$t("LIMIT"),value:"LIMIT"}})],1),a("span",{staticClass:"green",staticStyle:{"margin-left":"20px"}},[e._v(e._s("LIMIT"===e.config.coinOrderType?e.$t("showPage.limitOrderType"):e.$t("showPage.marketOrderType")))])],1)])])],2),a("el-collapse-item",{attrs:{name:"2"}},[a("template",{slot:"title"},[a("div",{staticClass:"dashboard-text"},[a("span",[e._v(e._s(e.$t("route.newCoinRush"))+": ")])])]),a("div",{staticClass:"dashboard-text"},[a("div",{staticStyle:{"margin-left":"20px"}},[a("div",{staticClass:"dashboard-text"},[a("span",[e._v(e._s(e.$t("route.newSpotRush"))+": ")]),a("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#dcdfe6","active-value":1,"inactive-value":0},on:{change:function(t){return e.editConfig(t,"spot_new_enable")}},model:{value:e.config.spotNewEnable,callback:function(t){e.$set(e.config,"spotNewEnable",t)},expression:"config.spotNewEnable"}})],1),a("div",{staticClass:"dashboard-text"},[a("span",[e._v(e._s(e.$t("route.newFuturesRush"))+": ")]),a("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#dcdfe6","active-value":1,"inactive-value":0},on:{change:function(t){return e.editConfig(t,"future_new_enable")}},model:{value:e.config.tradeNewEnable,callback:function(t){e.$set(e.config,"tradeNewEnable",t)},expression:"config.tradeNewEnable"}})],1)])])],2),a("el-collapse-item",{attrs:{name:"3"}},[a("template",{slot:"title"},[a("div",{staticClass:"dashboard-text"},[a("span",[e._v(e._s(e.$t("route.coinNotice"))+": ")]),a("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#dcdfe6","active-value":1,"inactive-value":0},on:{change:function(t){return e.editConfig(t,"notice_coin_enable")}},model:{value:e.config.noticeCoinEnable,callback:function(t){e.$set(e.config,"noticeCoinEnable",t)},expression:"config.noticeCoinEnable"}})],1)])],2),a("el-collapse-item",{attrs:{name:"4"}},[a("template",{slot:"title"},[a("div",{staticClass:"dashboard-text"},[a("span",[e._v(e._s(e.$t("route.marketListen"))+": ")]),a("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#dcdfe6","active-value":1,"inactive-value":0},on:{change:function(t){return e.editConfig(t,"listen_coin_enable")}},model:{value:e.config.listenCoinEnable,callback:function(t){e.$set(e.config,"listenCoinEnable",t)},expression:"config.listenCoinEnable"}})],1)])],2),a("el-collapse-item",{attrs:{name:"5"}},[a("template",{slot:"title"},[a("div",{staticClass:"dashboard-text"},[a("span",[e._v(e._s(e.$t("route.fundingRate"))+": ")]),a("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#dcdfe6","active-value":1,"inactive-value":0},on:{change:function(t){return e.editConfig(t,"listen_funding_rate_enable")}},model:{value:e.config.listenFundingRate,callback:function(t){e.$set(e.config,"listenFundingRate",t)},expression:"config.listenFundingRate"}})],1)])],2),a("el-collapse-item",{attrs:{name:"5"}},[a("template",{slot:"title"},[a("div",{staticClass:"dashboard-text"},[a("span",[e._v("debug: ")]),"1"===e.config.debug?a("span",{staticClass:"red"}):a("span",{staticClass:"green"},[e._v(e._s(e.$t("showPage.close")))])])]),a("div",{staticClass:"dashboard-text"},[a("div",{staticStyle:{"margin-left":"20px"}},[a("div",{staticClass:"dashboard-text"},[a("el-button",{attrs:{size:"mini",type:"primary"},on:{click:e.testPusher}},[e._v(e._s(e.$t("showPage.testPusher")))])],1)])])],2),a("el-collapse-item",{attrs:{name:"6"}},[a("template",{slot:"title"},[a("div",{staticClass:"dashboard-text"},[a("span",[e._v(e._s(e.$t("showPage.externalLinks"))+": ")])])]),a("div",{staticClass:"dashboard-text"},[a("div",{staticStyle:{"margin-left":"20px",display:"flex",gap:"20px"}},e._l(e.config.externalLinks,(function(t){return a("el-link",{key:t.title,staticStyle:{"font-size":"30px"},attrs:{type:"primary",underline:!1,href:t.url,target:"_blank"}},[e._v(" "+e._s(t.title)+" ")])})),1)])],2)],1)],1)},i=[],s=a("dcb1"),o=a("dd36"),l=a("fee1"),c=(a("374d"),a("5227"),a("b775"));function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(c["a"])({url:"/service/config",method:"get",params:e})}function u(e){return Object(c["a"])({url:"/service/config",method:"put",data:e})}function d(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(c["a"])({url:"/test-pusher",method:"post",params:e})}var f={name:"Dashboard",data:function(){return{config:{debug:"0",coinAllowLong:1,coinAllowShort:0,coinExcludeSymbols:"",coinMaxCount:0,coinOrderType:"",externalLinks:[],listenCoinEnable:0,listenFundingRate:0,noticeCoinEnable:0,spotNewEnable:0,tradeFutureEnable:0,tradeNewEnable:0,tradeStrategyCoin:"",tradeStrategyTrade:""}}},created:function(){var e=this;return Object(l["a"])(Object(o["a"])().mark((function t(){return Object(o["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.fetchConfig();case 2:case"end":return t.stop()}}),t)})))()},methods:{fetchConfig:function(){var e=this;return Object(l["a"])(Object(o["a"])().mark((function t(){var a,n;return Object(o["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,r();case 2:a=t.sent,n=a.data;try{n.externalLinks=JSON.parse(n.externalLinks)}catch(i){n.externalLinks=[]}e.config=n;case 6:case"end":return t.stop()}}),t)})))()},editConfig:function(e,t){var a=this;return Object(l["a"])(Object(o["a"])().mark((function n(){return Object(o["a"])().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return"future_max_count"===t&&(e=Number(e)),n.prev=1,n.next=4,u(Object(s["a"])({},t,e));case 4:return n.next=6,a.fetchConfig();case 6:a.$message({message:a.$t("table.actionSuccess"),type:"success"}),n.next=12;break;case 9:n.prev=9,n.t0=n["catch"](1),a.$message({message:a.$t("table.actionFail"),type:"error"});case 12:case"end":return n.stop()}}),n,null,[[1,9]])})))()},testPusher:function(){var e=this;return Object(l["a"])(Object(o["a"])().mark((function t(){return Object(o["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,d();case 3:e.$message({message:e.$t("table.actionSuccess"),type:"success"}),t.next=9;break;case 6:t.prev=6,t.t0=t["catch"](0),e.$message({message:e.$t("table.actionFail"),type:"error"});case 9:case"end":return t.stop()}}),t,null,[[0,6]])})))()}}},v=f,g=(a("dc0e"),a("9bf6")),p=Object(g["a"])(v,n,i,!1,null,"25b1f338",null);t["default"]=p.exports}}]);