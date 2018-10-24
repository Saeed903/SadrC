<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    
    <v-text-field
      v-model="amount"
      type="number"
      style="text-align:right;width:47%;float:right;margin-left:5px;margin-top:0"
      :rules="amountRules"
      label="amount"
      required
    ></v-text-field>
    <v-select
      v-model="country"
      style="text-align:right;width:47%;margin-right:5px;margin-top:10px"
      :items="country"
      :rules="[v => !!v || 'country is required']"
      label="country"
      required
    ></v-select>
    <v-select
      v-model="offers"
      :items="offers"
      :rules="[v => !!v || 'is required']"
      label  ="all onlines offers"
      required
    ></v-select>
    <v-checkbox
      v-model="checkbox"
      :rules="[v => !!v || 'you must accept to continue']"
      style=""
      label="do you agree?"
      required
    ></v-checkbox>

    <v-btn
      :disabled="!valid"
      @click="submit"
    >
     submit
    </v-btn>
    <v-btn @click="clear">clear</v-btn>
  </v-form>
</template>
<script>

  export default {
    data: () => ({
      
      valid: true,
      amount: '',
      amountRules: [
        v => !!v || 'amount is reqiured',
      ],
      select: null,
      country: [
        'america',
        'germany',
        'brazil',
        'canada'
      ],
      select: null,
      offers: [
        'money booker',
        'advcash',
        'moneygram',
        'egopay',
        'okepay',
        'paypal',
        'best Money',
        'other Online Payment',
        'web Money',
        'cash By Mail',
        'transfer With Special Bank',
        'pencil Ethereum',
        'penis Qiunn Litkoin',
        'credit Card',
        'cash Deposit',
        'gift Card Code',
        'international Wire',
        'natioonal Bank Transfer',
        'gift Card',
        'payer',
        'paypal',
        'payment',
        'money Transfer',
        'remote Transmission',
        'webMoney',
        'internet Chat',
        'western union',
        'globalization',
        'astonucus tar',
        'quintin corner',
        'penis quinn litkoin',
        'monroe altoin',
        'pencil ethereum',
        'cash',
      ],
      checkbox: false
    }),

    methods: {
      submit () {
        if (this.$refs.form.validate()) {
          // Native form submission is not yet supported
          axios.post('/api/submit', {
            name: this.name,
            email: this.email,
            select: this.select,
            select: this.select,
            checkbox: this.checkbox
          })
        }
      },
      clear () {
        this.$refs.form.reset()
      }
    }
  }
</script>