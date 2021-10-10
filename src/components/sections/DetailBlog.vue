<template>
  <section
    id="asesor"
    class="tertiary"
  >
    <v-row no-gutters>
      <v-col
        md="12"
      >
        <v-container class="py-16 px-8">
          <v-responsive
            class="d-flex align-center ma-auto"
            height="100%"
            width="100%"
            v-for="(blog, i) in detailBlog"
            :key="i"
          >
            <h1 class="text-h5 font-weight-medium mt-16 mb-5 text-center primary--text">{{blog.title}}</h1>
            <v-img
                class="mx-auto"
                max-width="800"
                :src="'http://localhost:3000/'+blog.image"
                :lazy-src="'http://localhost:3000/'+blog.image"
              >
              </v-img>
              <div 
              class="text-body-1 ma-2 accent--text text-center">
              <!-- <v-row>
            <v-col cols="12" sm="6" md="6" lg="6">
              <v-text-field
                append-icon="mdi-identifier"
                label="Nama Lengkap"
                outlined
                rounded />
            </v-col>

            <v-col cols="12" sm="6" md="6" lg="6">
              <v-text-field
                append-icon="mdi-email"
                label="Email"
                outlined
                rounded />
            </v-col>
          </v-row> -->
              <v-row>
                <v-col cols="12" sm="6" md="6">
                  <v-icon color="accent" class="mx-1">mdi-clock</v-icon>
                  {{blog.updatedAt}}
                </v-col>
                <v-col cols="12" sm="6" md="6">
                  <v-icon color="accent" class="mx-1">mdi-share-variant-outline</v-icon>
                  <v-icon color="accent" class="mx-1">mdi-facebook</v-icon>
                  <v-icon color="accent" class="mx-1">mdi-twitter</v-icon>
                  <v-icon color="accent" class="mx-1">mdi-instagram</v-icon>
                  <v-icon color="accent" class="mx-1">mdi-telegram</v-icon>
                </v-col>
              </v-row>
              </div>

              <div 
              class="text-subtitle-1 text-justify py-5">
              {{blog.description}}
              </div>

          </v-responsive>
        </v-container>
      </v-col>
    </v-row>
  </section>
</template>
<script>
import axios from "axios";

  export default {

    data: () => ({
      url: "http://localhost:3000/api/v1",
      detailBlog : []
    }),
    created() {
      this.initialize()
    },
    methods : {
      initialize() {
        // console.log(`${this.url}/${window.location.pathname}`)
        axios.get(`${this.url}/${window.location.pathname}`)
          .then((response) => {
            console.log(response.data.data[0].description)
            this.detailBlog = response.data.data
          })
          .catch((error) => {
            console.error(error);
          });

      },
    }
  }
</script>
