<template>
  <section
    id="testimonial">
    <template>
  <v-parallax
    dark
    src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
  >

    <!-- <v-img
        class="fill-height bottom-gradient"> -->
    
        <!-- :src="require('../../assets/wave.svg')" -->
<!-- <v-row no-gutters>
      <v-col
        md="12"
      > -->
         <!-- <v-col cols="12" sm="12"> -->
        <v-container 
      class="mb-16"
        >
          <div class="text-center mt-16">
            <h1 class="text-h3 font-weight-medium text-center mb-4 secondary--text">Testimonial</h1>
          </div>
          <v-row>
            <v-col
              v-for="(testimonial, i) in testimonials"
              :key="i"
              cols="12"
              md="4"
            >
              <div
                class="pt-2"
              >
                <template>
                  <v-card
                    class="mx-auto"
                    color="accent"
                    dark
                    max-width="400"
                  >
                    <!-- <v-card-title>
                      <v-icon
                        large
                        left
                      >
                        mdi-twitter
                      </v-icon>
                      <span class="text-h6 font-weight-light">Twitter</span>
                    </v-card-title> -->

                    <v-card-text class="text-h5 font-weight-bold">
                      <sup>
                      <v-icon>mdi-format-quote-open-outline</v-icon>
                      </sup>
                      {{testimonial}}
                      <sup>
                      <v-icon>mdi-format-quote-close-outline</v-icon>
                      </sup>
                    </v-card-text>
                    <v-card-actions>
                      <v-list-item class="grow">
                        <v-list-item-avatar color="grey darken-3">
                          <v-img
                            class="elevation-6"
                            alt=""
                            src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                          ></v-img>
                        </v-list-item-avatar>

                        <v-list-item-content>
                          <v-list-item-title>Evan You</v-list-item-title>
                        </v-list-item-content>

                        <v-row
                          align="center"
                          justify="end"
                        >
                          <v-icon class="mr-1">
                            mdi-heart
                          </v-icon>
                          <span class="subheading mr-2">256</span>
                          <span class="mr-1">·</span>
                          <v-icon class="mr-1">
                            mdi-share-variant
                          </v-icon>
                          <span class="subheading">45</span>
                        </v-row>
                      </v-list-item>
                    </v-card-actions>
                  </v-card>
                </template>
              </div>
            </v-col>
          </v-row>
          <!-- <v-card class="px-2">
                <carousel-3d :height="280" :width="400" :border="1" :autoplay="true" :autoplay-timeout='3000'>

                    <slide v-for="(slide, i) in slides" :index="i" :key="i">
                        <img v-bind:src="slide.src" />
                    </slide>
                </carousel-3d>
          </v-card> -->
        </v-container>
        <!-- </v-col> -->
    <!-- </v-img> -->
  </v-parallax>
    </template>
  </section>
</template>
<script>
export default {
    data() {
        return {
            testimonials: [
                "Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well asdasd.",
                "Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well asdasd.",
                "Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well asdasd.",
            ],
            slides: [
                {src: require('../../assets/01.jpg')},
                {src: require('../../assets/02.jpg')},
                {src: require('../../assets/03.jpg')},
                {src: require('../../assets/04.jpg')},
                {src: require('../../assets/05.jpg')},
                {src: require('../../assets/06.jpg')},
            ]
        }
    }
}
</script>
<style>
.carousel-3d-slide {
    height: 100% !important;
}

</style>