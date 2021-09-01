<template>
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
        <template v-for="item in items">
          <v-list-group
            v-if="item.children"
            :key="item.text"
            v-model="item.model"
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
              <v-list-item-action v-if="child.icon">
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
</template>
<script>

import { getItem } from "@/util/localStorage"
import PopUp from '../components/Popup.vue'

export default {
    data: () => ({
        items: [
            { icon: 'mdi-home', text: 'Dashboard' , route:'/dashboard'},
            {
                icon: 'mdi-chevron-up',
                'icon-alt': 'mdi-chevron-down',
                'icon-ctr': 'mdi-cart-arrow-right',
                text: 'Orders',
                model: false,
                children: [
            { icon: 'mdi-style', text: 'Type', route:'/Type' },
            { icon: 'mdi-atm', text: 'Mark', route:'/Mark' },
                ],
            },
            {
                icon: 'mdi-chevron-up',
                'icon-alt': 'mdi-chevron-down',
                'icon-ctr': 'mdi-google-maps',
                text: 'Tracking',
                model: false,
                children: [
            { icon: 'mdi-tooltip-account', text: 'Locate', route:'/locate'},
            { icon: 'mdi-printer', text: 'Print', route:'/print' },
                ],
            },
            { icon: 'mdi-finance', text: 'Revenue', route:'/revenue' },
            { icon: 'mdi-chart-pie', text: 'Analytics', route:'/chart' },
            { icon: 'mdi-magnify', text: 'Search', route:'/recherches' },
        ],
        user: {
            name: getItem('name'),
            email: getItem('email')  
        },
        drawer: true,
    }),    
    components:{
        PopUp
    },
    watch: {
      group () {
        this.drawer = false
      },
    },
    methods: {
        getItem
    }
}
</script>