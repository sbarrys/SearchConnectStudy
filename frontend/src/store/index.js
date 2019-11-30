import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const API_HOST = "http://localhost:3000"

export default new Vuex.Store({
  state: {
    host: 'http://localhost:3000'
  },
  mutations: {
  },
  actions: {
    async login({},data) {
      console.log('index.js')
      const res = await this.$http.post(API_HOST + '/users/login',data)
      if (res.data.success === true) alert("hi")
      console.log(res.data)
      // return success/result to action caller
      return res.data
    },
  },
  modules: {
  }
})
