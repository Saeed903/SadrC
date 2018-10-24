<template>
    <div>
        <v-btn to="/SendWallet">sent bitcoin</v-btn>
        <v-btn to="/">receive bitcoin</v-btn>
        <v-btn>transactions</v-btn>
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
<style>
.fari{
    margin-top:200px;
}
</style>
