<template>
  <div>
    <div class="logForm">
      <v-form v-if="!loading" 
        @submit.prevent="login" 
        @keydown.prevent.enter 
        v-model="valid"
      >
      <p class="logText">ورود</p>
      <div class="longText">
        <p>با وارد شدن به حساب خود، می توانید معاملات خود را به راحتی انجام دهید و کیف پول خود را مشاهده کنید</p>
      </div>
      <div class="logBorder">
        <v-text-field
          v-validate="'required|max:30'"
          v-model="user.email"
          :counter="30"
          :error-messages="errors.collect('email')"
          label="ایمیل"
          data-vv-name="email"
          class="textField"
          required
        >
        </v-text-field>
        <v-text-field
          v-validate="'required|max:20'"
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
      <div>
        <p class="humanConfirm">لطفا تایید کنید که شما یک انسان هستید</p>
      </div>
      <div >
        <p>محل عکس</p>
      </div >
        <div style="text-align:center;">
        <v-btn type="submit" class="primary"   >ورود</v-btn>
        </div>
      </div>
      </v-form>
    <div>
      <router-link class="forgotPass" to="ResetPassword">رمز عبور را فراموش کرده اید؟</router-link>
    
      <p class="newTo">new to sadrCrypto?<router-link to="/SignUp" class="signIn">ثبت نام کنید</router-link></p>
    </div>
    </div>
    <Footer></Footer> 
  </div>
</template>
<script>
 
 import Footer from './../components/Footer.vue'
 import { mapState, mapActions } from 'vuex';

 export default {
    $_veeValidate: {
      validator: 'new'
    },
    components:{
        Footer
    },
    data: () => ({
      valid: false,
      user: {
        email: '',
        password: '',
      },
      dictionary: {
        attributes: {
          email: 'آدرس ایمیل'
          // custom attributes
        },
        custom: {
          name: {
            required: () => 'نام کاربر یا ایمیل الزامیست',
            max: 'The userName or email field may not be greater than 30 characters'
            // custom messages
          },
        
        }
      },
    }),
    mounted () {
      this.$validator.localize('en', this.dictionary)
    },
    computed: {
      ...mapState('auth', {loading: 'isAuthenticatePending'}),
    },
    methods: {
      ...mapActions('auth',['authenticate']),

      login () {
        
        this.$validator.validateAll();
        if(this.valid){
          const { User } = this.$FeathersVuex;
          const user = new User({
              ...this.user
          });
          this.authenticate({
            strategy:'local',
            ...this.user
          }).then(()=>{
            console.log('logged in');
            this.$router.push('/SadrCrypto');
          }).catch(e => {
            console.error('Authentication Error');
          })
        }
      },
      clear () {
        this.email = ''
        this.password = ''
        this.$validator.reset()
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
  text-shadow:1px 1px 3px rgb(240, 238, 238);
  margin-bottom:0;
  
}
.longText{
  font-size:17px;
  font-family:b nazanin;
  padding:0 20px 0 20px;
  color:rgb(250, 241, 241);
  text-shadow:1px 2px 2px rgb(248, 245, 245);
  margin-bottom:40px;
  
}
.logForm{
  margin-top:13px;
  width:60%;
  margin-right:auto;
  margin-left:auto;
  display:block;
  box-shadow:2px 3px 3px rgb(250, 246, 246);
  margin-bottom:15px;
}
.forgotPass{
  text-decoration:none;
  font-size:16px;
  font-family:b nazanin;
  text-shadow:0px 2px 2px rgb(250, 246, 246);
  color:rgb(250, 241, 241);
  transition:text-shadow 0.1s;
  
  
}
.forgotPass:hover{
  text-decoration:none;
  text-shadow:0px 3px 3px rgb(250, 246, 246);
}
.signIn{
  text-decoration:none;
  font-size:16px;
  font-family:b nazanin;
  text-shadow:0px 2px 2px rgb(250, 246, 246);
  transition:text-shadow 0.1s;
  color:rgb(250, 241, 241);
  
}
.signIn:hover{
  text-decoration:none;
  text-shadow:0px 3px 3px rgb(250, 246, 246);
}
.newTo{
  text-decoration:none;
  font-size:16px;
  font-family:b nazanin;
  text-shadow:0px 2px 2px rgb(250, 246, 246);
   color:rgb(250, 246, 246);
}
.textField{
  padding-right:10px;
}
.humanConfirm{
  font-size:15px;
  font-family:b nazanin;
  text-shadow:0px 2px 2px rgb(250, 246, 246);
 
  color:rgb(250, 246, 246);
}
</style>
