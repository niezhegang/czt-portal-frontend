(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-03253cf3"],{"103a":function(t,e,n){"use strict";var r=n("80af"),i=n.n(r);i.a},"365c":function(t,e,n){"use strict";n("cadf"),n("551c"),n("097d");var r=n("bc3a"),i=n.n(r),o=n("5c96"),a=(n("c0d6"),i.a.create({baseURL:"",timeout:2e4}));a.interceptors.request.use(function(t){return t},function(t){console.log("错误："),Promise.reject(t)}),a.interceptors.response.use(function(t){var e=t.data;return 200!==t.status?(Object(o["Message"])({message:e.msg,type:"error"}),403===e.code&&o["MessageBox"].confirm("登录超时，请重新登录","确定登出",{confirmButtonText:"重新登录",cancelButtonText:"取消",type:"warning"}).then(function(){window.location.href="#/login",location.reload()}),Promise.reject("error")):t.data},function(t){return console.log("err"+t),Object(o["Message"])({message:t.message,type:"error",duration:3e3}),Promise.reject(t)});var c=a;function s(t){return c({url:"seoConfigs/"+t,method:"get"})}function u(t){return c({url:"highExams/basic/questions",method:"get"})}function d(t){return c({url:"highExams/basic/answers",method:"post",data:t.param})}function f(t){return c({url:"highExams/high/questions",method:"get"})}function l(t){return c({url:"highExams/high/answers",method:"post",data:t.param})}function m(t){return c({url:"highExams/high/detailResult",method:"post",data:t.param})}function h(){return c({url:"regions/cascade",method:"get"})}function g(t){return c({url:"highTechQuestions/search",method:"get",params:t.param})}function p(t){return c({url:"subsidyPolicies/recentModify",method:"get"})}function v(t){return c({url:"subsidyPolicies",method:"get",params:t.param})}function b(t){return c({url:"subsidyPolicies/company/"+"".concat(t.companyName),method:"get"})}function _(t){return c({url:"subsidyPolicies/region/"+"".concat(t.regionCode),method:"get"})}function w(t){return c({url:"dicts/financialGrowth",method:"get"})}function y(t){return c({url:"dicts/highField",method:"get"})}function C(t){return c({url:"dicts/ipType",method:"get"})}function j(t){return c({url:"dicts/otherCostType",method:"get"})}function x(t){return c({url:"dicts/recentYearIncoming",method:"get"})}function k(t){return c({url:"costAccount",method:"post",data:t.data})}n.d(e,"g",function(){return s}),n.d(e,"a",function(){return u}),n.d(e,"p",function(){return d}),n.d(e,"i",function(){return f}),n.d(e,"q",function(){return l}),n.d(e,"f",function(){return m}),n.d(e,"e",function(){return h}),n.d(e,"d",function(){return g}),n.d(e,"l",function(){return p}),n.d(e,"r",function(){return v}),n.d(e,"n",function(){return b}),n.d(e,"o",function(){return _}),n.d(e,"c",function(){return w}),n.d(e,"h",function(){return y}),n.d(e,"j",function(){return C}),n.d(e,"k",function(){return j}),n.d(e,"m",function(){return x}),n.d(e,"b",function(){return k})},"6a84":function(t,e,n){},"7f7f":function(t,e,n){var r=n("86cc").f,i=Function.prototype,o=/^\s*function ([^ (]*)/,a="name";a in i||n("9e1e")&&r(i,a,{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(t){return""}}})},"80af":function(t,e,n){},bd02:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"subsidizeDetail"},[n("div",{staticClass:"wrap"},[n("el-button",{attrs:{type:"primary",circle:"",icon:"el-icon-arrow-left"},on:{click:function(e){t.$router.go(-1)}}}),n("div",{staticClass:"title",staticStyle:{width:"80%",margin:"0 auto"}},[t._v(t._s(t.name))]),n("div",{staticClass:"content ql-editor",domProps:{innerHTML:t._s(t.detail)}})],1),n("btArea")],1)},i=[],o=(n("7f7f"),n("be94")),a=n("2f62"),c=n("d9de"),s=n("365c"),u={name:"subsidizeDetail",metaInfo:function(){return{title:this.seoConfig.title,meta:this.seoConfig.meta}},data:function(){return{name:"",detail:""}},computed:Object(o["a"])({},Object(a["b"])([])),components:{btArea:c["a"]},methods:{},mounted:function(){var t=this;Object(s["g"])(this.$options.name).then(function(e){e.data&&e.data.meta&&(t.seoConfig=e.data)}),this.name=this.$route.params.content.name,this.detail=this.$route.params.content.content}},d=u,f=(n("103a"),n("2877")),l=Object(f["a"])(d,r,i,!1,null,null,null);l.options.__file="detail.vue";e["default"]=l.exports},be68:function(t,e,n){t.exports=n.p+"assets/img/qrcode.4c9bfde3.png"},bf99:function(t,e,n){"use strict";var r=n("6a84"),i=n.n(r);i.a},d9de:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"footer"},[r("div",{staticClass:"bottomArea"},[r("div",{staticClass:"topArea"},[r("div",{staticClass:"qrcode"},[r("img",{attrs:{src:n("be68"),alt:""}})]),r("div",{staticClass:"phoneAdress"},[r("p",[t._v("联系我们：400-878-0703 ")]),r("p",[t._v("服务时间：周一至周五9:00-18:00 ")]),r("p",[t._v("邮箱：server@cezhitong.com")]),r("p",[t._v("地址：浙江省杭州市江干区红普路759号汇禾禧福汇电商创业大厦4-312室")])])]),r("div",{staticClass:"links"},[r("span",[t._v("友情链接：")]),r("a",{attrs:{href:"http://www.innocom.gov.cn/",target:"_blank"}},[t._v("国家高新技术企业认定管理工作网")]),r("a",{attrs:{href:"http://www.most.gov.cn/",target:"_blank"}},[t._v("科部网")]),r("a",{attrs:{href:"http://www.zjkjt.gov.cn/",target:"_blank"}},[t._v("浙江省科技厅")]),r("a",{attrs:{href:"http://202.107.205.11:8612/",target:"_blank"}},[t._v("浙江省高新技术企业认定管理工作网")])]),r("div",{staticClass:"copyRight"},[r("div",[t._v("©2018-2019 策知通科技公司版权所有 浙ICP备18006065号-1")]),r("div")])])])}],o=(n("cadf"),n("551c"),n("097d"),{name:"",data:function(){return{}},methods:{},mounted:function(){}}),a=o,c=(n("bf99"),n("2877")),s=Object(c["a"])(a,r,i,!1,null,"2097c203",null);s.options.__file="index.vue";e["a"]=s.exports}}]);