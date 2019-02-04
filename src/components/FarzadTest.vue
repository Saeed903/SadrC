<template>
  <div class="text-xs-center">
    <v-toolbar-side-icon
      dark
      color="primary"
      @click="expand = !expand"
      slot="activator"
    ></v-toolbar-side-icon>

    <v-expand-transition>
      <div v-if="expand">
        <v-btn flat>راهنما</v-btn>
        <v-btn flat>ثبت آگهی</v-btn><br/>
        <v-btn flat>انجمن ها</v-btn><br/>
        <v-btn flat>کیف پول</v-btn><br/>
        <v-btn flat>داشبورد</v-btn>
      </div>
    </v-expand-transition>
  </div>
</template>
<script>
  export default {
    data: () => ({
      expand: false
    })
  }
</script>