import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './Home.vue'
import Profile from './Profile.vue'
import Signin from './Signin.vue'
import User from './User.vue'
import firebase from 'firebase'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/profile', component: Profile, meta: { requiresAuth: true } },
    { path: '/user/:username', name: 'user', component: User },
    { path: '/signin', component: Signin },
    { path: '*', redirect: '/' }
  ]
})

router.beforeEach((to, from, next) => {
  console.log(firebase.auth().currentUser)
  if (to.matched.some((x) => x.meta.requiresAuth)) {
    const cancel = firebase.auth().onAuthStateChanged((user) => {
      cancel()
      if (user) {
        next()
        return
      }
      next({ path: '/signin', query: { redirect: to.fullPath } })
    })
    return
  }
  next()
})

export default router
