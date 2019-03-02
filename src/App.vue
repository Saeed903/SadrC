<template>
<div id="app">
  <v-app id="inspire" dark style="background-color:#263238">
    <v-toolbar app style="background-color:#37474F">
      <v-menu
      bottom
      origin="center center"
      transition="slide-y-reverse-transition"
      class="hidden-md-and-up"
      >
        <v-toolbar-side-icon slot="activator"></v-toolbar-side-icon>
          <v-list class="logCard">
            <v-list-tile v-for="(item,i) in items" :key="i" @click="routing(item.path)">
              <v-icon color="cyan accent-3" dark>{{item.icon}}</v-icon>
              <v-list-tile-title class="menuHover pr-3">{{item.title}}</v-list-tile-title>
            </v-list-tile>   
        </v-list>
      </v-menu>
      <v-spacer></v-spacer>
      <v-card-text>
      <v-toolbar-items>
        <router-link class="hidden-sm-and-down menuHover pr-3 pt-2" to="postTrade">ثبت آگهی</router-link>
        <router-link class="hidden-sm-and-down menuHover pr-3 pt-2" to="Forums">انجمن ها</router-link>
        <v-menu offset-y  transition="slide-y-reverse-transition">
          <span slot="activator" dark>
            <span class="hidden-sm-and-down menuHover pr-3">راهنما</span>
            <v-icon class="hidden-sm-and-down" color="cyan accent-2" dark>arrow_drop_down</v-icon>
          </span>
            <v-list class="logCard">
            <v-list-tile
            v-for="(help, index) in helps"
            :key="index"
            @click="routing(help.path)"
            class="menuFont"
            >
            <v-icon color="cyan accent-2" class="mr-0 ml-2">{{help.icon}}</v-icon>
            <v-list-tile-title class="fontIrans1">{{ help.title }}</v-list-tile-title>
            </v-list-tile>
            </v-list>
        </v-menu>
           <v-toolbar-items class="pr-2" v-if="payload"> 
          <div class="text-xs-center">
            <v-menu offset-y transition="slide-y-transition">
              <span slot="activator" dark>
                <v-icon color="cyan accent-2">perm_identity</v-icon>
                <span class="menuHover">{{userName}}</span>
                <v-icon size="20" color="cyan accent-2" dark>arrow_drop_down</v-icon>
              </span>
              <v-list class="logCard">
                <v-list-tile
                v-for="(profile, index) in Profiles"
                :key="index"
                @click="routing(profile.path)"
                class="menuFont"
                >
                  <v-icon color="cyan accent-2" class="mr-0 ml-2">{{profile.icon}}</v-icon>
                  <span class="fontIrans1">{{ profile.title }}</span>
                  <span class="fontIrans1" @click="logout">{{profile.logout}}</span>
                </v-list-tile>
              </v-list>
            </v-menu>
          </div>
        </v-toolbar-items> 
      </v-toolbar-items>
      </v-card-text>

      

      <v-card-text class=" text-sm-left headline">
        <router-link to="wallet">
          <v-tooltip content-class="bottom" bottom>
            <v-icon color="grey lighten-1" class="hidden-sm-and-down ml-3" v-if="payload" slot="activator" size="25">monetization_on</v-icon>
            <span class="iconFont">کیف پول دیجیتالی</span>
          </v-tooltip>
        </router-link>
        <router-link to="dashboard">
          <v-tooltip bottom>
            <v-icon color="grey lighten-1" class="hidden-sm-and-down ml-3" v-if="payload" slot="activator">fas fa-tachometer-alt</v-icon>
            <span class="iconFont">داشبورد مدیریتی</span>
          </v-tooltip>
        </router-link>
        
        <router-link v-if="!payload" class="hidden-sm-and-down menuHover pl-2" to="Signup">{{signState}}</router-link>
        <router-link v-if="!payload" class="hidden-sm-and-down menuHover pl-2 pr-2" to="login">{{loginState}}</router-link>
        <router-link to="/" class="sadrCryptoText">SadrCrypto<span class="body-2">.com</span></router-link><router-link class="" to="/"><v-icon class="hidden-sm-and-down" color="amber darken-2">account_balance</v-icon></router-link>

      </v-card-text>
    
    </v-toolbar>
   
    <v-content>
      <v-container  fluid grid-list-xl>
        <v-layout justify-space-around>
          <v-flex lg10 xl9>
            <transition name="list" mode="out-in">
              <router-view />
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
        items: [
          { title:'ثبت نام',icon:'home',path:'/signup'},
          { title:'ورود', icon:'home',path:'/login'},
          { title:'راهنما',icon:'help',path:''},
          { title:'ثبت آگهی',icon:'add_shopping_cart',path:'postTrade'},
          { title:'انجمن ها',icon:'account_balance',path:'ErrorAuth'},
          { title:'کیف پول',icon:'monetization_on',path:'ErrorAuth'},
          { title:'داشبورد',icon:'fas fa-tachometer-alt',path:'ErrorAuth'},
      ],
        alterIcon:{icon:'arrow_drop-down',},
       helps: [
        { title: 'چگونه ارز بخریم؟', path:'/HowToBuyBticoins',icon:'account_circle'},
        { title: 'سوالات متداول', path:'/FrequentlyAskedQuestions',icon:'home'},
        { title: 'راهنمایی ها', path:'/Guides',icon:'fas fa-tachometer-alt'},
        { title: 'تماس با پشتیبان', path:'/SupportCreateNewTicket',icon:'public' },
        { title: 'وبلاگ', path:'/Blog',icon:'history' },
        { title: 'هزینه ها', path:'/Fees',icon:'help' },
        { title: 'درباره ما', path:'/AboutUs',icon:'lock' },
      ],
      signState:'ثبت نام',
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
        
      },
    },
    mounted(){
     console.log(this.payload);
    }, 
    computed: {
      ...mapState(['currencyMenu']),

      ...mapState ('auth', { payload: 'payload' }),

      userName(){
        let payload, userOnline, userN;
        payload = this.payload;

        if (payload!=null){
          userOnline = payload.user;
          if (userOnline != null){
            userN = userOnline.userName
          }
        }
        return userN;
      },

      Profiles(){
        return [
          { title: this.userName,icon:'account_circle'},
          { title: 'ویرایش پروفایل', path:'/EditYourProfile',icon:'home'},
          { title: 'بازرگان', path:'/Merchant',icon:'public' },
          { title: 'قابل اعتماد', path:'/Trusted',icon:'history' },
          { title: 'پشتیبانی', path:'SupportDrop',icon:'help' },
          { logout:'خروج از حساب کاربری',icon:'lock'}
        ]
       },
    }
}
</script>

