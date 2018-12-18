import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index.vue'
import Sale from './components/Sale.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',name: 'Index',component: Index},
    {path:"/Index",redirect:"/"},
    {path: '/sale/:tagId',name: 'Sale',component: Sale},
  ]
})
