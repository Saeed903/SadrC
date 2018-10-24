<template>
    <div>
        <p class="receiveBitcoins">receive bitcoins</p>
        <p class="giveAddress">give out the bitcoin address below to receive bitcoins</p>
        <p>3qdsfkabj45dfgag874fgafjasgnj</p>
        <v-list-group>
            {{text}}
        </v-list-group>
    </div>
</template>
<script>
export default {
    data() {
        return{
            text:'incoming transactions and fees',
        }
    }
}
</script>
<style>
.receiveBitcoins{
    font-size:30px;
    font-family:b nazanin;
    text-shadow:1px 3px 3px rgb(199, 178, 178);
    text-align:left
}
.giveAddress{
    font-size:20px;
    font-family:b nazanin;
    text-shadow:1px 3px 3px rgb(177, 166, 166);
    text-align:left
}
</style>


