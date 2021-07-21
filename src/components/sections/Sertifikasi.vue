<template>
  <section
    id="sertifikasi">
    <v-container class="py-16 px-8">
          <v-responsive
            class="d-flex align-center mx-auto"
            height="100%"
            width="100%"
          >
          <v-row class="pt-10">
            <v-col
              cols="12"
              md="7"
            >
              <v-chip-group
                mandatory
                active-class="secondary--text"
              >
                <v-chip
                class="white--text"
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
          </v-row>
          <v-row justify="space-between" class="mt-10">
            <v-col cols="12" md="4"
              v-for="(slide, i) in cards" :index="i" :key="i"
              >
              <template>
                <v-hover v-slot="{ hover }">
                  <v-card
                    class="mx-auto"
                    color="grey lighten-4"
                    max-width="600"
                  >
                    <v-img
                      :aspect-ratio="16/9"
                      :src="slide.foto"
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
                      class="d-flex pa-0 ma-0 primary white--text"
                      style="height: 38.4%;">
                      <v-card-text >
                        <v-row
                          align="center"
                          class="mx-0"
                        >
                        <v-col
                          cols="12"
                          class="ma-0 py-0"
                        >
                          <div class="text-body-1 font-weight-bold">
                            {{slide.text}}
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
                            <v-icon color="accent">mdi-teach</v-icon>
                        </v-col>
                        <v-col
                          cols="5"
                          class="ma-0 py-0"
                        >
                          <div class="text-caption font-weight-bold">
                            {{slide.pertemuan}}
                          </div>
                        </v-col>
                        <v-col
                          class="ma-0 pa-0 align-self-baseline"
                          cols="1"
                        >
                            <v-icon color="accent">mdi-notebook-multiple</v-icon>
                        </v-col>
                        <v-col
                          cols="5"
                          class="ma-0 py-0"
                        >
                          <div class="text-caption font-weight-bold">
                            {{slide.modul}}
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
                            <v-icon color="accent">mdi-bookmark-outline</v-icon>
                        </v-col>
                        <v-col
                          cols="5"
                          class="ma-0 py-0"
                        >
                          <div class="text-caption font-weight-bold">
                            {{slide.jenis}}
                          </div>
                        </v-col>
                          <v-col 
                          class="ma-0 pa-0 align-self-baseline"
                          cols="1"
                          >
                          <v-icon color="accent">mdi-account-tie</v-icon>

                          </v-col>
                          <v-col
                          cols="5"
                          class="ma-0 py-0"
                          >

                        <div class="text-caption font-weight-bold">
                          {{slide.nama}}
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
                            <v-icon color="accent">mdi-cash-usd-outline</v-icon>
                        </v-col>
                        <v-col
                          cols="5"
                          class="ma-0 py-0"
                        >
                          <div class="text-caption font-weight-bold">
                            {{slide.harga}}
                          </div>
                        </v-col>
                          <v-col 
                          class="ma-0 pa-0 align-self-baseline"
                          cols="1"
                          >
                          <template>
                            <div class="text-center">
                              <!-- <v-rating
                                v-model="slide.rating"
                                background-color="accent"
                                color="secondary"
                                small
                                dense
                              /> -->
                              <v-rating
                                v-model="slide.rating"
                                background-color="accent"
                                color="secondary"
                                dense
                                half-increments
                                hover
                                size="18"
                              ></v-rating>
                            </div>
                          </template>
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
                              <div class="text-body-1 font-weight-bold">
                                {{slide.text}}
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
                                <v-icon color="accent">mdi-teach</v-icon>
                            </v-col>
                            <v-col
                              cols="5"
                              class="ma-0 py-0"
                            >
                              <div class="text-caption font-weight-bold">
                                {{slide.pertemuan}}
                              </div>
                            </v-col>
                            <v-col
                              class="ma-0 pa-0 align-self-baseline"
                              cols="1"
                            >
                                <v-icon color="accent">mdi-notebook-multiple</v-icon>
                            </v-col>
                            <v-col
                              cols="5"
                              class="ma-0 py-0"
                            >
                              <div class="text-caption font-weight-bold">
                                {{slide.modul}}
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
                                <v-icon color="accent">mdi-bookmark-outline</v-icon>
                            </v-col>
                            <v-col
                              cols="5"
                              class="ma-0 py-0"
                            >
                              <div class="text-caption font-weight-bold">
                                {{slide.jenis}}
                              </div>
                            </v-col>
                              <v-col 
                              class="ma-0 pa-0 align-self-baseline"
                              cols="1"
                              >
                              <v-icon color="accent">mdi-account-tie</v-icon>

                              </v-col>
                              <v-col
                              cols="5"
                              class="ma-0 py-0"
                              >

                            <div class="text-caption font-weight-bold">
                              {{slide.nama}}
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
                                <v-icon color="accent">mdi-cash-usd-outline</v-icon>
                            </v-col>
                            <v-col
                              cols="5"
                              class="ma-0 py-0"
                            >
                              <div class="text-caption font-weight-bold">
                                {{slide.harga}}
                              </div>
                            </v-col>
                              <v-col 
                              class="ma-0 pa-0 align-self-baseline"
                              cols="1"
                              >
                              <template>
                                <div class="text-center">
                                  <v-rating
                                    v-model="slide.rating"
                                    background-color="accent"
                                    color="primary"
                                    dense
                                    half-increments
                                    hover
                                    size="18"
                                  ></v-rating>
                                </div>
                              </template>
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
  export default {
    data: () => ({
      items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
      // items: [
      //   { title: 'Click Me', link: '#' },
      //   { title: 'Click Me', link: '#' },
      //   { title: 'Click Me', link: '#' },
      //   { title: 'Click Me', link: '#' },
      // ],
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
      cards: [
        {
          nama: 'John Doe 1',
          harga: '250000',
          rating: '1',
          pertemuan: '15x Pertemuan',
          modul: '7 Modul',
          foto: 'https://cdn.vuetifyjs.com/images/cards/kitchen.png',
          jenis: 'TKJ',
          icon: 'mdi-keyboard-outline',
          title: 'Efficiently unleash media information without cross-media value',
          text: 'Efficiently unleash media information without cross-media value.',
        },
        {
          nama: 'John Doe 1',
          harga: '250000',
          rating: '1',
          pertemuan: '15x Pertemuan',
          modul: '7 Modul',
          foto: 'https://cdn.vuetifyjs.com/images/cards/kitchen.png',
          jenis: 'TKJ',
          icon: 'mdi-keyboard-outline',
          title: 'Efficiently unleash media information without cross-media value',
          text: 'Efficiently unleash media information without cross-media value.',
        },
        {
          nama: 'John Doe 1',
          harga: '250000',
          rating: '1',
          pertemuan: '15x Pertemuan',
          modul: '7 Modul',
          foto: 'https://cdn.vuetifyjs.com/images/cards/kitchen.png',
          jenis: 'TKJ',
          icon: 'mdi-keyboard-outline',
          title: 'Efficiently unleash media information without cross-media value',
          text: 'Efficiently unleash media information without cross-media value.',
        },
        {
          nama: 'John Doe 1',
          harga: '250000',
          rating: '1',
          pertemuan: '15x Pertemuan',
          modul: '7 Modul',
          foto: 'https://cdn.vuetifyjs.com/images/cards/kitchen.png',
          jenis: 'TKJ',
          icon: 'mdi-keyboard-outline',
          title: 'Efficiently unleash media information without cross-media value',
          text: 'Efficiently unleash media information without cross-media value.',
        },
        {
          nama: 'John Doe 1',
          harga: '250000',
          rating: '1',
          pertemuan: '15x Pertemuan',
          modul: '7 Modul',
          foto: 'https://cdn.vuetifyjs.com/images/cards/kitchen.png',
          jenis: 'TKJ',
          icon: 'mdi-keyboard-outline',
          title: 'Efficiently unleash media information without cross-media value',
          text: 'Efficiently unleash media information without cross-media value.',
        },
        {
          nama: 'John Doe 1',
          harga: '250000',
          rating: '1',
          pertemuan: '15x Pertemuan',
          modul: '7 Modul',
          foto: 'https://cdn.vuetifyjs.com/images/cards/kitchen.png',
          jenis: 'TKJ',
          icon: 'mdi-keyboard-outline',
          title: 'Efficiently unleash media information without cross-media value',
          text: 'Efficiently unleash media information without cross-media value.',
        },
        {
          nama: 'John Doe 1',
          harga: '250000',
          rating: '1',
          pertemuan: '15x Pertemuan',
          modul: '7 Modul',
          foto: 'https://cdn.vuetifyjs.com/images/cards/kitchen.png',
          jenis: 'TKJ',
          icon: 'mdi-keyboard-outline',
          title: 'Efficiently unleash media information without cross-media value',
          text: 'Efficiently unleash media information without cross-media value.',
        },
        {
          nama: 'John Doe 1',
          harga: '250000',
          rating: '1',
          pertemuan: '15x Pertemuan',
          modul: '7 Modul',
          foto: 'https://cdn.vuetifyjs.com/images/cards/kitchen.png',
          jenis: 'TKJ',
          icon: 'mdi-keyboard-outline',
          title: 'Efficiently unleash media information without cross-media value',
          text: 'Efficiently unleash media information without cross-media value.',
        },
        {
          nama: 'John Doe 1',
          harga: '250000',
          rating: '1',
          pertemuan: '15x Pertemuan',
          modul: '7 Modul',
          foto: 'https://cdn.vuetifyjs.com/images/cards/kitchen.png',
          jenis: 'TKJ',
          icon: 'mdi-keyboard-outline',
          title: 'Efficiently unleash media information without cross-media value',
          text: 'Efficiently unleash media information without cross-media value.',
        },
        {
          nama: 'John Doe 1',
          harga: '250000',
          rating: '1',
          pertemuan: '15x Pertemuan',
          modul: '7 Modul',
          foto: 'https://cdn.vuetifyjs.com/images/cards/kitchen.png',
          jenis: 'TKJ',
          icon: 'mdi-keyboard-outline',
          title: 'Efficiently unleash media information without cross-media value',
          text: 'Efficiently unleash media information without cross-media value.',
        },
        {
          nama: 'John Doe 1',
          harga: '250000',
          rating: '1',
          pertemuan: '15x Pertemuan',
          modul: '7 Modul',
          foto: 'https://cdn.vuetifyjs.com/images/cards/kitchen.png',
          jenis: 'TKJ',
          icon: 'mdi-keyboard-outline',
          title: 'Efficiently unleash media information without cross-media value',
          text: 'Efficiently unleash media information without cross-media value.',
        },
        {
          nama: 'John Doe 1',
          harga: '250000',
          rating: '1',
          pertemuan: '15x Pertemuan',
          modul: '7 Modul',
          foto: 'https://cdn.vuetifyjs.com/images/cards/kitchen.png',
          jenis: 'TKJ',
          icon: 'mdi-keyboard-outline',
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