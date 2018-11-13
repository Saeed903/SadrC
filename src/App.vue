<template>
<div id="app">
  <v-app
    id="inspire"
    dark
  >
    <v-navigation-drawer
      v-model="drawer"
      fixed
      right
      app >
       <v-list >
        <template  v-for="currency in currencyMenu" >
          <v-layout
            row 
            v-if="currency.heading"
            :key="currency.heading">
            <v-flex xs6 >
              <v-subheader v-if="currency.heading">
                {{ currency.heading }}
              </v-subheader>
            </v-flex>
            <v-flex xs6 >
              <a href="#!" class="body-2 black--text">ویرایش</a>
            </v-flex>
          </v-layout>
          <v-list-group
            v-else-if="currency.children"
            :prepend-icon="currency.model ? currency.arrowIcon : currency['arrowIcon-alt']"
            append-icon=""
            v-model="currency.model"
            :key="currency.text" >

            <v-list-tile slot="activator">
              <v-list-tile-content  >
                <v-list-tile-sub-title>
                  <span class="navThem">{{ currency.text }}</span>
                </v-list-tile-sub-title>
              </v-list-tile-content>

              <v-list-tile-action>
              <v-icon v-if="currency.icon" >{{ currency.icon }}</v-icon>
              <p v-if="currency.class" :class="currency.class"></p>
            </v-list-tile-action>

            </v-list-tile>
            <v-list-tile
              v-for="(child, i) in currency.children"
              :key="i"
              @click="routingMenu(child.text)"
            >
              
              <v-list-tile-content >
                <v-list-tile-sub-title>
                  <span class="navChildThem">{{ child.text }}</span>
                </v-list-tile-sub-title>
              </v-list-tile-content>
              <v-list-tile-action v-if="child.icon">
                <v-icon v-if="child.icon">{{ child.icon }}</v-icon>
              </v-list-tile-action>
              
              
            </v-list-tile>
          </v-list-group>
          <v-list-tile v-else @click="routingMenu(currency.text)" :key="currency.text">
            <v-list-tile-content style="text-align:right">
              <v-list-tile-sub-title >
                <span class="navThem">{{ currency.text }}</span>
              </v-list-tile-sub-title>
            </v-list-tile-content>
            
            <v-list-tile-action>
              <v-icon>{{ currency.icon }}</v-icon>
            </v-list-tile-action>
            
          </v-list-tile>
        </template>
      </v-list>
    </v-navigation-drawer>

  
    <v-toolbar fixed app >
      
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-spacer></v-spacer>
      <v-card-text>
      <v-toolbar-items>

        <router-link to="BuyButtonLoggedButNotverifiyEmail">
          <v-tooltip bottom>
            <v-icon slot="activator" color="grey" dark >
              shopping_cart
            </v-icon>
            <span>BuyButtonLoggedButNotverifiyEmail </span>
          </v-tooltip>
        </router-link>

        <router-link to="PostTrade">
          <v-tooltip bottom>
            <v-icon slot="activator" color="grey" dark >
              shopping_cart
            </v-icon>
            <span>ثبت آگهی</span>
          </v-tooltip>
        </router-link>
      
        <router-link to="Forums">
          <v-tooltip bottom>
            <v-icon slot="activator" color="grey" dark>
              group
            </v-icon>
            <span>انجمن ها</span>
          </v-tooltip>
        </router-link>

        <router-link to="Help">
          <v-tooltip bottom>
            <v-icon slot="activator" color="grey" dark>
              help
            </v-icon>
            <span>کمک</span>
          </v-tooltip>
        </router-link>

      </v-toolbar-items>
      </v-card-text>

      <v-card-text >
        <v-toolbar-items v-if="!user"> 
          <router-link to="Signup" class="freeRegister">{{signState}}</router-link>
          <router-link to="Login" class="menu">
            <v-tooltip bottom>
              <v-icon slot="activator" color="grey" dark>
                lock_open
              </v-icon>
              <span>ورود</span>
            </v-tooltip>
          </router-link>
          <router-link to="MoreAboutTrustSystem">more</router-link>
        </v-toolbar-items>
      </v-card-text>
      
      
      
      <v-toolbar-items v-if="user" > 
        <router-link  to="EditYourProfile" class="menu">ویرایش پروفایل</router-link>
        <router-link  to="Wallet" class="menu">کیف پول</router-link>
      
        <div class="text-xs-center">
          <v-menu 
          offset-y
          transition="slide-y-transition"
          >
            <v-btn
            slot="activator"
            dark
            >
            <v-icon
            style="color:aqua"
            >
            perm_identity</v-icon>
            <v-icon dark>arrow_drop_down</v-icon>
            </v-btn>
            <v-list>
            <v-list-tile
            v-for="(profile, index) in Profiles"
            :key="index"
            @click="routingMenu(profile.text)"
            class="menuFont"
            >
            <v-icon>{{profile.icon}}</v-icon>
            <v-list-tile-title>{{ profile.title }}</v-list-tile-title>
            </v-list-tile>
            </v-list>
          </v-menu>
        </div>
        <v-btn flat @click="logout">خروج</v-btn>
    </v-toolbar-items>
      

      <v-card-text class="text-sm-left headline">
        <router-link to="/" class="sadrCryptoText">SadrCrypto<span class="littleText">.com</span><v-icon color="grey">home</v-icon></router-link>
      </v-card-text>
      
    </v-toolbar>
   
    <v-content>
      <v-container >
        <v-layout >
          <v-flex >
            <transition name="slide-fade" mode="out-in">
              <router-view/>
            </transition>  
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>

