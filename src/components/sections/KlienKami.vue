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
            class="d-flex align-center ma-auto"
            height="100%"
            max-width="1000"
            width="100%"
          >
          <h1 class="text-h4 font-weight-medium mb-5 text-center secondary--text">Klien Kami</h1>
          <template>
            <v-container class="pa-4 text-center">
              <v-row
                class="fill-height"
                align="center"
                justify="center"
              >
                <template v-for="(client, i) in clients">
                  <v-col
                    :key="i"
                    cols="12"
                    md="4"
                  >
                    <v-hover v-slot="{ hover }">
                      <v-card
                        :elevation="hover ? 12 : 2"
                        :class="{ 'on-hover': hover }"
                      >
                        <v-img
                          :src="'https://beprocerage.herokuapp.com/'+client.image"
                          height="175px"
                        >
                          <v-card-title class="text-h6 accent--text ma-2">
                            <v-row
                              class="fill-height flex-column"
                              justify="space-between"
                            >
                              <p class="mt-4 subheading secondary text-left">
                                <!-- {{ client.name }} -->
                              </p>

                              <div>
                                <p class="ma-0 text-body-1 font-weight-bold font-italic text-left">
                                  <!-- {{ client.period }} -->
                                </p>
                                <p class="text-caption font-weight-medium font-italic text-left">
                                  <!-- {{ client.numberOfParticipants }} -->
                                </p>
                              </div>

                              <div class="align-self-center">
                                <v-btn
                                  :href="client.article"
                                  :class="{ 'show-btns ma-1': hover }"
                                  :color="transparent"
                                  target="_blank"
                                  icon>
                                  <v-icon
                                    :class="{ 'show-btns': hover }"
                                    :color="transparent"
                                  >
                                    mdi-link-variant
                                  </v-icon>
                                </v-btn>
                                <v-btn
                                  :href="client.instagram"
                                  :class="{ 'show-btns ma-1': hover }"
                                  :color="transparent"
                                  target="_blank"
                                  icon>
                                  <v-icon
                                    :class="{ 'show-btns': hover }"
                                    :color="transparent"
                                  >
                                    mdi-instagram
                                  </v-icon>
                                </v-btn>
                                <!-- <v-btn
                                  v-for="(icon, index) in icons"
                                  :key="index"
                                  :class="{ 'show-btns ma-1': hover }"
                                  :color="transparent"
                                  icon
                                >
                                  <v-icon
                                    :class="{ 'show-btns': hover }"
                                    :color="transparent"
                                  >
                                    {{ icon }}
                                  </v-icon>
                                </v-btn> -->
                              </div>
                            </v-row>
                          </v-card-title>
                        </v-img>
                      </v-card>
                    </v-hover>
                  </v-col>
                </template>
              </v-row>
            </v-container>
          </template>
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
      url: "https://beprocerage.herokuapp.com/api/v1",
      clients: [],
      transparent: 'rgba(255, 255, 255, 0)',
    }),
    created() {
        this.initialize()
      },
      methods : {
        initialize() {
          axios.get(`${this.url}/all-clients`)
            .then((response) => {
              this.clients = response.data.data
            })
            .catch((error) => {
              console.error(error);
            });
        }
      },
  }
</script>
<style scoped>
.v-card {
  transition: opacity .4s ease-in-out;
}

.v-card:not(.on-hover) {
  opacity: 0.6;
 }

.show-btns {
  color: #e91e63 !important;
  background-color: #ffc107 !important;
}
</style>