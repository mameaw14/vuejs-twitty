import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './Home.vue'
import Profile from './Profile.vue'
import SignIn from './Signin.vue'
import User from './User.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/profile', component: Profile, meta: { requiresAuth: true } },
    { path: '/user/:username', name: 'user', component: User },
    { path: '*', redirect: '/' },
    { path: '/signin', component: SignIn }
  ]
})

export default router
