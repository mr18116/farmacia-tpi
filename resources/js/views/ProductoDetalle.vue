<template>
    <v-container fluid>
        <!--<v-app-bar color="blue lighten-1"> </v-app-bar>-->
        <v-row v-if="cargando" justify="center" class="my-10">
              <v-col cols="12" class="text-h4 text-center">Cargando ...</v-col>
              <v-col cols="auto">
                  <v-progress-circular :size="70" indeterminate color="black"></v-progress-circular>
              </v-col>
        </v-row>
        <v-row class="pt-10 px-5"  v-else-if="producto != null && cargando == false">
            <v-card class="pa-5">
                <div class="row">
                    <div class="col-md-4 col-sm-5 col-xs-12">
                        <v-img
                            class="elevation-0"
                            :src="producto.imagen_url"
                        ></v-img>
                    </div>
                    <div class="col-md-8 col-sm-7 col-xs-12">
                        <div class="pl-6">
                            <v-card-text
                                v-text="producto.nombre"
                                class="text-h5"
                            ></v-card-text>
                            <v-card-actions>
                                <p class="headline font-weight-light pt-3">
                                    ${{ producto.precio }}
                                    <del
                                        style=""
                                        class="subtitle-1 font-weight-thin"
                                        >$80.00</del
                                    >
                                </p>
                                <v-rating
                                    v-model="rating"
                                    class="pl-10"
                                    background-color="warning lighten-3"
                                    color="warning"
                                    dense
                                ></v-rating>
                                <span class="font-weight-thin">
                                    25 REVIEWS</span
                                >
                            </v-card-actions>
                            <v-row>
                                <v-col>
                                    <v-tabs grow>
                                        <v-tab>Descripción</v-tab>
                                        <v-tab>Indicaciones</v-tab>
                                        <v-tab-item>
                                            <p
                                                class="pt-10 subtitle-1 font-weight-thin"
                                                style="height: 200px;"
                                            >
                                                {{ producto.descripcion }}
                                            </p>
                                        </v-tab-item>
                                        <v-tab-item>
                                            <p
                                                class="pt-10 subtitle-1 font-weight-thin"
                                                style="height: 200px;"
                                            >
                                                {{ producto.indicaciones }}
                                            </p>
                                        </v-tab-item>
                                    </v-tabs>
                                </v-col>
                            </v-row>
                            <p class="title" v-if="producto.cantidad > 0">CANTIDAD</p>

                            <v-text-field v-if="producto.cantidad > 0"
                                v-model="cantidad"
                                class="centered-input"
                                outlined
                                style="width:100px"
                                dense
                                @input="controlCantidad"
                                type="number"
                            ></v-text-field>
                            <v-btn v-if="producto.cantidad > 0"
                                class="primary white--text"
                                outlined
                                tile
                                dense
                                @click="agregar"
                                :disabled="$store.state.actualizandoCarrito || cantidad <= 0 || cantidad == ''"
                            >
                                <v-icon left>mdi-cart</v-icon> Agregar</v-btn
                            >
                            <v-btn v-if="producto.cantidad > 0"
                                color="green"
                                class="white--text"
                                dense
                                tile
                                :disabled="$store.state.actualizandoCarrito || cantidad <= 0 || cantidad == ''"
                                @click="procederCompra"
                            >
                                 <v-icon left>mdi-currency-usd</v-icon>Comprar
                            </v-btn>
                            <v-alert v-else dense class="mb-0"
            type="error" >AGOTADO</v-alert>
                        </div>
                    </div>
                </div>
            </v-card>
        </v-row>
        <div class="row" v-if="producto != null && cargando == false">
            <div class="col-sm-12 col-xs-12 col-md-12">
                <v-card-text class="pa-0 pt-4" tile outlined>
                    <p class="subtitle-1 font-weight-light pt-3 text-center">
                        PRODUCTOS RELACIONADOS
                    </p>
                    <v-divider></v-divider>
                </v-card-text>

                <v-row align="center" justify="center">
                    <v-col cols="12">
                        <v-row align="center" justify="space-around">
                            <v-col
                                cols="12"
                                xl="9"
                                md="10"
                                sm="12"
                                class="text-center"
                            >
                                <v-hover v-slot:default="{ hover }">
                                    <CardsProductos
                                        shaped
                                        :elevation="hover ? 10 : 4"
                                        :class="{ up: hover }"
                                        :n="4"
                                        tipo="relacionados"
                                        :producto="producto"
                                    />
                                </v-hover>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
            </div>
        </div>
        <ModalComprar
            ref="modalComprar"
            :productos="[producto]"
            :cantidades="[cantidad]"
            tipo="individual"
            v-if="producto != null"
        />
        <v-snackbar
        v-model="snackCompra"
        color="light-blue lighten-2"
        rounded="pill"
        right
        >
        <v-icon dark left>mdi-receipt</v-icon>
        <span class="text-subtitle-1">Compra completada. <router-link to="/compras" class="white--text font-weight-bold">Ver Compras</router-link></span>
        <template v-slot:action="{ attrs }">
            <v-btn
            icon
            v-bind="attrs"
            @click="snackCompra = false"
            >
            <v-icon dark>mdi-window-close</v-icon>
            </v-btn>
        </template>
        </v-snackbar>
    </v-container>
