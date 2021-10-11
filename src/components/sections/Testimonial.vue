<template>
  <section
    id="testimonial"
    class="accent"
  >
    <v-row no-gutters>
      <v-col
        md="12"
      >
        <v-container class="py-16 px-8">
          <v-responsive
            class="d-flex align-center mx-auto"
            height="100%"
            width="100%"
          >
          <h1 class="text-h4 font-weight-medium mb-16 text-center secondary--text">Testimonial</h1>
          <carousel-3d :height="246" :width="350" :border="1" :autoplay="true" :autoplay-timeout='2000' :count="testimonials.length">
            <slide v-for="(slide, i) in testimonials" :index="i" :key="slide._id" class="primary">
              <template>
                <v-card
                  class="mx-auto mt-3"
                  color="senary"
                  dark
                  max-width="400"
                  width="100%"
                >
                  <v-card-text class="text-subtitle-1 blue-grey--text text-justify">
                    <sup>
                    <v-icon color="accent">mdi-format-quote-open-outline</v-icon>
                    </sup>
                    <span class="ma-1">
                    {{slide.testimonial}}
                    </span>
                    <sup>
                    <v-icon color="accent">mdi-format-quote-close-outline</v-icon>
                    </sup>
                  </v-card-text>
                  <v-card-actions>
                    <v-list-item class="grow">
                      <v-list-item-avatar>
                        <v-img
                          class="elevation-6"
                          alt=""
                          :src="'http://103.148.113.86:18081/'+slide.image"
                        ></v-img>
                      </v-list-item-avatar>

                      <v-list-item-content>
                        <v-list-item-title class="accent--text">{{slide.name}}</v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-card-actions>
                </v-card>
              </template>
            </slide>
          </carousel-3d>
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
    url: "http://103.148.113.86:18081/api/v1",
    testimonials: [
      // "1Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well asdasd.",
      // "2Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well asdasd.",
      // "3Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well asdasd.",
      // "4Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well asdasd.",
      // "5Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well asdasd.",
      // "6Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well asdasd.",
      // "7Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well asdasd.",
      // "8Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well asdasd.",
      // "9Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well asdasd.",
      // "10Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well asdasd.",
    ],
  }),
  created() {
    this.initialize()
  },
  methods : {
    async initialize() {
      await axios.get(`${this.url}/all-testimonials`)
        .then((response) => {
          this.testimonials = response.data.data
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }
}
</script>