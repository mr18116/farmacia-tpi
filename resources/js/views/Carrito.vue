<template>
  <v-container fluid>
      <v-row v-if="$store.state.user != null">
          <v-col cols="12" class="text-h4 text-center" v-if="productos.length == 0">
              No tienes productos en el carro de compras.
          </v-col>
          <v-col cols="auto" class="mx-auto" v-if="productos.length == 0">
              <v-btn large color="green" to="/">
                  Empieza a comprar
              </v-btn>
          </v-col>
          <v-col cols="12" md="12" v-if="productos.length > 0 && $store.state.actualizandoCarrito == false">
              <p class="display-3 font-weight-light text-center pa-4">CARRO DE COMPRAS</p>
          </v-col>
          <v-col lg="9" md="12" v-if="productos.length > 0 && $store.state.actualizandoCarrito == false">
              <v-row class="hidden-md-and-down">
                <v-col cols="5" class="text-center">PRODUCTO</v-col>
                <v-col cols="2.5" class="text-center">PRECIO</v-col>
                <v-col cols="auto" class="text-center">CANTIDAD</v-col>
                <v-col cols="1.5" class="text-center">SUBTOTAL</v-col>
                <v-col cols="1" class="text-center"></v-col>
              </v-row>
              <v-row>
                <v-col cols="12" v-for="(producto, index) in productos" :key="index">
                    <ProductoCarrito :producto="producto" />
                </v-col>
              </v-row>
          </v-col>
          <v-col :cols="12" lg="3" md="12" sm="12" v-if="productos.length > 0 && $store.state.actualizandoCarrito == false" style="background-color: lightgray">
                        <p class="headline">Resumen del pedido</p>
                        <p class="overline">Recuerde que el total final puede cambiar en base al envío seleccionado.
                        </p>
                        <v-simple-table border="1">
                            <template v-slot:default>
                            <tbody>
                            <tr>
                                <td>Total</td>
                                <td class="text-right" style="width: 50px;"><b>${{ total }}</b></td>
                            </tr>
                            </tbody>
                            </template>
                        </v-simple-table>
                        <div class="text-center">
                            <v-btn class="primary white--text mt-5" @click="procederCompra" outlined>COMPRAR TODO</v-btn>
                        </div>

          </v-col>
          <v-col cols="auto" class="my-10" v-if="productos.length > 0 && $store.state.actualizandoCarrito">
              <v-row class="text-h4">Actualizando ...</v-row>
              <v-row justify="center">
                  <v-progress-circular :size="70" indeterminate color="black"></v-progress-circular>
              </v-row>
          </v-col>
      </v-row>
      <v-row v-else>
          <v-col cols="12" class="text-center text-h4">
              Inicie Sesión para ver el contenido de su carrito
          </v-col>
      </v-row>
      <ModalComprar ref="modalComprar" :productos="productosArray" :cantidades="cantidades" tipo="todos" v-if="productos.length > 0"/>
  </v-container>
</template>

<script>
import ProductoCarrito from '../components/ProductoCarrito';
import ModalComprar from '../components/ModalComprar';

export default {
    components: {
        ProductoCarrito,
        ModalComprar,
    },
    computed: {
        productos(){
            return this.$store.getters.productosCarrito;
        },
        total(){
            return this.$store.getters.totalCarrito;
        },
        cantidades(){
            let c = [];
            this.productos.forEach(p => {
                c.push(p.cantidad);
            });
            return c;
        },
        productosArray(){
            let pa = [];
            this.productos.forEach(p => {
                pa.push(p.producto);
            });
            return pa;
        }
    },
    methods: {
        procederCompra(){
            if (this.$store.state.user != null) {
                this.$refs.modalComprar.dialog = true;
            } else {
                this.$router.push('/login');
            }
        }
    }

}
</script>

<style>

</style>