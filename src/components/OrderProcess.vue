<template>
<div>
    <div v-if="!confirmEmailDate && userId">
        <p class="fontIran">شما باید ایمیل خود را تایید نمایید.قبل از آنکه سفارش بدهید ایمیل فرستاده شده را پیدا کرده و پس از تایید دوباره به این صفحه بازگردید.
        اگر دوباره خطایی ملاحضه کردید می توانید با پشتیبانی<router-link class="router" to="" >پشتیبانی</router-link>  تماس بگیرید.</p>
        <v-btn to="/EditProfileAccountSecurity" block color="secondary" dark class="fontIran"><v-icon >send</v-icon>ارسال مجدد تاییدیه ایمیل</v-btn>
    </div>
    <v-layout>
        <v-card-text v-if="confirmEmailDate || !userId">
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
               
            <div class="fontIran" v-if="!userId">
                <p class="titled">ثبت نام و بلافاصله خرید بیت کوین</p>
                <v-btn to="Signup"  color="secondary" block><v-icon></v-icon>ثبت نام رایگان</v-btn>
                <p class="type">ثبت نام رایگان است و تنها 30 ثانیه طول می کشد.</p>
            </div>
        </v-card-text>
    </v-layout>
        
    <div v-if="userId && confirmEmailDate">
        <v-textarea
            outline
            color="cyan accent-2"
            hint="اطلاعات تماس خود و اطلاعاتی که لازم است که آگهی دهنده بداند را در اینجا وارد کنید"
            clearable
        ></v-textarea>
        <v-btn class="text-xs-center fontIran">ارسال درخواست تجارت</v-btn>
    </div>
</div>
</template>
<script>
import { mapState } from 'vuex'
export default {
    name:'OrderProcess',
   
    computed:{
        ...mapState('auth', { payload: 'payload'}),
        confirmEmailDate(){
            let payload = this.payload

            return payload != null ? payload.user.emailVerifiedDate: null;
        
        },
        userId (){
            let payload = this.payload

            return payload != null ? payload.userId: null;
        }
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

