<template>
    <div>
        
            <v-container class="fill-height" fluid>
                <v-row align="center" justify="center">
                    <v-col cols="12" sm="10" md="8" lg="6">
                        <v-card class="elevation-12">
                            <v-window v-model="step">
                                <v-window-item :value="2">
                                    <v-row class="fill-height">
                                        <v-col cols="12" md="4" class="teal accent-3">
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
                                            <h1 class="text-center display-2 teal--text text--accent-3">Crear cuenta</h1>
                                            <h4 class="text-center mt-4">Ingresa tus datos de registro</h4>
                                            <v-form>
                                            <v-text-field v-model="user.name" label="Nombre"></v-text-field>
                                            <v-text-field v-model="user.email" label="email"></v-text-field>
                                            <v-text-field v-model="user.password" label="contraseña" type="password"></v-text-field>
                                            <v-text-field v-model="user.password_confirmation" label="Confirmar contraseña" type="password"></v-text-field>
                                        </v-form>
                                        </v-card-text>
                                        <div class="text-center py-4">
                                            <v-btn rounded color="teal accent-3" dark @click="signup">REGISTRARSE</v-btn>
                                        </div>
                                        </v-col>
                                    </v-row>
                                </v-window-item>
                            </v-window>
                        </v-card>
                    </v-col>
                </v-row>
                <v-row justify="center">
                    <v-col cols="auto">
                        <v-btn rounded color="teal accent-3" to="/"><v-icon>mdi-home</v-icon><span>INICIO</span></v-btn>
                    </v-col>
                </v-row>
            </v-container>
        
    </div>
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

</style>