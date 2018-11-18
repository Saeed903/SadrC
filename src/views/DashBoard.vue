<template>
<div>
    <v-card >
            <v-card-text class="fontIran text-xs-center">داشبورد</v-card-text>
    
        <v-card-text>
            <v-card >
                <v-bottom-nav 
                    :active.sync="bottomNav"
                    :color="color"
                    :value="true"
                    >
                    <v-btn dark value="video">
                    <span class="fontIran">معاملات و تبلیغات آزاد</span>
                    <v-icon>ondemand_video</v-icon>
                    </v-btn>

                    <v-btn dark value="Music">
                    <span class="fontIran">معاملات بسته شده</span>
                    <v-icon>music_note</v-icon>
                    </v-btn>

                    <v-btn dark  value="Book">
                    <span class="fontIran">معاملات تکمیل شده</span>
                    <v-icon>book</v-icon>
                    </v-btn>

                    <v-btn dark value="Image">
                    <span class="fontIran">معاملات لغو شده</span>
                    <v-icon>image</v-icon>
                    </v-btn>

                </v-bottom-nav>
            </v-card>
        </v-card-text>

        <transition name="">
            <div class="fontIran">
                <div v-if="bottomNav=='Music'" >
                    <DashboardAllClosedTrades ></DashboardAllClosedTrades>
                </div>
            </div>
        </transition>

        <transition name="">
            <div class="fontIran">
                <div v-if="bottomNav=='video'">
                    <DashboardOpenTrade></DashboardOpenTrade>
                </div>
            </div>
        </transition>

        <transition name="">
            <div class="fontIran">
                <div v-if="bottomNav=='Image'">
                    <DashboardCancelledTrades></DashboardCancelledTrades>
                </div>
            </div>
        </transition>

        <transition name="">
            <div class="fontIran">
                <div v-if="bottomNav=='Book'">
                    <DashboardCompletedTrades></DashboardCompletedTrades>
                </div>
            </div>
        </transition>
        
        </v-card>
        
        <v-card>
            <v-card-text>
        <Footer></Footer>
            </v-card-text>
        </v-card>

</div>
</template>
<script>
import DashboardAllClosedTrades from './../views/DashboardAllClosedTrades.vue'
import DashboardOpenTrade from './../views/DashboardOpenTrade.vue'
import DashboardCancelledTrades from './../views/DashboardCancelledTrades.vue'
import DashboardCompletedTrades from './../views/DashboardCompletedTrades.vue'
import Footer from './../components/Footer.vue'
  export default {
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
        DashboardAllClosedTrades,
        DashboardOpenTrade,
        DashboardCancelledTrades,
        DashboardCompletedTrades,
        Footer
    }
  }
</script>
<style scoped>


.fontIran{
    font-family: Iranian Sans;
}


</style>
