<template>
    <div>
        <div>
            <p>niasoh</p>
            <p>information on niasoh</p>
            <div>
                <p>trade volume</p>
                <p>number of confirmed trades</p>
                <p>feedback score</p>
                <p>real name verification</p>
                <p>first purchase</p>
                <p>account created</p>
                <p>last seen</p>
                <p>language</p>
                <p>email</p>
                <p>phone number</p>
                <p>ID,passport of Drivers</p>
                <p>license</p>
                <p>trust</p>
                <p>blocks</p>
            </div>
            <div>
                <p>500+BTC</p>
                <p>1000+</p>
                <p>...with 662 different partners</p>
                <p>100%</p>
                <p>17 trusted verification,21</p>
                <p>verification,1 rejected verifications</p>
                <p>10 months,3weeks ago</p>
                <p>10 months,3weeks ago</p>
                <p>1minutes ago</p>
                <p>english</p>
                <p>verified 10 months,3 weeks ago</p>
                <p>verified 13hours, 14 minuted ago</p>
                <p>verified 10 months,3 weeks ago</p>
                <p>trusted by 100+ people</p>
                <p>blocked by 2+ people</p>
                <p>pro trader</p>
            </div>
            <div>
                <p>seller escrow release times</p>
                <p>median:18 min</p>
                <p>average:19 min</p>
            </div>
            <router-link to="">report this user</router-link>
        </div>
        <div>
            <p>buy bitcoins online from niasoh</p>
            <v-data-table
                class="text-xs-left"
                :headers="headers"
                :items="desserts"
                :pagination.sync="pagination"
                :total-items="totalDesserts"
                :loading="loading"
            >
            <template slot="items" slot-scope="props">
                <td>{{ props.item.trader }}({{props.item.tradeCount}},{{props.item.satisfiedPercent}})</td>
                <td class="text-xs-right">{{ props.item.paymentMethod }}</td>
                <td class="text-xs-right">{{ props.item.price }}</td>
                <td class="text-xs-right">{{ props.item.limits }}</td>
                <td class="text-xs-right"><v-btn class="primary" @click="buy()">buy</v-btn></td>
            </template>
            </v-data-table>
        </div>
        <router-link to="">show all users ads to buy bitcoins online</router-link>
        <div>
            <p>buy bitcoins with cash from niasoh</p>
            <v-data-table
                class="text-xs-left"
                :headers="headers"
                :items="desserts"
                :pagination.sync="pagination"
                :total-items="totalDesserts"
                :loading="loading"
            >
            <template slot="items" slot-scope="props">
                <td>{{ props.item.trader }}({{props.item.tradeCount}},{{props.item.satisfiedPercent}})</td>
                <td class="text-xs-right">{{ props.item.paymentMethod }}</td>
                <td class="text-xs-right">{{ props.item.price }}</td>
                <td class="text-xs-right">{{ props.item.limits }}</td>
                <td class="text-xs-right"><v-btn class="primary" @click="buy()">buy</v-btn></td>
            </template>
            </v-data-table>
        </div>
        <router-link to="">show all users ads to buy bitcoins with cash</router-link>
        <div>
            <p>sell bitcoins online to niasoh</p>
            <v-data-table
                class="text-xs-left"
                :headers="headers"
                :items="desserts"
                :pagination.sync="pagination"
                :total-items="totalDesserts"
                :loading="loading"
            >
            <template slot="items" slot-scope="props">
                <td>{{ props.item.trader }}({{props.item.tradeCount}},{{props.item.satisfiedPercent}})</td>
                <td class="text-xs-right">{{ props.item.paymentMethod }}</td>
                <td class="text-xs-right">{{ props.item.price }}</td>
                <td class="text-xs-right">{{ props.item.limits }}</td>
                <td class="text-xs-right"><v-btn class="primary" @click="buy()">buy</v-btn></td>
            </template>
            </v-data-table>
        </div>
        <router-link to="">show all users ads to sell bitcoins online</router-link>
        <div>
            <router-link to="">show all users ads to sell bitcoins online</router-link>
        </div>
        <div>
            <p>feedback</p>
            <p>feedback left by users with noticeable trade volume.</p>
            <div>
                <p>march 1,2018,8:46 a.m</p>
                <v-btn></v-btn>
            </div>
            <div>
                <p>june 15 2018,4:37 p.m</p>
                <v-btn></v-btn>
            </div>
            <div>
                <p>feb 21,2018,11:59 a.m</p>
                <v-btn></v-btn>
            </div>
            <div>
                <p>july 18,2018,11:34 a.m</p>
                <v-btn></v-btn>
            </div>
        </div>
        <div>
            <p>..see<router-link to="">more feedback for niasoh</router-link></p>
        </div>
    </div>
</template>
<script>
export default{
  name:"Transaction",
  props:["isSeller"],
  data () {
    return {
        totalDesserts: 0,
        desserts: [],
        loading: true,
        pagination: {},
      }
  },
  computed:{
    typeCustomer:function() {
        return (this.isSeller==1) ?'Seller':'Buyer';
    },
    headers:function() {
        return  [{
            text: this.typeCustomer,
            align: 'left',
            class:'text-xs-left',
            sortable: false,
            value: 'name'
            },
            { text: 'paymentMethod', value: 'paymentMethod' },
            { text: ' price | bitcoin', value: ' price | bitcoin' },
            { text: 'limits', value: 'limits' }
            
        ]
    }
  },
  watch: {
    pagination: {
    handler () {
        this.getDataFromApi()
        .then(data => {
            this.desserts = data.items
            this.totalDesserts = data.total
        })
    },
    deep: true
    }
  },
  mounted () {
    console.log(this.isSeller);  
    this.getDataFromApi()
    .then(data => {
        this.desserts = data.items
        this.totalDesserts = data.total
    })
  },
  methods: {
    getDataFromApi () {
    this.loading = true
    return new Promise((resolve, reject) => {
        const { sortBy, descending, page, rowsPerPage } = this.pagination

        let items = this.getDesserts()
        const total = items.length

        if (this.pagination.sortBy) {
        items = items.sort((a, b) => {
            const sortA = a[sortBy]
            const sortB = b[sortBy]

            if (descending) {
            if (sortA < sortB) return 1
            if (sortA > sortB) return -1
            return 0
            } else {
            if (sortA < sortB) return -1
            if (sortA > sortB) return 1
            return 0
            }
        })
        }

        if (rowsPerPage > 0) {
        items = items.slice((page - 1) * rowsPerPage, page * rowsPerPage)
        }

        setTimeout(() => {
        this.loading = false
        resolve({
            items,
            total
        })
        }, 1000)
    })
    },
    getDesserts () {
    return [
        {
            trader:'farzad',
            tradeCount:'98',
            satisfiedPercent:'100%',
            paymentMethod:'sign',
            price:'58',
            limits:'100',
        },
         {
            trader:'ali',
            tradeCount:'98',
            satisfiedPercent:'100%',
            paymentMethod:'sign',
            price:'58',
            limits:'100',
        },
         {
            trader:'heydar',
            tradeCount:'98',
            satisfiedPercent:'100%',
            paymentMethod:'sign',
            price:'58',
            limits:'100',
        },
         {
            trader:'koomari',
            tradeCount:'98',
            satisfiedPercent:'100%',
            paymentMethod:'sign',
            price:'58',
            limits:'100',
        },
         {
            trader:'lakzad',
            tradeCount:'98',
            satisfiedPercent:'100%',
            paymentMethod:'sign',
            price:'58',
            limits:'100',
        },
    ]
    }
  }
};
  
</script>

<style lang="postcss">

padding: ;
</style>
