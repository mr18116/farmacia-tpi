<template>
<section id="hero">
    <v-parallax dark src="https://estaticos.qdq.com/swdata/home_photos/665/665544730/295d3f4faee244429eaf4b4dbc5d711a.jpg" height="750">
      <v-row align="center" justify="center">
        <v-col cols="10">
          <v-row align="center" justify="center">
            <v-col cols="12" md="6" xl="8">
              <h1 class="display-2 font-weight-black mb-4 heading teal--text text--darken-3 pt-12">Somos tu mejor opción</h1>
              <h1 class="">
                <span class="heading teal--text text--darken-2 ">Trabajamos duro para brindarte todo lo necesario para tu salud. Siéntete seguro gracias a nuestro servicio integral farmacéutico.</span>
              </h1>
              <v-btn
                rounded
                outlined
                large
                dark
                @click="$vuetify.goTo('#download')"
                class="mt-5"
                color="teal darken"
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
      <v-container fluid>
        <v-row class="justify-center">
          <v-col><p class="cat text-center">Lo último</p></v-col>
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

              <CardsProductos :n="4" tipo="ultimos" />
      
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-row class="justify-center">
          <v-col><p class="cat text-center">Lo más vendido</p></v-col>
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

                <CardsProductos :n="4" tipo="mas-comprados" />
       
            </v-col>
          </v-row>
        </v-col>
      </v-row>  
      </v-container>
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
.heading {color: white; text-shadow: rgb(179, 179, 179) 0.1em 0.1em 0.2em}
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
</style>
<style>
section {
  position: relative;
}
.cat{
    font-weight: 400;
    background-color: #203338;
    border-radius: 0 15px 0 15px;
    color: white !important;
    padding: 5px 15px;
    position: relative;
    font-size: 2.1875rem;
}
</style>
