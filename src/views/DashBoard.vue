<template>
    <div>
        <p class="dashboardTop">داشبورد</p>
        <p class="explainDashboard">در این صفحه شما میتوانید تبلیغات و معاملات خود را مشاهده و مدیریت کنید.</p>
        <v-card height="200px" flat>
            
            <v-bottom-nav
                :active.sync="bottomNav"
                :value="true"
                absolute
                color="transparent"
                >
                <v-btn
                color="teal"
                flat
                value="recent"
                >
                <span>Recent</span>
                <v-icon>history</v-icon>
                </v-btn>

                <v-btn
                color="teal"
                flat
                value="favorites"
                >
                <span>Favorites</span>
                <v-icon>favorite</v-icon>
                </v-btn>

                <v-btn
                color="teal"
                flat
                value="nearby"
                >
                <span>Nearby</span>
                <v-icon>place</v-icon>
                </v-btn>
            </v-bottom-nav>
            <div class="headline text-xs-center pa-5">
                <p>{{bottomNav}}</p>
            </div>
        </v-card>
    </div>
</template>
<script>
  export default {
    data () {
      return {
        bottomNav: 'recent'
      }
    }
  }
</script>
<style scoped>
.dashboardTop{
    font-size:35px;
    font-family:b nazanin;
    color:black;
    text-align:center;
    text-shadow:1px 2px 2px rgb(134, 121, 121);
}
.explainDashboard{
    text-align:right;
    font-size:25px;
    font-family:b nazanin;
    color:black;
}
.router{
    font-size:23px;
    font-family:b nazanin;
    color:rgb(84, 151, 240);
    text-decoration:none;
    margin-right:10px;
    padding-right:5px;
    padding-left:5px;
    text-align:center;
}
.router:hover{
    background-color:rgb(30, 132, 228);
    color:white;
    border-radius:4px;
}
</style>
