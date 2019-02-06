<template>
  <div>
     
    <p>{{currency}}</p>
    <v-form ref="form" v-model="valid" lazy-validatio>
      <v-layout row wrap>
        <v-flex d-flex xs12 sm6 md2 lg2 pt-0>
          <v-autocomplete
          :items="selectCryptoCurrencies"
          v-model="selectCryptoCurrency"
          label="نوع ارز"
          class="textField fontIran"
          color="cyan accent-2" 
          clearable
          >
          </v-autocomplete>
        </v-flex>
        <v-flex d-flex xs12 sm6 md2 lg2 pt-0>
          <v-text-field 
            v-model="amount"
            type="number"
            :rules="amountRules"
            label="مقدار"
            :counter="10"
            color="cyan accent-2"
            class="fontsIran"
            clearable
          ></v-text-field>
        </v-flex>
          
        <v-flex d-flex xs12 sm6 md2 lg2 pt-0>
          <v-autocomplete
            v-model="offers"
            :items="offers"
            label  ="تمام وقت"
            class="fontsIran"
            color="cyan accent-2"
            clearable
          ></v-autocomplete>
        </v-flex>
          
        <v-flex d-flex xs12 sm6 md3 lg3 pt-0>
          <v-autocomplete
            v-model="country"
            :items="country"
            class="fontsIran"
            color="cyan accent-2"
            label="کشور"
            clearable
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

import { mapState, mapActions, mapGetters } from 'vuex';

export default{
    data:() => ({
      valid:false,
      amount:'',
      loader:null,
      loading3:false,
      amountRules:[
        v => v.length <= 10 || 'می بایستی مقدار حداکثر تا 10 رقم باشد'
      ]
    }),
    methods:{
        
        ...mapActions('tradeTypes', { findTradeTypes: 'find'}),
        ...mapActions('countries', { findCountries: 'find'}),
        ...mapActions('cryptoCurrencies', { findCryptCurrencies: 'find'}),
    },
    mounted (){
        this.findTradeTypes()
            .then( response => {
                const tradeType = response.data || response;
                
            }),
        
        this.findCountries()
            .then(response => {
                const countries = response.data || response;
            }),
           
        this.findCryptCurrencies()
            .then(response => {
                const cryptoCurrencies = response.data || response;  
            })
    },
     watch: {
      loader () {
        const l = this.loader
        this[l] = !this[l]

        setTimeout(() => (this[l] = false), 3000)

        this.loader = null
      }
    },
    computed: {

        ...mapGetters('cryptoCurrencies', { findCryptoCurrenciesOnline: 'find'}),

        cryptoCurrencies() {
            return this.findCryptoCurrenciesOnline().data;
        },
        selectCryptoCurrencies(){
            var selected = [];
            this.cryptoCurrencies.map(v =>{
                    selected.push(v.cryptoCurrencyCode + ' ' + v.cryptoCurrencyName + ' ' + v.cryptoCurrencyTitle) ;
                });
            return selected;//.cryptoCurrencyName + ' ' + cryptoCurrencies.cryptoCurrencyCode;
        },
            
    },
}
</script>