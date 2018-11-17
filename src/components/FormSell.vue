<template>

  
    
      <v-card>
      
        <v-card-text class="table">
          <p class="titled text-xs-center">{{currency}}</p>
          
          <v-form ref="form" v-model="valid" lazy-validation>

            <v-layout>
            <v-flex >
              <v-card-text>
            <v-text-field
              v-model="amount"
              type="number"
              style=""
              :rules="amountRules"
              label="میزان"
              required
            ></v-text-field>
              </v-card-text>
          </v-flex>
          <v-flex >
            <v-card-text>
            <v-select
              v-model="country"
              style=""
              :items="country"
              :rules="[v => !!v || 'کشور مورد نیاز ']"
              label="کشور"
              required
            ></v-select>
            </v-card-text>
          </v-flex>
          <v-flex>
            <v-card-text>
            <v-select
              v-model="offers"
              :items="offers"
              :rules="[v => !!v || 'لازم است']"
              label  ="تمام وقت"
              required
            ></v-select>
            </v-card-text>
          </v-flex>
            <v-flex >
              <v-card-text>
            <v-checkbox
              v-model="checkbox"
              :rules="[v => !!v || 'شما باید قبول کنید که ادامه یابد']"
              style=""
              label="موافقید؟"
              required
            ></v-checkbox>
              </v-card-text>
            </v-flex>
            </v-layout>
            <v-flex xs6 sm6 md6 lg6>
            <v-btn
              :disabled="!valid"
              @click="submit"
            >
            ارسال
            </v-btn>
            <v-btn @click="clear">پاک کردن</v-btn>
            </v-flex>
          </v-form>
        </v-card-text>
      </v-card>
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
