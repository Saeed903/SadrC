<template>
  <div class="text-xs-center">
    <v-btn
    :loading="loading3"
    :disabled="loading3"
    color="blue-grey"
    class="white--text"
    @click="loader = 'loading3'"
    >
    Upload
      <v-icon right dark>cloud_upload</v-icon>
    </v-btn>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        loader: null,
        loading3: false,
      }
    },
    watch: {
      loader () {
        const l = this.loader
        this[l] = !this[l]

        setTimeout(() => (this[l] = false), 3000)

        this.loader = null
      }
    }
  }
</script>