<template>
  <div>
    <router-link to="/">Twittez</router-link>
    <router-link v-if="!currentUser" to="/signin">signin</router-link>
    <router-link v-if="currentUser" to="/profile">profile</router-link>
    <button v-if="currentUser" @click="signOut"> logout</button>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  data: () => ({
    currentUser: null
  }),
  methods: {
    signOut () {
      firebase.auth().signOut()
      this.$router.push('/')
    }
  },
  created () {
    const auth = firebase.auth()
    auth.onAuthStateChanged((user) => {
      this.currentUser = user
      console.log('current user: ' + user.uid)
    })
  }
}
</script>
<style scoped>
</style>