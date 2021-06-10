<template>
<v-container class="mt-10">
      <v-row align="center" justify="center">
        <v-col cols="10">
          <v-row align="center" justify="space-around">
            <v-col
              cols="12"
              sm="4"
              class="text-center"
              v-for="(feature, i) in features"
              :key="i"
            >
              <v-hover v-slot:default="{ hover }">
                <v-card
                  class="card"
                  shaped
                  :elevation="hover ? 10 : 4"
                  :class="{ up: hover }"
                >
                  <v-img
                    :src="feature.img"
                    max-width="100px"
                    class="d-block ml-auto mr-auto"
                    :class="{ 'zoom-efect': hover }"
                  ></v-img>
                  <h1 class="font-weight-regular">{{ feature.title }}</h1>
                  <h4 class="font-weight-regular subtitle-1">
                    {{ feature.text }}
                  </h4>
                </v-card>
              </v-hover>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
</template>
<script>
export default {
    data() {
        return{
     features: [
        {
          img: "https://firebasestorage.googleapis.com/v0/b/farmacia-tpi.appspot.com/o/Banner%2Fsobrenosotros.png?alt=media&token=deb1b198-acb8-4010-b8ca-105e5bf64117",
          title: "Sobre Nosotros",
          text: "FarmaciaTPI es una farmacia online que cuenta con una gran experiencia en servicio y atención al cliente, formado por un grupo de profesionales a tu disposición para darte y ofrecerte siempre lo mejor.",
        },
        {
          img: "https://firebasestorage.googleapis.com/v0/b/farmacia-tpi.appspot.com/o/Banner%2Fmision.jpeg?alt=media&token=b5be351b-456f-4c90-b68c-632efc96cb70",
          title: "Misión",
          text: "Ofrecer una asistencia sanitaria de calidad, para alcanzar y mantener la salud, ofreciendo servicios farmacéuticos y productos, de forma profesional, servicial y cercana.",
        },
        {
          img: "https://firebasestorage.googleapis.com/v0/b/farmacia-tpi.appspot.com/o/Banner%2Fvision.png?alt=media&token=30a993e6-40c9-4fee-a60e-aadcae547dd2",
          title: "Visión",
          text: "Con respecto a nuestros usuarios: facilitar un rápido acceso a los productos que precisen, primando los servicios profesionales, para que saquen el máximo beneficio a sus medicamentos.",
        },
      ]  
        }
    },
}
</script>

<style>
.card {
  min-height: 300px;
  padding: 10px;
  transition: 0.5s ease-out;
}
.card .v-image {
  margin-bottom: 15px;
  transition: 0.75s;
}
.card h1 {
  margin-bottom: 10px;
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