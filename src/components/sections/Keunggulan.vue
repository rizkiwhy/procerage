<template>
  <section
    id="keunggulan">
        <!-- gradient="to top, transparent, teal" -->
        <!-- :src="require('../../assets/wave(9).svg')" -->
        <!-- height="110vh" -->
    <v-img
        class="fill-height bottom-gradient">
        <!-- <div class="text-center mb-5"> -->
          <h1 class="text-h5 mb-4 mt-16 text-center font-weight-bold text-uppercase teal--text">Keunggulan</h1>

          <!-- <h1 class="text-uppercase text-h5 font-weight-bold mt-16 mb-2 white--text text-center">Keunggulan</h1> -->
        <!-- </div> -->
        <v-container class="my-10">
          <v-row>
            <v-col
              v-for="(feature, i) in features"
              :key="i"
              cols="12"
              md="6"
            >
              <div
                class="pt-2"
              >
                <template>
                  <v-card
                    class="mx-auto"
                    color="quaternary"
                    outlined
                    shaped
                    max-width="500"
                  >
                    <v-list-item three-line>
                      <v-list-item-avatar>
                        <v-btn
                          color="secondary"
                          fab
                          dark
                          small
                          bottom
                          left
                        >
                          <v-icon>{{feature.icon}}</v-icon>
                        </v-btn>
                      </v-list-item-avatar>
                      <v-list-item-content>
                        <!-- <div class="text-overline mb-4">
                          OVERLINE
                        </div> -->
                        <v-list-item-title class="text-subtitle-1 mb-1 accent--text">
                          {{feature.title}}
                        </v-list-item-title>
                        <!-- <v-list-item-subtitle> -->
                          <span class="text-caption grey--text">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis illum veniam cum dolores ratione commodi beatae quas maxime, laboriosam excepturi solut! 
                          </span>
                        <!-- </v-list-item-subtitle> -->
                      </v-list-item-content>

                    </v-list-item>

                    <!-- <v-card-actions>
                      <v-btn
                        outlined
                        rounded
                        text
                      >
                        Button
                      </v-btn>
                    </v-card-actions> -->
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
