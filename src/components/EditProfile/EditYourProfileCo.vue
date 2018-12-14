<template>
    <div>
        
        <v-layout row wrap>
            <v-card-text class="fontIran text-xs-center">ویرایش پروفایل</v-card-text>

            <v-flex xs12 sm3 md2>
                <v-btn class="pr-3 fontsIran sm4" color="info caption" round to="">اطلاعات پایه کاربر</v-btn>
            </v-flex>
            <v-flex xs12 sm3 md2>
                <v-btn class="pr-3 fontsIran sm4" color="info caption" round to="">تغییر رمز عبور</v-btn>
            </v-flex>
            <v-flex xs12 sm3 md2>
                <v-btn class="pr-3 fontsIran sm4" color="info caption" round to="EditProfileChangeEmail">تغییر آدرس ایمیل</v-btn>
            </v-flex>
            <v-flex xs12 sm3 md2>
                <v-btn class="pr-3 fontsIran sm4" color="info caption" round to="">تایید</v-btn>
            </v-flex>
            <v-flex xs12 sm3 md2> 
                <v-btn class="pr-3 fontsIran sm4" color="info caption" round to="EditProfileAccountSecurity">امنیت</v-btn>
            </v-flex>
            <v-flex xs12 sm3 md2>
                <v-btn class="pr-3 fontsIran sm4" color="info caption" round to="EditProfileIdentifyVerify">اسم واقعی</v-btn>
            </v-flex>
        </v-layout>

        <v-card class="elevation-24">
            <v-card-text class="fontIran font-weight-medium caption pt-4"><v-icon color="red" size="15px">info</v-icon>شما هنوز ایمیل خود را تایید نکرده اید شما حدود 2 روز و 22 ساعت تا زمانی که ایمیل شما تایید شده است.لطفا به زودی صندوق پستی را برای تاییدذ بررسی کنید.<router-link to="" class="textCard">ارسال به آدرس ایمیل</router-link></v-card-text>
            <v-card-text class="fontIran font-weight-medium caption pt-0"><v-icon color="red" size="15px">info</v-icon>شما شماره تلفن تایید شده را به حساب کاربری خود اضافه نکرده اید.<router-link to="EditProfileVerifyPhoneNumberVerification" class="textCard">تایید شماره تلفن</router-link></v-card-text>
            <v-card-text class="fontIran font-weight-medium caption pt-0"><v-icon color="red" size="15px">info</v-icon>شما هنوز نام واقعی خود را به حساب کاربری خود تنظیم نکرده اید.<router-link to="EditProfileSetRealName" class="textCard">ایجاد نام واقعی</router-link></v-card-text>
        </v-card>

    </div>
</template>
<script>
    export default{

    }
</script>
<style scoped>


</style>
