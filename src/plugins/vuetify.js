import '@mdi/font/css/materialdesignicons.css'
import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import colors from 'vuetify/lib/util/colors'
import { Carousel3d, Slide } from 'vue-carousel-3d';

var PulseLoader = require('vue-spinner/src/PulseLoader.vue');

// new Vue({
//   components: {
//     'PulseLoader': PulseLoader
//   }
// })

Vue.component('PulseLoader', PulseLoader)
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
        primary: colors.lightBlue.darken3,
        secondary: colors.amber,
        tertiary: colors.blue.lighten5,
        quaternary: colors.amber.lighten5,
        quinary: colors.blue.lighten2,
        senary: colors.amber.lighten2,
        accent: colors.pink,
        success: colors.green.accent4,
        warning: colors.amber.darken3,
        error: colors.pink,
      },
    },
  },
});
