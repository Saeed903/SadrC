<template>
    <div>
        <div>
            <p>تغییر آدرس ایمیل</p>
            <p>:پس از تغییر آدرس ایمیل شما باید دوباره آن را تأیید کنید. اگر پس از تغییر فورا ایمیل تأیید را دریافت نکنید، موارد زیر را امتحان کنید</p>
            <ul>
                <li>.کمی بیشتر صبر کنید</li>
                <li>.پوشه اسپم خود را بررسی کنید</li>
                <li>.از آدرس ایمیل دیگری استفاده کنید</li>
            </ul>
            <p>.اگر شماایمیل خودتان را ظرف 24 ساعت تأیید نکنید، ما یک ایمیل تأیید دیگر خواهیم فرستاد. اگر هیچ تأییدیه ظرف مدت 72 ساعت ساخته نشود، آدرس ایمیل تأیید نشده از حساب شما حذف میشود</p>
            <p>.بعد از این می توانید آدرس ایمیل دیگری را تایید کنید</p>
            <p>.زیرا بازیابی حساب به آدرس ایمیل تأیید شده شما مرتبط است، شما باید این اقدام را با اعتبار خود تأیید کنید</p>
        </div>
        <dir>
            <p>.لطفا خطاهای برجسته را اصلاح کنید</p>
        </dir>
        <div>
            <v-text-field
            v-validate="'required|max:30'"
            v-model="name"
            :counter="30"
            :error-messages="errors.collect('name')"
            label="رمز عبور شما"
            data-vv-name="name"
            class="textField"
            required
            >
            </v-text-field>
            <p>.لطفا تغییر آدرس ایمیل با رمز عبور خود را تایید کنید</p>
            <v-text-field
            v-validate="'required|max:20'"
            v-model="password"
            counter="20"
            :error-messages="errors.collect('password')"
            :type="showPassword ? 'text' : 'password'"
            label="آدرس ایمیل جدید"
            class="textField"
            data-vv-name="password"
            required
            >
            </v-text-field>
            <p>.لطفا تأیید کنید که شما انسان هستید</p>
            <p>من یک ربات نیستم</p>
            <v-btn @click="submit" class="primary">تغییر آدرس ایمیل</v-btn>
            <v-btn @click="clear" class="primary">پاک کردن</v-btn>
        </div>
    </div>
</template>
<script>
 export default {

    data: () => ({
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
      submit () {
        this.$validator.validateAll()
      },
      clear () {
        this.name = ''
        this.email = ''
        this.password = ''
      }
    }
  }

</script>