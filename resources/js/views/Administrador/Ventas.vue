<template>
    <v-container fluid>
        <v-app-bar color="#0077c9" class="px-5"> </v-app-bar>
        <v-row align="center">
            <v-col cols="12" class="text-h1">
                Ventas
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <v-data-table
                    :headers="headers"
                    :items="ventas"
                    :items-per-page="10"
                    class="elevation-1"
                >
                <template v-slot:item.actions="{ item }">
                    <v-btn link color="primary" @click="verFactura(item)" small>Ver Factura</v-btn>
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
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12" md="6">
                <DataMetodosPago
                    :metodos="metodos"
                    @nuevoPagoOEnvio="nuevoPagoOEnvio"
                    @editarModal="editarModal"
                    @eliminarItem="eliminarItem"
                />
            </v-col>
            <v-col cols="12" md="6">
                <DataFormasEnvio
                    :formas="formas"
                    @nuevoPagoOEnvio="nuevoPagoOEnvio"
                    @editarModal="editarModal"
                    @eliminarItem="eliminarItem"
                />
            </v-col>
        </v-row>
        <ModalCategoria
            :mostrar="mostrarModalCategoria"
            :categoriaOTipo="itemEditar"
            :opciones="opciones"
            @cerrarModalCategoriaOTipo="cerrar"
            @guardarCategoriaOTipo="guardar"
        />
        <Loader :cargando="cargando" />
        <EliminarItem
            :item="itemAEliminar"
            :mostrar="modalEliminar"
            :tipo="tipoItemAEliminar"
            @cancelarEliminar="cancelarEliminar"
            @confirmarEliminar="confirmarEliminarItem"
        />
    </v-container>
</template>

<script>
import DataMetodosPago from "../../components/Administrador/DataMetodosPago";
import DataFormasEnvio from "../../components/Administrador/DataFormasEnvio";
import ModalCategoria from "../../components/Administrador/ModalCategoria";
import Loader from "../../components/Loader";
import EliminarItem from "../../components/Administrador/EliminarItem";
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';

