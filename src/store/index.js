import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    statusLogin: true
  },
  mutations: {
    loginChange: function (stated) {
      if (stated.statusLogin) {
        stated.statusLogin = false
        console.log(stated.statusLogin)
      } else {
        stated.statusLogin = true
        console.log(stated.statusLogin)
      }
    }
  }
})