</template>

<script>
import CardsProductos from "../components/CardsProductos";
import axios from "axios";
import ModalComprar from "../components/ModalComprar";

export default {
    components: {
        CardsProductos,
        ModalComprar
    },
    data: () => ({
        cargando: true,
        producto: null,
        cantidad: 1,
        snackCompra: false,
        rating: 4.5,
        etiquetas: [
            {
                text: "Inicio",
                disabled: false,
                href: "/"
            },
            {
                text: "Alergias",
                disabled: false,
                href: "#"
            },
            {
                text: "Antialergicos",
                disabled: true,
                href: "#"
            }
        ],
        item: 3,
        items: [
            {
                avatar:
                    "https://pbs.twimg.com/profile_images/1393419008540659712/kKFelPMI_400x400.jpg",
                title: "Me parece un medicamente increible",
                subtitle:
                    "<span class='text--primary'>Nayib Bukele</span> &mdash; Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl tincidunt eget nullam non. Tincidunt arcu non sodales neque sodales ut etiam. Lectus arcu bibendum at varius vel pharetra. Morbi tristique senectus et netus et malesuada.\n" +
                    "\n"
            },
            {
                avatar:
                    "https://static.elmundo.sv/wp-content/uploads/2020/03/Francisco-Alabi-1.jpg",
                title: "Wow!",
                subtitle:
                    "<span class='text--primary'>Alabi, Scott, Jennifer</span> &mdash; Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
            },
            {
                avatar:
                    "https://s.france24.com/media/display/1418cfe0-964a-11eb-a27e-005056bf87d6/w:1280/p:16x9/putin-5.webp",
                title: "удивительный",
                subtitle:
                    "<span class='text--primary'>Vladimir Putín</span> &mdash; Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            }
        ]
    }),
    created() {
        this.obtenerProducto();
    },
    methods: {
        obtenerProducto(){
            axios.get("/api/producto/" + this.$route.params.id).then(response => {
                this.producto = response.data;
            }).finally( () => this.cargando = false);
        },
        agregar() {
            if (this.$store.state.user != null) {
                this.$store.dispatch("addProducto", {
                    producto_id: this.producto.id,
                    cantidad: this.cantidad
                });
                this.cantidad = 1;
            } else {
                this.$router.push("/login");
            }
        },
        procederCompra() {
            if (this.$store.state.user != null) {
                this.$refs.modalComprar.dialog = true;
            } else {
                this.$router.push("/login");
            }
        },
        controlCantidad(){
            if (this.cantidad > this.producto.cantidad) {
                this.cantidad = this.producto.cantidad;
            }
        }
    },
    watch: {
        '$route.params.id'(old, n){
            if (old != n) {
                this.cargando = true;
            }
            this.cantidad = 1;
            this.obtenerProducto();
        },
        '$store.state.compra'(newV, oldV){
            if (this.$store.state.compra == true) {
                this.snackCompra = true;
                this.$store.dispatch('comprando', false);
            }
        }
    }
};
</script>
<style lang="scss">
.centered-input input {
    text-align: center;
}
.up {
    transform: translateY(-10px);
    transition: 0.5s ease-out;
}
</style>
