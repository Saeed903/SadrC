<template>
  <v-layout row wrap align-justify justify-center>
    <v-flex d-flex sm8 md6 lg5 xl4>
      <v-card class="logCard round mt-5" style="background-color:#37474F;">
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
              :rules="EmptyRules"
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
              <v-dialog v-model="dialog" max-width="650">
                <v-btn
                slot="activator"
                color="cyan accent-2"
                :loading="loading3"
                :disabled="loading3"
                class="fontIrans1 elevation-20 mr-3"
                @click="loader = 'loading3'"
                outline
                >
                ارسال
                </v-btn>
                <v-card>
                  <p class="topicText text-xs-center">شرایط استفاده از خدمات صدرکریپتو</p>
                  <v-card-text class="centerText">صدرکریپتو یک سرویس پلت فرم همکارانه است که کاربران آن را قادر می سازد تا ارز را به بیتکوین و از آن بفروشند. کاربران می توانند از این پلت فرم برای ایجاد تبلیغات در جایی که آنها پیشنهاد خرید یا فروش بیت کوین را دارند استفاده کنند. کاربران دیگر به این آگهی ها پاسخ می دهند و دو کاربر می توانند با پرداختن به بتکون برای پرداخت پول نقد و یا کسب و کار آنلاین آنلاین موافقت کنند. برای اینکه کاربر برای فروش بیت کوین ها آنها ("فروشنده") باید بیت کوین ها را در کیف پول وب صدرکریپتومتعلق به حساب خود ذخیره کنند، از جایی که بیت کوین ها به کاربر خرید بیت کوین ("خریدار") منتقل می شود، پس از تایید فروشنده پرداخت خریداران تمام معاملات این سایت بین کاربران سرویس انجام می شود. صدرکریپتو ممکن است برای حل اختلاف بین خریداران و فروشندگان کمک کند. به عنوان یک ارائه دهنده سپرده، صدرکریپتو خود بخشی از تجارت یا معاملات تجاری بیت کوین نیست که توسط کاربران آن انجام می شود.</v-card-text>
                  <v-card-text class="centerText">این شرایط خدمات ("توافقنامه") یک توافقنامه حقوقی مربوط به ارائه خدمات ("خدمات" یا "خدمات") ارائه شده توسط صدرکریپتو ("صدرکریپتو" یا "صدرکریپتو" یا "ما" یا "ما" یا "ما") به شما به عنوان یک فرد ("شما" یا "خود"). استفاده شما از خدمات تحت این موافقتنامه، همراه با سیاست حفظ حریم خصوصی صدرکریپتو خواهد بود. لطفا قبل از پذیرش آنها، به دقت از این توافقنامه و خط مشی رازداری بخوانید.</v-card-text>
                  <v-card-text class="centerText">پذیرش و تغییر شرایط</v-card-text>
                  <v-card-text class="centerText">قبل از اینکه بتوانید یک حساب کاربری ثبت کنید، باید شرایط خدمات و خط مشی رازداری ما را بپذیرید. با پذیرش این توافقنامه یا با استفاده از سرویس، شما به صراحت تصدیق می کنید و موافقت می کنید که شما با موافقت حقوقی با صدرکریپتو وارد می شوید و این موافقت نامه را پیروی کرده و موافقت کرده اید و به طور قانونی این موافقتنامه را به عهده دارید. برای تغییر این شرایط خدماتی که به طور قابل ملاحظه ای بر حقوق و تعهداتی که ما در تلاش برای اطلاع رسانی قبل از تغییرات ایجاد می کنیم، تأثیر می گذاریم. شما می توانید این قرارداد را در هر زمان با پایان دادن به معاملات و وظایف دیگر، لغو هر مانده ی باقیمانده و حذف حساب خود، پایان دهید.</v-card-text>
                  <v-card-text>ثبت نام و حساب کاربری</v-card-text>
                  <p>برای استفاده از سرویس های ما، یا برای دسترسی به این سایت یا برخی از منابع مورد نیاز، ممکن است خواسته شود اطلاعات ثبت نام را برای ثبت نام یک حساب کاربر ("حساب کاربری" یا "حساب کاربری") ثبت کنید. این شرط استفاده از این سایت و خدمات ما است که تمام اطلاعاتی که شما ارائه می دهید صحیح، جاری و کامل هستند. اگر ما معتقدیم جزئیات دقیق نیستند، فعلی یا تکمیل شده اند، ما حق داریم شما را به سایت یا هر یک از منابع آن دسترسی ندهیم، و حساب خود را خاتمه یا تعلیق نماییم. برای واجد شرایط بودن برای استفاده از خدمات ما باید حداقل 16 سال سن داشته باشید. شما فقط می توانید از حساب خود در صدرکریپتو استفاده کنید و فقط ممکن است یک حساب کاربری داشته باشید. شما فقط می توانید به نفع خود عمل کنید. شما ممکن است از حساب خود برای استفاده از واسطه یا کارگزاری برای هر شخص یا نهاد استفاده نکنید. شما مجاز به فروش، قرض دادن، به اشتراک گذاشتن یا غیرفعال کردن حساب کاربری یا جزئیات لازم برای دسترسی به حساب کاربری خود به افراد یا اشخاص غیر از خودتان نیستید. شما مسئول حفظ امنیت کافی و کنترل هر نام کاربری، گذرواژه، کدهای احراز هویت دو عامل یا هر کدی یا اعتبار دیگر که برای دسترسی به سرویس ها استفاده می کنید، کنترل می شود. حساب شما نباید حاوی اطلاعات گمراه کننده یا جعلی باشد، از جمله، اما نه تنها داشتن شماره تلفن غیر شخصی. ایجاد اطلاعات اعتباری جعلی برای حساب کاربری شما، کشف کشور مبدا و یا ارائه اسناد شناسایی جعلی ممنوع است.</p>
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
          <p class="fontIrans1 pr-1 pt-3">در حال حاضر یک حساب کاربری دارید؟<router-link to="/Login" class="textCard">ورود</router-link></p>
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
      loader: null,
      loading3: false,
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
        v => v.length <= 30 || 'می بایستی رمز عبور حداکثر تا 30 کاراکتر باشد'
      ],
      EmptyRules:[
        v => !!v || 'می بایستی فیلد را پر کنید',
        v => v.length <= 20 || 'می بایستی رمز عبور حداکثر تا 20 کاراکتر باشد'
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
      watch: {
      loader () {
        const l = this.loader
        this[l] = !this[l]

        setTimeout(() => (this[l] = false), 3000)

        this.loader = null
      }
    },
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
          this.errorMessage="می بایستی قسمت ربات نبودن را تایید کنید";
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
.logCard{
  border:1px solid #18FFFF;
  box-shadow:0px 0px 25px 1px #18FFFF;
}
.textCard1{
    color:#BDBDBD;
}
.topicText{
  font-family:iranian sans;
  font-size:20px;
  text-align:center;
}
.centerText{
  font-family:iranian sans;
  font-size:13px;
  text-indent:10px;
  text-align:justify;
}
</style>
