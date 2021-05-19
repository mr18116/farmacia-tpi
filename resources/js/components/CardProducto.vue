<template>
    <v-card>
        <v-img
        height="200"
        contain
        :src="producto.imagen_url"
        ></v-img>
        <v-card-title>
            {{ producto.nombre }}
        </v-card-title>
        <v-card-subtitle>${{ producto.precio }}</v-card-subtitle>
        <v-card-actions>
            <v-row align="center" justify="center" no-gutters>
                <v-col cols="auto">
                    <v-btn dark style="padding: 0px; min-width: 36px;" @click="disminuir">
                        <v-icon>mdi-minus</v-icon>
                    </v-btn>
                </v-col>
                <v-col cols="4" md="2">
                    <v-text-field v-model="cantidad" hide-details="true" dense outlined>
                    </v-text-field>
                </v-col>
                <v-col cols="auto">
                    <v-btn dark style="padding: 0px; min-width: 36px;" @click="aumentar">
                        <v-icon>mdi-plus</v-icon>
                    </v-btn>
                </v-col>
                <v-spacer class="d-none d-lg-block"></v-spacer>
                <v-col cols="12" lg="auto">
                    <v-btn dark block>
                        <v-icon left>mdi-cart-plus</v-icon>
                        Agregar
                    </v-btn>
                </v-col>
            </v-row>
        </v-card-actions>
    </v-card>
</template>

<script>
export default {
    props: {
        producto: Object,
    },
    data: () => ({
        cantidad: 1,
    }),
    methods: {
        disminuir(){
            if (this.cantidad > 1) {
                this.cantidad --;
            }
        },
        aumentar(){
            this.cantidad ++;
        }
    }
}
</script>

<style>

</style>