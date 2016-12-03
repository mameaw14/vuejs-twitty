<template>
  <div id="#app">
    <h1>Twittez</h1>
    <navbar></navbar>
    <tweet></tweet>
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from './Navbar.vue'
import Tweet from './Tweet.vue'

export default {
  components: {
    Navbar,
    Tweet
  },
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
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
