<template>
  <section
    id="keunggulan">
        <!-- :src="require('../../assets/wave(9).svg')" -->
        <!-- height="110vh" -->
        <!-- gradient="to top, secondary, secondary" -->
         <!-- <template>
  <v-parallax
    dark
    src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
  > -->
    <v-img
        class="fill-height primary">
        <!-- <div class="text-center mb-5"> -->
          <!-- <h1 class="text-h5 mb-4 mt-16 text-center font-weight-bold text-uppercase primary--text">Keunggulan</h1> -->
        <div class="text-center mt-16">
          <h1 class="text-h3 font-weight-medium text-center mb-4 secondary--text">Keunggulan</h1>
        </div>
          <!-- <h1 class="text-uppercase text-h5 font-weight-bold mt-16 mb-2 white--text text-center">Keunggulan</h1> -->
        <!-- </div> -->
        <v-container class="my-10">
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

                    <v-card-text class="text-h5 font-weight-bold white--text">
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
        </v-container>
    </v-img>
    
  </section>
</template>

<script>
  export default {

    data: () => ({
      testimonials: [
                "Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well asdasd.",
                "Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well asdasd.",
                "Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well asdasd.",
            ],
      features: [
        {
          title: 'Pixel Perfect Design',
          icon: 'mdi-fountain-pen-tip',
        },
        {
          title: 'Retina Ready',
          icon: 'mdi-cellphone',
        },
        {
          color: 'primary',
          dark: true,
          title: 'Easily Customizable',
          icon: 'mdi-pencil-box-outline',
        },
        {
          title: 'Image Parallax',
          icon: 'mdi-image-size-select-actual',
        },
        {
          title: 'Seo Optimized',
          icon: 'mdi-ice-pop',
        },
        {
          title: '24/7 Support',
          icon: 'mdi-help-circle-outline',
        },
      ],
    }),
  }
</script>
