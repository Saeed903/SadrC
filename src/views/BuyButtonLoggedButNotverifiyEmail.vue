<template>
<v-container fluid grid-list-md>
  <v-layout row wrap>
   <v-flex d-flex >
    <v-card >
      <v-card-text class="title" >
        <p class="text-md-center">خرید بیت کوین با استفاده از انتقال بانکی جمهوری اسلامی ایران با ریال ایران</p>
      </v-card-text>
    </v-card>
  </v-flex> 
  <v-flex d-flex xs12 sm6 md8>
    <v-layout row wrap>
      <v-flex d-flex>
        <v-card color="indigo" dark>
          <v-card-media class="subheading">
            <div>  
              <p>قیمت:</p>
              <p>روش پرداخت:</p>
              <p>کاربر:</p>
              <p>محدودیت های تجاری:</p>
              <p>موقعیت:</p>
              <p>پنجره پرداخت</p>
            </div>
            <div>
              <p style="color:greenyellow">935543438.97 IRR/BTC</p>
              <p>انتقال بانک جمهوری اسلامی ایران</p>
              <p><router-link to="/DashBoard"><v-icon style="color:aqua">perm_identity</v-icon ></router-link>آلمان</p>
              <p>نمره بازخورد.100<router-link to="" class="head">دیدن بازخورد</router-link></p>
              <p>10,000,000-30,000,001 IRR</p>
              <p ><router-link to="" class="head">تهران,استان تهران,ایران</router-link></p>
              <p>1 ساعت و 30 دقیقه</p>
              </div>  
          </v-card-media>
        </v-card>
      </v-flex>
      <v-flex d-flex>
        <v-layout row wrap>
          <v-flex
          v-for="n in 1"
          :key="n"
          d-flex
          xs12
          >
            <v-card
             color="red lighten-2"
             dark
            >
              <v-card-text class="subheading">صفحه ورودی خود را چک کنید و سپس به این صفحه بازگردید.اگر این موضوع همچنان ادامه دارد لطفا<router-link class="headline mb-0" to="" >تماس با پشتیبانی</router-link>
                <v-btn block color="secondary" dark class="text-truncate"><v-icon>send</v-icon>ایمیل تایید را دوباره بفرستید</v-btn>
                <v-btn><router-link to="/EditProfileAccountSecurity">EditProfileAccountSecurity</router-link></v-btn>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-flex>

  <v-flex d-flex xs12 sm6 md4 child-flex>
    <v-card color="purple" dark> 
      <v-card-text>
        <p class="title">شرایط تجارت با آلمان</p>
        <div style="background-color:rgb(26, 29, 37)">
          <p style="padding-right:20px">تایید احراز هویت <br>پرداخت وجه مورد توافق <br>بیت کوین</p>
        </div>
          <p class="title">ساعات کار</p>
            <v-list two-line>
              <ul v-for="item in items" :key="item" style="padding-right:25px">
                <li>{{item}}</li>
              </ul>
            </v-list>
        <p>زمان محلی:تهران</p>
        <p><router-link to="">گزارش این تبلیغ</router-link></p>
      </v-card-text>
    </v-card>
  </v-flex>
  <v-flex d-flex xs12 sm6 md8>
    <v-card color="green lighten-2" dark>
      <v-card-title>صدرکریپتو از شما محافظت میکند</v-card-title>
      <v-card-text>
        <p>بیت کوین پس از درخواست شما، در سپردن حفاظت در صدرپریپتو قفل می شود. پرداخت صورتحساب را علامت بزنید و بقیه آن را پرداخت کنید و فروشنده بیت کوین ها را هنگامی که فروشنده دریافت می کند پرداخت دریافت شده در حساب</p>
        <p>بیت کوین پس از درخواست شما، در سپردن حفاظت در sadrCrypto.com قفل می شود. پرداخت صورتحساب را علامت بزنید و بقیه آن را پرداخت کنید و فروشنده بیت کوین ها را هنگامی که فروشنده دریافت می کند پرداخت دریافت شده در حساب</p>
        <p>سپرده ها هر دو خریدار و فروشنده را هنگام خرید آنلاین محافظت می کند.</p>
      </v-card-text>
    </v-card>
  </v-flex>
  <v-flex d-flex xs12 sm6 md4>
    <v-card color="blue lighten-2" dark>
      <v-card-title class="title">نکات</v-card-title>
      <v-card-text class="subheading">
        <p>آگهی را بخوانید و شرایط را بررسی کنید</p>
        <p>پیشنهاد محل و زمان جلسه شما را در تماس با پول نقد فیزیکی معامله می کند</p>
        <p>تماشای کلاهبرداران برای بازبینی مشخصات و بررسی بیشتر با حساب های اخیر ایجاد کنید.</p>
        <p>توجه داشته باشید که نوسانات گرد و هزینه ممکن است مقدار نهایی بیت کوین را تغییر دهد که مقدار مسطحی را وارد می کنید و مقدار بیت کوین در زمان درخواست محاسبه می شود</p>
      </v-card-text>
    </v-card>
  </v-flex>
    
  </v-layout>
</v-container>
</template>
<script>
export default {
  
  data:()=>({
      items:[
            "یکشنبه : تعطیل",
            "دوشنبه : 24 ساعت",
            "سه شنبه : تعطیل",
            "چهارشنبه : تعطیل",
            "پنج شنبه : تعطیل",
            "جمعه : تعطیل",
            "شنبه : تعطیل"
      ]
  })
};
</script>

<style scoped>

.head{
  text-decoration: none;
  padding-right:10px;
  color:rgb(133, 129, 129);
  
  
}
.headline{
  text-decoration: none;
  padding-right:10px;
  color:rgb(133, 129, 129);
}
</style>
