<template>
  <div>
    <img :src="profile.photo" class="ui small image">
    <h4>name</h4> {{profile.name}}
    <h4>description</h4> {{profile.description}}
  </div>
</template>

<script>
  export default {
    props: ['profile']
  }
</script>