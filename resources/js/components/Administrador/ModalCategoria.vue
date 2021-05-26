<template>
    <div>
        <v-dialog v-model="mostrar" persistent>
            <v-card>
                <v-card-title>
                    <span class="headline">{{ opciones.titulo }}</span>
                </v-card-title>
                <v-card-text>
                    <v-container>
                        <v-row>
                            <v-col cols="12">
                                <v-text-field
                                    label="ID"
                                    disabled
                                    v-model="categoriaOTipo.id"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field
                                    label="nombre"
                                    :disabled="opciones.disabled"
                                    v-model="categoriaOTipo.nombre"
                                ></v-text-field>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="cerrarModal">
                        Cerrar
                    </v-btn>
                    <v-btn
                        v-if="opciones.btn_guardar"
                        color="blue darken-1"
                        text
                        @click="guardarCategoriaOTipo"
                    >
                        {{ opciones.btn_texto }}
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
export default {
    props: ["mostrar", "categoriaOTipo", "opciones"],
    methods: {
        cerrarModal() {
            this.$emit("cerrarModalCategoriaOTipo");
        },
        guardarCategoriaOTipo() {
            if (this.opciones.editar === false) {
                let nuevo = {
                    nombre: this.categoriaOTipo.nombre
                };
                this.$emit("guardarCategoriaOTipo", nuevo, this.opciones);
            }else if (this.opciones.editar === true){
                this.$emit("guardarCategoriaOTipo", this.categoriaOTipo, this.opciones)
            }
        }
    }
};
</script>

<style lang="scss" scoped></style>
