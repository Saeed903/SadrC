<template>
    <div>

        <v-card>
            <v-card-text class="fontIran subheading">اطلاعات پایه کاربر</v-card-text>
            <span class="fontIran caption pr-3">ایمیل:farzad6238afsari@gmail.com(تایید نشده)</span>

            <v-switch
            color="cyan accent-2"
            label="من را بعنوان تایید کننده نام واقعی به دیگران نشان بده"
            class="fontIran pr-3 pt-3" 
            >
            </v-switch>
            <v-card-text class="fontIran caption pr-3 pt-0 pb-4"><v-icon color="cyan accent-2" size="20px">done_all</v-icon>نام کاربری شما زمانی نمایش داده می شوند که افراد با شرکای تجاری خود معاملات جدیدی را انجام میدهند  </v-card-text>
            <v-switch
            color="cyan accent-2"
            label="اطلاعات حساس را از اطلاعیه های ایمیل غیر فعال کنید."
            class="fontIran caption pr-3" 
            >
            </v-switch>
            <v-card-text class="fontIran pr-3 pt-0 pb-4"><v-icon color="cyan accent-2" size="20px">done_all</v-icon>ایمیل فقظ از شما می خواهد که به سایت وارد شوید.جایی که اطلاعیه های واقعی باشد.</v-card-text>

            <v-switch
            color="cyan accent-2"
            label="اعلان های وب را فعال کنید."
            class="fontIran caption pr-3" 
            >
            </v-switch>
            <v-card-text class="fontIran pr-3 pt-0 pb-4"><v-icon color="cyan accent-2" size="20px">done_all</v-icon>شما اطلاعیه های خارجی برای فروش را بطور  موقت دریافت خواهید کرد.</v-card-text>

            <v-switch
            color="cyan accent-2"
            label="فروش در تعطبلات"
            class="fontIran caption pr-3" 
            >
            </v-switch>
            <v-card-text class="fontIran pr-3 pt-0 pb-4"><v-icon color="cyan accent-2" size="20px">done_all</v-icon>همه تبلیغات خود را برای خرید به طور موقت غیر فغال کنید.</v-card-text>

            <v-switch
            color="cyan accent-2"
            label="خرید در تعطیلات"
            class="fontIran caption pr-3" 
            >
            </v-switch>
            <v-card-text class="fontIran pr-3 pt-0 pb-4"><v-icon color="cyan accent-2" size="20px">done_all</v-icon>همه تبلیغات خود را برای خرید به طور موقت غیر فغال کنید.</v-card-text>

            <v-switch
            color="cyan accent-2"
            label=" ارسال پیامک برای مخاطبین جدید تجارت"
            class="fontIran caption pr-3" 
            >
            </v-switch>
            <v-card-text class="fontIran pr-3 pt-0 pb-4"><v-icon color="cyan accent-2" size="20px">done_all</v-icon>ارسال پیامک از درخواست های تماس جدید</v-card-text>

            <v-switch
            color="cyan accent-2"
            label="ارسال پیامک برای پرداخت های جدید آنلاین"
            class="fontIran caption pr-3" 
            >
            </v-switch>
            <v-card-text class="fontIran pr-3 pt-0 pb-4"><v-icon color="cyan accent-2" size="20px">done_all</v-icon>ارسال پیامک برای پرداخت های آنلاین در تبلیغات شما</v-card-text>

            <v-switch
            color="cyan accent-2"
            label="ارسال پیامک برای سپرده آنلاین منتشر شده"
            class="fontIran caption pr-3 " 
            >
            </v-switch>
            <v-card-text class="fontIran pr-3 pt-0 pb-4"><v-icon color="cyan accent-2" size="20px">done_all</v-icon>ارسال پیامک از نسخه های جدید آنلاین سپرو</v-card-text>

            <v-flex lg6 md6 sm7>
                <v-textarea
                box
                label="معرفی"
                class="fontIran pr-3 mt-4 mb-2"
                color="cyan accent-2"
                prepend-icon="filter_list"
                hint="در پروفایل عمومی شما نشان داده می شود.تا سقف 200 کاراکتر متن نوشته شود."
                clearable
                >
                </v-textarea>
            </v-flex>
            <v-divider color="grey"></v-divider>
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
    color:#00B8D4;
    text-decoration:none;
}
.fontsIran:hover{
    color:#18FFFF;
}

</style>
