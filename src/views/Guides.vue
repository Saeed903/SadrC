<template>
<v-container fluid grid-list-lg pt-0>
    <v-layout  justify-space-around>
        <v-flex lg10 xl8>
            <v-card-text class="text-xs-center fontIran">
                <v-icon>description</v-icon>
                <p class="titled">راهنمایی درصدر کرپیتو</p>
                <p>خودتان را با راهنمایی های ما راحت کنید</p>
            </v-card-text>
        
            <v-layout row wrap>
                <v-flex v-for= "(help, index) in Helps" :key="index"  xs12 sm6 md6 lg6 xl6 >
                    <router-link class="router" :to="help.path" >
                        <v-card  height="100%">
                            <v-card-text class="text-xs-center">
                                <p class="headlined">{{help.title}}</p>
                                <p>{{help.type}}</p>
                            </v-card-text>
                        </v-card>
                    </router-link>
                </v-flex>
            </v-layout>
        </v-flex>
    </v-layout>
</v-container>
</template>
<script>
export default {
    data : () => ({
        Helps:[
            {title:'چگونه بیت کوین بخریم؟', type:'خودتان را با راهنمایی های ما راحت کنید', path: '/'},
            {title:'چگونه بیت کوین بفروشیم؟', type:'چگونه بیت کوین خود را به سرعت و با خیال راحت بفروشید؟', path: '' },
            {title:'راهنمای امنیت', type:'راهنمای نگه داشتن خود و پول خود را امن نگه دارید', path: ''},
            {title:'مقدمه ای برای تجارت بیت کوین آنلاین', type:'مقدمه راهنمایی برای تجارت آنلاین بیت کوین در صدر کریپتو', path: ''},
            {title:'راهنمایی در مورد چگونگی تجارت بیت کوین در محلی', type:'راهنمای کوتاه در مورد نحوه فروش بیت کوین به صورت محلی برای پول نقد', path: ''},
            {title:'معادلات قیمت تبلیغات 101 ', type:'اصول اولیه قیمت تبلیغات را یاد بگیرید', path: ''},
            {title:'مستندات آی پی', type:'از آی پی استفاده کنید تا برنامه های خودتان را بسازید و به تجارت خودکار بپردازید', path: ''},
            {title:'بیت کوین ها را در وب سایت خود بپذیرید', type:'نحوه استفاده از آی پی برای پذیرش بیت کوین ها در فروشگاه وب شما چیست؟', path: ''},
        ]
    }),
}
</script>

<style scoped>
.titled{
  font-family: Iranian Sans;
  font-size: 22px; 
}

.headlined{
  font-family: Iranian Sans;
  font-size: 18px; 
}
.fontIran{
font-family: Iranian Sans;
font-size: 12px;
}
.router{
    text-decoration: none;
}

</style>
