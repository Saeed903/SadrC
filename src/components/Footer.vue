<template>
<div>
    <v-footer
    dark
    height="auto"
  >
    <v-card
      flat
      tile
      class="indigo lighten-1 white--text text-xs-center"
    >
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-3 white--text"
          icon
        >
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
        <div class="footer">
          <div class="footerLink">
              <ul>
                  <p><router-link to="" class="routerTop">FOLLOW US</router-link></p>
                  <li><router-link to="" class="router">facebook</router-link></li>
                  <li><router-link to="" class="router">twitter</router-link></li>
                  <li><router-link to="" class="router">instagram</router-link></li>
                  <li><router-link to="" class="router">reddit</router-link></li>
                  <li><router-link to="" class="router">IRC</router-link></li>
                  <li><router-link to="" class="router">blog</router-link></li>
                  <li><router-link to="" class="router">chinese blog</router-link></li>
              </ul>
          </div>
          <div class="footerLink">
              <ul>
                  <p><router-link to="" class="routerTop">SERVICES</router-link></p>
                  <li><router-link to="" class="router">English</router-link></li>
                  <li><router-link to="" class="router">Api documentation</router-link></li>
                  <li><router-link to="" class="router">localbitcoins ATM</router-link></li>
                  <li><router-link to="" class="router">affiliate</router-link></li>
                  <li><router-link to="" class="router">block explorer</router-link></li>
              </ul>
          </div>
          
          <div class="footerLink">
              <ul>
                  <p><router-link to="" class="routerTop">SUPPORT</router-link></p>
                  <li><router-link to="" class="router">contact support</router-link></li>
                  <li><router-link to="" class="router">FAQ</router-link></li>
                  <li><router-link to="" class="router">guides</router-link></li>
                  <li><router-link to="" class="router">fotgot password</router-link></li>
              </ul>
          </div>
          <div class="footerLink">
              <ul>
                  <p><router-link to="" class="routerTop">ABOUT</router-link></p>
                  <li><router-link to="" class="router">about us</router-link></li>
                  <li><router-link to="" class="router">careers</router-link></li>
                  <li><router-link to="" class="router">fees</router-link></li>
                  <li><router-link to="" class="router">security bounties</router-link></li>
                  <li><router-link to="" class="router">statistics</router-link></li>
                  <li><router-link to="" class="router">terms of service</router-link></li>
                  <li><router-link to="" class="router">privacy policy</router-link></li>
              </ul>
          </div>
        </div>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text  align-center justify-center class="white--text">
        copy right 2018 sadrsysgroup.all right reserved
      </v-card-text>
    </v-card>
  </v-footer>
</div>
</template>
<script>
  export default {
    name:'Footer',
    data: () => ({
      icons: [
        'fab fa-facebook',
        'fab fa-twitter',
        'fab fa-google-plus',
        'fab fa-linkedin',
        'fab fa-instagram',
      ]
    })
  }
</script>
<style scoped>
.footer{
  text-align:center;
}
.footerLink{
  direction:rtl;
  float:right;
  font-size:15px;
  text-align:right;
  margin-right:10px;
  width:266px;
  max-width:25%
}
.router{
  color:white;
  text-decoration:none;
  font-family:b nazanin;
  font-size:15px;
}
.routerTop{
  color:white;
  text-decoration:none;
  font-family:b titr;
  font-size:15px;
}
</style>
