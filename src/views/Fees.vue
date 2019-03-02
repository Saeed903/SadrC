<template>
    <div>
        <v-card-text class="text-xs-justify pt-5">
            <p class="centerText text-xs-center">هزینه های تراکنش بیت کوین</p>
            <p class="topic pt-3">تراکنش ها به کیف پول دیگر کاربران در صدرکریپتو رایگان است.</p>
            <p class="bottom">معاملات به دیگر کیف پول بیت کوین به هزینه انتقال هزینه بیت کوین شبکه پرداخت می شود. هزینه های فعلی در صفحه <router-link class="textCard" to="Wallet">کیف پول</router-link> تحت عنوان «هزینه های شبکه بیت کوین» قابل مشاهده است. اندازه هزینه ها بسته به میزان در حال استفاده از بلاک چین بیت کوین تغییر می کند، ما این هزینه را به صورت خودکار براساس تراکم شبکه فعلی تنظیم می کنیم تا مطمئن شویم که معاملات شما با بیشترین سرعت ممکن تایید می شوند. هنگامی که یک معامله ارسال می کنید، هزینه معامله از کیف پول صدرکریپتو شما پرداخت می شود.</p><br>
            <p class="bottom">هنگام ارسال به کیف پول صدرکریپتو، هزینه شبکه بیت کوین از سپرده کسر می شود. هزینه آن متفاوت است از اینکه چگونه شبکه بیت کوین را پر می کند. اگر مبلغ سپرده شما کمتر از هزینه سپرده بیت کوین است، سپرده پردازش نخواهد شد. هزینه ارسال فعلی در صفحه<router-link class="textCard" to="/Wallet">کیف پول</router-link> زیر عنوان معاملات و هزینه های دریافتی مشاهده می شود.</p>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="text-xs-justify">
            <p class="centerText text-xs-center">هزینه های صدرکریپتو</p>
            <p class="topic">تجارت بیت کوین</p>
            <p class="bottom">ثبت، خرید و فروش بیتکوین کاملا رایگان است.</p>
            <p class="bottom">در صدر کریپتو کاربرانی که تبلیغاتی را ایجاد می کنند هزینه هر معامله به طور کامل 1٪ می باش</p>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="text-xs-justify pb-5">
            <p class="centerText text-xs-center">هزینه های دیگر</p><br>
            <p class="bottom">در هنگام استفاده از خدمات صورتحساب ها ما تجارتی هزینه 0.5٪ کسر از مبلغ صورت حساب هر فاکتور است.همچنین هزینه سپرده شبکه بیت کوین از مبلغ صورت حساب محاسبه می شود، اگر صورتحساب با یک معامله خارجی پرداخت شود.</p><br>
            <p class="bottom">کار سفارشی، به عنوان مثال تحقیق در مورد مشکلات احتمالی خارجی، 200 یورو در ساعت است که در بیت کوین در نرخ بازار فعلی پرداخت می شود، حداقل مبلغ قابل پرداخت 200 یورو اس</p>
        </v-card-text>

        <Footer class="pt-5"></Footer>
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
<style>
.centerText{
    font-family:iranian sans;
    font-size:19px;
    color:#FAFAFA;
}
.topic{
    font-family:iranian sans;
    font-size:17px;
    color:#E0E0E0;
}
.bottom{
    font-family:iranian sans;
    font-size:15px;
    color:#BDBDBD;
}
</style>

