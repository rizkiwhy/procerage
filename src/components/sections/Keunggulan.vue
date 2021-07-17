<template>
  <section
    id="keunggulan"
    class="senary"
  >
    <v-row no-gutters>
      <v-col
        md="12"
      >
        <!-- <v-img
          height="100vh"
        > -->
          <!-- :src="require('../../assets/wave(21).svg')" -->
        <v-container class="px-8 py-12">
          <!-- <v-img class="d-none d-lg-block" :src="require('@/assets/001-drawkit-content-man-colour.svg')"/> -->
          <v-responsive
            class="d-flex align-center mx-auto"
            height="100%"
            max-width="1185"
            width="100%"
          >
          <h1 class="text-h4 font-weight-medium mb-16 text-center primary--text">Keunggulan</h1>
          <v-row>
            <v-col
              v-for="(feature, i) in features"
              :key="i"
              cols="12"
              md="4"
              sm="6"
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
                          color="accent"
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
                        <v-list-item-title class="text-subtitle-1 mb-1 primary--text">
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
            </v-col>
          </v-row>
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
