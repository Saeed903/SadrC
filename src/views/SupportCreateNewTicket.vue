<template>
    <div>
        <v-card-text class="fontIran text-xs-center pt-5">بلیط های پشتیبانی من</v-card-text>
        <v-card-text class="describeText"><v-icon color="red" size="25px">alarm_add</v-icon>لطفا یک لحظه از وقت خود را برای توضیح مسئله خود بیاموزید. اگر هیچ یک از گزینه های زیر با موضوع شما مطابقت نداشته باشد، لطفا "دیگر" را انتخاب کنید و در قسمت نوشتن توصیف کنید</v-card-text>

        <v-card-text class="fontIran pb-0 pt-5">لطفا بهترین گزینه را انتخاب کنید.</v-card-text><br>
        <v-divider color="grey"></v-divider>
        <v-layout row wrap>
            <v-flex>
                <v-card-text class="pt-0"><v-icon class="pl-1" color="grey" size="20px">email</v-icon><router-link class="textCard" to="">گزارش تقلب</router-link><br></v-card-text>
                <v-card-text class="pt-0"><v-icon class="pl-1" color="grey" size="20px">email</v-icon><router-link class="textCard" to="">با یک تجارت مشکوک کمک کنید</router-link><br></v-card-text>
                <v-card-text class="pt-0"><v-icon class="pl-1" color="grey" size="20px">email</v-icon><router-link class="textCard" to="">مشکلات با معامله بیت کوین</router-link><br></v-card-text>
                <v-card-text class="pt-0"><v-icon class="pl-1" color="grey" size="20px">email</v-icon><router-link class="textCard" to="">حساب من هک شده است</router-link><br></v-card-text>
                <v-card-text class="pt-0"><v-icon class="pl-1" color="grey" size="20px">email</v-icon><router-link class="textCard" to="">کاربر جدید هستم</router-link><br></v-card-text>
                <v-card-text class="pt-0"><v-icon class="pl-1" color="grey" size="20px">email</v-icon><router-link class="textCard" to="">کاربر جدید هستم</router-link><br></v-card-text>
                <v-card-text class="pt-0"><v-icon class="pl-1" color="grey" size="20px">email</v-icon><router-link class="textCard" to="">حساب من در تعطیلات اجباری است</router-link><br></v-card-text>
            </v-flex>
            <v-flex>
                <v-card-text class="pt-0"><v-icon class="pl-1" color="grey" size="20px">email</v-icon><router-link class="textCard" to="">با تبلیغات من مشکل دارم</router-link><br></v-card-text>
                <v-card-text class="pt-0"><v-icon class="pl-1" color="grey" size="20px">email</v-icon><router-link class="textCard" to="">من بازخورد خشونت آمیز دریافت کرده ام</router-link><br></v-card-text>
                <v-card-text class="pt-0"><v-icon class="pl-1" color="grey" size="20px">email</v-icon><router-link class="textCard" to="">گزارش یک اشکال</router-link><br></v-card-text>
                <v-card-text class="pt-0"><v-icon class="pl-1" color="grey" size="20px">email</v-icon><router-link class="textCard" to="">من نمیتوانم وارد حساب کاربری شوم</router-link><br></v-card-text>
                <v-card-text class="pt-0"><v-icon class="pl-1" color="grey" size="20px">email</v-icon><router-link class="textCard" to="">ایمیل تأیید حساب من دریافت نمی کنم</router-link><br></v-card-text>
                <v-card-text class="pt-0"><v-icon class="pl-1" color="grey" size="20px">email</v-icon><router-link class="textCard" to="">من نمیتوانم شماره تلفنم را تأیید کنم</router-link><br></v-card-text>
                <v-card-text class="pt-0"><v-icon class="pl-1" color="grey" size="20px">email</v-icon><router-link class="textCard" to="">دیگر</router-link><br></v-card-text>
            </v-flex>
        </v-layout>
       
</div>
</template>
<script>
export default {

}
</script>
<style scoped>
.logCard{
  border:1px solid #18FFFF;
  box-shadow:0px 0px 15px 1px #18FFFF;
}
.describeText{
    font-family:iranian sans;
    font-size:15px;
    color:#E0E0E0;
    text-align:justify;
}
</style>
