<template>
    <v-container fluid>
        <v-row justify="center" class="mt-4">
            <v-col cols="12" md="5">
                <v-card>
                    <v-card-title>Productos más vendidos</v-card-title>
                    <v-card-text class="d-flex justify-center">
                        <GraficoBarras
                            :datosGrafica="datosGraficoProductosMasVendidos"
                            :nombresProductos="nombresProductosMasVendidos"
                            :label="'productos mas vendidos'"
                            v-if="datosGraficoProductosMasVendidos.length !== 0"
                        />
                        <v-progress-circular
                            :size="100"
                            :width="7"
                            color="primary"
                            indeterminate
                            class="my-8"
                            v-if="datosGraficoProductosMasVendidos.length === 0"
                        ></v-progress-circular>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col cols="12" md="5">
                <v-card>
                    <v-card-title>Total de todas las ventas</v-card-title>
                    <v-card-text class="d-flex justify-center">
                        <GraficoBarras
                            :datosGrafica="totalVentas"
                            :nombresProductos="[1]"
                            :label="'Total de ventas'"
                            v-if="totalVentas.length !== 0"
                        />
                        <v-progress-circular
                            :size="100"
                            :width="7"
                            color="primary"
                            indeterminate
                            class="my-8"
                            v-if="totalVentas.length === 0"
                        ></v-progress-circular>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
        <v-row justify="center">
            <v-col cols="12" md="10">
                <v-card>
                    <v-card-title>Total de los últimos siete días</v-card-title>
                    <v-card-text class="d-flex justify-center">
                        <GraficoLinea
                            :datosGrafica="ventasDiariasTotal"
                            :nombresProductos="ventasDiariasTotalFechas"
                            :label="'Total de los últimos siete días'"
                            v-if="totalVentas.length !== 0"
                        />
                        <v-progress-circular
                            :size="100"
                            :width="7"
                            color="primary"
                            indeterminate
                            class="my-8"
                            v-if="totalVentas.length === 0"
                        ></v-progress-circular>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import axios from "axios";
import GraficoBarras from "../../components/Administrador/GraficoBarras";
import GraficoLinea from "../../components/Administrador/GraficoLinea.vue";
export default {
    data: () => ({
        datosGraficoProductosMasVendidos: [],
        nombresProductosMasVendidos: [],
        totalVentas: [],
        ventasDiarias: [],
        ventasDiariasTotal: [],
        ventasDiariasTotalFechas: []
    }),
    components: {
        GraficoBarras,
        GraficoLinea
    },
    mounted() {
        var d = new Date();
        d.setDate(d.getDate() - 7);
        const tiempoTranscurrido = Date.now();
        const hoy = new Date(tiempoTranscurrido);
        const fecha = hoy.toLocaleDateString();
        const fechaAnterior = d.toLocaleDateString();
        console.log(fechaAnterior);
        axios.get("/api/productos-mas-comprados/5").then(res => {
            res.data.forEach(element => {
                this.datosGraficoProductosMasVendidos.push(
                    element.cantidadVendida
                );
                this.nombresProductosMasVendidos.push(element.producto.nombre);
            });
        });
        axios.get("/api/factura").then(res => {
            let total = 0;
            res.data.forEach(el => {
                if (
                    new Date(el.created_at).toLocaleDateString() >=
                        fechaAnterior ||
                    new Date(el.created_at).toLocaleDateString() <= fecha
                ) {
                    let item = {
                        total: el.total,
                        fecha: new Date(el.created_at).toLocaleDateString()
                    };
                    this.ventasDiarias.push(item);
                    if (
                        this.ventasDiarias.length > 1 &&
                        this.ventasDiarias[this.ventasDiarias.length - 2]
                            .fecha == item.fecha
                    ) {
                        if (this.ventasDiariasTotal.length == 0) {
                            this.ventasDiariasTotal.push(item.total);
                            this.ventasDiariasTotalFechas.push(item.fecha);
                        } else {
                            this.ventasDiariasTotal[
                                this.ventasDiariasTotal.length - 1
                            ] += item.total;
                        }
                    } else {
                        this.ventasDiariasTotal.push(item.total);
                        this.ventasDiariasTotalFechas.push(item.fecha);
                    }
                }
                total += el.total;
            });
            this.totalVentas.push(total);
        });
    }
};
</script>

<style lang="scss" scoped></style>
