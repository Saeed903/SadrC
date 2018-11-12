<template>
    <div>
       <EditYourProfileCo></EditYourProfileCo>
       <BasicUserInformation></BasicUserInformation>
       <ChangePassword></ChangePassword>
    </div>
</template>
<script>
import EditYourProfileCo from './../components/EditProfile/EditYourProfileCo.vue'
import BasicUserInformation from './../components/EditProfile/BasicUserInformation.vue'
import ChangePassword from './../components/EditProfile/ChangePassword.vue'
    export default{
        data(){
            return{

            }
        },
        components:{
            EditYourProfileCo,
            BasicUserInformation,
            ChangePassword
        },
        methods:{
            
        }
    }
</script>
