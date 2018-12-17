import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index.vue'
import Sale from './views/Sale.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',name: 'Index',component: Index},
    {path: '/sale/:tagId',name: 'Sale',component: Sale},
  ]
})
