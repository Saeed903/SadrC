<template>
    <div>
        <v-card>
            <div class="pb-3">
                <v-card-text class="fontIran pb-0">تغییر رمز عبور:</v-card-text>
                <router-link class="fontsIran pr-3" to="">تغییر رمز عبور</router-link>
            </div>
            <div>
                <v-card-text class="fontIran pb-0">تغییر آدرس ایمیل:</v-card-text>
                <router-link class="fontsIran pr-3" to="">تغییر آدرس ایمیل</router-link>
            </div>
            <div class="pt-3">
                <v-card-text class="fontIran pb-0">تغییر آدرس ایمیل:</v-card-text>
                <router-link class="fontsIran pr-3" to="">تغییر آدرس ایمیل</router-link>
            </div>
            <div class="pt-4">
                <span class="fontIran subheading pb-0 pr-3"><v-icon size="18px" color="red">warning</v-icon>ارزیابی:</span><br>
                <span class="fontIran pb-0 pr-3">آدرس ایمیل تایید شده : نه</span><br>
                <router-link class="fontsIran pr-3 pb-0" to="">راه اندازی ایمیل</router-link><br>
                <span class="fontIran pb-0 pr-3">شماره تلفن تایید شده : نه</span><br>
                <router-link class="fontsIran pr-3 pb-0" to="">تایید شماره تلفن</router-link><br>
                <span class="fontIran pb-0 pr-3">شناسایی تایید شده : نه</span><br>
                <router-link class="fontsIran pr-3" to="">هویت را تایید کنید</router-link>
            </div>
            <div class="pt-4">
                <span class="fontIran pr-3">امنیت:</span><br>
                <span class="fontIran pr-3">سطح امنیتی حساب شما ضعیف است</span><br>
                <router-link class="fontsIran pr-3" to="">ویرایش گزینه های امنیتی</router-link> 
            </div>
            <div class="pt-4">
                <span class="fontIran pr-3">اسم واقعی:</span><br>
                <span class="fontIran pr-3">تایید اعتبار اسم:تایید نشده</span><br>
                <router-link class="fontsIran pr-3" to="">اطلاعات نام واقعی شما</router-link>
            </div>
            <div class="pt-4">
                <span class="fontIran pr-3">برنامه ها:</span><br>
                <span class="fontIran pr-3">برنامه های شضص ثاثت میتوانند عملیاتی را برای شمادر صدر کریپتو انجامدهد</span><br>
                <span class="fontIran pr-3">شما در حال حاضر از هیچ برنامه ای استفاده نمی کنید</span><br>
                <router-link class="fontsIran pr-3" to="">تنظیم و تغییر کد پین برنامه</router-link>
                <router-link class="fontsIran pr-3" to="">مدیریت برنامه ها</router-link>
            </div>
    
            <div class="pt-4">
                <span class="fontIran pr-3">دریافت خدمات حق بیمه:</span><br>
                <router-link class="fontsIran pr-3" to="">دریافت های خود را برای خدمات صدرکریپتو مشاده کنید.</router-link><br>
                <span class="fontIran pr-3"><strong class="fontIran">توجه:</strong>از معاملات شما دریافتی نشده است اما دریافتی از خدماتی که اط صدرکریپتو خریداری کرده اید برای اهداف مالیاتی است شما میتوانید کسب و کار خود را بذست اوردن مخاطبین گیدا کنید</span>
            </div>


         

            <v-card-text class="fontIran">اطلاعات شخصی</v-card-text>
            <router-link class="fontsIran pr-3" to="">نشان کردن اطلاعات شخصی</router-link>

            <v-card-text class="fontIran">اطلاعات حساب</v-card-text>
            <router-link class="fontsIran pr-3" to="">حذف حساب کاربری در صدر کریپتو</router-link>
        </v-card>
    </div>
</template>

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
