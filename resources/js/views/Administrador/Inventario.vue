<template>
    <v-container fluid>
        <v-app-bar color="#0077c9" class="px-5"> </v-app-bar>
        <v-row align="center">
            <v-col cols="12" class="text-h1">
                Inventario
            </v-col>
            <v-col cols="12" sm="4">
                <v-btn block color="green" @click="nuevoProductoModal"
                    ><v-icon left>mdi-plus</v-icon>Nuevo Producto</v-btn
                >
            </v-col>
            <v-col cols="12" sm="8">
                <v-text-field
                    background-color="white"
                    outlined
                    prepend-inner-icon="mdi-magnify"
                    hide-details="true"
                    dense
                >
                </v-text-field>
            </v-col>
            <v-col  class="d-flex justify-center" v-if="productos === null">
                <v-progress-circular
                    :size="100"
                    :width="7"
                    color="primary"
                    indeterminate
                    class="my-8"
                ></v-progress-circular>
            </v-col>
        </v-row>
        <v-row>
            <v-col
                cols="6"
                sm="4"
                md="3"
                lg="2"
                v-for="producto in productos"
                :key="producto.id"
            >
                <v-card>
                    <v-app-bar :color="colorCard(producto.cantidad)" flat dense>
                        <v-toolbar-title>
                            <div class="text-subtitle-2">
                                {{ producto.nombre }}
                            </div>
                        </v-toolbar-title>
                        <v-spacer></v-spacer>
                        <v-btn icon @click="editarProductoModal(producto)"
                            ><v-icon>mdi-pencil</v-icon></v-btn
                        >
                        <v-btn icon @click="eliminarItem(producto, 'producto')"
                            ><v-icon>mdi-delete</v-icon></v-btn
                        >
                    </v-app-bar>
                    <v-row align="center" no-gutters>
                        <v-col cols="6">
                            <v-img
                                :src="producto.imagen_url"
                                height="100px"
                                contain
                            ></v-img>
                        </v-col>

                        <v-col cols="6" class="text-center">
                            <div>Precio: {{ producto.precio }}</div>
                            <div>Cantidad: {{ producto.cantidad }}</div>
                            <v-btn
                                x-small
                                color="blue"
                                @click="detalleProductoModal(producto)"
                                >Detalles</v-btn
                            >
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>
            <v-col cols="12">
                <v-pagination
                    v-model="pagina"
                    :length="paginas"
                    @input="cambioPagina"
                >
                </v-pagination>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12" md="6">
                <DataCategorias
                    :categorias="categorias"
                    @nuevaCategoria="nuevaCategoriaOTipo"
                    @editarCategoria="editarCategoriaOTipo"
                    @eliminarCategoria="eliminarItem"
                />
            </v-col>
            <v-col cols="12" md="6">
                <DataTipoProductos
                    :tipos="tipos"
                    @nuevaCategoria="nuevaCategoriaOTipo"
                    @editarCategoria="editarCategoriaOTipo"
                    @eliminarCategoria="eliminarItem"
                />
            </v-col>
        </v-row>
        <ModalEditarProducto
            :editar="editar"
            :producto="productoEditar"
            :opciones="opciones"
            :categorias="categorias"
            :tipos="tipos"
            @activarCargando="activarCargando"
            @editarProductoModal="editarProductoModal"
            @guardarProducto="guardarProducto"
            @cerrarModal="cerrar"
        />
        <ModalCategoria
            :mostrar="mostrarModalCategoriaOTipo"
            :categoriaOTipo="categoriaOTipo"
            :opciones="opciones"
            @guardarCategoriaOTipo="guardarCategoriaOTipo"
            @cerrarModalCategoriaOTipo="cerrarModalCategoriaOTipo"
        />
        <EliminarItem
            :item="itemAEliminar"
            :mostrar="eliminar"
            :tipo="tipoItemAEliminar"
            @cancelarEliminar="cancelarEliminar"
            @confirmarEliminar="confirmarEliminarItem"
        />
        <Loader :cargando="cargando" />
    </v-container>
</template>

<script>
import ModalEditarProducto from "../../components/Administrador/ModalEditarProducto";
import DataCategorias from "../../components/Administrador/DataCategorias";
import DataTipoProductos from "../../components/Administrador/DataTipoProductos";
import ModalCategoria from "../../components/Administrador/ModalCategoria";
import EliminarItem from "../../components/Administrador/EliminarItem";
import Loader from "../../components/Loader";
import axios from "axios";

