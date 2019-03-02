<template>
    <div>
        <v-card-text class="text-xs-center fontIran mt-5">
            <v-icon size="50px" color="cyan accent-2">help_outline</v-icon>
            <p class="titled mb-5">راهنمایی در صدرکریپتو</p>
        </v-card-text>

        <v-layout row wrap>
            <v-flex xs12 sm6 md6 lg6>
                <router-link class="router" to="">
                    <v-card class="logCard" height="100%" style="background-color:#37474F;">
                        <v-card-text class="text-xs-center">
                            <p class="boxText">چگونه بیت کوین بخریم؟</p>
                            <p class="fontIran">خودتان را با راهنمایی های ما راحت کنید</p>
                        </v-card-text>
                    </v-card>
                </router-link>
            </v-flex>
            <v-flex xs12 sm6 md6 lg6>
                <router-link class="router" to="">
                    <v-card class="logCard" height="100%" style="background-color:#37474F;">
                        <v-card-text class="text-xs-center">
                            <p class="boxText">چگونه بیت کوین بفروشیم؟</p>
                        </v-card-text>
                    </v-card>
                </router-link>
            </v-flex>
            <v-flex xs12 sm6 md6 lg6>
                <router-link class="router" to="">
                    <v-card class="logCard" height="100%" style="background-color:#37474F;">
                        <v-card-text class="text-xs-center">
                            <p class="boxText">راهنمای امنیت</p>
                            <p class="fontIran">راهنمای نگه داشتن خود و پول خود را امن نگه دارید</p>
                        </v-card-text>
                    </v-card>
                </router-link>
            </v-flex>
            <v-flex xs12 sm6 md6 lg6>
                <router-link class="router" to="">
                    <v-card class="logCard" height="100%" style="background-color:#37474F;">
                        <v-card-text class="text-xs-center">
                            <p class="boxText">مقدمه ای برای تجارت بیت کوین آنلاین</p>
                            <p class="fontIran">مقدمه راهنمایی برای تجارت آنلاین بیت کوین در صدر کریپتو</p>
                        </v-card-text>
                    </v-card>
                </router-link>
            </v-flex>
            <v-flex xs12 sm6 md6 lg6>
                <router-link class="router" to="">
                    <v-card class="logCard" height="100%" style="background-color:#37474F;">
                        <v-card-text class="text-xs-center">
                            <p class="boxText">راهنمایی در مورد چگونگی تجارت بیت کوین در محلی</p>
                            <p class="fontIran">راهنمای کوتاه در مورد نحوه فروش بیت کوین به صورت محلی برای پول نقد</p>
                        </v-card-text>
                    </v-card>
                </router-link>
            </v-flex>
            <v-flex xs12 sm6 md6 lg6>
                <router-link class="router" to="">
                    <v-card class="logCard" height="100%" style="background-color:#37474F;">
                        <v-card-text class="text-xs-center">
                            <p class="boxText pt-2">معادلات قیمت تبلیغات 101 </p>
                            <p class="fontIran pt-2">اصول اولیه قیمت تبلیغات را یاد بگیرید</p>
                        </v-card-text>
                    </v-card>
                </router-link>
            </v-flex>
            <v-flex xs12 sm6 md6 lg6>
                <router-link class="router" to="">
                    <v-card class="logCard" height="100%" style="background-color:#37474F;">
                        <v-card-text class="text-xs-center">
                            <p class="boxText">مستندات آی پی</p>
                            <p class="fontIran">از آی پی استفاده کنید تا برنامه های خودتان را بسازید و به تجارت خودکار بپردازید</p>
                        </v-card-text>
                    </v-card>
                </router-link>
            </v-flex>
            <v-flex xs12 sm6 md6 lg6>
                <router-link class="router" to="">
                    <v-card class="logCard" height="100%" style="background-color:#37474F;">
                        <v-card-text class="text-xs-center">
                            <p class="boxText">بیت کوین ها را در وب سایت خود بپذیرید</p>
                            <p class="fontIran">نحوه استفاده از آی پی برای پذیرش بیت کوین ها در فروشگاه وب شما چیست؟</p>
                        </v-card-text>
                    </v-card>
                </router-link>
            </v-flex>
        </v-layout>

        <Footer></Footer>
    </div>
</template>
<script>
import Footer from './../components/Footer.vue'
export default {

    components:{
        Footer,
    }
}
</script>

<style scoped>
.titled{
  font-family: Iranian Sans;
  font-size:17px; 
}
.boxText{
    font-family: Iranian Sans;
    font-size:17px; 
}
.headlined{
  font-family: Iranian Sans;
  font-size: 18px; 
}
.fontIran{
font-family: Iranian Sans;
font-size:12px;
}
.router{
    text-decoration: none;
}
.logCard{
  border:1px solid #18FFFF;
  box-shadow:0px 0px 10px 1px #18FFFF;
}
.logCard:hover{
  box-shadow:0px 0px 25px 1px #18ffff;
}
</style>
