<template>
  <div>
    <div v-for="x in text">
      <router-link to="/user"><b>@{{username}}</b> </router-link>
      {{x}}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: 'Manow',
      text: [
          '12345',
          'test',
          '3ช่ามาแรง'
      ]
    }
  }
}
</script>