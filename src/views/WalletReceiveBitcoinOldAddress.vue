<template>
    <div>
        <p>برای محافظت از حریم خصوصی شما، ما یک آدرس جدید bitcoin برای هر انتقال ارائه می دهیم. این مانع از ردیابی تمامی پرداخت هایی که شما با دیدن blackchain دریافت می کنید جلوگیری می کند.</p>
        <p>توجه داشته باشید که آدرس فقط برای 12 ماه معتبر است.</p>
        <p>آدرس های قدیمی</p>
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
            <td class="text-xs-right"><v-btn class="primary" @click="buy()">خرید</v-btn></td>
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
            tradeCount:'3QBHDFDS14SD',

        },
    ]
    }
  }
};
  
</script>
