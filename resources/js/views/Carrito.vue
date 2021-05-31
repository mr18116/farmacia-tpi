<template>
  <v-container fluid>
      <v-row v-if="$store.state.user != null">
          <v-col cols="12" class="text-h4 text-center" v-if="productos.length == 0">
              No tienes productos en el carro de compras.
          </v-col>
          <v-col cols="auto" class="mx-auto" v-if="productos.length == 0">
              <v-btn large color="green">
                  Empieza a comprar
              </v-btn>
          </v-col>
          <v-col cols="8" v-if="productos.length > 0">
              <v-row>
                <v-col cols="12" v-for="(producto, index) in productos" :key="index">
                    <v-card>
                        <v-row>
                            <v-col cols="auto">
                                <v-img height="150" contain :src="producto.producto.imagen_url"></v-img>
                            </v-col>
                            <v-col>
                                <div>{{ producto.producto.nombre }}</div>
                                <div>{{ producto.producto.precio }}</div>
                            </v-col>
                            <v-col cols="auto">
                                <div>{{ producto.cantidad }}</div>
                                <v-btn>Eliminar</v-btn>
                            </v-col>
                        </v-row>
                        <v-divider></v-divider>
                        <v-row>
                            <v-col cols="12">
                                Suntotal ${{ producto.producto.precio*producto.cantidad }}
                            </v-col>
                        </v-row>
                    </v-card>
                </v-col>
              </v-row>
          </v-col>
          <v-col cols="4" v-if="productos.length > 0">
              <v-card>
                  <v-card-text>
                      Total: ${{ total }}
                  </v-card-text>
                  <v-card-actions>
                      <v-btn block color="blue">Comprar</v-btn>
                  </v-card-actions>
              </v-card>
          </v-col>
      </v-row>
      <v-row v-else>
          <v-col cols="12" class="text-center text-h4">
              Inicie Sesión para ver el contenido de su carrito
          </v-col>
      </v-row>
  </v-container>
</template>

<script>
export default {

    computed: {
        productos(){
            return this.$store.getters.productosCarrito;
        },
        total(){
            return this.$store.getters.totalCarrito;
        }
    }

}
</script>

<style>

</style>