<style>
.navThem{
  font-family:iranian sans;
  font-size:14px;
}
.navChildThem{
  font-family:iranian sans;
  font-size:12px;
}
.slide-fade-enter-active {
  transition: all .2s ease;
}
.slide-fade-leave-active {

  transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}.slide-fade-enter, .slide-fade-leave-to
{
  transform: translateX(10px);
  opacity: 0;
}
.saidbar{
  font-family:iranian sans;
}
.freeRegister{
  text-decoration:none;
  color:rgb(153, 68, 68);
  font-size:15px;
  font-family:b titr;
  margin-left:10px;
}
.sadrCryptoText{
  color:#FFA000;
  text-decoration:none;
  font-family:b nazanin;
}
.list-item {
  display: inline-block;
  margin-right: 10px;
}
.logCard{
  border:1px solid #18FFFF;
}
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
.fontIran{
    font-family:'Iranian Sans';
    font-size:19px;
    color:white;
}
.fontsIran{
    font-family:'Iranian Sans';
    font-size:15px;
    color:#E0E0E0;
}
.fontIrans{
    font-family:'Iranian Sans';
    font-size:12px;
    color:#BDBDBD;
}
.textFont{
  font-family:iranian sans;
  font-size:13px;
  color:#E0E0E0;
}
.textCard{
    font-family:'iranian sans';
    color:#00E5FF;
    text-decoration:none;
}
.textCard:hover{
    color:#18FFFF;
}
.fontIrans1{
  font-family:'Iranian Sans';
  font-size:12px;
}
.card{
  background-color:rgb(82, 95, 127)
}
.menuHover{
  text-decoration:none;
  color:#BDBDBD;
  font-family:iranian sans;
  font-size:13px;
}
.menuHover:hover{
  color:#EEEEEE;
}
.iconFont{
  font-family:iranian sans;
}
</style>

