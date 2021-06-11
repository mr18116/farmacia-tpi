<template>
    <v-app>
        <Navbar :color="color" :flat="flat" v-if="mostrarLayout"/>
        <v-navigation-drawer
            v-if="mostrarLayout"
            v-model="$store.state.drawer"
            app            
        >
            <NavbarDerecha/>
        </v-navigation-drawer>
        <v-main :class="this.$route.path == '/' ? 'pt-0' : ''">
            <router-view></router-view>
        </v-main>
        <v-scale-transition>
            <v-btn
                fab
                v-show="fab"
                v-scroll="onScroll"
                dark
                fixed
                bottom
                right
                color="secondary"
                @click="toTop"
            >
                <v-icon>mdi-arrow-up</v-icon>
            </v-btn>
        </v-scale-transition>
        <footerf />
        <v-snackbar
        v-model="snackCarrito"
        color="green"
        rounded="pill"
        :timeout="3000"
        right
        >
        <v-icon dark left>mdi-cart</v-icon>
        <span class="text-subtitle-1">Producto agregado al <router-link to="/carrito" class="white--text font-weight-bold">carrito</router-link></span>
        <template v-slot:action="{ attrs }">
            <v-btn
            icon
            v-bind="attrs"
            @click="snackCarrito = false"
            >
            <v-icon dark>mdi-window-close</v-icon>
            </v-btn>
        </template>
        </v-snackbar>

    </v-app>

    <!--     <v-app>
        <v-navigation-drawer v-if="mostrarLayout" v-model="$store.state.drawer" app clipped >
            <NavbarDerecha />
        </v-navigation-drawer>
        <v-app-bar v-if="mostrarLayout" elevation="3" color="teal lighten-3" clipped-left  app>
            <Navbar :color="color" :flat="flat" />       
        </v-app-bar>
        <v-main class="grey lighten-4">
            <router-view></router-view>
        </v-main>
        <v-footer>
            footer
        </v-footer>
    </v-app> -->
</template>

<script>
import Navbar from "./Navbar";
import NavbarDerecha from "./layout/NavbarDerecha";
import footerf from "./Footer";

export default {
    components: {
        Navbar,
        NavbarDerecha,
        footerf
    },

    data: () => ({
        mostrar: true,
        fab: null,
        color: "",
        flat: null,
        snackCarrito: false,
    }),
    created() {
        const top = window.pageYOffset || 0;
        if (top <= 60) {
            this.color = "transparent";
            this.flat = true;
        }
        console.log(this.$store.state.user);
    },
    computed: {
        mostrarLayout() {
            if (
                this.$route.path == "/login" ||
                this.$route.path == "/register"
            ) {
                return false;
            } else {
                return true;
            }
        }
    },
    watch: {
        fab(value) {
            if (value) {
                this.color = "light-blue lighten-2";
                this.flat = false;
            } else {
                this.color = "transparent";
                this.flat = true;
            }
        },
        '$store.state.addCarrito'(newV, oldV){
            if (newV == false && oldV == true) {
                this.snackCarrito = true;
            }
        }
    },

    methods: {
        onScroll(e) {
            if (typeof window === "undefined") return;
            const top = window.pageYOffset || e.target.scrollTop || 0;
            this.fab = top > 40;
        },
        toTop() {
            this.$vuetify.goTo(0);
        }
    }
};
</script>

<style scoped>
.v-main {
    background-image: url("https://firebasestorage.googleapis.com/v0/b/farmacia-tpi.appspot.com/o/Banner%2FbgMain.png?alt=media&token=03365016-46b1-4e49-988d-86e075aa7ae3");
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
}
</style>
