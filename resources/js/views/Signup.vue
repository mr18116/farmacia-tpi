<template>
            <v-container class="fill-height" fluid>
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
                                <v-window-item :value="2">
                                    <v-row class="fill-height" v-if="registrando == false">
                                        <v-col cols="12" md="4" class="light-blue darken-1">
                                        <v-card-text class="white--text mt-12">
                                            <h1 class="text-center display-1">¿Ya tienes cuenta?</h1>
                                            <h5
                                            class="text-center"
                                            >Ingresa tus credenciales</h5>
                                        </v-card-text>
                                        <div class="text-center">
                                            <v-btn small to="/login" rounded outlined dark>INICIAR SESIÓN</v-btn>
                                        </div>
                                        </v-col>

                                        <v-col cols="12" md="8">
                                        <v-card-text class="mt-12">
                                            <h1 class="text-center display-2 light-blue--text text--darken-3">Crear cuenta</h1>
                                            <h4 class="text-center mt-4">Ingresa tus datos de registro</h4>
                                            <v-form>
                                            <v-text-field v-model="user.name" label="Nombre" 
                                            @focus="focusInput" :rules="rules.nombre" required></v-text-field>
                                            <v-text-field v-model="user.email" label="email" 
                                            @focus="focusInput" :rules="rules.email" required></v-text-field>
                                            <v-text-field v-model="user.password" label="contraseña" type="password" 
                                            @focus="focusInput" :rules="rules.password" required></v-text-field>
                                            <v-text-field v-model="user.password_confirmation" label="Confirmar contraseña" type="password"
                                             @focus="focusInput" :rules="rules.password" required></v-text-field>
                                        </v-form>
                                        <v-alert dense type="error" outlined v-if="mensajeError != ''">
                                            {{ mensajeError }}
                                        </v-alert>
                                        </v-card-text>
                                        <div class="text-center py-4">
                                            <v-btn rounded color="light-blue darken-2" dark @click="signup">REGISTRARSE</v-btn>
                                        </div>
                                        </v-col>
                                    </v-row>
                                    <v-row align="center" v-else>
                                    <v-col cols="12" class="light-blue darken-1 text-center py-16">
                                        <h1
                                        class="display-2 white--text my-4"
                                        >Registrando</h1>
                                        <v-progress-circular
                                            :size="60"
                                            color="white"
                                            indeterminate
                                            class="mt-4"
                                            ></v-progress-circular>
                                    </v-col>
                                </v-row>
                                </v-window-item>
                            </v-window>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
</template>

<script>
import Loader from "../components/Loader"
import axios from 'axios';

axios.defaults.withCredentials = true;

export default {
    data: () => ({
        user: {
            name: '',
            email: '',
            password: '',
            password_confirmation: '',
        },
        cargando: false,
        registrando: false,
        mensajeError: '',
        rules: {
          nombre: [val => (val || '').length > 0 || 'Este campo es requerido'],
          password: [val => (val || '').length >= 8 || 'La contraseña debe ser de 8 caracteres como minimo'],
          email: [ v => !v || /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'Debe ser formato email: ejemplo@ejemplo.com']
        },
    }),
    methods: {
        signup(){
            axios.get("/sanctum/csrf-cookie").then(response => {
                 this.cargando = true;
                 this.registrando = true;
                axios.post('/register', this.user).then(async response => {
                    await axios.get('/api/user').then( async res => {
                        await axios.post('/api/tipo_usuario', {
                            rol: 'cliente',
                            user_id: res.data.id
                        });
                        await axios.post('api/carrito', {
                            user_id: res.data.id
                        });
                    });
                    await this.$store.dispatch('getUser');
                     this.cargando = false;
                    this.$router.replace('/');
                    this.registrando = false;
                }).catch( e => {
                    this.mensajeError = "Datos inválidos";
                    this.registrando = false;
                });
            });
        },
        focusInput(){
            if (this.mensajeError != '') {
                this.mensajeError = '';
            }
        }
    },
    components: {
        Loader
    }
}
</script>

<style>
.mg{
    padding: 80px 0 20px 0;
}
</style>