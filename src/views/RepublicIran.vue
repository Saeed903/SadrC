<template>
    <div>
        <div class="twoSection">
            <div>
                <p class="bitcoinText">خرید بیت کوین آنلاین در جمهوری اسلامی ایران</p>
            </div>
            <div>
                <Transaction></Transaction>
            </div>
        </div>
        <div class="twoSection">
            <div>
                <p class="bitcoinText">فروش بیت کوین آنلاین در جمهوری اسلامی ایران</p>
            </div>
            <div>
                <Transaction></Transaction>
            </div>
        </div>
        <div class="twoSection">
            <div>
                <p class="bitcoinText">خرید و فروش بیت کوین در این شهرهای محبوب در جمهوری اسلامی ایران</p>
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
<style scoped>
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

