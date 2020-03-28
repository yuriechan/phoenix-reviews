<template>
    <v-card>
        <v-toolbar color="purple" dark flat>
            <v-text-field class="mx-4" flat hide-details label="Search" :prepend-inner-icon="icon" solo-inverted></v-text-field>
        </v-toolbar>
    </v-card>
</template>

<script>
import { mdiMagnify } from '@mdi/js'  
export default {
    data: () => ({
        icon: mdiMagnify
    })
}
</script>

<style scoped>
</style>