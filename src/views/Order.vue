<template>
<v-container fluid grid-list-md pt-0>
  <v-layout row wrap align-justify justify-center>
    <v-flex>
      <p class="titled">خرید بیت کوین با استفاده از انتقال بانکی جمهوری اسلامی ایران با ریال ایران</p>
    </v-flex>

    <v-flex d-flex sm12 md6 lg6>
      <v-layout  row wrap>
        <v-flex d-flex>
          <v-layout column>
            <v-flex>
              <v-card-media>
                <div class="btc">
                  <p>قیمت:</p>
                  <p>روش پرداخت:</p>
                  <p>کاربر:</p>
                  <p>محدودیت های تجاری:</p>
                  <p>موقعیت:</p>
                  <p>پنجره پرداخت</p>
                </div>
                <div class="pr-5 btc">
                  <p style="color:greenyellow">935543438.97 IRR/BTC</p>
                  <p>انتقال بانک جمهوری اسلامی ایران</p>
                  <p><router-link  to="/DashBoard"><v-tooltip  right><v-icon slot="activator"  style="color:aqua">perm_identity</v-icon><span class="fontIran">داشبورد</span></v-tooltip></router-link>آلمان</p>
                  <p>نمره بازخورد.100<router-link to="" class="router">دیدن بازخورد</router-link></p>
                  <p>10,000,000-30,000,001 IRR</p>
                  <p ><router-link to="" class="router">تهران,استان تهران,ایران</router-link></p>
                  <p>1 ساعت و 30 دقیقه</p> 
                </div>
              </v-card-media>
            </v-flex>
            <v-flex>
              <order-process></order-process>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-flex>

    <v-flex d-flex sm6 md6 lg6 v-if="!confirmEmailDate && userId" >
      <working-hour workingTime="true"></working-hour>
    </v-flex>

    <v-flex v-if="!confirmEmailDate && userId" d-flex xs12 sm6 md6 >
      <working-hour sadrsys="true"></working-hour>  
    </v-flex>

    <v-flex v-if="!confirmEmailDate && userId" d-flex xs12 sm6 md6 >
      <working-hour Reminder="ture"></working-hour>  
    </v-flex>
  </v-layout>
</v-container>
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
      ]
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
