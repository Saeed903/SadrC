<template>
    <div>
        <v-card-text class="fontIran">درخواست حذف حساب</v-card-text>
        <v-card-text class="fontIrans">متاسفیم که شما  اگر مشکلی با صدرکریپتو دارید، لطفا قبل از اینکه حساب کاربری خود را حذف کنید، <router-link to="SupportCreateNewTicket" class="textCard">با ما</router-link> تماس بگیرید.</v-card-text>
        <v-card>
            <v-card-text class="fontIran">دیسکاوری</v-card-text>
            <v-card-text  class="fontIrans">به این ترتیب که به رضایت شما به عنوان یک مبنای حقوقی برای پردازش اطلاعات شخصی شما تکیه می کنیم، این درخواست حذف حساب، نتیجه لغو رضایت شما است.</v-card-text>
            <v-card-text  class="fontIrans">اگر از حسابتان برای معاملات بیت کوین یا معاملات استفاده نکنید، تمام اطلاعات شما 14 روز پس از تأیید درخواست حذف حساب شما حذف می شود همانطور که در <router-link to="" class="textCard"> سیاست حفظ حریم خصوصی </router-link> ما شرح داده شده است. اگر معاملات را انجام داده اید یا معاملات را شروع کرده اید، بیشترین اطلاعات خود را مطابق با <router-link to="" class="textCard"> سیاست حفظ حریم خصوصی </router-link> ما حداکثر پنج سال نگه دارید.</v-card-text>
            <v-card-text  class="fontIrans">پس از حذف اطلاعات شما، شما با این کار موافقت می کنید که از هر گونه ادعایی که ممکن است در برابر صدرکریپتو در آینده داشته باشید را لغو کنید و صدرکریپتو را از هر گونه مسئولیتی در مورد هر گونه از دست دادن، آسیب، آسیب یا هزینه ای که ممکن است دچار رنج می شوید، به پاک کردن اطلاعات شما.</v-card-text>
        </v-card>
        <v-flex xl6 lg6 md6 sm9 xs9>
            <v-form>
                <v-text-field
                label="رمز عبور"
                clearable
                class="fontIrans"
                color="cyan accent-2"
                type="password"
                ></v-text-field>
            </v-form>
        </v-flex>
        <v-card-text class="fontIran">لطفا حذف حساب با گذرواژه خود را تأیید کنید</v-card-text>
        <v-btn color="primary" class="fontsIran">حذف حساب کاربری</v-btn>
    </div>
</template>