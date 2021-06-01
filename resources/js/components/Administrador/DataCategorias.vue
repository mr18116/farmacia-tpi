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
                    <v-btn color="primary" @click="nuevaCategoria" dark>
                        Agregar Categoria
                    </v-btn>
                </v-toolbar>
            </template>
            <template v-slot:item.actions="{ item }">
                <v-icon small class="mr-2" @click="editarCategoria(item)">
                    mdi-pencil
                </v-icon>
                <v-icon small @click="eliminarCategoria(item)">
                    mdi-delete
                </v-icon>
            </template>
            <template v-slot:no-data>
                <v-progress-circular
                                :size="100"
                                :width="7"
                                color="primary"
                                indeterminate
                                class="my-8"
                            ></v-progress-circular>
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
    }),
    props: ["categorias"],
    methods:{
        nuevaCategoria(){
            let opciones = {
                titulo: 'Nueva Categoria',
                disabled: false,
                btn_guardar: true,
                btn_texto: "Guardar",
                categoriaOTipo: "categoria",
                editar: false
            };
            this.$emit('nuevaCategoria', opciones);
        }, 
        editarCategoria(item){    
             let opciones = {
                titulo: 'Editar Categoria',
                disabled: false,
                btn_guardar: true,
                btn_texto: "Guardar",
                categoriaOTipo: "categoria",
                editar: true
            };        
            this.$emit('editarCategoria', item, opciones);
        },
        eliminarCategoria(item){
            this.$emit('eliminarCategoria', item, "categoria");
        }
    }

}
</script>

<style>

</style>