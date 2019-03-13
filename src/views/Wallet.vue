<template>
    <div>
            <v-card>
                <v-bottom-nav
                    :active.sync="bottomNav"
                    :color="color"
                    :value="true"
                    absolute
                    shift
                >
                    <v-btn dark>
                        <span class="fontIrans">ارسال بیت کوین</span>
                        <v-icon>ondemand_video</v-icon>
                    </v-btn>

                    <v-btn dark>
                        <span class="fontIrans">دریافت بیت کوین</span>
                        <v-icon>music_note</v-icon>
                    </v-btn>

                    <v-btn dark>
                        <span class="fontIrans">معاملات</span>
                        <v-icon>book</v-icon>
                    </v-btn>
                </v-bottom-nav>
            </v-card>
        </v-card-text>

         <transition name="">
            <div class="fontIrans">
                <div v-if="bottomNav=='Music'" >
                    <WalletReceiveBitcoin ></WalletReceiveBitcoin>
                </div>
            </div>
        </transition>

        <transition name="">
            <div class="fontIrans">
                <div v-if="bottomNav=='video'">
                    <WalletSendBitcoin></WalletSendBitcoin>
                </div>
            </div>
        </transition>

        <transition name="">
            <div class="fontIrans">
                <div v-if="bottomNav=='Image'">
                    <WalletTransactions></WalletTransactions>
                </div>
            </div>
        </transition>
    </div>
</template>
<script>
    import WalletReceiveBitcoin from './../components/WalletReceiveBitcoin.vue'
    import WalletSendBitcoin from './../components/WalletSendBitcoin.vue'
    import WalletTransactions from './../components/WalletTransactions.vue'
    import Footer from './../components/Footer.vue'
    export default{
         data : () =>({
        bottomNav: "3"
    }),
    computed: {
      color () {
        switch (this.bottomNav) {
          case 0: return 'blue-grey'
          case 1: return 'teal'
          case 2: return 'brown'
          case 3: return 'indigo'
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

