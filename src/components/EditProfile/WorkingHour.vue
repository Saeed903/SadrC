<template>
    <v-card>
        <v-card-text>
            <p class="titled">شرایط تجارت با آلمان</p>
            <div style="background-color:rgb(26, 29, 37)">
                <p style="padding-right:20px" class="fontIran">تایید احراز هویت <br>پرداخت وجه مورد توافق <br>بیت کوین</p>
            </div>
            <p class="titled">ساعات کار</p>
            <v-list>
                <ul class="fontIran" v-for="item in items" :key="item" style="padding-right:25px">
                <li>{{item}}</li>
                </ul>
            </v-list>
            <p class="fontIran">زمان محلی:تهران</p>
            <p ><router-link class="router" to="">گزارش این تبلیغ</router-link></p>
        </v-card-text>
      </v-card>
</template>
<script>
export default {

    name:'WorkingHour',
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
}
</script>
<style scoped>
.fontIran{
    font-family:'Iranian Sans';
    padding-left:20px;
}
.fontsIran{
    font-family:'iranian sans';
    color:#00B8D4;
    text-decoration:none;
}
.fontsIran:hover{
    color:#18FFFF;
}

</style>

