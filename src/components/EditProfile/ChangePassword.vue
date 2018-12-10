<template>

    <v-layout row wrap>
        <v-flex d-flex>
            <v-card class="elevation-24">
                <v-card-text class="fontIrans">
                    <p class="fontIran">تغییر رمز عبور</p>
                    <router-link class="textCard" to="EditProfileChangePassWord"><v-icon size="13px" color="cyan accent-2">keyboard_arrow_left</v-icon>تغییر رمز عبور</router-link>
                    <p class="fontIrans">تغییر آدرس ایمیل</p>
                    <router-link class="textCard" to="EditProfileChangeEmail"><v-icon size="13px" color="cyan accent-2">keyboard_arrow_left</v-icon>تغییر آدرس ایمیل</router-link>
                </v-card-text>
            </v-card>
        </v-flex>
        <v-flex d-flex>
            <v-card class="elevation-24">
                <v-card-text class="fontIrans">
                    <p class="fontIran">ارزیابی</p>
                    <p class="fontIrans">آدرس ایمیل تایید شده:نه</p>
                    <router-link class="textCard" to=""><v-icon size="13px" color="cyan accent-2">keyboard_arrow_left</v-icon>راه اندازی ایمیل</router-link>
                    <p class="fontIrans">شماره تلفن تایید شده:نه</p>
                    <router-link class="textCard" to="EditProfileVerifyPhoneNumberVerification"><v-icon size="13px" color="cyan accent-2">keyboard_arrow_left</v-icon>تایید شماره تلفن</router-link>
                    <p class="fontIrans">شناسایی تایید شده:نه</p>
                    <router-link class="textCard" to="EditProfileIdentifyVerify"><v-icon size="13px" color="cyan accent-2">keyboard_arrow_left</v-icon>هویت را تایید کنید</router-link>
                </v-card-text>
            </v-card>
        </v-flex>
        <v-flex d-flex>
            <v-card class="elevation-24">
                <v-card-text class="fontIrans">
                    <p class="fontIran">امنیت</p>
                    <p class="fontIrans">سطح امنیتی حساب شما ضعیف اسا</p>
                    <router-link class="textCard" to="EditProfileAccountSecurity"><v-icon size="13px" color="cyan accent-2">keyboard_arrow_left</v-icon>ویرایش گزینه های امنیتی</router-link> 
                </v-card-text>
            </v-card>
        </v-flex>
        <v-flex d-flex>
            <v-card class="elevation-24">
                <v-card-text class="fontIrans">
                    <p class="fontIran">اسم واقعی</p>
                    <p class="fontsIran">تایید اعتبار اسم:تایید نشده</p>
                    <router-link class="textCard" to="EditProfileSetRealName"><v-icon size="13px" color="cyan accent-2">keyboard_arrow_left</v-icon>اطلاعات نام واقعی شما</router-link>
                </v-card-text>
            </v-card>
        </v-flex>
        <v-flex d-flex>
            <v-card class="elevation-24">
                <v-card-text  class="fontIrans">
                    <p class="fontIran">اطلاعات شخصی</p>
                    <router-link class="textCard" to="EditProfilePersonalData"><v-icon size="13px" color="cyan accent-2">keyboard_arrow_left</v-icon>نشان دادن اطلاعات شخصی</router-link>
                </v-card-text>
            </v-card>
        </v-flex>
       <v-flex d-flex>
           <v-card class="elevation-24">
                <v-card-text class="fontIrans">
                    <p class="fontIran">اطلاعات حساب</p>
                    <router-link class="textCard" to="EditProfileDeleteAccount"><v-icon size="13px" color="cyan accent-2">keyboard_arrow_left</v-icon>حذف حساب کاربری در صدر کریپتو</router-link>
                </v-card-text>
           </v-card>
       </v-flex>
    </v-layout>

</template>
<script>
    
</script>

<style scoped>

</style>
