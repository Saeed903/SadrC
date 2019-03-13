<template>
    <div>
            <v-radio-group>
                <v-radio @click="addBug()">Add Bugs</v-radio>
            </v-radio-group>

            <v-card v-model="selected" v-if="bugs" v-for="(l, i) in bugs" :key="i" :label="l.name" :value="l.value" @change="getValue(l.value)">
                <v-text-field label="farzad"></v-text-field>
                <v-text-field label="farzad"></v-text-field>
                <v-text-field label="farzad"></v-text-field>
                <v-btn>farzad</v-btn>
            </v-card>

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
