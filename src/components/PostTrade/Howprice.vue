<template>
    <v-layout>
        <v-flex>
            <ul class="fontIran mt-4 mb-4 pr-3">
                <li class="pb-3">چگونه قیمت معاملات از قیمت بازار ساعتی تعیین می شود?</li>
                <li class="pb-3">برای اطلاعات بیشتر در رابطه با معادلات نحوه تعریف قیمت معاملاتی خود به سوالات <router-link to="" class="fontsIran">قیمت گذاری</router-link> مراجعه کنید.</li>
                <li>لطفا توجه داشته باشید که همیشه تبلیغ کننده مسئول پرداخت هزینه پردازش پرداخت است.</li>
            </ul>

         <v-layout row wrap>
            <v-flex sm6 md6 lg6>
                <v-text-field
                class="textField mr-3 fontIran"
                label="کمترین مقدار معامله"
                box
                color="cyan accent-2"
                >
                </v-text-field>
            </v-flex>

            <v-flex sm6 md6 lg6>
                <p class="fontIran caption pt-1">کمترین مقدار معامله در یک تجارت اختیاری است</p>    
            </v-flex>
        
            <v-flex sm6 md6 lg6>
                <v-text-field
                class="textField mr-3 fontIran"
                label="بیشترین مقدار معامله"
                box
                color="cyan accent-2"
                >
                </v-text-field>
            </v-flex>

            <v-flex sm6 md6 lg6>
                <p class="fontIran caption pt-1">.اختیاری. حداکثر حد معامله در یک تجارت. برای فروش آنلاین، تعادل کیفی صدر کریپتو شما می تواند حداکثر تجارت قابل اعتماد را نیز محدود کند</p>    
            </v-flex>
        
            <v-flex sm6 md6 lg6>
                <v-text-field
                class="textField mr-3 fontIran"
                label="محدودیت مقدار معامله"
                box
                color="cyan accent-2"
                >
                </v-text-field>
            </v-flex>

            <v-flex sm6 md6 lg6>
                <p class="fontIran caption pt-1">.اختیاری. مقدار معامله را محدود به عدد صحیح جدا از عدد کاما، به عنوان مثال 20،50،100. در ارز فیات (دلار / یورو / و غیره). دستی برای کوین، کارت هدیه و غیره</p>       
            </v-flex>
        </v-layout>

         <v-card-text>
            <v-divider></v-divider>  
         </v-card-text>

        </v-flex>
    </v-layout>
</template>
<style scoped>
.fontIran{
    font-family:'Iranian Sans';
    padding-left:20px;
}
.fontsIran{
    font-family:'iranian sans';
    color:rgb(0, 153, 255);
    text-decoration:none;
}
.fontsIran:hover{
    color:rgb(0, 140, 255);
}

</style>
