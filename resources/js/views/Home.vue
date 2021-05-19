<template>
    <v-container fluid>
        <v-row class="text-h4">
            <v-col>Mas vendidos</v-col>
        </v-row>
        <CardsProductos :n="4" parametro="mas_vendidos" />
        <v-row class="text-h4 mt-16">
            <v-col>Nuevos</v-col>
        </v-row>
        <CardsProductos :n="4" parametro="nuevos" />
    </v-container>
</template>

<script>
import CardsProductos from '../components/CardsProductos';
export default {
    components: {
        CardsProductos,
    }
}
</script>

<style lang="scss" scoped>

</style>