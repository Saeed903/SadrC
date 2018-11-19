<template>
    <div>
        <v-card>
            <div class="mb-4 mt-4 pt-2">
                <span class="fontIran pr-3">تغییر رمز عبور</span><br>
                <router-link class="fontsIran pr-3" to="">تغییر رمز عبور</router-link>
            </div>

            <div class="mb-4 pr-3">
                <span class="fontIran">تغییر آدرس ایمیل</span><br>
                <router-link class="fontsIran" to="">تغییر آدرس ایمیل</router-link>
            </div>

            <div class="mb-4 pr-3">
                <span class="fontIran">ارزیابی</span><br>
                <span class="fontIran">آدرس ایمیل تایید شده:نه</span><br>
                <router-link class="fontsIran" to="">راه اندازی ایمیل</router-link><br>
                <span class="fontIran">شماره تلفن تایید شده:نه</span><br>
                <router-link class="fontsIran" to="">تایید شماره تلفن</router-link><br>
                <span class="fontIran">شناسایی تایید شده:نه</span><br>
                <router-link class="fontsIran" to="">هویت را تایید کنید</router-link>
            </div>

            <div class="mb-4 pr-3">
                <span class="fontIran">امنیت</span><br>
                <span class="fontIran">سطح امنیتی حساب شما ضعیف اسا</span><br>
                <router-link class="fontsIran" to="">ویرایش گزینه های امنیتی</router-link><br>
            </div>

            <div class="mb-4 pr-3">
                <span class="fontIran">اسم واقعی</span><br>
                <span class="fontIran">تایید اعتبار اسم:تایید نشده</span><br>
                <router-link class="fontsIran" to="">اطلاعات نام واقعی شما</router-link><br>
            </div>

            <div class="mb-4 pr-3">
                <span class="fontIran">برنامه ها</span><br>
                <span class="fontIran">برنامه های شضص ثاثت میتوانند عملیاتی را برای شمادر صدر کریپتو انجامدهد</span><br>
                <span class="fontIran">شما در حال حاضر از هیچ برنامه ای استفاده نمی کنید</span><br>
                <router-link class="fontsIran" to="">تنظیم و تغییر کد پین برنامه</router-link><br>
                <router-link class="fontsIran" to="">مدیریت برنامه ها</router-link>
            </div>

            <div class="mb-4 pr-3">
                <span class="fontIran">دریافت خدمات حق بیمه</span><br>
                <router-link class="fontsIran" to="">دریافت های خود را برای خدمات صدرکریپتو مشاده کنید.</router-link><br>
                <span class="fontIran"><strong class="fontIran">توجه:</strong>از معاملات شما دریافتی نشده است اما دریافتی از خدماتی که اط صدرکریپتو خریداری کرده اید برای اهداف مالیاتی است شما میتوانید کسب و کار خود را بذست اوردن مخاطبین گیدا کنید</span><br>
            </div>

            <div class="mb-4 pr-3">
                <span class="fontIran">اطلاعات شخصی</span><br>
                <router-link class="fontsIran" to="">نشان کردن اطلاعات شخصی</router-link>
            </div>

            <div class="mb-4 pr-3">
                <span class="fontIran">اطلاعات حساب</span><br>
                <router-link class="fontsIran" to="">حذف حساب کاربری در صدر کریپتو</router-link>
            </div>
            <v-btn class="fontIran mr-3" color="primary" round>ذخیره تغییرات</v-btn>
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
