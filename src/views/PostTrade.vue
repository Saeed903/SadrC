<template>
    <v-card>
        <v-card-text>
            <p class="fontIran text-xs-center">ثبت آگهی{{currency}}</p>
            <p class="fontIran text-xs-center"><v-icon color="red">warning</v-icon>لطفا قبل از ثبت آگهی <router-link to="/Login" class="fontsIran">ورود</router-link> یا <router-link to="/signUp" class="fontsIran">ثبت نام</router-link> کنید!</p>
        </v-card-text>
        <v-card></v-card>
        <v-divider></v-divider>
        <v-card-text>
            <p class="fontIran text-xs-center">قوانین و مقررات تبلیغاتی:</p>
            <ul class="fontIran pr-3">
                <li class="mb-3">.برای نمایش تبلیغات شما باید بیت کوین را در کیف پول صدر کریپتو خود داشته باشید. شما برای تبلیغات با روش های پرداخت آنلاین و 0.04<br> بیت کوین یا بیشتر برای تبلیغات محلی (نقد) نیاز به 0.04 بیت کوین یا بیشتر دارید</li>
                <li class="mb-3">.برخی از روش های پرداخت مستلزم آن هستند که قبل از اینکه آگهی های شما قابل مشاهده باشند، باید شناسه،شناسایی شوند</li>
                <li class="mb-3">.هر تبلیغ کننده هزینه های تراکنش تکمیل شده 1٪ از کل مبلغ تجاری است<span><router-link to="" class="fontsIran">.تمام هزینه ها را در صفحه هزینه های ما مشاهده کنید</router-link></span></li>
                <li class="mb-3">.هنگامی که یک بازرگانی باز شود، قیمت نهایی است، مگر اینکه یک اشتباه روشن در قیمت گذاری وجود داشته باشد</li>
                <li class="mb-3">.شما مجاز به خرید یا فروش بیت کوین از طرف شخص دیگری (واسطه) نیستید.</li>
                <li class="mb-3">.شما فقط می توانید از حساب های پرداخت شده که به نام خود ثبت شده (بدون پرداخت شخص ثالث!) استفاده کنید</li>
                <li class="mb-3">.شما باید جزئیات پرداخت خود را در تبلیغات و یا در چت تجاری قرار دهید</li>
                <li class="mb-3">.همه ارتباطات باید در صدر کریپتواتفاق بیافتد</li>
                <li class="mb-3">.روش های پرداخت مشخص شده است <span class="fontIran">ریسک بالا</span> داشتن یک <span class="fontIran">خطر عمده تقلب</span>.هنگام استفاده از روشهای پرداخت با ریسک بالا، مراقب باشید و همیشه آی دی را تأیید کنید</li>
            </ul>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-text class="fontIran">نوع تجارتی که میخواهید انجام دهید:</v-card-text>
        <v-card-text class="fontIran pt-0">
            <p>اگر بخواهید بیت کوین ها را بفروشید مطمئن شوید که شما بیت کوین ها را در کیف پول صدر  کریپتو خود موجود دارید</p>
        </v-card-text>
        <v-radio-group v-model="radioGroup">
            <v-radio
            v-for="tradeType in tradeTypes"
            :key="tradeType"
            :label="tradeType"
            :value="tradeType"
            class="fontIran mt-0"
            ></v-radio>
        </v-radio-group>

        <v-layout row wrap>
            <v-flex sm6 md6 lg6>
                <v-card dark tile flat>
                    <v-text-field
                    class="mr-3 fontIran"
                    label="موقعیت مکانی"
                    box
                    >
                    <template slot="label">
                        موقعیت مکانی <v-icon style="vertical-align: middle;color:aqua">place</v-icon>
                    </template>
                    </v-text-field>
                </v-card>
            </v-flex>
            <v-flex sm6 md6 lg6>
                <v-card dark tile flat>
                    <v-card-text class="fontIran caption pt-1">برای تجارت آنلاین شما نیاز به مشخص کردن کشور, تجارت محلی، لطفا شهر، کد پستی و یا نام خیابان را مشخص کنید</v-card-text>
                </v-card>
            </v-flex>
        </v-layout>

        <v-layout row wrap>
            <v-flex sm6 md6 lg6>
                <v-card dark tile flat >
                    <v-select
                    v-validate="'required'"
                    :items="selectCurrency"
                    v-model="select"
                    :error-messages="errors.collect('select')"
                    data-vv-name="select"
                    label="نوع ارز"
                    class="textField mr-3 fontIran" 
                    box
                    
                    >
                    </v-select>
                </v-card>
            </v-flex>
            <v-flex sm6 md6 lg6>
                <v-card dark tile flat>
                    <v-card-text class="fontIran caption pt-1">شما میتوانید هر ارزی را که میخواهید با آن تجارت کنید را انتخاب کنید.</v-card-text>
                </v-card>
            </v-flex>
        </v-layout>

        <v-layout row wrap>
            <v-flex sm6 md6 lg6>
                <v-card dark tile flat >
                    <v-text-field
                    class="textField mr-3 fontIran"
                    label="محدوده تغییرات"
                    box
                    >
                    </v-text-field>
                </v-card>
            </v-flex>
            <v-flex sm6 md6 lg6>
                <v-card dark tile flat>
                    <v-card-text class="fontIran caption pt-1">محدوده ای که می خواهید بیش از قیمت بازار بیت کوین باشد. ارزش منفی برای خرید یا فروش زیر قیمت بازار را برای جذب مخاطبین بیشتر مورد استفاده قرار دهید. برای قیمت های پیچیده تر ویرایش معادله قیمت به طور مستقیم.</v-card-text>
                </v-card>
            </v-flex>
        </v-layout>

        <v-layout row wrap pb-4>
            <v-flex sm6 md6 lg6>
                <v-card dark tile flat >
                    <v-text-field
                    class="textField mr-3 fontIran"
                    label="معادل قیمت"
                    box
                    >
                    </v-text-field>
                </v-card>
            </v-flex>
            <v-flex sm6 md6 lg6>
                <v-card dark tile flat>
                    <v-card-text class="fontIran caption pt-1">محدوده ای که می خواهید بیش از قیمت بازار بیت کوین باشد. ارزش منفی برای خرید یا فروش زیر قیمت بازار را برای جذب مخاطبین بیشتر مورد استفاده قرار دهید. برای قیمت های پیچیده تر ویرایش معادله قیمت به طور مستقیم<span class="fontIran green--text">6,266.70 USD/BTC</span></v-card-text>    
                </v-card>
            </v-flex>
        </v-layout>
        <v-divider></v-divider>

        <v-card-text>
        <ul class="fontIran mt-4 mb-4 pr-3">
            <li class="pb-3">چگونه قیمت معاملات از قیمت بازار ساعتی تعیین می شود?</li>
            <li class="pb-3">برای اطلاعات بیشتر در رابطه با معادلات نحوه تعریف قیمت معاملاتی خود به سوالات <router-link to="" class="fontsIran">قیمت گذاری</router-link> مراجعه کنید.</li>
            <li>لطفا توجه داشته باشید که همیشه تبلیغ کننده مسئول پرداخت هزینه پردازش پرداخت است.</li>
        </ul>
        </v-card-text>

         <v-layout row wrap>
            <v-flex sm6 md6 lg6>
                <v-card dark tile flat >
                    <v-text-field
                    class="textField mr-3 fontIran"
                    label="کمترین مقدار معامله"
                    box
                    >
                    </v-text-field>
                </v-card>
            </v-flex>
            <v-flex sm6 md6 lg6>
                <v-card dark tile flat>
                    <v-card-text class="fontIran caption pt-1">کمترین مقدار معامله در یک تجارت اختیاری است</v-card-text>    
                </v-card>
            </v-flex>
        </v-layout>
  
          <v-layout row wrap>
            <v-flex sm6 md6 lg6>
                <v-card dark tile flat >
                    <v-text-field
                    class="textField mr-3 fontIran"
                    label="بیشترین مقدار معامله"
                    box
                    >
                    </v-text-field>
                </v-card>
            </v-flex>
            <v-flex sm6 md6 lg6>
                <v-card dark tile flat>
                    <v-card-text class="fontIran caption pt-1">.اختیاری. حداکثر حد معامله در یک تجارت. برای فروش آنلاین، تعادل کیفی صدر کریپتو شما می تواند حداکثر تجارت قابل اعتماد را نیز محدود کند</v-card-text>    
                </v-card>
            </v-flex>
        </v-layout>

        <v-layout row wrap>
            <v-flex sm6 md6 lg6>
                <v-card dark tile flat >
                    <v-text-field
                    class="textField mr-3 fontIran"
                    label="محدودیت مقدار معامله"
                    box
                    >
                    </v-text-field>
                </v-card>
            </v-flex>
            <v-flex sm6 md6 lg6>
                <v-card dark tile flat>
                    <v-card-text class="fontIran caption pt-1">.اختیاری. مقدار معامله را محدود به عدد صحیح جدا از عدد کاما، به عنوان مثال 20،50،100. در ارز فیات (دلار / یورو / و غیره). دستی برای کوین، کارت هدیه و غیره</v-card-text>    
                </v-card>
            </v-flex>
        </v-layout>
        <v-divider></v-divider>  

        <v-card-text class="fontIran">روزها و ساعت هایی که میخواهید آگهی و تبلیغات شما نشان داده شود:</v-card-text>
        
        <v-layout row wrap>
            <v-flex>
                <v-card dark>
                    <v-card-media class="fontIran">
                        <div class="pt-2">
                            <v-card-text class="">شنبه</v-card-text>
                        </div>
                        <div>
                            <v-select label="از ساعت"></v-select>
                        </div>
                        <div>
                            <v-select label="تا ساعت"></v-select>
                        </div>
                    </v-card-media>
                </v-card>
                <v-card dark>
                    <v-card-media class="fontIran">
                        <div class="pt-2">
                            <v-card-text>1شنبه</v-card-text>
                        </div>
                        <div>
                            <v-select label="از ساعت"></v-select>
                        </div>
                        <div>
                            <v-select label="تا ساعت"></v-select>
                        </div>
                    </v-card-media>
                </v-card>
                <v-card dark>
                    <v-card-media class="fontIran">
                        <div class="pt-2">
                            <v-card-text class="">2شنبه</v-card-text>
                        </div>
                        <div>
                            <v-select label="از ساعت"></v-select>
                        </div>
                        <div>
                            <v-select label="تا ساعت"></v-select>
                        </div>
                    </v-card-media>
                </v-card>
                <v-card dark>
                    <v-card-media class="fontIran">
                        <div class="pt-2">
                            <v-card-text class="">3شنبه</v-card-text>
                        </div>
                        <div>
                            <v-select label="از ساعت"></v-select>
                        </div>
                        <div>
                            <v-select label="تا ساعت"></v-select>
                        </div>
                    </v-card-media>
                </v-card>
                <v-card dark>
                    <v-card-media class="fontIran">
                        <div class="pt-2">
                            <v-card-text class="">4شنبه</v-card-text>
                        </div>
                        <div>
                            <v-select label="از ساعت"></v-select>
                        </div>
                        <div>
                            <v-select label="تا ساعت"></v-select>
                        </div>
                    </v-card-media>
                </v-card>
                <v-card dark>
                    <v-card-media class="fontIran">
                        <div class="pt-2">
                            <v-card-text class="">5شنبه</v-card-text>
                        </div>
                        <div>
                            <v-select label="از ساعت"></v-select>
                        </div>
                        <div>
                            <v-select label="تا ساعت"></v-select>
                        </div>
                    </v-card-media>
                </v-card>
                <v-card dark>
                    <v-card-media class="fontIran">
                        <div class="pt-2">
                            <v-card-text class="">جمعه</v-card-text>
                        </div>
                        <div>
                            <v-select label="از ساعت"></v-select>
                        </div>
                        <div>
                            <v-select label="تا ساعت"></v-select>
                        </div>
                    </v-card-media>
                </v-card><v-card dark>
                    <v-card-media class="fontIran">
                        <v-card-text></v-card-text>
                    </v-card-media>
                </v-card>
            </v-flex>
        </v-layout>
  





        <div>
        <p>گزینه های نقدینگی</p>
        <v-divider></v-divider>
        </div>
        <div>
        <p>پیگیری نقدینگی</p>
        <v-checkbox></v-checkbox>
        <p>.این گزینه نقدینگی این تبلیغ را به حداکثر محدود می کند. محدودیت معامله خریداران می توانند معاملات را بیش از این مقدار باز نکنند</p>
        <p>.یک خریدار باز می شود تجارت برای 20 دلار حداکثر. معامله محدود به طور خودکار به 80 دلار کاهش یافته است. اگر خریدار تجارت را لغو کند، به قیمت 100 دلار بازگشت می کند و در صورتی که تجارت به پایان برسد، به 80 دلار می رسد</p>
        </div>
        <div>
        <p>گزینه های امنیتی</p>
        <v-divider></v-divider>
        </div>
        <div>
        <p>فقط شناسایی افراد</p>
        <v-checkbox></v-checkbox>
        <p>.برای تماس با تبلیغات خود، کاربران باید هویت خود را با ارسال شناسه، گواهینامه رانندگی یا گذرنامه تأیید کنند</p>
        </div>
        <v-divider></v-divider>
        <div>
        <p>.تأیید اس ام اس مورد نیاز است</p>
        <v-checkbox></v-checkbox>
        <p>.فقط تماس با یک شماره تلفن همراه تأیید شده می تواند از طریق تبلیغ شما با شما تماس بگیرد</p>
        </div>
        <v-divider></v-divider>
        <div>
        <p>فقط اعتماد مردم</p>
        <v-checkbox></v-checkbox>
        <p>.تبلیغات خود را محدود کنید تا تنها به کاربران نشان داده شود که شما به عنوان اعتماد علامتگذاری کرده اید<router-link to="">Learn how to mark users as trusted</router-link>.</p>
        </div>
        <div>
        <Footer/>
        </div>
    </v-card>
</template>
<script>
import { mapState, mapActions } from 'vuex';
import Footer from './../components/Footer.vue'
    export default{
        data(){
            return{
                checkbox:true,
                select:null,
                radioGroup:1,
                tradeTypes:[
                    "فروش بیت کوین خود در صدر کریپتو",
                    "خرید بیت کوین در صدر کریپتو",
                    "فروش بیت کوین آنلاین شما",
                    "خرید بیت کوین آنلاین"
                ],
                selectCurrency:[
                    'بیت کوین',
                    'اتریوم',
                    'زدکش',
                    'ترون',
                ],
    
            }
        },
        computed: {
            ...mapState(['currencyMenu'])
        },
        components:{
            Footer
        }
    }
</script>
<style scoped>
.fontIran{
    font-family:'Iranian Sans';
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
