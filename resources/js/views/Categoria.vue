<template>
  <v-container fluid>
        
        <v-row class="pt-10">
            <v-col cols="12" class="text-h4">
                <p class="cat text-center text-uppercase">{{ this.$route.params.categoria }}</p>
                
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

                <CardsProductos ref="cardCategoria" :n="36" tipo="categoria" :parametro="this.$route.params.categoria" />
        
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
            this.$refs.cardCategoria.cambiarPagina(this.pagina);
        }
    },
    watch: {
        '$refs.cardCategoria.paginas': function () {
            this.paginas = this.$refs.cardCategoria.paginas;
        }
    }
}
</script>

<style>
.cat{
    font-weight: 400;
    background-color: #203338;
    border-radius: 0 15px 0 15px;
    color: white !important;
    padding: 5px 15px;
    position: relative;
}
</style>