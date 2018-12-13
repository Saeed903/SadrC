<template>
<div>
<v-flex>
    <v-card style="background-color:rgb(30, 38, 52)">
        <p class="iran text-xs-center">صدرکریپتو ساده ترین و مطمعن ترین راه برای خرید و فروش و مدیریت ارز دیجیتال</p>
        <p class="fontIran text-xs-center orange--text">فوری.امن.خصوصی</p>
        <p class="text-xs-center ">
            <span class="iran orange--text">تجارت بیت کوین</span>
            <router-link to="/BitcoinCity" class="iran router">در 16370 شهر</router-link>
            <span class="iran orange--text">و</span>
            <router-link to="/BitcoinCountry" class="iran router">248 کشور</router-link>
            <span class="iran orange--text">شامل</span>
            <router-link to="/RepublicIran" class="iran router">جمهوری اسلامی ایران</router-link>
        </p>
        <div class="text-xs-center">
            <v-btn class="white--text" color="purple" to="Signup" round><v-icon size="20px">done_all</v-icon>ثبت نام رایگان</v-btn>
        </div>
    </v-card>
</v-flex>

<v-flex pt-0>
    <v-card>
        <FormSell/>
    </v-card>
</v-flex>

<v-flex>
    <v-card height="100%" color="rgb(30, 38, 52)">
        <v-card-text class=" text-xs-center white--text">خرید بیت کوین آنلاین در جمهوری اسلامی ایران</v-card-text>
    </v-card>
        <Advertise></Advertise>
    </v-flex>

    <v-flex >
        <v-card style="background-color:rgb(30, 38, 52)">
            <v-card-text class=" text-xs-center white--text">خرید بیت کوین آنلاین در جمهوری اسلامی ایران</v-card-text>
        </v-card>
        <Advertise></Advertise>
    </v-flex>

    <v-flex>
            <v-card style="background-color:rgb(30, 38, 52)" class="text-xs-center">
                <v-card-text class="iran text-xs-center white--text">اخبار صدر سیستم</v-card-text>
                <v-divider class="secondary"></v-divider>

                <v-card-text class="contant text-xs-center"><router-link class="router" to="">ابزار بیشتر برای معاملات خاموش</router-link></v-card-text>
                <v-divider class="secondary"></v-divider>

                <v-card-text class="contant text-xs-center"><router-link class="router" to="">تغییرات صفحه ورود به سیستم</router-link></v-card-text>
                <v-divider class="secondary"></v-divider>

                <v-card-text class="contant text-xs-center"><router-link class="router" to="">جبران خسارت برای کاربران دارای تعادل نقدی</router-link></v-card-text>
                <v-divider class="secondary"></v-divider>

                <v-card-text class="contant text-xs-center"><router-link class="router" to="">سیستم جدید هزینه تراکنش برای بیت کوین</router-link></v-card-text>
                <v-divider class="secondary"></v-divider>
                
                <v-card-text class="contant text-xs-left">اطلاعات بیشتر در<router-link class="router" to=""> وبلاگ صدر سیستم </router-link></v-card-text>
            </v-card>
    </v-flex>

    {{publishAdvertise}}
    <v-flex>
        <Footer ></Footer>
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
<style scoped>
.iran{
    font-family: 'Iranian Sans';
    color: white;
}
.irans{
    font-family: 'Iranian Sans';
    font-size:16px;
}
.fontIran{
    font-family:iranian sans;
    font-size:17px;
}
.router{
    font-family:'iranian sans';
     color:rgb(43,255,92);
    text-decoration:none;
}
.router:hover{
    color:rgb(0, 140, 255);
}
</style>
