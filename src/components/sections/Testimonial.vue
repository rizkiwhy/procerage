<template>
  <section
    id="testimonial"
    class="accent"
  >
    <v-row no-gutters>
      <v-col
        md="12"
      >
          <!-- :src="require('../../assets/wave(21).svg')" -->
        <v-container class="py-16">
          <!-- <v-img class="d-none d-lg-block" :src="require('@/assets/001-drawkit-content-man-colour.svg')"/> -->
          <v-responsive
            class="d-flex align-center mx-auto"
            height="100%"
            max-width="1185"
            width="100%"
          >
          <h1 class="text-h4 font-weight-medium mb-16 text-center secondary--text">Testimonial</h1>
          <carousel-3d :height="232" :width="350" :border="1" :autoplay="true" :autoplay-timeout='3000'>
            <slide v-for="(slide, i) in testimonials" :index="i" :key="i">
              <template>
                <v-card
                  class="mx-auto"
                  color="senary"
                  dark
                  max-width="400"
                >
                  <v-card-text class="text-overline font-weight-bold blue-grey--text">
                    <sup>
                    <v-icon color="accent">mdi-format-quote-open-outline</v-icon>
                    </sup>
                    {{slide}}
                    <sup>
                    <v-icon color="accent">mdi-format-quote-close-outline</v-icon>
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
                        <v-list-item-title class="accent--text">Evan You</v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-card-actions>
                </v-card>
              </template>
            </slide>
          </carousel-3d>
          <!-- <v-row>
            <v-col
              v-for="(testimonial, i) in testimonials"
              :key="i"
              cols="12"
              md="3"
            >
              <div
                class="pt-2"
              >
                <template>
                  <v-card
                    class="mx-auto"
                    color="senary"
                    dark
                    max-width="400"
                  >
                    <v-card-text class="text-overline font-weight-bold blue-grey--text">
                      <sup>
                      <v-icon color="accent">mdi-format-quote-open-outline</v-icon>
                      </sup>
                      {{testimonial}}
                      <sup>
                      <v-icon color="accent">mdi-format-quote-close-outline</v-icon>
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
                          <v-list-item-title class="accent--text">Evan You</v-list-item-title>
                        </v-list-item-content>
                      </v-list-item>
                    </v-card-actions>
                  </v-card>
                </template>
              </div>
            </v-col>
          </v-row> -->
          
          </v-responsive>
        </v-container>
      </v-col>
    </v-row>
  </section>
</template>
<script>
export default {
  data: () => ({
    testimonials: [
      "1Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well asdasd.",
      "2Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well asdasd.",
      "3Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well asdasd.",
      "4Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well asdasd.",
      "5Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well asdasd.",
      "6Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well asdasd.",
      "7Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well asdasd.",
      "8Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well asdasd.",
      "9Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well asdasd.",
      "10Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well asdasd.",
    ],
  })
}
</script>