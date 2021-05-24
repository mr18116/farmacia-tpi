<template>
    <v-container fluid>
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
                        <v-icon>mdi-delete</v-icon>
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
                <v-pagination v-model="page" :length="10"> </v-pagination>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12" md="6">
                <DataCategorias
                    @nuevaCategoria="nuevaCategoriaOTipo"
                    @editarCategoria="editarCategoriaOTipo"
                    @eliminarCategoria="eliminarCategoriaOTipo"
                />
            </v-col>
            <v-col cols="12" md="6">
                <DataTipoProductos
                   @nuevaCategoria="nuevaCategoriaOTipo"
                    @editarCategoria="editarCategoriaOTipo"
                    @eliminarCategoria="eliminarCategoriaOTipo"
                />
            </v-col>
        </v-row>
        <ModalEditarProducto
            :editar="editar"
            :producto="productoEditar"
            :opciones="opciones"
            @editarProducto="editarProductoModal"
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
    </v-container>
</template>

<script>
import ModalEditarProducto from "../../components/Administrador/ModalEditarProducto";
import DataCategorias from "../../components/Administrador/DataCategorias";
import DataTipoProductos from "../../components/Administrador/DataTipoProductos";
import ModalCategoria from "../../components/Administrador/ModalCategoria";

export default {
    data: () => ({
        productos: [],
        editar: false,
        productoEditar: {},
        page: 1,
        opciones: {},
        mostrarModalCategoriaOTipo: false,
        categoriaOTipo: {},
        opcionesCategoria: {},
        categorias: []
    }),
    created() {
        let ejemplo0 = {
            id: -1,
            nombre: "ALERCET JARABE FRASCO X 60 ML 0",
            imagen_url:
                "https://www.farmaciasannicolas.com/Producto/GetMultimediaProducto?idProducto=c4d90d93-d0ad-4873-8bf3-4f5052c19505&idMultimedia=e9363332-777b-4862-a180-9a6db039f588",
            precio: 8.95,
            cantidad: 0
        };
        this.productos.push(ejemplo0);
        for (let index = 0; index < 10; index++) {
            let ejemplo = {
                id: index,
                nombre: "ALERCET JARABE FRASCO X 60 ML " + (index + 1),
                imagen_url:
                    "https://www.farmaciasannicolas.com/Producto/GetMultimediaProducto?idProducto=c4d90d93-d0ad-4873-8bf3-4f5052c19505&idMultimedia=e9363332-777b-4862-a180-9a6db039f588",
                precio: 8.95,
                cantidad: Math.floor(Math.random() * 20)
            };
            this.productos.push(ejemplo);
        }
        axios.get("/api/categoria").then(response => {
            this.categorias = response.data;
        });
    },
    components: {
        ModalEditarProducto,
        DataCategorias,
        DataTipoProductos,
        ModalCategoria
    },
    methods: {
        nuevoProductoModal() {
            this.editar = true;
            this.opciones = {
                disabled: false,
                btn_guardar: true,
                btn_texto: "Guardar"
            };
        },
        editarProductoModal(producto) {
            this.editar = true;
            this.opciones = {
                disabled: false,
                btn_guardar: true,
                btn_texto: "Guardar"
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
        guardarProducto() {
            console.log("guardar");
        },
        cerrar: function() {
            this.editar = false;
            this.productoEditar = {};
            this.opciones = {};
        },
        guardarProducto() {
            console.log("guardar");
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
        guardarCategoriaOTipo() {
            this.mostrarModalCategoriaOTipo = false;
        },
        editarCategoriaOTipo(categoria, opciones) {
            this.mostrarModalCategoriaOTipo = true;
            this.opciones = opciones;
            this.categoriaOTipo = categoria;
        },
        eliminarCategoriaOTipo(categoria) {},
        colorCard(cantidad) {
            let color = "teal lighten-3";
            if (cantidad == 0) {
                color = "red lighten-1";
            } else if (cantidad > 0 && cantidad <= 10) {
                color = "orange lighten-1";
            }
            return color;
        }
    }
};
</script>

<style></style>
