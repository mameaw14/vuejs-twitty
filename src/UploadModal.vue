<template>
  <div class="ui modal">
    <div class="header">Upload</div>
    <div class="content">
      <div v-show="uploading" ref="progress" class="ui progress">
        <div class="bar">
          <div class="progress"></div>
        </div>
        <div class="label">Uploading...</div>
      </div>
      <input @change="selectedFile" type="file" ref="fileUpload" style="display:none">
      <button @click="openFileUpload" class="ui blue button">Select</button>
      <button @click="close" class="ui button">Cancel</button>
    </div>
  </div>
</template>

<script>
  import firebase from 'firebase'
  export default {
    data: () => ({
      uploading: false
    }),
    methods: {
      open () {
        $(this.$el)
          .modal({
            closable: false
          })
          .modal('show')
      },
      close () {
        $(this.$el).modal('hide')
      },
      openFileUpload () {
        this.$refs.fileUpload.click()
      },
      selectedFile () {
        const file = this.$refs.fileUpload.files[0]
        if (!file) return
        this.uploading = true
        const task = firebase.storage().ref(`files/${Date.now()}`).put(file)
        task.on('state_changed', (o) => {
          const percent = o.bytesTransferred / o.totalBytes * 100
          console.log(percent)
          $(this.$refs.progress).progress({ percent: percent })
        })
        task.then((snapshot) => {
          this.uploading = false
          this.$emit('success', snapshot.downloadURL)
          this.close()
        })
      }
    }
  }
</script>
