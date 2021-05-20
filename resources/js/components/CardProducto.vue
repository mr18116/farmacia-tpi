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
            <v-row align="center" justify="center" align-content="center" no-gutters>
                <v-col cols="auto">
                    <v-btn  style="padding: 0px; min-width: 39px; min-height: 39px;" outlined @click="disminuir">
                        <v-icon>mdi-minus</v-icon>
                    </v-btn>
                </v-col>
                <v-col lg="2">
                    <v-text-field v-model="cantidad" hide-details="true" dense outlined class="centered-input">
                    </v-text-field>
                </v-col>
                <v-col cols="auto">
                    <v-btn style="padding: 0px; min-width: 39px; min-height: 39px;" outlined @click="aumentar">
                        <v-icon>mdi-plus</v-icon>
                    </v-btn>
                </v-col>
                <v-spacer class="d-none d-lg-block"></v-spacer>
                <v-col cols="12" lg="6" class="mt-1 mt-lg-0">
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

<style scoped>
    .centered-input >>> input {
      text-align: center;
    }
</style>