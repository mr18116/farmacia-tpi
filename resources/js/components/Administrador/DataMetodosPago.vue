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
                    <v-btn color="primary" @click="nuevoPago" dark>
                        Agregar Metodo
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
            { text: 'Tipo', value: 'tipo', sorteable: true },
            { text: 'Acciones', value: 'actions', sortable: false },
        ],
    }),
    props: ["metodos"],
    methods:{
        nuevoPago() {
            let opciones = {
                titulo: "Nuevo método de pago",
                disabled: false,
                btn_guardar: true,
                btn_texto: "Guardar",
                categoriaOTipo: "pago",
                editar: false
            };
            this.$emit("nuevoPagoOEnvio", opciones);
        },
        editarModal(item){
             let opciones = {
                titulo: "Editar método de pago",
                disabled: false,
                btn_guardar: true,
                btn_texto: "Guardar",
                categoriaOTipo: "pago",
                editar: true
            };
            let item2 = {
                id: item.id,
                nombre: item.tipo,
            }
            this.$emit("editarModal", item2, opciones);
        },
        eliminarItem(item){
            this.$emit("eliminarItem", item, "pago")
        }
    },
}
</script>

<style>

</style>