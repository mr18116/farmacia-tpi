<template>
    <v-container fluid>
        <div class="row pt-15">
            <div class="col-md-9 col-sm-7 col-xs-12">
                <v-row>
                    <v-col cols="12" class="text-h4">
                        {{ 'Resultados de busqueda para "' + this.$route.params.search + '" :' }}
                    </v-col>
                </v-row>
                <CardsProductos ref="cardSearch" :n="36" tipo="search" :parametro="this.$route.params.search" />
                </div>    
        </div>
      <v-col cols="12">
           <v-pagination v-model="pagina" :length="paginas" @input="cambioPagina"> </v-pagination>
      </v-col>
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