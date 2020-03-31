<template>
        <v-card>
            <v-toolbar color="purple" dark flat>
                <v-text-field class="mx-4" rounded flat hide-details label="Search" :prepend-inner-icon="icon" solo-inverted></v-text-field>
                <v-spacer></v-spacer>
                <v-dialog v-model="dialog" persistent max-width="600px">
                    <template v-slot:activator="{ on }">
                        <v-btn text v-on="on">
                            <span>
                                Login
                            </span>
                        </v-btn>
                    </template>
                    <v-card>
                        <v-card-title>
                            <span class="headline">
                                Welcome
                            </span>
                        </v-card-title>
                        <v-card-text>
                            <v-container>
                                <v-row>
                                    <v-col cols="12">
                                        <v-text-field label="Email*" required></v-text-field>
                                    </v-col>
                                    <v-col cols="12">
                                        <v-text-field label="Password*" type="password" required></v-text-field>
                                    </v-col>
                                </v-row>
                            </v-container>
                            <small>
                                *indicates required field
                            </small>
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="blue darken-1" text @click="dialog = false">
                                Don't have an account?
                            </v-btn>
                            <v-btn color="blue darken-1" text @click="dialog = false">
                                Log in
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                    <v-card>
                        <v-card-title>
                            <span class="headline">
                                Let's get stated
                            </span>
                        </v-card-title>
                        <v-card-text>
                            <v-container>
                                <v-row>
                                    <v-col cols="12" sm="6">
                                        <v-text-field label="First Name*"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6">
                                        <v-text-field label="Last Name*"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6">
                                        <v-text-field label="Username*"></v-text-field>
                                    </v-col>
                                    <v-col cols="12">
                                        <v-text-field label="Email*" required></v-text-field>
                                    </v-col>
                                    <v-col cols="12">
                                        <v-text-field label="Password*" type="password" required></v-text-field>
                                    </v-col>
                                </v-row>
                            </v-container>
                            <small>
                                *indicates required field
                            </small>
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="blue darken-1" text @click="dialog = false">
                                Already have an account?
                            </v-btn>
                            <v-btn color="blue darken-1" text @click="dialog = false">
                                Sign up
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog> 
            </v-toolbar>
        </v-card>
</template>

<script>
import { mdiMagnify } from '@mdi/js'  
export default {
    data: () => ({
        icon: mdiMagnify,
        dialog: false
    })
}
</script>

<style scoped>

</style>