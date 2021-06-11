<template>
  <div>
      <v-container>
        <v-row class="hidden-md-and-down"> 
        <v-col cols="12">
            <v-row>
                <v-col cols="2">
                    <router-link :to="'/detalle/' + producto.producto.id">
                    <v-img height="100" contain :src="producto.producto.imagen_url"></v-img>
                </router-link> 
                </v-col>
                <v-col class="d-flex justify-center align-center" cols="3">  
                    <router-link :to="'/detalle/' + producto.producto.id" class="black--text">{{ producto.producto.nombre }}</router-link>
                </v-col>
                <v-col class="d-flex justify-center align-center" cols="2.5">${{ producto.producto.precio }}</v-col>
                <v-col class="d-flex justify-center align-center" cols="auto">
                    <v-text-field
                        v-model="cantidad"
                        hide-details="true"
                        style="width: 80px;"
                        dense
                        outlined
                        class="centered-input"
                        color="primary darken-2"
                        type="number"
                        >    
                        </v-text-field>  
                        <v-chip color="white" :disabled="actualizar == false || cantidad == 0 || cantidad == ''" @click="actualizarCantidad"> 
                           <v-img width="24" height="24" src="https://i.pinimg.com/originals/35/af/1d/35af1d7a2191d6926c8ee08fb7f4ee19.png"></v-img>
                        </v-chip>
                </v-col>
                <v-col class="d-flex justify-center align-center pr-5" cols="1.5">${{ Math.round(producto.producto.precio*producto.cantidad * 100)/100 }}</v-col>
                <v-col class="d-flex justify-center align-center" cols="1">
                  <a class="px-2" @click="procederCompra"><v-img width="70" height="35" src="https://dnielectronico.pe/wp-content/uploads/2019/11/boton-comprar-png-6.png"></v-img></a>
                  <a class="pr-10" @click="quitarProducto"><v-img width="24" height="24" src="https://static.thenounproject.com/png/2172423-200.png"></v-img></a>
                </v-col>
            </v-row>
        </v-col>
        </v-row>

        <v-row class="hidden-lg-and-up"> 
            <v-col cols="12">
                <v-row>
                    <v-col cols="2">
                        <router-link :to="'/detalle/' + producto.producto.id">
                        <v-img height="100" contain :src="producto.producto.imagen_url"></v-img>
                        </router-link> 
                    </v-col>
                    <v-col class="d-flex justify-center align-center pr-10" cols="8">  
                        <router-link :to="'/detalle/' + producto.producto.id" class="black--text">{{ producto.producto.nombre }}</router-link>
                    </v-col>
                    <v-col class="d-flex justify-center align-center" cols="2">
                        <a class="px-2" @click="procederCompra"><v-img width="60" height="35" src="https://dnielectronico.pe/wp-content/uploads/2019/11/boton-comprar-png-6.png"></v-img></a>
                        <a class="pr-10" @click="quitarProducto"><v-img width="24" height="24" src="https://img.icons8.com/ios/452/x.png"></v-img></a>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12">
                        <v-row>
                            <v-col class="d-flex justify-center align-center pl-20" cols="auto">
                                <v-text-field
                                    v-model="cantidad"
                                    hide-details="true"
                                    style="width: 80px;"
                                    dense
                                    outlined
                                    class="centered-input"
                                    color="primary darken-2"
                                    type="number"
                                    >    
                                    </v-text-field>  
                                    <v-chip color="white" :disabled="actualizar == false" @click="actualizarCantidad"> 
                                    <v-img width="24" height="24" src="https://i.pinimg.com/originals/35/af/1d/35af1d7a2191d6926c8ee08fb7f4ee19.png"></v-img>
                                    </v-chip>
                                    
                                    
                            </v-col>
                            <v-spacer></v-spacer>
                            <v-col cols="auto" class="pr-10 font-weight-black">${{ Math.round(producto.producto.precio*producto.cantidad * 100)/100 }}</v-col>
                        </v-row>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>

        <v-divider></v-divider>
      </v-container>
      <ModalComprar ref="modalComprar" :productos="[producto.producto]" :cantidades="[producto.cantidad]" tipo="individual-carrito" v-if="producto != null" />
    </div>
</template>

<script>
import ModalComprar from '../components/ModalComprar';

export default {
    components: {
        ModalComprar,
    },
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
        },
        procederCompra(){
            if (this.$store.state.user != null) {
                this.$refs.modalComprar.dialog = true;
            } else {
                this.$router.push('/login');
            }
        },
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