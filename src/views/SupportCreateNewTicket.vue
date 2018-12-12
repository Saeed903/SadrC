<template>
   <div>
        <v-card-text class="fontIran">بلیط های پشتیبانی من</v-card-text>
        <v-flex>
            <v-card color="blue-grey darken-3">
                <v-card-text class="fontIrans text-xs-right"><v-icon color="orange lighten-3" size="17px">done_all</v-icon>کاربران عزیز، با توجه به مقدار غیر معمول بلیط، زمان پاسخ فعلی ما 2 روز است. با مهربانی از شما می خواهیم که بلیط های چندگانه را در رابطه با همین مسئله باز نکنید، زیرا فقط زمان پاسخ ما را طولانی تر می کند.</v-card-text>
            </v-card>
            <v-card-text class="fontIrans text-xs-right"><v-icon color="red" size="17px">warning</v-icon>لطفا یک لحظه از وقت خود را برای توضیح مسئله خود بیاموزید. اگر هیچ یک از گزینه های زیر با موضوع شما مطابقت نداشته باشد، لطفا "دیگر" را انتخاب کنید و در قسمت نوشتن توصیف کنید</v-card-text>
        </v-flex>
        <v-card-text class="fontIran">لطفا بهترین گزینه را انتخاب کنید.</v-card-text><br>
        <v-layout row wrap>
            <v-flex sm3 md3 lg3 xl3>
                    <v-card-text class="pt-0"><router-link class="textCard" to=""><v-icon color="grey" size="20px">message</v-icon>گزارش تقلب</router-link><br></v-card-text>
                    <v-card-text class="pt-0"><router-link class="textCard" to=""><v-icon color="grey" size="20px">message</v-icon>با یک تجارت مشکوک کمک کنید</router-link><br></v-card-text>
                    <v-card-text class="pt-0"><router-link class="textCard" to=""><v-icon color="grey" size="20px">message</v-icon>مشکلات با معامله بیت کوین</router-link><br></v-card-text>
                    <v-card-text class="pt-0"><router-link class="textCard" to=""><v-icon color="grey" size="20px">message</v-icon>حساب من هک شده است</router-link><br></v-card-text>
                    <v-card-text class="pt-0"><router-link class="textCard" to=""><v-icon color="grey" size="20px">message</v-icon>کاربر جدید هستم</router-link><br></v-card-text>
                    <v-card-text class="pt-0"><router-link class="textCard" to=""><v-icon color="grey" size="20px">message</v-icon>کاربر جدید هستم</router-link><br></v-card-text>
                    <v-card-text class="pt-0"><router-link class="textCard" to=""><v-icon color="grey" size="20px">message</v-icon>حساب من در تعطیلات اجباری است</router-link><br></v-card-text>
            </v-flex>
            <v-flex sm3 md3 lg3 xl3>
                    <v-card-text class="pt-0"><router-link class="textCard" to=""><v-icon color="grey" size="20px">message</v-icon>با تبلیغات من مشکل دارم</router-link><br></v-card-text>
                    <v-card-text class="pt-0"><router-link class="textCard" to=""><v-icon color="grey" size="20px">message</v-icon>من بازخورد خشونت آمیز دریافت کرده ام</router-link><br></v-card-text>
                    <v-card-text class="pt-0"><router-link class="textCard" to=""><v-icon color="grey" size="20px">message</v-icon>گزارش یک اشکال</router-link><br></v-card-text>
                    <v-card-text class="pt-0"><router-link class="textCard" to=""><v-icon color="grey" size="20px">message</v-icon>من نمیتوانم وارد حساب کاربری شوم</router-link><br></v-card-text>
                    <v-card-text class="pt-0"><router-link class="textCard" to=""><v-icon color="grey" size="20px">message</v-icon>ایمیل تأیید حساب من دریافت نمی کنم</router-link><br></v-card-text>
                    <v-card-text class="pt-0"><router-link class="textCard" to=""><v-icon color="grey" size="20px">message</v-icon>من نمیتوانم شماره تلفنم را تأیید کنم</router-link><br></v-card-text>
                    <v-card-text class="pt-0"><router-link class="textCard" to=""><v-icon color="grey" size="20px">message</v-icon>دیگر</router-link><br></v-card-text>
            </v-flex>
        </v-layout>
   </div>
</template>
<style scoped>

</style>
