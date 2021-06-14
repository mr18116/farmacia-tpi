<template>
<v-hover v-slot:default="{ hover }">
    <v-card class="card"
                  shaped
                  :elevation="hover ? 10 : 4"
                  :class="{ up: hover }">
        <router-link :to="'/detalle/' + producto.id">
            <v-img class="d-block ml-auto mr-auto"
                    :class="{ 'zoom-efect': hover }" height="200" contain :src="producto.imagen_url"></v-img>
        </router-link>
        <v-card-title class="d-block text-uppercase text-truncate">
            <router-link :to="'/detalle/' + producto.id" class="black--text">{{ producto.nombre }}</router-link>
        </v-card-title>
        <v-card-subtitle>${{ producto.precio }}</v-card-subtitle>
        <v-card-actions>
            <v-row v-if="producto.cantidad > 0"
                align="center"
                justify="center"
                align-content="center"
                no-gutters
            >
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
                        @input="controlCantidad"
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
                <v-spacer></v-spacer>
                <v-col cols="auto" class="mt-1 mt-lg-0">
                    <v-btn icon outlined color="primary darken-2" block @click="agregar" :disabled="$store.state.actualizandoCarrito || cantidad <= 0 || cantidad == ''">
                        <v-icon>mdi-cart-plus</v-icon>
                    </v-btn>
                </v-col>
            </v-row>
            <v-row v-else justify="center">
                <v-col cols="12">
                    <v-alert dense class="mb-0"
            type="error" >AGOTADO</v-alert>
                </v-col>
                </v-row>
        </v-card-actions>
    </v-card>
</v-hover>
</template> 

<script>
export default {
    props: {
        producto: Object
    },
    data: () => ({
        cantidad: 1,
    }),
    methods: {
        disminuir() {
            if (this.cantidad > 1) {
                this.cantidad--;
            }
        },
        aumentar() {
            if (this.producto.cantidad > this.cantidad) {
                this.cantidad++;
            }
        },
        agregar(){
            if (this.$store.state.user != null) {
                this.$store.dispatch('addProducto', {
                    producto_id: this.producto.id,
                    cantidad: this.cantidad
                });
                this.cantidad = 1;
            } else {
                this.$router.push('/login');
            }
        },
        controlCantidad(){
            if (this.cantidad > this.producto.cantidad) {
                this.cantidad = this.producto.cantidad;
            }
        }
    },
            filters: {
  
  	subStr: function(string) {
    	return string.substring(0,15) + '...';
        }
  
  },
};
</script>

<style scoped>
.centered-input >>> input {
    text-align: center;
}
</style>
<style>
.card {
  min-height: 300px;
  padding: 10px;
  transition: 0.5s ease-out;
}
.card .v-image {
  margin-bottom: 15px;
  transition: 0.75s;
}
.card h1 {
  margin-bottom: 10px;
}
.zoom-efect {
  transform: scale(1.1);
}
.up {
  transform: translateY(-20px);
  transition: 0.5s ease-out;
}
</style>

<style>
section {
  position: relative;
}
</style>