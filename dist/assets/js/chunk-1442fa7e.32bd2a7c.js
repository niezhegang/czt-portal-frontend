(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1442fa7e"],{"103a":function(t,e,n){"use strict";var r=n("80af"),o=n.n(r);o.a},"365c":function(t,e,n){"use strict";var r=n("bc3a"),o=n.n(r),i=n("5c96"),a=(n("c0d6"),o.a.create({baseURL:"http://www.cezhitong.com",timeout:2e4}));a.interceptors.request.use(function(t){return t},function(t){console.log("错误："),Promise.reject(t)}),a.interceptors.response.use(function(t){var e=t.data;return 200!==t.status?(Object(i["Message"])({message:e.msg,type:"error"}),403===e.code&&i["MessageBox"].confirm("登录超时，请重新登录","确定登出",{confirmButtonText:"重新登录",cancelButtonText:"取消",type:"warning"}).then(function(){window.location.href="#/login",location.reload()}),Promise.reject("error")):t.data},function(t){return console.log("err"+t),Object(i["Message"])({message:t.message,type:"error",duration:3e3}),Promise.reject(t)});var s=a;function c(t){return s({url:"highExams/basic/questions",method:"get"})}function u(t){return s({url:"highExams/basic/answers",method:"post",data:t.param})}function d(t){return s({url:"highExams/high/questions",method:"get"})}function l(t){return s({url:"highExams/high/answers",method:"post",data:t.param})}function f(t){return s({url:"highExams/high/detailResult",method:"post",data:t.param})}function m(t){return s({url:"highTechQuestions/search",method:"get",params:t.param})}function h(t){return s({url:"subsidyPolicies/recentModify",method:"get"})}function p(t){return s({url:"subsidyPolicies",method:"get",params:t.param})}function g(t){return s({url:"subsidyPolicies/company/"+"".concat(t.companyName),method:"get"})}function v(t){return s({url:"subsidyPolicies/region/"+"".concat(t.regionCode),method:"get"})}function b(t){return s({url:"dicts/financialGrowth",method:"get"})}function w(t){return s({url:"dicts/highField",method:"get"})}function _(t){return s({url:"dicts/ipType",method:"get"})}function y(t){return s({url:"dicts/otherCostType",method:"get"})}function C(t){return s({url:"dicts/recentYearIncoming",method:"get"})}function j(t){return s({url:"costAccount",method:"post",data:t.data})}n.d(e,"a",function(){return c}),n.d(e,"n",function(){return u}),n.d(e,"g",function(){return d}),n.d(e,"o",function(){return l}),n.d(e,"e",function(){return f}),n.d(e,"d",function(){return m}),n.d(e,"j",function(){return h}),n.d(e,"p",function(){return p}),n.d(e,"l",function(){return g}),n.d(e,"m",function(){return v}),n.d(e,"c",function(){return b}),n.d(e,"f",function(){return w}),n.d(e,"h",function(){return _}),n.d(e,"i",function(){return y}),n.d(e,"k",function(){return C}),n.d(e,"b",function(){return j})},"6a84":function(t,e,n){},"80af":function(t,e,n){},bd02:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"subsidizeDetail"},[n("div",{staticClass:"wrap"},[n("el-button",{attrs:{type:"primary",circle:"",icon:"el-icon-arrow-left"},on:{click:function(e){t.$router.go(-1)}}}),n("div",{staticClass:"title",staticStyle:{width:"80%",margin:"0 auto"}},[t._v(t._s(t.name))]),n("div",{staticClass:"content ql-editor",domProps:{innerHTML:t._s(t.detail)}})],1),n("btArea")],1)},o=[],i=n("2f62"),a=n("d9de");n("365c");function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.forEach(function(e){c(t,e,n[e])})}return t}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var u={name:"subsidizeDetail",metaInfo:function(){return{title:this.seoConfig.title,meta:this.seoConfig.meta}},data:function(){var t=this;return{seoConfig:this.$store.state.tdks.filter(function(e){return e.pageCode===t.$options.name})[0],name:"",detail:""}},computed:s({},Object(i["c"])([])),components:{btArea:a["a"]},methods:{},mounted:function(){this.name=this.$route.params.content.name,this.detail=this.$route.params.content.content}},d=u,l=(n("103a"),n("2877")),f=Object(l["a"])(d,r,o,!1,null,null,null);f.options.__file="detail.vue";e["default"]=f.exports},be68:function(t,e,n){t.exports=n.p+"assets/img/qrcode.4c9bfde3.png"},bf99:function(t,e,n){"use strict";var r=n("6a84"),o=n.n(r);o.a},d9de:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},o=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"footer"},[r("div",{staticClass:"bottomArea"},[r("div",{staticClass:"topArea"},[r("div",{staticClass:"qrcode"},[r("img",{attrs:{src:n("be68"),alt:""}})]),r("div",{staticClass:"phoneAdress"},[r("p",[t._v("联系我们：400-878-0703 ")]),r("p",[t._v("服务时间：周一至周五9:00-18:00 ")]),r("p",[t._v("邮箱：server@cezhitong.com")]),r("p",[t._v("地址：浙江省杭州市江干区红普路759号汇禾禧福汇电商创业大厦4-312室")])])]),r("div",{staticClass:"links"},[r("span",[t._v("友情链接：")]),r("a",{attrs:{href:"http://www.innocom.gov.cn/",target:"_blank"}},[t._v("国家高新技术企业认定管理工作网")]),r("a",{attrs:{href:"http://www.most.gov.cn/",target:"_blank"}},[t._v("科部网")]),r("a",{attrs:{href:"http://www.zjkjt.gov.cn/",target:"_blank"}},[t._v("浙江省科技厅")]),r("a",{attrs:{href:"http://202.107.205.11:8612/",target:"_blank"}},[t._v("浙江省高新技术企业认定管理工作网")])]),r("div",{staticClass:"copyRight"},[r("div",[t._v("©2018-2019 策知通科技公司版权所有 浙ICP备18006065号-1")]),r("div")])])])}],i={name:"",data:function(){return{}},methods:{},mounted:function(){}},a=i,s=(n("bf99"),n("2877")),c=Object(s["a"])(a,r,o,!1,null,"2097c203",null);c.options.__file="index.vue";e["a"]=c.exports}}]);