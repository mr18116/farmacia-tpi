<template>
    <v-card>
        <router-link :to="'/detalle/' + producto.id">
            <v-img height="200" contain :src="producto.imagen_url"></v-img>
        </router-link>
        <v-card-title>
            {{ producto.nombre }}
        </v-card-title>
        <v-card-subtitle>${{ producto.precio }}</v-card-subtitle>
        <v-card-actions>
            <v-row
                align="center"
                justify="center"
                align-content="center"
                no-gutters
            >
                <v-col cols="auto">
                    <v-btn
                        style="padding: 0px; min-width: 30px; min-height: 39px;"
                        outlined
                        @click="disminuir"
                        color="primary darken-2"
                    >
                        <v-icon>mdi-minus</v-icon>
                    </v-btn>
                </v-col>
                <v-col>
                    <v-text-field
                        v-model="cantidad"
                        hide-details="true"
                        dense
                        outlined
                        class="centered-input"
                        color="primary darken-2"
                    >
                    </v-text-field>
                </v-col>
                <v-col cols="auto">
                    <v-btn
                        style="padding: 0px; min-width: 30px; min-height: 39px;"
                        outlined
                        @click="aumentar"
                        color="primary darken-2"
                    >
                        <v-icon>mdi-plus</v-icon>
                    </v-btn>
                </v-col>
                <v-spacer></v-spacer>
                <v-col cols="auto" class="mt-1 mt-lg-0">
                    <v-btn icon outlined color="primary darken-2" block>
                        <v-icon>mdi-cart-plus</v-icon>
                    </v-btn>
                </v-col>
            </v-row>
        </v-card-actions>
    </v-card>
</template>

<script>
export default {
    props: {
        producto: Object
    },
    data: () => ({
        cantidad: 1
    }),
    methods: {
        disminuir() {
            if (this.cantidad > 1) {
                this.cantidad--;
            }
        },
        aumentar() {
            this.cantidad++;
        }
    }
};
</script>

<style scoped>
.centered-input >>> input {
    text-align: center;
}
</style>
