<template>
<v-container fluid grid-list-md>
  <v-layout column>
   <v-flex d-flex >
    <v-card >
      <v-card-text class="title" >
        <p> امنیت حساب</p>
        <router-link>برگشت به اطلاعات کاربری</router-link>
        <p>سطح امنیتی حساب شما <span>ضعیف</span></p>
        <p>امنیت ضعیف حساب باعث افزایش خطر بیت کوین می شود. لطفا تأیید صحت دو عامل را فعال کنید</p>
      </v-card-text>
    </v-card>
  </v-flex> 
  <v-flex d-flex>
    <v-card color="indigo" dark>
      <v-list-tile-action-text class="subheading">
        <p><router-link to="">احراز هویت دو عامل</router-link></p>
        <p><router-link to="">گارد ورودی</router-link></p>
        <p><router-link to="">اقدامات امنیتی دیگر</router-link></p>
        <p><router-link to="">تاریخ ورود</router-link></p>
     
      </v-list-tile-action-text>
    </v-card>
  </v-flex>

    <v-flex d-flex >
      <v-card color="red lighten-2" dark>
        <v-card-text class="subheading">
          <p>تأیید اعتبار دو عامل</p>
          <p>حفاظت از بیت کوین خود با سیستم امنیت بالا</p>
          <p>تأیید اعتبار دو عامل <span>غیر فعال </span></p>
          <v-card-text><router-link to="">.تأیید اعتبار دو عامل را فعال کنید</router-link></v-card-text>
        </v-card-text>
      </v-card>
    </v-flex>

    <v-flex d-flex >
      <v-card color="red lighten-2" dark>
        <v-card-text class="subheading">
          <p>احراز هویت دو عامل چیست؟</p>
            <img src="" alt="">
            <ul>
                <li>.برای ورود به سیستم، شما نیاز به یک بار کد از تلفن همراه یا کاغذ چاپی علاوه بر رمز عبور خود دارید</li>
                <li>sadrCrypto two-factor authentication works with mobile apps.(android,ios,windows mobile)or printed paper codes.</li>
            </ul>
            <p>چرا احراز هویت دو عامل</p>
            <ul>
                <li>.بیش از 99٪ حملات علیه شما ممکن است با احراز هویت دو عامل جلوگیری شود</li>
                <li>.کدهای احراز هویت دو عامل بسیار خطرناک است، بر خلاف کلمه عبور</li>
                <li>.فقط چند دقیقه طول می کشد تا آن را تنظیم کنید</li>
            </ul>
        </v-card-text>
      </v-card>
    </v-flex>

    <v-flex d-flex >
      <v-card color="red lighten-2" dark>
        <v-card-text class="subheading">
          <p>گارد ورودی</p>
          <p>جلوگیری از ورود به سیستم از مرورگرهای غیر مجاز</p>
          <p>گارد ورودی<span>غیر فعال</span></p>
          <router-link to="">.گزینه های محافظ ورود را ویرایش کنید</router-link>
        </v-card-text>
      </v-card>
    </v-flex>

    <v-flex d-flex >
      <v-card color="red lighten-2" dark>
        <v-card-text class="subheading">
          <p>اقدامات امنیتی دیگر</p>
          <p>.از همان رمز عبور در مسیرهای مختلف استفاده نکنید</p>
          <p>.از مرورگرهای تور استفاده نکنید<router-link to="">.با استفاده از یک مرورگر تور، بیت کوین در معرض خطر  سرقت می باشد</router-link></p>
          <p>.این عملیات را فقط در سایت صدرکریپتو انجام دهید</p>
          <p>.وب سایت را از رایانه ها یا دستگاه های به اشتراک گذاشته شده مانند موارد موجود در کافه های اینترنتی استفاده نکنید زیرا کی لاگر ها نصب شده اند تا اعتبار کاربری شما را سرقت کنند</p>
          <p>. هنگام ورود به وب سایت نوارآدرس مرورگر را بخوانیدو بررسی کنید که شما در حال ورود به صدرکریپتوهستیدو نه در دامنه فیشینگ . مطئمن شوید که املا صدرکریپتودقیقا درست باشد. به ویژه ایمیل های فیشر اغلب نام دامنه را ثبت می کنند که شبیه دامنه صدر کریپتو است</p>
        </v-card-text>
      </v-card>
    </v-flex>

    <v-flex d-flex >
      <v-card color="red lighten-2" dark>
        <v-card-text class="subheading">
          <img src="" alt="">
        </v-card-text>
      </v-card>
    </v-flex>

    <v-flex d-flex >
      <v-card color="red lighten-2" dark>
        <v-card-text class="subheading">
          <p>.در صدر کریپتو تبلیغات گوگل را کلیک نکنید</p>
          <p>.ممکن است هنگام دسترسی به کیف پول بیت کوین این کار را از یک رایانه اختصاصی برای صرف هزینه های مالی انجام دهید. از این رایانه برای انجام وظایف دیگر استفاده نکنید</p>
          <p>.نرم افزار شخص ثالث را نصب نکنید، نرم افزارهای جاسوسی یا افزودنی های مرورگر شما نمی توانید 100٪ اعتماد کنید. این امر به شدت خطر ابتلا به عفونت بدخواهی را در رایانه به سرقت می برد</p>
        </v-card-text>
      </v-card>
    </v-flex>

    <v-flex d-flex >
      <v-card color="red lighten-2" dark>
        <v-card-text class="subheading">
          <p>تاریخ ورود</p>
          <p>فهرست ورود و خروج قبلی وآی پی ها</p>
          <router-link to="/EditProfileAccountSecurityLoginGuard">نمایش تاریخ ورود</router-link>
        </v-card-text>
      </v-card>
    </v-flex> 
  </v-layout>
</v-container>
    </template>
        
    
    