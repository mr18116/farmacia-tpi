<template>
    <v-container fluid>
        <v-app-bar color="#0077c9" class="px-5"> </v-app-bar>
        <v-row>
            <v-col cols="5">
                <v-card>
                    <v-card-title>Productos más vendidos</v-card-title>
                    <v-card-text>
                        <GraficoBarras
                            :datosGrafica="datosGraficoBarras"
                            :nombresProductos="nombresProductosMasVendidos"
                            :label="'productos mas vendidos'"
                            v-if="datosGraficoBarras.length !== 0"
                        />
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import axios from "axios";
import GraficoBarras from "../../components/Administrador/GraficoBarras";
export default {
    data: () => ({
        datosGraficoBarras: [],
        nombresProductosMasVendidos: []
    }),
    components: {
        GraficoBarras
    },
    mounted() {
        axios.get("/api/productos-mas-comprados/5").then(res => {
            res.data.forEach(element => {
                this.datosGraficoBarras.push(element.cantidad);
                this.nombresProductosMasVendidos.push(element.nombre);
            });
            console.log(this.datosGraficoBarras, this.nombresProductosMasVendidos)
        });
    }
};
</script>

<style lang="scss" scoped></style>
