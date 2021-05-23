<template>
  <div>
      <v-data-table
            :headers="headers"
            :items="categorias"
            :items-per-page="5"
            class="elevation-1"
        >
            <template v-slot:top>
                <v-toolbar
                    flat
                >
                    <v-toolbar-title class="text-h5">Categorias</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-btn color="primary" dark>
                        Agregar Categoria
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
            { text: 'Nombre', value: 'nombre', sorteable: true },
            { text: 'Acciones', value: 'actions', sortable: false },
        ],
        categorias: [],
    }),
    created(){
        axios.get('/api/categoria').then( response => {
            this.categorias = response.data;
        });
    }

}
</script>

<style>

</style>