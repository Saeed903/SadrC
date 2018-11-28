<template>
    <v-layout row wrap >
        <v-flex>
            <v-card-text>
                <p class="fontIran text-xs-center">ثبت آگهی {{currency}}</p>
                <p class="fontIran text-xs-center"><v-icon color="red" size="16px">warning</v-icon>لطفا قبل از ثبت آگهی <router-link to="/Login" class="fontsIran">ورود</router-link> یا <router-link to="/signUp" class="fontsIran">ثبت نام</router-link> کنید!</p>
                <v-divider></v-divider>
            </v-card-text>
        <v-card-text>
            <p class="fontIran text-xs-center">قوانین و مقررات تبلیغاتی:</p>
            <ul class="fontIran pr-3">
                <li class="mb-3">برای نمایش تبلیغات شما باید بیت کوین را در کیف پول صدر کریپتو خود داشته باشید. شما برای تبلیغات با روش های پرداخت آنلاین و 0.04 بیت کوین یا بیشتر برای تبلیغات محلی (نقد) نیاز به 0.04 بیت کوین یا بیشتر دارید.</li>
                <li class="mb-3">برخی از روش های پرداخت مستلزم آن هستند که قبل از اینکه آگهی های شما قابل مشاهده باشند، باید شناسه،شناسایی شوند.</li>
                <li class="mb-3">هر تبلیغ کننده هزینه های تراکنش تکمیل شده 1٪ از کل مبلغ تجاری است<span><router-link to="" class="fontsIran">تمام هزینه ها را در صفحه هزینه های ما مشاهده کنید.</router-link></span></li>
                <li class="mb-3">هنگامی که یک بازرگانی باز شود، قیمت نهایی است، مگر اینکه یک اشتباه روشن در قیمت گذاری وجود داشته باشد.</li>
                <li class="mb-3">شما مجاز به خرید یا فروش بیت کوین از طرف شخص دیگری (واسطه) نیستید.</li>
                <li class="mb-3">شما فقط می توانید از حساب های پرداخت شده که به نام خود ثبت شده (بدون پرداخت شخص ثالث!) استفاده کنید.</li>
                <li class="mb-3">شما باید جزئیات پرداخت خود را در تبلیغات و یا در چت تجاری قرار دهید.</li>
                <li class="mb-3">همه ارتباطات باید در صدر کریپتواتفاق بیافتد.</li>
                <li class="mb-3">روش های پرداخت مشخص شده است ریسک بالا داشتن یک خطر عمده تقلب .هنگام استفاده از روشهای پرداخت با ریسک بالا، مراقب باشید و همیشه آی دی را تأیید کنید.</li>
            </ul>
        
            <v-divider></v-divider>

        </v-card-text>

        <v-card-text class="fontIran">
            <p>نوع تجارتی که میخواهید انجام دهید:</p>
            <p> اگر بخواهید بیت کوین ها را بفروشید مطمئن شوید که شما بیت کوین ها را در کیف پول صدر  کریپتو خود موجود دارید</p>
        </v-card-text>

        <v-radio-group v-model="selectedTradeType" class="pt-0">
            <v-radio
            v-for="tradeType in tradeTypes"
            :key="tradeType.Id"
            :label="tradeType.tradeTypeTitle"
            :value="tradeType.tradeTypeTitle"
            class="fontIran mt-0"
            color="cyan accent-2"
            ></v-radio>
        </v-radio-group>
        <v-layout row wrap>
            <v-flex sm6 md6 lg3>
                <v-text-field
                class="mr-3 fontIran "
                label="موقعیت مکانی"
                color="cyan accent-2"
                clearable
                dense
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
                <v-autocomplete
                v-validate="'required'"
                :items="selectCurrencies"
                v-model="selectedCurrency"
                :error-messages="errors.collect('select')"
                data-vv-name="select"
                label="نوع ارز"
                class="textField mr-3 fontIran"
                color="cyan accent-2" 
                browser-autocomplete
                dense
                >
                </v-autocomplete>
            </v-flex>

            <v-flex sm6 md6 lg6>
                <p class="fontIran caption pt-1">شما میتوانید هر ارزی را که میخواهید با آن تجارت کنید را انتخاب کنید.</p>
            </v-flex>
       
            <v-flex sm6 md6 lg6>
                <v-text-field
                class="textField mr-3 fontIran"
                label="محدوده تغییرات"
                color="cyan accent-2"
                v-model="advertise.margin"
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
                v-model="advertise.priceEquation"
                >
                </v-text-field>
            </v-flex>

            <v-flex sm6 md6 lg6>
                <p class="fontIran caption pt-1">محدوده ای که می خواهید بیش از قیمت بازار بیت کوین باشد. ارزش منفی برای خرید یا فروش زیر قیمت بازار را برای جذب مخاطبین بیشتر مورد استفاده قرار دهید. برای قیمت های پیچیده تر ویرایش معادله قیمت به طور مستقیم<span class="fontIran green--text">6,266.70 USD/BTC</span></p>    
            </v-flex>
        </v-layout>

        <v-card-text>
            <v-divider></v-divider>

            <ul class="fontIran mt-4 mb-4 pr-3">
                <li class="pb-3">چگونه قیمت معاملات از قیمت بازار ساعتی تعیین می شود؟</li>
                <li class="pb-3">برای اطلاعات بیشتر در رابطه با معادلات نحوه تعریف قیمت معاملاتی خود به سوالات <router-link to="" class="fontsIran">قیمت گذاری</router-link> مراجعه کنید.</li>
                <li>لطفا توجه داشته باشید که همیشه تبلیغ کننده مسئول پرداخت هزینه پردازش پرداخت است.</li>
            </ul>
        </v-card-text>

         <v-layout row wrap>
            <v-flex sm6 md6 lg6>
                <v-text-field
                class="textField mr-3 fontIran"
                label="کمترین مقدار معامله"
                color="cyan accent-2"
                v-model="advertise.minTransactionLimit"
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
                color="cyan accent-2"
                v-model="advertise.minTransactionLimit"
                >
                </v-text-field>
            </v-flex>

            <v-flex sm6 md6 lg6>
                <p class="fontIran caption pt-1">اختیاری. حداکثر حد معامله در یک تجارت. برای فروش آنلاین، تعادل کیفی صدر کریپتو شما می تواند حداکثر تجارت قابل اعتماد را نیز محدود کند.</p>    
            </v-flex>
        
            <v-flex sm6 md6 lg6>
                <v-text-field
                class="textField mr-3 fontIran"
                label="محدودیت مقدار معامله"
                color="cyan accent-2"
                v-model="advertise.restrictAmountTo"
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

        <v-card-text class="fontIran"> 
            <p>روزها و ساعت هایی که میخواهید آگهی و تبلیغات شما نشان داده شود:</p>
        </v-card-text>
        
        <v-container grid-list-md>
            <v-layout row wrap>
                <v-flex>
                    <WorkingHour1></WorkingHour1>
                </v-flex>
            </v-layout>
        </v-container>

        <v-layout row wrap>
            <v-flex sm6 md6 lg6>
                <v-textarea
                class="textField mr-3 fontIran"
                label="شرایط تجارت"
                box
                color="cyan accent-2"
                v-model="advertise.termsOfTrade"
                >
                </v-textarea>
            </v-flex>

            <v-flex sm6 md6 lg6>
                <p class="fontIran caption pt-2">سایر اطلاعاتی که میخواهید درباره تجارت خود بگویید<br>.مثال1:این تبلیغات صرفا برای معاملات نقدی است اگر میخواهید با پرداخ ت آنلاین باما تماس بپیرید.
                        مثال2:لطفا درخواست را فقط زمانی که میتوانید پرداخت را با پول نقد ظرف مدت 12 ساعت تکمیل کمید.<br></p>    
            </v-flex>
        </v-layout>

        <v-card-text class="fontIran">
            <p>گزینه های نقدینگی</p>
            <v-divider></v-divider>
        </v-card-text>

        <v-layout row wrap>
            <v-flex sm6 md6 lg6>
                <v-checkbox
                label="پیگیری نقدینگی"
                class="fontIran pr-3"    
                color="cyan accent-2"   
                v-model="advertise.trackLiquidity"            
                >
                </v-checkbox>
            </v-flex>
            <v-flex sm6 md6 lg6>
                <span class="fontIran caption">.این گزینه نقدینگی این تبلیغ را به حداکثر محدود می کند. محدودیت معامله خریداران می توانند معاملات را بیش از این مقدار باز نکنند</span>    
            </v-flex>
        </v-layout>

        <v-card-text class="fontIran">
            <p>گزینه های امنیتی</p>
            <v-divider></v-divider>
        </v-card-text>
  
        <v-layout row wrap>
            <v-flex sm6 md6 lg6>
                <v-checkbox
                label="فقط شناسایی افراد"
                class="fontIran pr-3" 
                color="cyan accent-2" 
                v-model="advertise.identifiedPeopleOnly"                 
                >
                </v-checkbox>
            </v-flex>
            <v-flex sm6 md6 lg6>
                <span class="fontIran caption">.برای تماس با تبلیغات خود، کاربران باید هویت خود را با ارسال شناسه،گواهینامه رانندگی یا گذرنامه تأیید کنند</span>    
            </v-flex>
        </v-layout>
        
        <v-layout row wrap>
            <v-flex sm6 md6 lg6>
                <v-checkbox
                label="تاییدیه پیامک"
                class="fontIran pr-3"   
                color="cyan accent-2"        
                v-model="advertise.smsVerification"        
                >
                </v-checkbox>
            </v-flex>
            <v-flex sm6 md6 lg6>
                <span class="fontIran caption">.فقط تماس با یک شماره تلفن همراه تأیید شده می تواند از طریق تبلیغ شما با شما تماس بگیرد</span>    
            </v-flex>
        </v-layout>

        <v-layout row wrap>
            <v-flex sm6 md6 lg6>
                <v-checkbox
                label="اعتماد مردم"
                class="fontIran pr-3"   
                color="cyan accent-2"  
                v-model="advertise.trustedPeopleOnly"              
                >
                </v-checkbox>
            </v-flex>
            <v-flex sm6 md6 lg6>
                <span class="fontIran caption">.تبلیغات خود را محدود کنید تا تنها به کاربران نشان داده شود که شما به عنوان اعتماد علامتگذاری کرده اید<router-link class="fontsIran" to="">چگونگی علامت گذاری به کاربران مورد اعتماد</router-link>.</span>    
            </v-flex>
        </v-layout>

        

        <Footer></Footer>
        </v-flex>
    </v-layout> 
