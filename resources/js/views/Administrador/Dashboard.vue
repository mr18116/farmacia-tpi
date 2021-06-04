<template>
    <v-container fluid>
        <v-app-bar color="#0077c9" class="px-5"> </v-app-bar>
        <v-row justify="center" class="mt-4">
            <v-col cols="5">
                <v-card>
                    <v-card-title>Productos más vendidos</v-card-title>
                    <v-card-text>
                        <GraficoBarras
                            :datosGrafica="datosGraficoProductosMasVendidos"
                            :nombresProductos="nombresProductosMasVendidos"
                            :label="'productos mas vendidos'"
                            v-if="datosGraficoProductosMasVendidos.length !== 0"
                        />
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col cols="5">
                <v-card>
                    <v-card-title>Total de todas las ventas</v-card-title>
                    <v-card-text>
                        <GraficoBarras
                            :datosGrafica="totalVentas"
                            :nombresProductos="[1]"
                            :label="'Total de ventas'"
                            v-if="totalVentas.length !== 0"
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
        datosGraficoProductosMasVendidos: [],
        nombresProductosMasVendidos: [],
        totalVentas: [],
    }),
    components: {
        GraficoBarras
    },
    mounted() {
        axios.get("/api/productos-mas-comprados/5").then(res => {
            res.data.forEach(element => {
                this.datosGraficoProductosMasVendidos.push(element.cantidad);
                this.nombresProductosMasVendidos.push(element.nombre);
            });        
        });
        axios.get("/api/factura").then(res => {
            let total = 0
            res.data.forEach( el => {
                total += el.total;
            });
            this.totalVentas.push(total)
        })
    }
};
</script>

<style lang="scss" scoped></style>
