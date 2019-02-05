<template>
    <div>
        <v-flex>
            <h1 class="farzad text-xs-center">صدرکریپتو ساده ترین و مطمعن ترین راه برای خرید و فروش و مدیریت ارز دیجیتال</h1>
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
                color="cyan accent-3"
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

            <v-flex>
                    <v-card class="text-xs-center elevation-24">
                        <v-card-text class="fontIran text-xs-center grey darken-1">اخبار صدر سیستم</v-card-text>
                        <v-divider></v-divider>

                        <v-card-text class="contant text-xs-right"><router-link class="textCard" to="">ابزار بیشتر برای معاملات خاموش</router-link></v-card-text>
                        <v-divider></v-divider>

                        <v-card-text class="contant text-xs-right"><router-link class="textCard" to="">تغییرات صفحه ورود به سیستم</router-link></v-card-text>
                        <v-divider></v-divider>

                        <v-card-text class="contant text-xs-right"><router-link class="textCard" to="">جبران خسارت برای کاربران دارای تعادل نقدی</router-link></v-card-text>
                        <v-divider></v-divider>

                        <v-card-text class="contant text-xs-right"><router-link class="textCard" to="">سیستم جدید هزینه تراکنش برای بیت کوین</router-link></v-card-text>
                        <v-divider></v-divider>
                        
                        <v-card-text class="fontIrans text-xs-left">اطلاعات بیشتر در<router-link class="textCard" to=""> وبلاگ صدر سیستم </router-link></v-card-text>
                    </v-card>
            </v-flex>

            <v-flex>
                <Footer></Footer>
        </v-flex>
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
.farzad{
    font-family:iranian sans;
    font-size:17px;
    color:#BDBDBD;
}
</style>

