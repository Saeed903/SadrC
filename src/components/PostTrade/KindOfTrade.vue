<template>
    <v-layout row wrap>
        <v-flex>
           <v-card-text class="fontIran">
            <p>نوع تجارتی که میخواهید انجام دهید:</p>
            <p> اگر بخواهید بیت کوین ها را بفروشید مطمئن شوید که شما بیت کوین ها را در کیف پول صدر  کریپتو خود موجود دارید</p>
        </v-card-text>

        <v-radio-group v-model="radioGroup" class="pt-0">
            <v-radio
            v-for="tradeType in tradeTypes"
            :key="tradeType"
            :label="tradeType"
            :value="tradeType"
            class="fontIran mt-0"
            color="cyan accent-2"
            ></v-radio>
        </v-radio-group>

        <v-layout row wrap>
            <v-flex sm6 md6 lg6>
                <v-text-field
                class="mr-3 fontIran "
                label="موقعیت مکانی"
                box
                color="cyan accent-2"
                clearable
                >
                <template slot="label">
                    موقعیت مکانی <v-icon style="vertical-align: middle;color:aqua">add_location</v-icon>
                </template>
                </v-text-field>
            </v-flex>

            <v-flex sm6 md6 lg6>
                <p class="fontIran caption pt-1">برای تجارت آنلاین شما نیاز به مشخص کردن کشور, تجارت محلی، لطفا شهر، کد پستی و یا نام خیابان را مشخص کنید</p>
            </v-flex>
        
            <v-flex sm6 md6 lg6>
                <v-select
                v-validate="'required'"
                :items="selectCurrency"
                v-model="select"
                :error-messages="errors.collect('select')"
                data-vv-name="select"
                label="نوع ارز"
                class="textField mr-3 fontIran"
                color="cyan accent-2" 
                box
                >
                </v-select>
            </v-flex>

            <v-flex sm6 md6 lg6>
                <p class="fontIran caption pt-1">شما میتوانید هر ارزی را که میخواهید با آن تجارت کنید را انتخاب کنید.</p>
            </v-flex>
       
            <v-flex sm6 md6 lg6>
                <v-text-field
                class="textField mr-3 fontIran"
                label="محدوده تغییرات"
                box
                color="cyan accent-2"
                >
                </v-text-field>
            </v-flex>

            <v-flex sm6 md6 lg6>
                <p class="fontIran caption pt-1">محدوده ای که می خواهید بیش از قیمت بازار بیت کوین باشد. ارزش منفی برای خرید یا فروش زیر قیمت بازار را برای جذب مخاطبین بیشتر مورد استفاده قرار دهید. برای قیمت های پیچیده تر ویرایش معادله قیمت به طور مستقیم.</p>
            </v-flex>
        
            <v-flex sm6 md6 lg6>
                <v-text-field
                class="textField mr-3 fontIran"
                label="معادل قیمت"
                color="cyan accent-2"
                box
                >
                </v-text-field>
            </v-flex>

            <v-flex sm6 md6 lg6>
                <p class="fontIran caption pt-1">محدوده ای که می خواهید بیش از قیمت بازار بیت کوین باشد. ارزش منفی برای خرید یا فروش زیر قیمت بازار را برای جذب مخاطبین بیشتر مورد استفاده قرار دهید. برای قیمت های پیچیده تر ویرایش معادله قیمت به طور مستقیم<span class="fontIran green--text">6,266.70 USD/BTC</span></p>    
            </v-flex>
        </v-layout>
        </v-flex>
    </v-layout>
</template>
<script>
    export default{
        data: () =>({
            selectCurrency:[
                'بیت کوین',
                'اتریوم',
                'زدکش',
                'ترون',
            ],
        })
    }
</script>
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
