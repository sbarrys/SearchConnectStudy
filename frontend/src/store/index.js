import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const API_HOST = "http://localhost:3000"

export default new Vuex.Store({
  state: {
    token: '',
    id: '',
    idx: '',
    role: '',

    notices: [],
    studyNotices: [],
    studyAssignment: [],
    studySchedules: [],
    boardComments: []

  },
  getters: {
    id(state) {
      return state.id
    }, token(state) {
      return state.token
    }, idx(state) {
      return state.idx
    },
    // studylist(state) {
    // return state.studylist
    // }

  },
  //setter
  mutations: {
    id: function (state, payload) {
      state.id = payload;
      // console.log("(store/index.js)vuex의 id값:" + state.id)
    },
    token: function (state, payload) {
      state.token = payload;
      // console.log("(store/index.js)vuex의 token값:" + state.token)
    },
    idx: function (state, payload) {
      state.idx = payload;
      // console.log("(store/index.js)vuex의 idx:" + state.idx)
    },
    // studylist: function (state, payload) {
    //  state.studylist=payload;
    //   // if(payload){state.studylist =localStorage.getItem('studylist')}
    // },
    logout: (state) => {
      if (state.id) {
        state.id = '';
        state.token = '';
        state.idx = '';
        // state.studylist = [];
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
    updateStudyNotice(state, studyNotices) {
      state.studyNotices = studyNotices
    },
    updateAssignment(state, payload) {
      state.studyAssignment = payload
    },
    updateStudySchedule(state, studySchedules) {
      state.studySchedules = studySchedules
    },
    updateBoardComment(state, boardComments) {
      state.boardComments = boardComments
    }
  },
  actions: {
    async getStudylist({ }, { idx }) {
      const res = await Vue.axios.get(API_HOST + `/api/users/${idx}/study`,
        { headers: { 'x-access-token': this.state.token } })
      return res.data
    },

    //전체 스터디 공고
    async fetchNotices({ commit }) {
      const res = await Vue.axios.get(API_HOST + '/notices/notice')
      if (res.data.success === true) commit('updateList', res.data.result)
      // return success/result to action caller
      return res.data
    },
    //스터디 공고 상세 CRUD
    async appendNotice({ }, data) {
      const res = await Vue.axios.post(API_HOST + '/notices/create', data)
      // return success/result to action caller
      return res.data
    },
    async fetchNotice({ }, { id }) {
      const res = await Vue.axios.get(API_HOST + `/notices/${id}`)
      // return success/result to action caller
      return res.data
    },
    async updateNotice({ }, { id, data }) {
      const res = await Vue.axios.put(API_HOST + `/notices/${id}`, data)
      // return success/result to action caller
      return res.data
    },
    async deleteNotice({ }, { id }) {
      const res = await Vue.axios.delete(API_HOST + `/notices/${id}`)
      // return success/result to action caller
      return res.data
    },

    // //스터디속 강의노트 전체 개발XX
    // async fetchLectures({ commit }, { id }) {
    //   const res = await Vue.axios.get(API_HOST + `/notices/study/${id}/lecturenote`)
    //   if (res.data.success === true) commit('updateLecture', res.data.result)
    //   // return success/result to action caller
    //   return res.data
    // },
    // //스터디속 강의노트 글 상세 CRUD
    // async fetchLecture({ }, { id, idd }) {
    //   const res = await Vue.axios.get(API_HOST + `/notices/study/${id}/lecturenote/${idd}`)
    //   // return success/result to action caller
    //   return res.data
    // },
    // async updateLecture({ }, { id, data, idd }) {
    //   const res = await Vue.axios.put(API_HOST + `/notices/study/${id}/lecturenote/${idd}`, data)
    //   // return success/result to action caller
    //   return res.data
    // },
    // async appendLecture({ }, { id, data }) {
    //   const res = await Vue.axios.post(API_HOST + `/notices/study/${id}/lecturenote`, data)
    //   // return success/result to action caller
    //   return res.data
    // },
    // async deleteLecture({ }, { id, idd }) {
    //   const res = await Vue.axios.delete(API_HOST + `/notices/study/${id}/lecturenote/${idd}`)
    //   // return success/result to action caller
    //   return res.data
    // },

    //스터디속 공지사항 글 전체
    async fetchStudyNotices({ commit }, { id }) {
      const res = await Vue.axios.get(API_HOST + `/notices/${id}/notice`)
      if (res.data.success === true) commit('updateStudyNotice', res.data.result)
      // return success/result to action caller
      return res.data
    },

    //스터디속 공지 상세 CRUD 
    async fetchStudyNotice({ }, { id, idx }) {
      const res = await Vue.axios.get(API_HOST + `/notices/${id}/notice/${idx}`)
      // return success/result to action caller
      return res.data
    },
    async appendStudyNotice({ }, { id, data }) {
      const res = await Vue.axios.post(API_HOST + `/notices/${id}/notice`, data)
      // return success/result to action caller
      return res.data
    },
    async updateStudyNotice({ }, { id, data, idx }) {
      const res = await Vue.axios.put(API_HOST + `/notices/${id}/notice/${idx}`, data)
      // return success/result to action caller
      return res.data
    },
    async deleteStudyNotice({ }, { id, idx }) {
      const res = await Vue.axios.delete(API_HOST + `/notices/${id}/notice/${idx}`)
      // return success/result to action caller
      return res.data
    },

    // //스터디속 게시판 개발XX
    // async fetchStudyBoards({ commit }, { id }) {
    //   const res = await Vue.axios.get(API_HOST + `/notices/study/${id}/board`)
    //   if (res.data.success === true) commit('updateStudyBoard', res.data.result)
    //   // return success/result to action caller
    //   return res.data
    // },
    // async fetchStudyBoard({ }, { id, idx }) {
    //   const res = await Vue.axios.get(API_HOST + `/notices/study/${id}/board/${idx}`)
    //   // return success/result to action caller
    //   return res.data
    // },
    // async appendStudyBoard({ }, { id, data }) {
    //   const res = await Vue.axios.post(API_HOST + `/notices/study/${id}/board`, data)
    //   // return success/result to action caller
    //   return res.data
    // },
    // async updateStudyBoard({ }, { id, data, idx }) {
    //   const res = await Vue.axios.put(API_HOST + `/notices/study/${id}/board/${idx}`, data)
    //   // return success/result to action caller
    //   return res.data
    // },
    // async deleteStudyBoard({ }, { id, idx }) {
    //   const res = await Vue.axios.delete(API_HOST + `/notices/study/${id}/board/${idx}`)
    //   // return success/result to action caller
    //   return res.data
    // },

    //스터디속 과제제출
    async fetchAssignments({ commit }, { id }) {
      const res = await Vue.axios.get(API_HOST + `/notices/${id}/assignment`)
      if (res.data.success === true) commit('updateAssignment', res.data.result)
      // return success/result to action caller
      return res.data
    },
    async appendAssignment({ }, { id, data }) {
      const res = await Vue.axios.post(API_HOST + `/notices/${id}/assignment`, data)
      // return success/result to action caller
      return res.data
    },
    async fetchAssignment({ }, { id, idx }) {
      const res = await Vue.axios.get(API_HOST + `/notices/${id}/assignment/${idx}`)
      // return success/result to action caller
      return res.data
    },
    async updateAssignment({ }, { id, data, idx }) {
      const res = await Vue.axios.put(API_HOST + `/notices/${id}/assignment/${idx}`, data)
      // return success/result to action caller
      return res.data
    },
    async deleteAssignment({ }, { id, idx }) {
      const res = await Vue.axios.delete(API_HOST + `/notices/${id}/assignment/${idx}`)
      // return success/result to action caller
      return res.data
    }

  },
  modules: {
  }
})
