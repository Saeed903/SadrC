<template>
    <div>
        <v-card-text class="text-xs-center">
            <span class="fontIran textCard">ثبت آگهی {{currency}}</span>
        </v-card-text>
        
        <v-alert
        :value="true"
        color="error"
        icon="warning"
        class="fontsIran"
        outline
        >
        لطفا قبل از ثبت آگهی <router-link to="/Login" class="textCard">ورود</router-link> یا <router-link to="/Login" class="textCard">ثبت نام</router-link> نمایید
        </v-alert>

        <v-divider class="mt-4 mb-3" color="grey"></v-divider>

        <v-card-text class="fontsIran1 text-xs-justify">
            <p class="fontIran text-xs-center pb-4">قوانین و مقررات تبلیغاتی:</p>
            <p class="mb-4"><v-icon class="pl-1" color="cyan accent-2" size="18px">reply</v-icon>برای نمایش تبلیغات شما باید بیت کوین را در کیف پول صدر کریپتو خود داشته باشید. شما برای تبلیغات با روش های پرداخت آنلاین و 0.04 بیت کوین یا بیشتر برای تبلیغات محلی (نقد) نیاز به 0.04 بیت کوین یا بیشتر دارید.</p>
            <p class="mb-4"><v-icon class="pl-1" color="cyan accent-2" size="18px">reply</v-icon>برخی از روش های پرداخت مستلزم آن هستند که قبل از اینکه آگهی های شما قابل مشاهده باشند، باید شناسه،شناسایی شوند.</p>
            <p class="mb-4"><span><v-icon class="pl-1" color="cyan accent-2" size="18px">reply</v-icon>هر تبلیغ کننده هزینه های تراکنش تکمیل شده 1٪ از کل مبلغ تجاری است<router-link to="" class="textCard">تمام هزینه ها را در صفحه هزینه های ما مشاهده کنید.</router-link></span></p>
            <p class="mb-4"><v-icon class="pl-1" color="cyan accent-2" size="18px">reply</v-icon>هنگامی که یک بازرگانی باز شود، قیمت نهایی است، مگر اینکه یک اشتباه روشن در قیمت گذاری وجود داشته باشد.</p>
            <p class="mb-4"><v-icon class="pl-1" color="cyan accent-2" size="18px">reply</v-icon>شما مجاز به خرید یا فروش بیت کوین از طرف شخص دیگری (واسطه) نیستید.</p>
            <p class="mb-4"><v-icon class="pl-1" color="cyan accent-2" size="18px">reply</v-icon>شما فقط می توانید از حساب های پرداخت شده که به نام خود ثبت شده (بدون پرداخت شخص ثالث!) استفاده کنید.</p>
            <p class="mb-4"><v-icon class="pl-1" color="cyan accent-2" size="18px">reply</v-icon>شما باید جزئیات پرداخت خود را در تبلیغات و یا در چت تجاری قرار دهید.</p>
            <p class="mb-4"><v-icon class="pl-1" color="cyan accent-2" size="18px">reply</v-icon>همه ارتباطات باید در صدر کریپتواتفاق بیافتد.</p>
            <p class="mb-4"><v-icon class="pl-1" color="cyan accent-2" size="18px">reply</v-icon>روش های پرداخت مشخص شده است ریسک بالا داشتن یک خطر عمده تقلب .هنگام استفاده از روشهای پرداخت با ریسک بالا، مراقب باشید و همیشه آی دی را تأیید کنید.</p>
        </v-card-text>

        <v-divider class="mt-4 mb-3" color="grey"></v-divider>


        <v-card>
            <v-card-text class="text-xs-justify">
                <p class="fontIran text-xs-center pb-4">نوع تجارتی که میخواهید انجام دهید:</p>
                <span class="fontsIran1"> اگر بخواهید بیت کوین ها را بفروشید مطمئن شوید که شما بیت کوین ها را در کیف پول صدر  کریپتو خود موجود دارید</span>
            </v-card-text>
            <v-form 
            v-model="valid"
            v-if="!loading"
            @submit.prevent="createAdvertise"
            @keydown.prevent.enter
            >
                <v-layout row wrap>
                    <v-flex sm6>
                        <v-tooltip bottom>
                            <div slot="activator">
                                <v-autocomplete
                                v-validate="'required'"
                                :items="selectCountries"
                                v-model="selectCountry"
                                :error-messages="errors.collect('selectCountries')"
                                data-vv-name="selectCountries"
                                label="کشور"
                                :disabled="!payload"
                                class="textField mr-3 fontIran"
                                color="cyan accent-2" 
                                browser-autocomplete
                                dense
                                clearable
                                >
                                    <v-tooltip v-if="!payload" slot="append">
                                        <v-icon slot="activator" color="red">block</v-icon>
                                    </v-tooltip>
                                </v-autocomplete>
                            </div>
                            <v-card-text class="fontIrans pt-3 text-xs-justify">برای تجارت آنلاین شما نیاز به مشخص کردن کشور, تجارت محلی، لطفا شهر، کد پستی و یا نام خیابان را مشخص کنید</v-card-text>
                        </v-tooltip>
                    </v-flex>

                    <v-flex sm6>
                        <v-tooltip bottom>
                            <div slot="activator">
                                <v-autocomplete
                                v-validate="'required'"
                                :disabled="!payload"
                                :items="selectCryptoCurrencies"
                                v-model="selectCryptoCurrency"
                                :error-messages="errors.collect('selectCryptoCurrency')"
                                data-vv-name="selectCryptoCurrency"
                                label="نوع ارز"
                                class="textField mr-3 fontIran"
                                color="cyan accent-2" 
                                browser-autocomplete
                                clearable
                                >
                                    <v-tooltip v-if="!payload" slot="append">
                                        <v-icon slot="activator" color="red">block</v-icon>
                                    </v-tooltip>
                                </v-autocomplete>
                            </div>
                           <v-card-text class="fontIrans pt-4 text-xs-justify">شما می توانید هر ارزی را که می خواهید با آن تجارت کنید را انتخاب کنید.</v-card-text>
                        </v-tooltip>
                    </v-flex>

                    <v-flex sm6>
                        <v-tooltip bottom>
                            <div slot="activator">
                            <v-text-field
                            class="textField mr-3 fontIran"
                            label="معادل قیمت"
                            :disabled="!payload"
                            color="cyan accent-2"
                            v-model="advertise.priceEquation"
                            clearable
                            >
                                <v-tooltip v-if="!payload" slot="append">
                                    <v-icon slot="activator" color="red">block</v-icon>
                                </v-tooltip>
                            </v-text-field>
                            </div>
                            <v-card-text class="fontIrans text-xs-justify">محدوده ای که می خواهید بیش از قیمت بازار بیت کوین باشد. ارزش منفی برای خرید یا فروش زیر قیمت بازار را برای جذب مخاطبین بیشتر مورد استفاده قرار دهید. برای قیمت های پیچیده تر ویرایش معادله قیمت به طور مستقیم.</v-card-text>
                        </v-tooltip>
                    </v-flex>

                    <v-flex sm6>
                        <v-tooltip bottom>
                            <div slot="activator">
                            <v-text-field
                            class="textField mr-3 fontIran"
                            label="محدوده تغییرات"
                            color="cyan accent-2"
                            :disabled="!payload"
                            v-model="advertise.margin"
                            clearable
                            >
                                <v-tooltip v-if="!payload" slot="append">
                                    <v-icon slot="activator" color="red">block</v-icon>
                                </v-tooltip>
                            </v-text-field>
                            </div>
                            <v-card-text class="fontIrans pt-3 text-xs-justify">محدوده ای که می خواهید بیش از قیمت بازار بیت کوین باشد. ارزش منفی برای خرید یا فروش زیر قیمت بازار را برای جذب مخاطبین بیشتر مورد استفاده قرار دهید. برای قیمت های پیچیده تر ویرایش معادله قیمت به طور مستقیم<span class="fontIran green--text">6,266.70 USD/BTC</span></v-card-text>    
                        </v-tooltip>
                    </v-flex>


                </v-layout>
            </v-form>
        </v-card>

            
            <v-divider class="mt-5 mb-3" color="grey"></v-divider>

            <v-card-text class="fontsIran1 text-xs-justify">
                    <p class="fontIran text-xs-center pb-4">چگونه قیمت معاملات از قیمت بازار ساعتی تعیین می شود؟</p>
                    <p><v-icon class="pl-1" color="cyan accent-2" size="18px">reply</v-icon>برای اطلاعات بیشتر در رابطه با معادلات نحوه تعریف قیمت معاملاتی خود به سوالات <router-link to="" class="textCard">قیمت گذاری</router-link> مراجعه کنید.</p>
                    <p><v-icon class="pl-1" color="cyan accent-2" size="18px">reply</v-icon>لطفا توجه داشته باشید که همیشه تبلیغ کننده مسئول پرداخت هزینه پردازش پرداخت است.</p>
            </v-card-text>

            <v-layout class="mt-4" row wrap>
                <v-flex xs10 sm5 md4 lg4 xl3>
                    <v-text-field
                    class="textField mr-3 fontIran"
                    label="کمترین مقدار معامله"
                    :disabled="!payload"
                    color="cyan accent-2"
                    v-model="advertise.minTransactionLimit"
                    clearable
                    >
                    <v-tooltip v-if="!payload" slot="append">
                            <v-icon slot="activator" color="red">block</v-icon>
                        </v-tooltip>
                    </v-text-field>
                </v-flex>
                <v-flex xs10 sm6 md5 lg4 xl4>
                   <v-card-text class="fontIrans text-xs-justify">کمترین مقدار معامله در یک تجارت اختیاری است</v-card-text>    
                </v-flex>
                <v-card-text>
                    <v-divider class="mt-4 mb-3"></v-divider>
                </v-card-text>

                <v-flex xs10 sm5 md4 lg4 xl3>
                    <v-text-field
                    class="textField mr-3 fontIran"
                    label="بیشترین مقدار معامله"
                    :disabled="!payload"
                    color="cyan accent-2"
                    v-model="advertise.maxTransactionLimit"
                    clearable
                    >
                    <v-tooltip v-if="!payload" slot="append">
                            <v-icon slot="activator" color="red">block</v-icon>
                        </v-tooltip>
                    </v-text-field>
                </v-flex>
                <v-flex xs10 sm6 md5 lg4 xl4>
                    <v-card-text class="fontIrans text-xs-justify">اختیاری. حداکثر حد معامله در یک تجارت. برای فروش آنلاین، تعادل کیفی صدر کریپتو شما می تواند حداکثر تجارت قابل اعتماد را نیز محدود کند.</v-card-text>    
                </v-flex>
                <v-card-text>
                    <v-divider class="mt-4 mb-3"></v-divider>
                </v-card-text>
    
                <v-flex xs10 sm5 md4 lg4 xl3>
                    <v-text-field
                    class="textField mr-3 fontIran"
                    label="محدودیت مقدار معامله"
                    :disabled="!payload"
                    color="cyan accent-2"
                    v-model="advertise.restrictAmountsTo"
                    clearable
                    >
                    <v-tooltip v-if="!payload" slot="append">
                            <v-icon slot="activator" color="red">block</v-icon>
                        </v-tooltip>
                    </v-text-field>
                </v-flex>

                <v-flex xs10 sm6 md5 lg4 xl4>
                     <v-card-text class="fontIrans text-xs-justify">.اختیاری. مقدار معامله را محدود به عدد صحیح جدا از عدد کاما، به عنوان مثال 20،50،100. در ارز فیات (دلار / یورو / و غیره). دستی برای کوین، کارت هدیه و غیره</v-card-text>       
                </v-flex>
                <v-card-text>
                    <v-divider class="mt-4 mb-3"></v-divider>
                </v-card-text>
                
        
                <v-flex xs10 sm5 md4 lg4 xl3>
                    <v-text-field
                    class="textField mr-3 fontIran"
                    label="معادل قیمت"
                    color="cyan accent-2"
                    :disabled="!payload"
                    v-model="advertise.priceEquation"
                    clearable
                    >
                    <v-tooltip v-if="!payload" slot="append">
                            <v-icon slot="activator" color="red">block</v-icon>
                        </v-tooltip>
                    </v-text-field>
                </v-flex>

                <v-flex xs10 sm6 md5 lg4 xl4>
                    <v-card-text class="fontIrans pt-3 text-xs-justify">محدوده ای که می خواهید بیش از قیمت بازار بیت کوین باشد. ارزش منفی برای خرید یا فروش زیر قیمت بازار را برای جذب مخاطبین بیشتر مورد استفاده قرار دهید. برای قیمت های پیچیده تر ویرایش معادله قیمت به طور مستقیم<span class="fontIran green--text">6,266.70 USD/BTC</span></v-card-text>    
                </v-flex>
            </v-layout>
        
            <v-divider class="mt-5 mb-3" color="grey"></v-divider>
            
            <v-card-text class="fontsIran text-xs-center"> 
                <p class="fontIran">روزها و ساعت هایی که می خواهید آگهی و تبلیغات شما نشان داده شود:</p>
            </v-card-text>
    
            <v-container grid-list-md>
                <v-layout row wrap>
                    <v-flex>
                        <WorkingHour1></WorkingHour1>
                    </v-flex>
                </v-layout>
            </v-container>
         
            <v-divider class="mt-5 mb-4" color="grey"></v-divider>

            <p class="fontIran text-xs-center pb-4">شرایط تجارت</p>

            <v-layout row wrap>
                <v-flex xs12 sm8 md7 lg5 xl5>
                    <v-textarea
                    class="logCard mr-3 fontIran"
                    label="شرایط تجارت"
                    box
                    style="background-color:#37474F;"
                    :disabled="!payload"
                    color="cyan accent-2"
                    v-model="advertise.termsOfTrade"
                    clearable
                    >
                    <v-tooltip v-if="!payload" slot="append">
                            <v-icon slot="activator" color="red">block</v-icon>
                        </v-tooltip>
                    </v-textarea>
                </v-flex>

                <v-flex xs12 sm8 md5 lg6 xl5>
                    <v-card-text class="fontIrans pt-2 text-xs-justify">سایر اطلاعاتی که میخواهید درباره تجارت خود بگویید.مثال1:این تبلیغات صرفا برای معاملات نقدی است اگر میخواهید با پرداخ ت آنلاین باما تماس بپیرید.
                            مثال2:لطفا درخواست را فقط زمانی که میتوانید پرداخت را با پول نقد ظرف مدت 12 ساعت تکمیل کنید.</v-card-text>    
                </v-flex>
            </v-layout>
        
            <v-divider class="mt-5 mb-4" color="grey"></v-divider>

            <v-card-text class="fontIran text-xs-center">
                <p>گزینه های نقدینگی</p>
            </v-card-text>

            <v-layout row wrap>
                <v-flex sm4 md3 lg3 xl3>
                    <v-checkbox
                    label="پیگیری نقدینگی"
                    class="fontIran"    
                    color="cyan accent-2"   
                    :disabled="!payload"
                    v-model="advertise.trackLiquidity"            
                    >
                    <v-tooltip v-if="!payload" slot="append">
                        <v-icon slot="activator" color="red">block</v-icon>
                    </v-tooltip>
                    </v-checkbox>
                </v-flex>
             
                <v-flex sm5 md4 lg3 xl3>
                    <p class="fontIrans text-xs-justify">.این گزینه نقدینگی این تبلیغ را به حداکثر محدود می کند. محدودیت معامله خریداران می توانند معاملات را بیش از این مقدار باز نکنند</p>    
                </v-flex>
            </v-layout>
        
            <v-divider class="mt-5 mb-4" color="grey"></v-divider>

            <v-card-text class="fontIran text-xs-center">
                <p>گزینه های امنیتی</p>
            </v-card-text>

            <v-layout row wrap>
                <v-flex sm4 md3 lg3 xl3>
                    <v-checkbox
                    label="فقط شناسایی افراد"
                    class="fontIran" 
                    :disabled="!payload"
                    color="cyan accent-2" 
                    v-model="advertise.identifiedPeopleOnly"                 
                    >
                    <v-tooltip v-if="!payload" slot="append">
                        <v-icon slot="activator" color="red">block</v-icon>
                    </v-tooltip>
                    </v-checkbox>
                </v-flex>
                <v-flex sm5 md4 lg3 xl3>
                    <p class="fontIrans text-xs-justify">.برای تماس با تبلیغات خود، کاربران باید هویت خود را با ارسال شناسه،گواهینامه رانندگی یا گذرنامه تأیید کنند</p>    
                </v-flex>
            </v-layout>
            <v-divider></v-divider>
            <v-layout row wrap>
                <v-flex sm4 md3 lg3 xl3>
                    <v-checkbox
                    label="تاییدیه پیامک"
                    :disabled="!payload"
                    class="fontIran"   
                    color="cyan accent-2"        
                    v-model="advertise.smsVerification"        
                    >
                    <v-tooltip v-if="!payload" slot="append">
                        <v-icon slot="activator" color="red">block</v-icon>
                    </v-tooltip>
                    </v-checkbox>
                </v-flex>
                <v-flex sm5 md4 lg3 xl3>
                    <p class="fontIrans text-xs-justify">.فقط تماس با یک شماره تلفن همراه تأیید شده می تواند از طریق تبلیغ شما با شما تماس بگیرد</p>    
                </v-flex>
            </v-layout>
            <v-divider></v-divider>
            <v-layout row wrap>
                <v-flex sm4 md3 lg3 xl3>
                    <v-checkbox
                    label="اعتماد مردم"
                    :disabled="!payload"
                    class="fontIran"   
                    color="cyan accent-2"  
                    v-model="advertise.trustedPeopleOnly"              
                    >
                    <v-tooltip v-if="!payload" slot="append">
                        <v-icon slot="activator" color="red">block</v-icon>
                    </v-tooltip>
                    </v-checkbox>
                </v-flex>
                <v-flex sm5 md4 lg3 xl3>
                    <p class="fontIrans text-xs-justify">.تبلیغات خود را محدود کنید تا تنها به کاربران نشان داده شود که شما به عنوان اعتماد علامتگذاری کرده اید<router-link class="textCard" to="">چگونگی علامت گذاری به کاربران مورد اعتماد</router-link>.</p>    
                </v-flex>
            </v-layout>

            <v-btn type="submit" class="fontsIran mt-5 mb-5" :disabled="!valid" color="cyan accent-2" outline>ثبت اطلاعات</v-btn>

        </v-form>
        <Footer class="pt-5"></Footer>
    </div>
