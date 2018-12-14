<template>
    <div>
        

            <v-card-text class="fontIran">اطلاعات پایه کاربر</v-card-text>
            <span class="fontIrans1 red--text pr-3">ایمیل:farzad6238afsari@gmail.com(تایید نشده)</span>

            <v-checkbox
            color="cyan accent-2"
            label="من را بعنوان تایید کننده نام واقعی به دیگران نشان بده"
            class="fontIrans pr-3" 
            >
            </v-checkbox>
            <v-card-text class="fontIrans pr-3 pt-0 pb-4">نام کاربری شما زمانی نمایش داده می شوند که افراد با شرکای تجاری خود معاملات جدیدی را انجام می دهند</v-card-text>

            <v-checkbox
            color="cyan accent-2"
            label="اطلاعات حساس را از اطلاعیه های ایمیل غیر فعال کنید."
            class="fontsIran pr-3" 
            >
            </v-checkbox>
            <v-card-text class="fontIrans pr-3 pt-0 pb-4">ایمیل فقظ از شما می خواهد که به سایت وارد شوید.جایی که اطلاعیه های واقعی باشد.</v-card-text>

            <v-checkbox
            color="cyan accent-2"
            label="اعلان های وب را فعال کنید."
            class="fontsIran caption pr-3" 
            >
            </v-checkbox>
            <v-card-text class="fontIrans pr-3 pt-0 pb-4">شما اطلاعیه های خارجی برای فروش را بطور  موقت دریافت خواهید کرد.</v-card-text>

            <v-checkbox
            color="cyan accent-2"
            label="فروش در تعطبلات"
            class="fontsIran caption pr-3" 
            >
            </v-checkbox>
            <v-card-text class="fontIrans pr-3 pt-0 pb-4">همه تبلیغات خود را برای خرید به طور موقت غیر فغال کنید.</v-card-text>

            <v-checkbox
            color="cyan accent-2"
            label="خرید در تعطیلات"
            class="fontsIran caption pr-3" 
            >
            </v-checkbox>
            <v-card-text class="fontIrans pr-3 pt-0 pb-4">همه تبلیغات خود را برای خرید به طور موقت غیر فغال کنید.</v-card-text>

            <v-checkbox
            color="cyan accent-2"
            label=" ارسال پیامک برای مخاطبین جدید تجارت"
            class="fontsIran caption pr-3" 
            >
            </v-checkbox>
            <v-card-text class="fontIrans pr-3 pt-0 pb-4">ارسال پیامک از درخواست های تماس جدید</v-card-text>

            <v-checkbox
            color="cyan accent-2"
            label="ارسال پیامک برای پرداخت های جدید آنلاین"
            class="fontsIran caption pr-3" 
            >
            </v-checkbox>
            <v-card-text class="fontIrans pr-3 pt-0 pb-4">ارسال پیامک برای پرداخت های آنلاین در تبلیغات شما</v-card-text>

            <v-checkbox
            color="cyan accent-2"
            label="ارسال پیامک از نسخه های جدید آنلاین سپرو"
            class="fontsIran caption pr-3" 
            >
            </v-checkbox>
            <v-card-text class="fontIrans pr-3 pt-0 pb-4">ارسال پیامک از نسخه های جدید آنلاین سپرو</v-card-text>

            <v-flex xl7 lg6 md6 sm7 xs11>
                <v-textarea
                outline
                label="معرفی"
                class="fontIrans pr-1 mt-4"
                color="cyan accent-2"
                hint="در پروفایل عمومی شما نشان داده می شود.تا سقف 200 کاراکتر متن نوشته شود."
                clearable
                
                >
                </v-textarea>
                <v-btn 
                color="blue"
                round
                class="fontIran pr-3"
                >
                <v-icon size="15px">send</v-icon>
                ذخیره مشخصات
                </v-btn>
            </v-flex>
            
        
    </div>
</template>