export default {
    components: {
        DataMetodosPago,
        DataFormasEnvio,
        ModalCategoria,
        Loader,
        EliminarItem
    },
    data: () => ({
        headers: [
            { text: "Fecha", value: "created_at", sortable: true },
            { text: "Usuario", value: "user.name", sortable: true },
            {
                text: "Metodo de pago",
                value: "metodo_pagos.tipo",
                sortable: true
            },
            {
                text: "Forma de envio",
                value: "formas_envios.empresa",
                sortable: true
            },
            { text: "Total", value: "total", sortable: true },
            { text: "Más detalles", value: "actions", sortable: false }
        ],
        cargando: false,
        ventas: [],
        mostrarModalCategoria: false,
        opciones: {},
        itemEditar: {},
        metodos: [],
        formas: [],
        modalEliminar: false,
        itemAEliminar: null,
        tipoItemAEliminar: null
    }),
    methods: {
        nuevoPagoOEnvio(opciones) {
            this.mostrarModalCategoria = true;
            this.opciones = opciones;
        },
        cerrar() {
            this.mostrarModalCategoria = false;
            this.opciones = {};
            this.itemEditar = {};
        },
        editarModal(item, opciones) {
            this.mostrarModalCategoria = true;
            this.itemEditar = item;
            this.opciones = opciones;
        },
        guardar(objeto, opciones) {
            this.mostrarModalCategoria = false;
            if (objeto.nombre != "" && objeto.nombre != undefined) {
                this.cargando = true;
                if (
                    opciones.categoriaOTipo === "pago" &&
                    opciones.editar === false
                ) {
                    const objeto2 = {
                        tipo: objeto.nombre
                    };
                    axios.post("/api/metodo_pago", objeto2).then(res => {
                        this.cerrar();
                        this.obtenerMetodoPago();
                        this.cargando = false;
                    });
                } else if (
                    opciones.categoriaOTipo === "envio" &&
                    opciones.editar === false
                ) {
                    const objeto2 = {
                        empresa: objeto.nombre
                    };
                    axios.post("/api/formas_envio", objeto2).then(res => {
                        this.cerrar();
                        this.obtenerMetodoEnvio();
                        this.cargando = false;
                    });
                } else if (
                    opciones.categoriaOTipo === "pago" &&
                    opciones.editar === true
                ) {
                    const objeto2 = {
                        tipo: objeto.nombre
                    };
                    axios
                        .put(`api/metodo_pago/${objeto.id}`, objeto2)
                        .then(res => {
                            this.cerrar();
                            this.obtenerMetodoPago();
                            this.cargando = false;
                        });
                } else if (
                    opciones.categoriaOTipo === "envio" &&
                    opciones.editar === true
                ) {
                    
                    const objeto2 = {
                        id: objeto.id,
                        empresa: objeto.nombre
                    };
                    
                    axios
                        .put(`api/formas_envio/${objeto.id}`, objeto2)
                        .then(res => {
                            this.cerrar();
                            this.obtenerMetodoEnvio();
                            this.cargando = false;
                        });
                }
            }
        },
        eliminarItem(item, tipo) {
            this.modalEliminar = true;
            this.itemAEliminar = item;
            this.tipoItemAEliminar = tipo;
        },
        cancelarEliminar() {
            this.modalEliminar = false;
            this.itemAEliminar = {};
        },
        confirmarEliminarItem(item, tipo) {
            if (item !== null) {
                this.cargando = true;
                if (tipo === "pago") {
                    axios.delete(`/api/metodo_pago/${item.id}`).then(() => {
                        this.obtenerMetodoPago();
                        this.cancelarEliminar();
                        this.cargando = false;
                    });
                } else if (tipo === "envio") {
                    axios.delete(`/api/formas_envio/${item.id}`).then(() => {
                        this.obtenerMetodoEnvio();
                        this.cancelarEliminar();
                        this.cargando = false;
                    });
                }
            }
        },
        obtenerMetodoPago() {
            axios.get("/api/metodo_pago").then(response => {
                this.metodos = response.data;
            });
        },
        obtenerMetodoEnvio() {
            axios.get("/api/formas_envio").then(response => {
                this.formas = response.data;
            });
        },
        verFactura(factura){
            const doc = new jsPDF();
            doc.text("Factura", 10, 10);
            doc.text("Farmacia - TPI", 100, 10);
            doc.text("N° Factura: " + factura.id, 10, 20);
            doc.text("Fecha: " + factura.created_at, 10, 30);
            doc.text("Facturar a: " + factura.user.name, 10, 40);
            doc.text("Identificacion del cliente: " + factura.user.id, 10, 50);
            doc.text("Dirección de envio: " + factura.direccion, 10, 60);
            doc.text("Forma de envio: " + factura.formas_envios.empresa, 10, 70);
            doc.text("Metodo de pago: " + factura.metodo_pagos.tipo, 10, 80);
            let body = [];
            factura.productos.forEach(producto => {
            body.push([producto.nombre, producto.pivot.cantidad, Math.round(producto.pivot.cantidad * producto.precio * 100)/100]);
            });
            doc.autoTable({
                head: [['Producto', 'Cantidad', 'Monto']],
                body: body,
                startY: 90,
            },);
            doc.text("Total: $" + factura.total, 10, doc.previousAutoTable.finalY + 10);
            //doc.save("Factura - " + factura.id + ".pdf");
            //doc.output('dataurlnewwindow');
            window.open(doc.output('bloburl'), '_blank');
        }
    },
    created() {
        axios.get("/api/factura").then(response => {
            this.ventas = response.data;
        });
        this.obtenerMetodoPago();
        this.obtenerMetodoEnvio();
    }
};
</script>

<style></style>
