<template>
    <div>
        <v-card>
            <v-card-text class="fontIran text-xs-right subheading">اطلاعات پایه کاربر</v-card-text>
            <span class="fontIran caption mr-3">ایمیل:farzad6238afsari@gmail.com(تایید نشده)</span>
        </v-card>
        
        <v-card>
            <v-switch
            color="cyan accent-2"
            class="fontIran body-1"
            label="من را بعنوان تایید کننده نام واقعی به دیگران نشان بده"
            >
            </v-switch>
            <span class="fontIran subheading">نام کاربری شما زمانی نمایش داده می شوند که افراد با شرکای تجاری خود معاملات جدیدی را انجام میدهند</span>
        </v-card>
        <v-card>
            <v-switch
            color="cyan accent-2"
            class="fontIran body-1"
            label="اطلاعات حساس را از اطلاعیه های ایمیل غیر فعال کنید"
            >
            </v-switch>
            <span class="fontIran subheading">ایمیل فقظ از شما می خواهد که به سایت وارد شوید.جایی که اطلاعیه های واقعی باشد.</span>
        </v-card>
        <v-card>
            <v-switch
            color="cyan accent-2"
            class="fontIran body-1"
            label="اعلان های وب را فعال کنید."
            >
            </v-switch>
            <span class="fontIran subheading">شما اطلاعیه های خارجی برای فروش را بطور  موقت دریافت خواهید کرد.</span>
        </v-card>
        <v-card>
            <v-switch
            color="cyan accent-2"
            class="fontIran body-1"
            label="فروش در تعطیلات"
            >
            </v-switch>
            <span class="fontIran subheading">همه تبلیغات خود را برای خرید به طور موقت غیر فغال کنید.</span>
        </v-card>
        <v-card>
            <v-switch
            color="cyan accent-2"
            class="fontIran body-1"
            label="خرید در تعطیلات"
            >
            </v-switch>
            <span class="fontIran subheading">همه تبلیغات خود را برای خرید به طور موقت غیر فغال کنید.</span>
        </v-card>
        <v-card>
            <v-switch
            color="cyan accent-2"
            class="fontIran body-1"
            label="ارسال پیامک برای مخاطبین جدید تجارت"
            >
            </v-switch>
            <span class="fontIran subheading">ارسال پیامک از درخواست های تماس جدید</span>
        </v-card>
        <v-card>
            <v-switch
            color="cyan accent-2"
            class="fontIran body-1"
            label="ارسال پیامک برای پرداخت های جدید آنلاین"
            >
            </v-switch>
            <span class="fontIran subheading">ارسال پیامک برای پرداخت های آنلاین در تبلیغات شما</span>
        </v-card>
        <v-card>
            <v-switch
            color="cyan accent-2"
            class="fontIran body-1"
            label=""
            >
            </v-switch>
            <span class="fontIran subheading">ارسال پیامک از نسخه های جدید آنلاین سپرو</span>
        </v-card>
        <v-flex xs6>
            <v-card>
                <v-textarea
                box
                label="معرفی"
                hint="در پروفایل عمومی شما نشان داده می شود.تا سقف 200 کاراکتر متن نوشته شود."
                >
                </v-textarea>
                <v-btn color="blue" round>ذخیره مشخصات</v-btn>
            </v-card>
        </v-flex>
    </div>
</template>
<script>
    
</script>
<style scoped>
.fontIran{
    font-family:iranian sans;
}
</style>
