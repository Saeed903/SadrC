<template>
<v-container fluid grid-list-md>
  <v-layout row wrap>
    <v-flex d-flex>
      <v-card-text>
        <p class="titled text-xs-center">خرید بیت کوین با استفاده از انتقال بانکی جمهوری اسلامی ایران با ریال ایران</p>
      </v-card-text>
    </v-flex>   
    <v-flex d-flex xs12 sm6 md8>
      <v-layout row wrap>
        <v-flex d-flex>
          <v-card-media class="btc pr-5">
            <div>  
              <p>قیمت:</p>
              <p>روش پرداخت:</p>
              <p>کاربر:</p>
              <p>محدودیت های تجاری:</p>
              <p>موقعیت:</p>
              <p>پنجره پرداخت</p>
            </div>
            <div class="pr-4">
              <p style="color:greenyellow">935543438.97 IRR/BTC</p>
              <p>انتقال بانک جمهوری اسلامی ایران</p>
              <p><router-link  to="/DashBoard"><v-tooltip  right><v-icon slot="activator"  style="color:aqua">perm_identity</v-icon><span class="fontIran">داشبورد</span></v-tooltip></router-link>آلمان</p>
              <p>نمره بازخورد.100<router-link to="" class="router">دیدن بازخورد</router-link></p>
              <p>10,000,000-30,000,001 IRR</p>
              <p ><router-link to="" class="router">تهران,استان تهران,ایران</router-link></p>
              <p>1 ساعت و 30 دقیقه</p>
              </div>  
          </v-card-media>
        </v-flex>
        <order-process></order-process>
      </v-layout>
    </v-flex>
    
    <v-flex d-flex xs12 sm6 md4 child-flex>
      <working-hour></working-hour>
    </v-flex>
    
    <v-flex d-flex xs12 sm6 md6>
      <v-card>
        <v-card-text class="fontIran">
          <p class="titled">صدرکریپتو از شما محافظت می کند</p>
          <p>بیت کوین موجود در کیف پول شما،پس از ثبت درخواست برای فروش به اندازه سفارش درکیف پول شما مسدود خواهد شد. 
            سپس خریدار می بایستی مبلغ مورد توافق را به حساب فروشنده واریز نموده
            و مدارک مربوطه به پرداخت را به فروشنده 
            ارسال نمایدو فروشنده پس از بررسی و تایید مبلغ واریزی
              .بایستی سفارش را نهایی کند که پس از نهایی شدن سفارش صدر کریپتو مقدار مسدودی بیت کوین را به کیف پول خریدار انتقال می دهد</p>
        </v-card-text>
      </v-card>
    </v-flex>

    <v-flex d-flex xs12 sm6 md6 blue lighten-2>
      <v-card>
        <v-card-text class="fontIran">
          <p class="titled"> تذکر</p>
          <p>آگهی را بخوانید و شرایط را بررسی کنید</p>
          <p>اگرخواهان معامله بصورت حضوری و پرداخت نقدی هستید در یک مکان و زمان مشخص با فروشنده /خریدار قرار حضوری ترتیب بدهید</p>
          <p>برای اطمینان بیشتر از صحت معامله حضوری و جلوگیری از کلاهبرداری بهتر است دیدگاه خریداران/ فروشندگان مربوط به فرد مورد نظر و همچنین پروفایل مربوطه راچک وبررسی نمایید</p>
          <p>توجه داشته باشید که نوسانات بازاروهزینه انتقال ممکن است مقدار نهایی بیت کوین را تغییر دهد لذا مقدار بیت کوین در زمان درخواست محاسبه می شود</p>
          <v-btn to="Order">Order</v-btn>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</v-container>
</template>
<script>
import WorkingHour from "./../components/EditProfile/WorkingHour.vue";
import OrderProcess from "./../components/OrderProcess.vue";
export default {
  components:{
    OrderProcess,
    WorkingHour
  },
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
.titled{
  font-family: Iranian Sans;
  font-size: 18px; 
}

.headline{
  text-decoration: none;
  padding-right:10px;
  color:rgb(133, 129, 129);
}
.fontIran{
font-family: Iranian Sans;
font-size: 13px;

}
.router{
    font-family:'iranian sans';
    color:rgb(0, 153, 255);
    text-decoration:none;
}
.router:hover{
    color:rgb(0, 140, 255);
}
.btc{
  font-family: Iranian Sans;
  font-size: 15px;
}

</style>
