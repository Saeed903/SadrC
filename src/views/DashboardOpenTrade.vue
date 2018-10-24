<template>
    <div>
        <p>your advertisements</p>
        <p>you can create a maximum of 5 advertisements.the limits is based on your 30 day volume.which is 0.00000000 BTC.to learn more about advertisements limits,<router-link to="LearnAdverDashboard">click here</router-link></p>
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
        <v-btn class="primary">create adveritsement</v-btn>
        <p>vacation</p>
        <v-checkbox>selling vacation</v-checkbox>
        <p>disable all your advertisements for purchase temporarily</p>
        <v-checkbox>buying vacation</v-checkbox>
        <p>disable all your advertisements for purchase temporarily</p>
        <v-btn to="" class="primary">save</v-btn>
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
        
    ]
    }
  }
};
</script>
<style>

</style>
