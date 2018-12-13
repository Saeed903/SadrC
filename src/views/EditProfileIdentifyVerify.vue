<template>
    <v-layout column>
        <v-flex d-flex>
            <v-card>
                <v-card-text class="fontIrans">
                    <p class="fontIran">تایید هویت درصدر کریپتو</p>
                    <p><v-icon color="red" size="17px">warning</v-icon>لطفا از پنجره زیر برای شروع فرآیند تأیید هویت استفاده کنید. پس از شناسایی و تایید شما در صدر کریپتو، شما قادر به خرید و فروش بیت کوین از بسیاری از معامله گران دیگر خواهید بود.</p>
                    <p><v-icon color="grey" size="17px">done_all</v-icon>برای تأیید موفقیت آمیز اطمینان حاصل کنید.</p>
                    <ul class="pr-3">
                        <li>هیچ قسمت مدرک شناسایی شما مخفی یا هاشورنباشد.</li>
                        <li>در تصویر مدرک شناسایی هیچ چیزی به صورت دستی نوشته نباشد.</li>
                        <li>چهار گوش تصویر مدرک شناسایی شما قابل رویت باشد .</li>
                        <li>مدرک شناسایی شما بدون تا خوردگی و پاره گی باشد.</li>
                        <li>موقع عکس گرفتن از مدرک شناسایی از فلش دوربین استفاده نکنید و هیچ گونه انعکاس نوری از مدرک شناسایی رویت نشود.</li>
                        <li>تصویر شناسایی رنگی باشد.</li>
                    </ul>
                </v-card-text>
            </v-card>
        </v-flex>

        <v-flex>
            
                <v-card color="grey darken-1" class="text-xs-center fontIran">
                    <v-card-text><v-icon size="35px" color="cyan accent-2">help</v-icon></v-card-text>
                <v-card>
                    <v-card-text class="fontIrans">تأیید هویت را شروع کنید.</v-card-text>
                </v-card>
                    <v-card-text class="fontIrans">ابتدا مدرک شناسایی خود را برای تأیید آماده کنید.</v-card-text>
                </v-card>
                <v-card class="fontIrans">   
                    <v-card-text>این فرایند تأیید برای شناسایی  شما تأیید شده است و از شما محافظت می کند تا ویروس شناسایی کنید.  برای اطلاعات بیشتر را<router-link class="textCard" to="">"راهنما"</router-link>کلیک کنید.</v-card-text>
                        <v-flex text-xs-center>
                            <div class="text-xs-right">
                                <v-btn class="fontIrans" color="primary" to="">شروع تایید هویت</v-btn>
                            </div>
                        </v-flex>
                </v-card>
                <v-layout>
                    <v-flex>
                        <v-card-text class="fontIrans red--text">تأیید نشده</v-card-text>
                    </v-flex>
                    <v-flex d-flex >
                        <v-card-text class="fontIran text-xs-left">2010-2018 SadrSys@</v-card-text>    
                    </v-flex>
                </v-layout>
            
        </v-flex>  
    </v-layout>
</template>
