import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    statusLogin: true,
    title: 'ibatidos'
  },
  mutations: {
    loginChange: function (state) {
      state.title = 'Hola mundo!!'
    }
  }
})
