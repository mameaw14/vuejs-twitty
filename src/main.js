import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'

import '!script-loader!jquery/dist/jquery.min.js'
import '!script-loader!semantic-ui-css/semantic.min.js'
import '!style-loader!css-loader!semantic-ui-css/semantic.min.css'

firebase.initializeApp({
  apiKey: 'IzaSyD9Broec3UxW4mgI3Dc4EauEXCnny76udo',
  authDomain: 'witty-vuejs.firebaseapp.com',
  databaseURL: 'ttps://twitty-vuejs.firebaseio.com',
  storageBucket: 'witty-vuejs.appspot.com',
  messagingSenderId: '07990047697'
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
