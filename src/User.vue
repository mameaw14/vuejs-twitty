<template>
  <div>
    @{{$route.params.username}}
  </div>
</template>

<script>
  export default {
    data () {
      return {
        id: 0
      }
    },
    create () {
      this.reload()
    },
    watch: {
      $route: 'reload'
    },
    methods: {
      reload () {
        this.id = +this.$route.params.id
      }
    }
  }
</script>