<template>
    <div>
          <p>این آدرس دریافت شما به عنوان یک کد QR است. امکان ارسال وجود دارد
             بک کوین به شما از کیف پول تلفن همراه با اسکن کردن این کد.</p>
        <QrcodeVue></QrcodeVue>
    </div>
</template>
<script>
import QrcodeVue from 'qrcode.vue'
export default{
    data(){
        return{
               isTrader:0,
            btrAddr: 'bitcoin:18JsNRxD7Tc8KDnCYkx7y98w22fgpgARMn'
        }
    },
    components:{
        QrcodeVue
    }
}
</script>