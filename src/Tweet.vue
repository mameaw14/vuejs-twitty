<template>
  <div id="tweet">
    <router-link :to="{name: 'user', params: {username: data.owner} }"><b>@{{data.owner}}</b> </router-link>
    {{data.content}}
    <div id="time">{{data.timestamp | fromNow}}</div>
    <div>
      <a href="#">Reply</a> 
      <a href="#">RT</a>
      <a href="#">Fav</a>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'data'
  ],
  data () {
    return {
      text: 'test'
    }
  }
}
</script>

<style scoped>
  div#tweet {
    padding: 15px;
    border: 1px solid #555;
    border-radius: 3px;
    margin-bottom: 15px;
  }
  div#tweet:hover {
    background-color: #eee;
  }
  a {
    padding-right: 5px;

  }
  div#time {
    float: right;
  }
</style>