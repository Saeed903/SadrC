<template>
    <div>
        <v-layout row wrap>
            <v-flex class="pb-0" xs12 sm12 md1 lg1 xl1>
                <v-card-text class="fontsIran text-xs-center">شنبه</v-card-text>
            </v-flex>
            <v-flex class="pt-0" xs6 sm6 md3 lg2 xl2 v-if="!payload">
                <v-text-field :disabled="!payload" type="number" class="fontIran" label="از ساعت" color="cyan accent-2" clearable>
                    <v-tooltip v-if="!payload" slot="append">
                            <v-icon slot="activator" color="red">block</v-icon>
                        </v-tooltip>
                </v-text-field>
            </v-flex>
            <v-flex class="pt-0" xs6 sm6 md3 lg2 xl2>           
                <v-text-field :disabled="!payload" type="number" class="fontIran" label="تا ساعت" color="cyan accent-2" clearable>
                      <v-tooltip v-if="!payload" slot="append">
                            <v-icon slot="activator" color="red">block</v-icon>
                        </v-tooltip>
                </v-text-field>
            </v-flex> 
        </v-layout>

        <v-divider></v-divider>

        <v-layout row wrap>
            <v-flex xs12 sm12 md1 lg1 xl1>             
                <v-card-text class="fontsIran text-xs-center">1شنبه</v-card-text> 
            </v-flex>    
            <v-flex xs6 sm6 md3 lg2 xl2>        
            <v-text-field :disabled="!payload" type="number" class="fontIran" label="از ساعت" color="cyan accent-2" clearable>
                <v-tooltip v-if="!payload" slot="append">
                            <v-icon slot="activator" color="red">block</v-icon>
                        </v-tooltip>
                </v-text-field>             
            </v-flex>           
            <v-flex xs6 sm6 md3 lg2 xl2>                        
                <v-text-field :disabled="!payload" type="number" class="fontIran" label="تا ساعت" color="cyan accent-2" clearable>
                    <v-tooltip v-if="!payload" slot="append">
                            <v-icon slot="activator" color="red">block</v-icon>
                        </v-tooltip>
                    </v-text-field>                 
            </v-flex>   
        </v-layout>
        <v-divider></v-divider>
        <v-layout row wrap>
            <v-flex xs12 sm12 md1 lg1 xl1>             
                <v-card-text class="fontsIran text-xs-center">2شنبه</v-card-text> 
            </v-flex>    
            <v-flex xs6 sm6 md3 lg2 xl2>        
                <v-text-field :disabled="!payload" type="number" class="fontIran" label="از ساعت" color="cyan accent-2" clearable>
                    <v-tooltip v-if="!payload" slot="append">
                            <v-icon slot="activator" color="red">block</v-icon>
                        </v-tooltip>
                    </v-text-field>             
            </v-flex>           
            <v-flex xs6 sm6 md3 lg2 xl2>                        
                <v-text-field :disabled="!payload" type="number" class="fontIran" label="تا ساعت" color="cyan accent-2" clearable>
                    <v-tooltip v-if="!payload" slot="append">
                            <v-icon slot="activator" color="red">block</v-icon>
                        </v-tooltip>
                    </v-text-field>                 
            </v-flex>   
        </v-layout>
        <v-divider></v-divider>
        <v-layout row wrap>
            <v-flex xs12 sm12 md1 lg1 xl1>             
                <v-card-text class="fontsIran text-xs-center">3شنبه</v-card-text> 
            </v-flex>    
            <v-flex xs6 sm6 md3 lg2 xl2>        
                <v-text-field :disabled="!payload" type="number" class="fontIran" label="از ساعت" color="cyan accent-2" clearable>
                    <v-tooltip v-if="!payload" slot="append">
                            <v-icon slot="activator" color="red">block</v-icon>
                        </v-tooltip>
                    </v-text-field>             
            </v-flex>           
            <v-flex xs6 sm6 md3 lg2 xl2>                        
                <v-text-field :disabled="!payload" type="number" class="fontIran" label="تا ساعت" color="cyan accent-2" clearable>
                    <v-tooltip v-if="!payload" slot="append">
                            <v-icon slot="activator" color="red">block</v-icon>
                        </v-tooltip>
                    </v-text-field>                 
            </v-flex>   
        </v-layout>
        <v-divider></v-divider>
        <v-layout row wrap>
            <v-flex xs12 sm12 md1 lg1 xl1>             
                <v-card-text class="fontsIran text-xs-center">4شنبه</v-card-text> 
            </v-flex>    
            <v-flex xs6 sm6 md3 lg2 xl2>        
                <v-text-field :disabled="!payload" type="number" class="fontIran" label="از ساعت" color="cyan accent-2" clearable>
                    <v-tooltip v-if="!payload" slot="append">
                            <v-icon slot="activator" color="red">block</v-icon>
                        </v-tooltip>
                    </v-text-field>             
            </v-flex>           
            <v-flex xs6 sm6 md3 lg2 xl2>                        
                <v-text-field :disabled="!payload" type="number" class="fontIran" label="تا ساعت" color="cyan accent-2" clearable>
                    <v-tooltip v-if="!payload" slot="append">
                            <v-icon slot="activator" color="red">block</v-icon>
                        </v-tooltip>
                    </v-text-field>                 
            </v-flex>   
        </v-layout>
        <v-divider></v-divider>
        <v-layout row wrap>
            <v-flex xs12 sm12 md1 lg1 xl1>             
                <v-card-text class="fontsIran text-xs-center">5شنبه</v-card-text> 
            </v-flex>    
            <v-flex xs6 sm6 md3 lg2 xl2>        
                <v-text-field :disabled="!payload" type="number" class="fontIran" label="از ساعت" color="cyan accent-2" clearable>
                    <v-tooltip v-if="!payload" slot="append">
                            <v-icon slot="activator" color="red">block</v-icon>
                        </v-tooltip>
                    </v-text-field>             
            </v-flex>           
            <v-flex xs6 sm6 md3 lg2 xl2>                        
                <v-text-field :disabled="!payload" type="number" class="fontIran" label="تا ساعت" color="cyan accent-2" clearable>
                    <v-tooltip v-if="!payload" slot="append">
                            <v-icon slot="activator" color="red">block</v-icon>
                        </v-tooltip>
                    </v-text-field>                 
            </v-flex>   
        </v-layout>
        <v-divider></v-divider>
        <v-layout row wrap>
            <v-flex xs12 sm12 md1 lg1 xl1>             
                <v-card-text class="fontsIran text-xs-center">جمعه</v-card-text> 
            </v-flex>    
            <v-flex xs6 sm6 md3 lg2 xl2>        
                <v-text-field :disabled="!payload" type="number" class="fontIran" label="از ساعت" color="cyan accent-2" clearable>
                    <v-tooltip v-if="!payload" slot="append">
                            <v-icon slot="activator" color="red">block</v-icon>
                        </v-tooltip>
                    </v-text-field>             
            </v-flex>           
            <v-flex xs6 sm6 md3 lg2 xl2>                        
                <v-text-field :disabled="!payload" type="number" class="fontIran" label="تا ساعت" color="cyan accent-2" clearable>
                    <v-tooltip v-if="!payload" slot="append">
                            <v-icon slot="activator" color="red">block</v-icon>
                        </v-tooltip>
                    </v-text-field>                 
            </v-flex>   
        </v-layout>
    </div>
</template>
<script>
import { mapState} from 'vuex';
export default {
    data : () => ({

    }),
     computed: {
        ...mapState ('auth', { payload: 'payload' }),
}
}
</script>
<style scoped>

.fontIran{
font-family: Iranian Sans;
font-size: 13px;

}

</style>

