<template>
  <div class="ui menu">
    <router-link to="/" class="item">Vue-Twitty</router-link>
    <router-link v-if="!currentUser" to="/signin" class="item">signin</router-link>
    <router-link v-if="currentUser" to="/profile" class="item">Profile</router-link>
    <a v-if="currentUser" @click="signOut" class="item right"> Logout</a>
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