<template>
    <v-card>
        <v-toolbar color="purple" dark flat>
            <v-text-field class="mx-4" flat hide-details label="Search" :prepend-inner-icon="svgPath" solo-inverted
            ></v-text-field>
            <v-spacer></v-spacer>
            <v-btn text outlined>
                <span class="mr-2">Log in</span>
            </v-btn>
        </v-toolbar>
        
    </v-card>
</template>

<script>
import { mdiMagnify } from '@mdi/js'  
export default {
    data: () => ({
        svgPath: mdiMagnify
    })
}
</script>

<style scoped>
</style>