import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import 'normalize.css' // A modern alternative to CSS resets
import './style/global.scss' // A modern alternative to CSS resets
import 'font-awesome/css/font-awesome.css'
import animate from 'animate.css'
import util from './util/util'
import  './style/quill.bubble.css'
import  './style/quill.core.css'
import  './style/quill.snow.css'
import MetaInfo from 'vue-meta-info'
Vue.use(MetaInfo)
Vue.directive('posInt', function(el){
  var input = el;
  input.onkeyup = function (e) {
    if (e.target.value.length == 1) {
      e.target.value = e.target.value.replace(/[^1-9]/g, '');
    } else {
      e.target.value = e.target.value.replace(/[^\d]/g, "");
    }
  };
});

Vue.config.productionTip = false
Vue.mixin({
  data () {
    return{
      seoConfig: {
        title: '策知通高新技术企业服务平台',
        meta: [{
            name: 'description',
            content: '高企评测，高企问答，高新技术 关于我们'
          },
          {
            name: 'keywords',
            content: '高企评测，高企问答，高新技术 关于我们'
          }
        ]
      },
    }
  }
})
new Vue({
  router,
  store,
  render: h => h(App),
  // mounted() {
  //   document.dispatchEvent(new Event('render-event'))
  // }
}).$mount('#app')
