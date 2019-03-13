<template lang="pug">
    div {{t}}
        //-div {{t}}
        //- div(v-if="$apollo.queries.advertises.loading") Loading...
        div(v-for="(adv,index) in t" :key="index") 
            li {{adv.tradeType  }}
                
</template>
<script>
import gql from 'graphql-tag'
import GRAPHQL_ENDPOINT from './../config'
export default {
    data:()=>({
        hello:'',
        id:3,
        t:{}
    }),
    apollo: {
        hello: gql`{ hello } `,
        t: {
            query : gql`{
                advertises{
                    id
                    tradeTyepId
                    tradeType{
                    tradeTypeTitle
                    }
                    countryId
                    country{
                    id
                    countryName
                    countryNickName
                    coutnryTitle
                    }
                    cryptoCurrencyId
                    cryptoCurrency{
                    cryptoCurrencyCode
                    cryptoCurrencyName
                    cryptoCurrencyTitle
                    cryptoCurrencyTeamName
                    }
                    margin
                    priceEquation
                    minTransactionLimit
                    maxTransactionLimit
                    restrictAmountsTo
                    termsOfTrade
                    trackLiquidity
                    identifiedPeopleOnly
                    smsVerification
                    trustedPeopleOnly
                    ownerId
                    owner{
                    userName
                    email
                    }
                    
                }
            }`,
            update: data => data.advertises
        },
        tradeType: {
            query: gql`query tradeType($id:ID!) {
                tradeType(id:$id){
                    id
                    tradeTypeTitle
                }
            }`,
            variables() {
                return {
                    id: this.id
                }
            },
            fetchPolicy: 'cache-and-network',
        }    
    },
    computed:{
        t1(){
            console.log('test :',this.t[0].tradeType);
            return this.t.tradeType
        }
    },
    created(){
        console.log('test', GRAPHQL_ENDPOINT);
        
    }
}
</script>

