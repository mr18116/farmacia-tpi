<template>
  <v-container fluid>
              <v-app-bar
            color="#0077c9"
            class="px-5">
        </v-app-bar>
        <div class="row pt-15">
            <div class="col-md-9 col-sm-7 col-xs-12">
                <v-breadcrumbs class="pb-0" :items="etiquetas"></v-breadcrumbs>
                <v-row>
                    <v-col cols="12" class="text-h1">
                        {{ this.$route.params.categoria }}
                    </v-col>
                </v-row>
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
            etiquetas: [
      {
        text: "Inicio",
        disabled: false,
        href: "/",
      },
      {
        text: "Alergia",
        disabled: false,
        href: "#",
      },
      {
         text: "Antialergicos",
        disabled: true,
        href: "#",
      },
    ],
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

</style>