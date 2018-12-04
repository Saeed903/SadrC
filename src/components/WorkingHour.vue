<template>

    <div>
        <v-flex>
            <v-card-text v-if="workingTime"> 
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
        </v-flex>
      
        <v-card-text v-if="sadrsys"  class="fontIran grey darken-3 ">
            <p class="titled  green--text " >صدرکریپتو از شما محافظت می کند.</p>
            <p>بیت کوین موجود در کیف پول شما،پس از ثبت درخواست برای فروش به اندازه سفارش درکیف پول شما مسدود خواهد شد.</p> 
            <p>سپس خریدار می بایستی مبلغ مورد توافق را به حساب فروشنده واریز نمودهو مدارک مربوطه به پرداخت را به فروشنده ارسال نماید.</p>
            <p>فروشنده پس از بررسی و تایید مبلغ واریزی ، بایستی سفارش را نهایی کند،</p>
            <p> که پس از نهایی شدن سفارش صدر کریپتو مقدار مسدودی بیت کوین را به کیف پول خریدار انتقال می دهد.</p>
        </v-card-text>
      
        <v-card-text class="fontIran deep-purple darken-1 " v-if="Reminder">
          <p class="titled"><v-icon color="yellow">warning</v-icon> تذکر</p>
          <p >آگهی را بخوانید و شرایط را بررسی کنید</p>
          <p>اگرخواهان معامله بصورت حضوری و پرداخت نقدی هستید در یک مکان و زمان مشخص با فروشنده /خریدار قرار حضوری ترتیب بدهید</p>
          <p>برای اطمینان بیشتر از صحت معامله حضوری و جلوگیری از کلاهبرداری بهتر است دیدگاه خریداران/ فروشندگان مربوط به فرد مورد نظر و همچنین پروفایل مربوطه راچک وبررسی نمایید</p>
          <p>توجه داشته باشید که نوسانات بازاروهزینه انتقال ممکن است مقدار نهایی بیت کوین را تغییر دهد لذا مقدار بیت کوین در زمان درخواست محاسبه می شود</p>
        </v-card-text>
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


