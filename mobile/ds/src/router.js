import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index.vue'
import Sale from './views/Sale.vue'
import Detail from './views/Detail.vue'
import Search from "./views/Search.vue"
import Login from "./views/Login.vue"
import Reg from "./views/Reg.vue"
import User from "./views/User.vue"
import Read from "./views/Read.vue"

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',name: 'Index',component: Index},
    {path:"/Index",redirect:"/"},
    {path: '/Sale/:tagId',name: 'Sale',component: Sale},
    {path: '/Detail/:sid',name:"Detail",component: Detail},
    {path:"/Search",name:"Search",component:Search},
    {path:"/Login",name:"Login",component:Login},
    {path:"/Reg",name:"Reg",component:Reg},
    {path:"/User",name:"User",component:User},
    {path:"/Read/:sid",name:"Read",component:Read},
  ]
})
