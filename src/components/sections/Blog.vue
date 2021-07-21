<template>
  <section
    id="galeri">
    <v-container class="py-16 px-8">
          <v-responsive
            class="d-flex align-center mx-auto"
            height="100%"
            max-width="1000"
            width="100%"
          >
          <!-- <h1 class="text-h4 font-weight-medium mt-16 mb-10 text-center secondary--text">Tentang Kami</h1> -->
          <!-- <v-row
            class="mb-6"
            no-gutters
            justify="space-between"
          >
            <v-col md="4">
              <v-card
                class="pa-2"
                outlined
                tile
              >
                <v-chip-group
                mandatory
                active-class="primary--text"
              >
                <v-chip
                  v-for="tag in tags"
                  :key="tag"
                >
                  {{ tag }}
                </v-chip>
              </v-chip-group>
              </v-card>
            </v-col>
            <v-col
              md="4"
            >
              <v-card
                class="pa-2"
                outlined
                tile
              >
                <template>
                <div class="text-center">
                  <v-menu offset-y>
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn
                        color="primary"
                        dark
                        v-bind="attrs"
                        v-on="on"
                      >
                        Dropdown
                      </v-btn>
                    </template>
                    <v-list>
                      <v-list-item
                        v-for="(item, index) in items"
                        :key="index"
                      >
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                      </v-list-item>
                    </v-list>
                  </v-menu>
                </div>
              </template>
              </v-card>
            </v-col>
          </v-row> -->
          <v-row class="pt-10">
            <v-col
              cols="auto"
              class="mr-auto"
            >
                <!-- .col-auto .mr-auto -->
              <v-chip-group
                mandatory
                active-class="secondary--text"
              >
                <v-chip
                class="primary--text"
                  v-for="tag in tags"
                  :key="tag"
                >
                  {{ tag }}
                </v-chip>
              </v-chip-group>
            </v-col>
            <v-col cols="auto">
                <!-- .col-auto -->
                <template>
                <div class="text-center">
                  <v-menu offset-y>
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn
                        color="primary"
                        dark
                        v-bind="attrs"
                        v-on="on"
                      >
                        Dropdown
                      </v-btn>
                    </template>
                    <v-list
                      class="senary"
                    >
                      <v-list-item
                        v-for="(item, index) in items"
                        :key="index"
                        :href="item.link"
                      >
                        <v-list-item-title class="accent--text">{{ item.title }}</v-list-item-title>
                      </v-list-item>
                    </v-list>
                  </v-menu>
                </div>
              </template>
            </v-col>
          </v-row>
          <v-row justify="space-between" class="mt-10">
            <v-col cols="12" md="3"
              v-for="(slide, i) in cards" :index="i" :key="i">
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
                          class="d-flex transition-fast-in-fast-out primary opacity-09 v-card--reveal text-h6 white--text"
                          style="height: 100%;"
                        >
                          <v-btn
                            rounded
                            color="accent"
                            depressed
                            min-width="164"
                            small
                            class="font-weight-bold white--text py-1 mt-1"
                          >
                          Read More
                          </v-btn>
                        </div>
                      </v-expand-transition>
                    </v-img>
                    <v-card-text
                    class="d-flex pa-0 primary white--text"
                    style="height: 38.4%;"
                    >
                      <span class="text-subtitle-2 pa-3">
                        {{ slide.title }}
                      </span>
                        <v-expand-transition>
                        <div
                          v-if="hover"
                          class="d-flex transition-fast-in-fast-out senary opacity-1 v-card--reveal text-h6 accent--text"
                        >
                        <span class="text-subtitle-2 pa-3">
                        {{ slide.text }}
                      </span>
                        </div>
                      </v-expand-transition>
                    </v-card-text>
                  </v-card>
                </v-hover>
              </template>
            </v-col>
            <!-- <v-col>
                <v-col >
                  <v-card width="300" class="ma-1" height="100%">
                    <v-img
                      src="https://cdn.pixabay.com/photo/2020/07/12/07/47/bee-5396362_1280.jpg"
                    />
                  </v-card>
                </v-col>
                <v-col class="ma-1">
                  <v-card width="300" class="ma-1" height="100%">
                    <v-img
                      :src="require('../../assets/avel-chuklanov-DUmFLtMeAbQ-unsplash.jpg')"
                    />
                  </v-card>
                </v-col>
            </v-col>
            <v-col>
              <v-col class="ma-1">
                <v-card width="300" class="ma-1" height="100%">
                  <v-img
                    src="https://cdn.pixabay.com/photo/2020/07/12/07/47/bee-5396362_1280.jpg"
                  />
                </v-card>
              </v-col>
            </v-col>
            <v-card width="300" class="ma-1" height="100%">
              <v-img
                :src="require('../../assets/campaign-creators-gMsnXqILjp4-unsplash.jpg')"
              />
            </v-card>
            <v-card width="300" class="ma-1">
              <v-img
                :src="require('../../assets/annie-spratt-MChSQHxGZrQ-unsplash.jpg')"
              />
            </v-card>
            <v-card width="300" class="ma-1" height="100%">
              <v-img
                :src="require('../../assets/christina-wocintechchat-com-faEfWCdOKIg-unsplash.jpg')"
              />
            </v-card> -->
          </v-row>
          </v-responsive>
    </v-container>
  </section>
