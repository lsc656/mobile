import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "axios"
import vueResource from "vue-resource"
import'mint-ui/lib/style.css'
//axios跨域保存session
Vue.prototype.axios=axios;
axios.defaults.withCredentials=true;
//vue.resourse跨域保存session
Vue.use(vueResource);
Vue.config.productionTip = false
//根路径
Vue.http.options.root = "http://127.0.0.1:3000/";
Vue.http.options.emulateJSON = true;
Vue.http.options.withCredentials = true
//mui
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'
//mint-ui
import'mint-ui/lib/style.css'
import {Header,Swipe,SwipeItem,Button} from "mint-ui"
Vue.component("mt-header",Header);
Vue.component("mt-swipe",Swipe);
Vue.component("mt-swipe-item",SwipeItem);
Vue.component(Button.name,Button);



Vue.filter("sTime",function(val){
  var now=new Date(val);
  var y=now.getFullYear();
  var m=now.getMonth();
  var d=now.getDate();
  var h=now.getHours();
  var mi=now.getMinutes();
  var s=now.getSeconds();
  return `${y}年${m}月${d}日 ${h}时${mi}分${s}秒`  
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
