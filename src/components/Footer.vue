<template>
<<<<<<< HEAD
  <v-footer dark height="auto">
    <v-card flat tile style="background-color:rgb(30, 38, 52)" class=" white--text text-xs-center">
      <v-card-text>
        <v-btn v-for="icon in icons" :key="icon" class="mx-3 white--text" icon>
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-text>
      
=======
  <div>
    <v-footer height="auto">
      <v-card class="flex" flat tile>
        <v-layout>
          <v-flex>
            <v-card-text>
              <p>farzad</p>
              <p>farzad</p>
              <p>farzad</p>
              <p>farzad</p>
              <p>farzad</p>
          </v-card-text>
          </v-flex>
          <v-flex>
             <v-card-text>
          <p>farzad</p>
          <p>farzad</p>
          <p>farzad</p>
          <p>farzad</p>
          <p>farzad</p>
          </v-card-text>
          </v-flex>
          <v-flex>
             <v-card-text>
          <p>farzad</p>
          <p>farzad</p>
          <p>farzad</p>
          <p>farzad</p>
          <p>farzad</p>
          </v-card-text>
          </v-flex>
          <v-flex>
             <v-card-text>
          <p>farzad</p>
          <p>farzad</p>
          <p>farzad</p>
          <p>farzad</p>
          <p>farzad</p>
          </v-card-text>
          </v-flex>
        </v-layout>
  
        <v-spacer></v-spacer>
>>>>>>> 99ff5e9dd57bdb05a746be28bad37e6edde5c6ea

        <v-card-actions class="justify-center">
          <strong class="bNazanin subheading">all right reserved by sadrCrypto dev team</strong> — 2018&copy;
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
    })
  }
</script>
<style>
.bNazanin{
  font-family:b nazanin;
  font-size:25px
}
</style>
