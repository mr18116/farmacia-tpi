<template>
  <v-container fluid>
        <div class="row pt-15">
            <div class="col-md-9 col-sm-7 col-xs-12">
                <v-row>
                    <v-col cols="12" class="text-h4">
                        <p class="cat text-center text-uppercase">{{ this.$route.params.categoria }}</p>
                        
                    </v-col>
                </v-row>
                <hr>
                <CardsProductos ref="cardCategoria" :n="36" tipo="categoria" :parametro="this.$route.params.categoria" />
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