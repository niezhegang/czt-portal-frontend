(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1a8a769e"],{"365c":function(t,e,n){"use strict";n("cadf"),n("551c"),n("097d");var i=n("bc3a"),r=n.n(i),o=n("5c96"),s=(n("c0d6"),r.a.create({baseURL:"http://www.cezhitong.com",timeout:2e4}));s.interceptors.request.use(function(t){return t},function(t){console.log("错误："),Promise.reject(t)}),s.interceptors.response.use(function(t){var e=t.data;return 200!==t.status?(Object(o["Message"])({message:e.msg,type:"error"}),403===e.code&&o["MessageBox"].confirm("登录超时，请重新登录","确定登出",{confirmButtonText:"重新登录",cancelButtonText:"取消",type:"warning"}).then(function(){window.location.href="#/login",location.reload()}),Promise.reject("error")):t.data},function(t){return console.log("err"+t),Object(o["Message"])({message:t.message,type:"error",duration:3e3}),Promise.reject(t)});var a=s;function c(t){return a({url:"highExams/basic/questions",method:"get"})}function u(t){return a({url:"highExams/basic/answers",method:"post",data:t.param})}function l(t){return a({url:"highExams/high/questions",method:"get"})}function d(t){return a({url:"highExams/high/answers",method:"post",data:t.param})}function f(t){return a({url:"highExams/high/detailResult",method:"post",data:t.param})}function h(t){return a({url:"highTechQuestions/search",method:"get",params:t.param})}function g(t){return a({url:"subsidyPolicies/recentModify",method:"get"})}function m(t){return a({url:"subsidyPolicies",method:"get",params:t.param})}function p(t){return a({url:"subsidyPolicies/company/"+"".concat(t.companyName),method:"get"})}function v(t){return a({url:"subsidyPolicies/region/"+"".concat(t.regionCode),method:"get"})}function b(t){return a({url:"dicts/financialGrowth",method:"get"})}function w(t){return a({url:"dicts/highField",method:"get"})}function _(t){return a({url:"dicts/ipType",method:"get"})}function y(t){return a({url:"dicts/otherCostType",method:"get"})}function C(t){return a({url:"dicts/recentYearIncoming",method:"get"})}function k(t){return a({url:"costAccount",method:"post",data:t.data})}n.d(e,"a",function(){return c}),n.d(e,"n",function(){return u}),n.d(e,"g",function(){return l}),n.d(e,"o",function(){return d}),n.d(e,"e",function(){return f}),n.d(e,"d",function(){return h}),n.d(e,"j",function(){return g}),n.d(e,"p",function(){return m}),n.d(e,"l",function(){return p}),n.d(e,"m",function(){return v}),n.d(e,"c",function(){return b}),n.d(e,"f",function(){return w}),n.d(e,"h",function(){return _}),n.d(e,"i",function(){return y}),n.d(e,"k",function(){return C}),n.d(e,"b",function(){return k})},5445:function(t,e,n){"use strict";var i=n("58d3"),r=n.n(i);r.a},"58d3":function(t,e,n){},"6a84":function(t,e,n){},"7f7f":function(t,e,n){var i=n("86cc").f,r=Function.prototype,o=/^\s*function ([^ (]*)/,s="name";s in r||n("9e1e")&&i(r,s,{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(t){return""}}})},be68:function(t,e,n){t.exports=n.p+"assets/img/qrcode.4c9bfde3.png"},bf99:function(t,e,n){"use strict";var i=n("6a84"),r=n.n(i);r.a},d9de:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},r=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"footer"},[i("div",{staticClass:"bottomArea"},[i("div",{staticClass:"topArea"},[i("div",{staticClass:"qrcode"},[i("img",{attrs:{src:n("be68"),alt:""}})]),i("div",{staticClass:"phoneAdress"},[i("p",[t._v("联系我们：400-878-0703 ")]),i("p",[t._v("服务时间：周一至周五9:00-18:00 ")]),i("p",[t._v("邮箱：server@cezhitong.com")]),i("p",[t._v("地址：浙江省杭州市江干区红普路759号汇禾禧福汇电商创业大厦4-312室")])])]),i("div",{staticClass:"links"},[i("span",[t._v("友情链接：")]),i("a",{attrs:{href:"http://www.innocom.gov.cn/",target:"_blank"}},[t._v("国家高新技术企业认定管理工作网")]),i("a",{attrs:{href:"http://www.most.gov.cn/",target:"_blank"}},[t._v("科部网")]),i("a",{attrs:{href:"http://www.zjkjt.gov.cn/",target:"_blank"}},[t._v("浙江省科技厅")]),i("a",{attrs:{href:"http://202.107.205.11:8612/",target:"_blank"}},[t._v("浙江省高新技术企业认定管理工作网")])]),i("div",{staticClass:"copyRight"},[i("div",[t._v("©2018-2019 策知通科技公司版权所有 浙ICP备18006065号-1")]),i("div")])])])}],o=(n("cadf"),n("551c"),n("097d"),{name:"",data:function(){return{}},methods:{},mounted:function(){}}),s=o,a=(n("bf99"),n("2877")),c=Object(a["a"])(s,i,r,!1,null,"2097c203",null);c.options.__file="index.vue";e["a"]=c.exports},f4c9:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"root"},[n("el-steps",{staticClass:"yy-steps",attrs:{active:2,"align-center":""}},[n("el-step",{attrs:{title:"基础评估"}}),n("el-step",{attrs:{title:"高新评分"}}),n("el-step",{attrs:{title:"评估结果及建议"}})],1),n("ul",{staticClass:"questions"},t._l(t.highQuestionsList,function(e,i){return n("li",{key:i,staticClass:"queTitle animated fadeIn"},[n("div",[t._v(t._s(i+1+"、"+e.content))]),n("el-radio-group",{model:{value:e.answer,callback:function(n){t.$set(e,"answer",n)},expression:"item.answer"}},t._l(e.options,function(i,r){return n("el-radio",{key:r,class:[e.options.length>2&&i.content.length>30?"moreOptions":""],attrs:{label:i.id}},[t._v(t._s(i.content))])}),1)],1)}),0),n("div",{staticClass:"btnArea"},[n("el-button",{on:{click:t.submitStep2}},[t._v("查看评估报告")])],1),n("btArea")],1)},r=[],o=n("be94"),s=(n("7f7f"),n("2f62")),a=n("d9de"),c=n("365c"),u={name:"newRate",metaInfo:function(){return{title:this.seoConfig.title,meta:this.seoConfig.meta}},data:function(){var t=this;return{seoConfig:this.$store.state.tdks.filter(function(e){return e.pageCode===t.$options.name})[0],highQuestionsList:[],loading:!0,dialogConfig:{centerDialogVisible:!1}}},components:{btArea:a["a"]},computed:Object(o["a"])({},Object(s["c"])([])),methods:{submitStep2:function(){var t=this,e=[];this.highQuestionsList.map(function(t){t.answer&&e.push({answer:t.answer,id:t.id})}),e.length===this.highQuestionsList.length?(this.loading=!0,Object(c["o"])({param:e}).then(function(e){t.loading=!1,e.success?t.$router.push({path:"/rateResult",query:{score:e.data.score}}):t.$alert("".concat(e.msg)||"网络错误，请刷新重试。","提示",{confirmButtonText:"确定",type:"warning",closeOnClickModal:!0,callback:function(t){}})}).catch(function(e){t.loading=!1})):this.$alert("您还有题目未完成，无法评估，请继续作答。","提示",{confirmButtonText:"确定",type:"warning",closeOnClickModal:!0,callback:function(t){}})}},mounted:function(){var t=this;this.loading=!0,Object(c["g"])().then(function(e){t.loading=!1,t.highQuestionsList=e.data}).catch(function(e){t.loading=!1})}},l=u,d=(n("5445"),n("2877")),f=Object(d["a"])(l,i,r,!1,null,"1991dc44",null);f.options.__file="newRate.vue";e["default"]=f.exports}}]);