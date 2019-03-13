<template>
  <div>

        <v-radio-group v-model="selectDay">
          <v-radio label="ساعات کاری هفته" :value="selectDay"></v-radio>
        </v-radio-group>
      
        <v-radio-group v-model="selectDay">
          <v-radio label="انتخاب ساعت های آنلاین" :value="!selectDay" ></v-radio>
        </v-radio-group>
      

    <div v-if="selectDay">
      <v-card>
        <v-text-field label="label 1"></v-text-field>
        <v-text-field label="label 2"></v-text-field>
        <v-text-field label="label 3"></v-text-field>
        <v-btn>yes</v-btn>
      </v-card>
    </div>

  </div>
</template>
<script>
export default {
  data:()=>({
    selectDay:null,
  }),
}
</script>

