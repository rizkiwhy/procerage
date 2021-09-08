<template>
    <v-app-bar 
        fixed
        flat app dark >
        <v-app-bar-nav-icon 
            @click.stop="drawer = !drawer" 
            v-if="getItem('token') !== null"/>
        <v-toolbar-title>
            <v-list-item class="px-2 pt-1">
                <v-img src="../../src/assets/11.png" alt="admin" max-width="25"/>
                <div :class="!isScrolling?'primary--text':'white--text'">
                    <span class="font-weight-bold mx-5">LSP SMKN11BDG</span>
                </div>
            </v-list-item>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn
            text
            :class="!isScrolling?'primary--text':'white--text'"
            @click="logout"
            @click.stop="dialog = true"
            v-if="getItem('token') !== null">
        <span class="mr-2 d-none d-lg-block">Logout</span>
        <v-icon>mdi-logout-variant</v-icon>
        </v-btn>
        <template v-for="item in menu">
        <v-btn text 
            v-if="getItem('token') === null"
            class="mr-2 d-none d-lg-block" 
            :key="item.text"
            :href="item.route"
            :color="!isScrolling?'primary':'white'"
            >
            <span class="pt-3">{{item.text}}</span>
        </v-btn>
        </template>
        <v-dialog persistent v-model="dialogLogout" max-width="500px">
            <v-card>
                <v-card-title class="text-xs-body-2 justify-center"
                >Are you sure you want to logout?</v-card-title
                >
                <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="accent" dark rounded @click="closeLogout"
                    >Cancel
                    <v-icon right dark>mdi-cancel</v-icon>
                </v-btn>
                <v-btn color="primary" dark rounded @click="logoutConfirm"
                    >Yes
                    <v-icon dark right> mdi-logout-variant </v-icon>
                </v-btn>
                <v-spacer></v-spacer>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-app-bar>
</template>
<script>
import { getItem } from "@/util/localStorage"

export default {
    data: () => ({
        drawer: false,
        group: null,
        isScrolling: false,
        user: {
            name: getItem('name'),
            email: getItem('email')  
        },
        dialogLogout: false,
        menu: [
            { text: 'Beranda', route: '/#beranda'},
            { text: 'Profil', route: '/#profil'},
            { text: 'Skenario', route: '/#skenario'},
            { text: 'Asesor', route: '/#asesor'},
            { text: 'Sertifikasi', route: '/#sertifikasi'},
        ],
    }),
    watch: {
        group () {
            this.drawer = false
        },
    },
    methods: {
        logout() {
            this.dialogLogout = true;
        },
        closeLogout() {
            this.dialogLogout = false;
        },
        onScroll () {
            const offset = window.pageYOffset
            this.isScrolling = offset > 50
            this.showLogo = offset > 200
        },
        logoutConfirm() {
            // localStorage.removeItem("token");
            localStorage.clear();
            this.$router.push("/login");
            this.closeLogout();
            // this.snackbar = {
            //     active: true,
            //     text: "You're logout now",
            //     color: "green",
            // };
        },
        getItem,
    }
}
</script>