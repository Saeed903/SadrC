<template>
    <div>
        <div>
            <p>sadrCrypto fees</p>
            <p>bitocin trading</p>
            <p>registering,buying, and selling bitcoin is completely free.</p>
            <p>sadrCrypto users whi create advertisements are charged a 1% fee for every completely trade.</p>
        </div>
        <div>
            <p>bitcoin transaction fees</p>
            <p>transactions to wallets of other sadrCrypto users are free.</p>
            <p>transaction to other bitcoin walletsa are subjec to bitcoin network transaction fee.the current fee is visible on the <router-link to="">wallet page under the heading bitcoin network fees.the size of the fee changes depending on the current usage rate of the bitcoin blackchain.we automatically adjust this fee based on hte current network congestion to make sure your transaction are confirmed as  quickly as possible.the transaction fee is paid from your Sadrcrypto wallet when you send a transaction.</router-link></p>
            <p>when sending to sadrCrypto wallet, a bitcoin fee is deducted from the deposit.the fee varies on how congested the bitcoin network is.if your amount is smallet than the bitcoin deposit fee,the deposit will not be porcesed.the current sending fee is visible on the <router-link to="">wallet page undr the heading incoming transactions and fees</router-link></p>
        </div>
        <div>
            <p>other fees</p>
            <p>when using our merchant invoicinig service a fee of 0.5% is deducted from the paid invoice amount of each invoice.also bitcoin network deposit fee is deducted form the invoice amount,if the invoice is paid with an external transaction.</p>
            <p>custom work, e.g.research of possible external problems,is 200 euro/hour paid in bitcoin at the current market rate,minimum billable amount is 200 EUR.</p>
        </div>
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
