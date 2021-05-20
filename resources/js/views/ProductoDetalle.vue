<template>
    <div>
        <v-container fluid>
            <v-row>
                <v-col cols="12" md="6" class="">
                    <v-img  class="elevation-1" :src="producto.imagen_url"></v-img>
                </v-col>
                <v-col cols="12" md="6" class="">
                    <v-card min-height="100%">
                        <v-card-title>{{ producto.nombre }} </v-card-title>
                        <v-card-text>
                            <h4>Descripcion</h4>
                            {{ producto.descripcion }}
                        </v-card-text>
                        <v-card-text>
                            <h4>Indicaciones</h4>
                            {{ producto.indicaciones }}
                        </v-card-text>
                        <v-card-actions>
                            <v-row
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
                                    >
                                        <v-icon>mdi-minus</v-icon>
                                    </v-btn>
                                </v-col>
                                <v-col lg="2">
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
                                <v-spacer class="d-none d-lg-block"></v-spacer>
                                <v-col cols="12" lg="6" class="mt-1 mt-lg-0">
                                    <v-btn
                                        outlined
                                        color="primary darken-2"
                                        block
                                    >
                                        <v-icon left>mdi-cart-plus</v-icon>
                                        Agregar
                                    </v-btn>
                                </v-col>
                            </v-row>
                        </v-card-actions>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
export default {
    data: () => ({
        producto: {
            nombre: "NEUROGLUTAN AMPOLLAS BEBIBLES X 12 SACHET",
            imagen_url:
                "https://www.farmaciasannicolas.com/Producto/GetMultimediaProducto?idProducto=022e3d37-b35d-404c-9187-8192ecf46404&idMultimedia=e8d015ed-f476-40f7-b3a6-5c1224e8ca73",
            descripcion: "Neuroglután está indicado para el cansancio físico y mental. Mejora la capacidad de concentración y la memoria. Es un estimulante cerebral que contiene ácido glutámico que activa la circulación del cerebro. Además posee las vitaminas b1, b6, b12 y ginseng coreano. Estos componentes mejoran el estado de ánimo y el sistema nervioso.",
            precio: 8.26,
            laboratorio: "",
            cantidad: 1,
            indicaciones:
                "Neuroglután está indicado para el cansancio físico y mental. Mejora la capacidad de concentración y la memoria. Es un estimulante cerebral que contiene ácido glutámico que activa la circulación del cerebro. Además posee las vitaminas b1, b6, b12 y ginseng coreano. Estos componentes mejoran el estado de ánimo y el sistema nervioso."
        },
        cantidad: 1
    }),
    methods: {
        disminuir() {
            if (this.cantidad > 1) {
                this.cantidad--;
            }
        },
        aumentar() {
            this.cantidad++;
        }
    }
};
</script>

<style lang="scss" scoped></style>
