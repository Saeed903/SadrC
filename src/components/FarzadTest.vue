<template lang="pug">
  div
    v-radio-group(v-model="selectedTimeWork")
      v-radio(value="everyDay" label="ساعات کاری هفته")
      v-radio(value="SelectTime" label="انتخاب ساعتهای کاری آنلاین")
    v-card(v-if="showSelectedHours")  
      v-btn farzad
</template>
<script>
export default {
  name:'FarzadTest',
  data:()=> ({
    selectedTimeWork: "everyDay",
    data: [
      
    ],
    bugs: [],
  }),
  computed:{
    showSelectedHours(){
      return this.selectedTimeWork== "SelectTime"?true:false;
    }
  },
}
</script>
