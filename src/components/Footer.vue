<template>
  <v-footer dark height="auto">
    <v-card flat tile class="indigo lighten-1 white--text text-xs-center">
      <v-card-text>
        <v-btn v-for="icon in icons" :key="icon" class="mx-3 white--text" icon>
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-text>
      <v-layout row wrap>
      <v-flex >
        <v-card>
      <v-card-text class="text-xs-right">
        <p>درباره ما</p>
      </v-card-text>
        </v-card>
      </v-flex>

      <v-flex>
        <v-card>
      <v-card-text class="text-xs-right">
        <p>درباره ما</p>
      </v-card-text>
        </v-card>
      </v-flex>

      <v-flex>
        <v-card>
      <v-card-text class="text-xs-right">
        <p>درباره ما</p>
      </v-card-text>
        </v-card>
      </v-flex>

      <v-flex>
        <v-card>
      <v-card-text class="text-xs-right">
        <p>درباره ما</p>
        <v-btn to="Fees">هزینه ها</v-btn>
      </v-card-text>
        </v-card>
      </v-flex>

      <v-flex>
        <v-card>
      <v-card-text class="text-sm-left mt-0">
        <p>SadrCrypto.com</p>
      </v-card-text>
        </v-card>
      </v-flex>
      </v-layout>

      Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
      
      <v-divider></v-divider>
      <v-card-text class="white--text">
        copyright 2018 sadrSys group&copy;
      </v-card-text>
    </v-card>
  </v-footer>
</template>
<script>
  export default {
    data: () => ({
      icons: [
        'fab fa-facebook',
        'fab fa-twitter',
        'fab fa-google-plus',
        'fab fa-linkedin',
        'fab fa-instagram'
      ]
    })
  }
</script>