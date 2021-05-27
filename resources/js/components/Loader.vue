<template>
    <div>
        <v-dialog v-model="cargando" max-width="225" persistent>
            <v-card>
                <v-card-text>
                    <v-row align="center">
                        <v-col cols="12">
                            <p class="title text-center">
                                Cargando...
                            </p>
                        </v-col>
                        <v-col cols="12">
                            <v-progress-circular
                                :size="150"
                                :width="7"
                                color="primary"
                                indeterminate
                            ></v-progress-circular>
                        </v-col>
                    </v-row>
                </v-card-text>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
export default {
    props: ["cargando"]
};
</script>

<style lang="css" scoped>
.v-progress-circular {
    margin: 1rem;
}
</style>
