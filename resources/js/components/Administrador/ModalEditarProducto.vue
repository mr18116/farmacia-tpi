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
                                            type="number"
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
                                            v-if="opciones.nuevo"
                                            :items="categorias"
                                            v-model="nuevasCategorias"
                                            item-text="nombre"
                                            item-value="id"
                                            label="Categoria"
                                            persistent-hint
                                            single-line
                                            multiple
                                        ></v-select>
                                    </v-col>
                                    <v-col cols="12" sm="6">
                                        <v-select
                                            v-if="opciones.nuevo"
                                            :items="tipos"
                                            v-model="nuevosTipos"
                                            item-text="nombre"
                                            item-value="id"
                                            label="Tipo"
                                            persistent-hint
                                            single-line
                                            multiple
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
import { storage } from "../../firebase";

export default {
    data: () => ({
        nuevaImagen: null,
        nuevaImagenUrl: "",
        nuevasCategorias: [],
        nuevosTipos: []
    }),
    props: ["editar", "producto", "opciones", "categorias", "tipos"],
    methods: {
        cerrarModal: function() {
            this.$emit("cerrarModal");
            this.nuevaImagen = null;
            this.nuevaImagenUrl = "";
        },
        guardarProducto: async function() {
            if (this.nuevaImagen === null && this.opciones.nuevo === false) {
                const id = this.producto.id;
                let productoAGuardar = {
                    nombre: this.producto.nombre,
                    imagen_url: this.producto.imagen_url,
                    descripcion: this.producto.descripcion,
                    precio: this.producto.precio,
                    laboratorio: this.producto.laboratorio,
                    cantidad: this.producto.cantidad,
                    indicaciones: this.producto.indicaciones,
                    idsCtegorias: this.nuevasCategorias,
                    idsTipoProductos: this.nuevosTipos
                };
                this.$emit("guardarProducto", productoAGuardar, id,"actualizar");
            } else if (
                this.nuevaImagen !== null &&
                this.opciones.nuevo === false
            ) {
                await this.subirImagen();
                 const id = this.producto.id;
                let productoAGuardar = {
                    nombre: this.producto.nombre,
                    imagen_url: this.nuevaImagenUrl,
                    descripcion: this.producto.descripcion,
                    precio: this.producto.precio,
                    laboratorio: this.producto.laboratorio,
                    cantidad: this.producto.cantidad,
                    indicaciones: this.producto.indicaciones,
                    idsCtegorias: this.nuevasCategorias,
                    idsTipoProductos: this.nuevosTipos
                };
                this.$emit("guardarProducto", productoAGuardar, id, "actualizar");
            } else if (this.nuevaImagen !== null && this.opciones.nuevo === true) {
                await this.subirImagen();
                 const id = this.producto.id;
                let productoAGuardar = {
                    nombre: this.producto.nombre,
                    imagen_url: this.nuevaImagenUrl,
                    descripcion: this.producto.descripcion,
                    precio: this.producto.precio,
                    laboratorio: this.producto.laboratorio,
                    cantidad: this.producto.cantidad,
                    indicaciones: this.producto.indicaciones,
                    idsCtegorias: this.nuevasCategorias,
                    idsTipoProductos: this.nuevosTipos
                };
                this.$emit("guardarProducto", productoAGuardar, id, "nuevo");
            }
        },
        editarProducto() {
            this.$emit("editarProductoModal", this.producto);
            this.nuevaImagen = null;
            this.nuevaImagenUrl = "";
        },
        subirImagen: async function() {
            const ref = storage.ref();
            const archivoRef = ref.child("Productos/" + this.nuevaImagen.name);
            var task = await archivoRef.put(this.nuevaImagen);
            const urlImage = await task.ref.getDownloadURL();
            this.nuevaImagenUrl = urlImage;
        }
    },
    watch: {
        nuevaImagen: function() {
            this.nuevaImagenUrl = URL.createObjectURL(this.nuevaImagen);
        }
    }
};
</script>

<style lang="scss" scoped></style>
