<template>
    <v-flex>
    <h1>شما به این صفحه دسترسی ندارید</h1>
    <v-btn @click="goLoginPage()">برو به صفحه ورود کاربر</v-btn>
    </v-flex>
</template>
<script>
export default {
    name:'ErroAuth',
    methods:{
        goLoginPage:function(){
            this.$router.push('/Login')
        }
    }
}
</script>

