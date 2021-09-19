<template>
  <v-app>
    <v-app-bar 
        fixed
        flat 
        dark
        class="d-none d-md-block"
        v-scroll="onScroll"
        :color="isScrolling?'primary':'transparent'">
        <v-app-bar-nav-icon 
            class="d-none d-sm-flex d-md-none "
            :class="!isScrolling?'primary--text':'white--text'"
            @click.stop="drawer = !drawer"/>
        <v-toolbar-title>
            <v-list-item>
                <v-img src="@/assets/11.png" alt="admin" max-width="25"/>
                <div :class="!isScrolling?'primary--text':'white--text'">
                    <span class="text-h6 font-weight-bold mx-2">
                      LSP SMKN11BDG
                    </span>
                </div>
            </v-list-item>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <template v-for="item in items">
          <div id="nav" :key="item.text">
          <router-link :to="item.route" @click="topFunction" >
            <span id="test">
              {{item.text}}
            </span>
          </router-link>
          </div>
        <!-- <v-btn text 
            class="mr-2 d-none d-lg-block" 
            :key="item.text"
            :href="item.route"
            :color="!isScrolling?'primary':'white'"
            >
            <span class="pt-3">{{item.text}}</span>
        </v-btn> -->
        </template>
        <!-- <v-btn-toggle
            group
            class="d-none d-md-flex"
          >
            <template v-for="item in items" >
              <v-btn 
                text 
                :key="item.route" 
                :color="isScrolling?'white':'primary'" 
                :href="item.route">
                  <span class="pt-3">{{item.text}}</span>
              </v-btn>
            </template>
          </v-btn-toggle> -->
          <!-- <template v-for="item in items">
            <v-btn 
                text 
                v-if="getItem('token') === null"
                class="mr-2 d-none d-lg-block" 
                :key="item.text"
                :href="item.route"
                :color="!isScrolling?'primary':'white'"
                >
                <span class="pt-3">{{item.text}}</span>
            </v-btn>
          </template> -->
        <!-- <v-tabs
          class="d-none d-md-block"
          :color="isScrolling?'accent':'accent'"
          right
        >
          <template v-for="item in items" >
            <v-tab
              :to="item.route"
              :key="item.text" 
              :class="isScrolling?'white--text':'primary--text'" 
              active-class="secondary--text">
              <span class="text-capitalize">
                {{item.text}}
              </span>
            </v-tab>
          </template>
        </v-tabs> -->
        <v-dialog persistent v-model="dialogLogout" max-width="500px">
            <v-card>
                <v-card-title class="text-xs-body-2 justify-center"
                >Are you sure you want to logout?</v-card-title
                >
                <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="red" dark rounded @click="closeLogout"
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
    <v-navigation-drawer v-model="drawer" color="primary" app dark class="d-md-none">
      <!-- <v-list-item class="pa-1 primary darken-1">
        <v-list-item-avatar>
          <v-icon>mdi-application-cog</v-icon>
        </v-list-item-avatar>
        <v-list-item-title class="ml-4 text-capitalize">Administration</v-list-item-title>
      </v-list-item>
      <v-layout column align-center>
        <v-flex class="mt-5"> 
          <v-avatar size="100">
            <img src="/img1.png" alt="">
          </v-avatar>
            <p class="white--text subheading mt-1 text-center">{{user.name}}</p>
        </v-flex>
        <v-flex class="mt-4 mb-4">
        <PopUp />
        </v-flex>
      </v-layout> -->
      <v-list shaped>
        <template v-for="item in items">
          <v-list-item
            :key="item.text"
            active-class="white--text"
            route :href="item.route"
          >
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>
                {{ item.text }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <!-- <v-snackbar
        :color="snackbar.color"
        v-model="snackbar.active"
        :timeout="snackbar.timeout"
        absolute
        right
        top
      >
        {{ snackbar.text }}

        <template v-slot:action="{ attrs }">
          <v-btn small color="white" text v-bind="attrs" @click="snackbar.active = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </template>
      </v-snackbar> -->
      <router-view />
      
    </v-main>
    
    <v-bottom-navigation
        background-color="primary"
        dark
        app
        shift
        class="d-flex d-sm-none"
    >
    <template v-for="item in items">
        <v-btn :key="item.text" :href="item.route">
            <span>{{item.text}}</span>
            <v-icon>{{item.icon}}</v-icon>
        </v-btn>
    </template>
    </v-bottom-navigation>
    
  </v-app>
</template>

<script>
// window.onscroll = function() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     // mybutton.style.display = "block";
//     test.style.color = "#000000"
//   } else {
//     test.style.color = "#0277BD"
//     // mybutton.style.display = "none";
//   }
// }
import PopUp from '@/components/Popup.vue'
import { getItem, removeItem } from "@/util/localStorage"

export default {
  name: "App",

  data: () => ({
    toggle_exclusive: undefined,
    items: [
        { icon: 'mdi-home-outline', text: 'Beranda', route:'/' },
        { icon: 'mdi-office-building-marker-outline', text: 'Tentang Kami' , route:'/tentang-kami'},
        { icon: 'mdi-certificate-outline', text: 'Sertifikasi', route:'/sertifikasi' },
        { icon: 'mdi-newspaper', text: 'Blog', route:'/blog' },
        { icon: 'mdi-phone-classic', text: 'Hubungi Kami', route:'/hubungi-kami' },
    ],
        drawer: false,
        group: null,
        isScrolling: false,
        user: {
            name: getItem('name'),
            email: getItem('email')  
        },
        dialogLogout: false,
    // snackbar: {
    //   active: false,
    //   text: "",
    //   timeout: 5000,
    //   color: "",
    // },
  }),
  components:{
    PopUp
  },
  watch: {
        group () {
            this.drawer = true
        },
    },
      
    methods: {
        scrollFunction() {
          if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            // mybutton.style.display = "block";
            test.style.color = "#000000"
          } else {
            test.style.color = "#0277BD"
            // mybutton.style.display = "none";
          }
        },
        topFunction() {
          document.body.scrollTop = 0;
          document.documentElement.scrollTop = 0;
        },
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
            removeItem('token')
            removeItem('name')
            removeItem('email')
            // localStorage.clear();
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
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  text-decoration: none;
  font-weight: bold;
  color: #FFC107;
}

#nav a.router-link-exact-active {
  color: #E91E63;
}
</style>