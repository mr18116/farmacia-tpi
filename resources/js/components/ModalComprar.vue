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
              <v-btn color="red" @click="dialog = false" :disabled="comprando">Cancelar</v-btn>
              <v-btn color="primary" @click="confirmarCompra" :disabled="comprando">Confirmar compra</v-btn>
          </v-card-actions>
      </v-card>
  </v-dialog>
</template>

<script>
import axios from 'axios';

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
                this.dialog = false;
            }).catch( () => {
                this.comprando = false;
            });
        }
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