<template>
  <v-app>
    <v-content>
       <SearchBar/>
    </v-content>
  </v-app>
</template>

<script>
import SearchBar from '@/components/SearchBar.vue'
export default {
  name: 'App',
  components: {
    SearchBar
  },

  data: () => ({}),
};
</script>
