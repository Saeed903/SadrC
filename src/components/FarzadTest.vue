<template>
<div>
  <v-app id="inspire">
    <v-subheader>
      <v-btn @click="addBug()">Add Bugs</v-btn>
    </v-subheader>
    <v-radio-group v-model="selected" :mandatory="false">
      <v-radio v-for="(l, i) in data" :key="i" :label="l.name" :value="l.value" @change="getValue(l.value)"></v-radio>
      <v-radio v-if="bugs" v-for="(l, i) in bugs" :key="i" :label="l.name" :value="l.value" @change="getValue(l.value)"></v-radio>
    </v-radio-group>
  </v-app>
</div>

</template>
<script>
export default {
     data:()=> ({
        selected: 'radio-1',
        clickVal: null,
        data: [
         
        ],
        bugs: [],
    }),
     methods: {
    addBug() {
      this.bugs = [
        { name: 'Lady Bettle', value: 'bug 1' },
        { name: 'Hercules beetle', value: 'bug 2' },
      ];
    },
    getValue(v) {
      this.clickVal = v;
      // to workaround, uncomment lime below
      // this.selected = v;
    },
  },
}
</script>
