<template>
    <div>
        <v-card>
        <v-layout row wrap>
            <v-card-text class="fontIran text-xs-center">ویرایش پروفایل</v-card-text>

            <v-flex xs12 sm3 md2>
                <v-card>
                    <v-btn class="pr-3 fontIran sm4" color="info caption" round to="">اطلاعات پایه کاربر</v-btn>
                </v-card>
            </v-flex>
            <v-flex xs12 sm3 md2>
                <v-card>
                    <v-btn class="pr-3 fontIran sm4" color="info caption" round to="">تغییر رمز عبور</v-btn>
                </v-card>
            </v-flex>
            <v-flex xs12 sm3 md2>
                <v-card>
                    <v-btn class="pr-3 fontIran sm4" color="info caption" round to="">تغییر آدرس ایمیل</v-btn>
                </v-card>
            </v-flex>
            <v-flex xs12 sm3 md2>
                <v-card>
                    <v-btn class="pr-3 fontIran sm4" color="info caption" round to="">تایید</v-btn>
                </v-card>
            </v-flex>
            <v-flex xs12 sm3 md2> 
                <v-card>
                    <v-btn class="pr-3 fontIran sm4" color="info caption" round to="">امنیت</v-btn>
                </v-card>
            </v-flex>
            <v-flex xs12 sm3 md2>
                <v-card>
                    <v-btn class="pr-3 fontIran sm4" color="info caption" round to="">اسم واقعی</v-btn>
                </v-card>
            </v-flex>
        </v-layout>

        <v-card-text class="fontIran font-weight-medium caption pt-4"><v-icon color="red" size="18px">warning</v-icon>شما هنوز ایمیل خود را تایید نکرده اید شما حدود 2 روز و 22 ساعت تا زمانی که ایمیل شما تایید شده است.لطفا به زودی صندوق پستی را برای تاییدذ بررسی کنید.<router-link to="" class="fontsIran caption">ارسال آدرس ایمیل</router-link></v-card-text>
        <v-card-text class="fontIran font-weight-medium caption pt-0"><v-icon color="red" size="18px">warning</v-icon>شما شماره تلفن تایید شده را به حساب کاربری خود اضافه نکرده اید.<router-link to="" class="fontsIran caption">تایید شماره تلفن</router-link></v-card-text>
        <v-card-text class="fontIran font-weight-medium caption pt-0"><v-icon color="red" size="18px">warning</v-icon>شما هنوز نام واقعی خود را به حساب کاربری خود تنظیم نکرده اید.<router-link to="" class="fontsIran caption">ایجاد نام واقعی</router-link></v-card-text>
        </v-card>
    </div>
</template>
<script>
    export default{

    }
</script>
<style scoped>
.fontIran{
    font-family:'Iranian Sans';
    padding-left:20px;
}
.fontsIran{
    font-family:'iranian sans';
    color:rgb(0, 153, 255);
    text-decoration:none;
}
.fontsIran:hover{
    color:rgb(0, 140, 255);
}

</style>
