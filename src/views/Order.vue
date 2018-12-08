<template>
<v-layout  column>
  <p class="titled ">خرید بیت کوین با استفاده از انتقال بانکی جمهوری اسلامی ایران با ریال ایران</p>
  <div >   
    <v-layout row wrap>
      <v-flex md6 lg6 xl6>
        <v-flex  class="btc">
          <div>
            <p>قیمت: <span style="color:greenyellow" class="pr-5">935543438.97 IRR/BTC</span></p>
            <p>روش پرداخت: <span style="color:greenyellow">انتقال بانک جمهوری اسلامی ایران</span></p>
            <p>کاربر: <span style="color:greenyellow"><router-link class="pr-5" to="/DashBoard"><v-tooltip  right><v-icon slot="activator"  style="color:aqua">perm_identity</v-icon><span class="fontIran">داشبورد</span></v-tooltip></router-link>آلمان</span></p>
            <p>محدودیت های تجاری: <span style="color:greenyellow">نمره بازخورد(100).<router-link to="" class="router">دیدن بازخورد</router-link></span></p>
            <p>موقعیت: <span style="color:greenyellow"><router-link  to="" class="router pr-5">تهران,استان تهران,ایران</router-link></span></p>
            <p>پنجره پرداخت: <span style="color:greenyellow">1 ساعت و 30 دقیقه</span></p>
          </div>
        </v-flex>
        <v-flex>
          <order-process></order-process>
        </v-flex>

        <v-flex>
          <v-expansion-panel>
              <v-expansion-panel-content
                  v-for="(item,i) in items"
                  :key="i"
                  expand-icon="mdi-menu-down"
              >
              <div class="fontIran text-xs-right" slot="header">{{item.title}}</div>
                  <v-card>
                      <v-card-text class="fontIran text-xs-right">{{item.persianTitle}}</v-card-text>
                  </v-card>
              </v-expansion-panel-content>
          </v-expansion-panel>
        </v-flex>
      </v-flex>
      
      <v-flex  md4 lg4 xl4 v-if="!confirmEmailDate && userId" >
        <working-hour :workingHours="HEY" workingTime="true"></working-hour>
      </v-flex>
    </v-layout> 
    
    <v-layout>
      <v-flex md6 lg6 xl6 v-if="!confirmEmailDate && userId"   >
        <working-hour :workingHours="HEY" sadrsys="true"></working-hour>  
      </v-flex>

      <v-flex md6 lg6 xl6 v-if="!confirmEmailDate && userId"  >
        <working-hour :workingHours="HEY" Reminder="ture"></working-hour>  
      </v-flex>    
    </v-layout>  

  
  </div>
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
      HEY:[
        "یکشنبه : تعطیل",
        "دوشنبه : 24 ساعت",
        "سه شنبه : تعطیل",
        "چهارشنبه : تعطیل",
        "پنج شنبه : تعطیل",
        "جمعه : تعطیل",
        "شنبه : تعطیل",
      ],
      items:[
        {title:'چگونه می توان شروع کرد و با معامله گر تماس گرفت؟', persianTitle:'صدرکریپتو یک مبادله بیت کوین برابر با هم است. ما یک بازار است که کاربران می توانند بیت کوین ها را از یکدیگر خریداری و فروش کنند. کاربران که به عنوان معامله گران نامیده می شوند، تبلیغات با قیمت و روش پرداخت که می خواهند ارائه دهند. شما می توانید وب سایت ما برای تبلیغات تجاری و جستجوی روش پرداختی که ترجیح می دهید را مرور کنید. شما می توانید معامله گران خرید و فروش Bitcoins آنلاین را برای بیش از 60 روش مختلف پرداخت پیدا کنید.اگر شما به sadrCrypto جدید هستید و می خواهید بیت کوین را خریداری کنید، لطفا به نحوه خرید راهنمای ما برای یادگیری نحوه خرید بیت کوین نگاه کنید.'},
        {title:'نحوه پرداخت آنلاین', persianTitle:'اتریوم'},
        {title:'لغو تجارت', persianTitle:'زدکش'},
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
