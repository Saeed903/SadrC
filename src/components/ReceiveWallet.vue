<template>
    <div>
        <p class="receiveBitcoins">دریافت بیت کوین</p>
        <p class="giveAddress">.آدرس بیت کوین را برای دریافت بیت کوین ارسال کنید</p>
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


