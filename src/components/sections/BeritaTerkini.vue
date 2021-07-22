<template>
  <section
    id="beritaterkini"
    class="senary"
  >
    <v-row no-gutters>
      <v-col
        md="12"
      >
          <!-- :src="require('../../assets/wave(21).svg')" -->
        <v-container class="py-16">
          <h1 class="text-h4 font-weight-medium mb-16 text-center primary--text">Berita Terkini</h1>
          <v-responsive
            class="d-flex align-center mx-auto"
            max-width="1000"
            max-height="500"
            width="100%"
          >
          <v-carousel
            :show-arrows="false"
            hide-delimiters
            cycle
            hide-delimiter-background
            interval="5000"
            show-arrows-on-hover
            max-width="1000"
          >
            <!-- <template v-slot:prev="{ on, attrs }">
              <v-btn
              rounded
                color="secondary"
                v-bind="attrs"
                v-on="on"
              >Prev</v-btn>
            </template>
            <template v-slot:next="{ on, attrs }">
              <v-btn
              rounded

                color="primary"
                v-bind="attrs"
                v-on="on"
              >Next</v-btn>
            </template> -->
            <v-carousel-item
              v-for="(slide, i) in cards"
              :key="i"
            >
              <v-sheet
                color="transparent"
              >
              <v-row>
                <v-col cols="12" md="6" class="transparent">
                  <template>
                    <v-hover v-slot="{ hover }">
                      <v-card
                        class="mx-auto"
                        color="grey lighten-4"
                        max-width="600"
                      >
                        <v-img
                          :aspect-ratio="16/9"
                          src="https://cdn.vuetifyjs.com/images/cards/kitchen.png"
                        >
                          <v-expand-transition class="">
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
                              >
                              Read More
                              </v-btn>
                            </div>
                          </v-expand-transition>
                        </v-img>
                        <v-card-text
                        class="d-flex d-md-none pa-0 primary white--text"
                        >
                        <!-- style="height: 38.4%;" -->
                          <span class="text-h6 pa-5">
                            AS cooking utensils
                            {{ slide.title }}
                          </span>
                            <v-expand-transition>
                            <div
                              v-if="hover"
                              class="d-flex d-md-none transition-fast-in-fast-out white opacity-1 v-card--reveal text-h6 accent--text"
                            >
                            <span class="text-h6 pa-5">
                            {{ slide.text }}
                          </span>
                            </div>
                          </v-expand-transition>
                        </v-card-text>
                      </v-card>
                    </v-hover>
                  </template>
                </v-col>
                <v-col cols="12" md="5" class="transparent ma-2 d-none d-md-block">
                  <v-row>

                  <span class="text-h5 accent--text">
                    QW cooking utensils
                    {{ slide.title }}
                  </span>
                  </v-row>
                  <v-row>

                  <span class="text-h6">
                    {{ slide.text }}
                    <v-btn
                      outlined
                      rounded
                      x-small
                      color="accent">
                    Selengkapnya
                <v-icon>
                  mdi-chevron-right
                </v-icon>
                </v-btn>
                  </span>
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
export default {
  data: () => ({
    length: 3,
    window: 0,
    cards: [
        {
          icon: 'mdi-keyboard-outline',
          title: 'Efficiently unleash media information without cross-media value',
          text: 'Efficiently unleash media information without cross-media value. Quickly maximize value timely deliverables schemas.',
        },
        {
          icon: 'mdi-camera-outline',
          title: 'Efficiently unleash media information without cross-media value',
          text: 'Efficiently unleash media information without cross-media value. Quickly maximize value timely deliverables schemas.',
        },
        {
          icon: 'mdi-pencil-outline',
          title: 'Efficiently unleash media information without cross-media value',
          text: 'Efficiently unleash media information without cross-media value. Quickly maximize value timely deliverables schemas.',
        },
        {
          icon: 'mdi-puzzle-outline',
          title: 'Efficiently unleash media information without cross-media value',
          text: 'Efficiently unleash media information without cross-media value. Quickly maximize value timely deliverables schemas.',
        },
      ],
  })
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