</template>
<script>

import { mapState, mapActions, mapGetters } from 'vuex';

import WorkingHour1 from './../components/WorkingHour1.vue';
import Footer from './../components/Footer.vue';

export default{
    data:() => ({
        advertise:{
            tradeTypeId: 0,
            countryId: 0,
            cryptoCurrencyId: 0,
            margin: 0,
            priceEquation: '',
            minTransactionLimit: 0,
            maxTransactionLimit: 0,
            restrictAmountTo: 0,
            termsOfTrade: '',
            trackLiquidity: false,
            identifiedPeopleOnly: false,
            smsVerification : false,
            trustedPeopleOnly: false,
            ownerId: 0
        },
        checkbox:true,
        radioGroup:1,
        
    }),
    methods:{
        ...mapActions('tradeTypes', { findTradeTypes: 'find'}),
        ...mapActions('countries', { findCountries: 'find'}),
        ...mapActions('cryptoCurrencies', { findCryptCurrencies: 'find'}),

        createAdvertise(){
            if (this.valid){
                const { Advertise } = this.$FeathersVuex;
                const advertise = new Advertise( this.advertise);
                console.log(advertise);
                
                //advertise.save();
            }
        },
    },
    mounted (){
        this.findTradeTypes()
            .then( response => {
                const tradeType = response.data || response;
                
            }),
        
        this.findCountries()
            .then(response => {
                const countries = response.data || response;
            }),
           
        this.findCryptCurrencies()
            .then(response => {
                const cryptoCurrencies = response.data || response;  
            })
    },
    computed: {
        ...mapState(['currencyMenu', 'currency']),
        ...mapState('tradeTypes', { loadingTradeTypes: 'isFindPending'}),
        ...mapState('countries', { loadingCountries: 'isFindPending'}),
        ...mapState('cryptoCurrencies', { loadingCryptoCurrencies: 'isFindPending'}),

        ...mapGetters('tradeTypes', { findTradeTypesOnline: 'find'}),
        ...mapGetters('cryptoCurrencies', { findCryptoCurrenciesOnline: 'find'}),
        ...mapGetters('countries', { findCountriesOnline: 'find' }),

        tradeTypes(){
            return this.findTradeTypesOnline().data;
        },

        countries(){
            return this.findCountriesOnline().data;
        },

        cryptoCurrencies() {
            return this.findCryptoCurrenciesOnline().data;
        },
        selectedTradeType:{
            get:function(){
                var tradeTypeTitle, tradeTypeModel;

                tradeTypeModel = this.tradeTypes.find(tradeType => tradeType.Id == this.advertise.tradeTypeId);

                if(tradeTypeModel != null){
                    tradeTypeTitle = tradeTypeModel.tradeTypeTitle;
                }
                return tradeTypeTitle || null;
            },
            set:function(newValue){
                this.advertise.tradeTypeId = this.tradeTypes.find( tt => tt.tradeTypeTitle == newValue).Id;

                console.log(this.advertise);
                
            }
        },
        selectedCurrency:{
           get: function(){
               var currencyFullName, currencyModel;
               currencyModel = this.cryptoCurrencies.find(currency => currency.Id == this.advertise.cryptoCurrencyId);
               
               if (currencyModel != null){
                    currencyFullName = currencyModel.cryptoCurrencyCode + ' ' + 
                                  currencyModel.cryptoCurrencyName + ' ' + 
                                  currencyModel.cryptoCurrencyTitle;
               }
              
               return currencyFullName || null;                   

           },
           set:function(newValue){
               var cryptoCurrencyCode = newValue.split(' ');
               var currencyModel = this.cryptoCurrencies.find(currency => currency.cryptoCurrencyCode == cryptoCurrencyCode[0]);
               this.advertise.cryptoCurrencyId = currencyModel.Id;
           } 
        },
        
        selectCurrencies(){
            var selected = [];
            this.cryptoCurrencies.map(v =>{
                    selected.push(v.cryptoCurrencyCode + ' ' + v.cryptoCurrencyName + ' ' + v.cryptoCurrencyTitle) ;
                });
            return selected;//.cryptoCurrencyName + ' ' + cryptoCurrencies.cryptoCurrencyCode;
        },
            
    },
    components:{
        Footer,
        WorkingHour1
    }
}
</script>
<<<<<<< HEAD
=======
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
>>>>>>> 9f39430419e36cbfd63ea1bf0d00f0ec4d00f4b3
