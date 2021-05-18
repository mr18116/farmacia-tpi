<template>
  <div>
      <v-row justify="center">
          <v-col cols="12" sm="10" md="8" lg="6">
              <v-card>
                  <v-card-title>Iniciar Sesión</v-card-title>
                <v-card-text>
                    <v-form>
                        <v-text-field v-model="user.email" label="email"></v-text-field>
                        <v-text-field v-model="user.password" label="contraseña" type="password"></v-text-field>
                    </v-form>
                    <v-btn block color="green" @click="login">Iniciar Sesión</v-btn>
                    <v-divider></v-divider>
                    <span>No tiene cuenta?</span> 
                    <v-btn small to="/register" color="blue">Registrarse</v-btn>
                </v-card-text>
                </v-card>
          </v-col>
      </v-row>
      <v-row justify="center">
          <v-col cols="auto">
              <v-btn to="/">Inicio</v-btn>
          </v-col>
      </v-row>
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