</v-app>
</div>
</template>
<script>
  
  import { mapState, mapActions } from 'vuex';

  export default {
  data: () => ({
      drawer: true,
      
      Profiles: [
        { title: 'sadrSys',icon:'account_circle'},
        { title: 'ویرایش پروفایل', path:'/EditYourProfile',icon:'home'},
        { title: 'داشبورد', path:'/DashBoard',icon:'fas fa-tachometer-alt'},
        { title: 'بازرگان', path:'/Merchant',icon:'public' },
        { title: 'قابل اعتماد', path:'/Trusted',icon:'history' },
        { title: 'پشتیبانی', path:'/SupportDrop',icon:'help' },
        { title: 'خروج', path:'',icon:'lock' },
      ],
      signState:'ثبت نام رایگان',
      loginState:'ورود'
    }),
    props: {
      source: String
    },
    methods:{
      ...mapActions(['routingMenu']),
      ...mapActions('auth',{ authLogout: 'logout' }),

      logout(){
        this.authLogout().then(()=> this.$router.push('/SadrCrypto'));
      },

      routing(paths){
        this.$router.push(paths);
        
      }
    },
    mounted(){
     console.log(this.user);
    }, computed: {
      ...mapState(['currencyMenu']),

      ...mapState ('auth', {user: 'payload'})
    }
}
</script>

<style scoped>
#keep main .container {
    height: 660px;
  }
  .navigation-drawer__border {
    display: none;
  }
 .text{
   font-weight:400px;
 }
 .slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
{
  transform: translateX(10px);
  opacity: 0;
}
.freeRegister{
  text-decoration:none;
  color:rgb(153, 68, 68);
  font-size:15px;
  font-family:b titr;
  margin-left:10px;
  
}
.menu{
  text-decoration:none;
  color:rgb(153, 68, 68);
  font-size:15px;
  font-family:b titr;
  margin-left:5px;
}
.sadrCryptoText{
  color:rgb(235, 224, 224);
  text-decoration:none;
  
}
.littleText{
  text-decoration:none;
  color:rgb(235, 224, 224);
  font-size:15px;
  font-family:b titr;
}
.menuFont{
  font-family:b nazanin;
}
</style>
