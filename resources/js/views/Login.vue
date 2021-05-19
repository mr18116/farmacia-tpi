<template>
  <div>
      <v-main>
        <v-container class="fill-height" fluid>
            <v-row align="center" justify="center">
                <v-col cols="12" sm="10" md="8" lg="6">
                    <v-card class="elevation-12">
                        <v-window v-model="step">
                            <v-window-item :value="1">
                                <v-row>
                                    <v-col cols="12" md="8">
                                    <v-card-text class="mt-12">
                                        <h1
                                        class="text-center display-2 teal--text text--accent-3"
                                        >Iniciar Sesión</h1>
                                        <h4 class="text-center mt-4">Ingrese sus credenciales</h4>
                                        <v-form>
                                            <v-text-field v-model="user.email" label="email"></v-text-field>
                                            <v-text-field v-model="user.password" label="contraseña" type="password"></v-text-field>
                                        </v-form>
                                        <h6 class="text-center mt-3">Olvidé mi contraseña</h6>
                                    </v-card-text>
                                    <div class="text-center py-4">
                                        <v-btn rounded color="teal accent-3" class="py-1" dark @click="login">INICIAR SESIÓN</v-btn>
                                    </div>
                                    </v-col>
                                    <v-col cols="12" md="4" class="teal accent-3">
                                    <v-card-text class="white--text mt-12">
                                        <h1 class="text-center display-1">¿Nuevo?</h1>
                                        <h5
                                        class="text-center"
                                        >Registrate y disfruta de nuestras ofertas</h5>
                                    </v-card-text>
                                    <div class="text-center py-4">
                                        <v-btn small to="/register" rounded outlined dark @click="step++">REGISTRARME</v-btn>
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
                    <v-btn to="/">Inicio</v-btn>
                </v-col>
            </v-row>
        </v-container>
      </v-main>
  </div>
</template>

<script>
import axios from 'axios';

axios.defaults.withCredentials = true;

export default {
    data: () => ({
        user: {
            email: '',
            password: '',
        }
    }),
    methods: {
        login(){
            axios.get("/sanctum/csrf-cookie").then(response => {
                axios.post('/login', this.user).then(async response => {
                    await this.$store.dispatch('getUser');
                    this.$router.replace('/');
                })
            })
        }
    },
}
</script>

<style>

</style>