
<template>
  <div>
    <v-menu bottom origin="center center" transition="scale-transition">
      <v-btn slot="activator" color="primary" dark>
        Scale Transition
      </v-btn>

      <v-list>
        <v-list-tile v-for="(item, i) in items" :key="i">
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
  </div>
</template>
<script>
  export default {
    data: () => ({
      items: [
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me 2' }
      ]
    })
  }
</script>