<template>
  <v-container fluid grid-list-md>
    <v-layout v-if="!loading"  row wrap align-justify justify-center>
    <v-flex  xs12 sm8 md8 lg6>
      <v-card>
      <v-form 
        @submit.prevent="login" 
        @keydown.prevent.enter 
        v-model="valid"
      >
      <v-card-text class="headline">
        <p class="text-xs-center">ورود</p>
      </v-card-text>
      <v-card-text class="subheading">
        <p>با وارد شدن به حساب خود، می توانید معاملات خود را به راحتی انجام دهید و کیف پول خود را مشاهده کنید</p>
      </v-card-text>
      <v-card-text>
        <v-text-field
          :roles = "notEmptyRoles"
          v-model="user.email"
          :counter="30"
          label="ایمیل"
          data-vv-name="email"
          class="emailField"
          required
        >
        </v-text-field>
      </v-card-text>
      <v-card-text>
        <v-text-field
          :roles = "notEmptyRoles"
          v-model="user.password"
          counter="20"
          :error-messages="errors.collect('password')"
          :type="'password'"
          label="رمز عبور"
          class="textField"
          data-vv-name="password"
          required
        >
        </v-text-field>
      </v-card-text>
      
      <vue-recaptcha
          theme = "dark"
          @verify = "onVerify"
          @expired = "onExpired"
          :sitekey = "sitekey">
      </vue-recaptcha>
      <v-card-text :class="{red:errorLogin}" v-if="errorLogin" >  {{errorMessage}} </v-card-text>
      
      <v-card-text>
        <v-btn type="submit" class="primary"   >ورود</v-btn>
      </v-card-text>
      </v-form>
      <v-card-text>
        <router-link class="forgotPass" to="ResetPassword">رمز عبور را فراموش کرده اید؟</router-link>
      </v-card-text>
      <v-card-text>
        <p class="newTo">new to sadrCrypto?<router-link to="/SignUp" class="signIn">ثبت نام کنید</router-link></p>
      </v-card-text>
       
      </v-card>
    </v-flex>
    <Footer></Footer> 
  </v-layout>
  <v-progress-circular v-if="loading"  :size="70" :width="7" indeterminate color="primary"></v-progress-circular>
  </v-container>
</template>
<script>
 import Vue from 'vue'
 import Footer from './../components/Footer.vue'
 import { mapState, mapActions } from 'vuex';
 import VueRecaptcha from 'vue-recaptcha'; 

 export default {
    
    components:{
        Footer,
        VueRecaptcha
    },
    data: () => ({
      errorLogin: false,
      errorMessage:'',
      valid: false,
      captchaValid: false,
      notEmptyRoles:[(value) => !!value || "می بایستی این فیلد را پر کنید"],
      sitekey: '6LeaLnYUAAAAAOsDilRLdvAo2o9JNBrjxhLpUGGw',
      user: {
        email: '',
        password: '',
      }
    }),
    mounted () {
      
    },
    computed: {
      ...mapState('auth', {loading: 'isAuthenticatePending'}),
    },
    methods: {
      ...mapActions('auth',['authenticate']),

      onVerify: function (response) {
        console.log('Verify: ' + response);
        this.captchaValid = true;
      },

      onExpired: function () {
      console.log('Expired')
      },

      resetRecaptcha () {
      this.$refs.recaptcha.reset() // Direct call reset method
      },

      async login () {
        this.errorLogin=false;

        if(this.valid && this.captchaValid){
          const { User } = this.$FeathersVuex;
          const user = new User({
              ...this.user
          });
          await this.authenticate({
            strategy:'local',
            ...this.user
          }).then(async ()=>{
            console.log('logged in');
            await this.$router.push('/SadrCrypto');
          }).catch(async e => {
            console.error('Authentication Error', e.message);
            this.errorMessage = e.message;
            this.errorLogin=true;

            console.log(this.errorMessage);
          })
        }
      },
      clear () {
        this.email = ''
        this.password = ''
        this.valid = false
      }
    }
  }

</script>
<style scoped>
.logText{
  font-size:30px;
  font-family:b nazanin;
  text-align:center;
  color:rgb(240, 238, 238);
  margin-bottom:0;
  
}
.longText{
  font-size:17px;
  font-family:b nazanin;
  padding:0 20px 0 20px;
  color:rgb(250, 241, 241);
  margin-bottom:40px;
  
}
.logForm{
  margin-top:13px;
  width:60%;
  margin-right:auto;
  margin-left:auto;
  display:block;
  margin-bottom:15px;
}
.forgotPass{
  text-decoration:none;
  font-size:16px;
  font-family:b nazanin;
  color:rgb(250, 241, 241);
  
  
}
.forgotPass:hover{
  text-decoration:none;
}
.signIn{
  text-decoration:none;
  font-size:16px;
  font-family:b nazanin;
  color:rgb(250, 241, 241);
  
}
.signIn:hover{
  text-decoration:none;
}
.newTo{
  text-decoration:none;
  font-size:16px;
  font-family:b nazanin;
   color:rgb(250, 246, 246);
}
.textField{
  padding-right:10px;
}
.humanConfirm{
  font-size:15px;
  font-family:b nazanin;
  color:rgb(250, 246, 246);
}
</style>
