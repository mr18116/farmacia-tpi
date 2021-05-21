<template>
<section id="hero">
    <v-parallax dark src="https://estaticos.qdq.com/swdata/home_photos/665/665544730/295d3f4faee244429eaf4b4dbc5d711a.jpg" height="750">
      <v-row align="center" justify="center">
        <v-col cols="10">
          <v-row align="center" justify="center">
            <v-col cols="12" md="6" xl="8">
              <h1 class="display-2 font-weight-black mb-4">Somos tu mejor opción</h1>
              <h1 class="font-weight-light">
                Lorem ipsum dolor sit amet consectetur <br />
                adipisicing elit. Maiores porro voluptatibus <br />
                delectus nam optio harum!
              </h1>
              <v-btn
                rounded
                outlined
                large
                dark
                @click="$vuetify.goTo('#features')"
                class="mt-5"
              >
                Saber más
                <v-icon class="ml-2">mdi-arrow-down</v-icon>
              </v-btn>
            </v-col>
            <v-col cols="12" md="6" xl="4" class="hidden-sm-and-down"> </v-col>
          </v-row>
        </v-col>
      </v-row>
            <div class="svg-border-waves text-white">
        <v-img src="https://firebasestorage.googleapis.com/v0/b/farmacia-tpi.appspot.com/o/Banner%2FborderWaves.svg?alt=media&token=c2ad04db-4fcc-419e-9a42-ebac98c1360e" />
      </div>
    </v-parallax>
      <div class="svg-border-waves text-white">
        <v-img src="https://firebasestorage.googleapis.com/v0/b/farmacia-tpi.appspot.com/o/Banner%2FborderWaves.svg?alt=media&token=c2ad04db-4fcc-419e-9a42-ebac98c1360e" />
      </div>
        <v-row class="text-h4 text-center">
            <v-col>Lo último</v-col>
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
              <v-hover v-slot:default="{ hover }">
                <CardsProductos shaped :elevation="hover ? 10 : 4"
                  :class="{ up: hover }" :n="4" parametro="mas_vendidos" />
              </v-hover>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
        <v-row class="text-h4 text-center">
            <v-col>Lo más vendido</v-col>
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
              <v-hover v-slot:default="{ hover }">
                <CardsProductos shaped :elevation="hover ? 10 : 4"
                  :class="{ up: hover }" :n="4" parametro="nuevos" />
              </v-hover>
            </v-col>
          </v-row>
        </v-col>
      </v-row>  
      <div class="svg-border-waves">
      <img src="https://firebasestorage.googleapis.com/v0/b/farmacia-tpi.appspot.com/o/Banner%2Fwave2.svg?alt=media&token=a59b4b8a-8362-45f3-b327-912eaeca7fbb" />
      </div>
          <conocermas />

</section>

</template>

<script>
import CardsProductos from '../components/CardsProductos';
import conocermas from "../components/Conocermas";
export default {
    components: {
        CardsProductos,
        conocermas,
    },
    data () {
      return {

      }
    },
}
</script>

<style>
.svg-border-waves .v-image {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 3rem;
  width: 100%;
  overflow: hidden;
}

.svg-border-waves img {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  margin-bottom: -2px;
  z-index: -1;
}

.zoom-efect {
  transform: scale(1.1);
}

.up {
  transform: translateY(-20px);
  transition: 0.5s ease-out;
}
</style>
<style>
section {
  position: relative;
}
</style>
