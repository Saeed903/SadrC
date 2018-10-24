<template>
    <div>
        <p>dashboard</p>
        <p>on this page you can view and manage your advertisements and trades</p>
        <v-btn to="OpenTradeDashboard">open trade</v-btn>
        <v-btn to="CompletedTradeDashboard">completed trades</v-btn>
        <v-btn to="CancelledTradeDashboard">cancelled trades</v-btn>
        <v-btn to="AllClosedDashboard">all-closed</v-btn>
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