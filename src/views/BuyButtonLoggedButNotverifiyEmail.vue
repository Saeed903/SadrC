<template>
  <v-card>
    <v-card-text>
    <div class="headline">
        <p>خرید بیت کوین با استفاده از ممنوعیت انتقال با ریال جمهوری اسلامی ایران</p>
    </div>
    </v-card-text>

    <v-layout row wrap right >
      <v-card-media primary-title >
        <div class="subheading" style="padding-right:20px">
          <p>قیمت:</p>
          <p>روش پرداخت:</p>
          <p>کاربر:</p>
          <p>محدودیت های تجاری:</p>
          <p>موقعیت:</p>
          <p>پنجره پرداخت</p>
        </div>
        <div class="subheading" style="padding-right:50px">
          <p style="color:greenyellow">935543438.97 IRR/BTC</p>
          <p>انتقال بانک جمهوری اسلامی ایران</p>
          <p><router-link to="/DashBoard"><v-icon style="color:aqua">perm_identity</v-icon ></router-link>آلمان</p>
          <p>نمره بازخورد.100<router-link to="" class="head">دیدن بازخورد</router-link></p>
          <p>10,000,000-30,000,001 IRR</p>
          <p ><router-link to="" class="head">تهران,استان تهران,ایران</router-link></p>
          <p>1 ساعت و 30 دقیقه</p>
        </div>
      </v-card-media>
    </v-layout>
      
    <v-card-title>
    <div style="padding-right: 150px" >
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
      </div>
    </v-card-title>
      
    <v-layout >
      <div class="heydar">
      <v-card-text class="subheading">شما باید آدرس ایمیل خود را قبل از اینکه بتوانید در خواست تجاری را تایید  کنید بررسی کنید.صندوق ورودی خود را چک کنید و سپس به این صفحه بازگردید.اگر این موضوع همچنان ادامه دارد لطفا<router-link class="headline mb-0" to="" >تماس با پشتیبانی</router-link></v-card-text>
          <v-btn block color="secondary" dark ><v-icon>send</v-icon>ایمیل تایید را دوباره بفرستید</v-btn>
      </div>
    </v-layout>

    <v-card-text> 
      <div>  
        <P class="text-xs-center">صدرکریپتو از شما محافظت میکند</P>
        <p>بیت کوین پس از درخواست شما، در سپردن حفاظت در صدرپریپتو قفل می شود. پرداخت صورتحساب را علامت بزنید و بقیه آن را پرداخت کنید و فروشنده بیت کوین ها را هنگامی که فروشنده دریافت می کند پرداخت دریافت شده در حساب</p>
        <p>بیت کوین پس از درخواست شما، در سپردن حفاظت در sadrCrypto.com قفل می شود. پرداخت صورتحساب را علامت بزنید و بقیه آن را پرداخت کنید و فروشنده بیت کوین ها را هنگامی که فروشنده دریافت می کند پرداخت دریافت شده در حساب</p>
        <p>سپرده ها هر دو خریدار و فروشنده را هنگام خرید آنلاین محافظت می کند.</p>
      </div>
    </v-card-text>
    
    <v-card-text>
          <p>tips</p>
          <p>آگهی را بخوانید و شرایط را بررسی کنید</p>
          <p>پیشنهاد محل و زمان جلسه شما را در تماس با پول نقد فیزیکی معامله می کند</p>
          <p>تماشای کلاهبرداران برای بازبینی مشخصات و بررسی بیشتر با حساب های اخیر ایجاد کنید.</p>
          <p>توجه داشته باشید که نوسانات گرد و هزینه ممکن است مقدار نهایی بیت کوین را تغییر دهد که مقدار مسطحی را وارد می کنید و مقدار بیت کوین در زمان درخواست محاسبه می شود</p>
    </v-card-text>

    <p>کاربر آلمانی صدر کریپتو برای فروش بیت کوین به شما</p>

  </v-card>

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
.heydar{
  background-color:rgb(27, 19, 27);
  position: relative;
  top:-120px;
  max-width:500px;

}
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
