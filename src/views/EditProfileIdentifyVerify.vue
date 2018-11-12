<template>
<v-container fluid grid-list-md>
    <v-layout column>
        <v-flex d-flex>
            <v-card color="red lighten-2" dark>
                <v-card-text class="subheading">
                    <p>تایید هویت درصدر کریپتو</p>
                    <p>.لطفا از پنجره زیر برای شروع فرآیند تأیید هویت استفاده کنید. پس از شناسایی و تایید شما در صدر کریپتو، شما قادر به خرید و فروش بیت کوین از بسیاری از معامله گران دیگر خواهید بود</p>
                    <p>.برای تأیید موفقیت آمیز اطمینان حاصل کنید</p>
                    <ul>
                        <li>.هیچ قسمت مدرک شناسایی شما مخفی یا هاشورنباشد</li>
                        <li>.در تصویر مدرک شناسایی هیچ چیزی به صورت دستی نوشته نباشد</li>
                        <li>.چهار گوش تصویر مدرک شناسایی شما قابل رویت باشد </li>
                        <li>.مدرک شناسایی شما بدون تا خوردگی و پاره گی باشد</li>
                        <li>.موقع عکس گرفتن از مدرک شناسایی از فلش دوربین استفاده نکنید و هیچ گونه انعکاس نوری از مدرک شناسایی رویت نشود</li>
                        <li>.تصویر شناسایی رنگی باشد</li>
                    </ul>
                </v-card-text>
            </v-card>
        </v-flex>

        <v-flex d-flex >
            <v-card >
                <v-card color="red lighten-2">
                        <p>کمک؟</p>
                    <v-card>
                        <p class="text-lg-left">.تأیید هویت را شروع کنید</p>
                    </v-card>
                        <p class="text-lg-center">.ابتدا مدرک شناسایی خود را برای تأیید آماده کنید</p>
                </v-card>
                <v-card>   
                <p>.این فرایند تأیید برای شناسایی شناسایی شما تأیید شده است و از شما محافظت می کند تا ویروس شناسایی کنید. کلیک کنید "راهنما" برای اطلاعات بیشتر</p>
                <v-flex text-xs-center>
                <v-btn color="primary" to="/EditProfileSetRealName">تأیید هویت را شروع کنید</v-btn>
                </v-flex>
                </v-card>
                <v-layout row >
                    <v-flex d-flex>
                        <v-card color="red lighten-2">
                            <p>netverify</p>
                        </v-card>
                    </v-flex>
                    <v-flex d-flex >
                        <v-card color="red lighten-2">
                            <p class="text-xs-left">@2010-2018 SadrSys</p>    
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-card>
        </v-flex>  
    </v-layout>
</v-container>
</template>
