<template>
    <div>
        <v-dialog v-model="mostrar" max-width="500px">
          <v-card>
            <v-card-title class="headline">¿Seguro que desea eliminar este item?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="cancelar">Cancelar</v-btn>
              <v-btn color="blue darken-1" text @click="confirmarEliminar">Sí</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
    </div>
</template>

<script>
    export default {
        props: ["item", "mostrar", "tipo"],
        methods:{
            cancelar(){
                this.$emit("cancelarEliminar");
            },
            confirmarEliminar(){
                this.$emit("confirmarEliminar", this.item, this.tipo)
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>