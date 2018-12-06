<template>
<v-container fluid grid-list-xl pt-0>
    <v-layout  justify-space-around v-if="!loading">
<<<<<<< HEAD
        <v-flex d-flex xs12 sm7 md6 lg7 xl7>
=======
        <v-flex d-flex xs12 sm8 md6 lg4>
>>>>>>> f8de10b3e7cc5e4f4d722a61ba8c29b23ffa4de8
          <v-card-text>
            <v-form 
              style="max-width:330px ;" 
              @submit.prevent="login" 
              @keydown.prevent.enter 
              v-model="valid"
            >
              <p class="titled text-xs-center">ورود</p>
              <p class="text ">با وارد شدن به حساب خود، می توانید معاملات خود را به راحتی انجام دهید و کیف پول خود را مشاهده کنید.</p>
            
              <v-text-field
                :roles = "notEmptyRoles"
                v-model="user.email"
                :counter="30"
                label="ایمیل"
                data-vv-name="email"
                color="cyan accent-2"
                class="textBottom emailField"
                required
                clearable
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
                class="textBottom textField"
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
              <v-btn type="submit" class="textBottom primary">ورود</v-btn>  
          </v-form>

          <v-flex>
            <router-link class="textCard" to="ResetPassword">رمز عبور را فراموش کرده اید؟</router-link><br>
            <span class="textBottom">یک حساب جدید باز کنید؟<router-link to="/SignUp" class="textCard">ثبت نام کنید</router-link></span>
          </v-flex>

            <v-progress-circular v-if="loading"  :size="70" :width="7" indeterminate color="primary"></v-progress-circular>
          
          </v-card-text>
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
.titled{
  font-family: Iranian Sans;
  font-size: 18px;
}
.text{
  font-family: Iranian Sans;
  font-size: 13px;
}
.textBottom{
  font-family: Iranian Sans;
  font-size:12px;
}

.textCard{
    font-family:'iranian sans';
    color:#00E5FF;
    text-decoration:none;
    font-size:12px;
}
.textCard:hover{
    color:#18FFFF;
}
</style>
