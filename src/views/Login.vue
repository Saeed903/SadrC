<template>
  <v-container fluid grid-list-md>
    <v-layout column d-flex>
    <v-flex  xs12 sm6 md6 lg6>
      <v-card>
      <v-form v-if="!loading" 
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
      </v-card-text>
      <v-card-text>
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
      </v-card-text>
      <v-card-text>
      </v-card-text>
      <v-card-text>
        <v-btn type="submit" class="primary"   >ورود</v-btn>
      </v-card-text>
      </v-form>
    <v-card-text>
      <v-card-text>
      <router-link class="forgotPass" to="ResetPassword">رمز عبور را فراموش کرده اید؟</router-link>
      </v-card-text>
      <v-card-text>
      <p class="newTo">new to sadrCrypto?<router-link to="/SignUp" class="signIn">ثبت نام کنید</router-link></p>
      </v-card-text>
      </v-card-text>
      </v-card>
    </v-flex>
    <v-progress-circular v-if="loading"  :size="70" :width="7" indeterminate color="primary"></v-progress-circular>
    <Footer></Footer> 
  </v-layout>
  </v-container>
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
