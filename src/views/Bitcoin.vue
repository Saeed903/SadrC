<template>
<div>
    <v-layout  justify-space-around>
        <v-flex lg9 xl8>
            
            <v-card-text>
                <FormSell :currency="currency"/>
                <Advertise/>
            </v-card-text>
            <v-parallax src="img/SadrCrypto/topic.jpg" height="200"></v-parallax>
            <span>skdlgkjasdgfajkshfi</span>
        </v-flex>
    </v-layout>
    <v-layout  justify-space-around>
        <v-flex lg9 xl8>
            <v-card-text>
                <Footer/>
            </v-card-text>
        </v-flex>
    </v-layout>
    </div>
</template>
<script>
import Advertise from './../components/Advertise.vue'
import FormSell from './../components/FormSell.vue'
import Footer from './../components/Footer.vue'

import { mapState } from 'vuex';

export default{

  computed:{
      ...mapState(['currency']),
  },

  data(){
      return{
          isTrader:0
      }
  },
  components:{  
    Advertise,
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

