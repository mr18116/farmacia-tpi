<template>
  <v-container fluid>
       <v-app-bar color="#0077c9" class="px-5"> </v-app-bar>
        <v-row align="center">
            <v-col cols="12" class="text-h1">
                Compras
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <v-data-table 
                :headers="headers"
                :items="compras"
                :items-per-page="10"
                class="elevation-1">
                <template v-slot:item.actions="{ item }">
                    <v-btn link color="primary" @click="verFactura(item)" small>Ver Factura</v-btn>
                </template>
                    <template v-slot:no-data>
                        No hay datos
                    </template>
                </v-data-table>
            </v-col>
        </v-row>
  </v-container>
</template>

<script>
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';

export default {
    data: () => ({
        headers: [
            { text: 'Fecha', value: 'created_at', sorteable: true },
            { text: 'Direcion', value: 'direccion', sortable: true },
            { text: 'Metodo de pago', value: 'metodo_pagos.tipo', sortable: true },
            { text: 'Forma de envio', value: 'formas_envios.empresa', sortable: true },
            { text: 'Total', value: 'total', sortable: true },
            { text: "Más detalles", value: "actions", sortable: false }
        ],
        compras: [],
    }),
    created(){
        if (this.$store.state.user != null) {
            axios.get('/api/facturas-user/' + this.$store.state.user.id).then( response => {
                this.compras = response.data;
            });
        }
    },
    methods: {
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
    watch: {
        '$store.state.user'(n, o){
            if (this.$store.state.user != null) {
            axios.get('/api/facturas-user/' + this.$store.state.user.id).then( response => {
                this.compras = response.data;
            });
        }
        }
    }
}
</script>

<style>

</style>