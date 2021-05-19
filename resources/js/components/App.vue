<template>
    <v-app>
            <Navbar />
            {{ $store.state.user }}
        <v-main>
            <router-view></router-view>
        </v-main>
        <v-footer>
            footer
        </v-footer>
    </v-app>
    
</template>

<script>
import Login from '../views/Login';
import Navbar from './Navbar.vue';
export default {
    components: { Navbar },
    created(){
        console.log(this.$store.state.user);
    }        
}
</script>

<style lang="scss" scoped>

</style>