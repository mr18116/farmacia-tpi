<template>
    <v-app>
        <v-navigation-drawer v-model="drawer" app v-if="$store.state.user != null">
            <Navbar />
        </v-navigation-drawer>
        <v-app-bar app elevation="3" color="white"  v-if="$store.state.user != null">
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
import Navbar from './layout/Navbar'

export default {
    data:() =>({
        drawer: true,
    }),
    components:{
        Navbar
    },
    created(){
        console.log(this.$store.state.user);
    }        
}
</script>

<style lang="scss" scoped>

</style>