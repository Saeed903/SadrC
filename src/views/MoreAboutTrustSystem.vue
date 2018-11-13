<template>
    <div>
        <div>
            <v-icon>guestion</v-icon>
        </div>
        <div>
            <p>سوالات متداول</p>
            <p>این که آیا شما یک کاربر جدید هستید و یا یک معامله گر چاشنی هستید، به تمام سوالات خود در این صفحه پاسخ خواهید داد. اگر از Bitcoins جدید هستید می توانید از این راهنمای مفید خرید بیت کوین ها با استفاده از LocalBitcoins انجام دهید. اگر می خواهید یک معامله گر شوید، راهنمای آنلاین Bitcoins ها برای شما مناسب است. شما همچنین می توانید یک سوال در انجمن های ما بپرسید یا بلیط پشتیبانی را برای تماس با پشتیبانی ما باز کنید.</p>
        </div>
        <div>
            <p>دریافت کمک بیشتر</p>
        </div>
        <div>
            <div>
                <v-icon>home</v-icon>
                <p>یک بلیط پشتیبانی را باز کنید</p>
            </div>
            <div>
                <v-icon>home</v-icon>
                <p>پست در انجمن ما</p>
            </div>
            <div>
                <v-icon>home</v-icon>
                <p>یک صدای جیر جیر را بنویس</p>
            </div>
        </div>
        <div>
            <v-expansion-panel>
                <v-expansion-panel-content
                v-for="(item,i) in items"
                :key="i"
                expand-icon="mdi-menu-down"
                >
                <div slot="header">{{item.title}}</div>
                <v-card
                
                >
                <v-card-text class="grey -3">{{item.persianTitle}}</v-card-text>
                </v-card>
                </v-expansion-panel-content>
            </v-expansion-panel>
        </div>
        <div>
            <p>در مورد بیت کوین</p>
        </div>
        <div>
             <v-expansion-panel>
                <v-expansion-panel-content
                v-for="(text,i) in texts"
                :key="i"
                expand-icon="mdi-menu-down"
                >
                <div slot="header">{{text.title}}</div>
                <v-card
                
                >
                <v-card-text class="grey -3">{{text.persianTitle}}</v-card-text>
                </v-card>
                </v-expansion-panel-content>
            </v-expansion-panel>
        </div>
        <div>
            <p>استفاده از صدرکریپتو</p>
        </div>
        <div>
             <v-expansion-panel>
                <v-expansion-panel-content
                v-for="(use,i) in uses"
                :key="i"
                expand-icon="mdi-menu-down"
                >
                <div slot="header">{{use.title}}</div>
                <v-card
                
                >
                <v-card-text class="grey -3">{{use.persianTitle}}</v-card-text>
                </v-card>
                </v-expansion-panel-content>
            </v-expansion-panel>
        </div>
        <div>
            <p>مشکلات و راه حل های مشترک</p>
        </div>
        <div>
             <v-expansion-panel>
                <v-expansion-panel-content
                v-for="(problem,i) in problems"
                :key="i"
                expand-icon="mdi-menu-down"
                >
                <div slot="header">{{problem.title}}</div>
                <v-card
                
                >
                <v-card-text class="grey -3">{{problem.persianTitle}}</v-card-text>
                </v-card>
                </v-expansion-panel-content>
            </v-expansion-panel>
        </div>
        <div>
            <p>ایجاد تبلیغات و تجارت بیت کوین</p>
        </div>
        <div>
             <v-expansion-panel>
                <v-expansion-panel-content
                v-for="(trade,i) in trades"
                :key="i"
                expand-icon="mdi-menu-down"
                >
                <div slot="header">{{trade.title}}</div>
                <v-card
                
                >
                <v-card-text class="grey -3">{{trade.persianTitle}}</v-card-text>
                </v-card>
                </v-expansion-panel-content>
            </v-expansion-panel>
        </div>
        <v-card-text>واژه نامه صدرکریپتو</v-card-text>

        <v-card-text>
            <p>آدرس</p>
            <span>یک آدرس بیت کوین به نظر می رسد در امتداد یک رشته برای حروف تصادفی و numbers.addresses استفاده می شود زمانی که شما می خواهید برای ارسال و یا دریافت کیف پول bitcoins. حداقل یک دریافت کننده و یک ارسال آدرس. هنگامی که شما می خواهید برای دریافت بیت کوین به کیف پول شما نیاز به دادن فرستنده آدرس کیف پول خود را دریافت کنید.</span>
        </v-card-text>

        <v-card-text>
            <p>AMLوKYC</p>
            <span>ضد پولشویی و دانستن مشتری شما، یک گروه از قوانین در ایران است که به بیت کوین فروشندگان نیاز دارند که مشتریان خود را بشناسند. معامله گران خاصی از شناسایی شما برای مطابقت با این قوانین درخواست خواهند کرد. کشورهای دیگر در سراسر جهان ممکن است قوانین مشابهی داشته باشند. الزامات</span>
        </v-card-text>

        <v-card-text>
            <p class="text-xs-center headline">بلاک چین</p>
            <span>بلاکچین تکنولوژی پشت بیت کوین است.این چیزی که باعث می شود آن کار کند. تراکنش های بیت کوین به blockchain فرستاده می شوند تا معدنچیان بتوانند آنها را در بلوک هایی قرار دهند که منزل شما هستند. یک بلوک معادل معامله شما معدن است که به بلوکچین اضافه شده است معامله دریافت یک تاییدیه</span>
        </v-card-text>

        <v-card-text>
            <p>اطلاعات بلاک چین</p>
            <span>طلاعات بلوکچین یکی از وب سایت های بسیاری است که به عنوان explocers blockchain کار می کنند.این وب سایت ها به شما اجازه می دهد بلوک چینی را ببینید و در مورد آن چه در جریان است. در شرایط عملی این امکان وجود دارد که معاملات خود را مشاهده کنید و ببینید آیا آنها تایید شده یا نه. همچنین می توانید ببینید که چند راهکار غیرقانونی وجود دارد، هرچه بیشتر طول بکشد تا تراکنش شما تایید شود</span>
        </v-card-text>
      
    </div>
