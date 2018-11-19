<template>
    <div>
        <v-card>
            <div>
                <v-card-text class="fontIran text-xs-right headline mt-3 ">اطلاعات پایه کاربر</v-card-text>
                <span class="fontIran caption mr-3">ایمیل:farzad6238afsari@gmail.com(تایید نشده)</span>
            </div>

            <div class="pb-4 pt-3">
                <v-switch
                color="cyan accent-2"
                class="fontIran body-1 mr-3"
                label="من را بعنوان تایید کننده نام واقعی به دیگران نشان بده"
                >
                </v-switch>
                <span class="fontIran body-1 mr-3">نام کاربری شما زمانی نمایش داده می شوند که افراد با شرکای تجاری خود معاملات جدیدی را انجام میدهند</span>
            </div>
         
            <div class="pb-4">
                <v-switch
                color="cyan accent-2"
                class="fontIran body-1 mr-3"
                label="اطلاعات حساس را از اطلاعیه های ایمیل غیر فعال کنید"
                >
                </v-switch>
                <span class="fontIrand subheading mr-3">ایمیل فقظ از شما می خواهد که به سایت وارد شوید.جایی که اطلاعیه های واقعی باشد.</span>
            </div>

            <div class="pb-4">
                <v-switch
                color="cyan accent-2"
                class="fontIran body-1 mr-3"
                label="اعلان های وب را فعال کنید."
                >
                </v-switch>
                <span class="fontIran subheading mr-3">شما اطلاعیه های خارجی برای فروش را بطور  موقت دریافت خواهید کرد.</span>
            </div>

            <div class="pb-4">
                <v-switch
                color="cyan accent-2"
                class="fontIran body-1 mr-3"
                label="فروش در تعطیلات"
                >
                </v-switch>
                <span class="fontIran subheading mr-3">همه تبلیغات خود را برای خرید به طور موقت غیر فغال کنید.</span>
            </div>

            <div class="pb-4">
                <v-switch
                color="cyan accent-2"
                class="fontIran body-1 mr-3"
                label="خرید در تعطیلات"
                >
                </v-switch>
                <span class="fontIran subheading mr-3">همه تبلیغات خود را برای خرید به طور موقت غیر فغال کنید.</span>
            </div>

            <div class="pb-4">
                <v-switch
                color="cyan accent-2"
                class="fontIran body-1 mr-3"
                label="ارسال پیامک برای مخاطبین جدید تجارت"
                >
                </v-switch>
                <span class="fontIran subheading mr-3">ارسال پیامک از درخواست های تماس جدید</span>
            </div>

            <div class="pb-4">
                <v-switch
                color="cyan accent-2"
                class="fontIran body-1 mr-3"
                label="ارسال پیامک برای پرداخت های جدید آنلاین"
                >
                </v-switch>
                <span class="fontIran subheading mr-3">ارسال پیامک برای پرداخت های آنلاین در تبلیغات شما</span>
            </div>

            <div class="pb-4">
                <v-switch
                color="cyan accent-2"
                class="fontIran body-1 mr-3"
                label=""
                >
                </v-switch>
                <span class="fontIran subheading mr-3">ارسال پیامک از نسخه های جدید آنلاین سپرو</span>
            </div>

            <div class="pb-4">
                <v-flex xs6>
                    <v-textarea
                    box
                    label="معرفی"
                    hint="در پروفایل عمومی شما نشان داده می شود.تا سقف 200 کاراکتر متن نوشته شود."
                    clearable
                    class="fontIran body-1 mr-3"
                    color="cyan accent-2"
                    >
                    </v-textarea>
                    <v-btn class="fontIran mr-3" color="primary" round>ذخیره مشخصات</v-btn>
                </v-flex>
            </div>
        </v-card>
    </div>
</template>
<script>
    export default {

    }
</script>
<style scoped>
.fontIran{
    font-family:iranian sans;
}
</style>
