<template>
  <div>
    <button @click="signIn" class="ui google plus button">Sign in with Google+</button>
  </div>
</template>

<script>
import { Auth } from './services'
export default {
  beforeRouteEnter (to, from, next) {
    Auth.requireUser()
      .then(() => {
        next(to.query.redirect || '/')
      }, () => {
        next()
      })
    return
  },
  methods: {
    signIn () {
      Auth.signIn()
        .then((res) => {
          return this.$router.replace(this.$route.query.redirect || '/')
        })
    }
  }
}
</script>