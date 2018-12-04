<template>
<div>
    <v-card-text>
   <v-flex d-flex>
    <v-card>
      <v-card-text class="fontIran" >
        <p class="titled"> امنیت حساب</p>
        <p><router-link class="router" to="EditProfileIdentifyVerify">برگشت به اطلاعات کاربری</router-link></p>
        <p class="fontIran">سطح امنیتی حساب شما <span>ضعیف</span></p>
        <p class="fontIran">امنیت ضعیف حساب باعث افزایش خطر بیت کوین می شود. لطفا تأیید صحت دو عامل را فعال کنید</p>
      </v-card-text>
    </v-card>
  </v-flex> 
  
  <v-flex d-flex>
    <v-card dark>
      <v-card-text>
        <router-link class="router" to="">احراز هویت دو عامل</router-link>
        <router-link class="router pr-5" to="">گارد ورودی</router-link>
        <router-link class="router pr-5" to="">اقدامات امنیتی دیگر</router-link>
        <router-link class="router pr-5" to="">تاریخ ورود</router-link>
      </v-card-text>
    </v-card>
  </v-flex>
  
    <v-flex d-flex >
      <v-card dark>
        <v-card-text class="fontIran">
          <p class="titled">تأیید اعتبار دو عامل</p>
          <p>حفاظت از بیت کوین خود با سیستم امنیت بالا</p>
          <p>تأیید اعتبار دو عامل <span>غیر فعال </span></p>
          <router-link class="router" to="">تأیید اعتبار دو عامل را فعال کنید</router-link>
        </v-card-text>
      </v-card>
    </v-flex>

    <v-flex d-flex >
      <v-card dark>
        
          <p class="titled">احراز هویت دو عامل چیست؟</p>
            <img src="" alt="">
            <ul class="fontIran">
                <li>برای ورود به سیستم، شما نیاز به یک بار کد از تلفن همراه یا کاغذ چاپی علاوه بر رمز عبور خود دارید.</li>
                <li>sadrCrypto two-factor authentication works with mobile apps.(android,ios,windows mobile)or printed paper codes.</li>
            </ul>
            
            <p class="titled">چرا احراز هویت دو عامل</p>
            
            <ul>
                <li>.بیش از 99٪ حملات علیه شما ممکن است با احراز هویت دو عامل جلوگیری شود</li>
                <li>.کدهای احراز هویت دو عامل بسیار خطرناک است، بر خلاف کلمه عبور</li>
                <li>.فقط چند دقیقه طول می کشد تا آن را تنظیم کنید</li>
            </ul>
        
      </v-card>
    </v-flex>

    <v-flex d-flex >
      <v-card dark>
        <v-card-text class="fontIran">
          <p class="titled">گارد ورودی</p>
          <p>جلوگیری از ورود به سیستم از مرورگرهای غیر مجاز</p>
          <p>گارد ورودی<span>غیر فعال</span></p>
          <router-link class="router" to="">گزینه های محافظ ورود را ویرایش کنید</router-link>
        </v-card-text>
      </v-card>
    </v-flex>

    <v-flex d-flex >
      <v-card  dark>
        <v-card-text class="fontIran">
          <p class="titled">اقدامات امنیتی دیگر</p>
          <p>از همان رمز عبور در مسیرهای مختلف استفاده نکنید</p>
          <p>از مرورگرهای تور استفاده نکنید<router-link class="router" to="">.با استفاده از یک مرورگر تور، بیت کوین در معرض خطر  سرقت می باشد</router-link></p>
          <p>این عملیات را فقط در سایت صدرکریپتو انجام دهید</p>
          <p>وب سایت را از رایانه ها یا دستگاه های به اشتراک گذاشته شده مانند موارد موجود در کافه های اینترنتی استفاده نکنید زیرا کی لاگر ها نصب شده اند تا اعتبار کاربری شما را سرقت کنند</p>
          <p> هنگام ورود به وب سایت نوارآدرس مرورگر را بخوانیدو بررسی کنید که شما در حال ورود به صدرکریپتوهستیدو نه در دامنه فیشینگ . مطئمن شوید که املا صدرکریپتودقیقا درست باشد. به ویژه ایمیل های فیشر اغلب نام دامنه را ثبت می کنند که شبیه دامنه صدر کریپتو است</p>
        </v-card-text>
      </v-card>
    </v-flex>

    <v-flex d-flex >
      <v-card dark>
        <v-card-text class="fontIran">
          <img src="" alt="">
        </v-card-text>
      </v-card>
    </v-flex>

    <v-flex d-flex >
      <v-card color="red lighten-2" dark>
        <v-card-text class="fontIran">
          <p>در صدر کریپتو تبلیغات گوگل را کلیک نکنید</p>
          <p>.ممکن است هنگام دسترسی به کیف پول بیت کوین این کار را از یک رایانه اختصاصی برای صرف هزینه های مالی انجام دهید. از این رایانه برای انجام وظایف دیگر استفاده نکنید</p>
          <p>.نرم افزار شخص ثالث را نصب نکنید، نرم افزارهای جاسوسی یا افزودنی های مرورگر شما نمی توانید 100٪ اعتماد کنید. این امر به شدت خطر ابتلا به عفونت بدخواهی را در رایانه به سرقت می برد</p>
        </v-card-text>
      </v-card>
    </v-flex>

    <v-flex d-flex >
      <v-card dark>
        <v-card-text class="fontIran">
          <p>تاریخ ورود</p>
          <p>فهرست ورود و خروج قبلی وآی پی ها</p>
          <router-link class="router" to="/EditProfileAccountSecurityLoginGuard">نمایش تاریخ ورود</router-link>
        </v-card-text>
      </v-card>
    </v-flex> 
    </v-card-text>
 </div>
    </template>
     <style scoped>
     .titled{
  font-family: Iranian Sans;
  font-size: 18px; 
}

.fontIran{
font-family: Iranian Sans;
}
.router{
    font-family:'iranian sans';
    color:rgb(0, 153, 255);
    text-decoration:none;
}
.router:hover{
    color:rgb(0, 140, 255);
}
     </style>
     
     
     </style>
        
    
    