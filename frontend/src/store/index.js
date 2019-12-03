import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const API_HOST = "http://localhost:3000"

export default new Vuex.Store({
  state: {
    token: '',
    id: '',
    role: ''
  },
  getters:{
    id(state) {
      return state.id
    },
    
  },
  //setter
  mutations: {
    id: function (state, payload) {
      state.id = payload;
      console.log("(store/index.js)vuex의 id값:"+state.id)
    },
    logout: (state) => {
      if (state.id) {
        state.id = '';
        alert('로그아웃성공')
      }
    },
    logincheck: function (state) {
      if (state.id) {
        alert('로그인중')
        return true
      }
      else return false
    }
  },
  actions: {

  },
  modules: {
  }
})
