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
    </div>
</template>
<script>
export default {
    data () {
        return{
            items:[
                {title:'بیت کوین', persianTitle:'بیت کوین'},
                {title:'اتریوم', persianTitle:'اتریوم'},
                {title:'زدکش', persianTitle:'زدکش'},
                {title:'ترون', persianTitle:'ترون'},
                {title:'ریپل', persianTitle:'ریپل'},
            ]
               
        }
    }
}
</script>
