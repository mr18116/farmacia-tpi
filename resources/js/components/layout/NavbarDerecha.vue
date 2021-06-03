<template>
    <div>
        <v-list-item v-if="$store.state.user != null">
            <v-list-item-avatar>
                <v-avatar>
                    <v-icon>mdi-account-circle</v-icon>
                </v-avatar>
            </v-list-item-avatar>

            <v-list-item-content>
                <v-list-item-title >{{ $store.state.user.name }}</v-list-item-title>
                <v-list-item-subtitle>Logged In</v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item >
        <v-list-item v-else >
            <v-list-item-content>
                <v-list-item-title>Aún no tienes cuenta</v-list-item-title>
            </v-list-item-content>
        </v-list-item>
        <v-row class="d-flex justify-center my-md-3" v-if="$store.state.user != null">
            <v-btn elevation="0" small v-if="$store.state.user != null" color="primary" to="/compras">Ver compras</v-btn>
        </v-row>
        <v-row class="d-flex justify-center my-md-3" v-if="$store.state.user != null">
            <v-btn elevation="0" small @click="logout" v-if="$store.state.user != null" color="red">Cerrar sesión</v-btn>
        </v-row>
        <v-divider v-if="$store.state.rol == 'administrador'"></v-divider>
        <v-list v-if="$store.state.rol == 'administrador'">
            <v-subheader>Administracion</v-subheader>
            <v-list-item to="/inventario" link>
                <v-list-item-content>
                    <v-list-item-title>Inventario</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
             <v-list-item to="/dashboard" link>
                <v-list-item-content>
                    <v-list-item-title>Dashboard</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <v-list-item to="/ventas" link>
                <v-list-item-content>
                    <v-list-item-title>Ventas, pagos y envios</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>
        <v-divider></v-divider>
        <v-list>
            <v-subheader>Medicamentos</v-subheader>
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
                items: [{ title: "Antialergicos", link: "/antialergicos" }],
                title: "Alergias"
            },
            {
                action: "mdi-silverware-fork-knife",
                items: [
                    { title: "Antibiotico inyectable", link: "/antibiotico inyectable" },
                    { title: "Antibiotico orales", link: "/antibiotico orales"  },
                    { title: "Antibiotico y cicatrizantes topicos",   link: "/antibiotico y cicatrizantes topicos"}
                ],
                title: "Antibioticos y cicatrizantes"
            },
            {
                action: "mdi-school",
                items: [
                    { title: "Anticuagulante y cuagulante",  link: "/anticuagulante y cuagulante" },
                    { title: "Circulación saludable", link: "/circulación saludable" },
                    { title: "Colesterol y trigliceridos", link: "/colesterol y trigliceridos"},
                    { title: "Corazón" , link: "/corazon"},
                    { title: "Retención de líquidos", link: "/retencion de liquidos" }
                ],
                title: "Corazón y presión arterial"
            },
            {
                action: "mdi-run",
                items: [
                    { title: "Insulinas", link: "/insulinas" },
                    { title: "Jeringas y agujas de insulina", link: "/jeringas y agujas de insulina" },
                    { title: "Medicamento diabetes", link: "/medicamento diabetes" }
                ],
                title: "Diabetes"
            },
            {
                action: "mdi-bottle-tonic-plus",
                items: [
                    { title: "Anestesicos", link: "/anestesicos" },
                    { title: 'Dolor de cabeza y migraña', link: "/dolor de cabeza y migraña"},
                    { title: 'Dolor de cuerpo', link: "/dolor de cuerpo" },
                    { title: 'Dolor menstrual',link: "/dolor menstrual" },
                    { title: 'Circulación saludable',link: "/circulacion saludable" },
                    ],
                title: "Dolor y fiebre"
            },
            {
                action: "mdi-content-cut",
                items: [{ title: "Diarrea", link: "/diarrea" },
                { title: "Parásitos", link: "/parasitos" },
                { title: "Vomitos y nauseas", link: "/vomitos y nauseas" }
                ],
                title: "Gastrointestinales"
            },
            {
                action: "mdi-tag",
                items: [{ title: "Asma", link: "/asma" },
                { title: "Dolor de garganta", link: "/dolor de garganta" },
                  { title: "Gripe y tos", link: "/gripe y tos" },
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
                    if (this.$route.path == '/inventario') {
                        this.$router.replace('/');
                    }
                });
            });
        }
    }
};
</script>

<style lang="scss" scoped></style>
