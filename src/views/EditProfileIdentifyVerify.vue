<template>
    <v-layout column>
        <v-flex d-flex>
            <v-card>
                <v-card-text class="fontIrans">
                    <p class="fontIran">تایید هویت درصدر کریپتو</p>
                    <p>لطفا از پنجره زیر برای شروع فرآیند تأیید هویت استفاده کنید. پس از شناسایی و تایید شما در صدر کریپتو، شما قادر به خرید و فروش بیت کوین از بسیاری از معامله گران دیگر خواهید بود.</p>
                    <p>برای تأیید موفقیت آمیز اطمینان حاصل کنید.</p>
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
                    <v-card-text>کمک؟</v-card-text>
                <v-card>
                    <v-card-text class="fontIrans">تأیید هویت را شروع کنید.</v-card-text>
                </v-card>
                    <v-card-text class="fontIrans">ابتدا مدرک شناسایی خود را برای تأیید آماده کنید.</v-card-text>
                </v-card>
                <v-card class="fontIrans">   
                    <v-card-text>این فرایند تأیید برای شناسایی  شما تأیید شده است و از شما محافظت می کند تا ویروس شناسایی کنید.  برای اطلاعات بیشتر را<router-link class="router" to="">"راهنما"</router-link>کلیک کنید.</v-card-text>
                        <v-flex text-xs-center>
                            <v-card-text>
                                <v-btn class="fontIrans grey darken-2" to="">تأیید هویت را شروع کنید.</v-btn>
                            </v-card-text>
                        </v-flex>
                </v-card>
                <v-layout>
                    <v-flex>
                        <v-card-text class="fontIran red--text">تأیید نشده</v-card-text>
                    </v-flex>
                    <v-flex d-flex >
                        <v-card-text class="fontIran text-xs-left">2010-2018 SadrSys@</v-card-text>    
                    </v-flex>
                </v-layout>
            
        </v-flex>  
    </v-layout>
</template>
<style scoped>

.router{
    font-family:'iranian sans';
    color:rgb(0, 153, 255);
    text-decoration:none;
}
.router:hover{
    color:rgb(0, 140, 255);
}

</style>
