<template>
  <div>
    <div class="logForm">
      <v-form v-if="!loading" 
        @submit.prevent="login" 
        @keydown.prevent.enter 
        v-model="valid"
      >
      <p class="logText">ثبت نام</p>
      <p class="longText">.با وارد شدن به حساب خود، می توانید معاملات خود را به راحتی انجام دهید و کیف پول خود را مشاهده کنید</p>
      <div class="logBorder">
        <v-text-field
          v-validate="'required|max:30'"
          v-model="user.email"
          :counter="30"
          :error-messages="errors.collect('email')"
          label="E-mail"
          data-vv-name="ایمیل"
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
          label="Password"
          class="textField"
          data-vv-name="password"
          required
        >
        </v-text-field>
      <div>
        <p class="humanConfirm">لطفا تایید کنید که شما یک انسان هستید</p>
      </div>
      <div>
        <p>محل عکس</p>
      </div>
        <v-btn type="submit" class="primary" >ورود</v-btn>
      </div>
      </v-form>
    <div>
      <router-link class="forgotPass" to="ResetPassword">رمز عبور را فراموش کرده اید؟</router-link>
    </div>
    <div>
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
          console.log(this.user);
          this.authenticate({
            strategy:'local',
            ...this.user
          }).then(()=>{
            console.log('logged in');
            this.$router.push('/');
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
<style>
.logText{
  font-size:40px;
  font-family:b nazanin;
  text-align:center;
  color:rgb(39, 37, 37);
  text-shadow:1px 1px 4px rgb(143, 132, 132);
  margin-bottom:0
}
.longText{
  font-size:22px;
  font-family:b nazanin;
  text-align:left;
  color:rgb(97, 92, 92);
  text-shadow:1px 3px 3px rgb(168, 155, 155);
  margin-bottom:40px;
}
.logForm{
  margin-top:15px;
  width:80%;
  margin-right:auto;
  margin-left:auto;
  display:block;
  box-shadow:3px 4px 4px rgb(153, 145, 145);
  margin-bottom:15px;
}
.forgotPass{
  text-decoration:none;
  font-size:16px;
  font-family:b nazanin;
  text-shadow:1px 3px 3px rgb(146, 141, 141);
  text-align:left;
  transition:text-shadow 0.1s;
}
.forgotPass:hover{
  text-decoration:underline;
  text-shadow:1px 4px 4px rgb(143, 138, 138);
}
.signIn{
  text-decoration:none;
  font-size:16px;
  font-family:b nazanin;
  text-shadow:1px 3px 3px rgb(146, 141, 141);
  transition:text-shadow 0.1s;
}
.signIn:hover{
  text-decoration:underline;
  text-shadow:1px 4px 4px rgb(143, 138, 138);
}
.newTo{
  text-decoration:none;
  font-size:16px;
  font-family:b nazanin;
  text-shadow:1px 3px 3px rgb(146, 141, 141);
   color:rgb(97, 92, 92);
}
.textField{
  padding-right:10px;
}
.humanConfirm{
  font-size:18px;
  font-family:b nazanin;
  text-shadow:1px 3px 3px rgb(168, 155, 155);
  text-align:left;
  color:rgb(97, 92, 92);
}
</style>
