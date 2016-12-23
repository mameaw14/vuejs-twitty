<template>
  <div>
    <button @click="signIn" class="ui google plus button">Sign in with Google+</button>
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  beforeRouteEnter (to, from, next) {
    const cancel = firebase.auth().onAuthStateChanged((user) => {
      cancel()
      if (user) {
        next(to.query.redirect || '/')
        return
      }
      next()
    })
  },
  methods: {
    signIn () {
      firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider())
          .then((res) => {
            this.$router.replace(this.$route.query.redirect || '/')
          })
      console.log('sign in')
    }
  }
}
</script>