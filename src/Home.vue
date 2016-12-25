<template>
  <div>
    <div id="post" class="ui segment">
      <form class="ui form">
        <textarea v-model.trim="input">
      </form>
      <br>
      <button class="ui blue button" :class="{'loading disabled': posting}" @click="tweet">Tweet</button>
    </div>
    <div v-for="tweet in tweets">
      <tweet-component :data="tweet"></tweet-component>
    </div>
  </div>
</template>
<script>
import TweetComponent from './Tweet.vue'
import { Tweet } from './services'

export default {
  data: () => ({
    input: '',
    posting: false,
    tweets: []
  }),
  components: {
    TweetComponent
  },
  created () {
    Tweet.list((list) => {
      this.tweets = list
    })
  },
  methods: {
    tweet () {
      if (!this.input) return
      this.posting = true
      Tweet.post(this.input)
        .then(() => {
          this.input = ''
          this.posting = false
        })
    }
  }
}
</script>