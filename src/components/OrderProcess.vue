<template>
<v-layout column>
   
        <div v-if="!confirmEmail && logged">
            <v-card-text class="fontIran">
                <p>شما باید ایمیل خود را تایید نمایید.قبل از آنکه سفارش بدهید ایمیل فرستاده شده را پیدا کرده و پس از تایید دوباره به این صفحه بازگردید.
                اگر دوباره خطایی ملاحضه کردید می توانید با پشتیبانی<router-link class="router" to="" >پشتیبانی</router-link>  تماس بگیرید.</p>
                <v-btn to="/EditProfileAccountSecurity" block color="secondary" dark class="fontIran"><v-icon >send</v-icon>ارسال مجدد تاییدیه ایمیل</v-btn>
            </v-card-text>
        </div>
<v-layout>
    <v-card>
        <v-card-text>
            <div v-if="confirmEmail || !logged">
                <p class="fontIran">چقدر می خواهید خرید کنید؟</p>
                <v-layout>
                    <v-flex d-flex xs12 sm5 md5>
                        <v-text-field
                            outline
                            clearable
                            label="بیت کوین"
                            type="number"
                            value="0.00000000"
                        >
                        </v-text-field>
                    </v-flex>
                    <v-flex d-flex xs12 sm5 md5>
                        <v-text-field
                            outline
                            clearable
                            label="ریال"
                            type="number"
                            value="0.00"
                            clear
                        >
                        </v-text-field>
                    </v-flex>
                </v-layout>
            </div>

            <div class="fontIran" v-if="!logged">
                <p class="titled">ثبت نام و بلافاصله خرید بیت کوین</p>
                <v-btn to="Signup"  color="secondary"><v-icon></v-icon>ثبت نام رایگان</v-btn>
                <p class="type">ثبت نام رایگان است و تنها 30 ثانیه طول می کشد.</p>
            </div>
        </v-card-text>
    </v-card>
</v-layout>
    
        <div v-if="logged && confirmEmail">
            <v-textarea
                outline
                color="cyan accent-2"
                hint="اطلاعات تماس خود و اطلاعاتی که لازم است که آگهی دهنده بداند را در اینجا وارد کنید"
                clearable
            ></v-textarea>
            <v-btn class="text-xs-center fontIran" >ارسال درخواست تجارت</v-btn>
        </div>
    
        
    <v-flex pt-2 v-if="!logged " d-flex xs12 sm12 md12 lg12>
        <v-expansion-panel>
            <v-expansion-panel-content
            v-for="(item,i) in items"
            :key="i"
            expand-icon="mdi-menu-down"
            >
            <div class="fontIran text-xs-right" slot="header">{{item.title}}</div>
                <v-card>
                    <v-card-text class="fontIran text-xs-right">{{item.persianTitle}}</v-card-text>
                </v-card>
            </v-expansion-panel-content>
        </v-expansion-panel>
    </v-flex>
    
</v-layout>
</template>
<script>
import { mapState } from 'vuex'
export default {
    name:'OrderProcess',
    data: () => {
        return{
            items:[
                {title:'چگونه می توان شروع کرد و با معامله گر تماس گرفت؟', persianTitle:'صدرکریپتو یک مبادله بیت کوین برابر با هم است. ما یک بازار است که کاربران می توانند بیت کوین ها را از یکدیگر خریداری و فروش کنند. کاربران که به عنوان معامله گران نامیده می شوند، تبلیغات با قیمت و روش پرداخت که می خواهند ارائه دهند. شما می توانید وب سایت ما برای تبلیغات تجاری و جستجوی روش پرداختی که ترجیح می دهید را مرور کنید. شما می توانید معامله گران خرید و فروش Bitcoins آنلاین را برای بیش از 60 روش مختلف پرداخت پیدا کنید.اگر شما به sadrCrypto جدید هستید و می خواهید بیت کوین را خریداری کنید، لطفا به نحوه خرید راهنمای ما برای یادگیری نحوه خرید بیت کوین نگاه کنید.'},
                {title:'نحوه پرداخت آنلاین', persianTitle:'اتریوم'},
                {title:'لغو تجارت', persianTitle:'زدکش'},
                
            ]
        }
    },

    computed:{
        ...mapState(['logged', 'confirmEmail']),
    }
}
</script>
<style scoped>
.titled{
  font-family: Iranian Sans;
  font-size: 18px; 
}

.headline{
  text-decoration: none;
  padding-right:10px;
  color:rgb(133, 129, 129);
}
.fontIran{
font-family: Iranian Sans;
font-size: 13px;

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

