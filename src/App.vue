<template>
  <v-app>
      <Navigation/>
    <v-content>
       <SearchBar/>
       <Carousels/>
    </v-content>
  </v-app>
</template>

<script>
import SearchBar from '@/components/SearchBar.vue'
import Carousels from '@/components/Carousels.vue'
import Navigation from '@/components/Navigation.vue'
export default {
  name: 'App',
  components: {
    SearchBar,
    Carousels,
    Navigation
  },

  data: () => ({}),
};
</script>
