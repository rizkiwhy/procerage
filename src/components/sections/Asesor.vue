<template>
  <section
    id="asesor"
    class="overflow-hidden"
  >
  <div class="text-center mb-12">
              <h1 class="text-uppercase text-h5 font-weight-bold mt-16 mb-2 teal--text text-center">Asesor</h1>
            </div>
  <v-col cols="12" sm="12">
        <v-container>
          <!-- <v-card class="px-2"> -->
            <!-- <no-ssr placeholder="loading..."> -->
                <carousel-3d :height="430" :width="350" :border="1" :autoplay="true" :autoplay-timeout='3000'>

                    <slide v-for="(slide, i) in asesor" :index="i" :key="i">
                        <!-- <img v-bind:src="slide.foto" /> -->
                        <v-card
                      color="white"
                      height="430"
                      width="350"
                    >
                        <v-img
                          class="elevation-6"
                          height="250"
                          width="350"
                          alt=""
                          :src="slide.foto"
                        ></v-img>
                        <v-list-item-content class="mx-2">
                          <v-list class="pa-0">
                            <v-list-item-title class="text-h6 mx-2 teal--text">
                              {{slide.nama}}
                            </v-list-item-title>
                          </v-list>
                          <v-list class="px-2 py-0 text-caption grey--text">
                            <v-icon>mdi-teach</v-icon>
                            {{slide.jenis}}
                          </v-list>
                          <v-list class="px-2 py-0 text-caption grey--text">
                            <v-icon>mdi-school-outline</v-icon>
                            {{slide.pendidikan}}
                          </v-list>
                          <v-list class="px-2 py-0 text-caption grey--text">
                            <v-icon>mdi-comment-quote-outline</v-icon>
                            {{slide.text}}
                          </v-list>
                        </v-list-item-content>
                    </v-card>
                    </slide>
                </carousel-3d>
            <!-- </no-ssr> -->
          <!-- </v-card> -->
        </v-container>
        </v-col>
    <!-- <v-row no-gutters>
      <v-col
        md="12"
      >
        <v-img
          height="100vh"
          class="teal"
        >
            <div class="text-center mb-12">
              <h1 class="text-uppercase text-h5 font-weight-bold mt-16 mb-2 white--text text-center">Asesor</h1>
            </div>
              <v-sheet
                class="mx-auto teal"
              >
                <v-slide-group
                  center-active
                >
                  <v-slide-item
                    v-for="n in asesor"
                    :key="n.nama"
                  >
                    <v-card
                      color="white"
                      class="ma-4"
                      height="430"
                      width="350"
                    >
                        <v-img
                          class="elevation-6"
                          height="250"
                          width="350"
                          alt=""
                          :src="n.foto"
                        ></v-img>
                        <v-list-item-content class="mx-2">
                          <v-list class="pa-0">
                            <v-list-item-title class="text-h6 mx-2 teal--text">
                              {{n.nama}}
                            </v-list-item-title>
                          </v-list>
                          <v-list class="px-2 py-0 text-caption grey--text">
                            <v-icon>mdi-teach</v-icon>
                            {{n.jenis}}
                          </v-list>
                          <v-list class="px-2 py-0 text-caption grey--text">
                            <v-icon>mdi-school-outline</v-icon>
                            {{n.pendidikan}}
                          </v-list>
                          <v-list class="px-2 py-0 text-caption grey--text">
                            <v-icon>mdi-comment-quote-outline</v-icon>
                            {{n.text}}
                          </v-list>
                        </v-list-item-content>
                    </v-card>
                  </v-slide-item>
                </v-slide-group>
              </v-sheet>
        </v-img>
      </v-col>
    </v-row> -->
  </section>
</template>
<script>
export default {
  data: () => ({
    asesor: [
        {
          nama: 'John Doe 1',
          foto: require('../../assets/team-1.jpg'),
          jenis: 'Master Teacher Networking',
          pendidikan: 'Sarjana Komputer di STMIK AMIK BANDUNG',
          text: 'Efficiently unleash media information without cross-media value. Quickly maximize value timely deliverables schemas.',
        },
        {
          nama: 'John Doe 2',
          foto: require('../../assets/team-2.jpg'),
          jenis: 'Master Teacher Networking',
          pendidikan: 'Sarjana Komputer di STMIK AMIK BANDUNG',
          text: 'Efficiently unleash media information without cross-media value. Quickly maximize value timely deliverables schemas.',
        },
        {
          nama: 'John Doe 3',
          foto: require('../../assets/team-3.jpg'),
          jenis: 'Master Teacher Networking',
          pendidikan: 'Sarjana Komputer di STMIK AMIK BANDUNG',
          text: 'Efficiently unleash media information without cross-media value. Quickly maximize value timely deliverables schemas.',
        },
        {
          nama: 'John Doe 4',
          foto: require('../../assets/team-4.jpg'),
          jenis: 'Master Teacher Networking',
          pendidikan: 'Sarjana Komputer di STMIK AMIK BANDUNG',
          text: 'Efficiently unleash media information without cross-media value. Quickly maximize value timely deliverables schemas.',
        },
        {
          nama: 'John Doe',
          foto: require('../../assets/team-3.jpg'),
          jenis: 'Master Teacher Networking',
          pendidikan: 'Sarjana Komputer di STMIK AMIK BANDUNG',
          text: 'Efficiently unleash media information without cross-media value. Quickly maximize value timely deliverables schemas.',
        },
      ],
  })
}
</script>
