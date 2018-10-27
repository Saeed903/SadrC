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
              <a href="#!" class="body-2 black--text">EDIT</a>
            </v-flex>
          </v-layout>
          <v-list-group
            v-else-if="item.children"
            :prepend-icon="item.model ? item.arrowIcon : item['arrowIcon-alt']"
            append-icon=""
            v-model="item.model"
            :key="item.text" >

            <v-list-tile slot="activator">
              <v-list-tile-content  style="text-align:right">
                <v-list-tile-sub-title>
                  <span class="navThem">{{ item.text }}</span>
                </v-list-tile-sub-title>
              </v-list-tile-content>

              <v-list-tile-action>
              <v-icon v-if="item.icon">{{ item.icon }}</v-icon>
              <p v-if="item.class" :class="item.class"></p>
            </v-list-tile-action>

            </v-list-tile>
            <v-list-tile
              v-for="(child, i) in item.children"
              :key="i"
              @click="sidebar(child.path)"
            >
              
              <v-list-tile-content   style="text-align:right">
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
    
    <v-toolbar fixed app>
      <v-spacer></v-spacer>
      <v-toolbar-title style="width: 20%">
            <router-link to="/" class="sadrCryptoText">SadrCrypto<span class="littleText">.com</span></router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items style="width:50%; padding: 0 0 0 25px">
          
            <router-link to="PostTrade" class="menu">post-trade</router-link>
            <router-link to="Forums" class="menu">forums</router-link>
            <router-link to="Help" class="menu">help</router-link>
      </v-toolbar-items>   
      <v-toolbar-items v-if="user" > 
        <router-link  to="EditYourProfile" class="menu">edit-profile</router-link>
        <router-link  to="Wallet" class="menu">wallet</router-link>
        <router-link  to="DashBoard" class="menu">DashBoard</router-link>
      </v-toolbar-items> 
      <v-toolbar-items v-if="!user"> 
        <router-link to="Signup" class="freeRegister">{{signState}}</router-link>
        <router-link to="Login" class="menu">log in</router-link>
      </v-toolbar-items>
        
      
     
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
    </v-toolbar>

    
    <v-content>
      <v-container fill-height>
        <v-layout justify-center align-center>
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
  
  import { mapState } from 'vuex';

  export default {
  data: () => ({
      drawer: true,
      items: [
        { icon: 'lightbulb_outline', text:'Bitcoin', path:'/Bitcoin'},
        { icon: 'touch_app', text:'Ethereum', path:'/Ethereum'},
        { icon: 'archive', text:'Ripple', path:'/Ripple'},
        { icon: 'delete', text:'Zcash', path:'/Zcash'},
        { icon: 'delete', text:'Zcash1', path:'/Zcash'},
        { icon: 'touch_app', text:'have a question?', path:'/HaveQuestion',},
      ],
      signState:'SignUp Free',
      loginState:'log in'
    }),
    props: {
      source: String
    },
    methods:{
      
      
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

<style>
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
