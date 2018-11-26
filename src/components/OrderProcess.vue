<template>
    <div>
         <v-flex d-flex>
            <v-card>
                <v-card-text class="fontIran">
                    <div v-if="!confirmEmail && logged">
                        <v-flex d-flex>
                            <v-layout row wrap>
                                <v-flex d-flex xs12>
                                    <v-card-text class="fontIran">
                                        <p>شما باید ایمیل خود را تایید نمایید.قبل از آنکه سفارش بدهید ایمیل فرستاده شده را پیدا کرده و پس از تایید دوباره به این صفحه بازگردید.
                                        اگر دوباره خطایی ملاحضه کردید می توانید با پشتیبانی<router-link class="router" to="" >پشتیبانی</router-link>  تماس بگیرید.</p>
                                        <v-btn to="/EditProfileAccountSecurity" block color="secondary" dark class="fontIran"><v-icon >send</v-icon>ارسال مجدد تاییدیه ایمیل</v-btn>
                                    </v-card-text>
                                </v-flex>
                            </v-layout>
                        </v-flex>
                    </div>

                    <div v-if="confirmEmail || !logged">
            
                        <p>چقدر می خواهید خرید کنید؟</p>
                
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

                    <div v-if="!logged">
                        <p class="titled">ثبت نام و بلافاصله خرید بیت کوین</p>
                        <v-btn to="Signup" block color="secondary"><v-icon></v-icon>ثبت نام رایگان</v-btn>
                        <p class="type">ثبت نام رایگان است و تنها 30 ثانیه طول می کشد.</p>
                    </div>
         
                    <div v-if="logged && confirmEmail">
                        <v-textarea
                            outline
                            placeholder="اطلاعات تماس خود و اطلاعاتی که لازم است که آگهی دهنده بداند را در اینجا وارد کنید"
                            clearable
                        ></v-textarea>
                        <v-btn block >ارسال درخواست تجارت</v-btn>
                    </div>
                  </v-card-text>
            </v-card>
        </v-flex>

        <v-flex>
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
        
    </div>
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
.fontIran{
    font-family: Iranian Sans;
    font-size: 14px;
}
.titled{
    font-size: 18px;
    color:aqua
}
.type{
font-size: 12px;
}
.btn{
    color:blue
}
</style>

