<template>
<v-container fluid grid-list-md>
    <v-layout column>
        <v-flex d-flex>
            <v-card color="" dark>
                <v-card-text class="fontIran">
                    <p class="titled">تایید هویت درصدر کریپتو</p>
                    <p>لطفا از پنجره زیر برای شروع فرآیند تأیید هویت استفاده کنید. پس از شناسایی و تایید شما در صدر کریپتو، شما قادر به خرید و فروش بیت کوین از بسیاری از معامله گران دیگر خواهید بود.</p>
                    <v-card-text >
                    <p>برای تأیید موفقیت آمیز اطمینان حاصل کنید.</p>
                    <ul>
                        <li>هیچ قسمت مدرک شناسایی شما مخفی یا هاشورنباشد.</li>
                        <li>در تصویر مدرک شناسایی هیچ چیزی به صورت دستی نوشته نباشد.</li>
                        <li>چهار گوش تصویر مدرک شناسایی شما قابل رویت باشد .</li>
                        <li>مدرک شناسایی شما بدون تا خوردگی و پاره گی باشد.</li>
                        <li>موقع عکس گرفتن از مدرک شناسایی از فلش دوربین استفاده نکنید و هیچ گونه انعکاس نوری از مدرک شناسایی رویت نشود.</li>
                        <li>تصویر شناسایی رنگی باشد.</li>
                    </ul>
                    </v-card-text>
                </v-card-text>
            </v-card>
        </v-flex>

        <v-flex>
            <v-card>
                <v-card color="grey darken-1" class="text-xs-center titled">
                    <v-card-text>کمک؟</v-card-text>
                <v-card>
                    <v-card-text class="titled1">تأیید هویت را شروع کنید.</v-card-text>
                </v-card>
                    <v-card-text>ابتدا مدرک شناسایی خود را برای تأیید آماده کنید.</v-card-text>
                </v-card>
                <v-card class="fontIran">   
                    <v-card-text>این فرایند تأیید برای شناسایی  شما تأیید شده است و از شما محافظت می کند تا ویروس شناسایی کنید.  برای اطلاعات بیشتر را<router-link class="router" to="">"راهنما"</router-link>کلیک کنید.</v-card-text>
                        <v-flex text-xs-center>
                            <v-card-text>
                                <v-btn class="grey darken-2" to="/EditProfileSetRealName">تأیید هویت را شروع کنید.</v-btn>
                            </v-card-text>
                        </v-flex>
                </v-card>
                <v-layout>
                    <v-flex>
                        <v-card-text class="titled red--text">تأیید نشده</v-card-text>
                    </v-flex>
                    <v-flex d-flex >
                        <v-card-text class="text-xs-left">2010-2018 SadrSys@</v-card-text>    
                    </v-flex>
                </v-layout>
            </v-card>
        </v-flex>  
    </v-layout>
</v-container>
</template>
<style scoped>
.titled{
  font-family: Iranian Sans;
  font-size: 18px; 
}

.fontIran{
font-family: Iranian Sans;

}
.router{
    font-family:'iranian sans';
    color:rgb(0, 153, 255);
    text-decoration:none;
}
.router:hover{
    color:rgb(0, 140, 255);
}
.titled1{
font-family: Iranian Sans;
  font-size: 16px; 
}

</style>
