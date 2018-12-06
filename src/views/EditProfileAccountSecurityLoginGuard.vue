<template>
    <v-layout align-justify justify-center>
        <v-flex dflex xs12 sm8 md8 lg6>
            <v-card-text class="fontIrans">
                <p class="fontIran">گارد ورودی</p>
                <p><router-link class="router" to="/EditProfileIdentifyVerify">بازگشت به امنیت حساب</router-link></p>
                <p>گزینه های امنیتی برای جلوگیری از ورود سیستم های غیر مجازاست.</p>
                <v-divider></v-divider>
                <v-checkbox  label="تایید ورود به سیستم از مرورگرهای ناشناخته وب"></v-checkbox>
                <p><v-btn @click="submit" class="primary" to="/EditProfileChangeEmail">تغییر تنظیمات</v-btn></p>
                <p>هر گونه تغییر به این تنظیمات نیاز به تایید ایمیل دارد.</p>
            </v-card-text>
        </v-flex>
    </v-layout>
</template>
<style scoped>

.router{
    font-family:'iranian sans';
    color:rgb(0, 153, 255);
    text-decoration:none;
}
.router:hover{
    color:rgb(0, 140, 255);
}

</style>
