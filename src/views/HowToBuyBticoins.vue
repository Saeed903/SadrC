<template>
    <div>
        <v-flex>
            <v-icon class="titled"></v-icon>
            <v-card-text class="titled text-xs-right">
                <span><v-icon color="cyan accent-2">done_all</v-icon>چگونه ارز بخریم؟</span>
            </v-card-text>
        </v-flex>
        <!--در پایین قسمتی از توضیحات مرحله ای, یک عکسی هم از سایت باید قرار گیرد-->
        <v-flex d-flex v-for="level in levels" :key="level">
            <v-card class="elevation-24">
                <v-card-text class="fontIran ">
                    <span class="text-xs-center mt-2">{{level.text}}</span><br>
                    <span class="fontIrans">{{level.describe}}</span><router-link class="textCard" to="">{{level.router}}</router-link>
                </v-card-text>
            </v-card>
        </v-flex>

        <v-layout row wrap>
            <v-flex d-flex v-for="dashboard in dashboards" :key="dashboard" xs12 sm6 md6 lg6 xl6>
                <router-link class="textCard" to="">
                    <v-card class="elevation-24">
                        <v-card-text class="headlined text-xs-center ">
                            <p class="fontIran pt-3">{{dashboard.top}}</p>
                            <p class="fontIrans">{{dashboard.bottom}}</p>
                        </v-card-text>
                    </v-card>
                </router-link>
            </v-flex>
        </v-layout>
            
        <v-flex>
            <v-card-text class="headlined text-xs-center">
                <span>می خواهم کمک بیشتری کنم؟</span>
            </v-card-text>
        </v-flex>

        <v-layout row wrap>
            <v-flex dflex xs12 sm3 md3 lg3 xl3>
                <v-card-text class="text-xs-center">
                    <v-icon color="grey lighten-1" large>help_outline</v-icon><br>
                    <router-link class="textCard" to="">سوالات متداول</router-link>
                </v-card-text>
            </v-flex>
            <v-flex dflex xs12 sm3 md3 lg3 xl3>
                <v-card-text class="text-xs-center">
                    <v-icon color="grey lighten-1" large>group</v-icon><br>
                        <router-link class="textCard" to="">پست در انجمن ما</router-link>
                </v-card-text>
            </v-flex>
            <v-flex dflex xs12 sm3 md3 lg3 xl3>
                <v-card-text class="text-xs-center">
                    <v-icon color="grey lighten-1" large>fab fa-twitter</v-icon><br>
                        <router-link class="textCard" to=""> در توییت ما بنویسید</router-link>
                </v-card-text>
            </v-flex>
            <v-flex dflex xs12 sm3 md3 lg3 xl3>
                <v-card-text class="text-xs-center">
                    <v-icon color="grey lighten-1" large>local_shipping</v-icon><br>
                        <router-link class="textCard" to="">یک بلیط پشتیبانی باز کنید</router-link>
                </v-card-text>
            </v-flex>
        </v-layout>

        <Footer></Footer>
    </div>
</template>
<script>
import Footer from './../components/Footer.vue'
export default {
    data : () => ({
        levels:[
            {text:'مرحله 1: ثبت نام کنید',describe:'یک حساب کاربری در صدرکریپتو ایجاد کنید سپس شما یک کیف پول ارزی و آنلاین دریافت خواهید کرد.هیچ برنامه اضافی مورد نیاز نیست.اگر درحال حاضر یک حساب کابری دارید به مرحله بعدی بروید',router:'ثبت کنید'},
            {text:'مرحله 2: جستجو برای تبلیغات',describe:'به صفحه اصلی بروید و در کادر جستجو ارز مبلغی که میخواهید  خرید و فروش کنید را اضافه کنید و روش پرداخت را نیز انتخاب کنید.اگر روش پرداخت را مطمئن  نیستید که چگونه میخواهید پرداخت کنید «همه پیشنهادات آنلاین» را انتخاب کنید.این سایت معامله گران ارزهای دیجیتال موجود در منطقه شما را پیدا میکنند.',router:'صفحه اصلی'},
            {text:'مرحله 3: یک تبلیغ را انتخاب کنید',describe:'از لیست آگهی ها، یکی از آگهی ها را نسیت به نشانگر موجود در جلوی هر آگهی انتخاب کنید.نشانگر زمان پاسخگویی و اعتماد را نشان می دهد.اگر یک معامله گر در عرض پنج دقیقه پاسخ (سبز)، در عرض 30 دقیقه (زرد) یا کمتر از 30 دقیقه  پاسخ دهد (خاکستری)نشان داده خواهد شد.شما میتوانید برای کسب اطلاعات بیشتر در مورد تبلیغات بر روی دکمه خرید بزنید.'},
            {text:'مرحله 4: پرداخت به فروشنده؟',describe:'بعد از اینکه دکمه «خرید» را فشار دادید،اطلاعات بیشتری در مورد تبلیغات،از جمله شرایط تجارت را مشاهده خواهید کرد.قبل از ارسال درخواست تجارت با شخص مورد نظر شرایط تجارت شخص مورد نظر را با دقت بخوانید که اگر با آنها موافق نباشید می توانید به صفخه قبلی بروید و تبلیغ دیگری را انتخاب کنید.برای شروع تجارت پیامی برای فروشنده در جهبه آبی رنگ وارد کنید و روی دکمه ارسال درخواست تجارت کلیک کنید تا تجارت شروع شود.'},
            {text:'مرحله 5: علامت گذاری پرداخت کامل است.',describe:'پس از انجام پرداخت بر روی دکمه پرداخت میکنم کلیک کنید.هنگامی که معامله گر تایید کرده است که پرداخت شما دریافت شده است ارز مورد نظر شما از سپرده آزاد شده و فورا در کیف پول صدرکریپتو شما قرار خواهد گرفت.',router:'کیف پول صدرکریپتو'},
        ],
        dashboards:[
            {top:'داشبورد',bottom:'تمام معاملات خود را میتوانید در داشبورد خود مشاهده کنید.'},
            {top:'شناسایی حساب شما',bottom:'قابلیت دیدن نبلیغات بیشتر'},
            {top:'محبوب ترین تبلیغات',bottom:'در صفحه اول تبلیفات با محبوب ترین روش های پرداخت در کشور شما نشان داده خواهد شد.'},
            {top:'بهبود امنیت',bottom:'برای کسب اطلاعات در مورد چگونگی بهبود امنیت حساب کاربری راهنمای امنیت ما را بخوانید.'},
        ]
    }),
     components:{  
        Footer,
  }
}
</script>
<style scoped>
.titled{
  font-family: Iranian Sans;
  font-size:22px; 
}

.headlined{
  font-family: Iranian Sans;
  font-size: 18px; 
}
.fontIran{
font-family: Iranian Sans;

}
.fontIrans{
font-family: Iranian Sans;
font-size: 13px;

}
.textCard{
    font-family:'iranian sans';
    color:#18FFFF;
    text-decoration:none;
    font-size:12px;
}
.textCard:hover{
    color:#00E5FF;
}
.btc{
  font-family: Iranian Sans;
  font-size: 15px;
} 

.card{
  background-color:rgb(67, 82, 109)
}

</style>


