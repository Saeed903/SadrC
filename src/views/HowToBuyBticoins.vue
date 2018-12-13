<template>
    <div>
        <v-flex>
            <v-icon class="titled"></v-icon>
            <v-card-text class="titled text-xs-right">
                <span><v-icon color="yellow lighten-3">done_all</v-icon>چگونه ارز دیجیتال بخریم؟</span>
            </v-card-text>
        </v-flex>
        <!--در پایین قسمتی از توضیحات مرحله ای, یک عکسی هم از سایت باید قرار گیرد-->
        <v-flex v-for="level in levels" :key="level">
            <v-card>
                <v-card-text class="fontIran card">
                    <span class="text-xs-center mt-2">{{level.text}}</span><br>
                    <span class="fontIrans">{{level.describe}}</span><router-link class="textCard" to="">{{level.router}}</router-link>
                    <v-divider class="mt-5 secondary"></v-divider>
                </v-card-text>
            </v-card>
        </v-flex>

        <v-layout row wrap>
            <v-flex v-for="dashboard in dashboards" :key="dashboard" xs12 sm6 md6 lg6 xl6>
                <router-link class="router" to="">
                    <v-card>
                        <v-card-text class="card text-xs-center">
                            <p class="fontsIran pt-3">{{dashboard.top}}</p>
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
            {text:'مرحله 1 ثبت نام کنید',describe:'یک حساب کاربری با صدرکریپتو ثبت کنید شما یک کیف پول بیت کوین آنلاین و رایگان دریافت می کنید. هیچ برنامه اضافی مورد نیاز نیست اگر در حال حاضر یک حساب کاربری دارید، به مرحله بعدی بروید.',router:'ثبت کنید'},
            {text:'مرحله 2: جستجو برای تبلیغات',describe:'به صفحه اصلی بروید و در کادر جستجو فرم را با مبلغی که میخواهید در ارز، محل سکونت خود خریداری کنید، پر کنید و روش پرداخت را انتخاب کنید. اگر مطمئن نیستید که چگونه می خواهید پرداخت کنید، به عنوان روش پرداخت «همه پیشنهادات آنلاین» را انتخاب کنید. این سایت معامله گران بیتکوین موجود در منطقه شما را فهرست می کند.',router:'صفحه اصلی'},
            {text:'مرحله 3. یک تبلیغ را انتخاب کنید',describe:'از لیست آگهی ها، یکی از یک معامله گر را با نمره خوب شهرت و میزان بالایی از معاملات انتخاب کنید. نشانگر زمان پاسخ نشان می دهد اگر یک معامله گر در عرض پنج دقیقه پاسخ (سبز)، در عرض 30 دقیقه (زرد) یا کمتر از 30 دقیقه (خاکستری) پاسخ دهد. شما می توانید با کلیک بر روی دکمه خرید برای مشاهده اطلاعات بیشتر در مورد تبلیغات.'},
            {text:'مرحله 4: پرداخت به فروشنده؟',describe:'بعد از اینکه دکمه «خرید» را فشار دهید، اطلاعات بیشتری در مورد تبلیغات، از جمله شرایط تجارت مشاهده خواهید کرد. قبل از ارسال درخواست تجاری از طریق آنها بخوانید، اگر با آنها موافق نیستید، می توانید به صفحه قبلی بروید و تبلیغ دیگری را انتخاب کنید.برای شروع تجارت، جعبه آبی را تایپ کنید، برای خریدار وارد کنید، پیامی را برای فروشنده وارد کنید و روی دکمه ارسال درخواست تجارت کلیک کنید تا تجارت شروع شود. در صورت کلیک بر روی دکمه، زمانی که پرداخت نمی کنید قبل از اینکه پنجره پرداخت پایان یابد، آماده باشید که پرداخت می شود، تجارت به طور خودکار لغو خواهد شد.'},
            {text:'مرحله 5. علامت گذاری پرداخت کامل است.',describe:'پس از انجام پرداخت، بر روی دکمه پرداخت می کنم. هنگامی که معامله گر تایید کرده است که پرداخت شما دریافت شده است، بیت کوین شما از سپرده آزاد می شود و در فورا در  کیف پول صدر کریپتوشما موجود است.',router:'کیف پول صدرکریپتو'},
        ],
        dashboards:[
            {top:'داشبورد',bottom:'تمام معاملات خود را از داشبورد خود پیدا کنید'},
            {top:'شناسایی حساب شما',bottom:'تبلیغات بیشتری مشاهده خواهید کرد'},
            {top:'محبوب ترین تبلیغات',bottom:'صفحه اول تبلیغات با محبوب ترین روش های پرداخت در کشور شما را نشان می دهد'},
            {top:'بهبود امنیت',bottom:'برای اطلاعات در مورد چگونگی بهبود امنیت حساب کاربری، راهنمای امنیت ما را بخوانید.'},
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
    color:rgb(43,255,92);
    text-decoration:none;
    font-size:12px;
}
.textCard:hover{
    color:#18FFFF;
}
.btc{
  font-family: Iranian Sans;
  font-size: 15px;
} 
.router{
    text-decoration: none;
}
.card{
  background-color:rgb(30, 38, 52)
}

</style>


