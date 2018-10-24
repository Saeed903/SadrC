<template>
    <div>
        <div class="twoSection">
            <div>
                <p class="bitcoinText">Buy bitcoins online in islamic republic of iran</p>
            </div>
            <div>
                <Transaction></Transaction>
            </div>
        </div>
        <div class="twoSection">
            <div>
                <p class="bitcoinText">sell bitcoins online in islamic republic of iran</p>
            </div>
            <div>
                <Transaction></Transaction>
            </div>
        </div>
        <div class="twoSection">
            <div>
                <p class="bitcoinText">Buy and Sell Bitcoins in these popular cities in islamic republic of iran</p>
            </div>
            <div>
                <Transaction></Transaction>
            </div>
        </div>
        <div>
            <Footer></Footer>
        </div>
    </div>
</template>
<script>
import Transaction from './../components/Transactions.vue'
import Footer from './../components/Footer.vue'
export default{
    components:{
        Transaction,
        Footer
    }
}
</script>
<style>
.bitcoinText{
    text-align:center;
    font-size:28px;
    font-family:b titr;
    color:rgb(97, 91, 91);
    text-shadow:1px 1px 4px rgb(179, 169, 169)
}
.twoSection{
    border:1px solid rgb(160, 149, 149);
    box-shadow:1px 1px 10px rgb(87, 83, 83);
    margin-bottom:12px;
}

</style>

