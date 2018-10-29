<template>
    <div>
          <div >
            <span class="twoCharacters">تغییر رمز عبور</span><br>
            <router-link class="routerCharacters" to="">تغییر رمز عبور</router-link>
        </div>

        <div >
            <span class="twoCharacters">تغییر آدرس ایمیل</span><br>
            <router-link class="routerCharacters" to="">تغییر آدرس ایمیل</router-link>
        </div>

        <div >
            <span class="twoCharacters">ارزیابی</span><br>
            <span class="textCharacters">آدرس ایمیل تایید شده:نه</span><br>
            <router-link class="routerCharacters" to="">راه اندازی ایمیل</router-link><br>
            <span class="textCharacters">شماره تلفن تایید شده:نه</span><br>
            <router-link class="routerCharacters" to="">تایید شماره تلفن</router-link><br>
            <span class="textCharacters">شناسایی تایید شده:نه</span><br>
            <router-link class="routerCharacters" to="">هویت را تایید کنید</router-link>
        </div>

        <div >
            <span class="twoCharacters">امنیت</span><br>
            <span class="textCharacters">سطح امنیتی حساب شما ضعیف اسا</span><br>
            <router-link class="routerCharacters" to="">ویرایش گزینه های امنیتی</router-link><br>
        </div>

        <div >
            <span class="twoCharacters">اسم واقعی</span><br>
            <span class="textCharacters">تایید اعتبار اسم:تایید نشده</span><br>
            <router-link class="routerCharacters" to="">اطلاعات نام واقعی شما</router-link><br>
        </div>

        <div >
            <span class="twoCharacters">برنامه ها</span><br>
            <span class="textCharacters">برنامه های شضص ثاثت میتوانند عملیاتی را برای شمادر صدر کریپتو انجامدهد</span><br>
            <span class="textCharacters">شما در حال حاضر از هیچ برنامه ای استفاده نمی کنید</span><br>
            <router-link class="routerCharacters" to="">تنظیم و تغییر کد پین برنامه</router-link><br>
            <router-link class="routerCharacters" to="">مدیریت برنامه ها</router-link>
        </div>

        <div >
            <span class="twoCharacters">دریافت خدمات حق بیمه</span><br>
            <router-link class="routerCharacters" to="">دریافت های خود را برای خدمات صدرکریپتو مشاده کنید.</router-link><br>
            <span class="textCharacters"><strong class="textCharacters">توجه:</strong>از معاملات شما دریافتی نشده است اما دریافتی از خدماتی که اط صدرکریپتو خریداری کرده اید برای اهداف مالیاتی است شما میتوانید کسب و کار خود را بذست اوردن مخاطبین گیدا کنید</span><br>
        </div>

        <div >
            <span class="twoCharacters">اطلاعات شخصی</span><br>
            <router-link class="routerCharacters" to="">نشان کردن اطلاعات شخصی</router-link>
        </div>

        <div >
            <span class="twoCharacters">اطلاعات حساب</span><br>
            <router-link class="routerCharacters" to="">حذف حساب کاربری در صدر کریپتو</router-link>
        </div>

    </div>
</template>
<script>
    
</script>
<style>







.twoCharacters{
    font-size:21px;
    font-weight:bold;
    font-family:b nazanin;
    color:rgb(34, 31, 31);
    text-shadow:1px 3px 3px rgb(168, 156, 156);
}
.routerCharacters{
    text-decoration:none;
    text-indent:55px;
    font-size:17px;
    font-family:b nazanin;
    color:rgb(15, 123, 224);
}
.routerCharacters:hover{
    text-decoration:underline;
    color:rgb(3, 129, 247);
    text-shadow:1px 3px 3px rgb(179, 167, 167);
}
.textCharacters{
    font-size:17px;
    font-family:b nazanin;
    color:rgb(5, 5, 5);
}
div{
    padding-top:30px;
}

</style>
