<template>
<div>
    <v-card v-if="workingTime">
        <v-card-text > 
            <p class="titled">شرایط تجارت با آلمان</p>
            <div style="background-color:rgb(26, 29, 37)">
                <p style="padding-right:20px" class="fontIran">تایید احراز هویت <br>پرداخت وجه مورد توافق <br>بیت کوین</p>
            </div>
            <p class="titled">ساعات کار</p>
            <v-list>
                <ul class="fontIran" v-for="item in items" :key="item" style="padding-right:25px">
                <li>{{item}}</li>
                </ul>
            </v-list>
            <p class="fontIran">زمان محلی:تهران</p>
            <p ><router-link class="router" to="">گزارش این تبلیغ</router-link></p>
        </v-card-text>
      </v-card>

      <v-card v-if="sadrsys">
        <v-card-text  class="fontIran">
          <p class="titled">صدرکریپتو از شما محافظت می کند</p>
          <p>بیت کوین موجود در کیف پول شما،پس از ثبت درخواست برای فروش به اندازه سفارش درکیف پول شما مسدود خواهد شد. 
            سپس خریدار می بایستی مبلغ مورد توافق را به حساب فروشنده واریز نموده
            و مدارک مربوطه به پرداخت را به فروشنده 
            ارسال نمایدو فروشنده پس از بررسی و تایید مبلغ واریزی
              .بایستی سفارش را نهایی کند که پس از نهایی شدن سفارش صدر کریپتو مقدار مسدودی بیت کوین را به کیف پول خریدار انتقال می دهد</p>
        </v-card-text>
      </v-card>

      <v-card v-if="Reminder">
        <v-card-text class="fontIran">
          <p class="titled"> تذکر</p>
          <p>آگهی را بخوانید و شرایط را بررسی کنید</p>
          <p>اگرخواهان معامله بصورت حضوری و پرداخت نقدی هستید در یک مکان و زمان مشخص با فروشنده /خریدار قرار حضوری ترتیب بدهید</p>
          <p>برای اطمینان بیشتر از صحت معامله حضوری و جلوگیری از کلاهبرداری بهتر است دیدگاه خریداران/ فروشندگان مربوط به فرد مورد نظر و همچنین پروفایل مربوطه راچک وبررسی نمایید</p>
          <p>توجه داشته باشید که نوسانات بازاروهزینه انتقال ممکن است مقدار نهایی بیت کوین را تغییر دهد لذا مقدار بیت کوین در زمان درخواست محاسبه می شود</p>
          <v-btn to="Order">Order</v-btn>
        </v-card-text>
      </v-card>
</div>
</template>
<script>
export default {
   
    name:'WorkingHour',
    props:['Reminder','sadrsys','workingTime'],
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
}
</script>
<style scoped>
.fontIran{
    font-family: Iranian Sans;
    font-size: 13px;

}
</style>


