<template>
  <v-app>
    <v-content>
      <Navigation/>
       <Carousels/>
    </v-content>
  </v-app>
</template>

<script>
import Carousels from '@/components/Carousels.vue'
import Navigation from '@/components/Navigation.vue'
export default {
  name: 'App',
  components: {
    Carousels,
    Navigation
  },

  data: () => ({}),
};
</script>
