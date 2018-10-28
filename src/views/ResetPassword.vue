<template>
  <div>
    <div class="topDiv">
      <p class="passwordReset">باز نشانی رمز عبور</p>
      <form>
        <v-text-field
          v-validate="'required|email'"
          v-model="email"
          :error-messages="errors.collect('email')"
          label="E-mail"
          class="textfield"
          data-vv-name="email"
          required>
        </v-text-field>
        <v-btn @click="submit" class="primary">باز نشانی</v-btn>
        <v-btn @click="clear" class="primary">پاک کردن</v-btn>
      </form>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
  import Vue from 'vue'
  import VeeValidate from 'vee-validate'
  import Footer from './../components/Footer.vue'
  
  Vue.use(VeeValidate)

  export default {
    $_veeValidate: {
      validator: 'new'
    },
     components:{
    Footer
  },

    data: () => ({
      email: '',
      dictionary: {
        attributes: {
          email: 'E-mail Address'
          // custom attributes
        },
        custom: {
          name: {
            required: () => 'Name can not be empty',
            max: 'The name field may not be greater than 10 characters'
            // custom messages
          },
        }
      }
    }),

    mounted () {
      this.$validator.localize('en', this.dictionary)
    },

    methods: {
      submit () {
        this.$validator.validateAll()
      },
      clear () {
        this.email = ''
        this.$validator.reset()
      }
    }
  }
</script>
<style>
.passwordReset{
  font-size:25px;
  font-family:b nazanin;
  text-align:left;
  text-shadow:1px 3px 3px rgb(177, 162, 162);
  color:rgb(85, 78, 78);
}
.textfield{
  width:50%;
}
.topDiv{
  width:80%;
  margin-right:auto;
  margin-left:auto;
  display:block;
  box-shadow:3px 4px 4px rgb(153, 145, 145);
  margin-bottom:200px;
  margin-top:80px;
}

</style>
