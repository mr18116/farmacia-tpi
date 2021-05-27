<template>
        <v-container class="fill-height" fluid >
                <v-app-bar
                    app
                    dark
                    class="px-5"
                    >
                <a href="/"><v-img class="mb-n1 mx-auto" src="https://firebasestorage.googleapis.com/v0/b/farmacia-tpi.appspot.com/o/Banner%2Flogotpi.png?alt=media&token=439d43f4-e37a-4a4e-bb0e-25e7e6efcc05" max-width="200px" /></a>
                </v-app-bar>
            <v-row class="mg" align="center" justify="center">
                <v-col cols="12" sm="10" md="8" lg="6">
                    <v-card class="elevation-12">
                        <v-window>
                            <v-window-item :value="1">
                                <v-row>
                                    <v-col cols="12" md="8">
                                    <v-card-text class="mt-12">
                                        <h1
                                        class="text-center display-2 light-blue--text text--darken-3"
                                        >Iniciar Sesión</h1>
                                        <h4 class="text-center mt-4">Ingrese sus credenciales</h4>
                                        <v-form>
                                            <v-text-field v-model="user.email" label="email"></v-text-field>
                                            <v-text-field v-model="user.password" label="contraseña" type="password"></v-text-field>
                                        </v-form>
                                        <h6 class="text-center mt-3">Olvidé mi contraseña</h6>
                                    </v-card-text>
                                    <div class="text-center py-4">
                                        <v-btn rounded color="light-blue darken-2" class="py-1" dark @click="login">INICIAR SESIÓN</v-btn>
                                    </div>
                                    </v-col>
                                    <v-col cols="12" md="4" class="light-blue darken-1">
                                    <v-card-text class="white--text mt-12">
                                        <h1 class="text-center display-1">¿Nuevo?</h1>
                                        <h5
                                        class="text-center"
                                        >Registrate y disfruta de nuestras ofertas</h5>
                                    </v-card-text>
                                    <div class="text-center py-4">
                                        <v-btn small to="/register" rounded outlined dark>REGISTRARME</v-btn>
                                    </div>
                                    </v-col>
                                </v-row>
                            </v-window-item>
                        </v-window>
                    </v-card>
                </v-col>
            </v-row>
            <Loader :cargando="cargando"/>
        </v-container>
</template>

<script>
import Loader from "../components/Loader"
import axios from 'axios';
axios.defaults.withCredentials = true;

export default {
    data: () => ({
        drawer: null,
        user: {
            email: '',
            password: '',
        },
        cargando: false
    }),
    methods: {
        login(){
            axios.get("/sanctum/csrf-cookie").then(response => {
                this.cargando = true
                axios.post('/login', this.user).then(async response => {
                    await this.$store.dispatch('getUser');
                    this.cargando = false;
                    this.$router.replace('/');
                });
            });
        }
    },
    components:{
        Loader
    }
}
</script>

<style>
.mg{
    padding: 80px 0 20px 0;
}
</style>