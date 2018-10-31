<template>
<div id="app">
  <v-app
    id="inspire"
  >
    <v-navigation-drawer
      v-model="drawer"
      fixed
      right
      app >
       <v-list >
        <template  v-for="item in items">
          <v-layout
            row 
            v-if="item.heading"
            :key="item.heading">
            <v-flex xs6>
              <v-subheader v-if="item.heading">
                {{ item.heading }}
              </v-subheader>
            </v-flex>
            <v-flex xs6 class="text-xs-center">
              <a href="#!" class="body-2 black--text">ویرایش</a>
            </v-flex>
          </v-layout>
          <v-list-group
            v-else-if="item.children"
            :prepend-icon="item.model ? item.arrowIcon : item['arrowIcon-alt']"
            append-icon=""
            v-model="item.model"
            :key="item.text" >

            <v-list-tile slot="activator">
              <v-list-tile-content  >
                <v-list-tile-sub-title>
                  <span class="navThem">{{ item.text }}</span>
                </v-list-tile-sub-title>
              </v-list-tile-content>

              <v-list-tile-action>
              <v-icon v-if="item.icon" >{{ item.icon }}</v-icon>
              <p v-if="item.class" :class="item.class"></p>
            </v-list-tile-action>

            </v-list-tile>
            <v-list-tile
              v-for="(child, i) in item.children"
              :key="i"
              @click="sidebar(child.path)"
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
          <v-list-tile v-else @click="sidebar(item.path)" :key="item.text">
            <v-list-tile-content style="text-align:right">
              <v-list-tile-sub-title >
                <span class="navThem">{{ item.text }}</span>
              </v-list-tile-sub-title>
            </v-list-tile-content>
            
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            
          </v-list-tile>
        </template>
      </v-list>
    </v-navigation-drawer>
    
    <v-toolbar fixed app >
      <v-toolbar-title>
            <router-link to="/" class="sadrCryptoText">SadrCrypto<span class="littleText">.com</span></router-link>
      </v-toolbar-title>
      <v-toolbar-items >
            <router-link to="PostTrade" class="menu"> ثبت آگهی رایگان</router-link>
            <router-link to="Forums" class="menu">انجمن ها</router-link>
            <router-link to="Help" class="menu">کمک</router-link>
      </v-toolbar-items>   
      <v-toolbar-items v-if="user" > 
        <router-link  to="EditYourProfile" class="menu">ویرایش پروفایل</router-link>
        <router-link  to="Wallet" class="menu">کیف پول</router-link>
        <router-link  to="DashBoard" class="menu">داشبورد</router-link>
        <v-btn flat @click="logout">خروج</v-btn>
      </v-toolbar-items> 
      <v-toolbar-items v-if="!user"> 
        <router-link to="Signup" class="freeRegister">{{signState}}</router-link>
        <router-link to="Login" class="menu">ورود</router-link>
      </v-toolbar-items>
        
      
     
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
    </v-toolbar>

    
    <v-content>
      <v-container fill-height>
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
      items: [
        { icon: 'lightbulb_outline', text:'بیت کوین', path:'/Bitcoin'},
        { icon: 'touch_app', text:'اتریوم', path:'/Ethereum'},
        { icon: 'archive', text:'ریپل', path:'/Ripple'},
        { icon: 'delete', text:'زد کش', path:'/Zcash'},
        { icon: 'delete', text:'زد کش1', path:'/Zcash'},
        { icon: 'touch_app', text:'یک سوال دارید؟', path:'/HaveQuestion',},
      ],
      signState:'ثبت نام رایگان',
      loginState:'ورود'
    }),
    props: {
      source: String
    },
    methods:{
      
      ...mapActions('auth',{ authLogout: 'logout' }),

      logout(){
        this.authLogout().then(()=> this.$router.push('/SadrCrypto'));
      },

      sidebar(paths){
        this.$router.push(paths);
        
      }
    },
    mounted(){
     console.log(this.user);
    }, computed: {
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
  color:rgb(153, 68, 68);
  text-decoration:none;
  
}
.littleText{
  text-decoration:none;
  color:rgb(153, 68, 68);
  font-size:15px;
  font-family:b titr;
}

</style>
