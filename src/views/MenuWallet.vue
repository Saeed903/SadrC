<template>
<div id="app">
    <v-content>
      <v-container fill-height>
        <v-layout justify-center align-center>
          
        </v-layout>
      </v-container>
    </v-content>
</div>
</template>
<script>
  export default {
  data: () => ({
      
    }),
    props: {
      source: String
    },
    methods:{
      submitUser(){

        this.$emit('changeHeader');
      }
    }
}
</script>

<style scoped>
#keep main .container {
    height: 660px;
  }
  .navigation-drawer__border {
    display: none;
  }
 .text{
   font-weight:400px;
 }
 .slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
{
  transform: translateX(10px);
  opacity: 0;
}
.freeRegister{
  text-decoration:none;
  color:rgb(153, 68, 68);
  font-size:15px;
  font-family:b titr;
  margin-left:10px;
}
.logIn{
  text-decoration:none;
  color:rgb(153, 68, 68);
  font-size:15px;
  font-family:b titr;
  margin-left:5px;
}
.sadrCryptoText{
  text-decoration:none;
  color:rgb(153, 68, 68);
  font-size:25px;
  font-family:b titr;
}
.littleText{
  text-decoration:none;
  color:rgb(153, 68, 68);
  font-size:15px;
  font-family:b titr;
}
</style>