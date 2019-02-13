<template>
    <div>
        <v-card-text class="text-xs-center mb-5">
            <v-icon size="60px" color="cyan accent-2">description</v-icon><br>
            <span class="fontIran mt-2">چگونه بیت کوین بخریم؟</span>
        </v-card-text>
        <!--در پایین قسمتی از توضیحات مرحله ای, یک عکسی هم از سایت باید قرار گیرد-->
        <v-flex class="mb-4" d-flex>
            <v-card class="logCard" style="background-color:#37474F;">
                <v-card-text class="fontIran">
                    <span class="text-xs-center mt-2">مرحله اول:ثبت نام کنید</span><br>
                    <span class="fontIrans">.یک حساب کاربری در صدرکریپتو ایجاد کنید سپس شما یک کیف پول ارزی و آنلاین دریافت خواهید کرد.هیچ برنامه اضافی مورد نیاز نیست.اگر درحال حاضر یک حساب کابری دارید به مرحله بعدی بروید<router-link to="/login" class="textCard">ثبت نام</router-link></span>
                </v-card-text>
            </v-card>
        </v-flex>
        <v-flex class="mb-4" d-flex>
            <v-card class="logCard" style="background-color:#37474F;">
                <v-card-text class="fontIran">
                    <span class="text-xs-center mt-2">مرحله 2: جستجو برای تبلیغات</span><br>
                    <span class="fontIrans">به صفحه اصلی بروید و در کادر جستجو ارز مبلغی که میخواهید خرید و فروش کنید را اضافه کنید و روش پرداخت را نیز انتخاب کنید.اگر روش پرداخت را مطمئن نیستید که چگونه میخواهید پرداخت کنید «همه پیشنهادات آنلاین» را انتخاب کنید.این سایت معامله گران ارزهای دیجیتال موجود در منطقه شما را پیدا میکنند.<router-link to="" class="textCard">.صفحه اصلی</router-link></span>
                </v-card-text>
            </v-card>
        </v-flex>
         <v-flex class="mb-4" d-flex>
            <v-card class="logCard" style="background-color:#37474F;">
                <v-card-text class="fontIran">
                    <span class="text-xs-center mt-2">مرحله 3: یک تبلیغ را انتخاب کنید</span><br>
                    <span class="fontIrans">از لیست آگهی ها، یکی از آگهی ها را نسیت به نشانگر موجود در جلوی هر آگهی انتخاب کنید.نشانگر زمان پاسخگویی و اعتماد را نشان می دهد.اگر یک معامله گر در عرض پنج دقیقه پاسخ (سبز)، در عرض 30 دقیقه (زرد) یا کمتر از 30 دقیقه پاسخ دهد (خاکستری)نشان داده خواهد شد.شما میتوانید برای کسب اطلاعات بیشتر در مورد تبلیغات بر روی دکمه خرید بزنید.</span>
                </v-card-text>
            </v-card>
        </v-flex>
        <v-flex class="mb-4" d-flex>
            <v-card class="logCard" style="background-color:#37474F;">
                <v-card-text class="fontIran">
                    <span class="text-xs-center mt-2">مرحله 4: پرداخت به فروشنده؟</span><br>
                    <span class="fontIrans">بعد از اینکه دکمه «خرید» را فشار دادید،اطلاعات بیشتری در مورد تبلیغات،از جمله شرایط تجارت را مشاهده خواهید کرد.قبل از ارسال درخواست تجارت با شخص مورد نظر شرایط تجارت شخص مورد نظر را با دقت بخوانید که اگر با آنها موافق نباشید می توانید به صفخه قبلی بروید و تبلیغ دیگری را انتخاب کنید.برای شروع تجارت پیامی برای فروشنده در جهبه آبی رنگ وارد کنید و روی دکمه ارسال درخواست تجارت کلیک کنید تا تجارت شروع شود.</span>
                </v-card-text>
            </v-card>
        </v-flex>
         <v-flex class="mb-4" d-flex>
            <v-card class="logCard" style="background-color:#37474F;">
                <v-card-text class="fontIran">
                    <span class="text-xs-center mt-2">مرحله 5: علامت گذاری پرداخت کامل است.</span><br>
                   <span class="fontIrans">پس از انجام پرداخت بر روی دکمه پرداخت میکنم کلیک کنید.هنگامی که معامله گر تایید کرده است که پرداخت شما دریافت شده است ارز مورد نظر شما از سپرده آزاد شده و فورا در کیف پول صدرکریپتو شما قرار خواهد گرفت.<router-link to="/wallet" class="textCard">کیف پول</router-link></span>
                </v-card-text>
            </v-card>
        </v-flex>
        <v-divider color="white" class="mb-5"></v-divider>
        <v-layout row wrap>
            <v-flex class="mb-4" d-flex xs12 sm6 md6 lg6 xl6>
                <router-link class="textCard" to="/dashboard">
                    <v-card class="logCard" style="background-color:#37474F;">
                        <v-card-text class="headlined text-xs-center ">
                            <p class="fontIran pt-3">داشبورد</p>
                            <p class="fontIrans">تمام معاملات خود را بدانید در داشبورد خود مشاهده کنید</p>
                        </v-card-text>
                    </v-card>
                </router-link>
            </v-flex>
            <v-flex class="mb-4" d-flex xs12 sm6 md6 lg6 xl6>
              <router-link class="textCard" to="">
                  <v-card class="logCard" style="background-color:#37474F;">
                      <v-card-text class="headlined text-xs-center ">
                          <p class="fontIran pt-3">شناسایی حساب شما</p>
                          <p class="fontIrans">قابلیت دیدن نبلیغات بیشتر</p>
                      </v-card-text>
                  </v-card>
              </router-link>
          </v-flex>
          <v-flex class="mb-4" d-flex xs12 sm6 md6 lg6 xl6>
              <router-link class="textCard" to="">
                  <v-card class="logCard" style="background-color:#37474F;">
                      <v-card-text class="headlined text-xs-center ">
                          <p class="fontIran pt-3">محبوب ترین تبلیغات</p>
                          <p class="fontIrans">در صفحه اول تبلیفات با محبوب ترین روش های پرداخت در کشور شما نشان داده خواهد شد</p>
                      </v-card-text>
                  </v-card>
              </router-link>
          </v-flex>
          <v-flex class="mb-4" d-flex xs12 sm6 md6 lg6 xl6>
            <router-link class="textCard" to="">
              <v-card class="logCard" style="background-color:#37474F;">
                <v-card-text class="headlined text-xs-center ">
                  <p class="fontIran pt-3">بهبود امنیت</p>
                  <p class="fontIrans">برای کسب اطلاعات در مورد چگونگی بهبود امنیت حساب کاربری راهنمای امنیت ما را بخوانید</p>
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
                    <router-link class="fontIrans" to="FrequentlyAskedQuestions">سوالات متداول</router-link>
                </v-card-text>
            </v-flex>
            <v-flex dflex xs12 sm3 md3 lg3 xl3>
                <v-card-text class="text-xs-center">
                    <v-icon color="grey lighten-1" large>group</v-icon><br>
                        <router-link class="fontIrans" to="ErrorAuth">پست در انجمن ما</router-link>
                </v-card-text>
            </v-flex>
            <v-flex dflex xs12 sm3 md3 lg3 xl3>
                <v-card-text class="text-xs-center">
                    <v-icon color="grey lighten-1" large>fab fa-twitter</v-icon><br>
                        <router-link class="fontIrans" to=""> در توییت ما بنویسید</router-link>
                </v-card-text>
            </v-flex>
            <v-flex dflex xs12 sm3 md3 lg3 xl3>
                <v-card-text class="text-xs-center">
                    <v-icon color="grey lighten-1" large>email</v-icon><br>
                        <router-link class="fontIrans" to="SupportCreateNewTicket">یک بلیط پشتیبانی باز کنید</router-link>
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
    text-decoration:none;
    text-indent:5;
}
.textCard{
    font-family:'iranian sans';
    color:cyan;
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
.logCard{
    border:1px solid #18FFFF;
    box-shadow:0px 0px 15px 1px #18FFFF;
} 
</style>


