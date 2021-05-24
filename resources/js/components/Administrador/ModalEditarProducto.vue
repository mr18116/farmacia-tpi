<template>
    <div>
        <v-dialog v-model="editar" persistent max-width="vh">
            <v-card>
                <v-card-title>
                    <span class="headline">Editar</span>
                </v-card-title>
                <v-card-text>
                    <v-container>
                        <v-row>
                            <v-col
                                cols="12"
                                sm="4"
                                md="4"
                                v-if="nuevaImagenUrl == ''"
                            >
                                <v-img :src="producto.imagen_url"></v-img>
                                <v-file-input
                                    label="File input"
                                    filled
                                    prepend-icon="mdi-camera"
                                    v-model="nuevaImagen"
                                ></v-file-input>
                            </v-col>
                            <v-col cols="12" sm="4" md="4" v-else>
                                <v-img :src="nuevaImagenUrl"></v-img>
                                <v-file-input
                                    label="File input"
                                    filled
                                    prepend-icon="mdi-camera"
                                    v-model="nuevaImagen"
                                ></v-file-input>
                            </v-col>
                            <v-col cols="12" sm="8">
                                <v-row>
                                    <v-col cols="12" sm="2">
                                        <v-text-field
                                            label="ID"
                                            disabled
                                            v-model="producto.id"
                                        ></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="10">
                                        <v-text-field
                                            label="Nombre"
                                            :disabled="opciones.disabled"
                                            v-model="producto.nombre"
                                        ></v-text-field>
                                    </v-col>
                                    <v-col cols="12">
                                        <v-textarea
                                            label="Descripcion"
                                            :disabled="opciones.disabled"
                                            v-model="producto.descripcion"
                                        ></v-textarea>
                                    </v-col>
                                    <v-col cols="12" sm="6">
                                        <v-text-field
                                            label="Precio"
                                            :disabled="opciones.disabled"
                                            v-model="producto.precio"
                                        ></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6">
                                        <v-text-field
                                            label="Cantidad"
                                            :disabled="opciones.disabled"
                                            v-model="producto.cantidad"
                                            type="number"
                                        ></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6">
                                        <v-select                                            
                                            item-text="state"
                                            item-value="abbr"
                                            label="Categoria"
                                            persistent-hint
                                            return-object
                                            single-line
                                        ></v-select>
                                    </v-col>
                                    <v-col cols="12" sm="6">
                                        <v-select                                            
                                            item-text="state"
                                            item-value="abbr"
                                            label="Tipo"
                                            persistent-hint
                                            return-object
                                            single-line
                                        ></v-select>
                                    </v-col>
                                    <v-col cols="12">
                                        <v-text-field
                                            label="Laboratorio"
                                            :disabled="opciones.disabled"
                                            v-model="producto.laboratorio"
                                        ></v-text-field>
                                    </v-col>
                                    <v-col cols="12">
                                        <v-textarea
                                            label="Indicaciones"
                                            :disabled="opciones.disabled"
                                            v-model="producto.indicaciones"
                                        ></v-textarea>
                                    </v-col>
                                </v-row>
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
                        v-if="opciones.btn_editar"
                        color="blue darken-1"
                        text
                        @click="editarProducto"
                    >
                        {{ opciones.btn_texto }}
                    </v-btn>
                    <v-btn
                        v-if="opciones.btn_guardar"
                        color="blue darken-1"
                        text
                        @click="guardarProducto"
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
    data: () => ({
        nuevaImagen: null,
        nuevaImagenUrl: ""
    }),
    props: ["editar", "producto", "opciones"],
    methods: {
        cerrarModal: function() {
            this.$emit("cerrarModal");
            this.nuevaImagen = null;
            this.nuevaImagenUrl = "";
        },
        guardarProducto() {
            this.$emit("guardarProducto");
        },
        editarProducto() {
            this.$emit("editarProducto", this.producto);
            this.nuevaImagen = null;
            this.nuevaImagenUrl = "";
        }
    },
    watch: {
        nuevaImagen: function() {
            this.nuevaImagenUrl = URL.createObjectURL(this.nuevaImagen);
            console.log(this.nuevaImagenUrl);
        }
    }
};
</script>

<style lang="scss" scoped></style>
