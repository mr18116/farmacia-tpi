<template>
  <v-row>
      <v-col cols="6" sm="4" md="3" v-for="producto in productos" :key="producto.id">
          <CardProducto :producto="producto" />
      </v-col>
  </v-row>
</template>

<script>
import CardProducto from './CardProducto';
import axios from 'axios';

export default {
    components: {
        CardProducto
    },
    props: {
        n: Number,
        parametro: String,
        tipo: String,
    },
    data: () => ({
        productos: [],
        allProductos: [],
        paginas: 1,
    }),
    methods: {
        cargarProductos(){
            if (this.tipo == 'ultimos') {
                axios.get('/api/productos-ultimos/' + this.n).then( response => {
                    this.productos = response.data;
                });
            } else if (this.tipo == 'mas-comprados') {
                axios.get('/api/productos-mas-comprados/' + this.n).then( response => {
                    this.productos = response.data;
                });
            } else if (this.tipo == 'categoria') {
                axios.get('/api/productos-categoria/' + this.parametro).then( response => {
                    this.allProductos = response.data;
                    this.productos = this.allProductos.slice(0, this.n);
                    this.paginas = Math.ceil(this.allProductos.length/this.n);
                });
            } else if (this.tipo == 'search') {
                axios.get('/api/productos-search/' + this.parametro).then( response => {
                    this.allProductos = response.data;
                    this.productos = this.allProductos.slice(0, this.n);
                    this.paginas = Math.ceil(this.allProductos.length/this.n);
                });
            }
        },
        cambiarPagina(pagina){
            this.productos = this.allProductos.slice(this.n*(pagina-1), this.n*pagina);
        }
    },
    created(){
        this.cargarProductos();
    },
    watch: {
        '$route.params': function () {
            this.cargarProductos();
        }
    }
}
</script>

<style>

</style>