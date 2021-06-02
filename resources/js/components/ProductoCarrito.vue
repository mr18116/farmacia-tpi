<template>
  <v-card>
      <v-container>
          <v-row>
            <v-col cols="3">
                <router-link :to="'/detalle/' + producto.producto.id">
                    <v-img height="120" contain :src="producto.producto.imagen_url"></v-img>
                </router-link>
            </v-col>
            <v-col cols="6">
                <div class="text-h5"><router-link :to="'/detalle/' + producto.producto.id" class="black--text">{{ producto.producto.nombre }}</router-link></div>
                <div class="text-h6">${{ producto.producto.precio }}</div>
            </v-col>
            <v-col cols="3">
                <v-row no-gutters>
                    <v-col cols="auto">
                    <v-btn
                        style="padding: 0px; min-width: 30px; min-height: 39px;"
                        outlined
                        @click="disminuir"
                        color="primary darken-2"
                    >
                        <v-icon>mdi-minus</v-icon>
                    </v-btn>
                </v-col>
                <v-col>
                    <v-text-field
                        v-model="cantidad"
                        hide-details="true"
                        dense
                        outlined
                        class="centered-input"
                        color="primary darken-2"
                    >
                    </v-text-field>
                </v-col>
                <v-col cols="auto">
                    <v-btn
                        style="padding: 0px; min-width: 30px; min-height: 39px;"
                        outlined
                        @click="aumentar"
                        color="primary darken-2"
                    >
                        <v-icon>mdi-plus</v-icon>
                    </v-btn>
                </v-col>
                </v-row>
                <v-btn class="my-2" color="blue" small outlined block :disabled="actualizar == false" @click="actualizarCantidad">Actualizar</v-btn>
                <v-btn class="my-2" color="red" small block @click="quitarProducto">Quitar</v-btn>
            </v-col>
        </v-row>
        <v-divider></v-divider>
        <v-row >
            <v-col cols="auto">
                <v-btn color="green" small>Comprar</v-btn>
            </v-col>
            <v-spacer></v-spacer>
            <v-col cols="auto" class="text-h6">
                Subtotal ${{ Math.round(producto.producto.precio*producto.cantidad * 100)/100 }}
            </v-col>
        </v-row>
      </v-container>
    </v-card>
</template>

<script>
export default {

    props: {
        producto: Object,
    },
    data: () => ({
        cantidad: 0,
        actualizar: false,
    }),
    methods: {
        disminuir() {
            if (this.producto.cantidad > 1) {
                this.cantidad--;
            }
        },
        aumentar() {
            if (this.producto.producto.cantidad > this.cantidad) {
                this.cantidad++;
            }
        },
        actualizarCantidad(){
            this.$store.dispatch('cantidadProducto', {
                producto_id: this.producto.producto_id,
                cantidad: this.cantidad
            });
        },
        quitarProducto(){
            this.$store.dispatch('quitarProducto', this.producto.producto_id);
        }
    },
    created(){
        this.cantidad = this.producto.cantidad;
    },
    watch: {
        cantidad(n, o){
            if (o > 0) {
                if (this.actualizar == false) {
                    this.actualizar = true;
                }
            }
        }
    }
}
</script>

<style scoped>
.centered-input >>> input {
    text-align: center;
}
</style>