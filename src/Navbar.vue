<template>
  <div>
    <router-link to="/">Twittez</router-link>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  data: () => ({
    currentUser: null
  }),
  created () {
    const auth = firebase.auth()
    auth.onAuthStateChanged((user) => {
      console.log('current user: ' + user)
    })
  }
}
</script>
<style scoped>
  div{
    background-color: #eee;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    padding: 15px;
    margin: 0;
    margin-bottom: 14px;
  }
</style>