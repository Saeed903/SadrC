<template>
<v-container fluid grid-list-xl pt-0>
    <v-layout  justify-space-around v-if="!loading">
        <v-flex d-flex xs12 sm7 md6 lg7 xl7>
          <v-card style="max-width:330px ;" class="round">
            <v-card-text>
              <v-form 
                style="max-width:330px ;" 
                @submit.prevent="login" 
                @keydown.prevent.enter 
                v-model="valid"
              >
                
                <p class="fontIran text-xs-center">ورود</p>
                <p class="fontsIran">با وارد شدن به حساب خود، می توانید معاملات خود را به راحتی انجام دهید و کیف پول خود را مشاهده کنید.</p>
                <v-text-field
                  :roles = "notEmptyRoles"
                  v-model="user.email"
                  :counter="30"
                  label="ایمیل"
                  data-vv-name="email"
                  color="cyan accent-2"
                  class="fontsIran emailField"
                  required
                  
                >
                </v-text-field>

                <v-text-field
                  :roles = "notEmptyRoles"
                  v-model="user.password"
                  counter="20"
                  :error-messages="errors.collect('password')"
                  :type="'password'"
                  label="رمز عبور"
                  color="cyan accent-2"
                  class="fontsIran textField"
                  data-vv-name="password"
                  required
                  
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
                <v-btn type="submit" class="fontsIran" color="primary">ورود</v-btn>  
            </v-form>

            <v-flex>
              <router-link class="textCard caption" to="ResetPassword">رمز عبور را فراموش کرده اید؟</router-link><br>
              <span class="fontIrans caption">یک حساب جدید باز کنید؟<router-link to="/SignUp" class="textCard">ثبت نام کنید</router-link></span>
            </v-flex>

              <v-progress-circular v-if="loading"  :size="70" :width="7" indeterminate color="primary"></v-progress-circular>
            
            </v-card-text>
          </v-card>
        </v-flex>
    </v-layout>
</v-container>
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

        if(this.valid){// && this.captchaValid){
          const { User } = this.$FeathersVuex;
          const user = new User({
              ...this.user
          });
          await this.authenticate({
            strategy:'local',
            ...this.user
          }).then(async ()=>{
            console.log('logged in');
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
</style>

