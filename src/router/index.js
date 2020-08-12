import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './../views/Home.vue'


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
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue'),
    // meta: { requiresAuth: true }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import(/* webpackChunkName: "about" */ '../views/Profile.vue'),
    // meta: { requiresAuth: true }
  }
]

const router = new VueRouter({
  routes
})


// router.beforeEach((to, from, next) => {
//   if (to.matched.some(record => record.meta.requiresAuth)) {
//     if ( to.name == 'Profile') {
//       next('/login')
//     } else if ( to.name == 'Login') {
//       next('/profile')
//     } else {
//       next()
//     }
//   } else {
//     next(); // make sure to always call next()!
//   }
// })

export default router