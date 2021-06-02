<template>
  <v-container fluid>
       <v-app-bar color="#0077c9" class="px-5"> </v-app-bar>
        <v-row align="center">
            <v-col cols="12" class="text-h1">
                Ventas
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <v-data-table 
                :headers="headers"
                :items="ventas"
                :items-per-page="10"
                class="elevation-1">
                    <template v-slot:no-data>
                        No hay datos
                    </template>
                </v-data-table>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12" md="6">
                <DataMetodosPago />
            </v-col>
            <v-col cols="12" md="6">
                <DataFormasEnvio />
            </v-col>
        </v-row>
  </v-container>
</template>

<script>
import DataMetodosPago from '../../components/Administrador/DataMetodosPago';
import DataFormasEnvio from '../../components/Administrador/DataFormasEnvio';

export default {
    components: {
        DataMetodosPago,
        DataFormasEnvio,
    },
    data: () => ({
        headers: [
            { text: 'Fecha', value: 'created_at', sorteable: true },
            { text: 'Usuario', value: 'user.name', sortable: true },
            { text: 'Metodo de pago', value: 'metodo_pagos.tipo', sortable: true },
            { text: 'Forma de envio', value: 'formas_envios.empresa', sortable: true },
            { text: 'Total', value: 'total', sortable: true },
        ],
        ventas: [],
    }),
    created(){
        axios.get('/api/factura').then( response => {
            this.ventas = response.data;
        });
    }
}
</script>

<style>

</style>