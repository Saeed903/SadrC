<template>
    <v-container fluid grid-list-xl>
        <v-layout  justify-space-around>
            <v-flex lg10 xl8>
                <v-card-text class="fontIran headline">بلیط های پشتیبانی من</v-card-text>
                <v-flex>
                    <v-card color="blue-grey darken-3">
                        <v-card-text class="fontIran text-xs-right body-1"><v-icon color="orange lighten-3" size="17px">done_all</v-icon>کاربران عزیز، با توجه به مقدار غیر معمول بلیط، زمان پاسخ فعلی ما 2 روز است. با مهربانی از شما می خواهیم که بلیط های چندگانه را در رابطه با همین مسئله باز نکنید، زیرا فقط زمان پاسخ ما را طولانی تر می کند.</v-card-text>
                    </v-card>
                </v-flex>
                <v-card-text class="fontIran ">لطفا یک لحظه از وقت خود را برای توضیح مسئله خود بیاموزید. اگر هیچ یک از گزینه های زیر با موضوع شما مطابقت نداشته باشد، لطفا "دیگر" را انتخاب کنید و در قسمت نوشتن توصیف کنید</v-card-text>
                <v-card-text class="fontIran ">لطفا بهترین گزینه را انتخاب کنید.</v-card-text>
                <v-card-text class="fontIran pt-0 subheading"><router-link class="fontsIran body-1" to=""><v-icon color="grey" size="20px">message</v-icon>گزارش تقلب</router-link></v-card-text>
                <v-card-text class="fontIran pt-0 subheading"><router-link class="fontsIran body-1" to=""><v-icon color="grey" size="20px">message</v-icon>با یک تجارت مشکوک کمک کنید</router-link></v-card-text>
                <v-card-text class="fontIran pt-0 subheading"><router-link class="fontsIran body-1" to=""><v-icon color="grey" size="20px">message</v-icon>مشکلات با معامله بیت کوین</router-link></v-card-text>
                <v-card-text class="fontIran pt-0 subheading"><router-link class="fontsIran body-1" to=""><v-icon color="grey" size="20px">message</v-icon>حساب من هک شده است</router-link></v-card-text>
                <v-card-text class="fontIran pt-0 subheading"><router-link class="fontsIran body-1" to=""><v-icon color="grey" size="20px">message</v-icon>کاربر جدید هستم</router-link></v-card-text>
                <v-card-text class="fontIran pt-0 subheading"><router-link class="fontsIran body-1" to=""><v-icon color="grey" size="20px">message</v-icon>کاربر جدید هستم</router-link></v-card-text>
                <v-card-text class="fontIran pt-0 subheading"><router-link class="fontsIran body-1" to=""><v-icon color="grey" size="20px">message</v-icon>حساب من در تعطیلات اجباری است</router-link></v-card-text>
                <v-card-text class="fontIran pt-0 subheading"><router-link class="fontsIran body-1" to=""><v-icon color="grey" size="20px">message</v-icon>با تبلیغات من مشکل دارم</router-link></v-card-text>
                <v-card-text class="fontIran pt-0 subheading"><router-link class="fontsIran body-1" to=""><v-icon color="grey" size="20px">message</v-icon>من بازخورد خشونت آمیز دریافت کرده ام</router-link></v-card-text>
                <v-card-text class="fontIran pt-0 subheading"><router-link class="fontsIran body-1" to=""><v-icon color="grey" size="20px">message</v-icon>گزارش یک اشکال</router-link></v-card-text>
                <v-card-text class="fontIran pt-0 subheading"><router-link class="fontsIran body-1" to=""><v-icon color="grey" size="20px">message</v-icon>من نمیتوانم وارد حساب کاربری شوم</router-link></v-card-text>
                <v-card-text class="fontIran pt-0 subheading"><router-link class="fontsIran body-1" to=""><v-icon color="grey" size="20px">message</v-icon>ایمیل تأیید حساب من دریافت نمی کنم</router-link></v-card-text>
                <v-card-text class="fontIran pt-0 subheading"><router-link class="fontsIran body-1" to=""><v-icon color="grey" size="20px">message</v-icon>من نمیتوانم شماره تلفنم را تأیید کنم</router-link></v-card-text>
                <v-card-text class="fontIran pt-0 subheading"><router-link class="fontsIran body-1" to=""><v-icon color="grey" size="20px">message</v-icon>دیگر</router-link></v-card-text>
            </v-flex>
        </v-layout>
    </v-container>
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