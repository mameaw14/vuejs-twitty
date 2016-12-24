<template>
  <div class="ui segment">
    <h3>Profile</h3>
    <profile-detail :profile="profile"></profile-detail>
    <br><br>
    <router-link to="edit" append class="ui green button">Edit</router-link>
  </div>
</template>

<script>
import { Me } from './services'
import ProfileDetail from './ProfileDetail'

export default {
  components: {
    ProfileDetail
  },
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
      description: '',
      photo: ''
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