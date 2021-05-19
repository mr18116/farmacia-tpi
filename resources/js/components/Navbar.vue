<template>
    <nav>
        <v-toolbar flat>
            <v-toolbar-title class="text-uppercase grey--text">
            <span>Farmacia</span>
            <span class="font-weight-bold">Online</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn
            text color="grey darken-3"
            to="/login"
            >
            <span class="mr-2">Iniciar Sesión</span>
            <v-icon color="grey darken-3" >mdi-account</v-icon>
            </v-btn>
            <v-btn
            text color="grey darken-3"
            to="/register"
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
        </v-toolbar>
    </nav>
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