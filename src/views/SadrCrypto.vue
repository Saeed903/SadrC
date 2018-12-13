<template>
    <div>
        <v-flex>
            <p class="fontsIran text-xs-center" >صدرکریپتو ساده ترین و مطمعن ترین راه برای خرید و فروش و مدیریت ارز دیجیتال</p>
            <p class="fontsIran text-xs-center orange--text">فوری.امن.خصوصی</p>
            <p class="text-xs-center ">
                <span class="fontsIran orange--text">تجارت بیت کوین</span>
                <router-link to="/BitcoinCity" class="textCard">در 16370 شهر</router-link>
                <span class="fontsIran orange--text">و</span>
                <router-link to="/BitcoinCountry" class="textCard">248 کشور</router-link>
                <span class="fontsIran orange--text">شامل</span>
                <router-link to="/RepublicIran" class="textCard">جمهوری اسلامی ایران</router-link>
            </p>
            <div class="text-xs-center">
                <v-btn class="fontsIran elevation-24" color="cyan darken-4" to="Signup" round><v-icon size="20px">done_all</v-icon>ثبت نام رایگان</v-btn>
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

            {{publishAdvertise}}
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
        btrAddr: 'bitcoin:18JsNRxD7Tc8KDnCYkx7y98w22fgpgARMn',
        show:false,
       
    }),
    computed:{
        ...mapGetters('publish-advertises', { findPublishAdvertisesOnline: 'find'}),

        publishAdvertise(){
            return this.findPublishAdvertisesOnline().data;
        }
    },
    methods:{
        ...mapActions('publish-advertises', { findPublishAdvertises: 'find'}) ,
    }, 
    mounted(){
       this.findPublishAdvertises()
            .then(response => {
                const publishAdvertise = response.data || response;
            })
    },
    created(){
        //console.log('publish', this.publishAdvertise);
        
    },
    components:{
        Advertise,
        Footer,
        FormSell
    }
  };
</script>
