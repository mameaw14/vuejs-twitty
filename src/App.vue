<template>
  <div>
    <navbar></navbar>
    <router-view id="top"></router-view>
  </div>
</template>

<script>
import Navbar from './Navbar.vue'

export default {
  components: {
    Navbar
  },
  name: 'app'
}
</script>

<style>
#top {
  width: 70%;
  margin: 100px auto;
  text-align: left;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
