import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate"

import Login from './modules/Login.js'

Vue.use(Vuex)

export default new Vuex.Store({
  // state: {

  // },
  // getters: {
  // },
  // mutations: {
  // },
  // actions: {
  // },
  plugins: [createPersistedState({
    paths: ['Login'],
  })],
  modules: {
    Login
  }
})
