<template>
  <v-container fluid>
      <v-row>
          <v-col cols="12" class="text-h1">
              Inventario
          </v-col>
          <v-col cols="12">
              <v-btn color="green"><v-icon left>mdi-plus</v-icon>Nuevo Producto</v-btn>
          </v-col>
          <v-col cols="6" sm="4" md="3" lg="2" v-for="producto in productos" :key="producto.id">
              <v-card>
                  <v-app-bar color="teal lighten-3" flat dense>
                      <v-toolbar-title>
                          <div class="text-subtitle-2"> {{ producto.nombre }} </div>
                      </v-toolbar-title>
                      <v-spacer></v-spacer>
                      <v-icon>mdi-pencil</v-icon>
                      <v-icon>mdi-delete</v-icon>
                  </v-app-bar>
                  <v-row align="center">
                      <v-col cols="6">
                          <v-img :src="producto.imagen_url" width="100px" height="100px" contain></v-img>
                      </v-col>
                      
                      <v-col cols="6">
                          <div>Precio: {{ producto.precio }}</div>
                            <div>Cantidad: {{ producto.cantidad }}</div>
                            <v-btn x-small color="blue">Detalles</v-btn>
                      </v-col>
                  </v-row>
              </v-card>
          </v-col>
      </v-row>
  </v-container>
</template>

<script>
export default {
    data: () =>  ({
        productos: []
    }),
    created(){
        for (let index = 0; index < 10; index++) {
            let ejemplo = {
                id: index,
                nombre: 'ALERCET JARABE FRASCO X 60 ML ' + (index + 1),
                imagen_url: 'https://www.farmaciasannicolas.com/Producto/GetMultimediaProducto?idProducto=c4d90d93-d0ad-4873-8bf3-4f5052c19505&idMultimedia=e9363332-777b-4862-a180-9a6db039f588',
                precio: 8.95,
                cantidad: 10,
            };
            this.productos.push(ejemplo);
        }
    }
}
</script>

<style>

</style>