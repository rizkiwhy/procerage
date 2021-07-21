<template>
  <section
    id="galeri">
    <v-container class="py-16">
          <v-responsive
            class="d-flex align-center mx-auto"
            height="100%"
            max-width="1000"
            width="100%"
          >
          <!-- <h1 class="text-h4 font-weight-medium mt-16 mb-10 text-center secondary--text">Tentang Kami</h1> -->

          <v-row justify="space-around" class="mt-10">
            <v-col :cols="slide.width ==='379'?'4':
                   slide.width === '776'?'8':'6'"
              v-for="(slide, i) in gambar" :index="i" :key="i">
              <v-card :width="slide.width" height="150" >
                <v-img
                  :lazy-src="slide.foto"
                  :width="slide.width" height="150"
                  :src="slide.foto"
                >
                  <template v-slot:placeholder>
                    <v-row
                      class="fill-height ma-0"
                      align="center"
                      justify="center"
                    >
                      <v-progress-circular
                        indeterminate
                        color="grey lighten-5"
                      ></v-progress-circular>
                    </v-row>
                  </template>
                </v-img>
              </v-card>
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
      gambar : [
        {
          width: "776",
          foto: require('../../assets/christina-wocintechchat-com-faEfWCdOKIg-unsplash.jpg'),
        },
        {
          width: "379",
          foto: require('../../assets/priscilla-du-preez-nNMBa7Y1Ymk-unsplash.jpg'),
        },
        {
          width: "379",
          foto: require('../../assets/redd-NKeg7ovhJpM-unsplash.jpg'),
        },
        {
          width: "379",
          foto: require('../../assets/redd-PTRzqc_h1r4-unsplash.jpg'),
        },
        {
          width: "379",
          foto: require('../../assets/avel-chuklanov-DUmFLtMeAbQ-unsplash.jpg'),
        },
        {
          width: "568,5",
          foto: require('../../assets/campaign-creators-gMsnXqILjp4-unsplash.jpg'),
        },
        {
          width: "568,5",
          foto: require('../../assets/charles-deluvio-rRWiVQzLm7k-unsplash.jpg'),
        },
      ],
    }),
  }
</script>