<template>
  <v-card>
        <v-row>
            <v-col cols="3">
                <v-img height="150" contain :src="producto.producto.imagen_url"></v-img>
            </v-col>
            <v-col cols="6">
                <div>{{ producto.producto.nombre }}</div>
                <div>{{ producto.producto.precio }}</div>
            </v-col>
            <v-col cols="3">
                <div>{{ producto.cantidad }}</div>
                <v-btn>Eliminar</v-btn>
            </v-col>
        </v-row>
        <v-divider></v-divider>
        <v-row>
            <v-col cols="12">
                Subtotal ${{ producto.producto.precio*producto.cantidad }}
            </v-col>
        </v-row>
    </v-card>
</template>

<script>
export default {

    props: {
        producto: Object,
    }

}
</script>

<style>

</style>