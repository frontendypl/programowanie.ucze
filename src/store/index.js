import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters: {
    apiUrl(){
      return location.href.indexOf('localhost') === -1? 'https://contact-api.ucze.net' : 'http://localhost:2001'
    },
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
