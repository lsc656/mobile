import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index.vue'
import Sale from './views/Sale.vue'
import Detail from './views/Detail.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',name: 'Index',component: Index},
    {path:"/Index",redirect:"/"},
    {path: '/Sale/:tagId',name: 'Sale',component: Sale},
    {path: '/Detail/:sid',name:"Detail",component: Detail,},
  ]
})
