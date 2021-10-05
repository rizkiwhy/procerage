<template>
  <section
    id="profil"
  >
        <v-img
          height="100vh"
          :src="require('../../assets/wave(3).svg')"
          class="fill-height bottom-gradient"
        >
        </v-img>
  </section>
</template>
<script>
  export default {
    data () {
      return {
        colors: [
          'indigo',
          'warning',
          'pink darken-2',
          'red lighten-1',
          'deep-purple accent-4',
        ],
        slides: [
          'First',
          'Second',
          'Third',
          'Fourth',
          'Fifth',
        ],
      }
    },
  }
</script>