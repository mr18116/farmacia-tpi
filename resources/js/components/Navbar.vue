<template>
    <v-row align="center">
        <v-app-bar-nav-icon
            @click="$store.state.drawer = !$store.state.drawer"
        ></v-app-bar-nav-icon>
        <router-link to="/">
            <v-toolbar-title flat class="text-uppercase grey--text mainHeader">
                <span>Farmacia</span>
                <span class="font-weight-bold">Online</span>
            </v-toolbar-title>
        </router-link>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-xs-only">
            <v-btn
                text
                color="grey darken-3"
                to="/login"
                v-if="$store.state.user == null"
            >
                <span class="mr-2">Iniciar Sesión</span>
                <v-icon color="grey darken-3">mdi-account</v-icon>
            </v-btn>
            <v-btn
                text
                color="grey darken-3"
                to="/register"
                v-if="$store.state.user == null"
            >
                <span class="mr-2">Registrarse</span>
                <v-icon color="grey darken-3">mdi-account</v-icon>
            </v-btn>
            <v-btn
                text
                color="grey darken-3"
                v-if="$store.state.user != null"
                @click="logout"
            >
                <span>Cerrar sesión</span>
                <v-icon color="grey darken-3">mdi-logout</v-icon>
            </v-btn>
            <v-icon class="px-2">mdi-cart</v-icon>
        </v-toolbar-items>
        <div class="hidden-sm-and-up">
            <v-menu offset-y>
                <template v-slot:activator="{ on }">
                    <v-app-bar-nav-icon v-on="on"
                        ><v-icon color="grey darken-3"
                            >mdi-account</v-icon
                        ></v-app-bar-nav-icon
                    >
                </template>
                <v-list class="responsiveMenu">
                    <v-list-item v-if="$store.state.user == null">
                        <v-list-item-title
                            ><router-link to="/login"
                                >Iniciar Sesión</router-link
                            ></v-list-item-title
                        >
                    </v-list-item>
                    <v-list-item v-if="$store.state.user == null">
                        <v-list-item-title
                            ><router-link to="/register"
                                >Registrarse</router-link
                            ></v-list-item-title
                        >
                    </v-list-item>
                    <v-list-item
                        v-if="$store.state.user != null"
                        @click="logout"
                    >
                        <v-list-item-title
                            ><router-link to="/register"
                                >Cerrar sesión</router-link
                            ></v-list-item-title
                        >
                    </v-list-item>
                </v-list>
            </v-menu>
        </div>
    </v-row>
</template>
<script>
import axios from "axios";

axios.defaults.withCredentials = true;

export default {
    methods: {
        logout() {
            axios.get("/sanctum/csrf-cookie").then(response => {
                axios.post("/logout").then(async response => {
                    await this.$store.dispatch("getUser");
                });
            });
        }
    }
};
</script>
<style>
   a:hover{
        text-decoration: none;
    }
</style>
