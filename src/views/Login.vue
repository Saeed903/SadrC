<template>
    <v-layout row wrap align-justify justify-center>
        <v-flex d-flex xs12 sm8 md6 lg5 xl4>
          <v-card class="logCard round mt-5" style="background-color:#37474F;">
            <v-card-text>
              <v-form 
                v-if="!loading"
                @submit.prevent="login" 
                @keydown.prevent.enter 
                v-model="valid"
              >
                
                <p class="fontIran text-xs-center textCard">ورود به حساب کاربری</p>
                <v-text-field
                  :roles = "notEmptyRoles"
                  v-model="user.email"
                  label="ایمیل"
                  :rules="emailRules"
                  data-vv-name="email"
                  prepend-inner-icon="mail"
                  color="cyan accent-2"
                  class="fontsIran emailField pt-4"
                  required
                  clearable
                >
                </v-text-field>

                <v-text-field
                  v-model="user.password"
                  counter="10"
                  :error-messages="errors.collect('password')"
                  :type="'password'"
                  :rules="notEmptyRules"
                  prepend-inner-icon="lock"
                  label="رمز عبور"
                  color="cyan accent-2"
                  class="fontsIran textField pt-2 pb-2"
                  data-vv-name="password"
                  required
                  clearable
                >
                </v-text-field>

                <vue-recaptcha
                    class="pt-2"
                    theme = "dark"
                    @verify = "onVerify"
                    @expired = "onExpired"
                    :sitekey = "sitekey">
                </vue-recaptcha>
                <v-card-text :class="{red:errorLogin}" v-if="errorLogin" >  {{errorMessage}} </v-card-text>
                <v-btn
                type="submit"
                :loading="loading3"
                :disabled="loading3"
                color="cyan accent-2"
                class="fontIrans1 elevation-20 mt-3"
                @click="loader = 'loading3'"
                outline
                > 
                ورود
                </v-btn>
            </v-form>

            <v-flex>
              <router-link class="textCard caption mr-0 mt-2" to="ResetPassword">رمز عبور را فراموش کرده اید؟</router-link><br>
              <span class="fontIrans caption">یک حساب جدید باز کنید؟<router-link to="/SignUp" class="textCard">ثبت نام کنید</router-link></span>
            </v-flex>

              <v-progress-circular v-if="loading"  :size="70" :width="7" indeterminate color="primary"></v-progress-circular>
            
            </v-card-text>
          </v-card>
        </v-flex>
    </v-layout>
</template>
<script>
 import Vue from 'vue'
 
 import { mapState, mapActions } from 'vuex';
 import VueRecaptcha from 'vue-recaptcha'; 

 export default {
    
    components:{
        
        VueRecaptcha
    },
    
    data: () => ({ 
      loader: null,
      loading3: false,
      errorLogin: false,
      errorMessage:'',
      valid: false,
      captchaValid: false,
      notEmptyRoles:[(value) => !!value || "می بایستی این فیلد را پر کنید"],
      sitekey: '6LeaLnYUAAAAAOsDilRLdvAo2o9JNBrjxhLpUGGw',
      user: {
        email: '',
        password: '',
      },
      emailRules:[
         v => !!v || 'می بایستی فیلد را پر کنید',
        v => /.+@.+/.test(v) || "می بایستی ایمیل معتبر باشد"
      ],
      notEmptyRules:[
        v => !!v || 'می بایستی فیلد را پر کنید',
        v => v.length <= 10 || 'می بایستی رمز عبور حداکثر تا 10 کاراکتر باشد'
      ],
    }),
    mounted () {
      
    },
    computed: {
      ...mapState('auth', {loading: 'isAuthenticatePending'}),
    },
    watch: {
      loader () {
        const l = this.loader
        this[l] = !this[l]

        setTimeout(() => (this[l] = false), 3000)

        this.loader = null
      }
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

        if(this.valid){// && this.captchaValid){
          const { User } = this.$FeathersVuex;
          const user = new User({
              ...this.user
          });
          await this.authenticate({
            strategy:'local',
            ...this.user
          }).then(async ()=>{
            // if(this.$router.go(-1)==='Signup'){
            //   await this.$router.push('SadrCrypto');
            // }else{
              await this.$router.go(-1);
            
            
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
.round{
  border-radius: 10px;
}
.logCard{
  border:1px solid #18FFFF;
  box-shadow:0px 0px 25px 1px #18FFFF;
}
</style>

