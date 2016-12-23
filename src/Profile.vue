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
import { User, Auth } from './services'
export default {
  data: () => ({
    profile: {
      name: '',
      description: ''
    }
  }),
  created () {
    console.log('in')
    User.get(Auth.getCurrentUser().uid, (data) => {
      this.profile = data
    })
  }
}
</script>