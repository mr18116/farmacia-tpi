<template>
    <v-row align="center">
            <v-app-bar-nav-icon @click="$store.state.drawer = !$store.state.drawer"></v-app-bar-nav-icon>
            <v-toolbar-title class="text-uppercase grey--text">
            <span>Farmacia</span>
            <span class="font-weight-bold">Online</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn
            text color="grey darken-3"
            to="/login"
            v-if="$store.state.user == null"
            >
            <span class="mr-2">Iniciar Sesión</span>
            <v-icon color="grey darken-3" >mdi-account</v-icon>
            </v-btn>
            <v-btn
            text color="grey darken-3"
            to="/register"
            v-if="$store.state.user == null"
            >
            <span class="mr-2">Registrarse</span>
            <v-icon color="grey darken-3" >mdi-account</v-icon>
            </v-btn>
            <v-btn
            text color="grey darken-3"
            v-if="$store.state.user != null" @click="logout">
            <span>Cerrar sesión</span>
            <v-icon color="grey darken-3" >mdi-logout</v-icon>
            </v-btn>
            <v-icon class="px-2">mdi-cart</v-icon>  
    </v-row>
</template>
<script>
import axios from 'axios';

axios.defaults.withCredentials = true;

    export default {
        methods: {
        logout(){
            axios.get("/sanctum/csrf-cookie").then((response) => {
                axios.post("/logout").then(async response => {
                    await this.$store.dispatch('getUser');
                });
            });
        }
    }
    }
</script>