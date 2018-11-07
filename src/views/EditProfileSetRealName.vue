<template>
<v-container>
    <v-layout align-justify justify-center>
        <v-card>
            <v-card-text>
                <v-card-text class="headline">
                    <p class="text-xs-center">اسم شما</p>
                </v-card-text>
                <p class="subheading">شما ممکن است نیاز به نام خود را قبل از اینکه بتوانید از بعضی از تبلیغات بیت کوین را بخرید، تنظیم کنید. <br>پس از تعیین نام واقعی آن به صورت عمومی نمایش داده نمی شود، فقط نشان می دهد که معامله گران بیت کوین <br>با آنها شما معاملات را برای خرید بیت کوین داشته اید. نام تنها یک بار و پس از اینکه توسط یک فروشنده<br> بیت کوین تأیید شد، نمی توان تغییر داد.</p>
                <v-text-field label="اسم شما"></v-text-field>
                <p class="subheading">نام کامل خود را وارد کنید، همانطور که در حساب برگشت و اطلاعات مربوط به خرید آنلاین مرتبط است.</p>
                <v-flex text-xs-center>
                <v-btn @click="submit" class="primary">نام واقعی را تنظیم کنید</v-btn>
                </v-flex>
            </v-card-text>
        </v-card>
    </v-layout>
</v-container>
</template>
