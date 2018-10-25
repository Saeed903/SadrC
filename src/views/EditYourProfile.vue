<template>
    <div>
        <EditYourProfieCo></EditYourProfieCo>
        <BasicUserInformation></BasicUserInformation>
        <ChangePassword></ChangePassword>
    </div>
</template>
<script>
import EditYourProfieCo from './../components/EditProfile/EditYourProfieCo.vue'
import BasicUserInformation from './../components/EditProfile/BasicUserInformation.vue'
import ChangePassword from './../components/EditProfile/ChangePassword.vue'
    export default{
        data(){
            return{

            }
        },
        components:{
            EditYourProfieCo,
            BasicUserInformation,
            ChangePassword,
        }
    }
</script>
