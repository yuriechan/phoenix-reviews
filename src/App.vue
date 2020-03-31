<template>
  <v-app>
    <v-content>
      <Navigation/>
      <Carousel/>
    </v-content>
  </v-app>
</template>

<script>
import Carousel from '@/components/Carousel.vue'
import Navigation from '@/components/Navigation.vue'
export default {
  name: 'App',
  components: {
    Carousel,
    Navigation
  },

  data: () => ({}),
};
</script>
