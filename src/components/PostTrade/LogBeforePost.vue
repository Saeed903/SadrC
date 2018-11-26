<template>
    <v-layout row wrap >
        <v-flex>
            <v-card-text>
                <p class="fontIran text-xs-center">ثبت آگهی {{currency}}</p>
                <p class="fontIran text-xs-center"><v-icon color="red" size="16px">warning</v-icon>لطفا قبل از ثبت آگهی <router-link to="/Login" class="fontsIran">ورود</router-link> یا <router-link to="/signUp" class="fontsIran caption">ثبت نام</router-link> کنید!</p>
            </v-card-text>

            <v-divider></v-divider>

            <v-card-text>
                <p class="fontIran text-xs-center">قوانین و مقررات تبلیغاتی:</p>
                <ul class="fontIran pr-3">
                <li class="mb-3">برای نمایش تبلیغات شما باید بیت کوین را در کیف پول صدر کریپتو خود داشته باشید. شما برای تبلیغات با روش های پرداخت آنلاین و 0.04 بیت کوین یا بیشتر برای تبلیغات محلی (نقد) نیاز به 0.04 بیت کوین یا بیشتر دارید.</li>
                <li class="mb-3">برخی از روش های پرداخت مستلزم آن هستند که قبل از اینکه آگهی های شما قابل مشاهده باشند، باید شناسه،شناسایی شوند.</li>
                <li class="mb-3">هر تبلیغ کننده هزینه های تراکنش تکمیل شده 1٪ از کل مبلغ تجاری است<span><router-link to="" class="fontsIran caption">تمام هزینه ها را در صفحه هزینه های ما مشاهده کنید.</router-link></span></li>
                <li class="mb-3">هنگامی که یک بازرگانی باز شود، قیمت نهایی است، مگر اینکه یک اشتباه روشن در قیمت گذاری وجود داشته باشد.</li>
                <li class="mb-3">شما مجاز به خرید یا فروش بیت کوین از طرف شخص دیگری (واسطه) نیستید.</li>
                <li class="mb-3">شما فقط می توانید از حساب های پرداخت شده که به نام خود ثبت شده (بدون پرداخت شخص ثالث!) استفاده کنید.</li>
                <li class="mb-3">شما باید جزئیات پرداخت خود را در تبلیغات و یا در چت تجاری قرار دهید.</li>
                <li class="mb-3">همه ارتباطات باید در صدر کریپتواتفاق بیافتد.</li>
                <li class="mb-3">روش های پرداخت مشخص شده است ریسک بالا داشتن یک خطر عمده تقلب .هنگام استفاده از روشهای پرداخت با ریسک بالا، مراقب باشید و همیشه آی دی را تأیید کنید.</li>
                </ul>
                <v-divider></v-divider>
            </v-card-text>
        </v-flex>
    </v-layout>
</template>
<style scoped>
.fontIran{
    font-family:'Iranian Sans';
    padding-left:20px;
}
.fontsIran{
    font-family:'iranian sans';
    color:#00B8D4;
    text-decoration:none;
}
.fontsIran:hover{
    color:#18FFFF;
}

</style>
