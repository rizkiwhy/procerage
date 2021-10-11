<template>
  <v-app>
    <v-app-bar 
        fixed
        flat 
        dark
        app
        v-scroll="onScroll"
        :color="isScrolling? 'primary' : 'transparent'">
        <v-app-bar-nav-icon 
            :class="!isScrolling?'primary--text':'white--text'"
            @click.stop="drawer = !drawer" 
            v-if="getItem('token') !== null"/>
          <v-toolbar-title>
            <v-list-item class="px-2 pt-1">
              <v-img src="@/assets/11.png" alt="admin" max-width="25"/>
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
        </template>
        <v-dialog persistent v-model="dialogLogout" max-width="500px">
            <v-card>
                <v-card-title class="text-xs-body-2 justify-center"
                >Are you sure you want to logout?</v-card-title
                >
                <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="error" dark rounded @click="closeLogout"
                    >Cancel
                    <v-icon right dark>mdi-cancel</v-icon>
                </v-btn>
                <v-btn color="success" dark rounded @click="logoutConfirm"
                    >Yes
                    <v-icon dark right> mdi-logout-variant </v-icon>
                </v-btn>
                <v-spacer></v-spacer>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" color="primary" dark app v-if="getItem('token') !== null">
      <v-list-item class="pa-1 primary darken-1">
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
      </v-layout>
      <v-list shaped>
        <template v-for="(item) in items">
          <v-list-group
            v-if="item.children"
            :key="item.text"
            v-model="item.active"
            :prepend-icon="item['icon-ctr']"
            :append-icon="item.model ? item.icon : item['icon-alt']"
            active-class="white--text"
          >
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title >
                  {{ item.text }}
                </v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item
              v-for="(child, i) in item.children"
              :key="i"
              route :to="child.route"
              active-class="white--text"
            >
                <v-list-item-action>
                  <v-icon>{{ child.icon }}</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title>
                    {{ child.text }}
                  </v-list-item-title>
                </v-list-item-content>
            </v-list-item>
          </v-list-group>
          <v-list-item
            v-else
            :key="item.text"
            active-class="white--text"
            route :to="item.route"
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
      <router-view />
    </v-main>
    
  </v-app>
</template>

<script>
import PopUp from '@/components/Popup.vue'
import { getItem, removeItem } from "@/util/localStorage"
import axios from 'axios';

const Swal = require('sweetalert2')
const Toast = Swal.mixin({
  showCloseButton: true,
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})

export default {
  name: "App",

  data: () => ({
    url: "http://103.148.113.86:18081/api/v1",
    items: [
      { icon: 'mdi-view-dashboard-variant', text: 'Dashboard' , route:'/admin/dashboard'},
            {
              active: false,
              icon: 'mdi-chevron-up',
              'icon-alt': 'mdi-chevron-down',
              'icon-ctr': 'mdi-database-settings',
              text: 'Master Data',
              children: [
                { icon: 'mdi-database', text: 'Mea', route:'/admin/mea' },
                { icon: 'mdi-database', text: 'Field', route:'/admin/field' },
                { icon: 'mdi-database', text: 'Category', route:'/admin/category' },
                { icon: 'mdi-database', text: 'Expertise', route:'/admin/expertise' },
                { icon: 'mdi-certificate-outline', text: 'Schema', route:'/admin/schema' },
                { icon: 'mdi-format-list-checks', text: 'Competency Unit', route:'/admin/competency-unit' },
                { icon: 'mdi-card-account-details-star-outline', text: 'Assesor', route:'/admin/assesor' },
              ],
            },
            {
              icon: 'mdi-chevron-up',
              'icon-alt': 'mdi-chevron-down',
              'icon-ctr': 'mdi-clipboard-file',
              text: 'Content',
              children: [
                { icon: 'mdi-folder-home-outline', text: 'Home', route:'/admin/home'},
                { icon: 'mdi-chart-box-plus-outline', text: 'Privilege', route:'/admin/privilege' },
                { icon: 'mdi-chat-outline', text: 'Testimonial', route:'/admin/testimonial' },
                { icon: 'mdi-contacts', text: 'Contact', route:'/admin/contact' },
                { icon: 'mdi-web', text: 'Social Media', route:'/admin/social-media' },
                { icon: 'mdi-newspaper', text: 'Blog', route:'/admin/blog' },
              ],
            },
            {
              icon: 'mdi-chevron-up',
              'icon-alt': 'mdi-chevron-down',
              'icon-ctr': 'mdi-office-building-marker',
              text: 'About',
              children: [
                { icon: 'mdi-image-album', text: 'Gallery', route:'/admin/gallery'},
                { icon: 'mdi-card-bulleted-settings-outline', text: 'Vision', route:'/admin/vision' },
                // { icon: 'mdi-format-list-checks', text: 'Mission', route:'/admin/mission' },
                { icon: 'mdi-account-tie-outline', text: 'Client', route:'/admin/client' },
                { icon: 'mdi-email-newsletter', text: 'Inbox', route:'/admin/inbox' },
              ],
            },
        ],
        drawer: true,
        group: null,
        isScrolling: false,
        user: {
          name: getItem('name'),
          email: getItem('email')
        },
        dialogLogout: false,
        menu: [
            { icon: 'mdi-home-outline', text: 'Beranda', route:'/' },
            { icon: 'mdi-office-building-marker-outline', text: 'Tentang Kami' , route:'/tentang-kami'},
            { icon: 'mdi-certificate-outline', text: 'Sertifikasi', route:'/sertifikasi' },
            { icon: 'mdi-newspaper', text: 'Blog', route:'/blog' },
            { icon: 'mdi-phone-classic', text: 'Hubungi Kami', route:'/hubungi-kami' },
        ],
  }),
  components:{
    PopUp
  },
  watch: {
        group () {
            this.drawer = true
        },
    },
  created() {
    if (localStorage.getItem('token') !== null) {
      this.initialize();
    }
  },
  methods: {
    initialize() {
      axios
        .get(`${this.url}/auth`, {
          headers: {
            Authorization: getItem("token"),
          },
        })
        .then((response) => {
          const words = response.data.user.name.split(" ");
          // console.log(words)

          this.user.name = words[0]
          // console.log(this.user.name)
          this.user.email = response.data.user.email
        })
        .catch((error) => console.log(error));
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
      axios.post(`${this.url}/auth/logout/${localStorage.getItem('_id')}`)
        // this.req.headers('authorization') = ''
        removeItem("token")
      // console.log(getItem("token"))
        // console.log(getItem("token"))
        removeItem("_id")
        removeItem("name")
        removeItem("email")
        localStorage.clear()
        this.deleteAllCookies()
        this.$router.push("/login")
        this.closeLogout()
        
        Toast.fire({
          icon: 'success',
          title: 'Signed out successfully'
        })
        // location.reload()
    },
    deleteAllCookies() {
      var cookies = document.cookie.split(";");

      for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
      }
    },
    getItem,
  }
};
</script>
<style>
.v-navigation-drawer__content {
  zoom: 84%;
}

</style>