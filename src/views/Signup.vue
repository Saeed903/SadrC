<template>
  <v-layout row wrap align-justify justify-center>
    <v-flex d-flex sm8 md6 lg5 xl4>
      <v-card class="round elevation-24 mt-5">
        <v-card-text>
          <v-form ref="form" v-model="valid"  
            v-if="!loading"
            @submit.prevent="signUp"
            @keydown.prevent.enter
            style="max-width:450px" 
          >
            
            <p class="fontIran text-xs-center textCard">یک حساب جدید ثبت کنید</p>
            <v-text-field 
              v-model="user.username"
              :counter="30"
              :rules="notEmptyRules"
              prepend-inner-icon="person"
              label="نام کاربری"
              color="cyan accent-2"
              class="fontIrans1 textField pt-4"
              data-vv-name="username"
              clearable
            ></v-text-field>

            <v-text-field
              v-validate="'required|email'"
              v-model="user.email"
              label="ایمیل"
              :rules="emailRules"
              prepend-inner-icon="mail"
              color="cyan accent-2"
              class="fontIrans1 emailField pt-2"
              data-vv-name="email"
              required
              clearable
            ></v-text-field>

            <v-text-field
              v-validate="'required|max:20'"
              v-model="user.password"
              :counter="20"
              :rules="notEmptyRules"
              prepend-inner-icon="lock"
              color="cyan accent-2"
              class="fontIrans1 textField pt-2"
              :type="'password'"
              label="رمزعبور"
              data-vv-name="password"
              required
              clearable
            ></v-text-field>

            <v-text-field
              v-model="showPassword"
              :counter="20"
              prepend-inner-icon="lock"
              size-icon=""
              :rules="confirmPasswordRules"
              color="cyan accent-2"
              class="fontIrans1 textField pt-2 pb-2"
              :type="'password'"
              label="تکرار رمز عبور "
              data-vv-name="confirmPassword"
              required
              clearable
            ></v-text-field>
            <vue-recaptcha 
                class="pt-1 pb-2"
                theme = "dark"
                @verify = "onVerify"
                @expired = "onExpired"
                :sitekey = "sitekey">
            </vue-recaptcha>

            
            <v-layout>
              <v-dialog v-model="dialog" max-width="290">
                <v-btn slot="activator" color="primary" class="fontIrans1 round elevation-24 ml-3">ارسال</v-btn>
                <v-card>
                  <v-card-title class="headline">Use Google's location service?</v-card-title>
                  <v-card-text>Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.</v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn type="submit" color="green darken-1" flat="flat" @click="dialog = true">مخالفم</v-btn>
                    <v-btn color="green darken-1" flat="flat" :disabled="!valid" @click="accept">موافقم</v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-layout>
          </v-form>
          <v-progress-circular v-if="loading"  :size="70" :width="7" indeterminate color="primary"></v-progress-circular>
          <p class="fontIrans1 pt-3">در حال حاضر یک حساب کاربری دارید؟<router-link to="/Login" class="textCard">ورود</router-link></p>
        </v-card-text>
        <v-card-text :class="{red:errorMessage}" v-if="errorMessage" >{{errorMessage}}</v-card-text>
         <v-progress-circular v-if="loading"  :size="70" :width="7" indeterminate color="primary"></v-progress-circular>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
  import Vue from 'vue'
  import Footer from './../components/Footer.vue'
  import { mapState, mapActions} from 'vuex';
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
      errorMessage:'',
      valid: false,
      Verify:'',
      dialog: false,
      emailRules:[
         v => !!v || 'می بایستی فیلد را پر کنید',
        v => /.+@.+/.test(v) || "می بایستی ایمیل معتبر باشد"
      ],
      notEmptyRules:[
        v => !!v || 'می بایستی فیلد را پر کنید',
      ],
      confirmPasswordRules:[
        v => !!v || 'می بایستی فیلد را پر کنید',
        v => v == vm.user.password || 'می بایستی با پسورد یکی باشد' ,
      ],
      validate:false,
      sitekey: '6LeaLnYUAAAAAOsDilRLdvAo2o9JNBrjxhLpUGGw',
      user:{
        username: '',
        email: '',
        password: '',
      },
      confirmPassword:'',
      showPassword:'',
      showConfirmPassword:false,
      
      
    }),
    methods: {
      onVerify: function (response) {
        this.Verify = response;
      console.log('Verify: ' + response)
      },
      accept(){

        this.dialog = false;
        if(this.Verify){
          console.log("test");
          
          this.signUp();
        }else{
          this.errorMessage="می بایست قسمت تاییدیه ربات نبودن گوگلی را انجام دهید";
        }
        
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
              //this.$router.go(-1);
              this.$router.push('/login');
          }).catch( e => {
            console.error('تکراری بودن', e.message);
            this.errorMessage = 'قبلا نام کاربری یا این ایمیل ثبت نام کرده است';

            console.log(this.errorMessage);
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
.checkboxText{
  font-family:iranian sans;
  font-size:50px;
}

</style>
