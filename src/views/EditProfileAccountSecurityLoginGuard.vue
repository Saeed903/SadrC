<template>
    <div>
        <p>گارد ورودی</p>
        <router-link to="">بازگشت به امنیت حساب</router-link>
        <p>.گزینه های امنیتی برای جلوگیری از ورود سیستم های غیر مجازاست</p>
        <v-divider></v-divider>
        <v-checkbox>تایید ورود به سیستم از مرورگرهای ناشناخته وب</v-checkbox>
        <v-btn @click="submit" class="primary">تغییر تنظیمات</v-btn>
        <p>.هر گونه تغییر به این تنظیمات نیاز به تایید ایمیل دارد</p>
    </div>
</template>
