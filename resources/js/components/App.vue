<template>
    <v-app>
        <v-navigation-drawer v-model="$store.state.drawer" app clipped >
            <NavbarDerecha />
        </v-navigation-drawer>
        <v-app-bar elevation="3" color="white" clipped-left  app>
            <Navbar />          
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
import Navbar from './Navbar'

export default {
    components:{
        NavbarDerecha,
        Navbar
    },
    created(){
        console.log(this.$store.state.user);
    }        
}
</script>

<style lang="scss" scoped>

</style>