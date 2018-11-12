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
                {title:'', persianTitle:''},
                {title:'', persianTitle:''},
                {title:'', persianTitle:''},
                {title:'', persianTitle:''},
            ],
        }
    }
}
</script>
