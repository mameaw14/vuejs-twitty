<template>
  <div class="ui segment">
    <h3>profile edit</h3>
    <profile-form v-model="profile" @save="save" @cancel="back"></profile-form>
    {{profile}}
  </div>
</template>
<script>
  import ProfileForm from './ProfileForm'
  import firebase from 'firebase'

  export default {
    components: {
      ProfileForm
    },
    data: () => ({
      profile: {
        name: '',
        description: ''
      }
    }),
    created () {
      const userId = firebase.auth().currentUser.uid
      firebase.database()
        .ref(`user/${userId}`)
        .once('value', (snapshot) => {
          this.profile = snapshot.val()
        })
    },
    methods: {
      save () {
        const userId = firebase.auth().currentUser.uid
        console.log(userId)
        firebase.database()
          .ref(`user/${userId}`)
          .set(this.profile)
          .then(() => {
            this.back()
          })
      },
      back () {
        this.$router.push('/profile')
      }
    }
  }
</script>