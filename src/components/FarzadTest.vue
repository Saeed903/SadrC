<template>
  <div>
          
            <v-btn
            :loading="loading3"
            :disabled="valid,loading3"
            @click="submit,loader='loading3'"
            color="cyan accent-2"
            class="fontsIran elevation-24"
            outline
            round
            >
            <v-icon>search</v-icon>
            جست و جو
            </v-btn>
  
  </div>
</template>
<script>

import { mapState, mapActions, mapGetters } from 'vuex';

export default{
    data:() => ({
      loader:null,
      loading3:false,
    }),
     watch: {
      loader () {
        const l = this.loader
        this[l] = !this[l]

        setTimeout(() => (this[l] = false), 3000)

        this.loader = null
      }
    },
  
}
</script>