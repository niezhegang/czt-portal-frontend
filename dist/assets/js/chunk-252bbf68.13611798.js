(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-252bbf68"],{"365c":function(t,e,n){"use strict";n("cadf"),n("551c"),n("097d");var r=n("bc3a"),o=n.n(r),i=n("5c96"),a=(n("c0d6"),o.a.create({baseURL:"http://www.cezhitong.com",timeout:2e4}));a.interceptors.request.use(function(t){return t},function(t){console.log("错误："),Promise.reject(t)}),a.interceptors.response.use(function(t){var e=t.data;return 200!==t.status?(Object(i["Message"])({message:e.msg,type:"error"}),403===e.code&&i["MessageBox"].confirm("登录超时，请重新登录","确定登出",{confirmButtonText:"重新登录",cancelButtonText:"取消",type:"warning"}).then(function(){window.location.href="#/login",location.reload()}),Promise.reject("error")):t.data},function(t){return console.log("err"+t),Object(i["Message"])({message:t.message,type:"error",duration:3e3}),Promise.reject(t)});var s=a;function c(t){return s({url:"highExams/basic/questions",method:"get"})}function u(t){return s({url:"highExams/basic/answers",method:"post",data:t.param})}function l(t){return s({url:"highExams/high/questions",method:"get"})}function f(t){return s({url:"highExams/high/answers",method:"post",data:t.param})}function d(t){return s({url:"highExams/high/detailResult",method:"post",data:t.param})}function m(t){return s({url:"highTechQuestions/search",method:"get",params:t.param})}function g(t){return s({url:"subsidyPolicies/recentModify",method:"get"})}function p(t){return s({url:"subsidyPolicies",method:"get",params:t.param})}function h(t){return s({url:"subsidyPolicies/company/"+"".concat(t.companyName),method:"get"})}function b(t){return s({url:"subsidyPolicies/region/"+"".concat(t.regionCode),method:"get"})}function v(t){return s({url:"dicts/financialGrowth",method:"get"})}function y(t){return s({url:"dicts/highField",method:"get"})}function _(t){return s({url:"dicts/ipType",method:"get"})}function C(t){return s({url:"dicts/otherCostType",method:"get"})}function w(t){return s({url:"dicts/recentYearIncoming",method:"get"})}function x(t){return s({url:"costAccount",method:"post",data:t.data})}n.d(e,"a",function(){return c}),n.d(e,"n",function(){return u}),n.d(e,"g",function(){return l}),n.d(e,"o",function(){return f}),n.d(e,"e",function(){return d}),n.d(e,"d",function(){return m}),n.d(e,"j",function(){return g}),n.d(e,"p",function(){return p}),n.d(e,"l",function(){return h}),n.d(e,"m",function(){return b}),n.d(e,"c",function(){return v}),n.d(e,"f",function(){return y}),n.d(e,"h",function(){return _}),n.d(e,"i",function(){return C}),n.d(e,"k",function(){return w}),n.d(e,"b",function(){return x})},"3d67":function(t,e,n){},"3f88":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"root"},[n("el-steps",{staticClass:"yy-steps",attrs:{active:3,"align-center":""}},[n("el-step",{attrs:{title:"基础评估"}}),n("el-step",{attrs:{title:"高新评分"}}),n("el-step",{attrs:{title:"评估结果及建议"}})],1),n("div",{staticClass:"resultArea animated fadeIn"},[n("div",{staticClass:"reRate"},[n("div",{staticClass:"topTitle"},[t._v("初步评估分值:")]),n("div",{staticClass:"rates"},[t._v(t._s(""+t.$route.query.score||"")+"分")])]),n("el-button",{on:{click:t.openDialog}},[t._v("点击获取详细分析报告")])],1),n("yyDialog",{ref:"resultDialog",attrs:{dialogConfig:t.dialogConfig}},[n("template",{slot:"bodyArea"},[n("div",{staticStyle:{"text-align":"center","font-size":"24px","font-family":"SourceHanSansCN-Bold","font-weight":"bold",color:"rgba(53,60,69,1)"}},[t._v("\n          获取详细分析报告\n      ")]),n("el-form",{ref:"form1",staticStyle:{"padding-top":"40px"},attrs:{model:t.form,rules:t.rules,"label-width":"120px"}},[n("el-form-item",{attrs:{label:"公司名称：",prop:"companyName"}},[n("el-input",{attrs:{placeholder:"请输入贵公司名称"},model:{value:t.form.companyName,callback:function(e){t.$set(t.form,"companyName",e)},expression:"form.companyName"}})],1),n("el-form-item",{attrs:{label:"联系电话：",prop:"telephone"}},[n("el-input",{attrs:{placeholder:"请输入联系电话"},model:{value:t.form.telephone,callback:function(e){t.$set(t.form,"telephone",e)},expression:"form.telephone"}})],1),n("el-form-item",[n("div",{staticClass:"tips"},[t._v("我们将以短信的形式发送给您评估报告"),n("br"),t._v("本次服务短信免费")])]),n("div",{staticClass:"btnArea"},[n("el-button",{attrs:{type:"primary"},on:{click:t.onSubmit}},[t._v("开始发送")])],1)],1)],1)],2),n("btArea")],1)},o=[],i=n("7a97"),a=i["a"],s=(n("97f7"),n("2877")),c=Object(s["a"])(a,r,o,!1,null,"38aba26a",null);c.options.__file="rateResult.vue";e["default"]=c.exports},"642e":function(t,e,n){"use strict";var r=n("7c8d"),o=n.n(r);o.a},"6a84":function(t,e,n){},"7a97":function(t,e,n){"use strict";(function(t){var r=n("be94"),o=(n("7f7f"),n("2f62")),i=n("d9de"),a=n("817f"),s=n("365c");e["a"]={name:"rateResult",metaInfo:function(){return{title:this.seoConfig.title,meta:this.seoConfig.meta}},data:function(){var t=this,e=function(t,e,n){e?/^1[3|4|5|6|7|8][0-9]\d{8}$/.test(e.trim())?n():n(new Error("请输入正确的11位手机号码")):n(new Error("请输入电话号码"))};return{seoConfig:this.$store.state.tdks.filter(function(e){return e.pageCode===t.$options.name})[0],dialogConfig:{centerDialogVisible:!1},form:{companyName:"",telephone:""},rules:{companyName:[{required:!0,message:"请输入公司名称",trigger:"blur"}],telephone:[{required:!0,validator:e,trigger:"blur"}]},transData:{formEl:""},img1:n("c269"),img2:n("e581")}},components:{btArea:i["a"],yyDialog:a["a"]},computed:Object(r["a"])({},Object(o["c"])([])),methods:{openDialog:function(){var t=this;this.dialogConfig.centerDialogVisible=!0,this.form.companyName="",this.form.telephone="",this.$nextTick(function(){t.$refs["form1"].clearValidate()})},onSubmit:function(){var t=this;this.$nextTick(function(){t.$refs["form1"].validate(function(e){if(!e)return!1;Object(s["e"])({param:t.form}).then(function(e){t.dialogConfig.centerDialogVisible=!1,t.$alert(e.success?"已发送，请稍后查收短信。":e.msg,"提示",{confirmButtonText:"确定",type:"warning",closeOnClickModal:!0,callback:function(t){}})}).catch(function(e){t.dialogConfig.centerDialogVisible=!1,t.$alert("".concat(e.msg),"提示",{confirmButtonText:"确定",type:"warning",closeOnClickModal:!0,callback:function(t){}})})})})}},watch:{},mounted:function(){var e=this;t(".resultArea").height(439*t(".resultArea").width()/768),this.$nextTick(function(){e.transData.formEl=e.$refs["form1"]}),this.$route.query.score>71?t(".resultArea").css({background:"url("+this.img1+")"}):t(".resultArea").css({background:"url("+this.img2+")"})}}}).call(this,n("1157"))},"7c8d":function(t,e,n){},"7f7f":function(t,e,n){var r=n("86cc").f,o=Function.prototype,i=/^\s*function ([^ (]*)/,a="name";a in o||n("9e1e")&&r(o,a,{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(t){return""}}})},"817f":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"yydialog"},[n("el-dialog",{attrs:{title:"",visible:t.dialogConfig.centerDialogVisible,width:"588px",center:""},on:{"update:visible":function(e){t.$set(t.dialogConfig,"centerDialogVisible",e)},open:t.open}},[t._t("bodyArea")],2)],1)},o=[],i=n("be94"),a=n("2f62"),s={name:"",data:function(){return{}},props:["dialogConfig"],computed:Object(i["a"])({},Object(a["c"])([])),methods:{open:function(){}},mounted:function(){}},c=s,u=(n("642e"),n("2877")),l=Object(u["a"])(c,r,o,!1,null,null,null);l.options.__file="dialog.vue";e["a"]=l.exports},"97f7":function(t,e,n){"use strict";var r=n("3d67"),o=n.n(r);o.a},be68:function(t,e,n){t.exports=n.p+"assets/img/qrcode.4c9bfde3.png"},bf99:function(t,e,n){"use strict";var r=n("6a84"),o=n.n(r);o.a},c269:function(t,e,n){t.exports=n.p+"assets/img/gxpc_img1.3a669d8b.png"},d9de:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},o=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"footer"},[r("div",{staticClass:"bottomArea"},[r("div",{staticClass:"topArea"},[r("div",{staticClass:"qrcode"},[r("img",{attrs:{src:n("be68"),alt:""}})]),r("div",{staticClass:"phoneAdress"},[r("p",[t._v("联系我们：400-878-0703 ")]),r("p",[t._v("服务时间：周一至周五9:00-18:00 ")]),r("p",[t._v("邮箱：server@cezhitong.com")]),r("p",[t._v("地址：浙江省杭州市江干区红普路759号汇禾禧福汇电商创业大厦4-312室")])])]),r("div",{staticClass:"links"},[r("span",[t._v("友情链接：")]),r("a",{attrs:{href:"http://www.innocom.gov.cn/",target:"_blank"}},[t._v("国家高新技术企业认定管理工作网")]),r("a",{attrs:{href:"http://www.most.gov.cn/",target:"_blank"}},[t._v("科部网")]),r("a",{attrs:{href:"http://www.zjkjt.gov.cn/",target:"_blank"}},[t._v("浙江省科技厅")]),r("a",{attrs:{href:"http://202.107.205.11:8612/",target:"_blank"}},[t._v("浙江省高新技术企业认定管理工作网")])]),r("div",{staticClass:"copyRight"},[r("div",[t._v("©2018-2019 策知通科技公司版权所有 浙ICP备18006065号-1")]),r("div")])])])}],i=(n("cadf"),n("551c"),n("097d"),{name:"",data:function(){return{}},methods:{},mounted:function(){}}),a=i,s=(n("bf99"),n("2877")),c=Object(s["a"])(a,r,o,!1,null,"2097c203",null);c.options.__file="index.vue";e["a"]=c.exports},e581:function(t,e,n){t.exports=n.p+"assets/img/gxpc_img2.63ad1b08.png"}}]);