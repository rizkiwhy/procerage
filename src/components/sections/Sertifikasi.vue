<template>
  <section
    id="sertifikasi">
    <v-container class="py-16 px-8">
          <v-responsive
            class="d-flex align-center mx-auto"
            height="100%"
            width="100%"
          >
          <h1 class="text-h4 font-weight-medium mb-16 text-center primary--text">Skema</h1>
          <!-- <v-row class="pt-10">
            <v-col
              cols="12"
              md="7"
            >
              <v-chip-group
                mandatory
                active-class="accent--text secondary"
              >
                <v-chip
                class="white--textv primary"
                  v-for="tag in tags"
                  :key="tag"
                >
                  {{ tag }}
                </v-chip>
              </v-chip-group>
            </v-col>
            <v-col 
              cols="12"
              md="3"
              >
              <v-text-field
                dense
                color="secondary"
                label="Search"
                outlined
                rounded />
            </v-col>
            <v-col 
              cols="12"
              md="2">
                <v-select
                  :items="items"
                  label="Filter"
                  dense
                  rounded
                  outlined
                  color="secondary"
                />
            </v-col>
          </v-row> -->
          <v-row class="mt-10 space-start">
            <v-col cols="12" md="4"
              v-for="(slide, i) in certifications" :index="i" :key="i"
              >
              <template>
                <v-hover v-slot="{ hover }">
                  <v-card
                    class="mx-auto"
                    color="grey lighten-4"
                  >
                    <v-img
                      :aspect-ratio="16/9"
                      :src="'https://beprocerage.herokuapp.com/'+slide.image"
                    >
                      <v-expand-transition class="">
                        <div
                          v-if="hover"
                          class="d-flex transition-fast-in-fast-out primary opacity-09 v-card--reveal text- white--text"
                          style="height: 100%;"
                        >
                          <v-btn
                            rounded
                            color="accent"
                            depressed
                            min-width="164"
                            small
                            class="font-weight-bold white--text py-1 mt-1"
                            to="/sertifikasi"
                          >
                          Read More
                          </v-btn>
                        </div>
                      </v-expand-transition>
                    </v-img>
                    <v-card-text
                      class="d-flex pa-0 ma-0 primary white--text"
                      style="height: 38.4%;">
                      <v-card-text>
                        <v-row
                          align="center"
                          class="mx-0"
                        >
                        <v-col
                          cols="12"
                          class="ma-0 py-0"
                        >
                          <div class="text-button py-2 font-weight-bold">
                            {{slide.name}}
                          </div>
                        </v-col>
                        </v-row>
                        
                      </v-card-text>
                        <v-expand-transition>
                        <div
                          v-if="hover"
                          class="d-flex transition-fast-in-fast-out senary opacity-1 v-card--reveal text-h6 accent--text"
                        >
                          <v-card-text >
                            <v-row
                              align="center"
                              class="mx-0"
                            >
                            <v-col
                              cols="12"
                              class="ma-0 py-0"
                            >
                              <div class="text-button py-2 font-weight-bold">
                                {{slide.name}}
                              </div>
                            </v-col>
                              
                            </v-row>
                          </v-card-text>
                        </div>
                      </v-expand-transition>
                    </v-card-text>
                  </v-card>
                </v-hover>
              </template>
            </v-col>
          </v-row>
          </v-responsive>
    </v-container>
  </section>
</template>
<script>
import axios from "axios";

  export default {
    data: () => ({
      url: "https://beprocerage.herokuapp.com/api/v1",
      items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
      tags: [
        'Semua',
        'AKL',
        'OTKP',
        'BDP',
        'MLOG',
        'RPL',
        'MM',
        'TKJ',
      ],
      certifications: [],
    }),
    created() {
      this.initialize()
    },
    methods : {
      initialize() {
        axios.get(`${this.url}/all-certifications`)
          .then((response) => {
            this.certifications = response.data.data
          })
          .catch((error) => {
            console.error(error);
          });
      }
    }
  }
</script>
<style>
/* .container {
  max-width: 1300px;
} */
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
#sertifikasi{
  zoom: 0.9;
}
</style>