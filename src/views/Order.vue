<template>
<v-layout row wrap>
  <p class="titled ">خرید بیت کوین با استفاده از انتقال بانکی جمهوری اسلامی ایران با ریال ایران</p>
    
    <v-flex d-flex >    
      <v-layout row wrap>
        <v-flex>
          <v-layout column>
            <v-flex d-flex class="btc">
              <div>
                <p>قیمت: <span style="color:greenyellow" class="pr-5">935543438.97 IRR/BTC</span></p>
                <p>روش پرداخت: <span style="color:greenyellow">انتقال بانک جمهوری اسلامی ایران</span></p>
                <p>کاربر: <span style="color:greenyellow"><router-link class="pr-5" to="/DashBoard"><v-tooltip  right><v-icon slot="activator"  style="color:aqua">perm_identity</v-icon><span class="fontIran">داشبورد</span></v-tooltip></router-link>آلمان</span></p>
                <p>محدودیت های تجاری: <span style="color:greenyellow">نمره بازخورد(100).<router-link to="" class="router">دیدن بازخورد</router-link></span></p>
                <p>موقعیت: <span style="color:greenyellow"><router-link  to="" class="router pr-5">تهران,استان تهران,ایران</router-link></span></p>
                <p>پنجره پرداخت: <span style="color:greenyellow">1 ساعت و 30 دقیقه</span></p>
              </div>
            </v-flex>
            <v-flex d-flex md4 lg4 xl4>
              <order-process></order-process>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-flex>

    <v-flex v-if="!confirmEmailDate && userId" >
      <working-hour workingTime="true"></working-hour>
    </v-flex>

    <v-flex v-if="!confirmEmailDate && userId" d-flex xs12 sm6 md6 >
      <working-hour sadrsys="true"></working-hour>  
    </v-flex>

    <v-flex v-if="!confirmEmailDate && userId" d-flex xs12 sm6 md6 >
      <working-hour Reminder="ture"></working-hour>  
    </v-flex>
</v-layout>
</template>
<script>

import WorkingHour from "./../components/WorkingHour.vue";
import OrderProcess from "./../components/OrderProcess.vue";

import { mapState } from 'vuex';

export default {
  components:{
    OrderProcess,
    WorkingHour
  },
  computed:{
    ...mapState('auth', { payload: 'payload'}),
    confirmEmailDate(){
      let payload = this.payload

      return payload != null ? payload.user.emailVerifiedDate: null;
      
    },
    userId (){
      let payload = this.payload

      return payload != null ? payload.userId: null;
    }
  },
  data:()=>({
      items:[
            "یکشنبه : تعطیل",
            "دوشنبه : 24 ساعت",
            "سه شنبه : تعطیل",
            "چهارشنبه : تعطیل",
            "پنج شنبه : تعطیل",
            "جمعه : تعطیل",
            "شنبه : تعطیل"
      ],
      
  })
};
</script>

<style scoped>
.titled{
  font-family: Iranian Sans;
  font-size: 18px; 
}

.headline{
  text-decoration: none;
  padding-right:10px;
  color:rgb(133, 129, 129);
}
.fontIran{
font-family: Iranian Sans;
font-size: 13px;

}
.router{
    font-family:'iranian sans';
    color:rgb(0, 153, 255);
    text-decoration:none;
}
.router:hover{
    color:rgb(0, 140, 255);
}
.btc{
  font-family: Iranian Sans;
  
}

</style>
