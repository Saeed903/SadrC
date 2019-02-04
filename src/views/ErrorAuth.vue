<template>
    <div>
        <div class="text-xs-center">
            <p class="fontIran"><v-icon color="red" size="20px">report_problem</v-icon>شما به این صفحه دسترسی ندارید</p>
            <v-btn class="fontIran elevation-20" @click="goLoginPage()" color="cyan accent-2" outline>برو به صفحه ورود کاربر</v-btn>
        </div>
    </div>
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

