<template>
            <v-container class="fill-height" fluid>
                    <v-app-bar
                    app
                    :color="color"
                    :flat="flat"
                    dark
                    class="px-5"
                    :class="{ expand: flat }"
                    >
                <a href="/"><v-img class="mb-n1 mx-auto" src="https://firebasestorage.googleapis.com/v0/b/farmacia-tpi.appspot.com/o/Banner%2Flogotpi.png?alt=media&token=439d43f4-e37a-4a4e-bb0e-25e7e6efcc05" max-width="200px" /></a>
                <v-spacer /> 
                <v-app-bar-nav-icon
                    @click.stop="drawer = !drawer"
                    class="mr-4"
                    v-if="isXs"
                />
                </v-app-bar>
                <v-row class="mg" align="center" justify="center">
                    <v-col cols="12" sm="10" md="8" lg="6">
                        <v-card class="elevation-12">
                            <v-window>
                                <v-window-item :value="2">
                                    <v-row class="fill-height">
                                        <v-col cols="12" md="4" class="light-blue darken-1">
                                        <v-card-text class="white--text mt-12">
                                            <h1 class="text-center display-1">¿Ya tienes cuenta?</h1>
                                            <h5
                                            class="text-center"
                                            >Ingresa tus credenciales</h5>
                                        </v-card-text>
                                        <div class="text-center">
                                            <v-btn small to="/login" rounded outlined dark @click="step--">INICIAR SESIÓN</v-btn>
                                        </div>
                                        </v-col>

                                        <v-col cols="12" md="8">
                                        <v-card-text class="mt-12">
                                            <h1 class="text-center display-2 light-blue--text text--darken-3">Crear cuenta</h1>
                                            <h4 class="text-center mt-4">Ingresa tus datos de registro</h4>
                                            <v-form>
                                            <v-text-field v-model="user.name" label="Nombre"></v-text-field>
                                            <v-text-field v-model="user.email" label="email"></v-text-field>
                                            <v-text-field v-model="user.password" label="contraseña" type="password"></v-text-field>
                                            <v-text-field v-model="user.password_confirmation" label="Confirmar contraseña" type="password"></v-text-field>
                                        </v-form>
                                        </v-card-text>
                                        <div class="text-center py-4">
                                            <v-btn rounded color="light-blue darken-2" dark @click="signup">REGISTRARSE</v-btn>
                                        </div>
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
    }),
    methods: {
        signup(){
            axios.get("/sanctum/csrf-cookie").then(response => {
                axios.post('/register', this.user).then(async response => {
                    await this.$store.dispatch('getUser');
                    await axios.post('/api/tipo_usuario', {
                        rol: 'cliente',
                        user_id: this.$store.state.user.id
                    });
                    this.$router.replace('/');
                });
            });
        }
    },
}
</script>

<style>
.mg{
    padding: 80px 0 20px 0;
}
</style>