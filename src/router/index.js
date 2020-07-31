import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './../views/Home.vue'

import store from './../store/index'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import(/* webpackChunkName: "about" */ '../views/Profile.vue'),
    meta: { requiresAuth: true }
  }
]

const router = new VueRouter({
  routes
})


router.beforeEach((to, from, next) => {
  const name = store.getters.isLoggedIn
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!name) {
      next('/login')
    } else {
      next()
    }
  } else {
    next(); // make sure to always call next()!
  }
})

export default router