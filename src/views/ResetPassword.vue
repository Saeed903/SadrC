<template>
  <v-container fluid grid-list-xl pt-0>
    <v-layout  justify-space-around v-if="!loading">
        <v-flex d-flex xs12 sm8 md6 lg5>
    <v-card-text>
      <p class="titled">باز نشانی رمز عبور</p>
      
        <form>
          <v-text-field
            style="max-width:550px"
            v-validate="'required|email'"
            v-model="email"
            :error-messages="errors.collect('email')"
            label="ایمیل"
            class="fontIran textfield"
            data-vv-name="email"
            required>
          </v-text-field>
          <v-btn  @click="submit" class="primary fontIran">باز نشانی</v-btn>
          <v-btn @click="clear" class="primary fontIran">پاک کردن</v-btn>
        </form>
    </v-card-text>
        </v-flex>
  </v-layout>
  </v-container>
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
          email: 'آدرس ایمیل'
          // custom attributes
        },
        custom: {
          name: {
            required: () => 'نام نمی تواند خالی باشد',
            max: 'فیلد نام ممکن است بیش از 10 کاراکتر باشد'
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
<style scoped>

</style>
