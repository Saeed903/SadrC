<template>
<v-layout>
    <v-card-text>
        <v-card-text class="titled">هزینه صدر کریپتو</v-card-text>
        <v-card-text>
            <p class="titled1">تجارت بیت کوین</p>
            <p class="fontIran">ثبت، خرید و فروش بیت کوین کاملا رایگان است.</p>
            <p class="fontIran">در صدر کریپتو کاربرانی که تبلیغاتی را ایجاد می کنند هزینه هر معامله به طور کامل 1٪ می باشد.</p>
        </v-card-text>
        
        <v-card-text class="fontIran">
            <p class="titled1">هزینه های تراکنش بیت کوین</p>
            <p>تراکنش ها به کیف پول دیگر کاربران در صدر کرپیتو رایگان است.</p>
            <p>معامله به دیگر کیف پول های بیت کوین به هزینه های تراکنش شبکه بیت کوین پرداخت می شود. هزینه کنونی در سایت قابل مشاهده است.
            <router-link class="router" to="/Wallet">صفحه کیف پول </router-link >تحت عنوان هزینه بیت کوین شبکه هزینه می شود. اندازه هزینه ها بسته به میزان استفاده فعلی بیت بلاک چین بیت کوین به طور خودکار این هزینه را براساس تراکم شبکه فعلی اچ تی ی به منظور اطمینان از اینکه معامله شما تایید می شود در اسرع وقت. وقتی یک معامله را ارسال می کنید، هزینه معامله از کیف پول صدر کریپتو شما پرداخت می شود.</p>
            در هنگام ارسال به کیف پول صدر کریپتو،هزینه بیت کوین از سپرده کسر می شود. هزینه آن متفاوت است از اینکه چگونه شبکه بیت کوین بارگیری شده است.اگر مقدار شما کوچکتر از هزینه سپرده بیت کوین باشد، سپرده متوقف نخواهد شد. هزینه ارسال فعلی قابل مشاهده است در
            <router-link class="router" to="/Wallet">صفحه کیف پول</router-link> تحت عنوان معاملات و هزینه های ورودی
        </v-card-text>
        
        <v-card-text class="fontIran">
            <p class="titled1">هزینه های دیگر</p>
            <p>در هنگام استفاده از خدمات صورتحساب ها ما تجارتی هزینه 0.5٪ کسر از مبلغ صورت حساب هر فاکتور است.همچنین هزینه سپرده شبکه بیت کوین از مبلغ صورت حساب محاسبه می شود، اگر صورتحساب با یک معامله خارجی پرداخت شود.</p>
            <p>کار سفارشی، به عنوان مثال تحقیق در مورد مشکلات احتمالی خارجی، 200 یورو در ساعت است که در بیت کوین در نرخ بازار فعلی پرداخت می شود، حداقل مبلغ قابل پرداخت 200 یورو است.</p>
        </v-card-text>
        <Footer></Footer>
    </v-card-text>
</v-layout>
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
.titled{
  font-family: Iranian Sans;
  font-size: 22px; 
}

.fontIran{
font-family: Iranian Sans;

}
.router{
    font-family:'iranian sans';
    color:rgb(0, 153, 255);
    text-decoration:none;
}
.router:hover{
    color:rgb(0, 140, 255);
}
.titled1{
  font-family: Iranian Sans;
  font-size: 18px;
}
</style>
