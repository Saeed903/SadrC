<template>

<v-flex dflex lg8>
    <v-card>
       
        <v-card-text>
            <p class="headline text-xs-center">داشبورد</p>
            <p class="subheading">در این صفحه شما میتوانید تبلیغات و معاملات خود را مشاهده و مدیریت کنید.</p>
        </v-card-text>
       
        <v-card-text>
            <v-card >
                <v-bottom-nav
                    :active.sync="bottomNav"
                    :color="color"
                    :value="true"
                    >
                    <v-btn dark value="video">
                    <span>معاملات و تبلیغات آزاد</span>
                    <v-icon>ondemand_video</v-icon>
                    </v-btn>

                    <v-btn dark value="Music">
                    <span>معاملات بسته شده</span>
                    <v-icon>music_note</v-icon>
                    </v-btn>

                    <v-btn dark  value="Book">
                    <span>معاملات تکمیل شده</span>
                    <v-icon>book</v-icon>
                    </v-btn>

                    <v-btn dark value="Image">
                    <span>معاملات لغو شده</span>
                    <v-icon>image</v-icon>
                    </v-btn>
                </v-bottom-nav>
            </v-card>
        </v-card-text>

        <transition name="">
            <div >
                <div v-if="bottomNav=='Music'">
                    <DashboardAllClosedTrades></DashboardAllClosedTrades>
                </div>
            </div>
        </transition>

        <transition name="">
            <div>
                <div v-if="bottomNav=='video'">
                    <DashboardOpenTrade></DashboardOpenTrade>
                </div>
            </div>
        </transition>

        <transition name="">
            <div >
                <div v-if="bottomNav=='Image'">
                    <DashboardCancelledTrades></DashboardCancelledTrades>
                </div>
            </div>
        </transition>

        <transition name="">
            <div>
                <div v-if="bottomNav=='Book'">
                    <DashboardCompletedTrades></DashboardCompletedTrades>
                </div>
            </div>
        </transition>

        <Footer></Footer>
        
    </v-card>
</v-flex>

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


</style>
