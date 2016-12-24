<template>
  <div class="ui segment">
    <h3>Profile</h3>
    <h4>name</h4> {{profile.name}}
    <h4>description</h4> {{profile.description}}
    <br><br>
    <router-link to="edit" append class="ui green button">Edit</router-link>
  </div>
</template>

<script>
import { Me } from './services'
export default {
  beforeRouteEnter (to, from, next) {
    Me.get()
      .then((data) => {
        if (data) {
          next()
          return
        }
        next('profile/edit')
      })
  },
  data: () => ({
    profile: {
      name: '',
      description: ''
    }
  }),
  created () {
    Me.get()
    .then((data) => {
      this.profile = data
    })
  }
}
</script>