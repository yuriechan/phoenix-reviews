<template>
  <v-carousel cycle height="400" hide-delimiter-background show-arrows-on-hover>
    <v-carousel-item>
      <v-sheet :color="color" height="100%">
        <v-row class="fill-height" align="center" justify="center">
          <p class="display-3">
            {{ slide }} Slide
          </p>
        </v-row>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
    data() {
        return {
            color: 'deep-purple accent-4',
            slide: 'First',
        }
    }
}
</script>

<style scoped>

</style>