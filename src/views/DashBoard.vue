<template>
    <div>
        <p>داشبورد</p>
        <p>. این صفحه شما می توانید تبلیغات و معاملات خود را مشاهده و مدیریت کنید</p>
        <v-btn to="OpenTradeDashboard">تجارت باز است</v-btn>
        <v-btn to="CompletedTradeDashboard">تکمیل معالات</v-btn>
        <v-btn to="CancelledTradeDashboard">لغومعاملات</v-btn>
        <v-btn to="AllClosedDashboard">بستن معاملات</v-btn>
        <Footer></Footer>
    </div>
</template>
<script>
import Footer from './../components/Footer.vue'
    export default{
        components:{
            Footer
        }
    }
</script>