</template>
<script>
export default {
    data () {
        return{
            items:[
                {title:'صدرکریپتو چیست؟', persianTitle:'صدرکریپتو یک مبادله بیت کوین برابر با هم است. ما یک بازار است که کاربران می توانند بیت کوین ها را از یکدیگر خریداری و فروش کنند. کاربران که به عنوان معامله گران نامیده می شوند، تبلیغات با قیمت و روش پرداخت که می خواهند ارائه دهند. شما می توانید وب سایت ما برای تبلیغات تجاری و جستجوی روش پرداختی که ترجیح می دهید را مرور کنید. شما می توانید معامله گران خرید و فروش Bitcoins آنلاین را برای بیش از 60 روش مختلف پرداخت پیدا کنید.اگر شما به sadrCrypto جدید هستید و می خواهید بیت کوین را خریداری کنید، لطفا به نحوه خرید راهنمای ما برای یادگیری نحوه خرید بیت کوین نگاه کنید.'},
                {title:'چگونه بیکوین را خریداری یا فروش دهم', persianTitle:'اتریوم'},
                {title:'من از کلاهبرداری چگونه مخافظت میشوم', persianTitle:'زدکش'},
                {title:'آیا می توانم کمتر از یک بیت کوین را خرید کنم؟ هزینه بیت کوین چقدر است؟', persianTitle:'ترون'},
                {title:'چرا با پپال یا کارت اعتباری خیلی گران است؟ چرا برخی روش های پرداخت ارزان تر هستند؟', persianTitle:'ریپل'},
                {title:'تفاوت بین تجارت آنلاین و تجارت محلی چیست؟', persianTitle:'زدکش'},
                {title:'چگونه بیت کوین ها را ارسال کنم و چگونه می توانم بعد از خرید آنها با بیتکوین پرداخت کنم', persianTitle:'زدکش'},
                {title:'چگونه بیت کوین ها را به کیف پول من در صدرکریپتو بفرستم', persianTitle:'زدکش'},
                {title:'چه مدت طول می کشد تا بیت کوین ها را با استفاده از کیف پول من بفرستم یا دریافت کنم', persianTitle:'زدکش'},
                {title:'من تلغن همراه ندارم.هنوز هم میتوانم به خرید و فروش ادامه دهم؟', persianTitle:'زدکش'},
                {title:'نقطه سبز کنار نام های کاربری نشانگر چی هستند؟', persianTitle:'زدکش'},
            ],
            texts:[
                {title:'بیت کوین چیست؟', persianTitle:''},
                {title:'چگونه باید بیت کوین هایم را ذخیره کنم', persianTitle:''},
            ],
            uses:[
                {title:'چگونه می توانم امنیت حساب من را افزایش دهم', persianTitle:''},
                {title:'چگونه می توانم احراز هویت دو عامل را برای حساب من فعال کنم', persianTitle:''},
                {title:'سیستم بازخورد چگونه کار می کند', persianTitle:''},
                {title:'تفاوت بین بازخورد تایید شده و تأیید نشده چیست', persianTitle:''},
                {title:'می توانم نظرات خود را تغییر دهم', persianTitle:''},
                {title:'معنی اعتماد کاربر چیست؟', persianTitle:''},
                {title:'آیا امکان تغییر نام کاربری من وجود دارد؟', persianTitle:''},
                {title:'چگونه اعلانهای وب را فعال کنم', persianTitle:''},
                {title:'کجا می توانم تاریخ ورود حساب کاربری من را ببینم', persianTitle:''},
                {title:'گارد ورود به سیستم چیست و چگونه کار می کند', persianTitle:''},
                {title:'قوانین انجمن', persianTitle:''},
            ],
            problems:[
                {title:'یک معامله گر از من برای شناسه من سوال می کند و من احساس راحتی نمی کنم', persianTitle:''},
                {title:'من فروشنده را پرداخت کرده ام، اما هنوز بیت کوین های جدید دریافت نکرده ام، این طبیعی است', persianTitle:''},
                {title:'چرا نمی تونم بیت کوین هایی که در کیف پول من هستند را بفرستم', persianTitle:''},
                {title:'من پرداخت خود را انجام داده ام، اما اگر فراموش کرده اید دکمه پرداخت کرده اید یا من آن را در زمان فشار ندیدم', persianTitle:''},
                {title:'راکنش های خروجی از آدرس بیت کوین وجود دارد از آنجا که بیت کوین هایی را که توسط من نیست ارسال می کنم', persianTitle:''},
                {title:'من بیت کوین ها را به آدرس اشتباه فرستاده ام می توانم آنها را بازگردانم', persianTitle:''},
                {title:'من هیچ نامه ای دریافت نمی کنم چه کاری می توانم انجام دهم', persianTitle:''},
                {title:'من تبلیغاتی از یک کشور اشتباه را می بینم. چطور محل جستجورا عوض کنم؟', persianTitle:''},
                {title:'چگونه می توانم زبان وب را تغییر دهم؟', persianTitle:''},
                {title:'نام کاربری ام را فراموش کرده ام', persianTitle:''},
                {title:'من نام کاربری، رمز عبور و ایمیل خود را که برای ثبت نام در صدرکریپتو دارم را از دست داده ام', persianTitle:''},
                {title:'چگونه با استفاده از کد پشتیبان، اعتبار دو عامل را واکنش نشان دهم', persianTitle:''},
                {title:'شماره تلفن من با حساب کاربری دیگری تأیید شده است', persianTitle:''},
            ],
             trades:[
                {title:'چرا تبلیغات مرا نشان نمیدهد؟', persianTitle:''},
                {title:'چرا نمی تونم تبلیغ بیشتری بکنم؟', persianTitle:''},
                {title:'چه زمانی مدرک معامله گر را دریافت میکنم؟', persianTitle:''},
                {title:'چگونه می توانم انگشت سبز در تبلیغات خرید آنلاین خود را دریافت کنم؟', persianTitle:''},
                {title:'چه موقع قیمت تبلیغات به روز می شود؟', persianTitle:''},
                {title:'قیمت شناور چیست؟', persianTitle:''},
                {title:'چگونه می توان یک قیمت ثابت را مشخص کرد؟', persianTitle:''},
                {title:'منظور از تبلیغات و مردم مورد اعتماد چیست؟', persianTitle:''},
                {title:'چگونه می توان یک قیمت پویا را مشخص کرد؟', persianTitle:''},
                {title:'من یک شرکت دارم که از بیت کوین استفاده می کنم، آیا می توانم یک حساب تأیید شده توسط شرکت داشته باشم؟', persianTitle:''},
            ],
        }
    }
}
</script>
