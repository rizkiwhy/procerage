<template>
  <v-footer
    id="home-footer"
    color="primary"
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
            v-for="(socialmedia, i) in socialmedias"
            :key="i"
            dark
            icon
            :href="socialmedia.link"
            target="_blank"
            >
            <v-icon size="24px">
                {{ socialmedia.icon }}
            </v-icon>
            </v-btn>
          </div>
        </v-col>

        <v-col
          class="text-center text-md-right justify-center"
          cols="12"
          md="6"
        >
        <p class="ma-0 text-caption">
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
import axios from "axios";

  export default {
    name: 'HomeFooter',

    data: () => ({
      url: "http://103.148.113.86:18081/api/v1",
      socialmedias: [],
    }),
    created() {
      this.initialize()
    },
    methods : {
      initialize() {
        axios.get(`${this.url}/all-socialmedias`)
          .then((response) => {
            this.socialmedias = response.data.data;
          })
          .catch((error) => {
            console.error(error);
          });
      }
    }
  }
</script>

<style lang="sass">
  #home-footer a
    text-decoration: none
</style>
