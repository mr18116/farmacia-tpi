<template>
    <v-app>
        <v-app-bar app flat>
            app-bar
            {{ $store.state.user }}
        </v-app-bar>
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
export default {
    created(){
        console.log(this.$store.state.user);
    }        
}
</script>

<style lang="scss" scoped>

</style>