</template>
<script>
  export default {
    data: () => ({
      items: [
        { title: 'Click Me', link: '#' },
        { title: 'Click Me', link: '#' },
        { title: 'Click Me', link: '#' },
        { title: 'Click Me', link: '#' },
      ],
      tags: [
        'Semua',
        'Berita',
        'Kegiatan',
      ],
      cards: [
        {
          icon: 'mdi-keyboard-outline',
          title: 'Efficiently unleash media information without cross-media value',
          text: 'Efficiently unleash media information without cross-media value.',
        },
        {
          icon: 'mdi-camera-outline',
          title: 'Efficiently unleash media information without cross-media value',
          text: 'Efficiently unleash media information without cross-media value.',
        },
        {
          icon: 'mdi-pencil-outline',
          title: 'Efficiently unleash media information without cross-media value',
          text: 'Efficiently unleash media information without cross-media value.',
        },
        {
          icon: 'mdi-puzzle-outline',
          title: 'Efficiently unleash media information without cross-media value',
          text: 'Efficiently unleash media information without cross-media value.',
        },
        {
          icon: 'mdi-keyboard-outline',
          title: 'Efficiently unleash media information without cross-media value',
          text: 'Efficiently unleash media information without cross-media value.',
        },
        {
          icon: 'mdi-camera-outline',
          title: 'Efficiently unleash media information without cross-media value',
          text: 'Efficiently unleash media information without cross-media value.',
        },
        {
          icon: 'mdi-pencil-outline',
          title: 'Efficiently unleash media information without cross-media value',
          text: 'Efficiently unleash media information without cross-media value.',
        },
        {
          icon: 'mdi-puzzle-outline',
          title: 'Efficiently unleash media information without cross-media value',
          text: 'Efficiently unleash media information without cross-media value.',
        },
        {
          icon: 'mdi-keyboard-outline',
          title: 'Efficiently unleash media information without cross-media value',
          text: 'Efficiently unleash media information without cross-media value.',
        },
        {
          icon: 'mdi-camera-outline',
          title: 'Efficiently unleash media information without cross-media value',
          text: 'Efficiently unleash media information without cross-media value.',
        },
        {
          icon: 'mdi-pencil-outline',
          title: 'Efficiently unleash media information without cross-media value',
          text: 'Efficiently unleash media information without cross-media value.',
        },
        {
          icon: 'mdi-puzzle-outline',
          title: 'Efficiently unleash media information without cross-media value',
          text: 'Efficiently unleash media information without cross-media value.',
        },
      ],
    }),
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