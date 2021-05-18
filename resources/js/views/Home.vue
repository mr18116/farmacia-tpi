<template>
    <div>
        <v-btn color="green" to="/login">Iniciar sesion</v-btn>
        <v-btn color="green" to="/register">Registrar</v-btn>
        <v-btn v-if="$store.state.user != null" color="red" @click="logout">Cerrar sesion</v-btn>
    </div>
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

<style lang="scss" scoped>

</style>