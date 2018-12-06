<template>
    <div>
        <v-card-text class="text-xs-center fontIran">
            <v-icon size="50px" color="cyan accent-2">description</v-icon>
            <p class="titled">راهنمایی در صدرکریپتو</p>
        </v-card-text>

        <v-layout row wrap>
            <v-flex v-for= "(help, index) in Helps" :key="index"  xs12 sm6 md6 lg12 xl12 >
                <router-link class="router" :to="help.path" >
                    <v-card  height="100%">
                        <v-card-text class="text-xs-center">
                            <p class="titled">{{help.title}}</p>
                            <p class="fontIran">{{help.type}}</p>
                        </v-card-text>
                    </v-card>
                </router-link>
            </v-flex>
        </v-layout>
        <Footer></Footer>
    </div>
</template>
<script>
import Footer from './../components/Footer.vue'
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
    components:{
        Footer,
    }
}
</script>

<style scoped>
.titled{
  font-family: Iranian Sans;
  font-size:18px; 
}

.headlined{
  font-family: Iranian Sans;
  font-size: 18px; 
}
.fontIran{
font-family: Iranian Sans;
font-size:12px;
}
.router{
    text-decoration: none;
}

</style>
