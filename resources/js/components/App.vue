<template>
    <v-app>
        <v-navigation-drawer v-model="drawer" app >
            <Navbar />
        </v-navigation-drawer>
        <v-app-bar app elevation="3" color="white" >
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title>Farmacia TPI</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-icon>mdi-cart</v-icon>
            
        </v-app-bar>
        <v-main>
            {{ $store.state.user }}
            <router-view></router-view>
        </v-main>
        <v-footer>
            footer
        </v-footer>
    </v-app>
    
</template>

<script>
import Login from '../views/Login';
import NavbarDerecha from './layout/NavbarDerecha'

export default {
    data:() =>({
        drawer: true,
    }),
    components:{
        NavbarDerecha
    },
    created(){
        console.log(this.$store.state.user);
    }        
}
</script>

<style lang="scss" scoped>

</style>