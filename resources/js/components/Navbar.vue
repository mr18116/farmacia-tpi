<template>
<!--     <v-row align="center">
        <v-app-bar-nav-icon
            @click="$store.state.drawer = !$store.state.drawer"
        ></v-app-bar-nav-icon>
        <router-link to="/">
            <v-toolbar-title flat class="text-uppercase grey--text mainHeader">
                <span>Farmacia</span>
                <span class="font-weight-bold">Online</span>
            </v-toolbar-title>
        </router-link>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-xs-only">
            <v-btn
                text
                color="grey darken-3"
                to="/login"
                v-if="$store.state.user == null"
            >
                <span class="mr-2">Iniciar Sesión</span>
                <v-icon color="grey darken-3">mdi-account</v-icon>
            </v-btn>
            <v-btn
                text
                color="grey darken-3"
                to="/register"
                v-if="$store.state.user == null"
            >
                <span class="mr-2">Registrarse</span>
                <v-icon color="grey darken-3">mdi-account</v-icon>
            </v-btn>
            <v-btn
                text
                color="grey darken-3"
                v-if="$store.state.user != null"
                @click="logout"
            >
                <span>Cerrar sesión</span>
                <v-icon color="grey darken-3">mdi-logout</v-icon>
            </v-btn>
            <v-icon class="px-2">mdi-cart</v-icon>
        </v-toolbar-items>
        <div class="hidden-sm-and-up">
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
                    <v-list-item
                        v-if="$store.state.user != null"
                        @click="logout"
                    >
                        <v-list-item-title
                            ><router-link to="/register"
                                >Cerrar sesión</router-link
                            ></v-list-item-title
                        >
                    </v-list-item>
                </v-list>
            </v-menu>
        </div>
    </v-row> -->

  <div>
    <v-navigation-drawer
      v-model="drawer"
      app
      temporary
      dark 
      src="https://firebasestorage.googleapis.com/v0/b/farmacia-tpi.appspot.com/o/Banner%2FbgDrawer.jpg?alt=media&token=749fc88d-914f-4e6e-8f2b-52e08d8abec3"
    >
      <v-divider />
    </v-navigation-drawer>

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
            @click="$store.state.drawer = !$store.state.drawer">
        </v-app-bar-nav-icon>
      </v-toolbar-title>
      <a href="/"><v-img class="mb-n1 mx-auto" src="https://firebasestorage.googleapis.com/v0/b/farmacia-tpi.appspot.com/o/Banner%2Flogotpi.png?alt=media&token=439d43f4-e37a-4a4e-bb0e-25e7e6efcc05" max-width="200px" /></a>
      <v-spacer /> 
      <v-text-field v-model="query" solo class="my-text-style" 
      background-color="white" dense hide-details="true" label="Buscar producto" @keyup.enter="buscar">
      </v-text-field>
      <v-btn color="black" class="mr-4" height="40px" elevation="0" @click="buscar">
          <v-icon>mdi-magnify</v-icon></v-btn>
      <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
        class="mr-4"
        v-if="isXs"
      />
      <div v-else class="hidden-xs-only">
          <v-badge :content="nProductosCarrito" :value="nProductosCarrito" overlap color="red">
              <v-icon @click="$router.push('/carrito')" large>mdi-cart</v-icon>
          </v-badge>
            <v-btn
                text
                color="grey darken-3"
                to="/login"
                v-if="$store.state.user == null"
            >
                <span class="mr-2 white--text">Iniciar Sesión</span>
                <v-icon color="grey darken-3">mdi-account</v-icon>
            </v-btn>
            <v-btn
                text
                color="grey darken-3"
                to="/register"
                v-if="$store.state.user == null"
            >
                <span class="mr-2 white--text">Registrarse</span>
                <v-icon color="grey darken-3">mdi-account</v-icon>
            </v-btn>
            <v-btn
                text
                color="grey darken-3"
                v-if="$store.state.user != null"
                @click="logout"
            >
                <span class="mr-2 white--text">Cerrar sesión</span>
                <v-icon color="grey darken-3">mdi-logout</v-icon>
            </v-btn>
      </div>
      <div class="hidden-sm-and-up">
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
                    <v-list-item
                        v-if="$store.state.user != null"
                        @click="logout"
                    >
                        <v-list-item-title
                            ><router-link to="/register"
                                >Cerrar sesión</router-link
                            ></v-list-item-title
                        >
                    </v-list-item>
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
    query: '',
  }),
    methods: {
        logout() {
            axios.get("/sanctum/csrf-cookie").then(response => {
                axios.post("/logout").then(async response => {
                    await this.$store.dispatch("getUser");
                    if (this.$route.path == '/inventario') {
                        this.$router.replace('/');
                    }
                });
            });
        },
        buscar(){
            if (this.query != '') {
                this.$router.push('/search/' + this.query);
            }
        }
    },
    computed: {
        nProductosCarrito(){
            return this.$store.getters.nProductosCarrito;
        }
    }
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
