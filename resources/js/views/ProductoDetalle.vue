<template>
    <v-container fluid>
        <!--<v-app-bar color="blue lighten-1"> </v-app-bar>-->
        <v-row class="pt-10 px-5"  v-if="producto != null">
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
                            <p class="title">CANTIDAD</p>

                            <v-text-field
                                v-model="cantidad"
                                class="centered-input"
                                outlined
                                style="width:100px"
                                dense
                            ></v-text-field>
                            <v-btn
                                class="primary white--text"
                                outlined
                                tile
                                dense
                                @click="agregar"
                                :disabled="$store.state.actualizandoCarrito"
                            >
                                <v-icon>mdi-cart</v-icon> Agregar</v-btn
                            >
                            <v-btn
                                color="green"
                                class="white--text"
                                dense
                                tile
                                :disabled="$store.state.actualizandoCarrito"
                                @click="procederCompra"
                            >
                                Comprar
                            </v-btn>
                        </div>
                    </div>
                </div>
            </v-card>
        </v-row>
        <div class="row" v-if="producto != null">
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
                                        parametro="ultimos"
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
        producto: null,
        cantidad: 1,
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
        axios.get("/api/producto/" + this.$route.params.id).then(response => {
            this.producto = response.data;
        });
    },
    methods: {
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
