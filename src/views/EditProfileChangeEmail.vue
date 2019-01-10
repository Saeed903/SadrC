<template>
  <v-layout align-justify justify-center>
    <v-flex dflex xs12 sm8 md8 lg6>
      <v-card-text class="fontIrans">
        <p class="fontIran ">تغییر آدرس ایمیل</p>
        <span>پس از تغییر آدرس ایمیل شما باید دوباره آن را تأیید کنید. اگر پس از تغییر فورا ایمیل تأیید را دریافت نکنید، موارد زیر را امتحان کنید:</span>
        <v-card-text>
        <ul>
          <li>کمی بیشتر صبر کنید.</li>
          <li>پوشه اسپم خود را بررسی کنید.</li>
          <li>از آدرس ایمیل دیگری استفاده کنید.</li>
        </ul>
        </v-card-text>
        <p>اگر شماایمیل خودتان را ظرف 24 ساعت تأیید نکنید، ما یک ایمیل تأیید دیگر خواهیم فرستاد. اگر هیچ تأییدیه ظرف مدت 72 ساعت ساخته نشود، آدرس ایمیل تأیید نشده از حساب شما حذف میشود.</p>
        <p>بعد از این می توانید آدرس ایمیل دیگری را تایید کنید.</p>
        <p>زیرا بازیابی حساب به آدرس ایمیل تأیید شده شما مرتبط است، شما باید این اقدام را با اعتبار خود تأیید کنید.</p>
      </v-card-text>

      <v-card color="red lighten-2" dark>
        <v-card-text class="fontIrans">
          <p>لطفا خطاهای برجسته را اصلاح کنید.</p>
        </v-card-text>
      </v-card>
    
      <p class="fontIrans">لطفا تغییر آدرس ایمیل با رمز عبور خود را تایید کنید.</p>
      <v-form ref="form" v-model="valid"  
            v-if="!loading"
            @submit.prevent="changeEmail"
            @keydown.prevent.enter>
      <v-text-field
        v-validate="'required|max:30'"
        v-model="name"
        :counter="30"
        :rules="notEmptyRules"
        label="آدرس ایمیل جدید"
        data-vv-name="name"
        class="table textField"
        required
        clearable
      >
      </v-text-field>
        
        <v-text-field
        v-validate="'required|max:20'"
        v-model="password"
        counter="20"
        :rules="notEmptyRules"
        :type="showPassword ? 'text' : 'password'"
        label="رمز عبور شما"
        class="table textField"
        data-vv-name="password"
        required
        clearable
        >
      </v-text-field>

      <div class="fontIrans">
        <p>لطفا تأیید کنید که شما انسان هستید.</p>
        <p>من یک ربات نیستم</p>
        <v-btn @click="submit" class="primary">تغییر آدرس ایمیل</v-btn>
        <v-btn @click="clear" class="primary">پاک کردن</v-btn>
        
      </div>
      </v-form>
    </v-flex>
  </v-layout>
</template>
<script>
 export default {

    data: () => ({
       notEmptyRules:[
        v => !!v || 'می بایستی فیلد را پر کنید',
      ],
      name: '',
      email: '',
      password:'',
      dictionary: {
        attributes: {
          email: 'E-mail Address'
          // custom attributes
        },
        custom: {
          name: {
            required: () => 'userName or email field is required.',
            max: 'The userName or email field may not be greater than 30 characters'
            // custom messages
          },
        
        }
      },
    }),
    methods: {
      changeEmail () {
        this.$validator.validateAll()
      },
      clear () {
       this.$refs.form.reset()
      },
    }
  }

</script>
<style scoped>

.router{
    font-family:'iranian sans';
    color:rgb(0, 153, 255);
    text-decoration:none;
}
.router:hover{
    color:rgb(0, 140, 255);
}

</style>



