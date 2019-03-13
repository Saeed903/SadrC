<template>
  <div>
    <v-footer height="auto" class="mt-5">
      <v-card class="flex" style="background-color:#263238">
        <v-divider color="grey"></v-divider>
        <p class="text-xs-center mb-0">
          <v-btn v-for="icon in icons" :key="icon" class="mx-3" icon>
          <v-icon color="cyan accent-3" size="25px">{{ icon }}</v-icon>
          </v-btn>
          </p>
     <v-layout row wrap>
          <v-flex>
            <ul>
              <li class="mb-1"><router-link class="routerFooter" to="">درباره ما</router-link></li>
              <li class="mb-1"><router-link class="routerText" to="">هزینه ها</router-link></li>
              <li class="mb-1"><router-link class="routerText" to="">شرایط استفاده</router-link></li>
              <li class="mb-1"><router-link class="routerText" to="">حریم خصوصی</router-link></li>
              <li class="mb-1"><router-link class="routerText" to="">قوانین سایت</router-link></li>
            </ul>
          </v-flex>
          <v-flex>
            <ul>
              <li class="mb-1"><router-link class="routerFooter"  to="">پشتیبانی</router-link></li>
              <li class="mb-1"><router-link class="routerText"  to="">پشتیبانی تماس</router-link></li>
              <li class="mb-1"><router-link class="routerText"  to="">راهنما</router-link></li>
              <li class="mb-1"><router-link class="routerText"  to="">رمز عبور</router-link></li>
              <li class="mb-1"><router-link class="routerText"  to="">پرسش و پاسخ</router-link></li>
            </ul>
          </v-flex>
          <v-flex>
            <ul> 
              
              <li class="mb-1"><router-link class="routerFooter"  to="">خدمات</router-link></li>
              <li class="mb-1"><router-link class="routerText"  to="">انگلیسی</router-link></li>
              <li class="mb-1"><router-link class="routerText"  to="">مستندات</router-link></li>
              <li class="mb-1"><router-link class="routerText"  to="">وابسته ها</router-link></li>
              <li class="mb-1"><router-link class="routerText"  to="">بلوک اکسپلورر</router-link></li>
            </ul>
          </v-flex>
          
          <v-flex>
            <ul>
              <li class="mb-1"><router-link class="routerFooter" to="">مجازی</router-link></li>
              <li class="mb-1"><router-link class="routerText" to="">تلگرام</router-link></li>
              <li class="mb-1"><router-link class="routerText" to="">اینستاگرام</router-link></li>
              <li class="mb-1"><router-link class="routerText" to="">سوروش</router-link></li>
              <li class="mb-1"><router-link class="routerText" to="">واتساپ</router-link></li>
            </ul>
          </v-flex>
        </v-layout>


        <p class="sadrCrp text-xs-center mb-0">
          &copy; 2019 — <span>all right reserved by sadrCrypto</span>
        </p>

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
<style scoped>
li{
  list-style-type:none;
  margin-right:55px;
}
.routerFooter{
  text-decoration:none;
  color:white;
  font-family:iranian sans;
  font-size:13px;
  text-align:right;
}
.routerText{
  text-decoration:none;
  color:#B0BEC5;
  text-align:right;
  font-family:iranian sans;
  font-size:13px;
}
.sadrCrp{
  font-family:iranian sans;
  font-size:15px;
  color:#B0BEC5;
}

</style>

