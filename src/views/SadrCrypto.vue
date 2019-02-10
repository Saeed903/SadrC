<template>
    <div>
        <v-flex>
            <h1 class="topText text-xs-center">صدرکریپتو ساده ترین و مطمعن ترین راه برای خرید و فروش و مدیریت ارز دیجیتال</h1>
            <p class="fontsIran text-xs-center orange--text pt-3">فوری . امن . اختصاصی</p>
            <p class="text-xs-center ">
                <span class="fontsIran orange--text">تجارت بیت کوین در</span>
                <span to="/BitcoinCity" class="textCard"> 16370 شهر</span>
                <span class="fontsIran orange--text">و</span>
                <span to="/BitcoinCountry" class="textCard">248 کشور</span>
                <span class="fontsIran orange--text">شامل</span>
                <span to="/RepublicIran" class="textCard">جمهوری اسلامی ایران</span>
            </p>
            <div class="text-xs-center">
                <v-btn
                class="fontsIran elevation-24"
                color="cyan accent-2"
                to="Signup"
                :loading="loading3"
                :disabled="loading3"
                outline
                >
                    <v-icon size="20px">
                    done_all
                    </v-icon>
                ثبت نام رایگان
                </v-btn>
            </div>
        </v-flex>

        <v-flex class="mt-0 mb-5">
                <FormSell></FormSell>
        </v-flex>

        <v-flex pt-0>
            <v-card height="100%" color="grey darken-1">
                <v-card-text class="fontsIran text-xs-center ">خرید بیت کوین آنلاین در جمهوری اسلامی ایران</v-card-text>
            </v-card>
            <v-card class="elevation-24">
                <Advertise></Advertise>
            </v-card>
            </v-flex>

            <v-flex>
                <v-card color="grey darken-1">
                    <v-card-text class="fontsIran text-xs-center ">فروش بیت کوین آنلاین در جمهوری اسلامی ایران</v-card-text>
                </v-card>
                <v-card class="elevation-24">
                    <Advertise></Advertise>
                </v-card>
            </v-flex>
            <v-layout justify-space-around>
                <v-flex sm6>
                    <v-card class="logCard mt-5">
                        <v-card-text class="fontsIran text-xs-center">اخبار صدر سیستم</v-card-text>
                        <v-divider color="grey"></v-divider>

                        <p class="fontIrans pr-2 pt-2">بیانیه صدرکریپتو در مورد مقررات و مقررات آینده</p>
                        <p class="fontIrans text-xs-left mb-0 pl-1">September 28th, 2019</p>
                        <v-divider color="grey"></v-divider>

                        <p class="fontIrans pr-2 pt-2">ابزار های بیشتر برای معاملات</p>
                        <p class="fontIrans text-xs-left mb-0 pl-1">September 27th, 2017</p>
                        <v-divider color="grey"></v-divider>

                        <p class="fontIrans pr-2 pt-2">تغییر صفحه ورود به سیستم</p>
                        <p class="fontIrans text-xs-left mb-0 pl-1">September 25th, 2017</p>
                        <v-divider color="grey"></v-divider>

                        <p class="fontIrans pr-2 pt-2">جبران برای کاربران متعلق به تعادل</p>
                        <p class="fontIrans text-xs-left mb-0 pl-1">July 19th, 2017</p>
                        <v-divider color="grey"></v-divider>

                        <p class="fontIrans pr-2 pt-2">بیانیه صدرکریپتو در مورد چنگال سخت ممکن</p>
                        <p class="fontIrans text-xs-left mb-0 pl-1 pb-1">February 8th, 2019</p>

                    </v-card>
                </v-flex>
            </v-layout>

            <Footer class="mt-5"></Footer>
    </div>
</template>
<script>
import FormSell from './../components/FormSell.vue'
import Advertise from './../components/Advertise.vue';
import Footer from './../components/Footer.vue';

import { mapActions, mapGetters, mapState } from 'vuex';


export default{
    data:() => ({
        isTrader:0,
        show:false,
        loading3:false,
        btrAddr: 'bitcoin:18JsNRxD7Tc8KDnCYkx7y98w22fgpgARMn',
        show:false,
       
    }),
    components:{
        Advertise,
        Footer,
        FormSell
    }
  };
</script>
<style scoped>
.topText{
    font-family:iranian sans;
    font-size:17px;
    color:#BDBDBD;
}
.cardImg{
  width:450px;
  max-width:100%;
}
.logCard{
  border:1px solid #18FFFF;
  box-shadow:0px 0px 25px 1px #18FFFF;
  border-radius:8px;
}
</style>

