<template >
    <div>
        <div>
            <p class="topTextRipple">Ripple</p>
        </div>
        <div>
            <FormSell></FormSell>
        </div>
        <div>
            <Transaction></Transaction>
        </div>
        <div>
            <Footer></Footer>
        </div>
    </div>
</template>
<script>
import Transaction from './../components/Transactions.vue'
import FormSell from './../components/FormSell.vue'
import Footer from './../components/Footer.vue'
export default{
  data(){
      return{
          isTrader:0
      }
  },
  components:{
    Transaction,
    FormSell,
    Footer
  }
};

</script>
<style>
.topTextRipple{
   text-align: center;
    font-size:22px;
    font-family:b titr;
    color:rgb(3, 3, 3);
    text-shadow:2px 0px 4px rgb(170, 164, 164);
}
</style>
