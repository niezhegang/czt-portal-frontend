(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7140fdc5"],{"1ab2":function(t,e,n){t.exports=n.p+"assets/img/noneSubsidize.17c0cdde.png"},"365c":function(t,e,n){"use strict";n("cadf"),n("551c"),n("097d");var i=n("bc3a"),a=n.n(i),s=n("5c96"),o=(n("c0d6"),a.a.create({baseURL:"http://www.cezhitong.com",timeout:2e4}));o.interceptors.request.use(function(t){return t},function(t){console.log("错误："),Promise.reject(t)}),o.interceptors.response.use(function(t){var e=t.data;return 200!==t.status?(Object(s["Message"])({message:e.msg,type:"error"}),403===e.code&&s["MessageBox"].confirm("登录超时，请重新登录","确定登出",{confirmButtonText:"重新登录",cancelButtonText:"取消",type:"warning"}).then(function(){window.location.href="#/login",location.reload()}),Promise.reject("error")):t.data},function(t){return console.log("err"+t),Object(s["Message"])({message:t.message,type:"error",duration:3e3}),Promise.reject(t)});var r=o;function c(t){return r({url:"highExams/basic/questions",method:"get"})}function l(t){return r({url:"highExams/basic/answers",method:"post",data:t.param})}function u(t){return r({url:"highExams/high/questions",method:"get"})}function d(t){return r({url:"highExams/high/answers",method:"post",data:t.param})}function h(t){return r({url:"highExams/high/detailResult",method:"post",data:t.param})}function m(t){return r({url:"highTechQuestions/search",method:"get",params:t.param})}function f(t){return r({url:"subsidyPolicies/recentModify",method:"get"})}function p(t){return r({url:"subsidyPolicies",method:"get",params:t.param})}function g(t){return r({url:"subsidyPolicies/company/"+"".concat(t.companyName),method:"get"})}function b(t){return r({url:"subsidyPolicies/region/"+"".concat(t.regionCode),method:"get"})}function v(t){return r({url:"dicts/financialGrowth",method:"get"})}function y(t){return r({url:"dicts/highField",method:"get"})}function _(t){return r({url:"dicts/ipType",method:"get"})}function C(t){return r({url:"dicts/otherCostType",method:"get"})}function w(t){return r({url:"dicts/recentYearIncoming",method:"get"})}function x(t){return r({url:"costAccount",method:"post",data:t.data})}n.d(e,"a",function(){return c}),n.d(e,"n",function(){return l}),n.d(e,"g",function(){return u}),n.d(e,"o",function(){return d}),n.d(e,"e",function(){return h}),n.d(e,"d",function(){return m}),n.d(e,"j",function(){return f}),n.d(e,"p",function(){return p}),n.d(e,"l",function(){return g}),n.d(e,"m",function(){return b}),n.d(e,"c",function(){return v}),n.d(e,"f",function(){return y}),n.d(e,"h",function(){return _}),n.d(e,"i",function(){return C}),n.d(e,"k",function(){return w}),n.d(e,"b",function(){return x})},3903:function(t,e,n){"use strict";(function(t){var i=n("be94"),a=(n("7f7f"),n("2f62")),s=n("365c"),o=n("d9de");e["a"]={name:"subsidize",metaInfo:function(){return{title:this.seoConfig.title,meta:this.seoConfig.meta}},data:function(){var t=this;return{seoConfig:this.$store.state.tdks.filter(function(e){return e.pageCode===t.$options.name})[0],companyName:"",regionList:[],selectedOptions:[],props:{value:"code",label:"name"},hotSearhList:[],subscribeList:[],params:{limit:10,pageIndex:1,queryString:[]},regionNone:!1,companyNone:!1,loadMore:!1,totalNum:0,loading:!0,reg:/<\/?.+?\/?>/g}},computed:Object(i["a"])({},Object(a["c"])([])),components:{btArea:o["a"]},methods:{handleChange:function(t){},scrollBottom:function(){var e=this;if(t(".leftArea").height()+t(".leftArea").scrollTop()==t(".leftArea ul").height()+20){this.params.pageIndex++;var n=!0;n&&this.subscribeList.length<this.totalNum&&(this.loadMore=!0,n=!1,Object(s["p"])({param:this.params}).then(function(t){n=!0,e.subscribeList=e.subscribeList.concat(t.data.content),e.loadMore=!1}))}},clickSearchCompany:function(){var t=this;this.loading=!0;var e=!0;e&&(this.companyName&&this.companyName.trim()?Object(s["l"])({companyName:this.companyName.trim()}).then(function(n){t.loading=!1,e=!0,n.data.length>0?(t.companyNone=!1,t.regionNone=!1,t.subscribeList=n.data,t.toDetail(t.subscribeList[0])):(t.subscribeList=[],t.regionNone=!1,t.companyNone=!0)}):(this.params.pageIndex=1,this.initLeftContent(),e=!0))},clickSearchRegion:function(){var t=this;this.loading=!0;var e=!0;e&&(e=!1,this.selectedOptions.length>0?Object(s["m"])({regionCode:this.selectedOptions[this.selectedOptions.length-1]-0}).then(function(n){t.loading=!1,e=!0,n.data.length>0?(t.regionNone=!1,t.companyNone=!1,t.subscribeList=n.data,t.toDetail(t.subscribeList[0])):(t.subscribeList=[],t.companyNone=!1,t.regionNone=!0)}):(this.params.pageIndex=1,this.initLeftContent(),e=!0))},initLeftContent:function(){var t=this;this.regionNone=!1,this.companyNone=!1,Object(s["p"])({param:this.params}).then(function(e){t.loading=!1,t.subscribeList=e.data.content,t.totalNum=e.data.total,t.loadMore=!1})},initHotSearch:function(){var t=this;Object(s["j"])().then(function(e){t.hotSearhList=e.data})},toDetail:function(t){console.log("content",t),this.$router.push({name:"subsidizeDetail",params:{content:t}})},smoothscroll:function(){var e=t(".leftArea").scrollTop();e>0&&(window.requestAnimationFrame(this.smoothscroll),t(".leftArea")[0].scrollTo(0,e-e/5))}},mounted:function(){this.initLeftContent(),this.initHotSearch(),t(".leftArea")[0].addEventListener("scroll",this.scrollBottom)}}}).call(this,n("1157"))},"6a84":function(t,e,n){},"7f7f":function(t,e,n){var i=n("86cc").f,a=Function.prototype,s=/^\s*function ([^ (]*)/,o="name";o in a||n("9e1e")&&i(a,o,{configurable:!0,get:function(){try{return(""+this).match(s)[1]}catch(t){return""}}})},"9fa62":function(t,e,n){t.exports=n.p+"assets/img/noneRegion.e0c1d87a.png"},be68:function(t,e,n){t.exports=n.p+"assets/img/qrcode.4c9bfde3.png"},bf99:function(t,e,n){"use strict";var i=n("6a84"),a=n.n(i);a.a},c87e:function(t,e,n){},d379:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"subsidize"},[i("div",{staticClass:"wrap"},[i("div",{staticClass:"topSearch animated fadeIn"},[i("el-tabs",{attrs:{type:"card"}},[i("el-tab-pane",{staticClass:"company clearfix",attrs:{label:"按公司全称查询"}},[i("el-input",{attrs:{placeholder:"请输入公司全称，查询当地高企资助政策；如：杭州快知科技有限公司",clearable:""},nativeOn:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.clickSearchCompany(e):null}},model:{value:t.companyName,callback:function(e){t.companyName=e},expression:"companyName"}}),i("el-button",{attrs:{icon:"el-icon-search"},on:{click:t.clickSearchCompany}})],1),i("el-tab-pane",{staticClass:"company clearfix",attrs:{label:"按所在地查询"}},[i("el-cascader",{attrs:{options:t.regionList,props:t.props,"change-on-select":"",clearable:""},model:{value:t.selectedOptions,callback:function(e){t.selectedOptions=e},expression:"selectedOptions"}}),i("el-button",{attrs:{icon:"el-icon-search"},on:{click:t.clickSearchRegion}})],1)],1)],1),i("div",{staticClass:"downArea animated fadeIn"},[i("div",{staticClass:"leftArea"},[t.companyNone?i("div",{staticClass:"none1"},[i("img",{staticStyle:{width:"35%"},attrs:{src:n("1ab2"),alt:""}}),i("div",{staticStyle:{"font-size":"14px","margin-top":"25px"}},[t._v("搜索无结果...")])]):t._e(),t.regionNone?i("div",{staticClass:"none2"},[i("img",{staticStyle:{width:"35%"},attrs:{src:n("9fa62"),alt:""}}),i("div",{staticStyle:{"font-size":"14px","margin-top":"25px"}},[t._v("该地区的高新资助正在努力扩展中，试试在线客服寻求帮助吧…")])]):t._e(),i("ul",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}]},[t._l(t.subscribeList,function(e,n){return i("li",{key:n},[i("div",{staticClass:"title"},[i("span",{staticClass:"ellipsis tName"},[t._v(t._s(e.name))]),i("span",{staticStyle:{"font-size":"11px","font-family":"SourceHanSansCN-Regular","font-weight":"400",color:"rgba(133,133,133,1)"}},[t._v("时间："+t._s(new Date(e.modifyTime).Format("yyyy-MM-dd hh:mm:ss")))])]),i("div",{staticClass:"content"},[i("span",{staticClass:"ellipsis",staticStyle:{width:"83%"}},[t._v(t._s(e.content.replace(t.reg,"")))]),i("el-button",{attrs:{type:"text"},on:{click:function(n){t.toDetail(e)}}},[t._v("查看详情 》")])],1)])}),t.subscribeList.length==t.totalNum&&0!=t.subscribeList.length?i("div",{staticClass:"noneList",staticStyle:{"text-align":"center",color:"#9e9e9e","font-size":"12px"}},[t._v("---没有更多了---")]):t._e()],2),t.subscribeList.length>6?i("el-button",{staticClass:"toTop",attrs:{circle:"",type:"primary",icon:"el-icon-arrow-up"},on:{click:t.smoothscroll}}):t._e(),i("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loadMore,expression:"loadMore"}],staticClass:"loadMore"})],1),i("div",{staticClass:"rightArea"},[i("div",{staticClass:"topTitle"},[t._v("\n                  最新高企资助政策\n              ")]),i("ul",t._l(t.hotSearhList,function(e,n){return i("li",{key:n},[i("div",{staticClass:"num"},[t._v(t._s(n+1))]),i("div",{staticClass:"hotSearch",on:{click:function(n){t.toDetail(e)}}},[t._v(t._s(e.name))])])}),0)])])]),i("btArea")],1)},a=[],s=n("3903"),o=s["a"],r=(n("f15b"),n("2877")),c=Object(r["a"])(o,i,a,!1,null,null,null);c.options.__file="index.vue";e["default"]=c.exports},d9de:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},a=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"footer"},[i("div",{staticClass:"bottomArea"},[i("div",{staticClass:"topArea"},[i("div",{staticClass:"qrcode"},[i("img",{attrs:{src:n("be68"),alt:""}})]),i("div",{staticClass:"phoneAdress"},[i("p",[t._v("联系我们：400-878-0703 ")]),i("p",[t._v("服务时间：周一至周五9:00-18:00 ")]),i("p",[t._v("邮箱：server@cezhitong.com")]),i("p",[t._v("地址：浙江省杭州市江干区红普路759号汇禾禧福汇电商创业大厦4-312室")])])]),i("div",{staticClass:"links"},[i("span",[t._v("友情链接：")]),i("a",{attrs:{href:"http://www.innocom.gov.cn/",target:"_blank"}},[t._v("国家高新技术企业认定管理工作网")]),i("a",{attrs:{href:"http://www.most.gov.cn/",target:"_blank"}},[t._v("科部网")]),i("a",{attrs:{href:"http://www.zjkjt.gov.cn/",target:"_blank"}},[t._v("浙江省科技厅")]),i("a",{attrs:{href:"http://202.107.205.11:8612/",target:"_blank"}},[t._v("浙江省高新技术企业认定管理工作网")])]),i("div",{staticClass:"copyRight"},[i("div",[t._v("©2018-2019 策知通科技公司版权所有 浙ICP备18006065号-1")]),i("div")])])])}],s=(n("cadf"),n("551c"),n("097d"),{name:"",data:function(){return{}},methods:{},mounted:function(){}}),o=s,r=(n("bf99"),n("2877")),c=Object(r["a"])(o,i,a,!1,null,"2097c203",null);c.options.__file="index.vue";e["a"]=c.exports},f15b:function(t,e,n){"use strict";var i=n("c87e"),a=n.n(i);a.a}}]);