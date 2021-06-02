<template>
  <v-container fluid>
       <v-app-bar color="#0077c9" class="px-5"> </v-app-bar>
        <v-row align="center">
            <v-col cols="12" class="text-h1">
                Compras
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <v-data-table 
                :headers="headers"
                :items="compras"
                :items-per-page="10"
                class="elevation-1">
                    <template v-slot:no-data>
                        No hay datos
                    </template>
                </v-data-table>
            </v-col>
        </v-row>
  </v-container>
</template>

<script>
export default {
    data: () => ({
        headers: [
            { text: 'Fecha', value: 'created_at', sorteable: true },
            { text: 'Direcion', value: 'direccion', sortable: true },
            { text: 'Metodo de pago', value: 'metodo_pagos.tipo', sortable: true },
            { text: 'Forma de envio', value: 'formas_envios.empresa', sortable: true },
            { text: 'Total', value: 'total', sortable: true },
        ],
        compras: [],
    }),
    created(){
        if (this.$store.state.user != null) {
            axios.get('/api/facturas-user/' + this.$store.state.user.id).then( response => {
                this.compras = response.data;
            });
        }
    },
    watch: {
        '$store.state.user'(n, o){
            if (this.$store.state.user != null) {
            axios.get('/api/facturas-user/' + this.$store.state.user.id).then( response => {
                this.compras = response.data;
            });
        }
        }
    }
}
</script>

<style>

</style>