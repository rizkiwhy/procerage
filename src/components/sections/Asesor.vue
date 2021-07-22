<template>
  <section
    id="asesor"
    class="primary"
  >
    <v-row no-gutters>
      <v-col
        md="12"
      >
        <!-- <v-img
        > -->
          <!-- height="100vh" -->
          <!-- :src="require('../../assets/wave(21).svg')" -->
        <v-container class="py-16">
          <!-- <v-img class="d-none d-lg-block" :src="require('@/assets/001-drawkit-content-man-colour.svg')"/> -->
          <v-responsive
            class="d-flex align-center mx-auto"
            height="100%"
            max-width="1000"
            width="100%"
          >
          <h1 class="text-h4 font-weight-medium mb-16 text-center secondary--text">Asesor</h1>
          <v-row>
            <v-col cols="12" md="3" sm="6"
                v-for="(slide, i) in asesor" :index="i" :key="i"
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
                    :src="slide.foto"
                    :lazy-src="slide.foto"
                  ></v-img>
              <v-card-title class="text-h6 primary--text">{{slide.nama}}</v-card-title>
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
                    <div class="text-caption font-weight-medium">
                      {{slide.jenis}}
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
                    {{slide.pendidikan}}
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
                    Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.</div>
                    
                  </v-col>
                  </v-row>
                </v-card-text>
              </v-card>
            </template>
            </v-col>
          </v-row>

          <!-- <carousel-3d :height="430" :width="350" :border="1" :autoplay="true" :autoplay-timeout='3000'>

                    <slide v-for="(slide, i) in asesor" :index="i" :key="i">
                        <v-card
                      height="430"
                      width="350"
                      elevation="10"
                      class="senary"
                    >
                        <v-img
                          class="elevation-6"
                          height="250"
                          width="350"
                          alt=""
                          :src="slide.foto"
                        ></v-img>
                    <v-card-title class="primary--text">{{slide.nama}}</v-card-title>
                      <v-card-text>
                        <v-row
                          align="center"
                          class="mx-0"
                        >
                        <div class="text-subtitle-1">
                          <v-icon color="accent">mdi-teach</v-icon>
                          {{slide.jenis}}
                        </div>
                        </v-row>
                        <v-row
                          align="center"
                          class="mx-0"
                        >
                        <div class="text-caption">
                          <v-icon color="accent">mdi-school-outline</v-icon>
                          {{slide.pendidikan}}
                        </div>
                        </v-row>
                        <v-row
                          align="center"
                          class="mx-0"
                        >
                        <div class="text-caption">
                          <v-icon color="accent">mdi-comment-quote-outline</v-icon>
                          Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.</div>
                        </v-row>
                      </v-card-text>
                    </v-card>
                    </slide>
          </carousel-3d> -->
          </v-responsive>
        </v-container>
        <!-- </v-img> -->
      </v-col>
    </v-row>
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
        // {
        //   nama: 'John Doe',
        //   foto: require('../../assets/team-3.jpg'),
        //   jenis: 'Master Teacher Networking',
        //   pendidikan: 'Sarjana Komputer di STMIK AMIK BANDUNG',
        //   text: 'Efficiently unleash media information without cross-media value. Quickly maximize value timely deliverables schemas.',
        // },
      ],
  })
}
</script>