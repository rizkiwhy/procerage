<template>
  <v-footer
    id="home-footer"
    color="teal"
    dark
    min-height="72"
  >
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="6"
        >
          <div class="d-flex flex-wrap justify-md-start justify-center justify-md-none">
            <v-btn
            v-for="icon in social"
            :key="icon"
            dark
            icon
            >
            <v-icon size="24px">
                {{ icon }}
            </v-icon>
            </v-btn>
          </div>
        </v-col>

        <v-col
          class="text-center text-md-right justify-center"
          cols="12"
          md="6"
        >
        <p class="mt-1">
          Copyright &copy; {{ new Date().getFullYear() }} 
          <a href="https://www.smkn11bdg.sch.id" class="text-decoration-none white--text font-weight-bold">ICT SMKN 11 BDG</a>.
            All rights reserved.
        </p>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
  export default {
    name: 'HomeFooter',

    data: () => ({
      social: [
        'mdi-web',
        'mdi-facebook',
        'mdi-twitter',
        'mdi-instagram',
        'mdi-linkedin',
      ],
    }),
  }
</script>

<style lang="sass">
  #home-footer a
    text-decoration: none
</style>
