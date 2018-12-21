import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {    
    isLogin:false,
    uid:"",
    uname:"",
    ubid:[]    
  },
  mutations: {    
    setStoreUsers(state,pars){   //[对象名,新值]
      var [uData,newVal]=pars;
      state[uData]=newVal;
    },
  },
  actions: {

  }
})
