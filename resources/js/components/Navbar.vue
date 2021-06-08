<template>
  <div>
    <v-app-bar
      app
      :color="color"
      :flat="flat"
      dark
      class="px-5"
      :class="{ expand: flat }"
    >
      <v-toolbar-title>
        <v-app-bar-nav-icon
          class="black--text pr-10"
          @click="$store.state.drawer = !$store.state.drawer"
        >
        </v-app-bar-nav-icon>
      </v-toolbar-title>
      <a href="/">
        <v-img
          class="mb-n1 mx-auto hidden-sm-and-down"
          src="https://firebasestorage.googleapis.com/v0/b/farmacia-tpi.appspot.com/o/Banner%2Flogotpi.png?alt=media&token=439d43f4-e37a-4a4e-bb0e-25e7e6efcc05"
          max-width="200px"
        />
        <v-img
          class="mb-n1 mx-auto hidden-md-and-up"
          src="https://firebasestorage.googleapis.com/v0/b/farmacia-tpi.appspot.com/o/Banner%2Flogoxs.png?alt=media&token=1cb20e16-d328-48b2-a73e-0eae847596d0"
          max-width="50px"
        />
      </a>
      <v-spacer />
      <v-text-field
        v-model="query"
        solo
        class="my-text-style"
        background-color="white"
        dense
        hide-details="true"
        label="Buscar producto"
        @keyup.enter="buscar"
      >
      </v-text-field>
      <v-btn
        color="black"
        class="mr-4"
        height="40px"
        elevation="0"
        @click="buscar"
      >
        <v-icon>mdi-magnify</v-icon></v-btn
      >
      <v-spacer></v-spacer>
      <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
        class="mr-4"
        v-if="isXs"
      />
      <div v-else class="hidden-md-and-down">
        <v-badge
          :content="nProductosCarrito"
          :value="nProductosCarrito"
          overlap
          color="red"
        >
          <v-icon @click="$router.push('/carrito')" large color="black"
            >mdi-cart</v-icon
          >
        </v-badge>
        <v-btn
          text
          color="grey darken-3"
          to="/login"
          v-if="$store.state.user == null"
        >
          <v-icon color="grey darken-3" left>mdi-account</v-icon>
          <span class="mr-2">Iniciar Sesión</span>
        </v-btn>
        <v-btn
          text
          color="grey darken-3"
          to="/register"
          v-if="$store.state.user == null"
        >
          <v-icon color="grey darken-3" left>mdi-account</v-icon>
          <span class="mr-2">Registrarse</span>
        </v-btn>
      </div>
      <div class="hidden-lg-and-up">
        <v-menu offset-y>
          <template v-slot:activator="{ on }">
            <v-app-bar-nav-icon v-on="on"
              ><v-icon color="grey darken-3"
                >mdi-account</v-icon
              ></v-app-bar-nav-icon
            >
          </template>
          <v-list class="responsiveMenu">
            <v-list-item v-if="$store.state.user == null">
              <v-list-item-title
                ><router-link to="/login"
                  >Iniciar Sesión</router-link
                ></v-list-item-title
              >
            </v-list-item>
            <v-list-item v-if="$store.state.user == null">
              <v-list-item-title
                ><router-link to="/register"
                  >Registrarse</router-link
                ></v-list-item-title
              >
            </v-list-item>
            <v-list-item v-if="$store.state.user != null" @click="logout">
              <v-list-item-title
                ><router-link to="/register"
                  >Cerrar sesión</router-link
                ></v-list-item-title
              >
            </v-list-item>
            <v-list-item>
              <v-badge
                :content="nProductosCarrito"
                :value="nProductosCarrito"
                overlap
                color="red"
              >
                <v-icon @click="$router.push('/carrito')" large color="black"
                  >mdi-cart</v-icon
                >
              </v-badge></v-list-item
            >
          </v-list>
        </v-menu>
      </div>
    </v-app-bar>
  </div>
</template>
<script>
import axios from "axios";

axios.defaults.withCredentials = true;

export default {
  props: {
    color: String,
    flat: Boolean,
  },
  data: () => ({
    drawer: null,
    isXs: false,
    query: "",
  }),
  methods: {
    logout() {
      axios.get("/sanctum/csrf-cookie").then((response) => {
        axios.post("/logout").then(async (response) => {
          await this.$store.dispatch("getUser");
          if (this.$route.path == "/inventario") {
            this.$router.replace("/");
          }
        });
      });
    },
    buscar() {
      if (this.query != "") {
        this.$router.push("/search/" + this.query);
      }
    },
  },
  computed: {
    nProductosCarrito() {
      return this.$store.getters.nProductosCarrito;
    },
  },
};
</script>
<style scoped>
.v-toolbar {
  transition: 0.6s;
}

.expand {
  height: 80px !important;
  padding-top: 10px;
}

.my-text-style >>> .v-text-field__slot input {
  color: black;
}

.my-text-style >>> .v-label {
  color: #616161;
  opacity: 1;
}
</style>
