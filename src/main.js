import Vue from 'vue'
import App from './App.vue'
import Home from './Home.vue'
import User from './User.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {path: '/', component: Home},
    {path: '/user', component: User}
  ]
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
