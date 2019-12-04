import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import dataManager from '../../util/data-manager.js';


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',

    component: function () {
      return import('../views/About.vue')
    }
  },
  {
    path: '/notice',
    name: 'Notice',

    component: function () {
      return import('../views/Notice.vue')
    }
  },
  {
    path: '/signup',
    name: 'Signup',

    component: function () {
      return import('../views/Signup.vue')
    }
  },
  {
    path: '/test',
    name: 'Test',
    component: function () {
      return import('../views/test.vue')
    }
  },
  {
    path:'/create',
    name : 'Create',

    component: function(){
      return import('../views/Create.vue')
    }
  },
  {
    path:'/:id',
    name : 'Detail',
    component:function () {
      return import('../views/Detail.vue')
    }
  },
  {
    path:'/edit/:id',
    name : 'Edit',
    component : function () {
      return import('../views/Edit.vue')
    }
  },
  {
    path:'/study/:id/notice',
    name:'StudyNotice',
    component:function () {
      return import('../views/StudyNotice.vue')

    }
  },
  {
    path:'/study/:id/board',
    name:'StudyBoard',
    component:function () {
      return import('../views/StudyBoard.vue')

    }
  },
  {
    path:'/study/:id/assignment',
    name:'StudyAssignment',
    component:function () {
      return import('../views/Assignment.vue')

    }
  },
  {
    path: '/study/:id/lecturenote',
    name: 'LectureNote',
    component: function () {
      return import('../views/LectureNote.vue')

    }
  },
  {
    path:'/study/:id/lecturenotecreate',
    name:'LectureNoteCreate',
    component:function () {
      return import('../views/LectureNoteCreate.vue')

    }
  },
  {
    path:'/study/:id/schedule',
    name:'Schedule',
    component:function () {
      return import('../views/Schedule.vue')

    }
  },
  {
    path:'/study/:id/lecturenotedetail',
    name:'LectureNoteDetail',
    component:function () {
      return import('../views/LectureNoteDetail.vue')

    }
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  dataManager.loadDataFromCookie();
  next();
});
export default router
