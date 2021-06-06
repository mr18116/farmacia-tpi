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
          <v-col cols="8" v-if="productos.length > 0 && $store.state.actualizandoCarrito == false">
              <v-row>
                <v-col cols="12" v-for="(producto, index) in productos" :key="index">
                    <ProductoCarrito :producto="producto" />
                </v-col>
              </v-row>
          </v-col>
          <v-col cols="4" v-if="productos.length > 0 && $store.state.actualizandoCarrito == false">
              <v-card>
                  <v-card-title>
                      Total: ${{ total }}
                  </v-card-title>
                  <v-card-actions>
                      <v-btn block color="blue" @click="procederCompra">Comprar Todo</v-btn>
                  </v-card-actions>
              </v-card>
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