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

    <v-layout>
        <v-flex>
            <v-card>
                <p>farzad</p>
            </v-card>
        </v-flex>
        <v-flex>
            <v-card>
                <p>farzad</p>
            </v-card>
        </v-flex>
        <v-flex>
            <v-card>
                <p>farzad</p>
            </v-card>
        </v-flex>
    </v-layout>

  </div>
</template>
<script>
export default {

}
</script>
<style scoped>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: .5;
  position: absolute;
  width: 100%;
}
</style>
