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
                    <v-btn color="primary" @click="nuevoEnvio" dark>
                        Agregar Forma
                    </v-btn>
                </v-toolbar>
            </template>
            <template v-slot:item.actions="{ item }">
                <v-icon small class="mr-2" @click="editarModal(item)">
                    mdi-pencil
                </v-icon>
                <v-icon small @click="eliminarItem(item)">
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
            { text: 'Empresa', value: 'empresa', sorteable: true },
            { text: 'Acciones', value: 'actions', sortable: false },
        ],
    }),
    props: ["formas"],
    methods:{
        nuevoEnvio() {
            let opciones = {
                titulo: "Nuevo Tipo",
                disabled: false,
                btn_guardar: true,
                btn_texto: "Guardar",
                categoriaOTipo: "envio",
                editar: false
            };
            this.$emit("nuevoPagoOEnvio", opciones);
        },
        editarModal(item){
             let opciones = {
                titulo: "Editar forma de envio",
                disabled: false,
                btn_guardar: true,
                btn_texto: "Guardar",
                categoriaOTipo: "envio",
                editar: true
            };
            let item2 = {
                id: item.id,
                nombre: item.empresa,
            }
            this.$emit("editarModal", item2, opciones);
        },
        eliminarItem(item){
            this.$emit("eliminarItem", item, "envio")
        }
    },
}
</script>

<style>

</style>