<template>
    <v-container fluid grid-list-xl pt-0>
        <v-layout  justify-space-around>
            <v-flex>
                <v-card-text class="text-xs-center">
                     <v-icon size="40px" color="cyan accent-3">help_outline</v-icon><br>
                    <span class="titled">سوالات متداول</span><br>
                    <span class="text" color="red">در این صفحه به تمام سوالات شما جواب داده می شود چه یک کاربر جدید باشید چه یک معامله گر تازه وارد.اگر کاربر جدید هستید می توانید از این راهنمایی های این صفحه استفاده کنید.اگر میخواهید یک معامله گر شوید راهنمای آنلاین ارزهای دیجیتال ما برای شما مناسب است.شما همچنین می توانید یک سوال در انجمن های ما بپرسید یا یک بلیط پشتیبانی را برای تماس با پشتیبانی ما باز کنید.</span>
                </v-card-text>
                
                <v-card-text>
                </v-card-text>
                <v-layout row wrap>
                    <v-flex>
                        <v-card-text class="text-xs-center">
                        <v-icon color="cyan accent-3" large>local_shipping</v-icon><br>
                        <router-link class="textCard" to="">یک بلیط پشتیبانی را باز کنید</router-link>
                        </v-card-text>
                    </v-flex>

                    <v-flex>
                        <v-card-text class="text-xs-center">
                        <v-icon color="cyan accent-3" large>group</v-icon><br>
                        <router-link class="textCard" to="">پست در انجمن ما</router-link>
                        </v-card-text>
                    </v-flex>

                    <v-flex>
                        <v-card-text class="text-xs-center">
                        <v-icon color="cyan accent-3" large>fab fa-twitter</v-icon><br>
                        <router-link class="textCard" to="">در توییت ما بنویسید</router-link>
                        </v-card-text>
                    </v-flex>
                </v-layout>

                    <v-card-text>
                    <v-expansion-panel>
                        <v-expansion-panel-content
                        v-for="(item,i) in items"
                        :key="i"
                        expand-icon="mdi-menu-down"
                        style="background-color:#37474F;"
                        >
                        <div class="text text-xs-right" slot="header">{{item.title}}</div>
                            <v-card>
                                <v-card-text class="texts text-xs-right">{{item.persianTitle}}</v-card-text>
                            </v-card>
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                
                <v-card-text class="text-xs-center">
                    <p class="describeText">در مورد ارز دیجیتال</p>
                </v-card-text>
                <div>
                    <v-expansion-panel>
                        <v-expansion-panel-content
                        v-for="(text,i) in texts"
                        :key="i"
                        expand-icon="mdi-menu-down"
                        style="background-color:#37474F;"
                        >
                        <div class="text text-xs-right" slot="header">{{text.title}}</div>
                        <v-card>
                            <v-card-text class="texts text-xs-right">{{text.persianTitle}}</v-card-text>
                        </v-card>
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                </div>

                <v-card-text class="help text-xs-center">
                    <p class="describeText">استفاده از صدرکریپتو</p>
                </v-card-text>

                
                    <v-expansion-panel>
                        <v-expansion-panel-content
                        v-for="(use,i) in uses"
                        :key="i"
                        expand-icon="mdi-menu-down"
                        style="background-color:#37474F;"
                        >
                        <div class="text text-xs-right" slot="header">{{use.title}}</div>
                        <v-card>
                        <v-card-text class="texts text-xs-center">{{use.persianTitle}}</v-card-text>
                        </v-card>
                        </v-expansion-panel-content>
                    </v-expansion-panel>
            
                <v-card-text class="help text-xs-center">
                    <p class="describeText">مشکلات و راه حل های مشترک</p>
                </v-card-text>
                
                    <v-expansion-panel>
                        <v-expansion-panel-content
                        v-for="(problem,i) in problems"
                        :key="i"
                        expand-icon="mdi-menu-down"
                        style="background-color:#37474F;"
                        >
                        <div class="text text-xs-right" slot="header">{{problem.title}}</div>
                        <v-card
                        
                        >
                        <v-card-text class="texts text-xs-right">{{problem.persianTitle}}</v-card-text>
                        </v-card>
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                
                <v-card-text class="help text-xs-center">
                    <p class="describeText">ایجاد تبلیغات و تجارت بیت کوین</p>
                </v-card-text>

                <v-card-text>
                    <v-expansion-panel>
                        <v-expansion-panel-content
                        v-for="(trade,i) in trades"
                        :key="i"
                        expand-icon="mdi-menu-down"
                        style="background-color:#37474F;"
                        >
                        <div class="text text-xs-right" slot="header">{{trade.title}}</div>
                        <v-card
                        
                        >
                        <v-card-text class="texts text-xs-right">{{trade.persianTitle}}</v-card-text>
                        </v-card>
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                </v-card-text>
                
            </v-card-text>

                <v-card-text class="titled text-xs-center">واژه نامه صدرکریپتو</v-card-text>

                <v-card-text class="text text-xs-center">
                    <p class="help">آدرس</p>
                    <span>یک آدرس بیت کوین به نظر می رسد در امتداد یک رشته برای حروف تصادفی و numbers.addresses استفاده می شود زمانی که شما می خواهید برای ارسال و یا دریافت کیف پول bitcoins. حداقل یک دریافت کننده و یک ارسال آدرس. هنگامی که شما می خواهید برای دریافت بیت کوین به کیف پول شما نیاز به دادن فرستنده آدرس کیف پول خود را دریافت کنید.</span>
                </v-card-text>

                <v-card-text class="text text-xs-center">
                    <p class="help">AMLوKYC</p>
                    <span>ضد پولشویی و دانستن مشتری شما، یک گروه از قوانین در ایران است که به بیت کوین فروشندگان نیاز دارند که مشتریان خود را بشناسند. معامله گران خاصی از شناسایی شما برای مطابقت با این قوانین درخواست خواهند کرد. کشورهای دیگر در سراسر جهان ممکن است قوانین مشابهی داشته باشند. الزامات</span>
                </v-card-text>

                <v-card-text class="text text-xs-center">
                    <p class="help">بلاک چین</p>
                    <span>بلاکچین تکنولوژی پشت بیت کوین است.این چیزی که باعث می شود آن کار کند. تراکنش های بیت کوین به blockchain فرستاده می شوند تا معدنچیان بتوانند آنها را در بلوک هایی قرار دهند که منزل شما هستند. یک بلوک معادل معامله شما معدن است که به بلوکچین اضافه شده است معامله دریافت یک تاییدیه</span>
                </v-card-text>

                <v-card-text class="text text-xs-center">
                    <p class="help">اطلاعات بلاک چین</p>
                    <span>طلاعات بلوکچین یکی از وب سایت های بسیاری است که به عنوان explocers blockchain کار می کنند.این وب سایت ها به شما اجازه می دهد بلوک چینی را ببینید و در مورد آن چه در جریان است. در شرایط عملی این امکان وجود دارد که معاملات خود را مشاهده کنید و ببینید آیا آنها تایید شده یا نه. همچنین می توانید ببینید که چند راهکار غیرقانونی وجود دارد، هرچه بیشتر طول بکشد تا تراکنش شما تایید شود</span>
                </v-card-text>
            </v-flex>
        </v-layout>
        <Footer></Footer>
    </v-container>
