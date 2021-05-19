<template>
  <v-row>
      <v-col cols="6" sm="4" md="3" v-for="producto in productos" :key="producto.id">
          <CardProducto :producto="producto" />
      </v-col>
  </v-row>
</template>

<script>
import CardProducto from './CardProducto';
export default {
    components: {
        CardProducto
    },
    props: {
        n: Number,
        parametro: String,
    },
    data: () => ({
        productos: [],
    }),
    methods: {

    },
    created(){
        for (let index = 0; index < this.n; index++) {
            let ejemplo = {
                id: index,
                nombre: 'ALERCET JARABE FRASCO X 60 ML ' + (index + 1),
                imagen_url: 'https://www.farmaciasannicolas.com/Producto/GetMultimediaProducto?idProducto=c4d90d93-d0ad-4873-8bf3-4f5052c19505&idMultimedia=e9363332-777b-4862-a180-9a6db039f588',
                precio: 8.95,
            };
            this.productos.push(ejemplo);
        }
    }
}
</script>

<style>

</style>