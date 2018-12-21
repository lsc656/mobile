import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users:[
      {isLogin:false},
      {uid:""},
      {uname:""},
      {ubid:[]}
    ]
  },
  mutations: {
    getters:{
      isLogin(state){
        return state.isLogin
      }
    },
    setters:{

    }
  },
  actions: {

  }
})
