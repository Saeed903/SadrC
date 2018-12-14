<template>
<div>
                <v-card-text class="pt-0">    
                    <span class="fontIran">هزینه های صدرکریپتو</span><br>
                    <span class="fontsIran">تجارت بیت کوین</span><br>
                    <span class="fontIrans">ثبت، خرید و فروش بیتکوین کاملا رایگان است.</span><br>
                    <span class="fontIrans">در صدر کریپتو کاربرانی که تبلیغاتی را ایجاد می کنند هزینه هر معامله به طور کامل 1٪ می باشد.</span>
                </v-card-text>
                <v-card-text>
                    <span class="fontIran">هزینه های تراکنش بیت کوین</span><br>
                    <span class="fontsIran">تراکنش ها به کیف پول دیگر کاربران در صدر کرپیتو رایگان است.</span><br>
                    <span class="fontIrans">معاملات به دیگر کیف پول بیت کوین به هزینه انتقال هزینه بیت کوین شبکه پرداخت می شود. هزینه های فعلی در صفحه <router-link class="textCard" to="Wallet">کیف پول</router-link> تحت عنوان «هزینه های شبکه بیت کوین» قابل مشاهده است. اندازه هزینه ها بسته به میزان در حال استفاده از بلاک چین بیت کوین تغییر می کند، ما این هزینه را به صورت خودکار براساس تراکم شبکه فعلی تنظیم می کنیم تا مطمئن شویم که معاملات شما با بیشترین سرعت ممکن تایید می شوند. هنگامی که یک معامله ارسال می کنید، هزینه معامله از کیف پول صدرکریپتو شما پرداخت می شود.</span><br>
                    <span class="fontIrans">هنگام ارسال به کیف پول صدرکریپتو، هزینه شبکه بیت کوین از سپرده کسر می شود. هزینه آن متفاوت است از اینکه چگونه شبکه بیت کوین را پر می کند. اگر مبلغ سپرده شما کمتر از هزینه سپرده بیت کوین است، سپرده پردازش نخواهد شد. هزینه ارسال فعلی در صفحه<router-link class="textCard" to="/Wallet">کیف پول</router-link> زیر عنوان معاملات و هزینه های دریافتی مشاهده می شود.</span>
                </v-card-text>
                
                <v-card-text>
                    <span class="fontIran">هزینه های دیگر</span><br>
                    <span class="fontIrans">در هنگام استفاده از خدمات صورتحساب ها ما تجارتی هزینه 0.5٪ کسر از مبلغ صورت حساب هر فاکتور است.همچنین هزینه سپرده شبکه بیت کوین از مبلغ صورت حساب محاسبه می شود، اگر صورتحساب با یک معامله خارجی پرداخت شود.</span><br>
                    <span class="fontIrans">کار سفارشی، به عنوان مثال تحقیق در مورد مشکلات احتمالی خارجی، 200 یورو در ساعت است که در بیت کوین در نرخ بازار فعلی پرداخت می شود، حداقل مبلغ قابل پرداخت 200 یورو است.</span>
                </v-card-text>
                <Footer></Footer>
 </div>
</template>
<script>
import Footer from './../components/Footer.vue'
export default {
    components:{
        Footer,
    }
}
</script>
<style scoped>
.fontIran{
    font-family:'Iranian Sans';
    font-size:19px;
    color:white;
}
.fontsIran{
    font-family:'Iranian Sans';
    font-size:15px;
    color:#E0E0E0;
}
.fontIrans{
    font-family:'Iranian Sans';
    font-size:12px;
    color:#BDBDBD;
}
.textCard{
    font-family:'iranian sans';
    color:#00E5FF;
    text-decoration:none;
}
.textCard:hover{
    color:#18FFFF;
}

</style>