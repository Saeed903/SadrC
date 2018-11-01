<template >
    <div>
        <div>
            <p class="topTextZcash">Zcash</p>
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
import Transaction from './../components/Advertise.vue'
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
<style scoped>
.topTextZcash{
   text-align: center;
   font-size:20px;
   font-family:b titr;
   color:black;
}
</style>
