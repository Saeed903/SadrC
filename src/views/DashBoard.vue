<template>
<div>
    <div >
        <p>test</p>
    </div>
        <v-card  height="50px">
    <v-bottom-nav
      :active.sync="bottomNav"
      :color="color"
      :value="true"
      absolute
      shift
    >
      <v-btn dark value="Video">
        <span>Video</span>
        <v-icon>ondemand_video</v-icon>
      </v-btn>

      <v-btn dark value="Music">
        <span>Music</span>
        <v-icon>music_note</v-icon>
      </v-btn>

      <v-btn dark  value="Book">
        <span>Book</span>
        <v-icon>book</v-icon>
      </v-btn>

      <v-btn dark value="Image">
        <span>Image</span>
        <v-icon>image</v-icon>
      </v-btn>
    </v-bottom-nav>
  </v-card>
  <div class="headline text-xs-center pa-5">
      Active: {{ bottomNav }}
    </div>
   </div> 
</template>
<script>
  export default {
    data : () =>({
        bottomNav: "Video"
    }),
    computed: {
      color () {
        switch (this.bottomNav) {
          case "Video": return 'blue-grey'
          case "Music": return 'teal'
          case "Book": return 'brown'
          case "Image": return 'indigo'
        }
      }
    },mounted(){
        console.log(this.bottomNav);
    }
  }
</script>
<style scoped>
.dashboardTop{
    font-size:35px;
    font-family:b nazanin;
    color:black;
    text-align:center;
    text-shadow:1px 2px 2px rgb(134, 121, 121);
}
.explainDashboard{
    text-align:right;
    font-size:23px;
    font-family:b nazanin;
    color:black;
}
.router{
    font-size:23px;
    font-family:b nazanin;
    color:rgb(84, 151, 240);
    text-decoration:none;
    margin-right:10px;
    padding-right:5px;
    padding-left:5px;
    text-align:center;
}
.router:hover{
    background-color:rgb(30, 132, 228);
    color:white;
    border-radius:4px;
}
.topDiv{
    margin-bottom:80px;
}
</style>
