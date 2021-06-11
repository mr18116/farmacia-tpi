<template>
    <v-container fluid>
        <v-row class="pt-10">
            <v-col cols="12" class="text-h4">
                        {{ 'Resultados de busqueda para "' + this.$route.params.search + '" :' }}
            </v-col>
        </v-row>
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

                <CardsProductos ref="cardSearch" :n="36" tipo="search" :parametro="this.$route.params.search" />
        
                </v-col>
             </v-row>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <v-pagination v-model="pagina" :length="paginas" @input="cambioPagina"> </v-pagination>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import CardsProductos from '../components/CardsProductos';

export default {
    components: {
        CardsProductos
    },
    data: () => ({
        pagina: 1,
        paginas: 1,
    }),
    methods: {
        cambioPagina(){
            this.$refs.cardSearch.cambiarPagina(this.pagina);
        }
    },
    watch: {
        '$refs.cardSearch.paginas': function () {
            this.paginas = this.$refs.cardSearch.paginas;
        }
    }
}
</script>

<style>

</style>