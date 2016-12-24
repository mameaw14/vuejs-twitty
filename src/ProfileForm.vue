<template>
  <form class="ui form" @submit.prevent="save">
    <div class="field">
      <label>Photo</label>
      <img v-if="photo" :src="photo" class="ui small image"><br>
      <div @click="openUpload" class="ui green button">Upload photo</div>
    </div>
    <div class="field">
      <label>Name</label>
      <input v-model="name" type="text">
    </div>
    <div class="field">
      <label>Description</label>
      <input v-model="description" type="text">
    </div>
    <button class="ui submit blue button">Save</button>
    <div @click="$emit('cancel')" class="ui button">Cancel</div>
    <upload-modal ref="uploadModal" @success="uploaded"></upload-modal>
  </form>
</template>
<script>
import UploadModal from './UploadModal'

export default {
  components: {
    UploadModal
  },
  props: ['value'],
  data: () => ({
    name: '',
    description: '',
    photo: ''
  }),
  created () {
    console.log(this.value)
    this.name = this.value.name
    this.description = this.value.description
    this.photo = this.value.photo
  },
  watch: {
    value () {
      this.name = this.value.name
      this.description = this.value.description
      this.photo = this.value.photo
    }
  },
  methods: {
    save () {
      this.$emit('input', {
        name: this.name,
        description: this.description,
        photo: this.photo
      })
      this.$emit('save')
    },
    openUpload () {
      this.$refs.uploadModal.open()
    },
    uploaded (url) {
      this.photo = url
    }
  }
}
</script>