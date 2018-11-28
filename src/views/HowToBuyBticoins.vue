<template>
    <v-layout>
        <v-flex>
            <v-card-text class="fontIran">
                <v-flex>
                    <v-icon class="titled"></v-icon>
                    <v-card-text class="titled">
                        چگونه بیت کوین بخریم؟
                    </v-card-text>
                </v-flex>

                <v-layout row wrap>
                    <v-flex>
                        <v-card>
                            <v-flex xs6 sm6 md6 lg6 xl6>
                                <v-tooltip label="اشتراک گذاری"><v-icon class="Share">Share</v-icon></v-tooltip>
                                <v-tooltip><v-icon class="time">time</v-icon></v-tooltip>
                            </v-flex>
                            <v-flex xs6 sm6 md6 lg6 xl6>
                                <v-icon>بیت کوین</v-icon>
                                <router-link class="router" to=""> چگونه:خرید بیت کوین در صدر کریپتو</router-link>
                            </v-flex>
                            <v-video></v-video>
                        </v-card>
                    </v-flex>
                </v-layout>

                <v-flex>
                    <v-card-text class="fontIran">
                        <p>مرحله 1 ثبت نام کنید</p>
                        <p class="fontIran1"><router-link class="router" to=""> ثبت کنید</router-link> شما یک کیف پول بیت کوین آنلاین و رایگان دریافت می کنید. هیچ برنامه اضافی مورد نیاز نیست اگر در حال حاضر یک حساب کاربری دارید، به مرحله بعدی بروید.یک حساب کاربری با صدر کریپتو</p>
                    </v-card-text>
                </v-flex>

                <v-flex>
                    <v-card-text class="fontIran">
                        <p class="fontIran1">مرحله 2. جستجو برای تبلیغات</p>
                        <p class="fontIran1">به صفحه اصلی بروید و در کادر جستجو فرم را با مبلغی که میخواهید در ارز، محل سکونت خود خریداری کنید، پر کنید و روش پرداخت را انتخاب کنید. اگر مطمئن نیستید که چگونه می خواهید پرداخت کنید، به عنوان روش پرداخت «همه پیشنهادات آنلاین» را انتخاب کنید. این سایت معامله گران بیتکوین موجود در منطقه شما را فهرست می کند.<router-link to=""> صفحه اصلی</router-link></p>
                        <v-img></v-img>
                    </v-card-text>
                </v-flex>

                <v-flex>
                    <v-card-text class="fontIran">
                        <p>مرحله 3. یک تبلیغ را انتخاب کنید</p>
                        <p class="fontIran1">از لیست آگهی ها، یکی از یک معامله گر را با نمره خوب شهرت و میزان بالایی از معاملات انتخاب کنید. نشانگر زمان پاسخ نشان می دهد اگر یک معامله گر در عرض پنج دقیقه پاسخ (سبز)، در عرض 30 دقیقه (زرد) یا کمتر از 30 دقیقه (خاکستری) پاسخ دهد. شما می توانید با کلیک بر روی دکمه خرید برای مشاهده اطلاعات بیشتر در مورد تبلیغات.</p>
                        <v-img></v-img>
                    </v-card-text>
                </v-flex>

                <v-flex>
                    <v-card-text class="fontIran">
                        <p>گام 4: پرداخت به فروشنده؟</p>
                        <p class="fontIran1">بعد از اینکه دکمه «خرید» را فشار دهید، اطلاعات بیشتری در مورد تبلیغات، از جمله شرایط تجارت مشاهده خواهید کرد. قبل از ارسال درخواست تجاری از طریق آنها بخوانید، اگر با آنها موافق نیستید، می توانید به صفحه قبلی بروید و تبلیغ دیگری را انتخاب کنید.
                        </p>برای شروع تجارت، جعبه آبی را تایپ کنید، برای خریدار وارد کنید، پیامی را برای فروشنده وارد کنید و روی دکمه ارسال درخواست تجارت کلیک کنید تا تجارت شروع شود. در صورت کلیک بر روی دکمه، زمانی که پرداخت نمی کنید قبل از اینکه پنجره پرداخت پایان یابد، آماده باشید که پرداخت می شود، تجارت به طور خودکار لغو خواهد شد.
                        <v-img></v-img>
                    </v-card-text>
                </v-flex>

                <v-flex>
                    <v-card-tex class="fontIran">
                        <p>مرحله 5. علامت گذاری پرداخت کامل است.</p>
                        <p class="fontIran1">پس از انجام پرداخت، بر روی دکمه پرداخت می کنم. هنگامی که معامله گر تایید کرده است که پرداخت شما دریافت شده است، بیت کوین شما از سپرده آزاد می شود و در فورا در  <router-link to="">کیف پول صدر کریپتو</router-link>شما موجود است.</p>
                        <span class="fontIran1">و این همه در آن وجود دارد، تبریک به اولین تجارت بیت کوین شما!</span>
                        <v-img></v-img>
                    </v-card-tex>
                </v-flex>

                <v-container grid-list-xl>
                    <v-layout row wrap>
                        <v-flex xs12 sm6 md6 lg6 xl6>
                            <router-link class="router" to="">
                                <v-card>
                                    <v-card-text class="headlined">
                                        <p>داشبورد</p>
                                        <p class="fontIran1">find all of your trades from your dashboard</p>
                                    </v-card-text>
                                </v-card>
                            </router-link>
                        </v-flex>
                        <v-flex xs12 sm6 md6 lg6 xl6>
                            <router-link class="router" to="">
                                <v-card>
                                    <v-card-text class="headlined">
                                        <p>identify your account</p>
                                        <p class="fontIran1">verify your identily and you will see more advertisements at better prices</p>
                                    </v-card-text>
                                </v-card>
                            </router-link>
                        </v-flex>
                    </v-layout>
                    <v-layout row wrap>
                        <v-flex xs12 sm6 md6 lg6 xl6>
                            <router-link class="router" to="">
                                <v-card>
                                    <v-card-text class="headlined">
                                        <p>داشبورد</p>
                                        <p class="fontIran1">find all of your trades from your dashboard</p>
                                    </v-card-text>
                                </v-card>
                            </router-link>
                        </v-flex>
                        <v-flex xs12 sm6 md6 lg6 xl6>
                            <router-link class="router" to="">
                                <v-card>
                                    <v-card-text class="headlined">
                                        <p>identify your account</p>
                                        <p class="fontIran1">verify your identily and you will see more advertisements at better prices</p>
                                    </v-card-text>
                                </v-card>
                            </router-link>
                        </v-flex>
                    </v-layout>
                </v-container>

                <v-flex>
                    <v-card-text class="headlined">
                        <p>می خواهم کمک بیشتری کنم؟</p>
                    </v-card-text>
                </v-flex>

                <v-layout row wrap>
                    <v-flex xs12 sm3 md3 lg3 xl3>
                        <v-card-text>
                            <v-icon></v-icon>
                                <router-link class="router" to="">سوالات متداول</router-link>
                        </v-card-text>
                    </v-flex>
                    <v-flex xs12 sm3 md3 lg3 xl3>
                        <v-card-text>
                            <v-icon></v-icon>
                                <router-link class="router" to="">پست در انجمن ما</router-link>
                        </v-card-text>
                    </v-flex>
                    <v-flex xs12 sm3 md3 lg3 xl3>
                        <v-card-text>
                            <v-icon></v-icon>
                                <router-link class="router" to=""> در توییت ما بنویسید</router-link>
                        </v-card-text>
                    </v-flex>
                    <v-flex xs12 sm3 md3 lg3 xl3>
                        <v-card-text>
                            <v-icon></v-icon>
                                <router-link class="router" to="">یک بلیط پشتیبانی باز کنید</router-link>
                        </v-card-text>
                    </v-flex>
                </v-layout>
            </v-card-text>
        </v-flex>

        <footer></footer>

    </v-layout>
</template>
<script>
import footer from'./../components/Footer.vue';
export default {
    data : () => ({

    }),
    components:{
        footer
    }
}
</script>
<style scoped>
.titled{
  font-family: Iranian Sans;
  font-size: 25px; 
}

.headlined{
  font-family: Iranian Sans;
  font-size: 18px; 
}
.fontIran{
font-family: Iranian Sans;

}
.fontIran1{
font-family: Iranian Sans;
font-size: 12px;

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


