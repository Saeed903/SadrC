<template>
  <v-footer dark height="auto">
    <v-card class="flex">
      <v-icon color="cyan accent-2" size="18px">reply_all</v-icon><span class="newsText text-xs-center">صدرکریپتو ساده ترین راه برای خرید و فروش و مدیریت ارز دیجیتال خود</span>
      <v-card-title class="">
        <v-layout row>
          <v-flex>
            <ul>
              <li class="newsText">درباره ما</li>
              <li class="newsText">درباره ما</li>
              <li class="newsText">شغل</li>
              <li class="newsText">هزینه ها</li>
              <li class="newsText">اسناد امنیتی</li>
              <li class="newsText">آمار</li>
              <li class="newsText">شرایط استفاده</li>
              <li class="newsText">حریم خصوصی</li>
            </ul>
          </v-flex>
          <v-flex>
            <ul>
              <li class="newsText">پشتیبانی</li>
              <li class="newsText">farzad</li>
              <li class="newsText">farzad</li>
              <li class="newsText">farzad</li>
              <li class="newsText">farzad</li>
            </ul>
          </v-flex>
          <v-flex>
            <ul>
              <li class="newsText">خدمات</li>
              <li class="newsText">farzad</li>
              <li class="newsText">farzad</li>
              <li class="newsText">farzad</li>
              <li class="newsText">farzad</li>
            </ul>
          </v-flex>
          
          <v-flex>
            <ul>
              <li class="newsText">مجازی</li>
              <li class="newsText">farzad</li>
              <li class="newsText">farzad</li>
              <li class="newsText">farzad</li>
              <li class="newsText">farzad</li>
            </ul>
          </v-flex>
       
        </v-layout>
      </v-card-title>

      <v-card-actions class="grey darken-3 justify-center">
         &copy;2018 —2019 <span class="footerBottom">sadrCrypto </span>
      </v-card-actions>
      <v-divider></v-divider>
      <v-icon color="cyan accent-2" size="18px">reply_all</v-icon><span class="newsText"> شرایط استفاده از سایت</span>
      <v-spacer></v-spacer>
      <v-icon color="cyan accent-2" size="18px">reply_all</v-icon><span class="newsText"> قوانین و مقررات سایت</span>
    </v-card>
  </v-footer>
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
.footerBottom{
  font-family:b nazanin;
  font-size:18px;
}
.newsText{
    font-family:iranian sans;
    font-size:13px;
    color:#BDBDBD;
}
</style>
