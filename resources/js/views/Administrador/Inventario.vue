<template>
  <v-container>
      <v-row>
          <v-col cols="12" class="text-h1">
              Inventario
          </v-col>
          <v-col cols="12">
              <v-btn color="green"><v-icon left>mdi-plus</v-icon>Nuevo Producto</v-btn>
          </v-col>
          <v-col cols="12" md="6" v-for="producto in productos" :key="producto.id">
              <v-card>
                  <v-app-bar color="teal lighten-3" flat>
                      <v-toolbar-title>
                          {{ producto.nombre }}
                      </v-toolbar-title>
                      <v-spacer></v-spacer>
                      <v-icon>mdi-playlist-plus</v-icon>
                      <v-icon>mdi-pencil</v-icon>
                      <v-icon>mdi-delete</v-icon>
                  </v-app-bar>
                  <div class="d-flex flex-no-wrap justify-space-between">
                        <v-img :src="producto.imagen_url" height="100px" contain></v-img>
                  </div>
                  <div>
                      <h4>Generales</h4>
                  </div>
                  <div>
                      <h4>Descripcion</h4>
                  </div>
                  <div>
                      <h4>Indicaciones</h4>
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
            };
            this.productos.push(ejemplo);
        }
    }
}
</script>

<style>

</style>