<template>
  <section
    id="beritaterkini"
    class="senary">
    <v-row no-gutters>
      <v-col
        md="12">
        <v-container class="py-16 px-8">
          <h1 class="text-h4 font-weight-medium mb-16 text-center primary--text">Berita Terkini</h1>
          <v-responsive
            class="d-flex align-center mx-auto"
            width="100%"
            height="100%"
          >
          <v-carousel
            :show-arrows="false"
            hide-delimiters
            cycle
            hide-delimiter-background
            interval="5000"
            show-arrows-on-hover
          >
            <v-carousel-item
              v-for="(slide, i) in blogs"
              :key="i"
            >
              <v-sheet
                color="transparent"
              >
              <v-row>
                <v-col cols="12" md="5" class="transparent">
                  <template>
                    <v-hover v-slot="{ hover }">
                      <v-card
                        class="mx-auto"
                        color="grey lighten-4"
                        max-width="470"
                      >
                        <v-img
                          max-width="470"
                          max-height="350"
                          :src="'http://localhost:3000/'+slide.image"
                        >
                          <v-expand-transition>
                            <div
                              v-if="hover"
                              class="d-flex d-md-none transition-fast-in-fast-out primary darken-2 opacity-09 v-card--reveal text-h6 white--text"
                              style="height: 100%;"
                            >
                              <v-btn
                                rounded
                                color="accent"
                                depressed
                                min-width="164"
                                class="font-weight-bold white--text py-1 mt-1"
                                @click="detail(slide.title)"
                              >
                              Read More
                              </v-btn>
                            </div>
                          </v-expand-transition>
                        </v-img>
                        <v-card-text
                        class="d-flex d-md-none pa-0 primary white--text text-left"
                        >
                          <span class="text-subtitle-1 font-weight-bold pa-4">
                            {{ slide.title }}
                          </span>
                            <v-expand-transition>
                            <div
                              v-if="hover"
                              class="d-flex d-md-none transition-fast-in-fast-out white opacity-1 v-card--reveal accent--text"
                            >
                            <span class="text-subtitle-1 pa-4">
                            {{ slide.title }}
                            </span>
                            </div>
                          </v-expand-transition>
                        </v-card-text>
                      </v-card>
                    </v-hover>
                  </template>

                  <v-row class="ma-2 d-flex d-sm-none px-2">
                    <div 
                      class="text-caption accent--text font-weight-bold">
                      <v-icon color="accent">mdi-clock</v-icon>
                        {{slide.updatedAt}}
                    </div>
                  </v-row>
                  <v-row class="ma-2 d-flex d-sm-none px-2">
                    <div 
                      class="text-caption accent--text font-weight-bold">
                      <v-icon color="accent">mdi-bookmark-multiple-outline</v-icon>
                        {{slide.tags}}
                    </div>
                  </v-row>
                  <v-row class="ma-2 d-flex d-sm-none px-2">
                    <div 
                      class="text-caption accent--text font-weight-bold">
                      <v-icon color="accent">mdi-account-outline</v-icon>
                        {{slide.publisher}}
                    </div>
                  </v-row>
                  <v-row class="ma-2 d-none d-sm-flex d-md-none justify-center">
                    <div 
                      class="text-caption accent--text font-weight-bold">
                      <v-icon color="accent">mdi-clock</v-icon>
                        {{slide.updatedAt}}
                    </div>
                    <div 
                      class="text-caption accent--text font-weight-bold">
                      <v-icon color="accent">mdi-bookmark-multiple-outline</v-icon>
                        {{slide.tags}}
                    </div>
                    <div 
                      class="text-caption accent--text font-weight-bold">
                      <v-icon color="accent">mdi-account-outline</v-icon>
                        {{slide.publisher}}
                    </div>
                  </v-row>
                </v-col>
                <v-col cols="12" md="6" class="transparent ma-1 d-none d-md-block">
                  <v-row>
                    <span class="text-h5 mt-1 font-weight-bold accent--text text-left">
                      {{ slide.title }}
                    </span>
                  </v-row>
                  <v-row>
                    <span class="text-h6 text-justify blue-grey--text">
                      {{ slide.description }}
                      <v-btn
                        outlined
                        rounded
                        x-small
                        @click="detail(slide.title)"
                        color="accent">
                        Selengkapnya
                        <v-icon>
                          mdi-chevron-right
                        </v-icon>
                      </v-btn>
                    </span>
                  </v-row>
                  <v-row align="center">
                    <v-col
                      class="py-1 px-0">
                        <div 
                        class="text-subtitle-1 accent--text font-weight-bold">
                        <v-icon color="accent">mdi-clock</v-icon>
                        {{slide.updatedAt}}
                        <v-icon color="accent">mdi-bookmark-multiple-outline</v-icon>
                        {{slide.tags}}
                        <v-icon color="accent">mdi-account-outline</v-icon>
                        {{slide.publisher}}
                        </div>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
              </v-sheet>
            </v-carousel-item>
          </v-carousel>
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
    length: 3,
    window: 0,
    url: "http://localhost:3000/api/v1",
    blogs: [],
  }),
  created() {
    this.initialize()
  },
  methods : {
    detail(param) {
      axios.get(`${this.url}/blogs/${param}`)
        .then((response) => {
          this.blogs = response.data.data
          // console.log(this.blogs)
          this.$router.push(`/detail-blog/${this.blogs[0].title}`)
        })
        .catch((error) => {
          console.error(error);
        });
    },
    initialize() {
      axios.get(`${this.url}/all-blogs`)
        .then((response) => {
          this.blogs = response.data.data
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }
}
</script>
<style>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  position: absolute;
  width: 100%;
}
.opacity-1 {
  opacity: 1;
}
.opacity-09 {
  opacity: .9;
}
</style>