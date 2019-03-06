<template>
  <div> 
  <v-form>
    <v-text-field
      v-validate="'required|max:15'"
      v-model="name"
      :counter="10"
      :error-messages="errors.collect('name')"
      label="name"
      data-vv-name="name"
      color="cyan accent-2"
      required
      clearable
    ></v-text-field>
    <v-text-field
      v-validate="'required|email'"
      v-model="email"
      :error-messages="errors.collect('email')"
      label="email"
      data-vv-name="email"
      color="cyan accent-2"
      required
      clearable
    ></v-text-field>
    <v-text-field
      v-validate="'required|max:10'"
      v-model="password"
      :error-messages="errors.collect('password')"
      :type="showPassword ? 'text' : 'password'"
      label="password"
      color="cyan accent-2"
      data-vv-name="password"
      required
      clearable
    ></v-text-field>
    <v-text-field
      v-validate="'required|max:10'"
      v-model="showPassword"
      :error-messages="errors.collect('password(again)')"
      :type="showConfirmPassword ? 'text' : 'password(again)'"
      label="password(again)"
      data-vv-name="password(again)"
      color="cyan accent-2"
      required
      clearable
    ></v-text-field>
    <v-btn @click="submit">submit</v-btn>
    <v-btn @click="clear">clear</v-btn>
  </v-form>
  <p>{{btrAddr}}</p>
        <qrcode-vue :value="btrAddr.slice(8)"></qrcode-vue>
  <Footer></Footer>
  </div>
</template>
<script>
  import Vue from 'vue'
  import VeeValidate from 'vee-validate'
  import Footer from './../components/Footer.vue'
import QrcodeVue from 'qrcode.vue'
  Vue.use(VeeValidate)

  export default {
    $_veeValidate: {
      validator: 'new'
    },
    components:{
      Footerو
      QrcodeVue,
    },
    data: () => ({
      name: '',
      email: '',
      showPassword:false,
      showConfirmPassword:false,
      password:'',
      confirmPassword:'',
      
      checkbox: null,
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
        this.$validator.validateAll();
        this.$emit('changeHeader')
      },
      clear () {
        this.name = ''
        this.email = ''
        this.select = null
        this.checkbox = null
        this.$validator.reset()
      }
    }
  }
</script>
<style scoped>
.textCard{
    font-family:'iranian sans';
    color:#00E5FF;
    text-decoration:none;
    font-size:12px;
}
.textCard:hover{
    color:#18FFFF;
}
</style>
