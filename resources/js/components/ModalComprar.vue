<template>
  <v-dialog v-model="dialog" persistent>
      <v-card>
          <v-app-bar color="primary" dark tile>
                  <v-toolbar-title>Proceder compra</v-toolbar-title>
              </v-app-bar>
          <v-card-text>
              <v-container>
                  <v-row>
                      <v-col cols="12">
                          <v-text-field v-model="factura.direccion" label="Direccion de envio"></v-text-field>
                      </v-col>
                      <v-col cols="6">
                          <v-select
                            :items="formasEnvio"
                            v-model="factura.formas_envios_id"
                            item-text="empresa"
                            item-value="id"
                            label="Forma de envio"
                            persistent-hint
                            single-line
                        ></v-select>
                      </v-col>
                      <v-col cols="6">
                          <v-select
                            :items="metodosPago"
                            v-model="factura.metodo_pagos_id"
                            item-text="tipo"
                            item-value="id"
                            label="Metodo de pago"
                            persistent-hint
                            single-line
                        ></v-select>
                      </v-col>
                  </v-row>
              </v-container>
          </v-card-text>
          <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="red" @click="cerrarModal" :disabled="comprando">Cancelar</v-btn>
              <v-btn color="primary" @click="confirmarCompra" :disabled="comprando">Confirmar compra</v-btn>
          </v-card-actions>
      </v-card>
  </v-dialog>
</template>

<script>
import axios from 'axios';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';

export default {
    props: {
        productos: {
            type: Array,
            default: []
        },
        cantidades: {
            type: Array,
            default: []
        },
        tipo: {
            type: String,
            default: 'individual'
        }
    },
    data: () => ({
        dialog: false,
        factura: {
            user_id: null,
            formas_envios_id: null,
            metodo_pagos_id: null,
            direccion: '',
            total: 0,
            idsProductos: [],
            cantidades: [],
        },
        formasEnvio: [],
        metodosPago: [],
        comprando: false,
    }),
    methods: {
        obtenerFormasEnvio(){
            axios.get('/api/formas_envio').then( response => {
                this.formasEnvio = response.data;
            });
        },
        obtenerMetodosPago(){
            axios.get('/api/metodo_pago').then( response => {
                this.metodosPago = response.data;
            });
        },
        confirmarCompra(){
            this.comprando = true;
            this.factura.user_id = this.$store.state.user.id;
            axios.post('/api/factura', this.factura).then( response => {
                if (this.tipo == 'todos') {
                    this.$store.dispatch('quitarTodosProductos');
                } else if (this.tipo == 'individual-carrito') {
                    this.$store.dispatch('quitarProducto', this.factura.idsProductos[0]);
                }
                this.comprando = false;
                const doc = new jsPDF();
                doc.text("Factura", 10, 10);
                doc.text("Farmacia - TPI", 100, 10);
                doc.text("N° Factura: " + response.data.id, 10, 20);
                doc.text("Fecha: " + response.data.created_at, 10, 30);
                doc.text("Facturar a: " + response.data.user.name, 10, 40);
                doc.text("Identificacion del cliente: " + response.data.user.id, 10, 50);
                doc.text("Dirección de envio: " + response.data.direccion, 10, 60);
                doc.text("Forma de envio: " + response.data.formas_envios.empresa, 10, 70);
                doc.text("Metodo de pago: " + response.data.metodo_pagos.tipo, 10, 80);
                let body = [];
                response.data.productos.forEach(producto => {
                    body.push([producto.nombre, producto.pivot.cantidad, Math.round(producto.pivot.cantidad * producto.precio * 100)/100]);
                });
                doc.autoTable({
                    head: [['Producto', 'Cantidad', 'Monto']],
                    body: body,
                    startY: 90,
                },);
                doc.text("Total: $" + response.data.total, 10, doc.previousAutoTable.finalY + 10);
                doc.save("Factura - " + response.data.id + ".pdf");
                //doc.output('dataurlnewwindow');
                //window.open(doc.output('bloburl'), '_blank');
                this.$store.dispatch('comprando', true);
                this.cerrarModal();
            }).catch( () => {
                this.comprando = false;
            });
        },
        cerrarModal(){
            this.factura.formas_envios_id = null,
            this.factura.metodo_pagos_id = null,
            this.factura.direccion = '',
            this.dialog = false;
        },
    },
    created(){
        if (this.productos.length > 0 && this.cantidades.length > 0) {
            this.productos.forEach((producto, index) => {
                this.factura.idsProductos.push(producto.id);
                this.factura.cantidades.push(this.cantidades[index]);
                this.factura.total += this.cantidades[index] * producto.precio;
            });
            this.factura.total = Math.round(this.factura.total * 100)/100;
        }
        this.obtenerFormasEnvio();
        this.obtenerMetodosPago();
    }
}
</script>

<style>

</style>