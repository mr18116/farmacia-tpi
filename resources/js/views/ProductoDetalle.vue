<template>
    <v-container fluid>
        <v-app-bar
            color="#0077c9"
            class="px-5">
        </v-app-bar>
      <div class="row pt-10">
        <div class="col-md-5 col-sm-5 col-xs-12">
            <v-img  class="elevation-1" :src="producto.imagen_url"></v-img>
        </div>
        <div class="col-md-7 col-sm-7 col-xs-12">
          <v-breadcrumbs class="pb-0" :items="etiquetas"></v-breadcrumbs>
          <div class="pl-6">
            <p class="display-1 mb-1">{{ producto.nombre }}</p>
            <v-card-actions>
              <p class="headline font-weight-light pt-3">${{ producto.precio }} <del style="" class="subtitle-1 font-weight-thin">$80.00</del></p>
              <v-rating v-model="rating" class="pl-10" background-color="warning lighten-3" color="warning" dense></v-rating>
              <span class="font-weight-thin"> 25 REVIEWS</span>
            </v-card-actions>
            <p class="subtitle-1 font-weight-thin">
              <pre>{{ producto.indicaciones }}</pre>
            </p>
            <p class="title">CANTIDAD</p>

            <v-text-field
                v-model="cantidad"
                class="centered-input"
                outlined
                style="width:100px"
                dense
            ></v-text-field>
            <v-btn class="primary white--text" outlined tile dense><v-icon>mdi-cart</v-icon> Agregar</v-btn>

          </div>
      </div>
      </div>
      <div class="row">
        <div class="col-sm-12 col-xs-12 col-md-12">
            <v-tabs>
            <v-tab >Description</v-tab>
            <v-tab >Indicaciones</v-tab>
            <v-tab>REVIEWS</v-tab>
            <v-tab-item>
              <p class="pt-10 subtitle-1 font-weight-thin">
                {{producto.descripcion}}}
              </p>
            </v-tab-item>
            <v-tab-item>
              <p class="pt-10 subtitle-1 font-weight-thin">
                <pre>{{ producto.indicaciones }}</pre>
              </p>
            </v-tab-item>
            <v-tab-item>
              <v-list
                three-line="true"
                avatar="true">
                <v-list-item-group v-model="item" color="primary">
                  <v-list-item
                    v-for="(item, i) in items"
                    :key="i"
                    inactive="true">
                    <v-list-item-avatar>
                      <v-img :src="item.avatar"></v-img>
                    </v-list-item-avatar>
                    <v-list-item-content>
                      <v-list-item-title v-html="item.title"></v-list-item-title>
                      <v-rating v-model="rating" background-color="warning lighten-3" color="warning" dense></v-rating>
                      <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </v-tab-item>
          </v-tabs>
            <v-card-text
            class="pa-0 pt-4"
            tile
            outlined
          >
            <p class="subtitle-1 font-weight-light pt-3 text-center">PRODUCTOS RELACIONADOS</p>
            <v-divider></v-divider>
            </v-card-text>
            
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
                    <v-hover v-slot:default="{ hover }">
                        <CardsProductos shaped :elevation="hover ? 10 : 4"
                        :class="{ up: hover }" :n="4" parametro="ultimos" />
                    </v-hover>
                    </v-col>
                </v-row>
                </v-col>
            </v-row>
        </div>
        
      </div>
    </v-container>
</template>

<script>
import CardsProductos from "../components/CardsProductos";

export default {
  components: {
    CardsProductos,
  },
  data: () => ({
    producto: {
      nombre: "NEUROGLUTAN AMPOLLAS BEBIBLES X 12 SACHET",
      imagen_url:
        "https://www.farmaciasannicolas.com/Producto/GetMultimediaProducto?idProducto=022e3d37-b35d-404c-9187-8192ecf46404&idMultimedia=e8d015ed-f476-40f7-b3a6-5c1224e8ca73",
      descripcion:
        "Neuroglután está indicado para el cansancio físico y mental. Mejora la capacidad de concentración y la memoria. Es un estimulante cerebral que contiene ácido glutámico que activa la circulación del cerebro. Además posee las vitaminas b1, b6, b12 y ginseng coreano. Estos componentes mejoran el estado de ánimo y el sistema nervioso.",
      precio: 8.26,
      laboratorio: "",
      cantidad: 1,
      indicaciones:
        "1. Tomar Medicamento en la mañana.\n2. No tomar mucha agua.\n3. Beber mucha agua",
    },
    cantidad: 1,
    rating: 4.5,
    etiquetas: [
      {
        text: "Inicio",
        disabled: false,
        href: "/",
      },
      {
        text: "Alergias",
        disabled: false,
        href: "#",
      },
      {
        text: "Antialergicos",
        disabled: true,
        href: "#",
      },
    ],
    item: 3,
    items: [
      {
        avatar:
          "https://pbs.twimg.com/profile_images/1393419008540659712/kKFelPMI_400x400.jpg",
        title: "Me parece un medicamente increible",
        subtitle:
          "<span class='text--primary'>Nayib Bukele</span> &mdash; Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl tincidunt eget nullam non. Tincidunt arcu non sodales neque sodales ut etiam. Lectus arcu bibendum at varius vel pharetra. Morbi tristique senectus et netus et malesuada.\n" +
          "\n",
      },
      {
        avatar:
          "https://static.elmundo.sv/wp-content/uploads/2020/03/Francisco-Alabi-1.jpg",
        title: "Wow!",
        subtitle:
          "<span class='text--primary'>Alabi, Scott, Jennifer</span> &mdash; Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
      },
      {
        avatar:
          "https://s.france24.com/media/display/1418cfe0-964a-11eb-a27e-005056bf87d6/w:1280/p:16x9/putin-5.webp",
        title: "удивительный",
        subtitle:
          "<span class='text--primary'>Vladimir Putín</span> &mdash; Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      },
    ],
  }
  ),
};
</script>
<style lang="scss">
.centered-input input {
  text-align: center;
}
.up {
  transform: translateY(-10px);
  transition: 0.5s ease-out;
}
</style>