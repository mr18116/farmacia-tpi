<template>
  <div>
      <v-data-table
            :headers="headers"
            :items="metodos"
            :items-per-page="5"
            class="elevation-1"
        >
            <template v-slot:top>
                <v-toolbar
                    flat
                >
                    <v-toolbar-title class="text-h5">Metodos de pago</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-btn color="primary" dark>
                        Agregar Metodo
                    </v-btn>
                </v-toolbar>
            </template>
            <template v-slot:item.actions="{ item }">
                <v-icon small class="mr-2">
                    mdi-pencil
                </v-icon>
                <v-icon small>
                    mdi-delete
                </v-icon>
            </template>
            <template v-slot:no-data>
                No hay datos
            </template>
        </v-data-table>
  </div>
</template>

<script>
import axios from 'axios';

export default {
    data: () => ({
        headers: [
            { text: 'Tipo', value: 'tipo', sorteable: true },
            { text: 'Acciones', value: 'actions', sortable: false },
        ],
        metodos: [],
    }),
    created(){
        axios.get('/api/metodo_pago').then( response => {
            this.metodos = response.data;
        });
    }
}
</script>

<style>

</style>