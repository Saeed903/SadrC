<template>
  <div>
    <v-footer dark height="auto">
      <v-card class="flex text-xs-center elevation-24" style="background-color:#006064">

        <v-card-text>
          <v-btn v-for="icon in icons" :key="icon" class="mx-3 white--text" icon>
          <v-icon size="24px">{{ icon }}</v-icon>
          </v-btn>
        </v-card-text>
        
     <v-layout row wrap>
          <v-flex>
            <ul>
              <li><router-link class="routerFooter" to="">درباره ما</router-link></li>
              <li><router-link class="routerFooter" to="">هزینه ها</router-link></li>
              <li><router-link class="routerFooter" to="">شرایط استفاده</router-link></li>
              <li><router-link class="routerFooter" to="">حریم خصوصی</router-link></li>
              <li><router-link class="routerFooter" to="">قوانین سایت</router-link></li>
            </ul>
          </v-flex>
          <v-flex>
            <ul>
              <li><router-link class="routerFooter"  to="">پشتیبانی</router-link></li>
              <li><router-link class="routerFooter"  to="">پشتیبانی تماس</router-link></li>
              <li><router-link class="routerFooter"  to="">راهنما</router-link></li>
              <li><router-link class="routerFooter"  to="">رمز عبور</router-link></li>
              <li><router-link class="routerFooter"  to="">پرسش و پاسخ</router-link></li>
            </ul>
          </v-flex>
          <v-flex>
            <ul>
              <li><router-link class="routerFooter"  to="">خدمات</router-link></li>
              <li><router-link class="routerFooter"  to="">انگلیسی</router-link></li>
              <li><router-link class="routerFooter"  to="">مستندات</router-link></li>
              <li><router-link class="routerFooter"  to="">وابسته ها</router-link></li>
              <li><router-link class="routerFooter"  to="">بلوک اکسپلورر</router-link></li>
            </ul>
          </v-flex>
          
          <v-flex>
            <ul>
              <li><router-link class="routerFooter" to="">مجازی</router-link></li>
              <li><router-link class="routerFooter" to="">تلگرام</router-link></li>
              <li><router-link class="routerFooter" to="">اینستاگرام</router-link></li>
              <li><router-link class="routerFooter" to="">سوروش</router-link></li>
              <li><router-link class="routerFooter" to="">واتساپ</router-link></li>
            </ul>
          </v-flex>
        </v-layout>

        <v-divider></v-divider>

        <v-card-text class="white--text">
          &copy; 2019 — <span class="sadrCrp">copy right.all right reserved by sadrCrypto</span>
        </v-card-text>

      </v-card>
    </v-footer>
  </div>
</template>
<script>
  export default {
    data: () => ({
      icons: [
        'fab fa-instagram',
        'fab fa-facebook',
        'fab fa-twitter',
        'fab fa-google-plus',
      ]
    })
  }
</script>
<style>
li{
  list-style-type:none;
  text-align:right;
}
.routerFooter{
  text-decoration:none;
  color:white;
  font-family:iranian sans;
  font-size:13px;
}

</style>

