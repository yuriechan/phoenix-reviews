<template>
  <v-app>
    <v-content>
       <SearchBar/>
       <Carousels/>
    </v-content>
  </v-app>
</template>

<script>
import SearchBar from '@/components/SearchBar.vue'
import Carousels from '@/components/Carousels.vue'
export default {
  name: 'App',
  components: {
    SearchBar,
    Carousels
  },

  data: () => ({}),
};
</script>
