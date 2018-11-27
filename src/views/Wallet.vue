<template>
    <div>
        <v-card-text>
            <v-card >
                <v-bottom-nav 
                    :active.sync="bottomNav"
                    :color="color"
                    :value="true"
                    >
                    <v-btn dark value="video">
                    <span class="menu">ارسال بیت کوین</span>
                    <v-icon>ondemand_video</v-icon>
                    </v-btn>

                    <v-btn dark value="Music">
                    <span class="menu">دریافت بیت کوین</span>
                    <v-icon>music_note</v-icon>
                    </v-btn>

                    <v-btn dark  value="Book">
                    <span class="menu">معاملات</span>
                    <v-icon>book</v-icon>
                    </v-btn>

                </v-bottom-nav>
            </v-card>
        </v-card-text>

         <transition name="">
            <div class="contant">
                <div v-if="bottomNav=='Music'" >
                    <WalletReceiveBitcoin ></WalletReceiveBitcoin>
                </div>
            </div>
        </transition>

        <transition name="">
            <div class="contant">
                <div v-if="bottomNav=='video'">
                    <WalletSendBitcoin></WalletSendBitcoin>
                </div>
            </div>
        </transition>

        <transition name="">
            <div class="contant">
                <div v-if="bottomNav=='Image'">
                    <WalletTransactions></WalletTransactions>
                </div>
            </div>
        </transition>
        <Footer class="fari"></Footer>
    </div>
</template>
<script>
    import WalletReceiveBitcoin from './../components/WalletReceiveBitcoin.vue'
    import WalletSendBitcoin from './../components/WalletSendBitcoin.vue'
    import WalletTransactions from './../components/WalletTransactions.vue'
    import Footer from './../components/Footer.vue'
    export default{
         data : () =>({
        bottomNav: "video"
    }),
    computed: {
      color () {
        switch (this.bottomNav) {
          case "Video": return 'blue-grey'
          case "Music": return 'teal'
          case "Book": return 'brown'
          case "Image": return 'indigo'
        }
      }
    },mounted(){
        console.log(this.bottomNav);
    },
        components:{
            WalletReceiveBitcoin,
            WalletSendBitcoin,
            WalletTransactions,
             Footer,

        }
    }
</script>

