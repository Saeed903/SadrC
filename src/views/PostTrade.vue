<template>
    <div>
        <div>
            <p class="createBitcoin">.تبلیغات تجاری بیت کوین را ایجاد کنید</p>
        </div>
        <div class="advertisement">
            <p class="beforeCreate">لطفا <router-link to="/Login" class="topLogText">ورود</router-link> یا <router-link to="/signUp" class="topLogText0">ثبت نام</router-link> قبل از ایجاد تبلیغات</p>
        </div>
        <div>
            <p class="rules">قوانین و مقررات تبلیغاتی</p>
            <ul>
                <li>.برای نمایش تبلیغات شما باید بیت کوین را در کیف پول صدر کریپتو خود داشته باشید. شما برای تبلیغات با روش های پرداخت آنلاین و 0.04 بیت کوین یا بیشتر برای تبلیغات محلی (نقد) نیاز به 0.04 بیت کوین یا بیشتر دارید</li>
                <li>.برخی از روش های پرداخت مستلزم آن هستند که قبل از اینکه آگهی های شما قابل مشاهده باشند، باید شناسه،شناسایی شوند</li>
                <li>.هر تبلیغ کننده هزینه های تراکنش تکمیل شده 1٪ از کل مبلغ تجاری است<span><router-link to="" class="fees">.تمام هزینه ها را در صفحه هزینه های ما مشاهده کنید</router-link></span></li>
                <li>.هنگامی که یک بازرگانی باز شود، قیمت نهایی است، مگر اینکه یک اشتباه روشن در قیمت گذاری وجود داشته باشد</li>
                <li>.شما مجاز به خرید یا فروش بیت کوین از طرف شخص دیگری (واسطه) نیستید.</li>
                <li>.شما فقط می توانید از حساب های پرداخت شده که به نام خود ثبت شده (بدون پرداخت شخص ثالث!) استفاده کنید</li>
                <li>.شما باید جزئیات پرداخت خود را در تبلیغات و یا در چت تجاری قرار دهید</li>
                <li>.همه ارتباطات باید در صدر کریپتواتفاق بیافتد</li>
                <li>.روش های پرداخت مشخص شده است <span class="span">ریسک بالا</span> داشتن یک <span class="span">خطر عمده تقلب</span>.هنگام استفاده از روشهای پرداخت با ریسک بالا، مراقب باشید و همیشه آی دی را تأیید کنید</li>
            </ul>
        </div>
        <div>
            <p class="tradeType">نوع تجارت</p>
        </div>
        <v-divider></v-divider>
        <div>
                <p class="wantText">...من می خواهم</p>
                <v-radio-group v-model="radioGroup">
                    <v-radio
                        v-for="tradeType in tradeTypes"
                        :key="tradeType"
                        :label="tradeType"
                        :value="tradeType"
                    ></v-radio>
                </v-radio-group>
                <p class="kindTrade">چه نوع تبلیغ تجاری شما می خواهید ایجاد کنید؟<br>اگر بخواهید بیت کوین ها را بفروشید مطمئن شوید<br> شما بیت کوین ها را در کیف پول صدر کریپتو خود دارید</p>
        </div>
        <v-divider></v-divider>
        <div>
            <v-text-field label="محل خود را وارد کنید"></v-text-field>
        </div>
        <div>
            
            <v-divider></v-divider>
        </div>
        <div>
            
            <v-text-field label="پول را وارد کنید"></v-text-field>
        </div>
        <v-divider></v-divider>
        <div>
            
            <v-text-field label="حاشیه را وارد کنید"></v-text-field>
            <p>.لبه ها که بیش از قیمت بازار بیتکوین می خواهید. برای جذب مخاطبین بیشتر از ارزش منفی برای خرید یا فروش زیر قیمت بازار استفاده کنید. برای قیمت های پیچیده تر ویرایش معادله قیمت به طور مستقیم</p>
        </div>
        <div>
            <p></p>
            <v-text-field label="قیمت معامله"></v-text-field>
            <p>قیمت تجاری با ارزش بازار فعلی 6496.30 دلار / بیت کوین</p>
            <p>.چگونه قیمت معاملات از قیمت بازار ساعتی تعیین می شود. برای اطلاعات بیشتر در رابطه با معادلات نحوه تعریف قیمت معاملاتی خود، به سؤالات قیمت گذاری قیمت مراجعه کنید. لطفا توجه داشته باشید که همیشه تبلیغ کننده مسئول پرداخت هزینه پردازش پرداخت است</p>
        </div>
        <v-divider></v-divider>
        <div>
            <p>حد مجاز حداکثر معاملات</p>
            <v-text-field label="حداکثر حد معامله"></v-text-field>
            <p>.اختیاری. حداکثر حد معامله در یک تجارت. برای فروش آنلاین، تعادل کیفی صدر کریپتو شما می تواند حداکثر تجارت قابل اعتماد را نیز محدود کند</p>
        </div>
        <v-divider></v-divider>        
        <div>
            <p>محدود کردن مقدار به</p>
            <v-text-field label="مقدار را محدود کن"></v-text-field>
            <p>.اختیاری. مقدار معامله را محدود به عدد صحیح جدا از عدد کاما، به عنوان مثال 20،50،100. در ارز فیات (دلار / یورو / و غیره). دستی برای کوین، کارت هدیه و غیره</p>
        </div>
        <v-divider></v-divider>
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
    </div>
</template>
<script>
import Footer from './../components/Footer.vue'
    export default{
        data(){
            return{
                checkbox:true,
                radioGroup:1,
                tradeTypes:[
                    "فروش بیت کوین خود در صدر کریپتو",
                    "خرید بیت کوین در صدر کریپتو",
                    "فروش بیت کوین آنلاین شما",
                    "خرید بیت کوین آنلاین"
                ]
            }
        },
        components:{
            Footer
        }
    }
</script>
<style>
.createBitcoin{
    font-size:30px;
    font-family:bold;
    text-align:left;
    color:black;
    text-shadow:1px 4px 4px rgb(179, 166, 166);
}
.beforeCreate{
    color:#a94442;
    -font-size:15px;
    font-family:b nazanin;
    margin-left:15px;
    margin-top:15px;
}
.advertisement{
    background-color:#f2dede;
    border:1px solid #ebccd1;
    border-radius:4px;
}
.topLogText{
    color:#3479b6;
    font-size:15px;
    font-family:b nazanin;
    text-decoration:none;
    text-shadow:none;
}
.topLogText:hover{
    text-decoration:underline;
    color:#23527c;
}
.rules{
    color:inherit;
    text-align:left;
    font-size:20px;
    font-family:b nazanin;
    margin-top:10px;
}
.span{
    color:black;
    font-family:b nazanin;
    font-weight:bold;
    font-size:15px;
}
.fees{
    text-decoration:none;
    color:#3479b6;
}
.fees:hover{
    text-decoration:underline;
    color:#23527c;
}
.tradeType{
    margin-top:21px;
    margin-bottom:0;
    color:rgb(3, 3, 3);
    font-size:20px;
    font-family:b nazanin;
}
.wantText{
    margin-top:20px;
    margin-left:0;
    color:black;
    font-size:17px;
    font-family:b nazanin;
}
.kindTrade{
    color:black;
    font-size:20px;
    font-family:b nazanin;
    text-align:left;
    text-shadow:1px 4px 4px rgb(129, 124, 124);
}
li{
    color:rgb(7, 7, 7);
    font-size:15px;
    font-family:b nazanin;
    text-align:left;
    text-shadow:1px 4px 4px rgb(189, 175, 175);
}
 </style>
