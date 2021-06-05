<template>
  <v-row>
      <v-col cols="12" v-if="cargando" class="my-12">
          <div class="text-h5">Cargando...</div>
          <v-progress-linear indeterminate color="primary" :height="20"></v-progress-linear>
      </v-col>
      <v-col v-else cols="6" sm="4" md="3" v-for="producto in productos" :key="producto.id">
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
        cargando: false,
    }),
    methods: {
        cargarProductos(){
            this.cargando = true;
            if (this.tipo == 'ultimos') {
                axios.get('/api/productos-ultimos/' + this.n).then( response => {
                    this.productos = response.data;
                }).finally( () => this.cargando = false);
            } else if (this.tipo == 'mas-comprados') {
                axios.get('/api/productos-mas-comprados/' + this.n).then( response => {
                    response.data.forEach(element => {
                        this.productos.push(element.producto);
                    });
                }).finally( () => this.cargando = false);;
            } else if (this.tipo == 'categoria') {
                axios.get('/api/productos-categoria/' + this.parametro).then( response => {
                    this.allProductos = response.data;
                    this.productos = this.allProductos.slice(0, this.n);
                    this.paginas = Math.ceil(this.allProductos.length/this.n);
                }).finally( () => this.cargando = false);;
            } else if (this.tipo == 'search') {
                axios.get('/api/productos-search/' + this.parametro).then( response => {
                    this.allProductos = response.data;
                    this.productos = this.allProductos.slice(0, this.n);
                    this.paginas = Math.ceil(this.allProductos.length/this.n);
                }).finally( () => this.cargando = false);;
            } else {
                this.cargando = false;
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