<template>
    <div>
        <Footer :items="FooterItems">
            <div slot="farzad" slot-scope="row">
                {{row.item.text}}
            </div>
        </Footer>
    </div>
</template>
<script>
import Footer from './../components/Footer.vue'
export default {
    components:{
        Footer
    },
    data(){
        return{
            FooterItems:[
                {text:'we write this text with slot'}
            ]
        }
    }
}
</script>

