import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'

import '!script-loader!jquery/dist/jquery.min.js'
import '!script-loader!semantic-ui-css/semantic.min.js'
import '!style-loader!css-loader!semantic-ui-css/semantic.min.css'

firebase.initializeApp({
  apiKey: 'AIzaSyD9Broec3UxW4mgI3Dc4EauEXCnny76udo',
  authDomain: 'twitty-vuejs.firebaseapp.com',
  databaseURL: 'https://twitty-vuejs.firebaseio.com',
  storageBucket: 'twitty-vuejs.appspot.com',
  messagingSenderId: '307990047697'
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
