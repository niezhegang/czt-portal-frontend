(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d150d8c0"],{"1ab2":function(t,e,n){t.exports=n.p+"assets/img/noneSubsidize.17c0cdde.png"},"365c":function(t,e,n){"use strict";n("cadf"),n("551c"),n("097d");var a=n("bc3a"),i=n.n(a),s=n("5c96"),r=(n("c0d6"),i.a.create({baseURL:"",timeout:2e4}));r.interceptors.request.use(function(t){return t},function(t){console.log("错误："),Promise.reject(t)}),r.interceptors.response.use(function(t){var e=t.data;return 200!==t.status?(Object(s["Message"])({message:e.msg,type:"error"}),403===e.code&&s["MessageBox"].confirm("登录超时，请重新登录","确定登出",{confirmButtonText:"重新登录",cancelButtonText:"取消",type:"warning"}).then(function(){window.location.href="#/login",location.reload()}),Promise.reject("error")):t.data},function(t){return console.log("err"+t),Object(s["Message"])({message:t.message,type:"error",duration:3e3}),Promise.reject(t)});var o=r;function c(t){return o({url:"seoConfig",method:"get"})}function u(t){return o({url:"highExams/basic/questions",method:"get"})}function l(t){return o({url:"highExams/basic/answers",method:"post",data:t.param})}function d(t){return o({url:"highExams/high/questions",method:"get"})}function h(t){return o({url:"highExams/high/answers",method:"post",data:t.param})}function f(t){return o({url:"highExams/high/detailResult",method:"post",data:t.param})}function m(){return o({url:"regions/cascade",method:"get"})}function p(t){return o({url:"highTechQuestions/search",method:"get",params:t.param})}function g(t){return o({url:"subsidyPolicies/recentModify",method:"get"})}function v(t){return o({url:"subsidyPolicies",method:"get",params:t.param})}function _(t){return o({url:"subsidyPolicies/company/"+"".concat(t.companyName),method:"get"})}function b(t){return o({url:"subsidyPolicies/region/"+"".concat(t.regionCode),method:"get"})}function C(t){return o({url:"dicts/financialGrowth",method:"get"})}function y(t){return o({url:"dicts/highField",method:"get"})}function w(t){return o({url:"dicts/ipType",method:"get"})}function x(t){return o({url:"dicts/otherCostType",method:"get"})}function Q(t){return o({url:"dicts/recentYearIncoming",method:"get"})}function T(t){return o({url:"costAccount",method:"post",data:t.data})}n.d(e,"g",function(){return c}),n.d(e,"a",function(){return u}),n.d(e,"p",function(){return l}),n.d(e,"i",function(){return d}),n.d(e,"q",function(){return h}),n.d(e,"f",function(){return f}),n.d(e,"e",function(){return m}),n.d(e,"d",function(){return p}),n.d(e,"l",function(){return g}),n.d(e,"r",function(){return v}),n.d(e,"n",function(){return _}),n.d(e,"o",function(){return b}),n.d(e,"c",function(){return C}),n.d(e,"h",function(){return y}),n.d(e,"j",function(){return w}),n.d(e,"k",function(){return x}),n.d(e,"m",function(){return Q}),n.d(e,"b",function(){return T})},"6a84":function(t,e,n){},"8e58":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"FAQs"},[a("div",{staticClass:"wrap"},[a("div",{staticClass:"topSearch animated fadeIn"},[a("el-input",{attrs:{placeholder:"请输入您需要解答的问题",clearable:""},nativeOn:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.searchQue(e):null}},model:{value:t.param.primaryKey,callback:function(e){t.$set(t.param,"primaryKey",e)},expression:"param.primaryKey"}}),a("el-button",{attrs:{icon:"el-icon-search"},on:{click:t.searchQue}})],1),a("div",{staticClass:"downArea animated fadeIn"},[a("div",{staticClass:"leftArea"},[t.noQue?a("div",{staticClass:"none1"},[a("img",{staticStyle:{width:"35%"},attrs:{src:n("1ab2"),alt:""}}),a("div",{staticStyle:{"font-size":"14px","margin-top":"25px"}},[t._v("小通没有找到您要搜索的问题，试试人工客服解决问题吧…")])]):t._e(),a("ul",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}]},[t._l(t.hightTechQList,function(e,n){return a("li",{key:n},[a("div",{staticClass:"title"},[a("span",{staticClass:"ellipsis"},[t._v(t._s(e.question.replace(t.reg,"")))]),a("span",{staticStyle:{"font-size":"11px","font-family":"SourceHanSansCN-Regular","font-weight":"400",color:"rgba(133,133,133,1)"}},[t._v(t._s(new Date(e.updatedTime).Format("yyyy-MM-dd hh:mm:ss")))])]),a("div",{staticClass:"content"},[a("span",{staticClass:"ellipsis"},[t._v(t._s(e.answer.replace(t.reg,"")))]),a("el-button",{attrs:{type:"text"},on:{click:function(n){t.toDetail(e)}}},[t._v("查看详情 》")])],1)])}),t.hightTechQList.length==t.totalNum&&0!=t.hightTechQList.length?a("div",{staticClass:"noneList",staticStyle:{"text-align":"center",color:"#9e9e9e","font-size":"12px"}},[t._v("---没有更多了---")]):t._e()],2),t.hightTechQList.length>6?a("el-button",{staticClass:"toTop",attrs:{circle:"",type:"primary",icon:"el-icon-arrow-up"},on:{click:t.smoothscroll}}):t._e(),a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loadMore,expression:"loadMore"}],staticClass:"loadMore"})],1),t._m(0)])]),a("btArea")],1)},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"rightArea"},[n("div",{staticClass:"topTitle"},[t._v("\n                  热门搜索\n              ")]),n("div",{staticClass:"texts"},[n("div",[n("span",{staticClass:"font12"},[t._v("科技成果转化")])]),n("div",[n("span",{staticClass:"font15"},[t._v("研发费用归集")])]),n("div",[n("span",{staticClass:"font14"},[t._v("研究开发活动")]),n("span",{staticClass:"font18"},[t._v("科技人员占比")])]),n("div",[n("span",{staticClass:"font15"},[t._v("所有权人")]),n("span",{staticClass:"font28"},[t._v("知识产权")]),n("span",{staticClass:"font12"},[t._v("专利有效性")])]),n("div",[n("span",{staticClass:"font20"},[t._v("企业创新能力评价指标")])]),n("div",[n("span",{staticClass:"font14"},[t._v("研究开发组织管理水平")])]),n("div",[n("span",{staticClass:"font12"},[t._v("高新技术产品（服务）收入")])])])])}],s=n("cbe6"),r=s["a"],o=(n("b5f0"),n("2877")),c=Object(o["a"])(r,a,i,!1,null,null,null);c.options.__file="index.vue";e["default"]=c.exports},b5f0:function(t,e,n){"use strict";var a=n("e24f"),i=n.n(a);i.a},be68:function(t,e,n){t.exports=n.p+"assets/img/qrcode.4c9bfde3.png"},bf99:function(t,e,n){"use strict";var a=n("6a84"),i=n.n(a);i.a},cbe6:function(t,e,n){"use strict";(function(t){var a=n("be94"),i=n("2f62"),s=n("365c"),r=n("d9de");e["a"]={name:"",data:function(){return{hightTechQList:[],param:{pageIndex:1,limit:10,primaryKey:""},loading:!0,noQue:!1,loadMore:!1,totalNum:0,reg:/<\/?.+?\/?>/g}},computed:Object(a["a"])({},Object(i["b"])([])),components:{btArea:r["a"]},methods:{scrollBottom:function(){var e=this;if(t(".leftArea").height()+t(".leftArea").scrollTop()==t(".leftArea ul").height()+20){this.param.pageIndex++;var n=!0;n&&this.hightTechQList.length<this.totalNum&&(this.loadMore=!0,n=!1,Object(s["d"])({param:this.param}).then(function(t){n=!0,e.hightTechQList=e.hightTechQList.concat(t.data.content),e.loadMore=!1}))}},toDetail:function(t){this.$router.push({name:"FAQsDetail",params:{data:t}})},searchQue:function(){var t=this;this.loading=!0,this.param.pageIndex=1,Object(s["d"])({param:this.param}).then(function(e){e.data.content.length>0?(t.loading=!1,t.noQue=!1,t.hightTechQList=e.data.content,t.totalNum=e.data.total):(t.loading=!1,t.hightTechQList=[],t.totalNum=0,t.noQue=!0)}).catch(function(e){t.loading=!1})},initLeftContent:function(t){var e=this;Object(s["d"])({param:t}).then(function(t){e.loading=!1,e.noQue=!1,e.totalNum=t.data.total,e.hightTechQList=t.data.content}).catch(function(t){e.loading=!1})},smoothscroll:function(){var e=t(".leftArea").scrollTop();e>0&&(window.requestAnimationFrame(this.smoothscroll),t(".leftArea")[0].scrollTo(0,e-e/5))}},mounted:function(){var e=this;t(".leftArea")[0].addEventListener("scroll",this.scrollBottom),this.initLeftContent(this.param),t(".texts span").on("click",function(n){e.param.primaryKey=t(n.target).text(),e.searchQue()})}}}).call(this,n("1157"))},d9de:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"footer"},[a("div",{staticClass:"bottomArea"},[a("div",{staticClass:"topArea"},[a("div",{staticClass:"qrcode"},[a("img",{attrs:{src:n("be68"),alt:""}})]),a("div",{staticClass:"phoneAdress"},[a("p",[t._v("联系我们：400-878-0703 ")]),a("p",[t._v("服务时间：周一至周五9:00-18:00 ")]),a("p",[t._v("邮箱：server@cezhitong.com")]),a("p",[t._v("地址：浙江省杭州市江干区红普路759号汇禾禧福汇电商创业大厦4-312室")])])]),a("div",{staticClass:"links"},[a("span",[t._v("友情链接：")]),a("a",{attrs:{href:"http://www.innocom.gov.cn/",target:"_blank"}},[t._v("国家高新技术企业认定管理工作网")]),a("a",{attrs:{href:"http://www.most.gov.cn/",target:"_blank"}},[t._v("科部网")]),a("a",{attrs:{href:"http://www.zjkjt.gov.cn/",target:"_blank"}},[t._v("浙江省科技厅")]),a("a",{attrs:{href:"http://202.107.205.11:8612/",target:"_blank"}},[t._v("浙江省高新技术企业认定管理工作网")])]),a("div",{staticClass:"copyRight"},[a("div",[t._v("©2018-2019 策知通科技公司版权所有 浙ICP备18006065号-1")]),a("div")])])])}],s=(n("cadf"),n("551c"),n("097d"),{name:"",data:function(){return{}},methods:{},mounted:function(){}}),r=s,o=(n("bf99"),n("2877")),c=Object(o["a"])(r,a,i,!1,null,"2097c203",null);c.options.__file="index.vue";e["a"]=c.exports},e24f:function(t,e,n){}}]);