<template>
  <v-container>
      <v-row>
          <v-col cols="12" class="text-h1">
              Inventario
          </v-col>
          <v-col cols="12">
              <v-btn color="green"><v-icon left>mdi-plus</v-icon>Nuevo Producto</v-btn>
          </v-col>
          <v-col cols="12" sm="6" md="4" lg="3" v-for="producto in productos" :key="producto.id">
              <v-card>
                  <v-app-bar color="teal lighten-3" flat>
                      <v-toolbar-title>
                          {{ producto.nombre }}
                      </v-toolbar-title>
                      <v-spacer></v-spacer>
                      <v-icon>mdi-pencil</v-icon>
                      <v-icon>mdi-delete</v-icon>
                  </v-app-bar>
                  <div class="d-flex flex-no-wrap justify-space-between">
                      <div>
                        <v-img :src="producto.imagen_url" width="100px" height="100px" contain></v-img></div>
                        <div>
                            <div>Precio: {{ producto.precio }}</div>
                            <div>Cantidad: {{ producto.cantidad }}</div>
                        </div>
                  </div>
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
        for (let index = 0; index < 4; index++) {
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