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
