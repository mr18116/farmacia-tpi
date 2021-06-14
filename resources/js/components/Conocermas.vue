<template>
  <section id="download">
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col cols="10">
          <v-row align="center" justify="center">
            <v-col sm="4" class="hidden-xs-only">
              <v-img src="https://firebasestorage.googleapis.com/v0/b/farmacia-tpi.appspot.com/o/Banner%2FMedicamentos.png?alt=media&token=2842afdc-72d4-408b-a443-bf0f33784d53" class="d-block ml-auto mr-auto" max-width="350px" />
            </v-col>
            <v-col cols="12" md="6" xl="8" class="white--text text-left">
              <h1 class="font-weight-light display-2 mb-2">Calidad</h1>
              <h1 class="font-weight-light">
                Está presente en cada paso que damos, queremos asegurar el éxito de nuestras marcas dotándolas de la mejor calidad.
              </h1>              
              <v-btn rounded outlined @click="$router.push('/nosotros')" target="_blank" large color="white" class="mt-4">
                <v-icon class="mr-2">
                  mdi-github
                </v-icon>
                Cononcer más
              </v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<style scoped>
#download {
  background-image: url("https://image.freepik.com/vector-gratis/fondo-medico-azul-elegante-hexagono_1017-19373.jpg");
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 500px;
}

#download .container,
#download .row {
  height: 100%;
}
</style>