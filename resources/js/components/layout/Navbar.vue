<template>
    <div>
        <v-list-item>
            <v-list-item-avatar>
                <v-avatar>
                    <v-icon>mdi-account-circle</v-icon>
                </v-avatar>
            </v-list-item-avatar>

            <v-list-item-content>
                <v-list-item-title>{{ $store.state.user.name }}</v-list-item-title>
                <v-list-item-subtitle>Logged In</v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>
        <v-row class="d-flex justify-center my-md-3">
            <v-btn  elevation="0" small @click="logout">Cerrar sesión</v-btn>
        </v-row>
        <v-divider></v-divider>
        <v-list>
            <v-list-group
                v-for="item in items"
                :key="item.title"
                v-model="item.active"
                no-action
            >
                <template v-slot:activator>
                    <v-list-item-content>
                        <v-list-item-title
                            v-text="item.title"
                        ></v-list-item-title>
                    </v-list-item-content>
                </template>

                <v-list-item
                    v-for="child in item.items"
                    :key="child.title"
                    link
                    :to="child.link"
                >
                    <v-list-item-content>
                        <v-list-item-title
                            v-text="child.title"
                        ></v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list-group>
        </v-list>
    </div>
</template>

<script>
export default {
    data: () => ({
        items: [
            {
                action: "mdi-ticket",
                items: [{ title: "Antialergicos", link: "antialergicos" }],
                title: "Alergias"
            },
            {
                action: "mdi-silverware-fork-knife",
                items: [
                    { title: "Antibiotico inyectable", link: "antibiotico-inyectable" },
                    { title: "Antibiotico orales", link: "antibiotico-orales"  },
                    { title: "Antibiotico y cicatrizantes topicos",   link: "antibiotico-cicatrizantes-topicos"}
                ],
                title: "Antibioticos y cicatrizantes"
            },
            {
                action: "mdi-school",
                items: [
                    { title: "Anticuagulante y cuagulante",  link: "anticuagulante-cuagulante" },
                    { title: "Circulación saludable", link: "circulación-saludable" },
                    { title: "Colesterol y trigliceridos", },
                    { title: "Corazón" },
                    { title: "Retención de líquidos" }
                ],
                title: "Corazón y presión arterial"
            },
            {
                action: "mdi-run",
                items: [
                    { title: "Insulinas" },
                    { title: "Jeringas y agujas de insulina" },
                    { title: "Medicameno diabetes" }
                ],
                title: "Diabetes"
            },
            {
                action: "mdi-bottle-tonic-plus",
                items: [
                    { title: "Anestesicos" },
                    { title: 'Dolor de cabeza y migraña' },
                    { title: 'Dolor de cuerpo' },
                    { title: 'Dolor menstrual' },
                    { title: 'Circulación saludable' },
                    ],
                title: "Dolor y fiebre"
            },
            {
                action: "mdi-content-cut",
                items: [{ title: "Diarrea" },
                { title: "Parásitos" },
                { title: "Vomitos y nauseas" }
                ],
                title: "Gastrointestinales"
            },
            {
                action: "mdi-tag",
                items: [{ title: "Asma" },
                { title: "Dolor de garganta" },
                  { title: "Gripe y tos" },
                ],
                title: "Gripe, tos y asma"
            }
        ]
    }),
    methods: {
        logout(){
            axios.get("/sanctum/csrf-cookie").then((response) => {
                axios.post("/logout").then(async response => {
                    await this.$store.dispatch('getUser');
                });
            });
        }
    }
};
</script>

<style lang="scss" scoped></style>
