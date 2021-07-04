import '@mdi/font/css/materialdesignicons.css'
import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import colors from 'vuetify/lib/util/colors'
import { Carousel3d, Slide } from 'vue-carousel-3d';
Vue.component('carousel-3d', Carousel3d)
Vue.component('slide', Slide)
Vue.use(Vuetify);

export default new Vuetify({
    icons: {
        iconfont: 'mdi', // default - only for display purposes
        values: {
            product: 'mdi-dropbox',
            support: 'mdi-lifebuoy',
            steam: 'mdi-steam',
            pc: 'mdi-desktop-classic',
            xbox: 'mdi-xbox',
            playstation: 'mdi-playstation',
            switch: 'mdi-nintendo-switch',
        },
    },
    theme: {
        themes: {
          light: {
            primary: colors.teal, // #E53935
            secondary: colors.amber, // #FFCDD2
            tertiary: colors.deepPurple, // #FFCDD2
            quaternary: colors.teal.lighten5,
            accent: colors.pink, // #3F51B5
          },
        },
      },
});
