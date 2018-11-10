<template>
  <v-container  grid-list-md>
  <v-layout column wrap>
    <v-card>
   <v-flex d-flex xs12 sm6 md6 >
      <v-form v-model="valid"  
        v-if="!loading"
        @submit.prevent="signUp"
        @keydown.prevent.enter>
        <p class="registerAccount">یک حساب جدید ثبت کنید</p>
        <p class="start">ثبت نام برای یک حساب کاربری برای شروع خرید و یا فروش بیت کوین</p>
        <v-text-field 
          v-validate="'required|max:30'"
          v-model="user.username"
          :counter="30"
          :error-messages="errors.collect('username')"
          label="نام کاربر"
          class="textFields"
          data-vv-name="username"
        ></v-text-field>
        <v-text-field
          v-validate="'required|email'"
          v-model="user.email"
          :error-messages="errors.collect('email')"
          label="ایمیل"
          class="textFields"
          data-vv-name="email"
          required
        ></v-text-field>
        <v-text-field
          v-validate="'required|max:20'"
          v-model="user.password"
          :counter="20"
          class="textFields"
          :error-messages="errors.collect('password')"
          :type="'password'"
          label="رمزعبور"
          data-vv-name="password"
          required
        ></v-text-field>
        <v-text-field
          v-validate="'required|max:20'"
          v-model="showPassword"
          :counter="20"
          class="textFields"
          :error-messages="errors.collect('passwordAgain')"
          :type="'password'"
          label="تکرار رمز عبور "
          data-vv-name="passwordAgain"
          required
        ></v-text-field>
        <vue-recaptcha
            theme = "dark"
            @verify = "onVerify"
            @expired = "onExpired"
            :sitekey = "sitekey">
        </vue-recaptcha>
       
        <v-btn type="submit" class="primary" :disabled="!valid" >ارسال</v-btn>
        <v-btn @click="clear" class="primary">پاک کردن</v-btn>
      </v-form>
      </v-flex>
      <v-progress-circular v-if="loading"  :size="70" :width="7" indeterminate color="primary"></v-progress-circular>
      
      <p class="haveAccount">در حال حاضر یک حساب کاربری دارید؟<router-link to="/Login" class="logLink">ورود</router-link></p>
      <p class="forgotPassword">رمز عبور را فراموش کرده اید؟<router-link to="/ResetPassword" class="resetLink">.رمز عبور خودتان را باز نشانی کنید</router-link></p>
    
    </v-card>
  </v-layout>
</v-container>
</template>
<script>
  import Vue from 'vue'
  import VeeValidate from 'vee-validate'
  import Footer from './../components/Footer.vue'
  import { mapState, mapActions } from 'vuex';
  import VueRecaptcha from 'vue-recaptcha';

  Vue.use(VeeValidate)

  export default {
    $_veeValidate: {
      validator: 'new'
    },
    computed:{
      ...mapState('users', { loading: 'isCreatePending'})
    },
    components:{
      Footer,
      VueRecaptcha
    },
    data: () => ({
      valid: false,
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

    mounted () {
      this.$validator.localize('en', this.dictionary);
      console.log(this.valid);
    },

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
        //this.$refs.invisibleRecaptcha.execute();
        if (this.$refs.form.validate()){
          const { User } = this.$FeathersVuex;
          const user = new User({
              username: this.user.username,
              email: this.user.email,
              password: this.user.password,
          });
          user.save()
            .then(user => {
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

</style>
