<template>
    <div>
        <section>
            <p class="fontIran text-xs-center">مشخصات نام کاربری شما</p>
            <p class="fontIrans">شما ممکن است نیاز به نام خود را قبل از اینکه بتوانید از بعضی از تبلیغات بیت کوین را بخرید، تنظیم کنید. پس از تعیین نام واقعی آن به صورت عمومی نمایش داده نمی شود، فقط نشان می دهد که معامله گران بیت کوین با آنها شما معاملات را برای خرید بیت کوین داشته اید. نام تنها یک بار و پس از اینکه توسط یک فروشنده بیت کوین تأیید شد، نمی توان تغییر داد.</p>
            <p class="fontIrans">نام کامل خود را وارد کنید، همانطور که در حساب برگشت و اطلاعات مربوط به خرید آنلاین مرتبط است.</p>
            <v-flex xs8 sm5 md4 lg4 xl3>
                <v-text-field
                class="fontIrans pt-0"
                label="اسم شما"
                color="cyan accent-2"
                clearable
                >
                </v-text-field>
            </v-flex>
            <v-btn to="" @click="submit" color="primary" class="fontIran">تایید و ارسال</v-btn>
        </section>
    </div>
</template>
