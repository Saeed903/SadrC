<template>
    <v-container fluid grid-list-xl>
        <v-layout  justify-space-around>
            <v-flex lg10 xl8>

                <v-layout row wrap>
                    <v-flex sm12 xs12 md12 xl4 lg4>
                        <v-card>
                            <v-card-text>
                                <router-link to="" class="textCard">چرا متفاوت هستیم؟</router-link><br>
                                <router-link to="" class="textCard">ماموریت</router-link><br>
                                <router-link to="" class="textCard">اطلاعات تماس</router-link><br>
                                <router-link to="" class="textCard">همکاری با ما</router-link>
                            </v-card-text>
                        </v-card>
                    </v-flex>
                    <v-flex sm12 xs12 xl8 lg8>
                        <v-card-text>
                            <span class="fontIran">در مورد صدر کریپتو</span><br>
                            <span class="fontsIran">صدرکریپتو یک سایت تجاری ارزهای دیجیتال برای اشخاص متفاوت است</span><br>
                            <span class="fontIrans" color="grey darken-1">درصدرکریپتو، افراد کشورهای مختلف می توانند ارز محلی خود را به یک ارز دیگر تغییر دهند. این سایت به کاربران اجازه می دهد تا آگهی های تبلیغاتی خود را که در آنها نرخ ارز و روش های پرداخت برای خرید یا فروش ارز دیجیتال ها را تعیین می کنند، بفرستد. شما به این آگهی ها پاسخ می دهید و موافقت می کنید که شخص را به خرید ارزدیجیتال با پول نقد بفروشید یا به طور مستقیم با بانکداری آنلاین تجارت کنید. ارزهای دیجیتال ها در کیف پول اینترنتی صدر کریپتو قرار می گیرند و از آنجا می توانید بیت کوین خود را مستقیما پرداخت کنید.</span>
                        </v-card-text>
                       
                        <v-card-text>
                            <span></span>
                            <span></span>
                            <span></span>
                        </v-card-text>
                    </v-flex>
                </v-layout>
                      
                
            </v-flex>
        </v-layout>
    </v-container>
</template>
<style scoped>
.fontIran{
    font-family:'Iranian Sans';
    font-size:19px;
    color:white;
}
.fontsIran{
    font-family:'Iranian Sans';
    font-size:15px;
    color:#E0E0E0;
}
.fontIrans{
    font-family:'Iranian Sans';
    font-size:12px;
    color:#BDBDBD;
}
.textCard{
    font-family:'iranian sans';
    color:#00E5FF;
    text-decoration:none;
}
.textCard:hover{
    color:#18FFFF;
}

</style>