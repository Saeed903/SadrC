<template>
    <div>
          <p>This is your receiving address as a QR code.It is possible to send 
            bitcoins to you from mobile wallets by scanning this code.
        </p>
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