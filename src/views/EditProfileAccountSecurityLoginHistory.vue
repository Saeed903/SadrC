<template>
    <div>
        <p class="titled">تاریخ ورود</p>
        <router-link class="router" to="">بازگشت به امنیت حساب</router-link>
        <v-data-table
            class="text-xs-left"
            :headers="headers"
            :items="desserts"
            :pagination.sync="pagination"
            :total-items="totalDesserts"
            :loading="loading"
        >

            <template slot="items" slot-scope="props">
                <td class="fontIran">{{ props.item.trader }}({{props.item.tradeCount}},{{props.item.satisfiedPercent}})</td>
                <td class="text-xs-right fontIran">{{ props.item.paymentMethod }}</td>
                <td class="text-xs-right fontIran">{{ props.item.price }}</td>
                <td class="text-xs-right fontIran">{{ props.item.limits }}</td>
                <td class="text-xs-right fontIran"><v-btn class="primary" @click="buy()">خرید</v-btn></td>
            </template>
        </v-data-table>
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
        return (this.isSeller==1) ?'فروشنده':'خریدار';
    },
    headers:function() {
        return  [{
            text: this.typeCustomer,
            align: 'left',
            class:'text-xs-left',
            sortable: false,
            value: 'name'
            },
            { text: 'روش پرداخت', value: 'روش پرداخت' },
            { text: ' بیت کوین | قیمت', value: ' بیت کوین | قیمت' },
            { text: 'محدودیت ها', value: 'محدودیت ها' }
            
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
<style scoped>
.titled{
  font-family: Iranian Sans;
  font-size: 18px; 
}

.headline{
  text-decoration: none;
  padding-right:10px;
  color:rgb(133, 129, 129);
}
.fontIran{
font-family: Iranian Sans;
font-size: 13px;

}
.router{
    font-family:'iranian sans';
    color:rgb(0, 153, 255);
    text-decoration:none;
}
.router:hover{
    color:rgb(0, 140, 255);
}
.btc{
  font-family: Iranian Sans;
  font-size: 15px;
}
</style>

