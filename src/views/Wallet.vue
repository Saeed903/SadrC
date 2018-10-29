<template>
    <div>
        <v-btn to="/SendWallet">ارسال بیت کوین</v-btn>
        <v-btn to="/">دریافت بیت کوین</v-btn>
        <v-btn>معاملات</v-btn>
        <Footer class="fari"></Footer>
    </div>
</template>
<script>
    import Footer from './../components/Footer.vue'
    export default{
        components:{
            Footer,
        }
    }
</script>
