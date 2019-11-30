import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

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
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
