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
            <span>نام کاربری شما زمانی نمایش داده می شوند که افراد با شرکای تجاری خود معاملات جدیدی را انجام میدهند</span>
        </v-card>
  














        <div>

            <v-switch
            color="aqua"
            label="اطلاعات حساس را از اطلاعیه های ایمیل غیر فعال کنید."
            >
            </v-switch>
            <span class="userNameShown">ایمیل فقظ از شما می خواهد که به سایت وارد شوید.جایی که اطلاعیه های واقعی باشد.</span>
        </div>

        <div>
            <v-switch
            color="aqua"
            label="اعلان های وب را فعال کنید."
            >
            </v-switch>
            <span>شما اطلاعیه های خارجی برای فروش را بطور  موقت دریافت خواهید کرد.</span>
        </div>

        <div>
            <v-switch
            color="aqua"
            label="فروش در تعطبلات"
            >
            </v-switch>
            <span>همه تبلیغات خود را برای خرید به طور موقت غیر فغال کنید.</span>
        </div>

        <div>
            <v-switch
            color="aqua"
            label="خرید در تعطیلات"
            >
            </v-switch>
            <span class="userNameShown">همه تبلیغات خود را برای خرید به طور موقت غیر فغال کنید.</span>
        </div>

        <div>
            <v-switch
            color="aqua"
            label=" ارسال پیامک برای مخاطبین جدید تجارت"
            >
            </v-switch>
            <span>ارسال پیامک از درخواست های تماس جدید</span>
        </div>

        <div>
            <v-switch
            color="aqua"
            label="ارسال پیامک برای پرداخت های جدید آنلاین"
            >
            </v-switch>
            <span>ارسال پیامک برای پرداخت های آنلاین در تبلیغات شما</span>
        </div>

        <div>
            <v-switch
            color="aqua"
            label=""
            >
            </v-switch>
            <span>ارسال پیامک از نسخه های جدید آنلاین سپرو</span>
        </div>

        <div>
            <v-flex xs6>
                <v-textarea
                box
                label="معرفی"
                hint="در پروفایل عمومی شما نشان داده می شود.تا سقف 200 کاراکتر متن نوشته شود."
                >
                </v-textarea>
            </v-flex>
            <v-btn 
            color="blue"
            round
            >
            ذخیره مشخصات
            </v-btn>
        </div>
    </div>
</template>
<script>
    
</script>
<style scoped>
.fontIran{
    font-family:iranian sans;
}
</style>
