<template>
<v-container fluid grid-list-md>
    <v-layout column>
        <v-flex d-flex>
            <v-card color="indigo" dark>
                <v-card-text>
                    <p>گارد ورودی</p>
                    <router-link to="/EditProfileIdentifyVerify">بازگشت به امنیت حساب</router-link>
                    <p>.گزینه های امنیتی برای جلوگیری از ورود سیستم های غیر مجازاست</p>
                    <v-divider></v-divider>
                    <v-checkbox>تایید ورود به سیستم از مرورگرهای ناشناخته وب</v-checkbox>
                    <v-btn @click="submit" class="primary" to="/EditProfileChangeEmail">تغییر تنظیمات</v-btn>
                    <p>.هر گونه تغییر به این تنظیمات نیاز به تایید ایمیل دارد</p>
                </v-card-text>
            </v-card>
        </v-flex>
    </v-layout>
</v-container>
</template>
