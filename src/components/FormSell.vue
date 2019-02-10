<template>
  <div>
     
    <p>{{currency}}</p>
    <v-form ref="form" v-model="valid" lazy-validatio>
      <v-layout row wrap>
        <v-flex d-flex xs12 sm6 md4 lg4 xl3 pt-0>
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
        <v-flex d-flex xs12 sm6 md4 lg3 xl 3 pt-0>
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
  
          <v-flex d-flex xs12 sm6 md4 lg3 xl3 pt-0>
          <v-autocomplete
                :items="selectCountries"
                v-model="selectCountry"
                label="کشور"
                class="fontsIran"
                color="cyan accent-2" 
                clearable
                >
                </v-autocomplete>
        </v-flex>
        
      <v-flex xs12 sm1 md1 pt-0>
          <v-card-text>
            <v-btn
            :loading="loading3"
            :disabled="valid,loading3"
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
      submitted:false,
      loader:null,
      loading3:false,
      amountRules:[
      v => v.length <= 10 || 'می بایستی مقدار حداکثر تا 10 رقم باشد'
      ],
      advertise:''
    }),
    methods:{
        ...mapActions('countries', { findCountries: 'find'}),
        ...mapActions('cryptoCurrencies', { findCryptCurrencies: 'find'}),
    },
    mounted (){
        this.findCountries()
            .then(response => {
                const countries = response.data || response;
            }),
           
        this.findCryptCurrencies()
            .then(response => {
                const cryptoCurrencies = response.data || response;  
            })
    },
    computed: {
        ...mapState('countries', { loadingCountries: 'isFindPending'}),
        ...mapState('cryptoCurrencies', { loadingCryptoCurrencies: 'isFindPending'}),

        ...mapGetters('cryptoCurrencies', { findCryptoCurrenciesOnline: 'find'}),
        ...mapGetters('countries', { findCountriesOnline: 'find' }),

        countries(){
            return this.findCountriesOnline().data;
        },

        cryptoCurrencies() {
            return this.findCryptoCurrenciesOnline().data;
        },

        selectCountry: {
            get:function(){
                var countryModel, country;
                countryModel = this.countries.find(country => country.Id == this.advertise.countryId);

                if(countryModel !=null ){
                    country = countryModel.countryName;
                }
                return country ;
            },
            set:function(selectedCountryName){
                this.advertise.countryId = this.countries.find(country => country.countryName == selectedCountryName).Id;
            }
        },
  

        selectCountries(){
            var selected = [];
            this.countries.map( country => {
                selected.push(country.countryName);
            })
            return selected;
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