import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './Home.vue'
import Profile from './Profile.vue'
import Signin from './Signin.vue'
import User from './User.vue'
import ProfileEdit from './ProfileEdit'
import { Auth } from './services'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/profile', component: Profile, meta: { requiresAuth: true } },
    { path: '/profile/edit', component: ProfileEdit, meta: { requiresAuth: true } },
    { path: '/user/:username', name: 'user', component: User },
    { path: '/signin', component: Signin },
    { path: '*', redirect: '/' }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some((x) => x.meta.requiresAuth)) {
    Auth.requireUser()
      .then(() => {
        next()
      }, () => {
        next({ path: '/signin', query: { redirect: to.fullPath } })
      })
    return
  }
  next()
})

export default router
