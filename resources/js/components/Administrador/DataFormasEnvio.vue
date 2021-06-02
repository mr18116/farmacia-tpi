<template>
  <div>
      <v-data-table
            :headers="headers"
            :items="formas"
            :items-per-page="5"
            class="elevation-1"
        >
            <template v-slot:top>
                <v-toolbar
                    flat
                >
                    <v-toolbar-title class="text-h5">Formas de envio</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-btn color="primary" dark>
                        Agregar Forma
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
            { text: 'Empresa', value: 'empresa', sorteable: true },
            { text: 'Acciones', value: 'actions', sortable: false },
        ],
        formas: [],
    }),
    created(){
        axios.get('/api/formas_envio').then( response => {
            this.formas = response.data;
        });
    }
}
</script>

<style>

</style>