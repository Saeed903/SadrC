<template>
  <div>

        <v-card>
          <v-layout row wrap>
            <v-flex sm6>
              <v-tooltip bottom>
                <div slot="activator">
                  <v-text-field label="farzad"></v-text-field>
                </div>
                <span>Bottom tooltip</span>
              </v-tooltip>
            </v-flex>

            <v-flex sm6>
              <v-tooltip bottom>
                <div slot="activator">
                  <v-text-field label="farzad"></v-text-field>
                </div>
                <span>Bottom tooltip</span>
              </v-tooltip>
            </v-flex>

            <v-flex sm6>
              <v-tooltip bottom>
                <div slot="activator">
                  <v-text-field label="farzad"></v-text-field>
                </div>
                <span>Bottom tooltip</span>
              </v-tooltip>
            </v-flex>

            <v-flex sm6>
              <v-tooltip bottom>
                <div slot="activator">
                  <v-text-field label="farzad"></v-text-field>
                </div>
                <span>Bottom tooltip</span>
              </v-tooltip>
            </v-flex>
            
          </v-layout>
        </v-card>

  </div>
</template>
<script>

import {mapState}  from 'vuex';

export default {
  data:()=>({
  checkbox:'',
  }),
  computed:{
    ...mapState ('auth', { payload: 'payload' }),
  }
}
</script>
<style scoped>
.fontsIran1{
    font-family:'Iranian Sans';
    color:#BDBDBD;
}
.textCard{
    color:#18FFFF;
}
.logCard{
  border:1px solid #18FFFF;
  box-shadow:0px 0px 25px 1px #18FFFF;
}
.logCards{
  border:1px solid #D50000;
  box-shadow:1px 1px 40px 1px #D50000;
}
</style>

