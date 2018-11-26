<template>
    <div  >
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
      </div>
</template>
<script>
export default {

    name:'WorkingHour',
    data: () => ({

    }),
}
</script>