</template>
<script>
import Footer from './../components/Footer.vue'
export default {
    components:{
        Footer
    },
    data () {
        return{
            items:[
                {title:'درباره صدرکریپتو', persianTitle:'صدرکریپتو یک مبادله ارز دیجیتال است. صدرکریپتو یک بازار است که کاربران می توانند ارزها را از یکدیگر خریداری و به فروش برسانند. کاربران، به نام معامله گران، تبلیغات با قیمت و شرایط پرداخت که می خواهند را ارائه می دهند. شما می توانید در وب سایت ما برای تبلیغات تجاری و جستجوی شرایط  که ترجیح می دهید را پیدا کنید. شما می توانید معامله گران خرید و فروش بیت کوین آنلاین را برای بیش از 60 روش مختلف پرداخت پیدا کنید.اگر شما به صدرکریپتوجدید هستید و میخواهید ارز را خریداری کنید، لطفا راهنمای خرید خود را برای یادگیری نحوه خرید بیت کوین بیاموزید.'},
                {title:'چگونه ارزدیجیتال خرید و فروش کنم؟', persianTitle:'اگر شما به دنبال خرید و فروش ارز هستید، لطفا به راهنمای نحوه خرید ارز  ما نگاه کنید.'},
                {title:'امنیت حساب کاربری من در مقابل کلاهبرداری چگونه حفظ می شود؟', persianTitle:'تمام معاملات آنلاین توسط سپرده محافظت می شود. هنگامی که یک تجارت شروع می شود مقدار بیت کوین برای تجارت به طور خودکار از کیف پول  فروشنده ذخیره می شود. این بدان معنی است که اگر فروشنده با پول خود فرار کند و بیت کوین خود را منتشر نکند، پشتیبانی می تواند بیت کوین ها را به شما از سپرده آزاد کند. اگر شما بیت کوین ها را پولی فروختید، قبل از اینکه بدانید که از خریدار بیت کوین پول دریافت کرده اید، سپرده ها را هرگز آزاد نکنید.لطفا توجه داشته باشید که معامله های محلی سپرده گذاری به طور پیش فرض فعال نیستند'},
                {title:'آیا می توانم کمتر از یک بیت کوین را خرید کنم؟ هزینه بیت کوین چقدر است؟', persianTitle:'در کنار هر تبلیغ در وب سایت قیمت بیت کوین برای آن تبلیغات به عنوان ارز در هر بیت کوین نشان داده شده است. برای مثال، اگر ما بیت کوین را با دلار آمریکا خریداری کنیم، قیمت آن به 10420 دلار / بایت نشان داده می شود. این بدان معنی است که اگربخواهیم 1 بیت کوین را بخریم، به ما 10420 دلار هزینه می پردازد. '},
                {title:' چرا برخی روش های پرداخت ارزان تر هستند؟', persianTitle:'یکی از بهترین ویژگی های بیت کوین این است که به شما پول بیشتری را کنترل می کند، اما این ویژگی نیز بسیار متفاوت از پول های سنتی است. معاملات بیت کوین غیرقابل برگشت هستند، بیشتر روش های متداول پرداخت می توانند پرداخت شوند. این باعث ایجاد خطر برای شخص فروش بیت کوین، به عنوان پی پال و یا یک بانک می تواند پول کسی که او را از حساب خود پس از او فرستاده دور بیت کوین. به همین دلیل است که معامله گران باید برای روش های پرداختی خاصی هزینه بالایی داشته باشند تا خود را در برابر این خطر محافظت کنند.'},
                {title:'تفاوت بین تجارت آنلاین و تجارت محلی چیست؟', persianTitle:'معاملات آنلاین به طور کامل از طریق پلت فرم معاملاتی شما بدون همکاری با شریک تجاری شما انجام می شود. سپرده به طور خودکار فعال و برای معاملات آنلاین تامین می شود، به این معنی که به عنوان یک خریدار شما به طور خودکار توسط سیستم سپرده ما محافظت می شود. اکثر معاملات در صدرکریپتو معاملات آنلاین هستند. معامله های محلی به معنای انجام چهره به چهره است، و سپرده ها به طور خودکار فعال نیست. به همین دلیل است که در تجارت محلی، فروشنده با استفاده از روش پرداخت آنلاین، امن نیست.'},
                {title:'چگونه میتوانم ارزهای خود را ارسال کنم و چگونه میتوانم در معامله با بیت کوین پرداخت کنم؟', persianTitle:'اگر بیت کوین ها را با استفاده از صدرکریپتو خریداری کنید بیت کوین ها در کیف پول صدرکریپتو شما ظاهر می شود. از آنجا شما می توانید بیت کوین ها را به دیگر بیت کوین ها ارسال کنید. سرویس بیت کوین اکثریت قریب به اتفاق با یکدیگر سازگار است، بیت کوین هایی که از صدرکریپتو خریداری می کنید در فروشگاه های آنلاین مورد علاقه خود که بیت کوین را قبول می کنند و همچنین در فروشگاه های محلی که بیتکوین را قبول می کنند، کار خواهند کرد.'},
                {title:'چگونه میتوان بیت کوین ها را به کیف پول صدرکریپتو خود ارسال کرد؟', persianTitle:'برای خرید بیت کوین در صدرکریپتو شما ابتدا باید بیت کوین ها را به کیف پول صدرکریپتو خود ارسال کنید. برای انجام این کار به یک حساب صدرکریپتو نیاز دارید، به بیت کوین ها در یک کیف پول بیت کوین دسترسی داشته باشید و شما باید آدرس دریافت صدرکریپتو را بدانید.'},
                {title:'چه مدت طول میکشد تا ارزهای خود را به کیف پول صدرکریپتو ارسال یا دریافت کرد؟', persianTitle:''},
                {title:'من شماره تلفنی ندارم آیا میتوان خرید و فروش کرد؟', persianTitle:'شما می توانید بیت کوین ها را بدون نیاز به تلفن همراه خریداری کنید، اما شما محدود به تبلیغاتی هستید که می توانید پاسخ دهید. با تایید شماره تلفن خود را با صدرکریپتو، تعداد تبلیغاتی را که می توانید با آن تماس بگیرید افزایش می دهد.'},
                {title:'نقطه سبز کنار نام های کاربری نشانگر چی هستند؟', persianTitle:'بعد از نام کاربری در صفحه اول و نمایه عمومی کاربر می توانید یک نقطه کوچک سبز، زرد یا خاکستری پیدا کنید. این نقطه نشان می دهد که چگونه معامله گر معمولا معمولا به معاملات پاسخ می دهد.نقطه سبز به این معنی است که کاربر در طی 5 دقیقه به معاملات پاسخ می دهد.نقطه زرد به این معنی است که کاربر در عرض 30 دقیقه به معاملات پاسخ می دهد.یک نقطه خاکستری به این معنی است که کاربر برای پاسخ دادن به معاملات بیشتر از 30 دقیقه طول می کشد.'},
            ],
            texts:[
                {title:'درباره ارز دیجیتال', persianTitle:'ارزهای دیجیتال، ارزهایی هستند که از رمزنگاری برای انتقال در اینترنت استفاده می کنند، رمزنگاری های ارزهای دیجیتال غیرقابل هک و پیگیری هستند.ابتدا رمزنگاری در جنگ جهانی دوم برای انتقال پیام و فرمان های نظامی مورد استفاده قرار گرفت. در عصر دیجیتال، ریاضیات و علوم کامپیوتر برای امنیت ارتباطات، اطلاعات و انتقال پول مورد استفاده قرارگرفته اند.اولین ارز دیجیتال بیت کوین است که در سال ۲۰۰۹ ایجاد شد و اکنون پادشاه دنیای ارزهای دیجیتال است. در چند سال گذشته ارزهای دیجیتال زیادی معرفی و عرضه شده اند. در حال حاضر حدود ۹۰۰ ارز دیجیتال در بازارهای جهانی تجارت می شود.'},
                {title:'چگونه باید ارزهای دیجیتال خود را ذخیره کرد', persianTitle:'شما می توانید بیت کوین خود را درکیف پول صدرکریپتو ذخیره کنید، اما ما سعی می کنیم سایر کیف پول بیت کوین را ارتقا دهیم. بهترین راه ذخیره کردن بیت کوین ها در یک کیف پول در رایانه یا تلفن همراه شماست، زیرا کنترل کامل بیت کوین ها را به شما می دهد. کیف پول بیت کوین مستقل مورد نظر ما الکتروم است. کیف های کاغذی اگر بخواهید بیت کوین را به صورت امن ذخیره کنید، ایده خوبی است. کیف پول بر روی گوشی های هوشمند شما همچنین می تواند یک راه راحت برای حمل بیت کوین در اطراف شما باشد.'},
            ],
            uses:[
                {title:'چگونه میتوان امنیت  حساب کاربری را افزایش داد؟', persianTitle:''},
                {title:'چگونه می توان احراز هویت دو عامل را برای حساب کاربری فعال کرد؟', persianTitle:''},
                {title:'سیستم بازخورد چگونه کار می کند؟', persianTitle:''},
                {title:'تفاوت بین بازخورد تایید شده و تأیید نشده چیست؟', persianTitle:''},
                {title:'آیا میتوان نظرات خود را تغییر داد؟', persianTitle:''},
                {title:'معنی اعتماد کاربر چیست؟', persianTitle:''},
                {title:'آیا امکان تغییر نام کاربری وجود دارد؟', persianTitle:''},
                {title:'چگونه اعلانهای وب را فعال کنم؟', persianTitle:''},
                {title:'از کجا میتوان تاریخ ورود به حساب کاربری را دید؟', persianTitle:''},
                {title:'گارد ورود به سیستم چیست و چگونه کار می کنئ؟', persianTitle:''},
                {title:'قوانین انجمن؟', persianTitle:''},
            ],
            problems:[
                {title:'یک معامله گر در مورد اطلاعاتم از من سوال می پرسد و من احساس راحتی نمیکنم؟', persianTitle:'فرزاد افسری'},
                {title:'من به فروشنده هزینه را پرداخت کرده ام ولی هنوز هیچ ارزی را دریافت نکرده ام این طبیعی است؟', persianTitle:''},
                {title:'چرا نمی توانم بیت کوین هایی که در کیف پول من هستند را بفرستم؟', persianTitle:''},
                {title:'تراکنش های خروجی از آدرس بیت کوین که فرستاده شده است  وجود دارد که توسط  من نیست؟', persianTitle:''},
                {title:'من بیت کوین ها را به آدرس اشتباه فرستاده ام می توانم آنها را بازگردانم؟', persianTitle:''},
                {title:'من هیچ نامه ی پشتیبانی دریافت نکرده ام چه کاری می توانم انجام دهم؟', persianTitle:''},
                {title:'من تبلیغاتی از یک کشور اشتباه را دریافت کرده ام.چطور میتوان محل جستجو را عوض کنم؟', persianTitle:''},
                {title:'چگونه می توان زبان وب را تغییر داد؟', persianTitle:''},
                {title:'نام کاربری ام را فراموش کرده ام', persianTitle:''},
                {title:'من نام کاربری، رمز عبور و ایمیل خود را که برای ثبت نام در صدرکریپتو دارم را از دست داده ام', persianTitle:''},
                {title:'چگونه با استفاده از کد پشتیبان، اعتبار دو عامل را واکنش نشان داد؟', persianTitle:''},
                {title:'شماره تلفن من با حساب کاربری دیگری تأیید شده است', persianTitle:''},
            ],
             trades:[
                {title:'چرا تبلیغات من نشان داده نشده است؟', persianTitle:''},
                {title:'چرا نمی توانم تبلیغ بیشتری را ایجاد کنم؟', persianTitle:''},
                {title:'چه زمانی مدرک معامله گر را دریافت میکنم؟', persianTitle:''},
                {title:'چگونه می توانم نشانگر سبز در تبلیغات خرید آنلاین خود را دریافت کنم؟', persianTitle:''},
                {title:'چه موقع قیمت تبلیغات به روز می شود؟', persianTitle:''},
                {title:'قیمت شناور چیست؟', persianTitle:''},
                {title:'چگونه می توان یک قیمت ثابت را مشخص کرد؟', persianTitle:''},
                {title:'منظور از تبلیغات و افراد مورد اعتماد چیست؟', persianTitle:''},
                {title:'چگونه می توان یک قیمت پویا را مشخص کرد؟', persianTitle:''},
                {title:'من یک شرکت دارم که از بیت کوین استفاده می کنم، آیا می توانم یک حساب تأیید شده توسط شرکت داشته باشم؟', persianTitle:''},
            ],
        }
    }
}
</script>
<style scoped>
.titled{
    font-family: Iranian Sans;
    font-size: 28px;
}
.text{
    font-family: Iranian Sans;
}
.describeText{
    font-family:iranian sans;
    font-size:19px;
}
.texts{
    font-family: Iranian Sans;
    background-color:#BDBDBD;
    color:black;
    text-align:justify;
    text-indent:15px;
}
.link{
    text-decoration: none;
    color:rgb(0,153,255);
    font-family:Iranian Sans; 
}
.textCard{
    font-family:'iranian sans';
    color:#BDBDBD;
    text-decoration:none;
}
.textCard:hover{
    color:#E0E0E0;
}
</style>