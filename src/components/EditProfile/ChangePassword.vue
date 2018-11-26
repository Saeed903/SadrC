<template>
    <div>
        <v-card>
            <v-card-text>
                <span class="fontIran pb-0">تغییر رمز عبور:</span><br>
                <router-link class="fontsIran caption" to="">تغییر رمز عبور</router-link>
            </v-card-text>

            <v-card-text>
                <span class="fontIran pb-0">تغییر آدرس ایمیل:</span><br>
                <router-link class="fontsIran caption" to="">تغییر آدرس ایمیل</router-link>
            </v-card-text>

            <v-card-text>
                <span class="fontIran pb-0">تغییر آدرس ایمیل:</span><br>
                <router-link class="fontsIran caption" to="">تغییر آدرس ایمیل</router-link>
            </v-card-text>

            <v-card-text>
                <span class="fontIran subheading">ارزیابی:</span><br>
                <span class="fontIran"><v-icon size="15px" color="red">warning</v-icon>آدرس ایمیل تایید نشده است:<router-link class="fontsIran caption" to="">راه اندازی ایمیل</router-link></span><br>
                <span class="fontIran"><v-icon size="15px" color="red">warning</v-icon>شماره تلفن تایید نشده است:<router-link class="fontsIran caption" to="">تایید شماره تلفن</router-link></span><br>
                <span class="fontIran"><v-icon size="15px" color="red">warning</v-icon>شناسایی تایید نشده است:<router-link class="fontsIran caption" to="">هویت را تایید کنید</router-link></span>
            </v-card-text>

            <v-card-text>
                <span class="fontIran">امنیت:</span><br>
                <span class="fontIran">سطح امنیتی حساب شما ضعیف است</span><br>
                <router-link class="fontsIran caption" to="">ویرایش گزینه های امنیتی</router-link> 
            </v-card-text>

            <v-card-text>
                <span class="fontIran">اسم واقعی:</span><br>
                <span class="fontIran">اعتبار اسم تایید نشده است</span><br>
                <router-link class="fontsIran caption" to="">اطلاعات نام واقعی شما</router-link>
            </v-card-text>

            <v-card-text>
                <span class="fontIran">برنامه ها:</span><br>
                <span class="fontIran">برنامه های شضص ثاثت میتوانند عملیاتی را برای شمادر صدر کریپتو انجامدهد</span><br>
                <span class="fontIran">شما در حال حاضر از هیچ برنامه ای استفاده نمی کنید</span><br>
                <router-link class="fontsIran caption" to="">تنظیم و تغییر کد پین برنامه</router-link><br>
                <router-link class="fontsIran caption" to="">مدیریت برنامه ها</router-link>
            </v-card-text>
    
            <v-card-text>
                <span class="fontIran">دریافت خدمات حق بیمه:</span><br>
                <router-link class="fontsIran caption" to="">دریافت های خود را برای خدمات صدرکریپتو مشاده کنید.</router-link><br>
                <span class="fontIran pt-0">توجه:از معاملات شما دریافتی نشده است اما دریافتی از خدماتی که از صدرکریپتو خریداری کرده اید برای اهداف مالیاتی است شما میتوانید کسب و کار خود را بدست اوردن مخاطبین گیدا کنید</span>
            </v-card-text>

            <v-card-text>
                <span class="fontIran">اطلاعات شخصی</span><br>
                <router-link class="fontsIran caption" to="">نشان کردن اطلاعات شخصی</router-link>
            </v-card-text>
         
            <v-card-text>
                <span class="fontIran">اطلاعات حساب</span><br>
                <router-link class="fontsIran caption" to="">حذف حساب کاربری در صدر کریپتو</router-link>
            </v-card-text>
             
            <v-btn class="fontIran mt-4" color="primary">ذخیره تغییرات</v-btn>
        </v-card>
    </div>
</template>
<script>
  export default {
    components:{
    }
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
