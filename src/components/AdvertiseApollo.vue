<template lang="pug">
    div
        //-div {{t}}
        //- div(v-if="$apollo.queries.advertises.loading") Loading...
        div(v-for="(adv,index) in t" :key="index") 
            li {{adv.tradeType.tradeTypeTitleb  }}
                
</template>
<script>
import gql from 'graphql-tag'
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
                    margin
                    minTransactionLimit
                    tradeType{
                        id
                        tradeTypeTitle
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
    }
}
</script>

