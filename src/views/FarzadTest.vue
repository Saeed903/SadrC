<template>
    <div>
        <v-hover>
      <v-card slot-scope="{ hover }" class="mx-auto" color="grey lighten-4" max-width="600">
        <div style="background-color:grey;">
          <v-card-text class="white--text">farzad afsari</v-card-text>
          <v-card-text class="white--text">farzad afsari</v-card-text>
          <v-card-text class="white--text">farzad afsari</v-card-text>
          <v-card-text class="white--text">farzad afsari</v-card-text>
          <v-card-text class="white--text">farzad afsari</v-card-text>
          <v-card-text class="white--text">farzad afsari</v-card-text>
          <v-card-text class="white--text">farzad afsari</v-card-text>
          <v-card-text class="white--text">farzad afsari</v-card-text>
          <v-card-text class="white--text">farzad afsari</v-card-text>
          <v-card-text class="white--text">farzad afsari</v-card-text>
        </div>
        <v-expand-transition>
        <div
        v-if="hover"
        class="d-flex transition-fast-in-fast-out grey darken-2 v-card--reveal display-3 white--text"
        style="height: 100%;"
        >
        farzad afsari
        </div>
        </v-expand-transition>
      </v-card>
    </v-hover>
    </div>
</template>
<script>
export default {
    
}
</script>
