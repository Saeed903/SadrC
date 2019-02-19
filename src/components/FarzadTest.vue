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
     <v-card-text>
            <v-icon size="40px" color="cyan accent-2">help_outline</v-icon><br>
            

        </v-card-text>
        <div style="font-size:25px">
          <p  style="font-size:10px">سوالات متداول</p><br>
          <p>در این صفحه به تمام سوالات شما جواب داده می شود چه یک کاربر جدید باشید چه یک معامله گر تازه وارد.اگر کاربر جدید هستید می توانید از این راهنمایی های این صفحه استفاده کنید.اگر میخواهید یک معامله گر شوید راهنمای آنلاین ارزهای دیجیتال ما برای شما مناسب است.شما همچنین می توانید یک سوال در انجمن های ما بپرسید یا یک بلیط پشتیبانی را برای تماس با پشتیبانی ما باز کنید.</p>
        </div>
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
