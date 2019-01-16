<template>
  <v-layout row wrap align-justify justify-center>
    <v-flex d-flex xs12 sm7 md6 lg6>
<<<<<<< HEAD
      <v-card style="max-width:450px" class="round">
=======
      <v-card style="max-width:450px ; background-color:rgb(30, 38, 52)" class="round">
>>>>>>> 611a1594ad7d327b5e9ca8abf33eb66490e1357d
        <v-card-text>
          <v-form ref="form" v-model="valid"  
            v-if="!loading"
            @submit.prevent="signUp"
            @keydown.prevent.enter
            style="max-width:450px" 
          >
            
            <p class="fontIran text-xs-center textCard">یک حساب جدید ثبت کنید</p>
            <p class="fontsIran text-xs-center textCard1">ثبت نام برای یک حساب کاربری برای شروع خرید و یا فروش بیت کوین</p>
            
            <v-text-field 
              v-model="user.username"
              :counter="30"
              :rules="notEmptyRules"
              label="نام کاربر"
              color="cyan accent-2"
              class="fontIrans1 textField pt-0"
              data-vv-name="username"
              clearable
            ></v-text-field>

            <v-text-field
              v-validate="'required|email'"
              v-model="user.email"
              label="ایمیل"
              color="cyan accent-2"
              class="fontIrans1 emailField pt-0"
              data-vv-name="email"
              required
              clearable
            ></v-text-field>

            <v-text-field
              v-validate="'required|max:20'"
              v-model="user.password"
              :counter="20"
              :rules="notEmptyRules"
              color="cyan accent-2"
              class="fontIrans1 textField pt-0"
              :type="'password'"
              label="رمزعبور"
              data-vv-name="password"
              required
              clearable
            ></v-text-field>

            <v-text-field
              v-model="showPassword"
              :counter="20"
              color="cyan accent-2"
              class="fontIrans1 textField pt-0"
              :rules="confirmPasswordRules"
              :type="'password'"
              label="تکرار رمز عبور "
              data-vv-name="passwordAgain"
              required
              clearable
            ></v-text-field>

            <vue-recaptcha 
                class="pt-2"
                theme = "dark"
                @verify = "onVerify"
                @expired = "onExpired"
                :sitekey = "sitekey">
            </vue-recaptcha>

            <v-btn type="submit" class="fontIrans1 primary" :disabled="!valid" >ارسال</v-btn>
            <v-btn @click="clear" class="fontIrans1 primary">پاک کردن</v-btn>

          </v-form>
          <v-progress-circular v-if="loading"  :size="70" :width="7" indeterminate color="primary"></v-progress-circular>
          <p class="fontIrans1 ">در حال حاضر یک حساب کاربری دارید؟<router-link to="/Login" class="textCard">ورود</router-link></p>
          <p class="fontIrans1 ">رمز عبور را فراموش کرده اید؟<router-link to="/ResetPassword" class="textCard">.رمز عبور خودتان را باز نشانی کنید</router-link></p>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
  import Vue from 'vue'
  import Footer from './../components/Footer.vue'
  import { mapState, mapActions } from 'vuex';
  import VueRecaptcha from 'vue-recaptcha';


  export default {
    
    computed:{
      ...mapState('users', { loading: 'isCreatePending'})
    },
    components:{
      Footer,
      VueRecaptcha
    },
    data: (vm) => ({
      valid: false,
      notEmptyRules:[
        v => !!v || 'می بایستی فیلد را پر کنید',
      ],
      confirmPasswordRules:[
        v => v == vm.user.password || 'می بایستی با پسورد یکی باشد' ,
      ],
      validate:false,
      sitekey: '6LeaLnYUAAAAAOsDilRLdvAo2o9JNBrjxhLpUGGw',
      user:{
        username: '',
        email: '',
        password: ''
      },
      showPassword:'',
      showConfirmPassword:false,
      passwordAgain:'',
      passwordAgain:'',
      confirmPassword:'',
      
    }),
    methods: {
      onVerify: function (response) {
      console.log('Verify: ' + response)
      },
      onExpired: function () {
      console.log('Expired')
      },
      resetRecaptcha () {
      this.$refs.recaptcha.reset() // Direct call reset method
      },

      signUp () {
      if (this.valid){
        const { User } = this.$FeathersVuex;
        const user = new User(this.user);
        
        user.save().then(user => {
              console.log(user);
              this.$router.push('/login');
          });
      }
      },
      clear () {
        this.$refs.form.reset()
      }
    }
  }
</script>
<style scoped>
.round{
  border-radius: 10px;
  background-color:rgb(82, 95, 127);
}
.textCard{
    color:#18FFFF;
}

.textCard1{
    color:#BDBDBD;
}


</style>
