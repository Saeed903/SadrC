<template>
  <div>
    <v-footer height="auto">
      <v-card class="flex" flat tile>
        <v-layout>
            <v-flex class="pr-3">
              <v-card-text row wrap>
                <p>farzad</p>
                <p>farzad</p>
                <p>farzad</p>
                <p>farzad</p>
                <p>farzad</p>
              </v-card-text>
            </v-flex>
            <v-flex class="pr-3">
              <v-card-text row wrap>
                <p>farzad</p>
                <p>farzad</p>
                <p>farzad</p>
                <p>farzad</p>
                <p>farzad</p>
                
              </v-card-text>
            </v-flex>
            <v-flex class="pr-3">
              <v-card-text row wrap>
                
                
              </v-card-text>
              
            </v-flex>
        </v-layout>
        <slot name="farzad" v-for="item in items" :item="item"></slot>
        <v-spacer></v-spacer>
        <v-card-actions class="justify-center">
          <strong class="b Nazanin subheading">copy right all right reserved by sadrCrypto</strong> — 2018&copy;
        </v-card-actions>
      </v-card>
    </v-footer>
  </div>
</template>
<script>
  export default {
    data: () => ({
      icons: [
        'fab fa-facebook',
        'fab fa-twitter',
        'fab fa-google-plus',
        'fab fa-linkedin',
        'fab fa-instagram'
      ]
    }),
    props:['items']
  
  }
</script>
<style>
.bNazanin{
  font-family:b nazanin;
  font-size:25px
}
</style>
