<template>
    <div>
        
         <div class="backInfoTop">
            <p class="basicInfo">اطلاعات پایه کاربر</p>
            <p class="basicEmail">ایمیل:farzad6238afsari@gmail.com(تایید نشده)</p>
        </div>

       

        <div class="showRealName">
            <v-switch
            color="blue"
            label="من را بعنوان تایید کننده نام واقعی به دیگران نشان بده"
            >
            </v-switch>
            <span class="userNameShown">نام کاربری شما زمانی نمایش داده می شوند که افراد با شرکای تجاری خود معاملات جدیدی را انجام میدهند</span>
        </div>

        <div class="showRealName">
            <v-switch
            color="blue"
            label="اطلاعات حساس را از اطلاعیه های ایمیل غیر فعال کنید."
            >
            </v-switch>
            <span class="userNameShown">ایمیل فقظ از شما می خواهد که به سایت وارد شوید.جایی که اطلاعیه های واقعی باشد.</span>
        </div>

        <div class="showRealName">
            <v-switch
            color="blue"
            label="اعلان های وب را فعال کنید."
            >
            </v-switch>
            <span class="userNameShown">شما اطلاعیه های خارجی برای فروش را بطور  موقت دریافت خواهید کرد.</span>
        </div>

        <div class="showRealName">
            <v-switch
            color="blue"
            label="فروش در تعطبلات"
            >
            </v-switch>
            <span class="userNameShown">همه تبلیغات خود را برای خرید به طور موقت غیر فغال کنید.</span>
        </div>

        <div class="showRealName">
            <v-switch
            color="blue"
            label="خرید در تعطیلات"
            >
            </v-switch>
            <span class="userNameShown">همه تبلیغات خود را برای خرید به طور موقت غیر فغال کنید.</span>
        </div>

        <div class="showRealName">
            <v-switch
            color="blue"
            label=" ارسال پیامک برای مخاطبین جدید تجارت"
            >
            </v-switch>
            <span class="userNameShown">ارسال پیامک از درخواست های تماس جدید</span>
        </div>

        <div class="showRealName">
            <v-switch
            color="blue"
            label="ارسال پیامک برای پرداخت های جدید آنلاین"
            >
            </v-switch>
            <span class="userNameShown">ارسال پیامک برای پرداخت های آنلاین در تبلیغات شما</span>
        </div>

        <div class="showRealName">
            <v-switch
            color="blue"
            label=""
            >
            </v-switch>
            <span class="userNameShown">ارسال پیامک از نسخه های جدید آنلاین سپرو</span>
        </div>

        <div>
            <v-flex xs6>
                <v-textarea
                box
                label="معرفی"
                class="textarea"
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
.backInfoTop{
    margin-top:22px;
}
.basicInfo{
    font-size:25px;
    font-family:b nazanin;
    font-weight:bold;
    color:rgb(78, 73, 73);
    text-align:left;
    text-shadow:1px 3px 3px rgb(201, 183, 183);
}
.basicEmail{
    font-size:18px;
    font-family:b nazanin;
    color:rgb(78, 73, 73);
    text-align:left;
    text-shadow:1px 3px 3px rgb(201, 183, 183);
}
.selectPercentage{
    width:35%;
}
.showRealName{
    padding-bottom:25px;
}
.userNameShown{
    font-size:18px;
    font-family:b nazanin;
    color:rgb(121, 113, 113);
    padding-top:0;
}
.textarea{
    padding-top:25px;
}


</style>
