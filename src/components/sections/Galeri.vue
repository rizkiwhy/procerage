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
          <v-row justify="space-around" class="mt-10">
            <v-col :cols="slide.width ==='1/3'?'4':
                   slide.width === '2/3'?'8':'6'"
              v-for="(slide, i) in photos" :index="i" :key="i">
              <v-card :width="slide.width" height="150" >
                <v-img
                  :lazy-src="'http://localhost:3000/'+slide.image"
                  :width="slide.width" height="150"
                  :src="'http://localhost:3000/'+slide.image"
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
          </v-row>
          </v-responsive>
    </v-container>
  </section>
</template>
<script>
import axios from "axios";

  export default {
    data: () => ({
      url: "http://localhost:3000/api/v1",
      photos : [
        // {
        //   width: "776",
        //   foto: require('../../assets/ezgif.com-gif-maker.webp'),
        // },
        // {
        //   width: "379",
        //   foto: require('../../assets/ezgif.com-gif-maker.webp'),
        // },
        // {
        //   width: "379",
        //   foto: require('../../assets/ezgif.com-gif-maker.webp'),
        // },
        // {
        //   width: "379",
        //   foto: require('../../assets/ezgif.com-gif-maker.webp'),
        // },
        // {
        //   width: "379",
        //   foto: require('../../assets/ezgif.com-gif-maker.webp'),
        // },
        // {
        //   width: "568,5",
        //   foto: require('../../assets/ezgif.com-gif-maker.webp'),
        // },
        // {
        //   width: "568,5",
        //   foto: require('../../assets/ezgif.com-gif-maker.webp'),
        // },
      ],
    }),
    created() {
      this.initialize()
    },
    methods : {
      initialize() {
        axios.get(`${this.url}/all-photos`)
          .then((response) => {
            this.photos = response.data.data;
          })
          .catch((error) => {
            console.error(error);
          });
      }
    }
  }
</script>