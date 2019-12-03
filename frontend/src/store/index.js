import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const API_HOST = "http://localhost:3000"

export default new Vuex.Store({
  state: {
    token: '',
    id: '',
    role: '',
    notices:[]
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
    },
    updateList(state, notices) {
      state.notices = notices
    },
  },
  actions: {
    async fetchNotices({ commit }) {
      const res = await Vue.axios.get(API_HOST+'/notices/notice')
      if (res.data.success === true) commit('updateList', res.data.result)
      // return success/result to action caller
      return res.data
    },
    async appendNotice({}, data) {
      const res = await Vue.axios.post(API_HOST+'/notices/create', data)
      // return success/result to action caller
      return res.data
    },
    async fetchNotice({}, { id }) {
      const res = await Vue.axios.get(API_HOST+`/notices/${id}`)
      // return success/result to action caller
      return res.data
    },
    async updateNotice({}, { id, data }) {
      const res = await Vue.axios.put( API_HOST+`/notices/edit/${id}`, data)
      // return success/result to action caller
      return res.data
    },
    async deleteNotice({}, { id }) {
      const res = await Vue.axios.delete(API_HOST+`/notices/${id}`)
      // return success/result to action caller
      return res.data
    }

  },
  modules: {
  }
})