</template>
<script>

import { mapState, mapActions, mapGetters } from 'vuex';

import WorkingHour1 from './../components/WorkingHour1.vue';
import Footer from './../components/Footer.vue';

export default{
    data:() => ({
        valid:false,
        advertise:{
            tradeTypeId: null,
            countryId: null,
            cryptoCurrencyId: null,
            margin: 0,
            priceEquation: '',
            minTransactionLimit: 0,
            maxTransactionLimit: 0,
            restrictAmountsTo: 0,
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
                
                advertise.save()
                    .then(response => {
                        alert('ثبت با موفقیت انجام شد.')
                    });
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
        ...mapState('advertises', {loading: 'isCreatePending'}),
        ...mapState(['currencyMenu', 'currency']),
        ...mapState('tradeTypes', { loadingTradeTypes: 'isFindPending'}),
        ...mapState('countries', { loadingCountries: 'isFindPending'}),
        ...mapState('cryptoCurrencies', { loadingCryptoCurrencies: 'isFindPending'}),
        ...mapState ('auth', { payload: 'payload' }),

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
        selectCountry: {
            get:function(){
                var countryModel, country;
                countryModel = this.countries.find(country => country.Id == this.advertise.countryId);

                if(countryModel !=null ){
                    country = countryModel.countryName;
                }
                return country ;
            },
            set:function(selectedCountryName){
                this.advertise.countryId = this.countries.find(country => country.countryName == selectedCountryName).Id;
            }
        },
  

        selectCountries(){
            var selected = [];
            this.countries.map( country => {
                selected.push(country.countryName);
            })
            return selected;
        },
        
        selectCryptoCurrencies(){
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
<style scoped>
.fontsIran1{
    font-family:'Iranian Sans';
    color:#BDBDBD;
}
.textCard{
    color:#18FFFF;
}
.logCard{
  border:1px solid #18FFFF;
  box-shadow:0px 0px 25px 1px #18FFFF;
}
.logCards{
  border:1px solid #D50000;
  box-shadow:1px 1px 40px 1px #D50000;
}
</style>

