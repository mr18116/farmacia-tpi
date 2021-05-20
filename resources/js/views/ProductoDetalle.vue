<template>
    <div>
        <v-container fluid>
            <v-row>
                <v-col cols="12" md="6" class="">
                    <v-carousel
                        cycle
                        height="400"
                        hide-delimiter-background
                        show-arrows-on-hover
                    >
                        <v-carousel-item
                            v-for="(imagen, i) in imagenes"
                            :key="i"
                            :src="imagen"
                        >
                        </v-carousel-item>
                    </v-carousel>
                </v-col>
                <v-col cols="12" md="6" class="">
                    Hola
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
export default {
    data: () => ({
        imagenes: [
            "https://www.farmaciasannicolas.com/Producto/GetMultimediaProducto?idProducto=c4d90d93-d0ad-4873-8bf3-4f5052c19505&idMultimedia=e9363332-777b-4862-a180-9a6db039f588",
            "https://www.farmaciasannicolas.com/Producto/GetMultimediaProducto?idProducto=c4d90d93-d0ad-4873-8bf3-4f5052c19505&idMultimedia=e9363332-777b-4862-a180-9a6db039f588"
        ]
    })
};
</script>

<style lang="scss" scoped></style>
