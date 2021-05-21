<template>
    <div>
        <v-dialog v-model="editar" persistent max-width="vh">
            <v-card>
                <v-card-title>
                    <span class="headline">Editar</span>
                </v-card-title>
                <v-card-text>
                    <v-container>
                        <v-row>
                            <v-col cols="12" sm="4" md="4" v-if="nuevaImagenUrl == '' ">
                                <v-img :src="producto.imagen_url"></v-img> 
                                 <v-file-input
                                    label="File input"
                                    filled
                                    prepend-icon="mdi-camera"
                                    v-model="nuevaImagen"
                                ></v-file-input>                                 
                            </v-col>
                            <v-col cols="12" sm="4" md="4" v-else>
                                <v-img :src="nuevaImagenUrl"></v-img>    
                                 <v-file-input
                                    label="File input"
                                    filled
                                    prepend-icon="mdi-camera"
                                    v-model="nuevaImagen"
                                ></v-file-input>                          
                            </v-col>                                                        
                            <v-col cols="12" sm="8">
                                <v-row>
                                    <v-col cols="12" sm="2">
                                        <v-text-field
                                            label="ID"
                                            disabled
                                            v-model="producto.id"
                                        ></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="10">
                                        <v-text-field
                                            label="Nombre"
                                            v-model="producto.nombre"
                                        ></v-text-field>
                                    </v-col>
                                    <v-col cols="12">
                                        <v-textarea
                                            label="Descripcion"
                                            v-model="producto.descripcion"
                                        ></v-textarea>
                                    </v-col>
                                    <v-col cols="12" sm="6">
                                        <v-text-field
                                            label="Precio"
                                            v-model="producto.precio"
                                        ></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6">
                                        <v-text-field
                                            label="Cantidad"
                                            v-model="producto.cantidad"
                                            type="number"
                                        ></v-text-field>
                                    </v-col>
                                    <v-col cols="12">
                                        <v-text-field
                                            label="Laboratorio"
                                            v-model="producto.laboratorio"
                                        ></v-text-field>
                                    </v-col>
                                    <v-col cols="12">
                                        <v-textarea
                                            label="Indicaciones"
                                            v-model="producto.indicaciones"
                                        ></v-textarea>
                                    </v-col>
                                </v-row>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="cerrarModal">
                        Cerrar
                    </v-btn>
                    <v-btn color="blue darken-1" text>
                        Guardar
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
export default {
    data: () => ({
        nuevaImagen: null,
        nuevaImagenUrl: '',
    }),
    props: ["editar", "producto"],
    methods: {
        cerrarModal() {
            this.$emit("cerrarModal");
            this.nuevaImagen = null,
            this.nuevaImagenUrl = ''
        }
    },
    watch:{
        nuevaImagen: function(){
            this.nuevaImagenUrl = URL.createObjectURL(this.nuevaImagen);
            console.log(this.nuevaImagenUrl)
        }
    }
};
</script>

<style lang="scss" scoped></style>
