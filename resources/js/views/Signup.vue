<template>
  <div>
      <v-row justify="center">
          <v-col cols="12" sm="10" md="8" lg="6">
              <v-card>
                  <v-card-title>Registrar</v-card-title>
                <v-card-text>
                    <v-form>
                        <v-text-field v-model="user.name" label="Nombre"></v-text-field>
                        <v-text-field v-model="user.email" label="email"></v-text-field>
                        <v-text-field v-model="user.password" label="contraseña" type="password"></v-text-field>
                        <v-text-field v-model="user.password_confirmation" label="Confirmar contraseña" type="password"></v-text-field>
                    </v-form>
                    <v-btn block color="green" @click="signup">Registrar</v-btn>
                    <v-divider></v-divider>
                    <span>Ya tiene cuenta?</span> 
                    <v-btn small to="/login" color="blue">Iniciar sesión</v-btn>
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