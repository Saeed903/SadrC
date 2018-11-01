<template>
    <div>
        <div class="topImg">
            <img class="mineBitcoin" src="./../../public/img/CryptoImage/photoCoin.jpg" alt="">
        </div>
        <div class="wall">
            <p class="boldText">خرید و فروش بیت کوین در نزدیکی شما</p>
            <p class="safeText">.فوری. امن. خصوصی</p>
            <p class="introduceText">
                <span class="orangeText">بیت کوین تجاری</span>
                <router-link to="/BitcoinCity" class="hoverDecoration">در 16370 شهر</router-link>
                <span class="orangeText">و</span>
                <router-link to="/BitcoinCountry" class="hoverDecoration">248 کشور</router-link>
                <span class="orangeText">شامل</span>
                <router-link to="/RepublicIran" class="hoverDecoration">جمهوری اسلامی ایران</router-link>
            </p>
            <v-btn class="signButton" color="success" to="/Signup" block>ثبت نام رایگان</v-btn>
        </div>  
        <div class="digitalCurrency">
            <p class="trustText">خرید و فروش ارز دیجیتال</p>
            <p class="secondTrustText">SadrCrytpo ساده ترین و مطمئن ترین مکان برای خرید، فروش و مدیریت ارز دیجیتال خود است.</p>
        </div>
        <div class="twoSection">
            <div>
                <p class="bitcoinText">خرید بیت کوین آنلاین در جمهوری اسلامی ایران</p>
            </div>
            <div>
                <Transaction></Transaction>
            </div>
        </div>

        <div class="twoSection">
            <div>
                <p class="bitcoinText">فروش بیت کوین آنلاین در جمهوری اسلامی ایران</p>
            </div>
            <div>
                <Transaction></Transaction>
            </div>
        </div>

        <div class="twoSection">
            <div>
                <p class="bitcoinText">فروش بیت کوین برای نقدی در نزدیکی جمهوری اسلامی ایران</p>
            </div>
            <div>
                <Transaction></Transaction>
            </div>
        </div>
       
        <div class="sadrNews">
            <p class="topNewsText">sadrCrypto.com news</p>
            <v-divider class="my-3"></v-divider>
            <p><router-link to="MoreToolSadrCrypto" class="newsText">ابزارهای بیشتر برای معاملات</router-link></p>
            <v-divider class="my-3"></v-divider>
            <p> <router-link to="LogInPageChange" class="newsText">تغییر صفحه ورود به سیستم</router-link></p>
            <v-divider class="my-3"></v-divider>
            <p><router-link to="Compensation" class="newsText">جبران برای کاربران متعلق به Bash (BCH) تعادل</router-link></p>
            <v-divider class="my-3"></v-divider>
            <p><router-link to="SadrCryptoStatement" class="newsText">بیانیه sadrCrypto در مورد چنگال سخت ممکن در 1 آگوست 2017</router-link></p>
            <v-divider class="my-3"></v-divider>
            <p><router-link to="TransactionSystem" class="newsText">سیستم هزینه معامله بیت کوین جدید</router-link></p>
            <p class="rightText">بیشتر بخوانید<router-link to="" class="newsText">sadrCrypto.com blog</router-link></p>
        </div>
        
        <p>{{btrAddr}}</p>
        <qrcode-vue :value="btrAddr.slice(8)"></qrcode-vue>
        <div>
             <Footer></Footer>
        </div>
    </div>
</template>
<script>
import Transaction from './../components/Advertise.vue'
import Footer from './../components/Footer.vue'
import QrcodeVue from 'qrcode.vue'

export default{
    data:() => ({
        isTrader:0,
        btrAddr: 'bitcoin:18JsNRxD7Tc8KDnCYkx7y98w22fgpgARMn'
    }),
    components:{
        Transaction,
        Footer,
        QrcodeVue
    }
  };
</script>
<style scoped>
.digitalCurrency{
    margin-bottom:40px;
}
.wall{
    background-color:#f5f5f5;
    border:1px solid #e3e3e3;
    margin-bottom:40px;
    height:220px;
    box-shadow:1px 1px 10px rgb(87, 83, 83);
}
.boldText{
    text-align:center;
    font-size:25px;
    font-family:Georgia;
    color:black;
    margin-top:25px;
}
.safeText{
    text-align:center;
    color:#f58220;
    font-size:25px;
    font-family:b titr;
    margin-top:25px;
}
.introduceText{
    text-align:center;
    font-size:15px;
    font-family:b titr;
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
    font-family:b nazanin;
    text-shadow:1px 2px 10px rgb(49, 47, 47);
    text-decoration:none;
}
.hoverDecoration{
    text-decoration:none;
}
.hoverDecoration:hover{
    text-decoration:underline;
    text-shadow:1px 1px 4px rgb(137, 137, 235);
}
.bitcoinText{
    text-align:center;
    font-size:28px;
    font-family:b titr;
    color:rgb(97, 91, 91);
    text-shadow:1px 1px 4px rgb(179, 169, 169)
}
.twoSection{
    border:1px solid rgb(160, 149, 149);
    box-shadow:1px 1px 10px rgb(87, 83, 83);
    margin-top:50px;
    background-color:#f3f0f0;
}
.sadrNews{
    border:1px solid #e3e3e3;
    background-color:#f5f5f5;
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
    font-family:b nazanin;
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
    font-family:b nazanin;
    color:black;
    text-align:center;
    text-shadow:1px 1px 4px rgb(134, 129, 129);
}
.secondTrustText{
    font-size:20px;
    font-family:b nazanin;
    color:rgb(59, 54, 54);
    text-align:center;
    text-shadow:1px 1px 4px rgb(138, 131, 131);
}


</style>
