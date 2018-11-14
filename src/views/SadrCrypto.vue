<template>
    <div>
        <div>
            <v-card class="cardHover" color="rgb(61, 61, 61)">
                <v-card-text class=" iran text-xs-center " >خرید و فروش بیت کوین در نزدیکی شما</v-card-text>
                <v-card-text class="text-xs-center title orange--text">فوری.امن.خصوصی</v-card-text>
                <v-card-text class="text-xs-center font-weight-bold title">
                    <span class="orange--text">تجارت بیت کوین</span>
                    <router-link to="/BitcoinCity" class="hoverDecoration">در 16370 شهر</router-link>
                    <span class="orange--text">و</span>
                    <router-link to="/BitcoinCountry" class="hoverDecoration">248 کشور</router-link>
                    <span class="orange--text">شامل</span>
                    <router-link to="/RepublicIran" class="hoverDecoration">جمهوری اسلامی ایران</router-link>
                </v-card-text>
                <div class="text-xs-center">
                    <v-btn class="primary signButton" slot="activator" round>ثبت نام رایگان</v-btn>
                </div>
            </v-card>
        </div>
      
        <div class="mt-5">
            <p class="iran">صدرکریپتو ساده ترین و مطمئن ترین مکان برای خرید، فروش و مدیریت ارز دیجیتال خود می باشد</p>
            <p class="text-xs-center font-weight-bold title white--text" >خرید و فروش ارز دیجیتال</p>
            <p class="text-xs-center font-weight-bold title white--text">صدرکریپتو ساده ترین و مطمئن ترین مکان برای خرید، فروش و مدیریت ارز دیجیتال خود می باشد.</p>
        </div>
        <div class="twoSection">
            <div>
                <p class="text-xs-center font-weight-bold headline white--text pt-3">خرید بیت کوین آنلاین در جمهوری اسلامی ایران</p>
            </div>
            <div>
                <Advertise></Advertise>
            </div>
        </div>

        <div class="twoSection">
            <div>
                <p class="text-xs-center font-weight-bold headline white--text pt-3">فروش بیت کوین آنلاین در جمهوری اسلامی ایران</p>
            </div>
            <div>
                <Advertise></Advertise>
            </div>
        </div>

        <div class="twoSection">
            <div>
                <p class="text-xs-center font-weight-bold headline white--text pt-3">فروش بیت کوین برای نقدی در نزدیکی جمهوری اسلامی ایران</p>
            </div>
            <div>
                <Advertise></Advertise>
            </div>
        </div>
        <div class="cardBox">
                <v-card>
                <v-card-text class="text-xs-right title font-weight-bold">اخبار صدر سیستم</v-card-text>
                <v-divider></v-divider>

                <v-card-text class="text-xs-right body-1 font-weight-medium"><router-link class="routerLink" to="">ابزار بیشتر برای معاملات خاموش</router-link></v-card-text>
                <v-divider></v-divider>

                <v-card-text class="text-xs-right body-1 font-weight-medium"><router-link class="routerLink" to="">تغییرات صفحه ورود به سیستم</router-link></v-card-text>
                <v-divider></v-divider>

                <v-card-text class="text-xs-right body-1 font-weight-medium"><router-link class="routerLink" to="">جبران خسارت برای کاربران دارای تعادل نقدی</router-link></v-card-text>
                <v-divider></v-divider>

                <v-card-text class="text-xs-right body-1 font-weight-medium"><router-link class="routerLink" to="">سیستم جدید هزینه تراکنش برای بیت کوین</router-link></v-card-text>
                <v-divider></v-divider>
                
                <v-card-text class="text-xs-left body-1 font-weight-medium">اطلاعات بیشتر در<router-link class="routerLink" to=""> وبلاگ صدر سیستم </router-link></v-card-text>
                </v-card>
        </div>
        <div>
             <Footer></Footer>
        </div>
    </div>
</template>
<script>
import Advertise from './../components/Advertise.vue'
import Footer from './../components/Footer.vue'

export default{
    data:() => ({
        isTrader:0,
        btrAddr: 'bitcoin:18JsNRxD7Tc8KDnCYkx7y98w22fgpgARMn',
        show:false,
       
    }),
    components:{
        Advertise,
        Footer,
    }
  };
</script>
<style scoped>
.iran{
    font-family: 'Iranian Sans';
    font-size: 20px;
}
.cardHover{
    border:1px solid #e3e3e3;
    box-shadow:1px 2px 2px rgb(161, 156, 156);
}
.routerLink{
    text-decoration:none;
    color:white;
}
.routerLink:hover{
    text-decoration:underline;
    color:rgb(0, 204, 255);
}
.cardBox{
    width:80%;
    margin-right:auto;
    margin-left:auto;
    display:block;
    margin-top:80px;
    margin-bottom:80px;
}
.digitalCurrency{
    margin-bottom:40px;
}
.wall{
    border:1px solid #e3e3e3;
    margin-bottom:40px;
    height:220px;
    box-shadow:1px 2px 2px rgb(161, 156, 156);
    background-color:rgb(61, 61, 61);
}
.boldText{
    text-align:center;
    font-size:25px;
    font-family:irsans;
    color:black;
    margin-top:25px;
}
.safeText{
    text-align:center;
    color:#f58220;
    font-size:25px;
    font-family:irsans;
    margin-top:25px;
}
.introduceText{
    text-align:center;
    font-size:15px;
    font-family:irsans;
    color:#337ab7;
    margin-top:25px;
    line-height:1;
}
.form{
    border:1px solid #0652f8;
    border:1px solid #e3e3e3;
    margin-bottom:20px;
}
.orangeText{
    color:#f58220;
}
.signButton{
    color:black;
    text-align:center;
    font-size:18px;
    font-family:irsans;
    text-shadow:1px 2px 10px rgb(49, 47, 47);
    text-decoration:none;
}
.hoverDecoration{
    text-decoration:none;
    color:rgb(0, 174, 255)
}
.hoverDecoration:hover{
    text-decoration:underline;
}
.bitcoinText{
    text-align:center;
    font-size:28px;
    font-family:irsans;
    color:rgb(97, 91, 91);
    text-shadow:1px 1px 4px rgb(179, 169, 169)
}
.twoSection{
    border:1px solid rgb(160, 149, 149);
    box-shadow:1px 1px 10px rgb(87, 83, 83);
    margin-top:70px;
    background-color:#727070;
}
.sadrNews{
    border:1px solid #e3e3e3;
    width:500px;
    max-width:100%;
    margin-right:auto;
    margin-left:auto;
    display:block;
    border-radius:5px;
    margin-bottom:30px;
    margin-top:30px;
}
.newsText{
    text-decoration:none;
    color:#23527c;
    margin-left:10px;
    font-size:14px;
}
.newsText:hover{
    text-decoration:underline;
}
.topNewsText{
    font-size:20px;
    color:black;
    margin-top:15px;
    margin-left:10px;
    font-family:irsans;
}
.rightText{
    text-align:right
}
.mineBitcoin{
    width:100%;
}
.topImg{
    max-width:100%;
    margin-bottom:40px;
}
.trustText{
    font-size:25px;
    font-family:irsans;
    color:black;
    text-align:center;
    text-shadow:1px 1px 4px rgb(134, 129, 129);
}
.secondTrustText{
    font-size:20px;
    font-family:irsans;
    color:rgb(59, 54, 54);
    text-align:center;
    text-shadow:1px 1px 4px rgb(138, 131, 131);
}

</style>