export default {
    data: () => ({
        productos: null,
        editar: false,
        eliminar: false,
        itemAEliminar: {},
        tipoItemAEliminar: "",
        productoEditar: {},
        pagina: 1,
        paginas: 1,
        allProductos: [],
        nProductosPagina: 12,
        opciones: {},
        mostrarModalCategoriaOTipo: false,
        categoriaOTipo: {},
        opcionesCategoria: {},
        categorias: [],
        tipos: [],
        cargando: false,
    }),
    created() {
        this.obtenerProductos();
        this.obtenerCategorias();
        this.obtenerTipos();
    },
    components: {
        ModalEditarProducto,
        DataCategorias,
        DataTipoProductos,
        ModalCategoria,
        EliminarItem,
        Loader
    },
    methods: {
        obtenerProductos() {
            axios.get("/api/producto").then(response => {
                this.allProductos = response.data;
                this.productos = this.allProductos.slice(
                    0,
                    this.nProductosPagina
                );
                this.paginas = Math.ceil(
                    this.allProductos.length / this.nProductosPagina
                );
            });
        },
        cambioPagina() {
            this.productos = this.allProductos.slice(
                this.nProductosPagina * (this.pagina - 1),
                this.nProductosPagina * this.pagina
            );
        },
        nuevoProductoModal() {
            this.editar = true;
            this.opciones = {
                disabled: false,
                btn_guardar: true,
                btn_texto: "Guardar",
                nuevo: true
            };
        },
        editarProductoModal(producto) {
            this.editar = true;
            this.opciones = {
                disabled: false,
                btn_guardar: true,
                btn_texto: "Guardar",
                nuevo: false
            };
            this.productoEditar = producto;
        },
        detalleProductoModal(producto) {
            this.editar = true;
            this.opciones = {
                disabled: true,
                btn_editar: true,
                btn_texto: "Editar"
            };
            this.productoEditar = producto;
        },
        guardarProducto(producto, id, opcion) {
            if (producto !== null && producto !== undefined) {
                this.cargando = true;
                if (opcion === "nuevo") {
                    axios.post("/api/producto", producto).then(() => {
                        this.cerrar();
                        this.obtenerProductos();
                        this.cargando = false;
                    });
                } else if (opcion === "actualizar") {
                    axios.put(`/api/producto/${id}`, producto).then(() => {
                        this.cerrar();
                        this.obtenerProductos();
                        this.cargando = false;
                    });
                }
            }
        },
        cerrar: function() {
            this.editar = false;
            this.productoEditar = {};
            this.opciones = {};
        },
        nuevaCategoriaOTipo(opciones) {
            this.mostrarModalCategoriaOTipo = true;
            this.opciones = opciones;
        },
        cerrarModalCategoriaOTipo() {
            this.mostrarModalCategoriaOTipo = false;
            this.categoriaOTipo = {};
            this.opciones = {};
        },
        guardarCategoriaOTipo(objeto, opciones) {
            this.mostrarModalCategoriaOTipo = false;
            if (objeto.nombre != "" && objeto.nombre != undefined) {
                this.cargando = true;
                if (
                    opciones.categoriaOTipo === "categoria" &&
                    opciones.editar === false
                ) {
                    axios.post("/api/categoria", objeto).then(res => {
                        this.cerrarModalCategoriaOTipo();
                        this.obtenerCategorias();
                        this.cargando = false;
                    });
                } else if (
                    opciones.categoriaOTipo === "tipo" &&
                    opciones.editar === false
                ) {
                    axios.post("/api/tipo_producto", objeto).then(res => {
                        this.cerrarModalCategoriaOTipo();
                        this.obtenerTipos();
                        this.cargando = false;
                    });
                } else if (
                    opciones.categoriaOTipo === "categoria" &&
                    opciones.editar === true
                ) {
                    axios
                        .put(`api/categoria/${objeto.id}`, objeto)
                        .then(res => {
                            this.cerrarModalCategoriaOTipo();
                            this.obtenerCategorias();
                            this.cargando = false;
                        });
                } else if (
                    opciones.categoriaOTipo === "tipo" &&
                    opciones.editar === true
                ) {
                    axios
                        .put(`api/tipo_producto/${objeto.id}`, objeto)
                        .then(res => {
                            this.cerrarModalCategoriaOTipo();
                            this.obtenerTipos();
                            this.cargando = false;
                        });
                }
            }
        },
        editarCategoriaOTipo(categoria, opciones) {
            this.mostrarModalCategoriaOTipo = true;
            this.opciones = opciones;
            this.categoriaOTipo = categoria;
        },
        eliminarItem(item, tipo) {
            this.eliminar = true;
            this.itemAEliminar = item;
            this.tipoItemAEliminar = tipo;
        },
        confirmarEliminarItem(item, tipo) {
            if (item !== null) {
                this.cargando = true;
                if (tipo === "categoria") {
                    axios.delete(`/api/categoria/${item.id}`).then(() => {
                        this.obtenerCategorias();
                        this.cancelarEliminar();
                        this.cargando = false;
                    });
                } else if (tipo === "tipo") {
                    axios.delete(`/api/tipo_producto/${item.id}`).then(() => {
                        this.obtenerTipos();
                        this.cancelarEliminar();
                        this.cargando = false;
                    });
                } else if (tipo === "producto") {
                    axios.delete(`/api/producto/${item.id}`).then(() => {
                        this.obtenerProductos();
                        this.cancelarEliminar();
                        this.cargando = false;
                    });
                }
            }
        },
        cancelarEliminar() {
            this.eliminar = false;
            this.itemAEliminar = {};
        },
        colorCard(cantidad) {
            let color = "teal lighten-3";
            if (cantidad == 0) {
                color = "red lighten-1";
            } else if (cantidad > 0 && cantidad <= 10) {
                color = "orange lighten-1";
            }
            return color;
        },
        obtenerCategorias() {
            axios.get("/api/categoria").then(response => {
                this.categorias = response.data;
            });
        },
        obtenerTipos() {
            axios.get("/api/tipo_producto").then(response => {
                this.tipos = response.data;
            });
        },
        activarCargando() {
            this.cargando = true;
        }
    },
    watch: {
        tipos: function() {
            this.cargando = this.tipos !== [] ? false : true;
        }
    }
};
</script>

<style></style>
