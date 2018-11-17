<template>
  <v-container fluid grid-list-md>
    <v-layout v-if="!loading"  row wrap align-justify justify-center>
      <v-flex  d-flex xs12 sm8 md8 lg8>
        <v-card>
          <v-card-text>
            <v-form 
              @submit.prevent="login" 
              @keydown.prevent.enter 
              v-model="valid"
            >
              <v-card-text>
                <p class="titled text-xs-center">ورود</p>
                <p class="text text-xs-center">با وارد شدن به حساب خود، می توانید معاملات خود را به راحتی انجام دهید و کیف پول خود را مشاهده کنید</p>
              </v-card-text>
                <v-text-field
                  :roles = "notEmptyRoles"
                  v-model="user.email"
                  :counter="30"
                  label="ایمیل"
                  data-vv-name="email"
                  class="textBottom emailField"
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
                  class="textBottom textField"
                  data-vv-name="password"
                  required
                >
                </v-text-field>

                <vue-recaptcha
                    theme = "dark"
                    @verify = "onVerify"
                    @expired = "onExpired"
                    :sitekey = "sitekey">
                </vue-recaptcha>
                <v-card-text :class="{red:errorLogin}" v-if="errorLogin" >  {{errorMessage}} </v-card-text>

                  <v-btn type="submit" class="textBottom primary">ورود</v-btn>

            </v-form>
                <p><router-link class="textBottom link" to="ResetPassword">رمز عبور را فراموش کرده اید؟</router-link></p>
                <p class="textBottom">صدر کریپتو؟<router-link to="/SignUp" class="link">ثبت نام کنید</router-link></p>
          </v-card-text>
        </v-card>
      </v-flex>
    
    <v-flex d-flex xs12 sm8 md8 lg8>
      <v-card>
      <Footer></Footer>
      </v-card>
    </v-flex>
  <v-progress-circular v-if="loading"  :size="70" :width="7" indeterminate color="primary"></v-progress-circular>
  </v-layout>
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
.titled{
  font-family: Iranian Sans;
  font-size: 18px;
}
.text{
  font-family: Iranian Sans;
  font-size: 15px;
}
.textBottom{
  font-family: Iranian Sans;
}
.link{
    text-decoration: none;
    color:rgb(0,153,255);
}
.link:hover{
    color:rgb(0,140,255);
}
</style>
