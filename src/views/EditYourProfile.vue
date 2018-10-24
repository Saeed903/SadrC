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
export default {
    data: () => ({
        select: null,
        items: [
            'istanbul',
            'tehran',
            'ankara',
            'tabriz',
        ],
    }),
    components:{
        EditYourProfileCo,
        BasicUserInformation,
        ChangePassword,
    }
}
</script>
