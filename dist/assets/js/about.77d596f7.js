(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"1f02":function(t,e,n){"use strict";var a=n("9578"),r=n.n(a);r.a},"2d13":function(t,e,n){t.exports=n.p+"assets/img/aboutUs.ae579eec.png"},"365c":function(t,e,n){"use strict";n("cadf"),n("551c"),n("097d");var a=n("bc3a"),r=n.n(a),i=n("5c96"),o=(n("c0d6"),r.a.create({baseURL:"http://www.cezhitong.com",timeout:2e4}));o.interceptors.request.use(function(t){return t},function(t){console.log("错误："),Promise.reject(t)}),o.interceptors.response.use(function(t){var e=t.data;return 200!==t.status?(Object(i["Message"])({message:e.msg,type:"error"}),403===e.code&&i["MessageBox"].confirm("登录超时，请重新登录","确定登出",{confirmButtonText:"重新登录",cancelButtonText:"取消",type:"warning"}).then(function(){window.location.href="#/login",location.reload()}),Promise.reject("error")):t.data},function(t){return console.log("err"+t),Object(i["Message"])({message:t.message,type:"error",duration:3e3}),Promise.reject(t)});var s=o;function c(t){return s({url:"highExams/basic/questions",method:"get"})}function u(t){return s({url:"highExams/basic/answers",method:"post",data:t.param})}function d(t){return s({url:"highExams/high/questions",method:"get"})}function f(t){return s({url:"highExams/high/answers",method:"post",data:t.param})}function l(t){return s({url:"highExams/high/detailResult",method:"post",data:t.param})}function m(t){return s({url:"highTechQuestions/search",method:"get",params:t.param})}function p(t){return s({url:"subsidyPolicies/recentModify",method:"get"})}function h(t){return s({url:"subsidyPolicies",method:"get",params:t.param})}function v(t){return s({url:"subsidyPolicies/company/"+"".concat(t.companyName),method:"get"})}function g(t){return s({url:"subsidyPolicies/region/"+"".concat(t.regionCode),method:"get"})}function b(t){return s({url:"dicts/financialGrowth",method:"get"})}function _(t){return s({url:"dicts/highField",method:"get"})}function w(t){return s({url:"dicts/ipType",method:"get"})}function C(t){return s({url:"dicts/otherCostType",method:"get"})}function y(t){return s({url:"dicts/recentYearIncoming",method:"get"})}function x(t){return s({url:"costAccount",method:"post",data:t.data})}n.d(e,"a",function(){return c}),n.d(e,"n",function(){return u}),n.d(e,"g",function(){return d}),n.d(e,"o",function(){return f}),n.d(e,"e",function(){return l}),n.d(e,"d",function(){return m}),n.d(e,"j",function(){return p}),n.d(e,"p",function(){return h}),n.d(e,"l",function(){return v}),n.d(e,"m",function(){return g}),n.d(e,"c",function(){return b}),n.d(e,"f",function(){return _}),n.d(e,"h",function(){return w}),n.d(e,"i",function(){return C}),n.d(e,"k",function(){return y}),n.d(e,"b",function(){return x})},"68a6":function(t,e,n){"use strict";var a=n("b62a"),r=n.n(a);r.a},"6a84":function(t,e,n){},"7f7f":function(t,e,n){var a=n("86cc").f,r=Function.prototype,i=/^\s*function ([^ (]*)/,o="name";o in r||n("9e1e")&&a(r,o,{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(t){return""}}})},9578:function(t,e,n){},b62a:function(t,e,n){},be68:function(t,e,n){t.exports=n.p+"assets/img/qrcode.4c9bfde3.png"},bf99:function(t,e,n){"use strict";var a=n("6a84"),r=n.n(a);r.a},c1a2:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"aboutUs"},[n("div",{staticClass:"contentArea animated fadeIn"},[t._m(0),n("el-tabs",{on:{"tab-click":t.handleClick},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[n("el-tab-pane",{staticClass:"animated fadeInUpBig",attrs:{label:"公司简介",name:"first"}},[n("p",[t._v("策知通高新技术企业服务平台专注于国家高新技术企业认定服务。团队拥有10年以上高新技术企业申报经验、财务规范辅导经验、知识产权申报经验；拥有资深科技项目申报专家、财务辅导专家，另邀请高企评审专家组建平台的专家顾问团队。平台推出高新技术企业认定咨询服务、保姆式服务、专家预审服务、担保服务等。策知通高新技术企业服务平台专注于国家高新技术企业认定服务。团队拥有10年以上高新技术企业申报经验、财务规范辅导经验、知识产权申报经验；拥有资深科技项目申报专家、财务辅导专家，另邀请高企评审专家组建平台的专家顾问团队。平台推出高新技术企业认定咨询服务、保姆式服务、专家预审服务、担保服务等。 ")]),n("p",[t._v("平台致力于高新技术企业全生命周期托管服务，高新申请、审核、年审等一条龙服务，全程辅导知识产权、财务问题，解决高企认定核心问题；全程提供稳定的专家团队辅导，保证申报成功率；全方位挖掘企业核心技术和优势，申报材料不脱离企业实际情况。全生命周期的托管服务，解决高新技术企业的后顾之忧。")]),n("p",[t._v("目前我们团队申请资助和节税已经累计突破亿元。其中，单个客户最高申请资助额达1224万元，最高节税额达3000万左右，辅导的国家高新技术企业过百家。您的利益，我们将竭尽全力维护！")])]),n("el-tab-pane",{staticClass:"animated fadeIn",attrs:{label:"联系我们",name:"second"}},[n("div",{staticClass:"title"},[t._v("联系我们")]),n("div",{staticClass:"addressUs"},[n("div",{staticClass:"leftp fl"},[n("p",[t._v("联系电话： "),n("span",{staticStyle:{"font-size":"28px",color:"#4A90E2"}},[t._v("400-878-0703")])]),n("p",[t._v("公司：杭州策知通科技有限公司")]),n("p",[t._v("          杭州快知科技有限公司")]),n("p",[t._v("          杭州快知知识产权代理事务所")]),n("p",[t._v("          杭州双元知识产权代理有限公司")]),n("p",[t._v("邮箱：server@cezhitong.com")]),n("p",[t._v("地址：浙江省杭州市江干区红普路759号汇禾禧福汇电商创业大厦4-312室")])]),n("div",{staticClass:"rightp fl"},[n("aMap",{style:t.mapStyle})],1)])])],1)],1),n("btArea")],1)},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"usImg"},[a("img",{attrs:{src:n("2d13"),alt:""}})])}],i=n("be94"),o=(n("7f7f"),n("cadf"),n("551c"),n("097d"),n("2f62")),s=n("d9de"),c=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},u=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"root"},[n("div",{attrs:{id:"container"}})])}],d={name:"",data:function(){return{}},props:["mapStyle"],computed:Object(i["a"])({},Object(o["c"])([])),methods:{},mounted:function(){var t=new AMap.Map("container",{zoom:16,center:[120.24938632462309,30.309895193266115],viewMode:"3D"}),e=new AMap.Marker({position:new AMap.LngLat(120.24938632462309,30.309895193266115),title:"杭州策知通科技网络有限公司"});t.add(e)}},f=d,l=(n("68a6"),n("2877")),m=Object(l["a"])(f,c,u,!1,null,"49f682fe",null);m.options.__file="map.vue";var p=m.exports,h=(n("365c"),{metaInfo:function(){return{title:this.seoConfig.title,meta:this.seoConfig.meta}},name:"about",data:function(){var t=this;return{seoConfig:this.$store.state.tdks.filter(function(e){return e.pageCode===t.$options.name})[0],activeName:"first",mapStyle:{height:"400px",width:"100%"}}},components:{btArea:s["a"],aMap:p},computed:Object(i["a"])({},Object(o["c"])([])),methods:{handleClick:function(t,e){}},mounted:function(){}}),v=h,g=(n("1f02"),Object(l["a"])(v,a,r,!1,null,null,null));g.options.__file="About.vue";e["default"]=g.exports},d9de:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"footer"},[a("div",{staticClass:"bottomArea"},[a("div",{staticClass:"topArea"},[a("div",{staticClass:"qrcode"},[a("img",{attrs:{src:n("be68"),alt:""}})]),a("div",{staticClass:"phoneAdress"},[a("p",[t._v("联系我们：400-878-0703 ")]),a("p",[t._v("服务时间：周一至周五9:00-18:00 ")]),a("p",[t._v("邮箱：server@cezhitong.com")]),a("p",[t._v("地址：浙江省杭州市江干区红普路759号汇禾禧福汇电商创业大厦4-312室")])])]),a("div",{staticClass:"links"},[a("span",[t._v("友情链接：")]),a("a",{attrs:{href:"http://www.innocom.gov.cn/",target:"_blank"}},[t._v("国家高新技术企业认定管理工作网")]),a("a",{attrs:{href:"http://www.most.gov.cn/",target:"_blank"}},[t._v("科部网")]),a("a",{attrs:{href:"http://www.zjkjt.gov.cn/",target:"_blank"}},[t._v("浙江省科技厅")]),a("a",{attrs:{href:"http://202.107.205.11:8612/",target:"_blank"}},[t._v("浙江省高新技术企业认定管理工作网")])]),a("div",{staticClass:"copyRight"},[a("div",[t._v("©2018-2019 策知通科技公司版权所有 浙ICP备18006065号-1")]),a("div")])])])}],i=(n("cadf"),n("551c"),n("097d"),{name:"",data:function(){return{}},methods:{},mounted:function(){}}),o=i,s=(n("bf99"),n("2877")),c=Object(s["a"])(o,a,r,!1,null,"2097c203",null);c.options.__file="index.vue";e["a"]=c.exports}}]);