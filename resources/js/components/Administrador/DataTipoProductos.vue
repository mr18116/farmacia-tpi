<template>
  <div>
      <v-data-table
            :headers="headers"
            :items="tipos"
            :items-per-page="5"
            class="elevation-1"
        >
            <template v-slot:top>
                <v-toolbar
                    flat
                >
                    <v-toolbar-title class="text-h5">Tipos</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-btn color="primary" dark>
                        Agregar Tipo
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
export default {
    data: () => ({
        headers: [
            { text: 'Nombre', value: 'nombre', sorteable: true },
            { text: 'Acciones', value: 'actions', sortable: false },
        ],
        tipos: [],
    }),
    created(){
        axios.get('/api/tipo_producto').then( response => {
            this.categorias = response.data;
        });
    }
}
</script>

<style>

</style>