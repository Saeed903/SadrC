<template>
    <v-container fluid grid-list-xl pt-0>
        <v-layout  justify-space-around>
            <v-flex lg10 xl8>
                <EditYourProfileCo></EditYourProfileCo>
                <BasicUserInformation></BasicUserInformation>
                <ChangePassword></ChangePassword>
            </v-flex>
        </v-layout>
    </v-container>
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
