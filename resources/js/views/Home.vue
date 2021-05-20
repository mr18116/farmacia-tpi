<template>

    <v-container fluid>
        <v-carousel>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
      transition="fade-transition"
    ></v-carousel-item>
  </v-carousel>
        <v-row class="text-h4">
            <v-col>Mas vendidos</v-col>
        </v-row>
        <CardsProductos :n="4" parametro="mas_vendidos" />
        <v-row class="text-h4 mt-16">
            <v-col>Nuevos</v-col>
        </v-row>
        <CardsProductos :n="4" parametro="nuevos" />
    </v-container>
</template>

<script>
import CardsProductos from '../components/CardsProductos';
export default {
    components: {
        CardsProductos,
    },
    data () {
      return {
        items: [
          {
            src: 'https://s3-us-west-2.amazonaws.com/wp-mpro-blog/wp-content/uploads/2018/10/22032059/Blog-farmacia-01-min.jpg',
          },
          {
            src: 'https://aspec.org.pe/wp-content/uploads/2020/06/farmacia.jpg',
          },
          {
            src: 'https://centroecuatorianodecapacitacion.com/wp-content/uploads/2015/06/farmacia2.jpg',
          },
          {
            src: 'https://image.freepik.com/foto-gratis/cliente-mujer-carpeta-farmacia_1368-17805.jpg',
          },
        ],
      }
    },
}
</script>

<style lang="scss" scoped>

</style>