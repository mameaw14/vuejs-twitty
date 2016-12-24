<template>
  <div class="ui segment">
    <h3>profile edit</h3>
    <profile-form v-model="profile" @save="save" @cancel="back"></profile-form>
    {{profile}}
  </div>
</template>
<script>
  import ProfileForm from './ProfileForm'
  import { Me } from './services'

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
      Me.get((data) => {
        this.profile = data
      })
    },
    methods: {
      save () {
        Me.set(this.profile)
      },
      back () {
        this.$router.push('/profile')
      }
    }
  }
</script>
