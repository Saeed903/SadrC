<template>
    <div>
        <v-card>
            <v-card-text class="fontIran text-xs-right subheading">ویرایش پروفایل</v-card-text>
        </v-card>

        <v-card class="pb-3 pt-2">
            <span class="mr-3"><router-link class="fontsIran" to="">اطلاعات پایه کاربر</router-link></span><br>
            <span class="mr-3"><router-link class="fontsIran" to="">تغییر رمز عبور</router-link></span><br>
            <span class="mr-3"><router-link class="fontsIran" to="">تغییر آدرس ایمیل</router-link></span><br>
            <span class="mr-3"><router-link class="fontsIran" to="">تایید</router-link></span><br>
            <span class="mr-3"><router-link class="fontsIran" to="">امنیت</router-link></span><br>
            <span class="mr-3"><router-link class="fontsIran" to="">اسم واقعی</router-link></span>
        </v-card>

        <v-card>
            <v-card-text class="fontIran"><v-icon color="red" size="20px">warning</v-icon>شما هنوز ایمیل خود را تایید نکرده اید شما حدود 2 روز و 22 ساعت تا زمانی که ایمیل شما تایید شده است.لطفا به زودی صندوق پستی را برای تاییدذ بررسی کنید<router-link class="fontsIran" to="">ارسال آدرس ایمیل</router-link></v-card-text>
        </v-card>

        <v-card>
            <v-card-text class="fontIran"><v-icon color="red" size="20px">warning</v-icon>شما شماره تلفن تایید شده را به حساب کاربری خود اضافه نکرده اید<router-link class="fontsIran" to="">تایید شماره تلفن</router-link></v-card-text>
        </v-card>
        
        <v-card>
            <v-card-text class="fontIran"><v-icon color="red" size="20px">warning</v-icon>شما هنوز نام واقعی خود را به حساب کاربری خود تنظیم نکرده اید.<router-link class="fontsIran" to="">ایجاد نام واقعی</router-link></v-card-text>
        </v-card>

    </div>
</template>
<script>
    
</script>
<style scoped>
.fontIran{
    font-family:iranian sans;
}
.fontsIran{
    font-family:'iranian sans';
    color:rgb(0, 174, 255);
    text-decoration:none;
}
.fontsIran:hover{
    color:rgb(0, 140, 255);
}
</style>
