<template>
  <section
    id="asesor"
    class="accent"
  >
    <v-row no-gutters>
      <v-col
        md="12"
      >
        <v-container class="py-16 px-8">
          <v-responsive
            class="d-flex align-center mx-auto"
            height="100%"
            width="100%"
          >
          <h1 class="text-h4 font-weight-medium mb-16 text-center secondary--text">Asesor</h1>
          <v-row>
            <v-col cols="12" md="3" sm="6"
                v-for="(slide, i) in assesors" :index="i" :key="i"
            >
            <template>
              <v-card
                width="350"
                elevation="10"
                class="senary mx-auto"
              >
                  <v-img
                    class="elevation-6"
                    height="250"
                    width="350"
                    alt=""
                    :src="'http://localhost:3000/'+slide.image"
                    :lazy-src="'http://localhost:3000/'+slide.image"
                  ></v-img>
              <v-card-title class="text-h6 accent--text justify-center">{{slide.name}}</v-card-title>
                <v-card-text>
                  <v-row
                    align="center"
                    class="mx-0"
                  >
                  <v-col
                    class="ma-0 pa-0 align-self-baseline"
                    cols="1"
                  >
                      <v-icon color="accent">mdi-teach</v-icon>

                  </v-col>
                  <v-col
                    cols="11"
                    class="ma-0 py-0"
                  >
                    <div class="text-caption font-weight-medium" >
                      Master Teacher {{tempTags[i]}}
                    </div>
                  </v-col>
                  </v-row>
                  <v-row
                    align="center"
                    class="mx-0"
                  >
                    <v-col 
                    class="ma-0 pa-0 align-self-baseline"
                    cols="1"
                    >
                    <v-icon color="accent">mdi-school-outline</v-icon>

                    </v-col>
                    <v-col
                    cols="11"
                    class="ma-0 py-0"
                    >

                  <div class="text-caption font-weight-medium">
                    {{slide.degree}} {{slide.graduateOf}}
                  </div>
                    </v-col>
                  </v-row>
                  <v-row
                    align="center"
                    class="mx-0 mb-2"
                  >
                  <v-col
                    class="ma-0 pa-0 align-self-baseline"
                    cols="1"
                  >
                    <v-icon color="accent">mdi-comment-quote-outline</v-icon>

                  </v-col>
                  <v-col
                    cols="11"
                    class="ma-0 py-0"
                  >
                  <div class="text-caption">
                    {{slide.quote}}
                  </div>
                    
                  </v-col>
                  </v-row>
                </v-card-text>
              </v-card>
            </template>
            </v-col>
          </v-row>          
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
    assesors: [],
    tempTags: [],
  }),
  created() {
    this.initialize()
  },
  methods: {
    initialize() {
      axios
        .get(`${this.url}/all-assesors`)
        .then((response) => {
          this.assesors = response.data.data;
          for (let index = 0; index < this.assesors.length; index++) {
            this.assesors[index].tags.includes('Teknik Komputer dan Jaringan') ||
            this.assesors[index].tags.includes('Rekayasa Perangkat Lunak') ||
            this.assesors[index].tags.includes('Multimedia') ? 
            this.tempTags.push("Teknik Komputer dan Informatika") : this.tempTags.push("Bisnis dan Manajemen")
          }
        })
        .catch((error) => {
          console.error(error);
        });
    },
  }
}
</script>

<style>
.theme--light.v-tabs > .v-tabs-bar .v-tab:not(.v-tab--active) > .v-icon {
  color: #0277bd;
}
</style>