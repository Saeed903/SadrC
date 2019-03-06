<template>
  <div>

<div class="mdc-text-field mdc-text-field--outlined">
  <input type="text" id="tf-outlined" class="mdc-text-field__input">
  <div class="mdc-notched-outline">
    <div class="mdc-notched-outline__leading"></div>
    <div class="mdc-notched-outline__notch">
      <label for="tf-outlined" class="mdc-floating-label">Your Name</label>
    </div>
    <div class="mdc-notched-outline__trailing"></div>
  </div>
</div>

  </div>
</template>
<script>
import VueMaterial from 'vue-material'
export default {
  data:()=>({

  }),
}
</script>
<style scoped>
@import './../../node_modules/vue-material/dist/vue-material.min.css';
</style>
