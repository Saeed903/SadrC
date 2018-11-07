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
              <v-card-text class="subheading">شما باید ایمل خود را تایید نمایید.قبل از آنکه سفارش بدهید ایمیل فرستاده شده را پیدا کرده و پس از تایید دوباره به این صفحه بازگردید.
                اگر دوباره خطایی ملاحضه کردید می توانید با پشتیبانی<router-link class="headline mb-0" to="" >پشتیبانی</router-link>  تماس بگیرید.
                <v-btn block color="secondary" dark class="text-truncate"><v-icon>send</v-icon>ارسال مجدد تاییدیه ایمیل</v-btn>
                <v-btn><router-link to="/EditProfileAccountSecurity">EditProfileAccountSecurity</router-link></v-btn>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-flex>

  
  <v-flex d-flex xs12 sm6 md8>
    <v-card  dark>
      <v-card-title>صدرکریپتو از شما محافظت میکند</v-card-title>
      <v-card-text>
        <p>بیت کوین موجود در کیف پول شما،پس از ثبت درخواست برای فروش به اندازه سفارش درکیف پول شما مسدود خواهد شد. 
          سپس خریدار می بایستی مبلغ مورد توافق را به حساب فروشنده واریز نموده
           و مدارک مربوطه به پرداخت را به فروشنده 
           ارسال نمایدو فروشنده پس از بررسی و تایید مبلغ واریزی
            .بایستی سفارش را نهایی کند که پس از نهایی شدن سفارش صدر کریپتو مقدار مسدودی بیت کوین را به کیف پول خریدار انتقال می دهد</p>
      </v-card-text>
    </v-card>
  </v-flex>
  <v-flex d-flex xs12 sm6 md4>
    <v-card  dark>
      <v-card-title class="title"> تذکر</v-card-title>
      <v-card-text class="subheading">
        <p>آگهی را بخوانید و شرایط را بررسی کنید</p>
        <p>اگرخواهان معامله بصورت حضوری و پرداخت نقدی هستید در یک مکان و زمان مشخص با فروشنده /خریدار قرار حضوری ترتیب بدهید</p>
        <p>برای اطمینان بیشتر از صحت معامله حضوری و جلوگیری از کلاهبرداری بهتر است دیدگاه خریداران/ فروشندگان مربوط به فرد مورد نظر و همچنین پروفایل مربوطه راچک وبررسی نمایید</p>
        <p>توجه داشته باشید که نوسانات بازاروهزینه انتقال ممکن است مقدار نهایی بیت کوین را تغییر دهد لذا مقدار بیت کوین در زمان درخواست محاسبه می شود</p>
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
