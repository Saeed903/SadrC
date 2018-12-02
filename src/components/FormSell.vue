<template>
  
   <div>
     
    <p class="titled text-xs-center">{{currency}}</p>
     
    
    <v-form ref="form" class="table" v-model="valid" lazy-validatio>
      <v-container>
        <v-layout row wrap>
          <v-flex d-flex xs12 md2 lg1 pt-0>
            <v-text-field 
              v-model="amount"
              type="number"
              style=""
              :rules="amountRules"
              label="میزان"
              required
            ></v-text-field>
          </v-flex>
            
          <v-flex d-flex xs12 md3 lg3 pt-0>
            <v-select 
              v-model="country"
              style=""
              :items="country"
              :rules="[v => !!v || 'کشور مورد نیاز ']"
              label="کشور"
              required
            ></v-select>
          </v-flex>
            
          <v-flex d-flex xs12 md2 lg2 pt-0>
            <v-select
              v-model="offers"
              :items="offers"
              :rules="[v => !!v || 'لازم است']"
              label  ="تمام وقت"
              required
            ></v-select>
          </v-flex>
            
          <v-flex d-flex xs12 md3 lg3 pt-0>
            <v-select
              v-model="country"
              style=""
              :items="country"
              :rules="[v => !!v || 'کشور مورد نیاز ']"
              label="کشور"
              required
            ></v-select>
          </v-flex>
            
          <v-flex xs12 md1 pt-0>
            <v-card-text>
              <v-btn left :disabled="!valid" @click="submit"> جست وجو </v-btn>
            </v-card-text>
          </v-flex>
        </v-layout>
      </v-container>
    </v-form>
  </div>
</template>
<script>

  export default {
    props:['currency'],
    data: () => ({
      
      valid: true,
      amount: '',
      amountRules: [
        v => !!v || 'مقدار مورد نیاز ',
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
<style >
.titled{
  font-family: Iranian Sans;
  font-size: 20px;
}
.table{
  font-family: Iranian Sans;
  
}
</style>
