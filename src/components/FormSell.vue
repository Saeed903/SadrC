<template>
  <div>
     
    <p>{{currency}}</p>
    <v-form ref="form" v-model="valid" lazy-validatio>
      <v-layout row wrap>
        <v-flex d-flex xs12 sm2 md2 lg2 pt-0>
          <v-text-field 
            v-model="amount"
            type="number"
            :rules="amountRules"
            label="مقدار"
            color="cyan accent-2"
            class="fontsIran"
            clearable
            required
          ></v-text-field>
        </v-flex>
          
        <v-flex d-flex xs12 sm2 md3 lg3 pt-0>
          <v-autocomplete
            v-model="country"
            :items="country"
            :rules="[v => !!v || 'کشور مورد نیاز ']"
            label="کشور"
            class="fontsIran"
            clearable
            color="cyan accent-2"
            required
          ></v-autocomplete>
        </v-flex>
          
        <v-flex d-flex xs12 sm3 md2 lg2 pt-0>
          <v-autocomplete
            v-model="offers"
            :items="offers"
            :rules="[v => !!v || 'لازم است']"
            label  ="تمام وقت"
            class="fontsIran"
            color="cyan accent-2"
            clearable
            required
          ></v-autocomplete>
        </v-flex>
          
        <v-flex d-flex xs12 sm2 md3 lg3 pt-0>
          <v-autocomplete
            v-model="country"
            :items="country"
            class="fontsIran"
            :rules="[v => !!v || 'کشور مورد نیاز ']"
            color="cyan accent-2"
            label="کشور"
            clearable
            required
          ></v-autocomplete>
        </v-flex>
          
        <v-flex xs12 sm1 md1 pt-0>
          <v-card-text>
            <v-btn
            :loading="loading3"
            :disabled="!valid,loading3"
            @click="submit,loader='loading3'"
            color="cyan accent-2"
            class="fontsIran elevation-24"
            outline
            round
            >
            <v-icon>search</v-icon>
            جست و جو
            </v-btn>
          </v-card-text>
        </v-flex>
      </v-layout>
    </v-form>
  </div>
</template>
<script>

  export default {
    props:['currency'],
    data: () => ({
      loader:null,
      loading3:false,
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
    watch: {
      loader () {
        const l = this.loader
        this[l] = !this[l]

        setTimeout(() => (this[l] = false), 3000)

        this.loader = null
      }
    },
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
