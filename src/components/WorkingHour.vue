<template>

    <div>
        <v-flex>
            <v-card>
            <v-card-text v-if="workingTime"> 
                <p class="fontIran">شرایط تجارت با آلمان</p>
                <div class="grey darken-2">
                    <p style="padding-right:20px" class="fontsIran">تایید احراز هویت <br>پرداخت وجه مورد توافق <br>بیت کوین</p>
                </div>
                <p class="fontIran">ساعات کار</p>
                <ul class="fontIrans pr-4" v-for="(workingHour, index) in workingHours" :key="index" >
                    <li>{{workingHour}}</li>
                </ul>
                <v-card-text class="fontIrans pr-2">زمان محلی:تهران</v-card-text>
                <router-link class="textCard" to="">گزارش این تبلیغ</router-link>
            </v-card-text>
            </v-card>
        </v-flex>

        <v-card>
            <v-card-text v-if="sadrsys"  class="fontIrans1">
                <p class="fontIran  green--text " >صدرکریپتو از شما محافظت می کند.</p>
                <p>بیت کوین موجود در کیف پول شما،پس از ثبت درخواست برای فروش به اندازه سفارش درکیف پول شما مسدود خواهد شد.</p> 
                <p>سپس خریدار می بایستی مبلغ مورد توافق را به حساب فروشنده واریز نمودهو مدارک مربوطه به پرداخت را به فروشنده ارسال نماید.</p>
                <p>فروشنده پس از بررسی و تایید مبلغ واریزی ، بایستی سفارش را نهایی کند،</p>
                <p> که پس از نهایی شدن سفارش صدر کریپتو مقدار مسدودی بیت کوین را به کیف پول خریدار انتقال می دهد.</p>
            </v-card-text>
        </v-card>

        <v-card>
            <v-card-text class="fontIrans1 " v-if="Reminder">
                <p class="fontIran"><v-icon color="yellow">warning</v-icon> تذکر</p>
                <p >آگهی را بخوانید و شرایط را بررسی کنید</p>
                <p>اگرخواهان معامله بصورت حضوری و پرداخت نقدی هستید در یک مکان و زمان مشخص با فروشنده /خریدار قرار حضوری ترتیب بدهید</p>
                <p>برای اطمینان بیشتر از صحت معامله حضوری و جلوگیری از کلاهبرداری بهتر است دیدگاه خریداران/ فروشندگان مربوط به فرد مورد نظر و همچنین پروفایل مربوطه راچک وبررسی نمایید</p>
                <p>توجه داشته باشید که نوسانات بازاروهزینه انتقال ممکن است مقدار نهایی بیت کوین را تغییر دهد لذا مقدار بیت کوین در زمان درخواست محاسبه می شود</p>
            </v-card-text>
        </v-card>
    </div> 
</template>
<script>
export default {
   
    name:'WorkingHour',
    props:{
        Reminder: Boolean,
        sadrsys: Boolean,
        workingTime: Boolean, 
        workingHours: Array
    },
}
</script>
<style scoped>


</style>


