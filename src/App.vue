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
              <v-subheader  v-if="currency.heading">
                {{ currency.heading }}
              </v-subheader>
            </v-flex>

            <v-flex xs6 >
              <a href="#!" class="">ویرایش</a>
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
                <span class="saidbar">{{ currency.text }}</span>
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
        <router-link to="PostTrade">
          <v-tooltip bottom>
            <v-icon slot="activator" color="white" dark >
              shopping_cart
            </v-icon>
            <span class="saidbar">ثبت آگهی</span>
          </v-tooltip>
        </router-link>
      
        <router-link to="Forums">
          <v-tooltip bottom>
            <v-icon slot="activator" color="white" dark>
              group
            </v-icon>
            <span class="saidbar">انجمن ها</span>
          </v-tooltip>
        </router-link>

          <v-menu 
            offset-y
            transition="slide-y-transition"
            >
              <v-btn
              slot="activator"
              dark
              >
                <v-icon>help</v-icon>
                <v-icon color="grey" dark>arrow_drop_down</v-icon>
              </v-btn>
              <v-list>
              <v-list-tile
              v-for="(help, index) in helps"
              :key="index"
              @click="routing(help.path)"
              class="menuFont"
              >
              <v-icon>{{help.icon}}</v-icon>
              <v-list-tile-title class="fontIran">{{ help.title }}</v-list-tile-title>
              </v-list-tile>
              </v-list>
            </v-menu>
      </v-toolbar-items>
      </v-card-text>

      <v-card-text >
        <v-toolbar-items v-if="!user"> 
          <router-link to="Login">
            <v-tooltip bottom>
              <v-icon slot="activator" color="white" dark>
                lock_open
              </v-icon>
              <span class="saidbar">{{loginState}}</span>
            </v-tooltip>
          </router-link>
          <router-link to="Signup">
            <v-tooltip bottom>
              <v-icon slot="activator" color="white" dark>
                lock
              </v-icon>
              <span class="saidbar">{{signState}}</span>
            </v-tooltip>
          </router-link>
          <router-link to="FrequentlyAskedQuestions">more</router-link>
          <router-link to="EditYourProfile" class="white--text">edit profile</router-link>
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
            @click="routing(profile.path)"
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
        <router-link to="/" class="sadrCryptoText">SadrCrypto<span class="body-2">.com</span><v-icon color="grey">home</v-icon></router-link>
      </v-card-text>
      
    </v-toolbar>
   
    <v-content>
      <v-container >
        <v-layout >
          <v-flex >
            
            <transition name="list" mode="out-in">
              
              <router-view/>
            </transition>  
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>

</v-app>
<h2>{{user}}</h2>
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
        { title: 'پشتیبانی', path:'SupportDrop',icon:'help' },
        { title: 'خروج', path:'',icon:'lock' },
      ],
       helps: [
        { title: 'چگونه بیت کوین بخریم؟', path:'/HowToBuyBticoins',icon:'account_circle'},
        { title: 'سوالات متداول', path:'/FrequentlyAskedQuestions',icon:'home'},
        { title: 'راهنمایی ها', path:'/Guides',icon:'fas fa-tachometer-alt'},
        { title: 'تماس با پشتیبان', path:'/',icon:'public' },
        { title: 'وبلاگ', path:'/Blog',icon:'history' },
        { title: 'هزینه ها', path:'/Fees',icon:'help' },
        { title: 'درباره ما', path:'/AboutUs',icon:'lock' },
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

      ...mapState ('auth', { user: 'payload' })
    }
}
</script>

<style scoped>
.fontIran{
  font-family:iranian sans;
  font-size:12px;
}
.saidbar{
  font-family:iranian sans;
}
.slide-fade-enter-active {
  transition: all .2s ease;
}
.slide-fade-leave-active {
  transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
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
.sadrCryptoText{
  color:rgb(235, 224, 224);
  text-decoration:none;
  font-family:b nazanin;
}

.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}

</style>
