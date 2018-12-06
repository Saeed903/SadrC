<template>
    <v-layout align-justify justify-center>
        <v-flex dflex xs12 sm8 md8 lg6>
            <v-card-text>
                <p class="fontIran text-xs-center">اسم شما</p>
                <p class="fontIrans">شما ممکن است نیاز به نام خود را قبل از اینکه بتوانید از بعضی از تبلیغات بیت کوین را بخرید، تنظیم کنید. پس از تعیین نام واقعی آن به صورت عمومی نمایش داده نمی شود، فقط نشان می دهد که معامله گران بیت کوین با آنها شما معاملات را برای خرید بیت کوین داشته اید. نام تنها یک بار و پس از اینکه توسط یک فروشنده بیت کوین تأیید شد، نمی توان تغییر داد.</p>
                <v-text-field class="fontIrans pt-0" label="اسم شما"></v-text-field>
                <p class="fontIrans">نام کامل خود را وارد کنید، همانطور که در حساب برگشت و اطلاعات مربوط به خرید آنلاین مرتبط است.</p>
                <v-flex text-xs-center>
                    <v-btn to="/EditProfileVerifyPhoneNumberVerification" @click="submit" class="primary fontIran">نام واقعی را تنظیم کنید</v-btn>
                </v-flex>
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
