<template>
    <div>
        <v-data-table
            :headers="headers"
            :items="tipos"
            :items-per-page="5"
            :search="search"
            class="elevation-1"
        >
            <template v-slot:top>
                <v-toolbar flat>
                    <v-toolbar-title class="text-h5">Tipos</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-btn color="primary" dark @click="nuevoTipo">
                        Agregar Tipo
                    </v-btn>
                </v-toolbar>
                <v-text-field
                        v-model="search"
                        placeholder="Filtrar"
                        prepend-inner-icon="mdi-magnify"
                        class="mx-4"
                        ></v-text-field>
            </template>
            <template v-slot:item.actions="{ item }">
                <v-btn icon @click="editarTipo(item)">
                    <v-icon small class="mr-2">
                        mdi-pencil
                    </v-icon>
                </v-btn>
                <v-btn icon @click="eliminarTipo(item)">
                    <v-icon small>
                        mdi-delete
                    </v-icon>
                </v-btn>
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
export default {
    data: () => ({
        search: '',
        headers: [
            { text: "Nombre", value: "nombre", sorteable: true },
            { text: "Acciones", value: "actions", sortable: false }
        ]
    }),
    props: ["tipos"],
    methods: {
        nuevoTipo() {
            let opciones = {
                titulo: "Nuevo Tipo",
                disabled: false,
                btn_guardar: true,
                btn_texto: "Guardar",
                categoriaOTipo: "tipo",
                editar: false
            };
            this.$emit("nuevaCategoria", opciones);
        },
        editarTipo(item) {
            let opciones = {
                titulo: "Editar Tipo",
                disabled: false,
                btn_guardar: true,
                btn_texto: "Guardar",
                categoriaOTipo: "tipo",
                editar: true
            };
            this.$emit("editarCategoria", item, opciones);
        },
        eliminarTipo(item) {
            this.$emit("eliminarCategoria", item, "tipo");
        }
    }
};
</script>

<style></style>
