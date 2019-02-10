<template >
<div>
  <v-data-table
      class="table"
      :headers="headers"
      :items="publishAdvertises"
      :pagination.sync="pagination"
      :total-items="totalAdvertise"
      :loading="loadingPublishAdvertises"
     >
      <template v-if="!loadingPublishAdvertises" slot="items" slot-scope="props">
        <td>{{ props.item.id }}({{props.item.user.userName}},{{props.item.user.mobile}})</td>
        <td >{{ props.item.introduction }}</td>
        <td >{{ props.item.margin }}</td>
        <td ><v-btn class="elevation-20" outline color="cyan accent-2"  @click="buy()" to="Order">خرید</v-btn></td>
      </template>
    </v-data-table>
</div>
</template>
<script>

import { mapActions, mapState, mapGetters } from 'vuex';
import { log } from 'async';

export default{
  name:"Advertise",
  props:['isSeller', 'query'],
  data () {
    return {
        totalAdvertise:0,
        pagination: {},
      }
  },
  computed:{
    ...mapState('publishAdvertises', { loadingPublishAdvertises: 'isFindPending'}),
    ...mapGetters('publishAdvertises', { findPublishAdvertisesOnline: 'find'}),

    publishAdvertises(){
        return this.findPublishAdvertisesOnline().data ;
    },

    typeCustomer() {
        return (this.isSeller==1) ?'فروشنده':'خریدار';
    },
    headers() {
        return  [
                 {
                    text: this.typeCustomer,
                    align: 'center',
                    class:'text-xs-right white--text',
                    sortable: false,
                    value: this.typeCustomer
                 },
                 {
                    text: 'روش پرداخت',
                    align: 'center',
                    class:'text-xs-right',
                    sortable: false,
                    value: 'روش پرداخت'
                 },
                 {
                    text: ' بیت کوین | قیمت ',
                    align: 'center',
                    class:'text-xs-right',
                    sortable: false,
                    value: ' بیت کوین | قیمت'
                 },
                 {
                    text: 'محدودیت ها',
                    align: 'center',
                    class:'text-xs-right',
                    sortable: false,
                    value: 'محدودیت ها'
                 },
                
            
        ]
    }
  },
  watch: {
    pagination: {
    handler () {
        this.findPublishAdvertise()
        .then(data => {
            this.totalAdvertise = this.publishAdvertises.length;
        })
    },
    deep: true
    }
  },
  mounted () {

    this.findPublishAdvertise()
        .then(response => {
            const publishAdvertises = response.data || response;
            console.log(publishAdvertises);

            this.totalAdvertise = publishAdvertises.length;
            
        })
  },
  methods: {

    ...mapActions('publishAdvertises', { findPublishAdvertise : 'find'}),
  }
};
  
</script>
<style scoped>
.table{
    font-family: Iranian Sans;
   background-color:rgb(30, 38, 52);
}


</style>

