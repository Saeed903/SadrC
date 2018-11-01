<template>
    <div>
        <FormSell/>
        <Transaction/>
        <Footer/>
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
    Footer,
  }
}
</script>
<style scoped>
.btc{
    font-size:25px;
    font-family:b nazanin;
    text-align:center;
    color:black;
    text-shadow:1px 1px 4px rgb(143, 136, 136)
}
</style>

