<template>
  <v-container>
      <v-row>
          <v-col cols="12" class="text-h1">
              {{ this.$route.params.categoria }}
          </v-col>
      </v-row>
      <CardsProductos id="cardCategoria" :n="36" :parametro="this.$route.params.categoria" />
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
            this.$refs.cardCtegoria.cambiarPagina(this.pagina);
        }
    },
    watch: {
        '$refs.cardCategoria.paginas': function () {
            this.paginas = this.$refs.cardCtegoria.paginas;
        }
    }
}
</script>

<style>

</style>